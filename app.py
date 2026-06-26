import json
import hashlib
import base64
import binascii
import hmac
import json
import os
import re
import secrets
import sqlite3
import time
from html import escape
from pathlib import Path
from urllib.parse import urlencode

from flask import Flask, abort, jsonify, redirect, request, send_from_directory, session
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
app.config["SESSION_COOKIE_HTTPONLY"] = True
app.config["SESSION_COOKIE_SAMESITE"] = os.getenv("SESSION_COOKIE_SAMESITE", "Lax")
app.config["SESSION_COOKIE_SECURE"] = os.getenv("SESSION_COOKIE_SECURE", "1").strip().lower() in {"1", "true", "yes", "on"}
AUTH_PROVIDER = os.getenv("BRENT_AUTH_PROVIDER", "local")
OWNER_AUTH_PROVIDER = os.getenv("BRENT_OWNER_AUTH_PROVIDER", "brent-core")
OWNER_INITIAL_PASSWORD = os.getenv("BRENT_OWNER_INITIAL_PASSWORD", "")
GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID", "")
GOOGLE_CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET", "")
APPLE_CLIENT_ID = os.getenv("APPLE_CLIENT_ID", "")
APPLE_TEAM_ID = os.getenv("APPLE_TEAM_ID", "")
APPLE_KEY_ID = os.getenv("APPLE_KEY_ID", "")
APPLE_PRIVATE_KEY = os.getenv("APPLE_PRIVATE_KEY", "")
FACEBOOK_CLIENT_ID = os.getenv("FACEBOOK_CLIENT_ID", "")
FACEBOOK_CLIENT_SECRET = os.getenv("FACEBOOK_CLIENT_SECRET", "")
SSO_SHARED_SECRET = os.getenv("SSO_SHARED_SECRET", "dev-sso-change-me")
BRENT_SSO_URL = os.getenv("BRENT_SSO_URL", "https://www.brentandco.org/sso/start")
DEBUG_SSO = os.getenv("DEBUG_SSO", "").strip().lower() in {"1", "true", "yes", "on"}
LETS_COOK_URL = os.getenv("LETS_COOK_URL", "https://letscookyall.com/")
FOUNDER_PROFILES = [
    {
        "email": os.getenv("BRENT_OWNER_EMAIL", "shalanda.brent@gmail.com").strip().lower(),
        "full_name": os.getenv("BRENT_OWNER_FULL_NAME", "Shalanda Brent"),
        "display_name": os.getenv("BRENT_OWNER_DISPLAY_NAME", "Shay"),
    },
]
REMOVED_FOUNDER_ACCOUNT_IDS = {
    "brent-local-5d8164cc79cd29c886ce672de9ce801e5583e968504d3390524812cc204b37be",
}
REMOVED_FOUNDER_EMAILS = {
    email.strip().lower()
    for email in os.getenv("BRENT_REMOVED_FOUNDER_EMAILS", "").split(",")
    if email.strip()
}


def db():
    INSTANCE_DIR.mkdir(parents=True, exist_ok=True)
    PHOTO_DIR.mkdir(parents=True, exist_ok=True)
    VIDEO_DIR.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def log_sso_debug(event, app_name="lets-cook", callback_url=""):
    if not DEBUG_SSO:
        return
    app.logger.info(
        "SSO %s app=%s BRENT_SSO_URL=%s SSO_SHARED_SECRET_PRESENT=%s callback=%s",
        event,
        app_name,
        BRENT_SSO_URL,
        bool(SSO_SHARED_SECRET),
        callback_url,
    )


def init_db():
    with db() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT NOT NULL UNIQUE,
                password_hash TEXT NOT NULL,
                first_name TEXT DEFAULT '',
                last_name TEXT DEFAULT '',
                full_name TEXT DEFAULT '',
                display_name TEXT NOT NULL,
                username TEXT DEFAULT '',
                avatar_url TEXT DEFAULT '',
                bio TEXT DEFAULT '',
                city TEXT DEFAULT '',
                state TEXT DEFAULT '',
                country TEXT DEFAULT '',
                profile_pic TEXT DEFAULT '',
                role TEXT DEFAULT 'user',
                account_type TEXT DEFAULT 'Home Cook',
                phone TEXT DEFAULT '',
                brent_account_id TEXT DEFAULT '',
                provider TEXT DEFAULT 'local',
                provider_id TEXT DEFAULT '',
                auth_provider TEXT DEFAULT 'local',
                authentication_provider TEXT DEFAULT 'local',
                oauth_subject TEXT DEFAULT '',
                profile_photo TEXT DEFAULT '',
                is_admin INTEGER DEFAULT 0,
                is_founder INTEGER DEFAULT 0,
                is_verified INTEGER DEFAULT 0,
                created_at INTEGER NOT NULL,
                last_login_at INTEGER DEFAULT 0,
                updated_at INTEGER DEFAULT 0
            )
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS profiles (
                user_id INTEGER PRIMARY KEY,
                profile_completion_percentage INTEGER DEFAULT 0,
                profile_visibility TEXT DEFAULT 'public',
                social_links TEXT DEFAULT '{}',
                interests TEXT DEFAULT '',
                settings_json TEXT DEFAULT '{}',
                created_at INTEGER NOT NULL,
                updated_at INTEGER NOT NULL,
                FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
            )
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS app_memberships (
                user_id INTEGER NOT NULL,
                app_name TEXT NOT NULL,
                role TEXT DEFAULT 'user',
                joined_at INTEGER NOT NULL,
                PRIMARY KEY(user_id, app_name),
                FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
            )
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS onboarding_events (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER,
                session_id TEXT DEFAULT '',
                event_name TEXT NOT NULL,
                app_name TEXT DEFAULT 'lets-cook',
                metadata_json TEXT DEFAULT '{}',
                created_at INTEGER NOT NULL,
                FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE SET NULL
            )
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS cook_profiles (
                user_id INTEGER PRIMARY KEY,
                skill_level TEXT DEFAULT '',
                cooking_interests TEXT DEFAULT '',
                settings_json TEXT DEFAULT '{}',
                created_at INTEGER NOT NULL,
                updated_at INTEGER NOT NULL,
                FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
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
            "first_name": "TEXT DEFAULT ''",
            "last_name": "TEXT DEFAULT ''",
            "full_name": "TEXT DEFAULT ''",
            "username": "TEXT DEFAULT ''",
            "avatar_url": "TEXT DEFAULT ''",
            "bio": "TEXT DEFAULT ''",
            "city": "TEXT DEFAULT ''",
            "state": "TEXT DEFAULT ''",
            "country": "TEXT DEFAULT ''",
            "role": "TEXT DEFAULT 'user'",
            "account_type": "TEXT DEFAULT 'Home Cook'",
            "phone": "TEXT DEFAULT ''",
            "brent_account_id": "TEXT DEFAULT ''",
            "provider": "TEXT DEFAULT 'local'",
            "provider_id": "TEXT DEFAULT ''",
            "auth_provider": "TEXT DEFAULT 'local'",
            "authentication_provider": "TEXT DEFAULT 'local'",
            "oauth_subject": "TEXT DEFAULT ''",
            "profile_photo": "TEXT DEFAULT ''",
            "is_admin": "INTEGER DEFAULT 0",
            "is_founder": "INTEGER DEFAULT 0",
            "is_verified": "INTEGER DEFAULT 0",
            "last_login_at": "INTEGER DEFAULT 0",
            "updated_at": "INTEGER DEFAULT 0",
        }.items():
            if column not in existing_columns:
                conn.execute(f"ALTER TABLE users ADD COLUMN {column} {definition}")
        for row in conn.execute("SELECT id FROM users WHERE username = '' OR username IS NULL OR brent_account_id = '' OR brent_account_id IS NULL").fetchall():
            ensure_user_identity(conn, row["id"])
        profile_columns = {
            row["name"] for row in conn.execute("PRAGMA table_info(profiles)").fetchall()
        }
        for column, definition in {
            "profile_completion_percentage": "INTEGER DEFAULT 0",
            "profile_visibility": "TEXT DEFAULT 'public'",
            "social_links": "TEXT DEFAULT '{}'",
            "interests": "TEXT DEFAULT ''",
            "settings_json": "TEXT DEFAULT '{}'",
            "created_at": "INTEGER DEFAULT 0",
            "updated_at": "INTEGER DEFAULT 0",
        }.items():
            if column not in profile_columns:
                conn.execute(f"ALTER TABLE profiles ADD COLUMN {column} {definition}")
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
        conn.execute("UPDATE users SET role = 'user' WHERE role IS NULL OR role = ''")


@app.before_request
def ensure_database():
    init_db()
    seed_founder_profile()


@app.get("/sso/login")
def sso_login():
    next_path = request.args.get("next") or "/#account"
    query = urlencode({"app": "lets-cook", "next": next_path})
    log_sso_debug("login_redirect", callback_url=f"{request.url_root.rstrip('/')}/sso/consume")
    return redirect(f"{BRENT_SSO_URL}?{query}")


@app.get("/sso/callback")
@app.get("/sso/consume")
def sso_consume():
    log_sso_debug("consume", callback_url=f"{request.url_root.rstrip('/')}/sso/consume")
    payload = verify_sso_token(request.args.get("token", ""))
    if not payload:
        return sso_error_page("That Brent & Co sign-in link expired or could not be verified. Please start sign-in again."), 400
    user = upsert_sso_user(payload)
    session.clear()
    session["user_id"] = user["id"]
    return redirect(request.args.get("next") or "/#account")


def sso_error_page(message):
    retry_url = "/sso/login?next=%2F%23account"
    safe_message = escape(message)
    return f"""
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Brent & Co Sign In</title>
        <style>
          body {{
            margin: 0;
            min-height: 100vh;
            display: grid;
            place-items: center;
            background: #f7f2e9;
            color: #232323;
            font-family: Inter, Arial, sans-serif;
          }}
          main {{
            width: min(92vw, 520px);
            background: #fff;
            border: 1px solid #e7d8bf;
            border-radius: 24px;
            box-shadow: 0 24px 70px rgba(43, 26, 18, 0.14);
            padding: 32px;
            text-align: center;
          }}
          h1 {{
            margin: 0 0 12px;
            font-size: clamp(1.8rem, 5vw, 2.5rem);
          }}
          p {{
            margin: 0 auto 24px;
            color: #5f4a3f;
            line-height: 1.6;
          }}
          a {{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 48px;
            padding: 0 22px;
            border-radius: 999px;
            background: #d9a441;
            color: #232323;
            font-weight: 800;
            text-decoration: none;
          }}
        </style>
      </head>
      <body>
        <main>
          <h1>Sign-in link expired</h1>
          <p>{safe_message}</p>
          <a href="{retry_url}">Start sign in again</a>
        </main>
      </body>
    </html>
    """


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


ONBOARDING_STEPS = [
    ("landing_page_view", "Landing Page Views"),
    ("signup_click", "Signup Clicks"),
    ("account_created", "Account Created"),
    ("profile_started", "Profile Started"),
    ("profile_completed", "Profile Completed"),
    ("first_action_taken", "First Action Taken"),
]


def analytics_session_id():
    if "analytics_session_id" not in session:
        session["analytics_session_id"] = secrets.token_urlsafe(16)
    return session["analytics_session_id"]


def track_onboarding_event(event_name, user_id=None, metadata=None, conn=None):
    def insert_event(active_conn):
        active_conn.execute(
            """
            INSERT INTO onboarding_events (user_id, session_id, event_name, app_name, metadata_json, created_at)
            VALUES (?, ?, ?, 'lets-cook', ?, ?)
            """,
            (user_id, analytics_session_id(), event_name, json.dumps(metadata or {}), int(time.time())),
        )

    if conn is not None:
        insert_event(conn)
    else:
        with db() as event_conn:
            insert_event(event_conn)


def profile_completion_score(conn, user_id):
    user = conn.execute("SELECT * FROM users WHERE id = ?", (user_id,)).fetchone()
    if not user:
        return 0
    uploads = conn.execute("SELECT COUNT(*) FROM food_videos WHERE user_id = ?", (user_id,)).fetchone()[0]
    checks = [
        (15, bool(user["profile_pic"] or user["avatar_url"] or user["profile_photo"])),
        (15, bool(user["bio"])),
        (10, bool(user["city"] and user["state"])),
        (10, bool(user["account_type"] or user["role"])),
        (10, False),
        (20, bool(uploads)),
        (20, bool(user["username"] or user["country"] or user["phone"])),
    ]
    return min(sum(weight for weight, done in checks if done), 100)


def funnel_metrics(conn, app_name="lets-cook"):
    rows = conn.execute(
        """
        SELECT event_name, COUNT(DISTINCT COALESCE(CAST(user_id AS TEXT), session_id)) AS total
        FROM onboarding_events
        WHERE app_name = ?
        GROUP BY event_name
        """,
        (app_name,),
    ).fetchall()
    counts = {row["event_name"]: int(row["total"] or 0) for row in rows}
    previous = None
    metrics = []
    for event_name, label in ONBOARDING_STEPS:
        total = counts.get(event_name, 0)
        conversion = 100 if previous in (None, 0) else round((total / previous) * 100)
        dropoff = 0 if previous in (None, 0) else max(previous - total, 0)
        metrics.append({"event": event_name, "label": label, "total": total, "conversion": conversion, "dropoff": dropoff})
        previous = total
    return metrics


def username_slug(value, fallback="cook"):
    base = re.sub(r"[^a-z0-9]+", "-", (value or "").strip().lower()).strip("-")
    return base or fallback


def unique_username(conn, preferred, email="", user_id=None):
    base = username_slug(preferred or (email or "").split("@")[0], "cook")
    candidate = base
    suffix = 2
    while True:
        params = [candidate]
        sql = "SELECT id FROM users WHERE lower(username) = lower(?)"
        if user_id:
            sql += " AND id != ?"
            params.append(user_id)
        row = conn.execute(sql, params).fetchone()
        if not row:
            return candidate
        candidate = f"{base}-{suffix}"
        suffix += 1


def ensure_user_identity(conn, user_id):
    user = conn.execute("SELECT * FROM users WHERE id = ?", (user_id,)).fetchone()
    if not user:
        return
    username = user["username"] or unique_username(
        conn,
        user["display_name"] or user["full_name"],
        user["email"],
        user_id,
    )
    conn.execute(
        """
        UPDATE users
        SET username = ?, brent_account_id = COALESCE(NULLIF(brent_account_id, ''), ?),
            auth_provider = COALESCE(NULLIF(auth_provider, ''), ?),
            authentication_provider = COALESCE(NULLIF(authentication_provider, ''), ?),
            provider = COALESCE(NULLIF(provider, ''), ?),
            profile_photo = COALESCE(NULLIF(profile_photo, ''), profile_pic, avatar_url, ''),
            updated_at = ?
        WHERE id = ?
        """,
        (username, brent_account_id(user["email"]), AUTH_PROVIDER, AUTH_PROVIDER, AUTH_PROVIDER, int(time.time()), user_id),
    )


def sso_b64decode(value):
    padding = "=" * (-len(value) % 4)
    return base64.urlsafe_b64decode((value + padding).encode("utf-8"))


def verify_sso_token(token):
    try:
        body, signature = token.split(".", 1)
        expected = hmac.new(
            SSO_SHARED_SECRET.encode("utf-8"),
            body.encode("utf-8"),
            hashlib.sha256,
        ).digest()
        if not hmac.compare_digest(sso_b64decode(signature), expected):
            return None
        payload = json.loads(sso_b64decode(body).decode("utf-8"))
    except (ValueError, json.JSONDecodeError, TypeError, binascii.Error):
        return None
    if payload.get("aud") != "lets-cook" or int(payload.get("exp", 0)) < int(time.time()):
        return None
    return payload


def ensure_cook_profile(conn, user_id):
    ensure_user_identity(conn, user_id)
    now = int(time.time())
    conn.execute(
        """
        INSERT OR IGNORE INTO cook_profiles (user_id, created_at, updated_at)
        VALUES (?, ?, ?)
        """,
        (user_id, now, now),
    )
    user = conn.execute("SELECT * FROM users WHERE id = ?", (user_id,)).fetchone()
    if user:
        public = public_user(user)
        completion = profile_completion_score(conn, user_id)
        interests = ", ".join(
            item
            for item in [
                user["role"] or "",
                user["account_type"] or "",
                public.get("city") or "",
            ]
            if item
        )
        conn.execute(
            """
            INSERT INTO profiles (
                user_id, profile_completion_percentage, profile_visibility,
                social_links, interests, created_at, updated_at
            )
            VALUES (?, ?, 'public', '{}', ?, ?, ?)
            ON CONFLICT(user_id) DO UPDATE SET
                profile_completion_percentage = excluded.profile_completion_percentage,
                interests = excluded.interests,
                updated_at = excluded.updated_at
            """,
            (user_id, completion, interests, now, now),
        )
        conn.execute(
            """
            INSERT OR IGNORE INTO app_memberships (user_id, app_name, role, joined_at)
            VALUES (?, 'lets-cook', ?, ?)
            """,
            (user_id, user["role"] or "user", now),
        )
    ensure_state(conn, user_id)


def upsert_sso_user(payload):
    email = (payload.get("email") or "").strip().lower()
    if not email:
        raise ValueError("Brent SSO did not include an email address.")
    display_name = (payload.get("display_name") or "").strip() or email.split("@")[0]
    profile_photo = (payload.get("profile_photo") or "").strip()
    provider = (payload.get("authentication_provider") or "brent-sso").strip()
    now = int(time.time())
    with db() as conn:
        row = conn.execute("SELECT * FROM users WHERE lower(email) = lower(?)", (email,)).fetchone()
        if row:
            conn.execute(
                """
                UPDATE users
                SET full_name = COALESCE(NULLIF(full_name, ''), ?),
                    display_name = COALESCE(NULLIF(display_name, ''), ?),
                    avatar_url = COALESCE(NULLIF(avatar_url, ''), ?),
                    profile_photo = COALESCE(NULLIF(profile_photo, ''), ?),
                    brent_account_id = COALESCE(NULLIF(brent_account_id, ''), ?),
                    provider = ?, auth_provider = ?, authentication_provider = ?,
                    is_admin = MAX(is_admin, ?), is_founder = MAX(is_founder, ?),
                    is_verified = MAX(is_verified, ?),
                    last_login_at = ?, updated_at = ?
                WHERE id = ?
                """,
                (
                    display_name,
                    display_name,
                    profile_photo,
                    profile_photo,
                    payload.get("sub") or brent_account_id(email),
                    provider,
                    provider,
                    provider,
                    1 if payload.get("is_admin") else 0,
                    1 if payload.get("is_founder") else 0,
                    1 if payload.get("is_founder") else 0,
                    now,
                    now,
                    row["id"],
                ),
            )
            user_id = row["id"]
        else:
            cursor = conn.execute(
                """
                INSERT INTO users (
                    email, password_hash, full_name, display_name, avatar_url, profile_photo,
                    role, brent_account_id, provider, auth_provider, authentication_provider,
                    is_admin, is_founder, is_verified, created_at, last_login_at, updated_at
                )
                VALUES (?, ?, ?, ?, ?, ?, 'user', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    email,
                    generate_password_hash(secrets.token_urlsafe(32)),
                    display_name,
                    display_name,
                    profile_photo,
                    profile_photo,
                    payload.get("sub") or brent_account_id(email),
                    provider,
                    provider,
                    provider,
                    1 if payload.get("is_admin") else 0,
                    1 if payload.get("is_founder") else 0,
                    1 if payload.get("is_founder") else 0,
                    now,
                    now,
                    now,
                ),
            )
            user_id = cursor.lastrowid
        ensure_cook_profile(conn, user_id)
        return conn.execute("SELECT * FROM users WHERE id = ?", (user_id,)).fetchone()


def current_user():
    user_id = session.get("user_id")
    if not user_id:
        return None
    with db() as conn:
        return conn.execute("SELECT * FROM users WHERE id = ?", (user_id,)).fetchone()


def public_user(row):
    if not row:
        return None
    display_name = row["display_name"] or row["full_name"] or row["email"].split("@")[0]
    initials = "".join(part[:1] for part in display_name.replace("/", " ").split()[:2]).upper() or "SB"
    avatar_url = row["avatar_url"] or row["profile_pic"] or ""
    official_badges = []
    if row["is_founder"]:
        official_badges.extend(["Founder", "Brent & Co"])
    if row["is_verified"]:
        official_badges.append("Verified")
    return {
        "id": row["id"],
        "email": row["email"],
        "fullName": row["full_name"] or display_name,
        "displayName": display_name,
        "username": row["username"] or "",
        "avatarUrl": avatar_url,
        "profilePic": avatar_url,
        "initials": initials,
        "bio": row["bio"] or "",
        "city": row["city"] or "",
        "state": row["state"] or "",
        "country": row["country"] or "",
        "role": row["role"] or "Home Cook",
        "accountType": row["account_type"] or row["role"] or "Home Cook",
        "brentAccountId": row["brent_account_id"] or brent_account_id(row["email"]),
        "provider": row["provider"] or row["auth_provider"] or AUTH_PROVIDER,
        "providerId": row["provider_id"] or "",
        "authProvider": row["auth_provider"] or row["provider"] or AUTH_PROVIDER,
        "joinDate": row["created_at"] or "",
        "createdAt": row["created_at"] or "",
        "profileCompletion": int(row["profile_completion_percentage"] or 0) if "profile_completion_percentage" in row.keys() else 0,
        "isAdmin": bool(row["is_admin"]),
        "isFounder": bool(row["is_founder"]),
        "isVerified": bool(row["is_verified"]),
        "badges": official_badges,
    }


def seed_founder_profile():
    with db() as conn:
        for founder in FOUNDER_PROFILES:
            email = founder["email"]
            if not email:
                continue
            founder_display_name = founder.get("display_name") or email.split("@")[0]
            founder_full_name = founder.get("full_name") or founder_display_name
            existing = conn.execute(
                "SELECT * FROM users WHERE lower(email) = lower(?)",
                (email,),
            ).fetchone()
            if existing:
                conn.execute(
                    """
                    UPDATE users
                    SET full_name = ?, display_name = ?, role = ?, brent_account_id = ?,
                        provider = ?, auth_provider = ?, is_admin = 1, is_founder = 1,
                        is_verified = 1, updated_at = ?
                    WHERE id = ?
                    """,
                    (
                        founder_full_name,
                        founder_display_name,
                        "founder/admin",
                        brent_account_id(email),
                        OWNER_AUTH_PROVIDER,
                        OWNER_AUTH_PROVIDER,
                        int(time.time()),
                        existing["id"],
                    ),
                )
                continue
            conn.execute(
                """
                INSERT INTO users (
                    email, password_hash, full_name, display_name, role, profile_pic,
                    brent_account_id, provider, auth_provider, is_admin, is_founder,
                    is_verified, created_at, updated_at
                )
                VALUES (?, ?, ?, ?, ?, '', ?, ?, ?, 1, 1, 1, ?, ?)
                """,
                (
                    email,
                    generate_password_hash(OWNER_INITIAL_PASSWORD or secrets.token_urlsafe(32)),
                    founder_full_name,
                    founder_display_name,
                    "founder/admin",
                    brent_account_id(email),
                    OWNER_AUTH_PROVIDER,
                    OWNER_AUTH_PROVIDER,
                    int(time.time()),
                    int(time.time()),
                ),
            )
        cleanup_removed_founders(conn)


def cleanup_removed_founders(conn):
    account_ids = {account_id for account_id in REMOVED_FOUNDER_ACCOUNT_IDS if account_id}
    account_ids.update(brent_account_id(email) for email in REMOVED_FOUNDER_EMAILS)
    if not account_ids:
        return
    placeholders = ",".join("?" for _ in account_ids)
    conn.execute(
        f"""
        UPDATE users
        SET full_name = '', display_name = 'User',
            role = 'user', is_admin = 0, is_founder = 0, is_verified = 0, updated_at = ?
        WHERE brent_account_id IN ({placeholders})
        """,
        (int(time.time()), *tuple(account_ids)),
    )


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
        profile_row = conn.execute("SELECT profile_completion_percentage FROM profiles WHERE user_id = ?", (user["id"],)).fetchone()
        videos = conn.execute(
            "SELECT * FROM food_videos WHERE user_id = ? ORDER BY created_at DESC",
            (user["id"],),
        ).fetchall()
    public = public_user(user)
    public["profileCompletion"] = int(profile_row["profile_completion_percentage"] or 0) if profile_row else 0
    return {
        "authenticated": True,
        "user": public,
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
    track_onboarding_event("signup_click")
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
                INSERT INTO users (
                    email, password_hash, full_name, display_name, role,
                    brent_account_id, provider, auth_provider, authentication_provider,
                    created_at, last_login_at, updated_at
                )
                VALUES (?, ?, ?, ?, 'user', ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    email,
                    generate_password_hash(password),
                    display_name,
                    display_name,
                    brent_account_id(email),
                    AUTH_PROVIDER,
                    AUTH_PROVIDER,
                    AUTH_PROVIDER,
                    int(time.time()),
                    int(time.time()),
                    int(time.time()),
                ),
            )
        except sqlite3.IntegrityError:
            return jsonify({"error": "That email already has a Let's Cook account."}), 409
        session.clear()
        session["user_id"] = cursor.lastrowid
        user = conn.execute("SELECT * FROM users WHERE id = ?", (cursor.lastrowid,)).fetchone()
        ensure_cook_profile(conn, user["id"])
        user = conn.execute("SELECT * FROM users WHERE id = ?", (cursor.lastrowid,)).fetchone()
        track_onboarding_event("account_created", user["id"], conn=conn)
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
            """
            UPDATE users
            SET brent_account_id = COALESCE(NULLIF(brent_account_id, ''), ?),
                provider = COALESCE(NULLIF(provider, ''), ?),
                auth_provider = COALESCE(NULLIF(auth_provider, ''), ?),
                authentication_provider = COALESCE(NULLIF(authentication_provider, ''), ?),
                last_login_at = ?,
                updated_at = ?
            WHERE id = ?
            """,
            (
                brent_account_id(user["email"]),
                AUTH_PROVIDER,
                AUTH_PROVIDER,
                AUTH_PROVIDER,
                int(time.time()),
                int(time.time()),
                user["id"],
            ),
        )
        ensure_cook_profile(conn, user["id"])
        user = conn.execute("SELECT * FROM users WHERE id = ?", (user["id"],)).fetchone()
        completion = profile_completion_score(conn, user["id"])
        track_onboarding_event("profile_completed" if completion >= 100 else "profile_started", user["id"], {"completion": completion}, conn)
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
    username_input = (payload.get("username") or "").strip()
    bio = (payload.get("bio") or "").strip()
    city = (payload.get("city") or "").strip()
    state = (payload.get("state") or "").strip()
    account_type = (payload.get("accountType") or payload.get("cookingLevel") or "").strip() or user["account_type"]
    with db() as conn:
        username = unique_username(conn, username_input or user["username"] or display_name, user["email"], user["id"])
        conn.execute(
            """
            UPDATE users
            SET display_name = ?, full_name = COALESCE(NULLIF(full_name, ''), ?),
                username = ?, bio = ?, city = ?, state = ?, account_type = ?, role = ?,
                updated_at = ?
            WHERE id = ?
            """,
            (
                display_name,
                display_name,
                username,
                bio or user["bio"],
                city or user["city"],
                state or user["state"],
                account_type,
                account_type,
                int(time.time()),
                user["id"],
            ),
        )
        ensure_cook_profile(conn, user["id"])
        user = conn.execute("SELECT * FROM users WHERE id = ?", (user["id"],)).fetchone()
        completion = profile_completion_score(conn, user["id"])
        track_onboarding_event("profile_completed" if completion >= 100 else "profile_started", user["id"], {"completion": completion}, conn)
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
        conn.execute(
            "UPDATE users SET profile_pic = ?, avatar_url = ?, updated_at = ? WHERE id = ?",
            (profile_pic, profile_pic, int(time.time()), user["id"]),
        )
        ensure_cook_profile(conn, user["id"])
        track_onboarding_event("profile_started", user["id"], {"action": "profile_photo"}, conn)
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
        ensure_cook_profile(conn, user["id"])
        track_onboarding_event("first_action_taken", user["id"], {"action": "food_video"}, conn)
    return jsonify(load_state(user))


def load_recipe_data():
    recipe_path = BASE_DIR / "data" / "recipes.json"
    try:
        with recipe_path.open(encoding="utf-8") as handle:
            return json.load(handle)
    except (OSError, json.JSONDecodeError):
        return {"recipes": []}


def dashboard_html(user):
    recipes = load_recipe_data().get("recipes", [])
    platform_filter = request.args.get("app", "all").strip() or "all"
    user_filter_sql = ""
    params = []
    if platform_filter != "all":
        user_filter_sql = "WHERE EXISTS (SELECT 1 FROM app_memberships am WHERE am.user_id = u.id AND am.app_name = ?)"
        params.append(platform_filter)
    now = int(time.time())
    today_start = now - (now % 86400)
    with db() as conn:
        user_count = conn.execute(f"SELECT COUNT(*) FROM users u {user_filter_sql}", params).fetchone()[0]
        new_today = conn.execute(
            f"SELECT COUNT(*) FROM users u {user_filter_sql} {'AND' if user_filter_sql else 'WHERE'} u.created_at >= ?",
            [*params, today_start],
        ).fetchone()[0]
        active_users = conn.execute(
            f"SELECT COUNT(*) FROM users u {user_filter_sql} {'AND' if user_filter_sql else 'WHERE'} u.last_login_at >= ?",
            [*params, now - 30 * 24 * 60 * 60],
        ).fetchone()[0]
        profile_count = conn.execute(f"SELECT COUNT(*) FROM profiles p JOIN users u ON u.id = p.user_id {user_filter_sql}", params).fetchone()[0]
        avg_completion = conn.execute(
            f"SELECT COALESCE(ROUND(AVG(p.profile_completion_percentage)), 0) FROM profiles p JOIN users u ON u.id = p.user_id {user_filter_sql}",
            params,
        ).fetchone()[0]
        video_count = conn.execute("SELECT COUNT(*) FROM food_videos").fetchone()[0]
        funnel = funnel_metrics(conn)
        latest_users = conn.execute(
            f"""
            SELECT u.*, p.profile_completion_percentage
            FROM users u
            LEFT JOIN profiles p ON p.user_id = u.id
            {user_filter_sql}
            ORDER BY u.created_at DESC
            LIMIT 25
            """,
            params,
        ).fetchall()
        platform_counts = conn.execute(
            "SELECT app_name, COUNT(*) AS total FROM app_memberships GROUP BY app_name ORDER BY app_name"
        ).fetchall()
    apps = [
        ("Let’s Cook Y’all", "https://letscookyall.com/"),
        ("Find The Beat", "https://findthebeatmusic.com/"),
        ("Second Chance Careers", "https://secondchancecareers.org/"),
        ("BEU", "https://beutravel.org/"),
        ("Brent & Co", "https://brentandco.org/"),
    ]
    app_links = "".join(f'<li><a href="{url}">{name}</a></li>' for name, url in apps)
    filter_links = '<a class="small-button secondary" href="/admin?app=all">All apps</a>' + "".join(
        f'<a class="small-button secondary" href="/admin?app={escape(row["app_name"])}">{escape(row["app_name"])}</a>'
        for row in platform_counts
    )
    platform_rows = "".join(
        f"<tr><td>{escape(row['app_name'])}</td><td>{row['total']}</td></tr>" for row in platform_counts
    ) or "<tr><td colspan='2'>No app memberships yet</td></tr>"
    max_funnel = max([step["total"] for step in funnel] or [1]) or 1
    funnel_rows = "".join(
        f"<tr><td>{escape(step['label'])}</td><td><div style='height:12px;border-radius:999px;background:#d9a441;width:{max(6, round((step['total'] / max_funnel) * 100))}%'></div></td><td>{step['total']}</td><td>{step['conversion']}%</td><td>{step['dropoff']}</td></tr>"
        for step in funnel
    )
    user_rows = "".join(
        "<tr>"
        f"<td><a href='/profiles/{row['id']}'>{escape(row['display_name'] or row['full_name'] or row['email'])}</a></td>"
        f"<td>{escape(row['email'])}</td>"
        f"<td>{escape(row['account_type'] or row['role'] or 'Home Cook')}</td>"
        f"<td>{escape(', '.join(part for part in [row['city'], row['state']] if part))}</td>"
        f"<td>{row['profile_completion_percentage'] or 0}%</td>"
        f"<td>{row['last_login_at'] or ''}</td>"
        "</tr>"
        for row in latest_users
    )
    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Let’s Cook Admin</title>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <main class="admin-dashboard">
    <p class="eyebrow">Brent & Co founder control center</p>
    <h1>Founder Dashboard</h1>
    <p>Signed in as {public_user(user)["displayName"]}. Admin and founder flags are set server-side only.</p>
    <p>Filter: {escape(platform_filter)}</p>
    <nav class="admin-panel-grid"><article>{filter_links}</article></nav>
    <section class="admin-stat-grid">
      <article><strong>{user_count}</strong><span>Total users</span></article>
      <article><strong>{new_today}</strong><span>New users today</span></article>
      <article><strong>{active_users}</strong><span>Active users</span></article>
      <article><strong>{avg_completion}%</strong><span>Avg profile completion</span></article>
      <article><strong>0</strong><span>Messages sent</span></article>
      <article><strong>{video_count}</strong><span>Showcases uploaded</span></article>
      <article><strong>{len(recipes)}</strong><span>Recipes submitted</span></article>
      <article><strong>0</strong><span>Resumes uploaded</span></article>
    </section>
    <section class="admin-panel-grid">
      <article><h2>Onboarding funnel</h2><table><thead><tr><th>Step</th><th>Visual</th><th>Users</th><th>Conversion</th><th>Drop-off</th></tr></thead><tbody>{funnel_rows}</tbody></table></article>
    </section>
    <section class="admin-panel-grid">
      <article><h2>Apps</h2><ul>{app_links}</ul></article>
      <article><h2>Manage</h2><ul><li><a href="/data/recipe-source.json">Recipe source</a></li><li><a href="/data/recipes.json">Recipe database</a></li><li><a href="/#account">Users/account area</a></li><li><a href="/#kitchen">Content uploads</a></li></ul></article>
    </section>
    <section class="admin-panel-grid">
      <article><h2>Users by platform</h2><table><tbody>{platform_rows}</tbody></table></article>
    </section>
    <section class="admin-panel-grid">
      <article><h2>User directory</h2><table><thead><tr><th>Name</th><th>Email</th><th>Type</th><th>Location</th><th>Profile</th><th>Last login</th></tr></thead><tbody>{user_rows}</tbody></table></article>
    </section>
    <a class="small-button" href="/#lets-cook">Back to Let’s Cook</a>
  </main>
</body>
</html>"""


@app.get("/profiles/<int:user_id>")
def public_profile_page(user_id):
    with db() as conn:
        row = conn.execute("SELECT * FROM users WHERE id = ?", (user_id,)).fetchone()
        profile = conn.execute("SELECT * FROM profiles WHERE user_id = ?", (user_id,)).fetchone()
    if not row:
        return "<h1>Profile not found</h1><p>That Let's Cook profile does not exist yet.</p>", 404
    person = public_user(row)
    avatar = escape(person["avatarUrl"] or "")
    avatar_html = f"<img src='/{avatar}' alt=''>" if avatar else f"<span>{escape(person['initials'])}</span>"
    location = escape(", ".join(part for part in [person["city"], person["state"]] if part) or "Add city/state")
    handle = escape(person["username"] or "")
    join_date = escape(str(person["joinDate"])[:10]) if person.get("joinDate") else ""
    handle_line = f"<p>@{handle}{' · Joined ' + join_date if join_date else ''}</p>" if handle else ""
    completion = profile["profile_completion_percentage"] if profile else 0
    return f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>{escape(person['displayName'])} | Let’s Cook Y’all</title><link rel="stylesheet" href="/styles.css"></head>
<body><main class="admin-dashboard">
<p class="eyebrow">Let’s Cook Y’all profile</p><div class="identity-card"><div class="identity-avatar">{avatar_html}</div><div><h1>{escape(person['displayName'])}</h1>{handle_line}<p>{escape(person['accountType'])} · {location}</p></div></div>
<section class="admin-panel-grid"><article><h2>Bio</h2><p>{escape(person['bio'] or 'This cook is still adding their story.')}</p></article><article><h2>Profile</h2><p>{completion}% complete</p><p>Universal account: {escape(person['brentAccountId'])}</p></article></section>
<a class="small-button" href="/#lets-cook">Back to Let’s Cook</a></main></body></html>"""


@app.get("/profile/<username>")
def public_profile_by_username(username):
    normalized = username_slug(username)
    with db() as conn:
        row = conn.execute(
            "SELECT id FROM users WHERE lower(username) = lower(?)",
            (normalized,),
        ).fetchone()
    if not row:
        return "<h1>Profile not found</h1><p>That Let's Cook profile does not exist yet.</p>", 404
    return public_profile_page(row["id"])


@app.route("/settings", methods=["GET", "POST"])
def settings_page():
    user = current_user()
    if not user:
        return redirect("/#account")
    if request.method == "POST":
        visibility = request.form.get("profile_visibility", "public").strip()
        if visibility not in {"public", "private"}:
            visibility = "public"
        settings_json = json.dumps(
            {
                "email_notifications": bool(request.form.get("email_notifications")),
                "saved_recipe_reminders": bool(request.form.get("saved_recipe_reminders")),
            }
        )
        with db() as conn:
            ensure_cook_profile(conn, user["id"])
            conn.execute(
                "UPDATE profiles SET profile_visibility = ?, settings_json = ?, updated_at = ? WHERE user_id = ?",
                (visibility, settings_json, int(time.time()), user["id"]),
            )
        return redirect("/settings")
    with db() as conn:
        profile = conn.execute("SELECT * FROM profiles WHERE user_id = ?", (user["id"],)).fetchone()
    person = public_user(user)
    visibility = profile["profile_visibility"] if profile else "public"
    return f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Settings | Let’s Cook Y’all</title><link rel="stylesheet" href="/styles.css"></head>
<body><main class="admin-dashboard"><p class="eyebrow">Account settings</p><h1>{escape(person['displayName'])}</h1>
<form method="post" class="recipe-form"><label>Profile visibility <select name="profile_visibility"><option value="public" {"selected" if visibility == "public" else ""}>Public</option><option value="private" {"selected" if visibility == "private" else ""}>Private</option></select></label>
<label><input type="checkbox" name="email_notifications" checked> Email notifications</label>
<label><input type="checkbox" name="saved_recipe_reminders" checked> Saved recipe reminders</label>
<button class="small-button" type="submit">Save settings</button></form><p><a href="/profiles/{user['id']}">View profile</a></p></main></body></html>"""


@app.get("/admin")
def admin_dashboard():
    user = current_user()
    if not user or not user["is_admin"]:
        return "<h1>Admin access required</h1><p>Log in with a founder/admin account first.</p>", 403
    return dashboard_html(user)


def inject_meta(html, recipe):
    if not recipe:
        return html
    title = escape(f'{recipe.get("title", "Recipe")} | Let’s Cook Y’all')
    description = escape(recipe.get("description") or "A warm Let’s Cook Y’all recipe from Shay’s Kitchen.")
    image = recipe.get("image_url") or recipe.get("image") or "assets/logo.png"
    absolute_image = image if image.startswith("http") else f"https://www.letscookyall.com/{image.lstrip('/')}"
    tags = f"""
    <title>{title}</title>
    <meta name="description" content="{description}" />
    <meta property="og:title" content="{title}" />
    <meta property="og:description" content="{description}" />
    <meta property="og:image" content="{absolute_image}" />
    <meta property="og:type" content="article" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{title}" />
    <meta name="twitter:description" content="{description}" />
    <meta name="twitter:image" content="{absolute_image}" />"""
    return html.replace("<title>Let's Cook Ya'll</title>", tags)


@app.get("/recipes/<slug>")
def recipe_share_page(slug):
    recipes = load_recipe_data().get("recipes", [])
    recipe = next((item for item in recipes if item.get("slug") == slug or item.get("id") == slug), None)
    html = (BASE_DIR / "index.html").read_text(encoding="utf-8")
    return inject_meta(html, recipe)


@app.get("/")
def index():
    track_onboarding_event("landing_page_view")
    return send_from_directory(BASE_DIR, "index.html")


@app.get("/data/beu-listings.json")
@app.get("/data/beu-community.json")
@app.get("/data/BEU-STRATEGY.md")
@app.get("/data/BEU-TRUST.md")
@app.get("/services/beuSearchService.js")
@app.get("/assets/beu-logo.jpg")
def archived_beu_asset():
    abort(404)


@app.get("/uploads/<path:path>")
def uploaded_file(path):
    return send_from_directory(UPLOAD_DIR, path)


@app.get("/<path:path>")
def static_file(path):
    return send_from_directory(BASE_DIR, path)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", "5000")))
