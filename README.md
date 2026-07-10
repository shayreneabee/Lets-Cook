# Let's Cook Ya'll / Brent & Co.

A working prototype for a warm Brent & Co. cooking-skills app inspired by the original Let's Cook Ya'll UX mockups and storefront branding.

## Product North Star

Let's Cook Y'all should feel like Shay's Kitchen: modern, warm, hospitable, food-first, and confidence-building. It is not a recipe database; it is a welcoming kitchen where people discover food, learn naturally, and become the person their family asks to cook.

See [Design Philosophy V2](docs/design-philosophy-v2.md) for the guiding product, content, and visual standards.

## What Works Now

- Brent & Co. ecosystem homepage with storefront cards for Let's Cook Ya'll, Find the Beat, and Second Chance Careers
- Verified live app links from the Brent & Co. homepage:
  - Brent & Co.: https://brentandco.org/
  - Let's Cook Ya'll: https://letscookyall.com/
  - Find the Beat: https://findthebeatmusic.com/
  - Second Chance Careers: https://secondchancecareers.org/
- GitHub repo links from each storefront card for the connected Brent & Co. projects
- Shared platform design system for spacing, cards, buttons, hover motion, accent colors, and responsive layout
- App-specific accent personalities: gold for Let's Cook Ya'll, orange for Find the Beat, and green/supportive tones for Second Chance Careers
- Home page with Brent & Co. hero positioning
- Flask backend for Let's Cook accounts, login/logout, profile pictures, saved recipe state, lesson progress, and food video uploads
- Shay's Kitchen / From My Kitchen personal recipe collection
- Cook 101 beginner basics and lesson detail pages
- Recipe search/filter by keyword, category, and skill level
- Recipe listing and recipe detail pages
- Learning paths for Kid Chefs, Amateur Home Chef, and Professional Mode
- Cuisine/category tiles for Southern classics and global-inspired meals
- Save recipes to a user account when logged in, with browser fallback for guests
- Add recipes to a meal plan and persist it to the account database
- Generate a shopping list from planned recipes
- Hosting and entertaining menu ideas
- Cook-created video submissions through the Brent & Co. Kitchen/About page, backed by database records and uploaded video storage for logged-in users
- Personal sample content including orange chicken, crab rangoon, Yakamein, shrimp and grits with green beans, oxtails, Cajun cream salmon rotini pasta, roasted vegetables, white chicken chili, General Tso-style chicken, cashew chicken, fried rice, chicken parmesan, deviled eggs, Rotel dip, party meatballs, charcuterie boards, dessert charcuterie board, bourbon praline bread pudding, blackened fish, Tuscan chicken, garlic wings, pineapple fried rice, and lamb bone broth soup
- Local JSON recipe database in `data/recipes.json`
- Search/filter by keyword, pantry ingredients, cuisine, cook time, category, and difficulty
- Phase 1 culinary education architecture for Culinary Academy, Cuisine Explorer, Menu Builder, and Hospitality & Hosting
- Centralized photography system with hero, skills, cuisine, community image slots, and strict recipe-to-photo pairing. Recipes are not considered publish-ready until the dish has a matching food photograph and correct cuisine assignment.

## Photography System

The production image library lives in `images/`.

Required style:

- MasterClass culinary education quality
- Food Network-level finished food and technique shots
- Southern hospitality warmth
- Bright natural daylight and warm color temperature
- Clean modern kitchens
- Diverse families, cooks, and skill levels
- Real hands-on cooking process
- Shallow depth of field and polished commercial framing

Image folders:

- `images/hero/`: `hero-01.jpg` through `hero-20.jpg`
- `images/community/`: `community-01.jpg` through `community-50.jpg`
- `images/skills/`: `knife-skills-01.jpg` through `knife-skills-25.jpg`
- `images/skills/`: `baking-01.jpg` through `baking-25.jpg`
- `images/skills/`: `grilling-01.jpg` through `grilling-25.jpg`
- `images/skills/`: optional support lanes `measuring-01.jpg`, `sauce-prep-01.jpg`, and `plating-01.jpg` through `-25.jpg`
- `images/cuisines/southern/`: `southern-01.jpg` through `southern-25.jpg`
- `images/cuisines/mexican/`: `mexican-01.jpg` through `mexican-25.jpg`
- `images/cuisines/italian/`: `italian-01.jpg` through `italian-25.jpg`
- `images/cuisines/indian/`: `indian-01.jpg` through `indian-25.jpg`
- `images/cuisines/asian/`: `asian-01.jpg` through `asian-25.jpg`
- `images/cuisines/mediterranean/`: `mediterranean-01.jpg` through `mediterranean-25.jpg`

Recommended dimensions:

- Hero images: 2400x1600 or larger, landscape, under 500KB after compression when possible.
- Card images: 1600x1200 or larger, landscape or 4:3 crop-safe.
- Recipe detail images: 2000x1400 or larger, high detail, crop-safe center subject.
- Profile/community moments: 1600x1600 or 1800x1200, crop-safe around faces and hands.

Recipe + photography pairing rule:

- A recipe is not complete unless it has a real recipe, a matching food photograph, a correct image mapping, and a correct cuisine assignment.
- New recipes and new recipe photos must be created or assigned together as one content package.
- Do not publish recipe cards with placeholder images, unrelated food photos, duplicate images from other dishes, or generic regional collage images.
- If the matching food photograph does not exist yet, keep the recipe in the photo queue until the image is created, sourced, or assigned.
- Every recipe card should visually identify the dish before the title is read.
- This rule applies to every cuisine, region, holiday, Kids Korner recipe, hospitality menu, and future expansion.

Fallback behavior:

- Page components call the centralized `photographyLibrary` in `app.js`.
- The app tries the expected `/images/` slot first.
- If that file is not present yet, a global image error handler swaps in the current safe `/assets/` fallback.
- Recipe cards and recipe detail pages use `recipePhotoFor(recipe)` so recipe visuals are connected to the centralized system.
- Recipe-specific image failures fall back to `assets/recipe-photo-needed.svg`, not an unrelated cuisine or category photo.
- Recipes in `recipeImageReplacementQueue` are treated as unpublished and are hidden from public grids, search results, region pages, menu planner output, and related recipe cards until a matching image is assigned.

Missing image report:

- Run `python scripts/report_missing_images.py` from the project root.
- The script writes `images/missing-image-report.json`.
- In the browser console, run `window.reportLetsCookMissingImages()` to print the expected slot list and fallback mapping.
- In the browser console, run `window.reportLetsCookRecipeImages()` to audit each recipe's assigned image, source, and fallback status.
- Run `node scripts/audit_recipe_images.js` from the project root to refresh `data/recipe-image-audit.json`.
- The audit report includes `photoQueue`, which lists unpublished recipes that need exact food photography plus suggested image paths and generation prompts.
- Recipe images are resolved in this order: recipe-specific mapping, recipe `image_url`/`image`, cuisine cover, category cover, then branded photo-needed fallback. The audited recipe image assignments live in `data/recipe-image-audit.json`.

Avoid watermarked images, dark photos, empty kitchens, AI-looking faces, overly staged models, and repeated generic stock.

## Database Tables

- `users`: email, password hash, display name, profile picture, and account creation time.
- `user_state`: saved recipes, planned recipes, and lesson progress JSON per user.
- `food_videos`: user-submitted recipe videos, YouTube links, uploaded video filenames, and timestamps.

## Deploy on Render

Use a Web Service:

- Build command: `pip install -r requirements.txt`
- Start command: `gunicorn app:app`
- Add a persistent disk mounted at `/data`
- Set `SECRET_KEY` to a real generated secret
- Set `INSTANCE_DIR=/data/instance`
- Set `DATABASE_PATH=/data/instance/lets_cook.sqlite`
- Set `UPLOAD_DIR=/data/uploads`

## Open Food Data Expansion Notes

Let's Cook Y'all should use open data to expand metadata, not copy protected recipes.

- TheMealDB: useful for meal names, categories, areas, and inspiration metadata. Do not copy copyrighted instructions as site-owned recipes.
- Wikidata/Wikipedia cuisine metadata: useful for cuisine, ingredient, country, and culture relationships. Prefer Wikidata structured data where possible because it is CC0.
- Open Food Facts: useful for packaged ingredient and product metadata. Respect Open Database License requirements and attribution/share-alike expectations.
- USDA FoodData Central: useful for nutrition and ingredient data. Good fit for future nutrition lookups and food science lessons.

Recipe instructions, personal stories, and educational lesson copy should remain original, licensed, contributed, or explicitly open.

## Next Product Steps

- Expand Find the Beat and Second Chance Careers from concept hubs into full apps
- Replace starter recipe guidance with tested, finalized recipes
- Add matched cooking videos to individual recipe pages
- Add user accounts with cloud persistence
- Store uploaded cook videos in cloud media storage
- Add grocery list checkboxes and printable/exportable lists
- Add weekly calendar planning
- Convert to React or another app framework when the prototype needs larger-scale state and routing
