# Let's Cook Ya'll Recipe Database

This folder is the local recipe database layer for the prototype.

## Source Rules

Do not scrape copyrighted recipe blogs directly.

Allowed sources:

- Original Brent & Co. recipes
- Shay's Kitchen / family-style recipes
- AI-assisted original recipes reviewed and edited into our own voice
- Public-domain or open-license recipes with attribution
- User-submitted recipes later
- Free/public APIs used through their terms, such as TheMealDB, Spoonacular, Edamam, DummyJSON, and Open Food Facts

## Current Schema

Each recipe in `recipes.json` uses:

```json
{
  "id": "orange-chicken",
  "title": "Orange Chicken",
  "description": "Short original summary",
  "cuisine": "asian-inspired",
  "category": "Kid-Friendly Cooking",
  "cookTime": "20 min",
  "cookTimeMinutes": 20,
  "prepTime": "10 min",
  "prepTimeMinutes": 10,
  "servings": 4,
  "difficulty": "Beginner",
  "ingredients": [],
  "instructions": [],
  "image": "assets/example.jpeg",
  "tags": [],
  "featured": true,
  "chefNotes": "Personal note or teaching angle",
  "path": "kid-chefs",
  "source": {
    "type": "original",
    "name": "Shay's Kitchen"
  }
}
```

## Future Tables / Collections

When this becomes a backend, split this into:

- `recipes`
- `ingredients`
- `users`
- `favorites`
- `ratings`
- `mealPlans`
- `groceryLists`
- `cookingProgress`
- `videos`
- `recipeSubmissions`
- `apiImports`

## API Strategy

Use API adapters to ingest or reference data without copying copyrighted blog content.

- TheMealDB: discovery and public meal inspiration
- Spoonacular: structured recipe search if API terms fit the product
- Edamam: nutrition and ingredient parsing
- DummyJSON: development/test data
- Open Food Facts: product and pantry lookup

Any imported recipe should store `source.type`, `source.name`, and `source.url` when applicable.
