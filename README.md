# Let's Cook Ya'll / Brent & Co.

A working prototype for a warm Brent & Co. cooking-skills app inspired by the original Let's Cook Ya'll UX mockups and storefront branding.

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
- Phase 1 culinary education architecture for Learning Levels, Cuisine Explorer, Food Encyclopedia, and Traditional Menu Intelligence

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
