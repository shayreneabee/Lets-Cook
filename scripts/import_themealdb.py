import argparse
import json
import re
import sys
import time
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import urlopen


API_BASE = "https://www.themealdb.com/api/json/v1/1"
DEFAULT_AREAS = ["Indian", "Mexican", "Jamaican", "Italian", "Greek", "Chinese", "Japanese", "Thai"]

AREA_TO_CUISINE = {
    "American": "southern",
    "British": "global",
    "Canadian": "global",
    "Chinese": "asian-inspired",
    "Dutch": "global",
    "Egyptian": "mediterranean",
    "Filipino": "asian-inspired",
    "French": "mediterranean",
    "Greek": "mediterranean",
    "Indian": "indian",
    "Irish": "global",
    "Italian": "italian",
    "Jamaican": "caribbean",
    "Japanese": "asian-inspired",
    "Kenyan": "global",
    "Malaysian": "asian-inspired",
    "Mexican": "mexican",
    "Moroccan": "mediterranean",
    "Polish": "global",
    "Portuguese": "mediterranean",
    "Russian": "global",
    "Spanish": "mediterranean",
    "Thai": "asian-inspired",
    "Tunisian": "mediterranean",
    "Turkish": "mediterranean",
    "Vietnamese": "asian-inspired",
}

CATEGORY_TO_LETS_COOK = {
    "Beef": "Family Dinners",
    "Breakfast": "Beginner Basics",
    "Chicken": "Family Dinners",
    "Dessert": "Desserts",
    "Goat": "Family Dinners",
    "Lamb": "Family Dinners",
    "Miscellaneous": "Global Flavors",
    "Pasta": "Family Dinners",
    "Pork": "Family Dinners",
    "Seafood": "Seafood",
    "Side": "Beginner Basics",
    "Starter": "Party & Hosting",
    "Vegan": "Vegetarian",
    "Vegetarian": "Vegetarian",
}


def slugify(value):
    value = value.lower().strip()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-")


def fetch_json(endpoint, **params):
    url = f"{API_BASE}/{endpoint}.php?{urlencode(params)}"
    with urlopen(url, timeout=30) as response:
        return json.loads(response.read().decode("utf-8"))


def split_instructions(text):
    text = (text or "").replace("\r", "\n")
    parts = []
    for chunk in re.split(r"\n+|(?<=[.!?])\s+(?=[A-Z0-9])", text):
        clean = chunk.strip(" \t\r\n-")
        if len(clean) > 3:
            parts.append(clean)
    return parts[:12]


def ingredients_from_meal(meal):
    ingredients = []
    for index in range(1, 21):
        ingredient = (meal.get(f"strIngredient{index}") or "").strip()
        measure = (meal.get(f"strMeasure{index}") or "").strip()
        if ingredient:
            ingredients.append(f"{measure} {ingredient}".strip())
    return ingredients


def difficulty_for(recipe):
    count = len(recipe["ingredients"])
    steps = len(recipe["instructions"])
    if count >= 12 or steps >= 8:
        return "Intermediate"
    return "Beginner"


def area_article(area):
    return "an" if area[:1].lower() in {"a", "e", "i", "o", "u"} else "a"


def convert_meal(meal):
    area = (meal.get("strArea") or "Global").strip()
    meal_category = (meal.get("strCategory") or "Global Flavors").strip()
    cuisine = AREA_TO_CUISINE.get(area, "global")
    title = (meal.get("strMeal") or "Imported Recipe").strip()
    ingredients = ingredients_from_meal(meal)
    instructions = split_instructions(meal.get("strInstructions", ""))
    recipe = {
        "id": f"mealdb-{slugify(title)}",
        "title": title,
        "description": f"{area_article(area).title()} {area} recipe imported from TheMealDB and organized for the Let's Cook Y'all kitchen.",
        "cuisine": cuisine,
        "category": CATEGORY_TO_LETS_COOK.get(meal_category, "Global Flavors"),
        "cookTime": "35 min",
        "cookTimeMinutes": 35,
        "prepTime": "15 min",
        "prepTimeMinutes": 15,
        "servings": 4,
        "difficulty": "Beginner",
        "ingredients": ingredients,
        "instructions": instructions,
        "directions": instructions,
        "image": meal.get("strMealThumb") or "assets/logo.png",
        "image_url": meal.get("strMealThumb") or "assets/logo.png",
        "video_url": meal.get("strYoutube") or "",
        "tags": sorted(set([area, meal_category, cuisine, "Imported", "TheMealDB"])),
        "featured": False,
        "chefNotes": "Imported from a free/public recipe API. Review and warm up the voice before featuring on the homepage.",
        "path": "amateur-home-chef",
        "source": {
            "type": "api",
            "name": "TheMealDB",
            "url": meal.get("strSource") or f"https://www.themealdb.com/meal/{meal.get('idMeal')}",
            "apiUrl": "https://www.themealdb.com/api.php",
            "externalId": meal.get("idMeal"),
            "licenseNote": "Free public API; verify production/app-store terms before wide release.",
        },
    }
    recipe["difficulty"] = difficulty_for(recipe)
    return recipe


def import_area(area, per_area):
    listing = fetch_json("filter", a=area).get("meals") or []
    recipes = []
    for item in listing[:per_area]:
        meal_id = item.get("idMeal")
        if not meal_id:
            continue
        detail = fetch_json("lookup", i=meal_id).get("meals") or []
        if detail:
            recipes.append(convert_meal(detail[0]))
            time.sleep(0.15)
    return recipes


def merge_recipes(database_path, imported):
    database = json.loads(database_path.read_text(encoding="utf-8"))
    recipes = database.setdefault("recipes", [])
    by_id = {recipe["id"]: recipe for recipe in recipes}
    for recipe in imported:
        by_id[recipe["id"]] = recipe
    database["recipes"] = list(by_id.values())
    database.setdefault("sourcePolicy", {})
    database["sourcePolicy"]["lastApiImport"] = {
        "source": "TheMealDB",
        "importedCount": len(imported),
        "importedAt": time.strftime("%Y-%m-%d"),
    }
    database_path.write_text(json.dumps(database, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def main():
    parser = argparse.ArgumentParser(description="Import free/public recipes from TheMealDB into data/recipes.json.")
    parser.add_argument("--database", default="data/recipes.json")
    parser.add_argument("--areas", nargs="*", default=DEFAULT_AREAS)
    parser.add_argument("--per-area", type=int, default=3)
    args = parser.parse_args()

    database_path = Path(args.database)
    imported = []
    for area in args.areas:
        try:
            imported.extend(import_area(area, args.per_area))
        except (HTTPError, URLError, TimeoutError) as exc:
            print(f"Could not import {area}: {exc}", file=sys.stderr)
    if not imported:
        print("No recipes imported.", file=sys.stderr)
        return 1
    merge_recipes(database_path, imported)
    print(f"Imported {len(imported)} recipes into {database_path}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
