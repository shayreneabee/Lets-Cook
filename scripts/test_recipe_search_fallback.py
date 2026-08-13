"""Focused regression tests for external recipe fallback and content-gap tracking."""

import sqlite3
import sys
import tempfile
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
import app as application


def run():
    with tempfile.TemporaryDirectory(prefix="lcy-search-gap-", ignore_cleanup_errors=True) as temp_dir:
        application.DB_PATH = Path(temp_dir) / "search-gaps.sqlite"
        application.init_db()
        expected_external = [{
            "externalId": "123",
            "title": "Provider Test Stew",
            "image": "https://www.themealdb.com/images/test.jpg",
            "category": "Stew",
            "cuisine": "Test",
            "ingredients": ["1 cup beans"],
            "instructions": "Simmer.",
            "sourceName": "TheMealDB",
            "sourceUrl": "https://www.themealdb.com/meal/123",
            "isExternal": True,
        }]
        original_provider = application.external_recipe_results
        application.external_recipe_results = lambda query: expected_external if application.normalize_recipe_search_query(query) == "moonberry stew" else []
        try:
            client = application.app.test_client()
            response = client.post("/api/recipe-search/fallback", json={"query": "Moonberry   Stew"})
            assert response.status_code == 200
            payload = response.get_json()
            assert payload["normalizedQuery"] == "moonberry stew"
            assert payload["results"] == expected_external
            assert payload["results"][0]["isExternal"] is True

            response = client.post("/api/recipe-search/fallback", json={"query": "moonberry stew"})
            assert response.status_code == 200
            connection = sqlite3.connect(application.DB_PATH)
            connection.row_factory = sqlite3.Row
            row = connection.execute(
                "SELECT * FROM recipe_search_gaps WHERE normalized_query = ?",
                ("moonberry stew",),
            ).fetchone()
            connection.close()
            assert row["query"] == "moonberry stew"
            assert row["search_count"] == 2
            assert row["fallback_found"] == 1
            assert row["filled"] == 0
            assert row["latest_search_date"]

            response = client.post("/api/recipe-search/gap-filled", json={"query": "Moonberry Stew"})
            assert response.status_code == 200 and response.get_json()["filled"] is True
            connection = sqlite3.connect(application.DB_PATH)
            filled = connection.execute(
                "SELECT filled FROM recipe_search_gaps WHERE normalized_query = ?",
                ("moonberry stew",),
            ).fetchone()[0]
            connection.close()
            assert filled == 1

            no_match = client.post("/api/recipe-search/fallback", json={"query": "nothing local or external"})
            assert no_match.status_code == 200 and no_match.get_json()["results"] == []
            connection = sqlite3.connect(application.DB_PATH)
            gap = connection.execute(
                "SELECT fallback_found, filled FROM recipe_search_gaps WHERE normalized_query = ?",
                ("nothing local or external",),
            ).fetchone()
            connection.close()
            assert gap == (0, 0)
        finally:
            application.external_recipe_results = original_provider
    print("Recipe fallback and content-gap tests passed.")


if __name__ == "__main__":
    run()
