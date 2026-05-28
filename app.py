import json
import hashlib
import os
import secrets
import sqlite3
import time
from pathlib import Path

from flask import Flask, jsonify, request, send_from_directory, session
from werkzeug.security import check_password_hash, generate_password_hash
from werkzeug.utils import secure_filename


BASE_DIR = Path(__file__).resolve().parent
INSTANCE_DIR = Path(os.getenv("INSTANCE_DIR", BASE_DIR / "instance"))
DB_PATH = Path(os.getenv("DATABASE_PATH", INSTANCE_DIR / "lets_cook.sqlite"))
UPLOAD_DIR = Path(os.getenv("UPLOAD_DIR", INSTANCE_DIR / "uploads"))
PHOTO_DIR = UPLOAD_DIR / "photos"
VIDEO_DIR = UPLOAD_DIR / "videos"

ALLOWED_IMAGE_EXTENSIONS = {"png", "jpg", "jpeg", "gif", "webp"}
ALLOWED_VIDEO_EXTENSIONS = {"mp4", "mov", "m4v", "webm"}

app = Flask(__name__, static_folder=None)
app.secret_key = os.getenv("SECRET_KEY", "dev-lets-cook-change-me")
app.config["MAX_CONTENT_LENGTH"] = int(os.getenv("MAX_UPLOAD_MB", "250")) * 1024 * 1024
AUTH_PROVIDER = os.getenv("BRENT_AUTH_PROVIDER", "local")


def db():
    INSTANCE_DIR.mkdir(parents=True, exist_ok=True)
    PHOTO_DIR.mkdir(parents=True, exist_ok=True)
    VIDEO_DIR.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    with db() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT NOT NULL UNIQUE,
                password_hash TEXT NOT NULL,
                display_name TEXT NOT NULL,
                profile_pic TEXT DEFAULT '',
                brent_account_id TEXT DEFAULT '',
                auth_provider TEXT DEFAULT 'local',
                created_at INTEGER NOT NULL
            )
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS user_state (
                user_id INTEGER PRIMARY KEY,
                saved_json TEXT NOT NULL DEFAULT '[]',
                planned_json TEXT NOT NULL DEFAULT '[]',
                lesson_progress_json TEXT NOT NULL DEFAULT '{}',
                updated_at INTEGER NOT NULL,
                FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
            )
            """
        )
        existing_columns = {
            row["name"] for row in conn.execute("PRAGMA table_info(users)").fetchall()
        }
        for column, definition in {
            "brent_account_id": "TEXT DEFAULT ''",
            "auth_provider": "TEXT DEFAULT 'local'",
        }.items():
            if column not in existing_columns:
                conn.execute(f"ALTER TABLE users ADD COLUMN {column} {definition}")
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS food_videos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL,
                recipe_id TEXT NOT NULL,
                recipe_title TEXT NOT NULL,
                title TEXT NOT NULL,
                youtube_url TEXT DEFAULT '',
                video_filename TEXT DEFAULT '',
                created_at INTEGER NOT NULL,
                FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
            )
            """
        )


@app.before_request
def ensure_database():
    init_db()


def allowed_file(filename, allowed):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in allowed


def save_upload(file_storage, allowed, folder, prefix):
    if not file_storage or not file_storage.filename:
        return ""
    if not allowed_file(file_storage.filename, allowed):
        raise ValueError("That file type is not supported.")
    original = secure_filename(file_storage.filename)
    ext = original.rsplit(".", 1)[1].lower()
    filename = f"{prefix}-{secrets.token_hex(12)}.{ext}"
    file_storage.save(folder / filename)
    return f"/uploads/{folder.name}/{filename}"


def brent_account_id(email):
    normalized = (email or "").strip().lower()
    digest = hashlib.sha256(normalized.encode("utf-8")).hexdigest()[:24]
    return f"brent-local-{digest}"


def current_user():
    user_id = session.get("user_id")
    if not user_id:
        return None
    with db() as conn:
        return conn.execute("SELECT * FROM users WHERE id = ?", (user_id,)).fetchone()


def public_user(row):
    if not row:
        return None
    return {
        "id": row["id"],
        "email": row["email"],
        "displayName": row["display_name"],
        "profilePic": row["profile_pic"] or "assets/logo.png",
        "brentAccountId": row["brent_account_id"] or brent_account_id(row["email"]),
        "authProvider": row["auth_provider"] or AUTH_PROVIDER,
    }


def ensure_state(conn, user_id):
    row = conn.execute("SELECT * FROM user_state WHERE user_id = ?", (user_id,)).fetchone()
    if row:
        return row
    conn.execute(
        "INSERT INTO user_state (user_id, saved_json, planned_json, lesson_progress_json, updated_at) VALUES (?, '[]', '[]', '{}', ?)",
        (user_id, int(time.time())),
    )
    return conn.execute("SELECT * FROM user_state WHERE user_id = ?", (user_id,)).fetchone()


def load_state(user):
    if not user:
        return {
            "authenticated": False,
            "user": None,
            "saved": [],
            "planned": [],
            "lessonProgress": {},
            "submissions": [],
        }
    with db() as conn:
        state = ensure_state(conn, user["id"])
        videos = conn.execute(
            "SELECT * FROM food_videos WHERE user_id = ? ORDER BY created_at DESC",
            (user["id"],),
        ).fetchall()
    return {
        "authenticated": True,
        "user": public_user(user),
        "saved": json.loads(state["saved_json"] or "[]"),
        "planned": json.loads(state["planned_json"] or "[]"),
        "lessonProgress": json.loads(state["lesson_progress_json"] or "{}"),
        "submissions": [
            {
                "id": str(row["id"]),
                "recipeId": row["recipe_id"],
                "recipeTitle": row["recipe_title"],
                "title": row["title"],
                "url": row["youtube_url"],
                "videoUrl": row["video_filename"],
                "type": "YouTube link" if row["youtube_url"] else "Uploaded video",
            }
            for row in videos
        ],
    }


@app.get("/api/lets-cook/state")
def api_state():
    return jsonify(load_state(current_user()))


@app.post("/api/lets-cook/signup")
def api_signup():
    payload = request.get_json(silent=True) or {}
    email = (payload.get("email") or "").strip().lower()
    password = payload.get("password") or ""
    display_name = (payload.get("displayName") or "").strip() or "Home Cook"
    if not email or len(password) < 8:
        return jsonify({"error": "Email and an 8-character password are required."}), 400
    with db() as conn:
        try:
            cursor = conn.execute(
                """
                INSERT INTO users (email, password_hash, display_name, brent_account_id, auth_provider, created_at)
                VALUES (?, ?, ?, ?, ?, ?)
                """,
                (email, generate_password_hash(password), display_name, brent_account_id(email), AUTH_PROVIDER, int(time.time())),
            )
        except sqlite3.IntegrityError:
            return jsonify({"error": "That email already has a Let's Cook account."}), 409
        session.clear()
        session["user_id"] = cursor.lastrowid
        user = conn.execute("SELECT * FROM users WHERE id = ?", (cursor.lastrowid,)).fetchone()
        ensure_state(conn, user["id"])
    return jsonify(load_state(user))


@app.post("/api/lets-cook/login")
def api_login():
    payload = request.get_json(silent=True) or {}
    email = (payload.get("email") or "").strip().lower()
    password = payload.get("password") or ""
    with db() as conn:
        user = conn.execute("SELECT * FROM users WHERE email = ?", (email,)).fetchone()
    if not user or not check_password_hash(user["password_hash"], password):
        return jsonify({"error": "Email or password did not match."}), 401
    session.clear()
    session["user_id"] = user["id"]
    with db() as conn:
        conn.execute(
            "UPDATE users SET brent_account_id = COALESCE(NULLIF(brent_account_id, ''), ?), auth_provider = COALESCE(NULLIF(auth_provider, ''), ?) WHERE id = ?",
            (brent_account_id(user["email"]), AUTH_PROVIDER, user["id"]),
        )
        user = conn.execute("SELECT * FROM users WHERE id = ?", (user["id"],)).fetchone()
    return jsonify(load_state(user))


@app.post("/api/lets-cook/logout")
def api_logout():
    session.clear()
    return jsonify(load_state(None))


@app.post("/api/lets-cook/profile")
def api_profile():
    user = current_user()
    if not user:
        return jsonify({"error": "Please log in to update your profile."}), 401
    payload = request.get_json(silent=True) or {}
    display_name = (payload.get("displayName") or "").strip() or user["display_name"]
    with db() as conn:
        conn.execute("UPDATE users SET display_name = ? WHERE id = ?", (display_name, user["id"]))
        user = conn.execute("SELECT * FROM users WHERE id = ?", (user["id"],)).fetchone()
    return jsonify(load_state(user))


@app.post("/api/lets-cook/profile-photo")
def api_profile_photo():
    user = current_user()
    if not user:
        return jsonify({"error": "Please log in before uploading a profile picture."}), 401
    try:
        profile_pic = save_upload(request.files.get("photo"), ALLOWED_IMAGE_EXTENSIONS, PHOTO_DIR, "profile")
    except ValueError as exc:
        return jsonify({"error": str(exc)}), 400
    if not profile_pic:
        return jsonify({"error": "Choose a profile picture to upload."}), 400
    with db() as conn:
        conn.execute("UPDATE users SET profile_pic = ? WHERE id = ?", (profile_pic, user["id"]))
        user = conn.execute("SELECT * FROM users WHERE id = ?", (user["id"],)).fetchone()
    return jsonify(load_state(user))


@app.post("/api/lets-cook/state")
def api_save_state():
    user = current_user()
    if not user:
        return jsonify({"error": "Please log in to save recipes and lesson progress."}), 401
    payload = request.get_json(silent=True) or {}
    with db() as conn:
        ensure_state(conn, user["id"])
        conn.execute(
            """
            UPDATE user_state
            SET saved_json = ?, planned_json = ?, lesson_progress_json = ?, updated_at = ?
            WHERE user_id = ?
            """,
            (
                json.dumps(payload.get("saved", [])),
                json.dumps(payload.get("planned", [])),
                json.dumps(payload.get("lessonProgress", {})),
                int(time.time()),
                user["id"],
            ),
        )
    return jsonify(load_state(user))


@app.post("/api/lets-cook/food-videos")
def api_food_video():
    user = current_user()
    if not user:
        return jsonify({"error": "Please log in before uploading food videos."}), 401
    recipe_id = request.form.get("recipeId", "").strip()
    recipe_title = request.form.get("recipeTitle", "").strip() or "Recipe"
    title = request.form.get("title", "").strip() or "Cook video"
    youtube_url = request.form.get("url", "").strip()
    try:
        video_filename = save_upload(request.files.get("file"), ALLOWED_VIDEO_EXTENSIONS, VIDEO_DIR, "food-video")
    except ValueError as exc:
        return jsonify({"error": str(exc)}), 400
    if not youtube_url and not video_filename:
        return jsonify({"error": "Add a YouTube link or choose a video file."}), 400
    with db() as conn:
        conn.execute(
            """
            INSERT INTO food_videos (user_id, recipe_id, recipe_title, title, youtube_url, video_filename, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            """,
            (user["id"], recipe_id, recipe_title, title, youtube_url, video_filename, int(time.time())),
        )
    return jsonify(load_state(user))


@app.get("/")
def index():
    return send_from_directory(BASE_DIR, "index.html")


@app.get("/uploads/<path:path>")
def uploaded_file(path):
    return send_from_directory(UPLOAD_DIR, path)


@app.get("/<path:path>")
def static_file(path):
    return send_from_directory(BASE_DIR, path)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", "5000")))
