const liveAppUrls = {
  letsCook: "https://letscookyall.com/",
  findTheBeat: "https://findthebeatmusic.com/",
  secondChance: "https://secondchancecareers.org/"
};

let categories = [
  "Southern Comfort",
  "Quick Weeknight Meals",
  "Global Flavors",
  "Family Dinners",
  "Beginner Basics",
  "Party & Hosting",
  "Kid-Friendly Cooking"
];

const ecosystemApps = [
  {
    id: "lets-cook",
    title: "Let's Cook Ya'll",
    accent: "gold",
    image: "assets/logo.png",
    tagline: "Cooking confidence for real families, real kitchens, and warm tables.",
    description: "Southern fresh meets global flavor through recipes, Cook 101 lessons, Shay's Kitchen, hosting ideas, and meal planning.",
    route: "#lets-cook",
    externalUrl: liveAppUrls.letsCook,
    status: "Launch ready",
    links: [
      ["Open Let's Cook", liveAppUrls.letsCook],
      ["Shay's Kitchen", "#kitchen"]
    ]
  },
  {
    id: "find-the-beat",
    title: "Find the Beat",
    accent: "orange",
    image: "assets/find-the-beat-logo.svg",
    tagline: "Music energy, creative rhythm, and discovery for artists and listeners.",
    description: "A music-centered app with bold orange movement, playlists, lessons, community showcases, and creative tools.",
    route: "#find-the-beat",
    externalUrl: liveAppUrls.findTheBeat,
    status: "Live",
    links: [
      ["Launch Site", liveAppUrls.findTheBeat],
      ["Preview Here", "#find-the-beat"]
    ]
  },
  {
    id: "second-chance",
    title: "Second Chance Careers",
    accent: "career",
    image: "assets/second-chance-logo.svg",
    tagline: "Uplifting career support built with dignity, clarity, and practical momentum.",
    description: "A supportive professional app for jobs, training, resumes, resources, and people rebuilding with purpose.",
    route: "#second-chance",
    externalUrl: liveAppUrls.secondChance,
    status: "Live",
    links: [
      ["Launch Site", liveAppUrls.secondChance],
      ["Preview Here", "#second-chance"]
    ]
  }
];

const appHubSections = {
  "find-the-beat": [
    { title: "Artist Discovery", text: "A future home for local artists, producers, DJs, playlists, and creative spotlights." },
    { title: "Creative Sessions", text: "A section for workshops, listening parties, studio nights, and community music events." },
    { title: "Sound Map", text: "A city-based discovery layer for music scenes, venues, and creative neighborhoods." }
  ],
  "second-chance": [
    { title: "Job Pathways", text: "Career tracks, listings, training links, and supportive employment resources." },
    { title: "Resume Support", text: "A practical space for profile building, resume drafts, interview prep, and confidence." },
    { title: "Community Partners", text: "Verified organizations, mentors, employers, and local support networks." }
  ]
};

const paths = [
  {
    id: "kid-chefs",
    title: "Kid Chefs",
    eyebrow: "Small hands, big confidence",
    level: "Beginner",
    image: "assets/kid-friendly.jpeg",
    description: "Short, safe lessons for young cooks and families cooking together.",
    promise: "Make the kitchen feel safe, fun, and confidence-building before the stove ever feels scary.",
    pace: "10-25 minute lessons",
    focus: "PB&J, mac and cheese, eggs, snacks, simple meals",
    badges: ["Family guided", "No-fear basics", "Hands-on"],
    steps: ["Wash hands and set up a clean station", "Practice spreading, stirring, measuring, mixing, and tasting", "Build PB&J, mac and cheese, eggs, mini pizzas, and simple snacks"],
    modules: [
      { title: "Kitchen Safety", text: "Hand washing, clean counters, safe tools, and grown-up help around heat." },
      { title: "Spread & Build", text: "PB&J, snack plates, mini sandwiches, and learning how to assemble food neatly." },
      { title: "Stir & Melt", text: "Mac and cheese, oatmeal, eggs, and safe stovetop skills with grown-up help." },
      { title: "Snack Builder", text: "Simple, colorful food kids can assemble and feel proud serving." }
    ],
    skills: ["Wash and prep a station", "Measure dry and wet ingredients", "Mix without overworking", "Use kid-safe tools", "Taste and describe flavor"],
    recipes: ["pb-and-j-sandwich", "stovetop-mac-and-cheese", "mini-pizza-bagels", "fruit-kabobs", "soft-scrambled-eggs"]
  },
  {
    id: "amateur-home-chef",
    title: "Amateur Home Chef",
    eyebrow: "Dinner gets easier from here",
    level: "Beginner to Intermediate",
    image: "assets/cooking-family.jpeg",
    description: "Everyday cooking skills for the person who wants dinner to feel less stressful.",
    promise: "Turn weeknight cooking into something calmer, tastier, and easier to repeat.",
    pace: "25-45 minute lessons",
    focus: "Seasoning, timing, proteins, sides, meal flow",
    badges: ["Weeknight ready", "Confidence builder", "Family meals"],
    steps: ["Learn seasoning and timing", "Cook proteins without guessing", "Plan two or three meals ahead"],
    modules: [
      { title: "Season With Sense", text: "Salt, acid, herbs, spice, and how to fix food that tastes flat." },
      { title: "Protein Confidence", text: "Chicken, shrimp, salmon, and ground meats without panic or dryness." },
      { title: "Dinner Flow", text: "Prep order, sides, sauces, and getting everything hot at the same time." }
    ],
    skills: ["Build a balanced plate", "Season in layers", "Read doneness cues", "Prep ahead", "Save leftovers with purpose"],
    recipes: ["shrimp-and-grits", "cajun-cream-pasta", "chicken-parmesan"]
  },
  {
    id: "professional-mode",
    title: "Professional Mode",
    eyebrow: "Cook like you mean it",
    level: "Advanced",
    image: "assets/ingredients.jpeg",
    description: "Technique-driven recipes, hosting flow, plating, prep lists, and stronger kitchen rhythm.",
    promise: "Practice the rhythm, organization, and finishing touches that make food feel restaurant-level at home.",
    pace: "45-90 minute sessions",
    focus: "Mise en place, sauces, braises, plating, hosting",
    badges: ["Technique driven", "Hosting flow", "Plating polish"],
    steps: ["Prep like a line cook", "Build sauces, reductions, braises, and layered flavor", "Plate and host with calm"],
    modules: [
      { title: "Mise En Place", text: "Prep lists, stations, timing, and the calm that comes from being ready." },
      { title: "Sauce & Braise Lab", text: "Roux, pan sauces, reductions, slow cooking, and flavor concentration." },
      { title: "Plate & Host", text: "Finishing salt, garnish, contrast, serving flow, and table timing." }
    ],
    skills: ["Write a prep list", "Build a sauce base", "Control heat and reduction", "Plate with contrast", "Host without rushing"],
    recipes: ["oxtails", "yakamein", "bourbon-praline-bread-pudding"]
  }
];

const cuisines = [
  { id: "southern", name: "Southern Classics", image: "assets/editorial-kitchen-prep.jpg", blurb: "Comforting dishes, porch-table sides, slow braises, and big hospitality." },
  { id: "creole", name: "Creole & Cajun", image: "assets/editorial-cajun-pasta.jpg", blurb: "New Orleans flavor, seafood, spice, rice, roux, and soulful one-pot meals." },
  { id: "indian", name: "Indian", image: "assets/indian-food.jpeg", blurb: "Layered spices, cozy curries, breads, rice dishes, and generous family-style meals." },
  { id: "mexican", name: "Mexican", image: "assets/american-food.jpeg", blurb: "Chiles, tortillas, salsas, braises, bright toppings, and weeknight-friendly flavor." },
  { id: "caribbean", name: "Caribbean", image: "assets/african-food.jpeg", blurb: "Warm spice, rice and peas, seafood, stews, grilling, and sunny island comfort." },
  { id: "mediterranean", name: "Mediterranean", image: "assets/fresh-bread.jpeg", blurb: "Fresh herbs, olive oil, grilled proteins, breads, salads, and bright sauces." },
  { id: "asian-inspired", name: "Asian Inspired", image: "assets/editorial-cooking-hero.jpg", blurb: "Crisp, saucy, family-friendly dinners with bold pantry flavor." },
  { id: "italian", name: "Italian Comfort", image: "assets/editorial-cajun-pasta.jpg", blurb: "Pasta nights, red sauce, baked mains, and beginner-friendly classics." },
  { id: "hosting", name: "Party & Hosting", image: "assets/editorial-kitchen-prep.jpg", blurb: "Boards, bites, desserts, and dinner-party helpers that make people feel cared for." },
  { id: "global", name: "Global Flavors", image: "assets/editorial-culture-travel.jpg", blurb: "A warm bridge from Southern kitchens to flavors from everywhere." }
];

let recipes = [
  {
    id: "pb-and-j-sandwich",
    title: "Classic PB&J Sandwich",
    cuisine: "southern",
    category: "Kid-Friendly Cooking",
    image: "assets/kid-friendly.jpeg",
    time: "10 min",
    level: "Beginner",
    servings: 1,
    path: "kid-chefs",
    description: "A first-kitchen sandwich that teaches spreading, slicing, cleanup, and making food with care.",
    ingredients: ["2 slices soft sandwich bread", "2 tbsp peanut butter or sunflower butter", "1 tbsp jelly or jam", "Banana slices, optional", "Honey, optional"],
    steps: ["Wash hands and wipe the counter.", "Lay both slices of bread on a plate.", "Spread peanut butter on one slice and jelly on the other.", "Add banana slices if using.", "Close the sandwich, cut with grown-up help if needed, and wipe up sticky spots."],
    tags: ["kid chefs", "no-cook", "sandwich", "beginner"]
  },
  {
    id: "stovetop-mac-and-cheese",
    title: "Easy Stovetop Mac and Cheese",
    cuisine: "southern",
    category: "Kid-Friendly Cooking",
    image: "assets/pasta.jpeg",
    time: "20 min",
    level: "Beginner",
    servings: 4,
    path: "kid-chefs",
    description: "Creamy mac and cheese for practicing measuring, stirring, draining, and melting cheese with grown-up help.",
    ingredients: ["2 cups elbow macaroni", "1 cup shredded cheddar", "1/2 cup milk", "1 tbsp butter", "Pinch of salt", "Black pepper, optional"],
    steps: ["Boil macaroni in salted water with grown-up help.", "Drain pasta carefully.", "Return pasta to the warm pot on low heat.", "Stir in butter, milk, and cheese until creamy.", "Taste and add a tiny pinch of salt or pepper if needed."],
    tags: ["kid chefs", "mac and cheese", "stirring", "comfort food"]
  },
  {
    id: "mini-pizza-bagels",
    title: "Mini Pizza Bagels",
    cuisine: "italian",
    category: "Kid-Friendly Cooking",
    image: "assets/american-food.jpeg",
    time: "15 min",
    level: "Beginner",
    servings: 2,
    path: "kid-chefs",
    description: "A simple toaster-oven style lesson for saucing, sprinkling, and choosing toppings.",
    ingredients: ["2 mini bagels, split", "1/3 cup pizza sauce", "1/2 cup shredded mozzarella", "Pepperoni or veggies", "Italian seasoning, optional"],
    steps: ["Place bagel halves on a baking sheet.", "Spread a spoonful of sauce on each half.", "Sprinkle cheese over the sauce.", "Add toppings.", "Bake with grown-up help until cheese melts and cool before eating."],
    tags: ["kid chefs", "pizza", "snack", "beginner"]
  },
  {
    id: "fruit-kabobs",
    title: "Rainbow Fruit Kabobs",
    cuisine: "global",
    category: "Kid-Friendly Cooking",
    image: "assets/ingredients.jpeg",
    time: "15 min",
    level: "Beginner",
    servings: 4,
    path: "kid-chefs",
    description: "Colorful fruit skewers that teach washing, pattern-making, and simple presentation.",
    ingredients: ["Strawberries", "Grapes", "Pineapple chunks", "Blueberries", "Melon cubes", "Yogurt for dipping"],
    steps: ["Wash fruit well.", "Ask a grown-up to cut large fruit into bite-size pieces.", "Slide fruit onto skewers in a pattern.", "Place kabobs on a plate.", "Serve with yogurt for dipping."],
    tags: ["kid chefs", "fruit", "no-cook", "snack"]
  },
  {
    id: "soft-scrambled-eggs",
    title: "Soft Scrambled Eggs",
    cuisine: "southern",
    category: "Kid-Friendly Cooking",
    image: "assets/editorial-kitchen-prep.jpg",
    time: "10 min",
    level: "Beginner",
    servings: 2,
    path: "kid-chefs",
    description: "A gentle first stovetop lesson for cracking, whisking, stirring, and watching heat.",
    ingredients: ["4 eggs", "2 tbsp milk", "1 tsp butter", "Pinch of salt", "Toast, optional"],
    steps: ["Crack eggs into a bowl with grown-up help.", "Whisk eggs with milk and a pinch of salt.", "Melt butter in a nonstick pan over low heat.", "Stir eggs slowly until soft and creamy.", "Take eggs off the heat before they look dry."],
    tags: ["kid chefs", "eggs", "breakfast", "stovetop"]
  },
  {
    id: "yakamein",
    title: "Yakamein",
    cuisine: "creole",
    category: "Southern Comfort",
    image: "assets/editorial-kitchen-prep.jpg",
    time: "50 min",
    level: "Intermediate",
    servings: 4,
    path: "professional-mode",
    description: "A New Orleans-style beef noodle bowl with broth, egg, green onion, and cozy spice.",
    ingredients: ["Beef chuck or stew meat", "Spaghetti noodles", "Beef broth", "Boiled eggs", "Green onions", "Creole seasoning"],
    steps: ["Simmer beef with broth and seasoning until tender.", "Boil noodles separately.", "Build bowls with noodles, broth, beef, egg, and green onion.", "Taste and adjust seasoning before serving."]
  },
  {
    id: "shrimp-and-grits",
    title: "Shrimp and Grits with Green Beans",
    cuisine: "southern",
    category: "Southern Comfort",
    image: "assets/editorial-cooking-hero.jpg",
    time: "35 min",
    level: "Beginner",
    servings: 4,
    path: "amateur-home-chef",
    description: "Creamy grits, juicy shrimp, peppers, and green beans for the kind of plate that feels cooked with care.",
    ingredients: ["Shrimp", "Stone-ground grits", "Green beans", "Chicken stock", "Butter", "Bell pepper", "Garlic", "Lemon"],
    steps: ["Cook grits low and slow with stock.", "Saute peppers, garlic, and green beans.", "Cook shrimp until just pink.", "Spoon shrimp and vegetables over creamy grits."]
  },
  {
    id: "oxtails",
    title: "Braised Oxtails",
    cuisine: "southern",
    category: "Family Dinners",
    image: "assets/editorial-kitchen-prep.jpg",
    time: "3 hr",
    level: "Advanced",
    servings: 6,
    path: "professional-mode",
    description: "Tender oxtails braised with aromatics until the gravy turns deep, glossy, and rich.",
    ingredients: ["Oxtails", "Onion", "Carrots", "Celery", "Garlic", "Beef stock", "Thyme"],
    steps: ["Season and brown oxtails well.", "Cook aromatics in the same pot.", "Add stock and thyme.", "Braise covered until tender and reduce the gravy."]
  },
  {
    id: "orange-chicken",
    title: "Orange Chicken",
    cuisine: "asian-inspired",
    category: "Kid-Friendly Cooking",
    image: "assets/editorial-cooking-hero.jpg",
    time: "30 min",
    level: "Beginner",
    servings: 4,
    path: "kid-chefs",
    description: "Crispy chicken bites tossed in a sweet orange glaze that kids can help mix.",
    ingredients: ["Chicken breast", "Cornstarch", "Orange juice", "Soy sauce", "Honey", "Garlic", "Rice"],
    steps: ["Coat chicken pieces with cornstarch.", "Pan-cook until crisp and cooked through.", "Simmer orange juice, soy sauce, honey, and garlic.", "Toss chicken in sauce and serve over rice."]
  },
  {
    id: "cajun-cream-pasta",
    title: "Cajun Cream Salmon Rotini Pasta",
    cuisine: "creole",
    category: "Quick Weeknight Meals",
    image: "assets/editorial-cajun-pasta.jpg",
    time: "30 min",
    level: "Beginner",
    servings: 4,
    path: "amateur-home-chef",
    description: "A creamy, lightly spicy rotini pasta with salmon, Cajun seasoning, and a sauce that comes together fast.",
    ingredients: ["Rotini pasta", "Salmon", "Cajun seasoning", "Cream", "Parmesan", "Bell pepper"],
    steps: ["Boil rotini in salted water.", "Sear salmon with Cajun seasoning.", "Add pepper, cream, and parmesan.", "Toss pasta with sauce and flaked salmon."]
  },
  {
    id: "chicken-parmesan",
    title: "Chicken Parmesan",
    cuisine: "italian",
    category: "Family Dinners",
    image: "assets/editorial-cooking-hero.jpg",
    time: "45 min",
    level: "Intermediate",
    servings: 4,
    path: "amateur-home-chef",
    description: "Crisp breaded chicken layered with marinara and cheese for a family-dinner favorite.",
    ingredients: ["Chicken cutlets", "Breadcrumbs", "Eggs", "Marinara", "Mozzarella", "Parmesan"],
    steps: ["Bread chicken with flour, egg, and breadcrumbs.", "Pan-fry until golden.", "Top with marinara and cheese.", "Bake until bubbly and cooked through."]
  },
  {
    id: "crab-rangoon",
    title: "Crab Rangoon",
    cuisine: "asian-inspired",
    category: "Party & Hosting",
    image: "assets/editorial-kitchen-prep.jpg",
    time: "35 min",
    level: "Intermediate",
    servings: 8,
    path: "professional-mode",
    description: "Crispy wontons filled with creamy crab, scallions, and a little sweetness.",
    ingredients: ["Wonton wrappers", "Cream cheese", "Crab meat", "Green onion", "Garlic powder", "Sweet chili sauce"],
    steps: ["Mix filling until smooth.", "Spoon into wonton wrappers.", "Seal with water.", "Fry or air-fry until crisp and serve with sauce."]
  },
  {
    id: "deviled-eggs",
    title: "Deviled Eggs",
    cuisine: "southern",
    category: "Beginner Basics",
    image: "assets/editorial-kitchen-prep.jpg",
    time: "25 min",
    level: "Beginner",
    servings: 12,
    path: "kid-chefs",
    description: "A party-table classic that teaches boiling, peeling, mixing, and seasoning.",
    ingredients: ["Eggs", "Mayonnaise", "Mustard", "Relish", "Paprika", "Salt"],
    steps: ["Boil and cool eggs.", "Peel and halve them.", "Mix yolks with mayo, mustard, relish, and salt.", "Pipe or spoon filling back into whites."]
  },
  {
    id: "charcuterie-boards",
    title: "Charcuterie Boards",
    cuisine: "hosting",
    category: "Party & Hosting",
    image: "assets/editorial-kitchen-prep.jpg",
    time: "20 min",
    level: "Beginner",
    servings: 8,
    path: "kid-chefs",
    description: "A no-stress hosting board with cheese, fruit, crackers, dips, and easy visual balance.",
    ingredients: ["Cheese", "Crackers", "Fruit", "Nuts", "Pickles", "Jam", "Cured meat"],
    steps: ["Place bowls and cheeses first.", "Add crackers in small rivers.", "Fill gaps with fruit and nuts.", "Finish with color and height."]
  },
  {
    id: "bourbon-praline-bread-pudding",
    title: "Bourbon Praline Bread Pudding",
    cuisine: "southern",
    category: "Party & Hosting",
    image: "assets/editorial-kitchen-prep.jpg",
    time: "1 hr 15 min",
    level: "Intermediate",
    servings: 10,
    path: "professional-mode",
    description: "Custardy bread pudding with pecans and a buttery praline-style sauce.",
    ingredients: ["Day-old bread", "Eggs", "Cream", "Brown sugar", "Pecans", "Vanilla", "Bourbon extract"],
    steps: ["Soak bread in custard.", "Fold in pecans.", "Bake until set and golden.", "Spoon warm praline sauce over the top."]
  }
];

let personalRecipeIds = [
  "orange-chicken",
  "crab-rangoon",
  "yakamein",
  "shrimp-and-grits",
  "oxtails",
  "cajun-cream-pasta",
  "roasted-vegetable-tray",
  "white-chicken-chili",
  "general-tso-chicken",
  "cashew-chicken",
  "fried-rice",
  "chicken-parmesan",
  "deviled-eggs",
  "rotel-dip",
  "party-meatballs",
  "charcuterie-boards",
  "dessert-charcuterie-board",
  "bourbon-praline-bread-pudding",
  "blackened-fish",
  "tuscan-chicken",
  "garlic-wings",
  "pineapple-fried-rice",
  "lamb-bone-broth-soup"
];

recipes.push(
  {
    id: "roasted-vegetable-tray",
    title: "Roasted Broccoli, Zucchini, Red Onion, Cherry Tomatoes, and Sweet Potatoes",
    cuisine: "global",
    category: "Beginner Basics",
    image: "assets/editorial-kitchen-prep.jpg",
    time: "40 min",
    level: "Beginner",
    servings: 4,
    path: "amateur-home-chef",
    description: "A colorful sheet-pan vegetable tray from Shay's real kitchen rotation: simple, flexible, and good with almost anything.",
    ingredients: ["Broccoli", "Zucchini", "Red onion", "Cherry tomatoes", "Sweet potatoes", "Olive oil", "Garlic seasoning"],
    steps: ["Cut vegetables into similar sizes.", "Toss with oil and seasoning.", "Roast sweet potatoes first, then add tender vegetables.", "Finish when browned at the edges."]
  },
  {
    id: "white-chicken-chili",
    title: "White Chicken Chili / Southwest Chicken Soup",
    cuisine: "southern",
    category: "Family Dinners",
    image: "assets/editorial-cooking-hero.jpg",
    time: "45 min",
    level: "Beginner",
    servings: 6,
    path: "amateur-home-chef",
    description: "A cozy planned soup with chicken, beans, corn, green chiles, and southwest flavor.",
    ingredients: ["Chicken", "White beans", "Corn", "Green chiles", "Chicken broth", "Cream cheese", "Cumin"],
    steps: ["Simmer chicken with broth, beans, corn, and chiles.", "Season with cumin and salt.", "Shred chicken.", "Stir in cream cheese until creamy."]
  },
  {
    id: "general-tso-chicken",
    title: "General Tso-Style Chicken",
    cuisine: "asian-inspired",
    category: "Global Flavors",
    image: "assets/editorial-cooking-hero.jpg",
    time: "35 min",
    level: "Intermediate",
    servings: 4,
    path: "amateur-home-chef",
    description: "Sweet, tangy, lightly spicy chicken bites inspired by takeout but made for a home kitchen.",
    ingredients: ["Chicken thighs", "Cornstarch", "Soy sauce", "Rice vinegar", "Brown sugar", "Garlic", "Chili flakes"],
    steps: ["Coat chicken with cornstarch.", "Cook until crisp.", "Simmer sauce until glossy.", "Toss chicken in sauce and serve with rice."]
  },
  {
    id: "cashew-chicken",
    title: "Cashew Chicken",
    cuisine: "asian-inspired",
    category: "Quick Weeknight Meals",
    image: "assets/editorial-cooking-hero.jpg",
    time: "30 min",
    level: "Beginner",
    servings: 4,
    path: "amateur-home-chef",
    description: "A planned weeknight stir-fry with tender chicken, cashews, vegetables, and a savory sauce.",
    ingredients: ["Chicken breast", "Cashews", "Bell pepper", "Soy sauce", "Honey", "Garlic", "Rice"],
    steps: ["Cook chicken pieces until browned.", "Add peppers and garlic.", "Stir in sauce.", "Finish with cashews and serve over rice."]
  },
  {
    id: "fried-rice",
    title: "Fried Rice",
    cuisine: "asian-inspired",
    category: "Quick Weeknight Meals",
    image: "assets/editorial-kitchen-prep.jpg",
    time: "20 min",
    level: "Beginner",
    servings: 4,
    path: "kid-chefs",
    description: "A practical leftover-rice meal that teaches timing, high heat, and seasoning.",
    ingredients: ["Cold rice", "Eggs", "Peas and carrots", "Soy sauce", "Green onion", "Oil"],
    steps: ["Scramble eggs and set aside.", "Cook vegetables.", "Add cold rice and soy sauce.", "Fold eggs back in and finish with green onion."]
  },
  {
    id: "rotel-dip",
    title: "Rotel Dip",
    cuisine: "hosting",
    category: "Party & Hosting",
    image: "assets/editorial-kitchen-prep.jpg",
    time: "20 min",
    level: "Beginner",
    servings: 10,
    path: "kid-chefs",
    description: "A familiar party dip for the Brent & Co. table: creamy, easy, and made for gathering.",
    ingredients: ["Velveeta or melting cheese", "Rotel tomatoes", "Ground beef or sausage", "Tortilla chips"],
    steps: ["Brown meat if using.", "Melt cheese with tomatoes.", "Stir everything together.", "Keep warm and serve with chips."]
  },
  {
    id: "party-meatballs",
    title: "Party Meatballs",
    cuisine: "hosting",
    category: "Party & Hosting",
    image: "assets/editorial-kitchen-prep.jpg",
    time: "35 min",
    level: "Beginner",
    servings: 10,
    path: "amateur-home-chef",
    description: "Saucy bite-size meatballs for hosting, potlucks, and game nights.",
    ingredients: ["Meatballs", "Chili sauce", "Grape jelly", "Worcestershire", "Parsley"],
    steps: ["Warm sauce ingredients together.", "Add meatballs.", "Simmer until glossy and hot.", "Serve with toothpicks."]
  },
  {
    id: "dessert-charcuterie-board",
    title: "Dessert Charcuterie Board",
    cuisine: "hosting",
    category: "Party & Hosting",
    image: "assets/editorial-kitchen-prep.jpg",
    time: "25 min",
    level: "Beginner",
    servings: 10,
    path: "kid-chefs",
    description: "A sweet board idea with fruit, cookies, chocolate, dips, and pretty little bites.",
    ingredients: ["Cookies", "Chocolate", "Berries", "Marshmallows", "Caramel dip", "Pretzels"],
    steps: ["Place dips first.", "Group cookies and fruit.", "Add chocolate and salty bites.", "Fill gaps so the board feels abundant."]
  },
  {
    id: "blackened-fish",
    title: "Blackened Fish",
    cuisine: "creole",
    category: "Quick Weeknight Meals",
    image: "assets/editorial-kitchen-prep.jpg",
    time: "25 min",
    level: "Intermediate",
    servings: 4,
    path: "professional-mode",
    description: "A bold skillet fish idea with blackened seasoning and a fast weeknight feel.",
    ingredients: ["White fish fillets", "Blackened seasoning", "Butter", "Lemon", "Rice or vegetables"],
    steps: ["Pat fish dry.", "Season generously.", "Sear in a hot skillet.", "Finish with lemon and serve right away."]
  },
  {
    id: "tuscan-chicken",
    title: "Tuscan Chicken",
    cuisine: "italian",
    category: "Family Dinners",
    image: "assets/editorial-cooking-hero.jpg",
    time: "40 min",
    level: "Intermediate",
    servings: 4,
    path: "amateur-home-chef",
    description: "Creamy chicken with spinach, tomatoes, garlic, and parmesan for a polished dinner.",
    ingredients: ["Chicken cutlets", "Spinach", "Sun-dried tomatoes", "Cream", "Parmesan", "Garlic"],
    steps: ["Sear chicken.", "Build cream sauce with garlic and tomatoes.", "Add spinach.", "Return chicken and simmer until done."]
  },
  {
    id: "garlic-wings",
    title: "Garlic Wings",
    cuisine: "southern",
    category: "Party & Hosting",
    image: "assets/editorial-cooking-hero.jpg",
    time: "50 min",
    level: "Beginner",
    servings: 6,
    path: "kid-chefs",
    description: "Crispy wings tossed in buttery garlic flavor for parties, dinner, or a snack table.",
    ingredients: ["Chicken wings", "Garlic", "Butter", "Parsley", "Lemon pepper", "Salt"],
    steps: ["Season and bake or air-fry wings.", "Melt butter with garlic.", "Toss wings in garlic butter.", "Finish with parsley."]
  },
  {
    id: "pineapple-fried-rice",
    title: "Pineapple Fried Rice",
    cuisine: "asian-inspired",
    category: "Global Flavors",
    image: "assets/editorial-kitchen-prep.jpg",
    time: "25 min",
    level: "Beginner",
    servings: 4,
    path: "amateur-home-chef",
    description: "A bright fried rice idea with pineapple, vegetables, egg, and a sweet-savory finish.",
    ingredients: ["Cold rice", "Pineapple", "Eggs", "Peas", "Soy sauce", "Green onion"],
    steps: ["Scramble eggs.", "Cook vegetables and pineapple.", "Add rice and sauce.", "Fold eggs back in and serve."]
  },
  {
    id: "lamb-bone-broth-soup",
    title: "Lamb Bone Broth / Soup Idea",
    cuisine: "global",
    category: "Family Dinners",
    image: "assets/editorial-kitchen-prep.jpg",
    time: "2 hr",
    level: "Advanced",
    servings: 6,
    path: "professional-mode",
    description: "A planned soup idea built from lamb bones, aromatics, herbs, and slow simmered broth.",
    ingredients: ["Lamb bones", "Onion", "Carrots", "Celery", "Garlic", "Bay leaf", "Herbs"],
    steps: ["Roast or brown bones for flavor.", "Simmer with aromatics.", "Strain broth.", "Build soup with vegetables, meat, or noodles."]
  },
  {
    id: "tandoori-chicken",
    title: "Tandoori-Style Chicken",
    cuisine: "indian",
    category: "Global Flavors",
    image: "assets/tandoori-chicken.jpeg",
    prep_time: "20 min",
    cook_time: "35 min",
    time: "55 min",
    level: "Intermediate",
    difficulty: "Intermediate",
    servings: 4,
    path: "amateur-home-chef",
    description: "Juicy yogurt-marinated chicken with warm spices, lemon, garlic, and a roasted edge.",
    ingredients: ["Chicken thighs", "Plain yogurt", "Lemon juice", "Garlic", "Ginger", "Garam masala", "Paprika", "Turmeric"],
    steps: ["Mix yogurt, lemon, garlic, ginger, and spices.", "Coat chicken and marinate at least 30 minutes.", "Roast or grill until charred at the edges and cooked through.", "Rest before serving with rice, naan, and cucumber salad."],
    tips: ["Bloom a pinch of spices in warm oil for extra aroma.", "Use thighs for the juiciest beginner-friendly result."],
    related_recipe_ids: ["butter-chicken", "chicken-tikka-masala", "biryani", "garlic-naan"],
    tags: ["chicken", "spices", "yogurt marinade", "naan"]
  },
  {
    id: "butter-chicken",
    title: "Butter Chicken",
    cuisine: "indian",
    category: "Family Dinners",
    image: "assets/indian-food.jpeg",
    prep_time: "15 min",
    cook_time: "35 min",
    time: "50 min",
    level: "Intermediate",
    difficulty: "Intermediate",
    servings: 4,
    path: "amateur-home-chef",
    description: "Tender chicken simmered in a creamy tomato sauce with warm spice and a soft buttery finish.",
    ingredients: ["Chicken", "Tomato puree", "Cream", "Butter", "Garam masala", "Garlic", "Ginger"],
    steps: ["Season and brown chicken.", "Cook garlic, ginger, tomato, and spices.", "Simmer chicken in the sauce.", "Finish with cream and butter."],
    tags: ["chicken", "curry", "tomato", "cream"]
  },
  {
    id: "chicken-tikka-masala",
    title: "Chicken Tikka Masala",
    cuisine: "indian",
    category: "Global Flavors",
    image: "assets/tandoori-chicken.jpeg",
    prep_time: "20 min",
    cook_time: "30 min",
    time: "50 min",
    level: "Intermediate",
    difficulty: "Intermediate",
    servings: 4,
    path: "amateur-home-chef",
    description: "Spiced chicken pieces in a creamy curry-style sauce made for rice or naan.",
    ingredients: ["Chicken", "Yogurt", "Tomato sauce", "Cream", "Garam masala", "Cumin", "Coriander"],
    steps: ["Marinate chicken with yogurt and spices.", "Sear or broil the chicken.", "Build a tomato spice sauce.", "Simmer together and finish with cream."],
    tags: ["chicken", "masala", "curry", "rice"]
  },
  {
    id: "biryani",
    title: "Beginner Chicken Biryani",
    cuisine: "indian",
    category: "Family Dinners",
    image: "assets/indian-food.jpeg",
    prep_time: "25 min",
    cook_time: "45 min",
    time: "1 hr 10 min",
    level: "Intermediate",
    difficulty: "Intermediate",
    servings: 6,
    path: "professional-mode",
    description: "Fragrant rice layered with seasoned chicken, onions, herbs, and gentle spice.",
    ingredients: ["Basmati rice", "Chicken", "Onion", "Yogurt", "Garam masala", "Cilantro", "Mint"],
    steps: ["Par-cook rice until just tender.", "Cook spiced chicken and onions.", "Layer rice, chicken, herbs, and a splash of water.", "Steam covered until fragrant."],
    tags: ["rice", "chicken", "spices", "family dinner"]
  },
  {
    id: "palak-paneer",
    title: "Palak Paneer",
    cuisine: "indian",
    category: "Vegetarian",
    image: "assets/indian-food.jpeg",
    prep_time: "15 min",
    cook_time: "25 min",
    time: "40 min",
    level: "Beginner",
    difficulty: "Beginner",
    servings: 4,
    path: "amateur-home-chef",
    description: "Creamy spinach with paneer cubes, garlic, ginger, and soft warm spice.",
    ingredients: ["Spinach", "Paneer", "Onion", "Garlic", "Ginger", "Cumin", "Cream"],
    steps: ["Wilt spinach and blend until smooth.", "Cook onion, garlic, ginger, and spices.", "Add spinach sauce and paneer.", "Simmer gently and finish with cream."],
    tags: ["vegetarian", "spinach", "paneer", "curry"]
  },
  {
    id: "chana-masala",
    title: "Chana Masala",
    cuisine: "indian",
    category: "Vegetarian",
    image: "assets/indian-food.jpeg",
    prep_time: "10 min",
    cook_time: "25 min",
    time: "35 min",
    level: "Beginner",
    difficulty: "Beginner",
    servings: 4,
    path: "kid-chefs",
    description: "Chickpeas simmered with tomato, onion, cumin, coriander, and lemon.",
    ingredients: ["Chickpeas", "Tomatoes", "Onion", "Garlic", "Cumin", "Coriander", "Lemon"],
    steps: ["Cook onion and garlic until soft.", "Add spices and tomatoes.", "Simmer chickpeas in the sauce.", "Finish with lemon and herbs."],
    tags: ["vegetarian", "chickpeas", "curry", "quick"]
  },
  {
    id: "garlic-naan",
    title: "Garlic Naan",
    cuisine: "indian",
    category: "Beginner Basics",
    image: "assets/fresh-bread.jpeg",
    prep_time: "20 min",
    cook_time: "10 min",
    time: "30 min",
    level: "Beginner",
    difficulty: "Beginner",
    servings: 6,
    path: "kid-chefs",
    description: "Soft skillet flatbread brushed with garlic butter and herbs.",
    ingredients: ["Flour", "Yogurt", "Baking powder", "Salt", "Garlic", "Butter", "Cilantro"],
    steps: ["Mix a soft dough.", "Rest briefly and divide.", "Cook in a hot skillet.", "Brush with garlic butter."],
    tags: ["bread", "naan", "garlic", "basics"]
  },
  {
    id: "fried-chicken",
    title: "Southern Fried Chicken",
    cuisine: "southern",
    category: "Southern Comfort",
    image: "assets/beautiful-chicken.jpeg",
    prep_time: "20 min",
    cook_time: "25 min",
    time: "45 min",
    level: "Intermediate",
    difficulty: "Intermediate",
    servings: 6,
    path: "professional-mode",
    description: "Crispy, seasoned chicken with a family-table crust and juicy inside.",
    ingredients: ["Chicken pieces", "Buttermilk", "Hot sauce", "Flour", "Seasoning salt", "Paprika", "Oil"],
    steps: ["Soak chicken in seasoned buttermilk.", "Dredge in seasoned flour.", "Fry at steady heat until golden.", "Rest on a rack before serving."],
    tags: ["chicken", "soul food", "cast iron", "fried"]
  },
  {
    id: "mac-and-cheese",
    title: "Baked Mac and Cheese",
    cuisine: "southern",
    category: "Southern Comfort",
    image: "assets/american-food.jpeg",
    prep_time: "15 min",
    cook_time: "35 min",
    time: "50 min",
    level: "Beginner",
    difficulty: "Beginner",
    servings: 8,
    path: "amateur-home-chef",
    description: "Creamy baked macaroni with a golden cheese top and holiday-table energy.",
    ingredients: ["Macaroni", "Cheddar", "Evaporated milk", "Eggs", "Butter", "Seasoning"],
    steps: ["Boil pasta just shy of tender.", "Mix cheese custard.", "Fold pasta and cheese together.", "Bake until bubbly and golden."],
    tags: ["cheese", "side dish", "holiday", "soul food"]
  },
  {
    id: "collard-greens",
    title: "Collard Greens",
    cuisine: "southern",
    category: "Beginner Basics",
    image: "assets/ingredients.jpeg",
    prep_time: "20 min",
    cook_time: "1 hr 30 min",
    time: "1 hr 50 min",
    level: "Beginner",
    difficulty: "Beginner",
    servings: 8,
    path: "amateur-home-chef",
    description: "Tender greens simmered with smoky depth, pepper vinegar, and patience.",
    ingredients: ["Collard greens", "Smoked turkey", "Onion", "Garlic", "Chicken stock", "Vinegar", "Pepper flakes"],
    steps: ["Wash and chop greens.", "Simmer smoked turkey with aromatics.", "Add greens and stock.", "Cook until tender and season to taste."],
    tags: ["greens", "soul food", "side dish", "slow cooking"]
  },
  {
    id: "cornbread",
    title: "Skillet Cornbread",
    cuisine: "southern",
    category: "Beginner Basics",
    image: "assets/fresh-bread.jpeg",
    prep_time: "10 min",
    cook_time: "20 min",
    time: "30 min",
    level: "Beginner",
    difficulty: "Beginner",
    servings: 8,
    path: "kid-chefs",
    description: "Golden cast-iron cornbread with crisp edges and a soft middle.",
    ingredients: ["Cornmeal", "Flour", "Buttermilk", "Egg", "Butter", "Baking powder", "Salt"],
    steps: ["Heat skillet with butter.", "Mix wet and dry ingredients.", "Pour batter into hot skillet.", "Bake until golden."],
    tags: ["cornbread", "cast iron", "bread", "soul food"]
  },
  {
    id: "smothered-pork-chops",
    title: "Smothered Pork Chops",
    cuisine: "southern",
    category: "Family Dinners",
    image: "assets/american-food.jpeg",
    prep_time: "15 min",
    cook_time: "40 min",
    time: "55 min",
    level: "Intermediate",
    difficulty: "Intermediate",
    servings: 4,
    path: "professional-mode",
    description: "Seared pork chops simmered in onion gravy until tender and deeply comforting.",
    ingredients: ["Pork chops", "Onion", "Flour", "Chicken stock", "Garlic", "Seasoning", "Oil"],
    steps: ["Season and sear pork chops.", "Cook onions in the same pan.", "Build a light gravy.", "Return chops and simmer until tender."],
    tags: ["gravy", "pork", "soul food", "skillet"]
  },
  {
    id: "fried-catfish",
    title: "Fried Catfish",
    cuisine: "southern",
    category: "Seafood",
    image: "assets/american-food.jpeg",
    prep_time: "15 min",
    cook_time: "15 min",
    time: "30 min",
    level: "Beginner",
    difficulty: "Beginner",
    servings: 4,
    path: "amateur-home-chef",
    description: "Crisp cornmeal-crusted catfish with lemon, hot sauce, and fish-fry spirit.",
    ingredients: ["Catfish fillets", "Cornmeal", "Flour", "Cajun seasoning", "Egg", "Milk", "Oil"],
    steps: ["Season fish.", "Dip in egg wash.", "Coat with cornmeal mix.", "Fry until crisp and flaky."],
    tags: ["seafood", "fish fry", "cornmeal", "soul food"]
  }
);

const lessons = [
  { id: "knife-skills", title: "Knife Skills", image: "assets/editorial-kitchen-prep.jpg", text: "Practice safe grips, stable cutting boards, and beginner-friendly cuts." },
  { id: "seasoning", title: "Seasoning Without Fear", image: "assets/editorial-kitchen-prep.jpg", text: "Learn salt, acid, fat, heat, herbs, and tasting as you go." },
  { id: "rice-grits-pasta", title: "Rice, Grits, and Pasta", image: "assets/editorial-cajun-pasta.jpg", text: "Master the everyday bases that make dinner feel possible." },
  { id: "hosting-flow", title: "Hosting Flow", image: "assets/editorial-kitchen-prep.jpg", text: "Prep lists, timing, serving pieces, and keeping guests comfortable." }
];

const cuisine101 = {
  indian: {
    title: "Indian Cuisine 101",
    items: ["Common spices", "Garam masala", "Curry bases", "How to bloom spices", "Naan basics"]
  },
  southern: {
    title: "Southern Cooking 101",
    items: ["Cast iron basics", "Seasoning meat", "Greens", "Cornbread", "Roux and gravy"]
  },
  creole: {
    title: "Creole & Cajun 101",
    items: ["Holy trinity", "Roux color", "Blackening spice", "Seafood timing", "Rice and one-pot flow"]
  },
  mexican: {
    title: "Mexican Cooking 101",
    items: ["Chiles", "Salsas", "Tortillas", "Adobo", "Mole basics"]
  },
  caribbean: {
    title: "Caribbean Cooking 101",
    items: ["Jerk seasoning", "Rice and peas", "Plantains", "Scotch bonnet heat", "Slow stews"]
  },
  mediterranean: {
    title: "Mediterranean Cooking 101",
    items: ["Olive oil", "Fresh herbs", "Grilled proteins", "Yogurt sauces", "Flatbreads"]
  },
  italian: {
    title: "Italian Comfort 101",
    items: ["Pasta water", "Red sauce", "Breading cutlets", "Cream sauces", "Cheese finishing"]
  },
  "asian-inspired": {
    title: "Asian-Inspired 101",
    items: ["Stir-fry setup", "Rice timing", "Sauce balance", "Cornstarch coating", "High-heat cooking"]
  },
  hosting: {
    title: "Hosting 101",
    items: ["Board balance", "Make-ahead bites", "Serving flow", "Warm dips", "Dessert stations"]
  },
  global: {
    title: "Global Flavor 101",
    items: ["Taste as you go", "Pantry building", "Sauce foundations", "Texture contrast", "Serving with confidence"]
  }
};

function normalizeRecipe(recipe) {
  recipe.image_url ||= recipe.image;
  recipe.image ||= recipe.image_url;
  recipe.prep_time ||= recipe.prepTime || "15 min";
  recipe.cook_time ||= recipe.cookTime || recipe.time || "30 min";
  recipe.prepTime ||= recipe.prep_time;
  recipe.cookTime ||= recipe.cook_time;
  recipe.difficulty ||= recipe.level || "Beginner";
  recipe.level ||= recipe.difficulty;
  recipe.directions ||= recipe.steps || [];
  recipe.steps ||= recipe.directions;
  recipe.tags ||= [recipe.category, recipe.cuisine, recipe.path].filter(Boolean);
  recipe.related_recipe_ids ||= recipe.relatedRecipeIds || [];
  recipe.video_url ||= recipe.videoUrl || "";
  recipe.videoUrl ||= recipe.video_url;
  recipe.source ||= { type: "internal", name: "Let's Cook Y'all" };
  return recipe;
}

recipes = recipes.map(normalizeRecipe);

function cuisineName(cuisineId) {
  return cuisines.find((item) => item.id === cuisineId)?.name || "Global Flavors";
}

function recipeDuration(recipe) {
  return [recipe.prep_time && `Prep ${recipe.prep_time}`, recipe.cook_time && `Cook ${recipe.cook_time}`].filter(Boolean).join(" / ") || recipe.time || "";
}

function recipeSourceNote(recipe) {
  const source = recipe.source || {};
  if (!source.name || source.type === "original" || source.type === "internal") return "";
  const label = source.url ? `<a href="${source.url}" target="_blank" rel="noreferrer">${source.name}</a>` : source.name;
  return `<p class="source-note">Source: ${label}. Reviewed and organized for the Let's Cook Y'all kitchen.</p>`;
}

function relatedRecipesFor(recipe, limit = 6) {
  const picked = [];
  const add = (items) => {
    items.forEach((item) => {
      if (item && item.id !== recipe.id && !picked.some((existing) => existing.id === item.id) && picked.length < limit) {
        picked.push(item);
      }
    });
  };
  add((recipe.related_recipe_ids || []).map((id) => recipes.find((item) => item.id === id)));
  add(recipes.filter((item) => item.cuisine === recipe.cuisine));
  if (picked.length < limit) {
    const tags = new Set(recipe.tags || []);
    add(recipes.filter((item) => item.tags?.some((tag) => tags.has(tag)) || item.category === recipe.category));
  }
  return picked.slice(0, limit);
}

function otherCuisinesFor(activeCuisine) {
  return cuisines.filter((item) => item.id !== activeCuisine && !["hosting", "global"].includes(item.id)).slice(0, 7);
}

function cuisine101For(cuisineId) {
  return cuisine101[cuisineId] || cuisine101.global;
}

const hostingIdeas = [
  { title: "Sunday Comfort Supper", text: "Braised oxtails, deviled eggs, greens, and bread pudding.", recipes: ["oxtails", "deviled-eggs", "bourbon-praline-bread-pudding"] },
  { title: "Game Night Bites", text: "Crab rangoon, charcuterie, orange chicken bites, and sparkling lemonade.", recipes: ["crab-rangoon", "charcuterie-boards", "orange-chicken"] },
  { title: "Beginner Dinner Party", text: "Shrimp and grits with a board to start and bread pudding to finish.", recipes: ["shrimp-and-grits", "charcuterie-boards", "bourbon-praline-bread-pudding"] }
];

const app = document.querySelector("#app");
const nav = document.querySelector(".main-nav");
const menuToggle = document.querySelector(".menu-toggle");

let saved = readJSON("letsCookSaved", []);
let planned = readJSON("letsCookPlanned", []);
let submissions = readJSON("letsCookSubmissions", []);
let lessonProgress = readJSON("letsCookLessonProgress", {});
let letsCookSession = {
  authenticated: false,
  user: null,
  status: ""
};

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
});

window.addEventListener("hashchange", render);
document.addEventListener("click", handleClick);
document.addEventListener("submit", handleSubmit);
document.addEventListener("input", handleSearch);
document.addEventListener("change", handleSearch);

function routeParts() {
  const [route, id] = (window.location.hash.replace("#", "") || "lets-cook").split("/");
  return { route, id };
}

function render() {
  const { route, id } = routeParts();
  setActive(route);
  updateAppChrome(route);
  if (route === "home") return renderPlatformHome();
  if (route === "lets-cook") return renderLetsCookHome();
  if (route === "find-the-beat") return renderFindTheBeatHome();
  if (route === "second-chance") return renderSecondChanceHome();
  if (route === "community") return renderCommunity();
  if (route === "kitchen") return renderKitchen();
  if (route === "cook101") return id ? renderLesson(id) : renderCook101();
  if (route === "recipes") return id ? renderRecipe(id) : renderRecipes();
  if (route === "paths") return id ? renderPath(id) : renderPaths();
  if (route === "planner") return renderPlanner();
  if (route === "hosting") return renderHosting();
  if (route === "about") return renderAbout();
  if (route === "account") return renderAccount();
  if (route === "search") return renderRecipes();
  if (route === "cuisine") return renderCuisine(id);
  renderPlatformHome();
}

function setActive(route) {
  const cookingRoutes = ["kitchen", "cook101", "recipes", "paths", "planner", "hosting", "about", "account", "search", "cuisine"];
  const normalizedRoute = cookingRoutes.includes(route) ? "lets-cook" : route;
  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.classList.toggle("active", link.dataset.route === normalizedRoute);
  });
}

function activeAppForRoute(route) {
  const cookingRoutes = ["lets-cook", "kitchen", "cook101", "recipes", "paths", "planner", "hosting", "about", "account", "search", "cuisine"];
  if (cookingRoutes.includes(route)) return ecosystemApps.find((item) => item.id === "lets-cook");
  if (route === "find-the-beat") return ecosystemApps.find((item) => item.id === "find-the-beat");
  if (route === "second-chance") return ecosystemApps.find((item) => item.id === "second-chance");
  return { title: "Brent & Co.", image: "assets/brent-co-logo.svg", accent: "platform" };
}

function updateAppChrome(route) {
  const activeApp = activeAppForRoute(route);
  const mark = document.querySelector(".active-app-mark");
  if (!mark || !activeApp) return;
  mark.className = `active-app-mark ${activeApp.accent || "platform"}`;
  mark.innerHTML = `<img src="${activeApp.image}" alt="" /><span>${activeApp.title}</span>`;
}

function linkAttrs(href) {
  const safeHref = href || "#home";
  const external = safeHref.startsWith("http");
  return `href="${safeHref}"${external ? ' target="_blank" rel="noreferrer"' : ""}`;
}

function hero(title, text, image = "assets/logo.png", actions = "") {
  return `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Brent & Co. / Let's Cook Ya'll</p>
        <h1>${title}</h1>
        <p>${text}</p>
        ${actions ? `<div class="hero-actions">${actions}</div>` : ""}
      </div>
      <figure class="hero-media"><img src="${image}" alt="" /></figure>
    </section>
  `;
}

function platformHero() {
  return `
    <section class="platform-hero">
      <div>
        <img class="platform-wordmark" src="assets/brent-co-wordmark.png" alt="Brent & Co." />
        <p class="eyebrow">Brent & Co. ecosystem</p>
        <h1>One welcoming home for every Brent & Co. platform.</h1>
        <p>Start here, then move into cooking, music, cultural discovery, or career support. Live launch links stay private until each Render service points at the correct app.</p>
        <div class="hero-actions">
          <a class="small-button" href="#storefront">View All Platforms</a>
          <a class="small-button secondary" href="#lets-cook">Preview Let's Cook</a>
        </div>
      </div>
      <div class="ecosystem-preview">
        ${ecosystemApps.map((app) => `<a class="mini-app ${app.accent}" ${linkAttrs(app.externalUrl || app.route)}><span>${app.title}</span><strong>${app.status}</strong></a>`).join("")}
      </div>
    </section>
  `;
}

function renderPlatformHome() {
  app.innerHTML = `
    ${platformHero()}
    <section class="cream-section landing-links" id="storefront">
      <div class="section-heading">
        <p class="eyebrow">Launch pad</p>
        <h2>Choose where you want to go</h2>
        <p>Each platform keeps its own personality, but every path starts from this Brent & Co. home base.</p>
      </div>
      <div class="app-grid">${ecosystemApps.map(appCard).join("")}</div>
    </section>
    <section class="cream-section direct-link-section">
      <div class="section-heading">
        <p class="eyebrow">Launch status</p>
        <h2>Deployment destinations</h2>
      </div>
      <div class="direct-link-grid">
        ${ecosystemApps.map(platformLinkCard).join("")}
      </div>
    </section>
    <section class="gold-section">
      <div class="section-heading">
        <p class="eyebrow">Connected structure</p>
        <h2>A platform family, not random separate projects</h2>
      </div>
      <div class="system-grid">
        <article><strong>Live app first</strong><span>Storefront cards will open the deployed apps once the correct Render services are connected.</span></article>
        <article><strong>Preview preserved</strong><span>The Brent & Co. prototype still includes local previews for visual direction and future planning.</span></article>
        <article><strong>Private source</strong><span>Repository links stay out of the public app experience while development stays organized behind the scenes.</span></article>
      </div>
    </section>
  `;
}

function renderLetsCookHome() {
  app.innerHTML = `
    ${hero(
      "Cook With Confidence",
      "A warm cooking-skills app for kid chefs, home cooks, and hosts who want food to feel welcoming, not intimidating.",
      "assets/logo.png",
      `<a class="small-button" href="#paths">Find Your Path</a><a class="small-button secondary" href="#recipes">Browse Recipes</a><a class="small-button secondary" href="#kitchen">Upload Food Video</a>`
    )}
    ${cookSubnav()}
    <section class="cream-section">
      <div class="feature-grid">
        ${paths.map(pathCard).join("")}
      </div>
    </section>
    <section class="green-section personal-band">
      <div class="section-heading">
        <p class="eyebrow">From my kitchen</p>
        <h2>Shay's Kitchen</h2>
        <p>Meals already cooked, loved, talked about, or planned for the next Brent & Co. table. This is also where cooks can upload food videos.</p>
      </div>
      <div class="recipe-grid">${personalRecipes().slice(0, 6).map(recipeCard).join("")}</div>
      <div class="hero-actions"><a class="small-button" href="#kitchen">Open Shay's Kitchen</a><a class="small-button secondary" href="#kitchen">Upload Food Video</a></div>
    </section>
    <section class="gold-section">
      <div class="section-heading">
        <p class="eyebrow">Southern fresh meets global flavor</p>
        <h2>Start With What Feels Good</h2>
      </div>
      <div class="cuisine-grid">${cuisines.map(cuisineCard).join("")}</div>
    </section>
    <section class="cream-section">
      <div class="section-heading">
        <p class="eyebrow">Tonight's table</p>
        <h2>Warm Picks From The Kitchen</h2>
      </div>
      <div class="recipe-grid">${recipes.slice(0, 6).map(recipeCard).join("")}</div>
    </section>
  `;
}

function renderAppHub(id) {
  const currentApp = ecosystemApps.find((item) => item.id === id) || ecosystemApps[0];
  app.innerHTML = `
    <section class="app-hub ${currentApp.accent}">
      <div class="app-hub-copy">
        <p class="eyebrow">Brent & Co. app</p>
        <h1>${currentApp.title}</h1>
        <p>${currentApp.tagline}</p>
        <div class="hero-actions">${currentApp.links.map(([label, href], index) => `<a class="small-button ${index === 0 ? "" : "secondary"}" ${linkAttrs(href)}>${label}</a>`).join("")}</div>
      </div>
      <figure><img src="${currentApp.image}" alt="" /></figure>
    </section>
    <section class="cream-section">
      <div class="about-layout">
        <article class="detail-panel">
          <p class="eyebrow">${currentApp.status}</p>
          <h2>${currentApp.title}</h2>
          <p class="detail-copy">${currentApp.description}</p>
        </article>
        <article class="detail-panel">
          <h2>Shared Brent & Co. Structure</h2>
          <p class="detail-copy">This app area uses the same hero, card, button, spacing, and motion system as the rest of the platform, while keeping its own accent color and emotional lane.</p>
        </article>
      </div>
      <div class="system-grid app-hub-links">
        ${(appHubSections[id] || []).map((section) => `<article><strong>${section.title}</strong><span>${section.text}</span><a class="small-button secondary" href="#community">Connect Through Community</a></article>`).join("")}
      </div>
    </section>
  `;
}

function renderFindTheBeatHome() {
  const currentApp = ecosystemApps.find((item) => item.id === "find-the-beat");
  const features = [
    ["Artist Discovery", "Profiles for artists, DJs, producers, dancers, playlists, and community showcases."],
    ["Sound Map", "City-based music discovery for venues, creative neighborhoods, and performance energy."],
    ["Creative Sessions", "A home for workshops, listening parties, studio nights, and performance calendars."],
    ["Member Picks", "Community recommendations for songs, venues, creators, and scenes worth watching."]
  ];
  app.innerHTML = `
    <section class="product-home find-home">
      <div class="product-copy">
        <p class="eyebrow">Brent & Co. / Find the Beat</p>
        <img class="product-logo" src="${currentApp.image}" alt="Find the Beat" />
        <h1>Find the rhythm of a city, a scene, and a creative community.</h1>
        <p>${currentApp.description}</p>
        <div class="hero-actions">
          <a class="small-button" ${linkAttrs(liveAppUrls.findTheBeat)}>Preview App</a>
          <a class="small-button secondary" ${linkAttrs("https://brentandco.org/")}>Back to Brent & Co.</a>
        </div>
      </div>
      <figure class="product-preview"><img src="assets/find-the-beat-mockup.png" alt="Find the Beat app mockup" /></figure>
    </section>
    <section class="cream-section">
      <div class="section-heading">
        <p class="eyebrow">Find the Beat home</p>
        <h2>Music discovery with a real destination</h2>
      </div>
      <div class="system-grid">
        ${features.map(([title, text]) => `<article><strong>${title}</strong><span>${text}</span><a class="small-button secondary" ${linkAttrs(liveAppUrls.findTheBeat)}>Open ${title}</a></article>`).join("")}
      </div>
    </section>
  `;
}

function renderSecondChanceHome() {
  const currentApp = ecosystemApps.find((item) => item.id === "second-chance");
  const features = [
    ["Job Pathways", "Supportive tracks for entry-level, remote, skilled trade, healthcare, logistics, and office roles."],
    ["Resume Support", "Profile building, resume sections, interview prep, and confidence-building tools."],
    ["Training Resources", "Programs, certificates, reentry-friendly resources, and practical next steps."],
    ["Employer Partners", "A future home for supportive employers, local partners, and verified opportunities."]
  ];
  app.innerHTML = `
    <section class="product-home career-home">
      <div class="product-copy">
        <p class="eyebrow">Brent & Co. / Second Chance Careers</p>
        <img class="product-logo" src="${currentApp.image}" alt="Second Chance Careers" />
        <h1>Career rebuilding with dignity, clarity, and momentum.</h1>
        <p>${currentApp.description}</p>
        <div class="hero-actions">
          <a class="small-button" ${linkAttrs(liveAppUrls.secondChance)}>Preview App</a>
          <a class="small-button secondary" ${linkAttrs("https://brentandco.org/")}>Back to Brent & Co.</a>
        </div>
      </div>
      <figure class="product-preview"><img src="assets/second-chance-mockup.png" alt="Second Chance Careers app mockup" /></figure>
    </section>
    <section class="cream-section">
      <div class="section-heading">
        <p class="eyebrow">Second Chance home</p>
        <h2>Practical support that feels human</h2>
      </div>
      <div class="system-grid">
        ${features.map(([title, text]) => `<article><strong>${title}</strong><span>${text}</span><a class="small-button secondary" ${linkAttrs(liveAppUrls.secondChance)}>Open ${title}</a></article>`).join("")}
      </div>
    </section>
  `;
}

function renderCommunity() {
  app.innerHTML = `
    ${platformHero()}
    <section class="cream-section">
      <div class="section-heading">
        <p class="eyebrow">Community-centered by design</p>
        <h2>One ecosystem, many ways to feel supported</h2>
      </div>
      <div class="system-grid">
        <article><strong>Create</strong><span>Find the Beat carries creative energy for music, rhythm, and expression.</span></article>
        <article><strong>Learn</strong><span>Let’s Cook Ya’ll teaches kitchen confidence through real meals.</span></article>
        <article><strong>Navigate</strong><span>Community tools give the platform a clear path for identity, direction, and choices.</span></article>
        <article><strong>Rebuild</strong><span>Second Chance Careers supports practical progress with dignity.</span></article>
      </div>
    </section>
  `;
}

function cookSubnav() {
  return `
    <section class="app-subnav" aria-label="Let's Cook Ya'll navigation">
      <a href="#kitchen">Shay's Kitchen</a>
      <a href="#cook101">Cook 101</a>
      <a href="#recipes">Recipes</a>
      <a href="#paths">Cooking Paths</a>
      <a href="#planner">Meal Planner</a>
      <a href="#hosting">Hosting Ideas</a>
      <a href="#about">About</a>
    </section>
  `;
}

function renderKitchen() {
  const personal = personalRecipes();
  app.innerHTML = `
    ${hero(
      "Shay's Kitchen",
      "A personal collection of meals already cooked, already loved, or already planned. This is where Let's Cook Ya'll starts feeling like it grew from a real kitchen.",
      "assets/logo.png",
      `<a class="small-button" href="#planner">Plan One</a><a class="small-button secondary" href="#hosting">Build a Menu</a>`
    )}
    ${cookSubnav()}
    <section class="band">
      <div class="kitchen-note">
        <p class="eyebrow">From My Kitchen</p>
        <h2>Not generic filler. Real table energy.</h2>
        <p>These recipes are starter cards for meals connected to your actual cooking life: orange chicken, crab rangoon, yakamein, shrimp and grits, oxtails, party foods, soups, pastas, wings, boards, and more.</p>
      </div>
    </section>
    <section class="cream-section">
      <div class="recipe-grid">${personal.map(recipeCard).join("")}</div>
    </section>
  `;
}

function renderCook101() {
  app.innerHTML = `
    ${hero("Cook 101", "Simple basics that make the kitchen feel calm: chopping, seasoning, timing, prep, and hosting flow.", "assets/editorial-kitchen-prep.jpg")}
    ${cookSubnav()}
    <section class="cream-section">
      <div class="lesson-grid">${lessons.map(lessonCard).join("")}</div>
    </section>
  `;
}

function renderLesson(id) {
  const lesson = lessons.find((item) => item.id === id) || lessons[0];
  app.innerHTML = `
    ${hero(lesson.title, lesson.text, lesson.image, `<a class="small-button" href="#cook101">All Basics</a>`)}
    ${cookSubnav()}
    <section class="cream-section">
      <article class="detail-panel">
        <h2>${lesson.title}</h2>
        <div class="detail-columns">
          <section><h3>Practice Steps</h3><ol><li>Set up your station before cooking.</li><li>Read the recipe from top to bottom.</li><li>Move slowly, taste often, and repeat the skill.</li></ol></section>
          <section><h3>Recipes To Try</h3><ul>${recipes.slice(0, 4).map((recipe) => `<li><a href="#recipes/${recipe.id}">${recipe.title}</a></li>`).join("")}</ul></section>
        </div>
      </article>
    </section>
  `;
}

function renderRecipes() {
  app.innerHTML = `
    ${hero("Recipes", "Southern classics, quick weeknight meals, global flavor, family dinners, beginner basics, party bites, and kid-friendly cooking.", "assets/editorial-kitchen-prep.jpg")}
    ${cookSubnav()}
    <section class="band">
      <div class="toolbar search-toolbar">
        <input id="searchBox" class="search-input" type="search" placeholder="Search Yakamein, shrimp, beginner, hosting..." />
        <input id="pantryBox" class="search-input" type="search" placeholder="What do you have? chicken, rice, garlic..." />
        <select id="categoryFilter" class="filter-select"><option value="">All categories</option>${categories.map((category) => `<option>${category}</option>`).join("")}</select>
        <select id="cuisineFilter" class="filter-select"><option value="">All cuisines</option>${cuisines.map((cuisine) => `<option value="${cuisine.id}">${cuisine.name}</option>`).join("")}</select>
        <select id="timeFilter" class="filter-select"><option value="">Any cook time</option><option value="15">15 min or less</option><option value="30">30 min or less</option><option value="45">45 min or less</option><option value="60">1 hour or less</option></select>
        <select id="levelFilter" class="filter-select"><option value="">All levels</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select>
      </div>
    </section>
    <section class="cream-section"><div id="results" class="recipe-grid">${recipes.map(recipeCard).join("")}</div></section>
  `;
}

function renderRecipe(id) {
  const recipe = recipes.find((item) => item.id === id) || recipes[0];
  const path = paths.find((item) => item.id === recipe.path);
  const cuisineLesson = cuisine101For(recipe.cuisine);
  const related = relatedRecipesFor(recipe);
  const otherCuisines = otherCuisinesFor(recipe.cuisine);
  app.innerHTML = `
    <section class="recipe-hero">
      <figure><img src="${recipe.image_url}" alt="${recipe.title}" /></figure>
      <div class="recipe-hero-copy">
        <p class="eyebrow">${cuisineName(recipe.cuisine)}</p>
        <h1>${recipe.title}</h1>
        <p>${recipe.description}</p>
        <div class="recipe-facts">
          <span>${recipe.category}</span>
          <span>${recipeDuration(recipe)}</span>
          <span>${recipe.servings} servings</span>
          <span>${recipe.difficulty}</span>
        </div>
        <div class="hero-actions">
          <button class="small-button" data-save="${recipe.id}">${saved.includes(recipe.id) ? "Saved" : "Save Recipe"}</button>
          ${recipe.video_url ? `<a class="small-button secondary" href="${recipe.video_url}" target="_blank" rel="noreferrer">Watch Video</a>` : `<a class="small-button secondary" href="#kitchen">Upload Food Video</a>`}
          <button class="small-button secondary" data-plan="${recipe.id}">${planned.includes(recipe.id) ? "Planned" : "Add to Meal Plan"}</button>
        </div>
      </div>
    </section>
    ${cookSubnav()}
    <section class="cream-section">
      <div class="recipe-detail-grid">
        <article class="detail-panel recipe-overview">
          <p class="eyebrow">About this dish</p>
          <h2>${recipe.title}</h2>
          <p class="detail-copy">${recipe.description}</p>
          <div class="recipe-card-meta">
            <div><small>Cuisine</small><strong>${cuisineName(recipe.cuisine)}</strong></div>
            <div><small>Prep</small><strong>${recipe.prep_time}</strong></div>
            <div><small>Cook</small><strong>${recipe.cook_time}</strong></div>
            <div><small>Serves</small><strong>${recipe.servings}</strong></div>
            <div><small>Difficulty</small><strong>${recipe.difficulty}</strong></div>
          </div>
        </article>
        <article class="detail-panel ingredients-panel">
          <p class="eyebrow">Ingredients</p>
          <ul>${recipe.ingredients.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
        <article class="detail-panel directions-panel">
          <p class="eyebrow">Step-by-step directions</p>
          <ol>${recipe.directions.map((item) => `<li>${item}</li>`).join("")}</ol>
        </article>
        <article class="detail-panel momma-panel">
          <p class="eyebrow">Tips from Momma</p>
          <ul>${(recipe.tips?.length ? recipe.tips : ["Taste as you go. A recipe is a guide, but your kitchen gets the final say.", "Set everything out before the heat comes on so cooking feels calm.", "Let cooked meat rest before serving so the juices stay where they belong."]).map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
      </div>
    </section>
    <section class="cream-section related-section">
      <div class="section-heading">
        <p class="eyebrow">${cuisineName(recipe.cuisine)} recommendations</p>
        <h2>Stay in the same flavor family.</h2>
      </div>
      <div class="recipe-grid">${related.map(recipeCard).join("")}</div>
    </section>
    <section class="band cuisine-101-band">
      <div class="section-heading">
        <p class="eyebrow">Cuisine 101</p>
        <h2>${cuisineLesson.title}</h2>
      </div>
      <div class="lesson-chip-grid">${cuisineLesson.items.map((item) => `<a href="#cook101" class="lesson-chip">${item}</a>`).join("")}</div>
    </section>
    <section class="cream-section">
      <div class="section-heading">
        <p class="eyebrow">Explore other cuisines</p>
        <h2>Step into another kitchen when you’re ready.</h2>
      </div>
      <div class="cuisine-grid">${otherCuisines.map(cuisineCard).join("")}</div>
    </section>
    ${recipeSourceNote(recipe)}
  `;
}

function renderPaths() {
  app.innerHTML = `
    ${hero("Cooking Paths", "Choose the pace that fits your kitchen today: Kid Chefs, Amateur Home Chef, or Professional Mode.", "assets/cooking-family.jpeg")}
    ${cookSubnav()}
    <section class="cream-section path-intro-section">
      <div class="section-heading">
        <p class="eyebrow">Learn your way</p>
        <h2>Three warm paths for every kind of cook.</h2>
      </div>
      <div class="path-showcase-grid">${paths.map(pathCard).join("")}</div>
    </section>
  `;
}

function renderPath(id) {
  const path = paths.find((item) => item.id === id) || paths[0];
  const pathRecipes = recipes.filter((recipe) => recipe.path === path.id);
  const starterRecipes = path.recipes.map((recipeId) => recipes.find((recipe) => recipe.id === recipeId)).filter(Boolean);
  const moreRecipes = pathRecipes.filter((recipe) => !starterRecipes.some((starter) => starter.id === recipe.id));
  app.innerHTML = `
    ${hero(path.title, path.description, path.image, `<a class="small-button" href="#paths">All Paths</a>`)}
    ${cookSubnav()}
    <section class="cream-section path-detail-section">
      <div class="path-detail-hero">
        <div>
          <p class="eyebrow">${path.eyebrow}</p>
          <h2>${path.promise}</h2>
          <p>${path.description}</p>
          <div class="path-badges">${path.badges.map((badge) => `<span>${badge}</span>`).join("")}</div>
        </div>
        <aside class="path-stat-card">
          <span>Level</span><strong>${path.level}</strong>
          <span>Pace</span><strong>${path.pace}</strong>
          <span>Focus</span><strong>${path.focus}</strong>
        </aside>
      </div>
      <div class="path-module-grid">
        ${path.modules.map((module) => `<article><p class="eyebrow">${path.title}</p><h3>${module.title}</h3><p>${module.text}</p></article>`).join("")}
      </div>
      <div class="detail-panel path-learning-panel">
        <div class="detail-columns">
          <section><h3>What You Learn</h3><ol>${path.steps.map((step) => `<li>${step}</li>`).join("")}</ol></section>
          <section><h3>Skills You Build</h3><ul>${path.skills.map((skill) => `<li>${skill}</li>`).join("")}</ul></section>
        </div>
      </div>
    </section>
    <section class="cream-section path-recipe-section">
      <div class="section-heading">
        <p class="eyebrow">Start here</p>
        <h2>First recipes for ${path.title}.</h2>
      </div>
      <div class="recipe-grid path-recipes">${starterRecipes.map(recipeCard).join("")}</div>
      ${moreRecipes.length ? `
        <div class="section-heading path-more-heading">
          <p class="eyebrow">Keep practicing</p>
          <h2>More lessons in this path.</h2>
        </div>
        <div class="recipe-grid path-recipes">${moreRecipes.map(recipeCard).join("")}</div>
      ` : ""}
    </section>
  `;
}

function renderPlanner() {
  const plannedRecipes = recipes.filter((recipe) => planned.includes(recipe.id));
  const shoppingItems = [...new Set(plannedRecipes.flatMap((recipe) => recipe.ingredients))];
  app.innerHTML = `
    ${hero("Meal Planner", "Answer the classic question: what can I cook? Save meals, plan your week, and build a shopping list.", "assets/editorial-kitchen-prep.jpg")}
    ${cookSubnav()}
    <section class="cream-section">
      <div class="planner-layout">
        <article class="detail-panel">
          <h2>What Can I Cook?</h2>
          <p class="detail-copy">Pick a mood and start with recipes that match your night.</p>
          <div class="mini-category-grid">${categories.map((category) => `<a href="#recipes">${category}</a>`).join("")}</div>
        </article>
        <article class="detail-panel">
          <h2>This Week</h2>
          <div class="stack-list">${plannedRecipes.length ? plannedRecipes.map(compactRecipe).join("") : `<div class="empty-state">Add recipes from any card to build your week.</div>`}</div>
        </article>
        <article class="detail-panel">
          <h2>Shopping List</h2>
          <ul class="shopping-list">${shoppingItems.length ? shoppingItems.map((item) => `<li>${item}</li>`).join("") : `<li>Your ingredients will appear here.</li>`}</ul>
        </article>
      </div>
    </section>
  `;
}

function renderHosting() {
  app.innerHTML = `
    ${hero("Hosting Ideas", "Menus, boards, bites, and desserts for making people feel at home.", "assets/editorial-kitchen-prep.jpg")}
    ${cookSubnav()}
    <section class="cream-section">
      <div class="hosting-grid">${hostingIdeas.map((idea) => `
        <article class="detail-panel">
          <h2>${idea.title}</h2>
          <p class="detail-copy">${idea.text}</p>
          <div class="stack-list">${idea.recipes.map((id) => compactRecipe(recipes.find((recipe) => recipe.id === id))).join("")}</div>
        </article>
      `).join("")}</div>
    </section>
  `;
}

function renderAbout() {
  app.innerHTML = `
    ${hero("Brent & Co. Kitchen", "Let's Cook Ya'll is the cooking-skills corner of Brent & Co.: polished, practical, warm, and rooted in hospitality.", "assets/logo.png")}
    ${cookSubnav()}
    <section class="cream-section">
      <div class="about-layout">
        <article class="detail-panel">
          <p class="eyebrow">Umbrella connection</p>
          <h2>Designed To Live Beside The Brent & Co. Storefront</h2>
          <p class="detail-copy">The golden palette, warm cards, practical copy, and food-first imagery are set up so the Brent & Co. homepage can link to this app with a matching storefront card.</p>
        </article>
        <article class="detail-panel">
          <h2 id="food-video-studio">Cook Video Studio</h2>
          <p class="detail-copy">Cooks can submit a YouTube link or upload a food video. Logged-in uploads are saved to your Let's Cook account.</p>
          <form class="upload-form" data-upload-form>
            <label>Recipe<select name="recipeId">${recipes.map((recipe) => `<option value="${recipe.id}">${recipe.title}</option>`).join("")}</select></label>
            <label>Video title<input name="title" placeholder="Auntie's shrimp and grits tips" required /></label>
            <label>YouTube link<input name="url" placeholder="https://www.youtube.com/watch?v=..." /></label>
            <label>Or local video<input name="file" type="file" accept="video/*" /></label>
            <button class="small-button" type="submit">Submit Video</button>
          </form>
          <div class="submission-grid">${submissions.length ? submissions.map(submissionCard).join("") : `<div class="empty-state">No cook videos submitted yet.</div>`}</div>
        </article>
      </div>
    </section>
  `;
}

function renderAccount() {
  const user = letsCookSession.user || {};
  const status = letsCookSession.status ? `<div class="empty-state">${escapeHTML(letsCookSession.status)}</div>` : "";
  const officialBadges = (user.badges || []).map((badge) => `<span>${escapeHTML(badge)}</span>`).join("");
  app.innerHTML = `
    ${hero("Your Let's Cook Account", "Save recipes, track lesson progress, keep your profile picture, and upload food videos from your own kitchen.", user.profilePic || "assets/logo.png")}
    ${cookSubnav()}
    <section class="cream-section">
      <div class="account-layout">
        <article class="account-panel">
          <h2>${letsCookSession.authenticated ? "Kitchen Profile" : "Create Your Kitchen Profile"}</h2>
          <p>${letsCookSession.authenticated ? `Signed in as ${escapeHTML(user.email || "")}. Your saved recipes, meal plan, lesson progress, and food videos are backed by the Let's Cook database.` : "Create an account so your favorites, progress, profile picture, and food videos are saved beyond this browser."}</p>
          ${status}
          ${letsCookSession.authenticated ? `
            <div class="account-profile-head">
              <img src="${user.profilePic || "assets/logo.png"}" alt="" />
              <div>
                <p class="eyebrow">${escapeHTML(user.role || "Home Cook")}</p>
                <h2>${escapeHTML(user.displayName || "Home Cook")}</h2>
                ${officialBadges ? `<div class="founder-badges">${officialBadges}</div>` : ""}
              </div>
            </div>
            <form class="profile-form" data-lets-profile-form>
              <label>Display name<input name="displayName" value="${escapeHTML(user.displayName || "")}" required /></label>
              <label>Profile picture<input name="photo" type="file" accept="image/*" /></label>
              <button class="small-button" type="submit">Save Profile</button>
            </form>
            <form class="profile-form" data-lets-logout-form>
              <button class="small-button secondary" type="submit">Log Out</button>
            </form>
          ` : `
            <form class="profile-form" data-lets-signup-form>
              <label>Display name<input name="displayName" placeholder="Shay's Kitchen Fan" required /></label>
              <label>Email<input name="email" type="email" placeholder="you@example.com" required /></label>
              <label>Password<input name="password" type="password" minlength="8" placeholder="At least 8 characters" required /></label>
              <button class="small-button" type="submit">Create Account</button>
            </form>
            <form class="profile-form" data-lets-login-form>
              <label>Email<input name="email" type="email" required /></label>
              <label>Password<input name="password" type="password" required /></label>
              <button class="small-button secondary" type="submit">Log In</button>
            </form>
          `}
        </article>
        <article class="account-panel">
          <h2>Your Kitchen Stats</h2>
          <div class="account-stats">
            <div><strong>${saved.length}</strong><span>Saved recipes</span></div>
            <div><strong>${planned.length}</strong><span>Meal plan items</span></div>
            <div><strong>${submissions.length}</strong><span>Food videos</span></div>
          </div>
          <p class="detail-copy">Use recipe cards to save favorites and plan meals. Upload food videos from the Kitchen page.</p>
          <div class="card-actions">
            <a class="small-button" href="#recipes">Browse Recipes</a>
            <a class="small-button secondary" href="#about">Upload Food Video</a>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderCuisine(id) {
  const cuisine = cuisines.find((item) => item.id === id) || cuisines[0];
  const cuisineRecipes = recipes.filter((recipe) => recipe.cuisine === cuisine.id);
  app.innerHTML = `
    ${hero(cuisine.name, cuisine.blurb, cuisine.image)}
    ${cookSubnav()}
    <section class="cream-section"><div class="recipe-grid">${cuisineRecipes.map(recipeCard).join("")}</div></section>
  `;
}

function appCard(item) {
  return `
    <article class="app-card ${item.accent}">
      <a class="app-card-main" ${linkAttrs(item.externalUrl || item.route)}>
        <figure><img src="${item.image}" alt="" /></figure>
        <div>
          <span>${item.status}</span>
          <h3>${item.title}</h3>
          <p>${item.tagline}</p>
        </div>
      </a>
      <div class="app-card-actions">
        <a class="small-button" ${linkAttrs(item.externalUrl || item.route)}>Open</a>
        <a class="small-button secondary" href="${item.route}">Preview</a>
      </div>
    </article>
  `;
}

function platformLinkCard(item) {
  return `
    <article class="direct-link-card ${item.accent}">
      <div>
        <img src="${item.image}" alt="" />
        <span>${item.status}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <a class="small-button" ${linkAttrs(item.externalUrl || item.route)}>Open ${item.title}</a>
      <a class="direct-url" ${linkAttrs(item.externalUrl || item.route)}>${item.externalUrl || item.route}</a>
    </article>
  `;
}

function pathCard(path) {
  return `
    <article class="path-card">
      <img src="${path.image}" alt="" />
      <div class="path-card-body">
        <p class="eyebrow">${path.eyebrow}</p>
        <h3>${path.title}</h3>
        <p>${path.description}</p>
        <div class="path-badges">${path.badges.map((badge) => `<span>${badge}</span>`).join("")}</div>
        <a class="small-button secondary" href="#paths/${path.id}">Open Path</a>
      </div>
    </article>`;
}

function cuisineCard(cuisine) {
  return `<article class="cuisine-card"><a href="#cuisine/${cuisine.id}"><figure><img src="${cuisine.image}" alt="${cuisine.name}" /></figure><h3>${cuisine.name}</h3><p>${cuisine.blurb}</p></a></article>`;
}

function lessonCard(lesson) {
  return `<article class="lesson-card"><figure><img src="${lesson.image}" alt="" /></figure><div><h3>${lesson.title}</h3><p>${lesson.text}</p><a class="small-button secondary" href="#cook101/${lesson.id}">Start Lesson</a></div></article>`;
}

function recipeCard(recipe) {
  const isPersonal = personalRecipeIds.includes(recipe.id);
  return `
    <article class="recipe-card">
      <a class="recipe-photo" href="#recipes/${recipe.id}"><img src="${recipe.image_url || recipe.image}" alt="${recipe.title}" /></a>
      <div class="recipe-content">
        <div class="tag-row">${isPersonal ? `<span class="tag personal-tag">Shay's Kitchen</span>` : ""}<span class="tag">${cuisineName(recipe.cuisine)}</span><span class="tag">${recipe.category}</span><span class="tag">${recipeDuration(recipe)}</span><span class="tag">${recipe.difficulty}</span></div>
        <h3>${recipe.title}</h3>
        <p>${recipe.description}</p>
        ${recipe.chefNotes ? `<div class="chef-note">${recipe.chefNotes}</div>` : ""}
        <div class="ingredient-preview"><strong>Ingredients:</strong> ${recipe.ingredients.slice(0, 4).join(", ")}</div>
        <div class="card-actions"><a class="small-button" href="#recipes/${recipe.id}">View Recipe</a><button class="small-button secondary" data-save="${recipe.id}">${saved.includes(recipe.id) ? "Saved" : "Save"}</button>${recipe.video_url ? `<a class="small-button secondary" href="${recipe.video_url}" target="_blank" rel="noreferrer">Watch</a>` : ""}</div>
      </div>
    </article>
  `;
}

function personalRecipes() {
  return personalRecipeIds.map((id) => recipes.find((recipe) => recipe.id === id)).filter(Boolean);
}

function compactRecipe(recipe) {
  if (!recipe) return "";
  return `<div class="compact-recipe"><img src="${recipe.image}" alt="" /><div><strong>${recipe.title}</strong><span>${recipe.time} / ${recipe.level}</span></div><button class="small-button secondary" data-plan="${recipe.id}">${planned.includes(recipe.id) ? "Remove" : "Plan"}</button></div>`;
}

function applyRecipeDatabase(database) {
  if (!database?.recipes?.length) return;
  const bundledRecipes = recipes.map((recipe) => ({ ...recipe }));
  categories = database.categories || categories;
  personalRecipeIds = database.collections?.shaysKitchen || personalRecipeIds;
  const loadedRecipes = database.recipes.map((recipe) => ({
    id: recipe.id,
    title: recipe.title,
    cuisine: recipe.cuisine,
    category: recipe.category,
    image: recipe.image || recipe.image_url || "assets/logo.png",
    image_url: recipe.image_url || recipe.image || "assets/logo.png",
    time: recipe.cookTime || `${recipe.cookTimeMinutes || 0} min`,
    cookTime: recipe.cookTime || recipe.cook_time,
    cook_time: recipe.cook_time || recipe.cookTime,
    cookTimeMinutes: recipe.cookTimeMinutes,
    prepTime: recipe.prepTime || recipe.prep_time,
    prep_time: recipe.prep_time || recipe.prepTime,
    prepTimeMinutes: recipe.prepTimeMinutes,
    level: recipe.difficulty,
    difficulty: recipe.difficulty,
    servings: recipe.servings,
    path: recipe.path || "amateur-home-chef",
    description: recipe.description,
    ingredients: recipe.ingredients || [],
    steps: recipe.instructions || recipe.directions || [],
    directions: recipe.directions || recipe.instructions || [],
    instructions: recipe.instructions || recipe.directions || [],
    tags: recipe.tags || [],
    video_url: recipe.video_url || recipe.videoUrl || "",
    videoUrl: recipe.videoUrl || recipe.video_url || "",
    related_recipe_ids: recipe.related_recipe_ids || recipe.relatedRecipeIds || [],
    featured: Boolean(recipe.featured),
    chefNotes: recipe.chefNotes || "",
    equipment: recipe.equipment || [],
    tips: recipe.tips || [],
    makeAhead: recipe.makeAhead || "",
    servingIdeas: recipe.servingIdeas || [],
    source: recipe.source || { type: "internal" }
  }));
  const loadedIds = new Set(loadedRecipes.map((recipe) => recipe.id));
  const missingBundled = bundledRecipes.filter((recipe) => !loadedIds.has(recipe.id));
  recipes = [...loadedRecipes, ...missingBundled].map(normalizeRecipe);
}

async function loadRecipeDatabase() {
  try {
    const response = await fetch("data/recipes.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Recipe database failed: ${response.status}`);
    applyRecipeDatabase(await response.json());
  } catch (error) {
    console.warn("Using bundled recipe fallback.", error);
  }
}

function submissionCard(submission) {
  return `<article class="submission-card"><strong>${escapeHTML(submission.title)}</strong><span>${escapeHTML(submission.recipeTitle)} / ${escapeHTML(submission.type)}</span></article>`;
}

function handleSearch(event) {
  const query = document.querySelector("#searchBox")?.value.toLowerCase().trim() || "";
  const pantry = document.querySelector("#pantryBox")?.value.toLowerCase().split(",").map((item) => item.trim()).filter(Boolean) || [];
  const category = document.querySelector("#categoryFilter")?.value || "";
  const cuisine = document.querySelector("#cuisineFilter")?.value || "";
  const maxTime = Number(document.querySelector("#timeFilter")?.value || 0);
  const level = document.querySelector("#levelFilter")?.value || "";
  const results = recipes.filter((recipe) => {
    const ingredientText = recipe.ingredients.join(" ").toLowerCase();
    const tagText = (recipe.tags || []).join(" ").toLowerCase();
    const haystack = `${recipe.title} ${recipe.category} ${recipe.level} ${recipe.difficulty || ""} ${recipe.description} ${ingredientText} ${tagText}`.toLowerCase();
    const hasPantryItems = !pantry.length || pantry.every((item) => ingredientText.includes(item));
    return (!query || haystack.includes(query))
      && hasPantryItems
      && (!category || recipe.category === category || recipe.tags?.includes(category))
      && (!cuisine || recipe.cuisine === cuisine)
      && (!maxTime || (recipe.cookTimeMinutes || 999) <= maxTime)
      && (!level || recipe.level === level || recipe.difficulty === level);
  });
  document.querySelector("#results").innerHTML = results.length ? results.map(recipeCard).join("") : `<div class="empty-state">No recipes found yet.</div>`;
}

function handleClick(event) {
  const saveButton = event.target.closest("[data-save]");
  const planButton = event.target.closest("[data-plan]");
  if (saveButton) {
    saved = toggleValue(saved, saveButton.dataset.save);
    persistLetsCookState();
    render();
  }
  if (planButton) {
    planned = toggleValue(planned, planButton.dataset.plan);
    persistLetsCookState();
    render();
  }
}


async function handleSubmit(event) {
  if (event.target.matches("[data-lets-signup-form]")) {
    event.preventDefault();
    const formData = new FormData(event.target);
    await submitLetsCookAuth("/api/lets-cook/signup", {
      displayName: formData.get("displayName")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      password: formData.get("password")?.toString()
    });
    return;
  }

  if (event.target.matches("[data-lets-login-form]")) {
    event.preventDefault();
    const formData = new FormData(event.target);
    await submitLetsCookAuth("/api/lets-cook/login", {
      email: formData.get("email")?.toString().trim(),
      password: formData.get("password")?.toString()
    });
    return;
  }

  if (event.target.matches("[data-lets-logout-form]")) {
    event.preventDefault();
    const response = await fetch("/api/lets-cook/logout", { method: "POST" });
    const payload = response.ok ? await response.json() : {};
    applyLetsCookState(payload, "You are logged out.");
    renderAccount();
    return;
  }

  if (event.target.matches("[data-lets-profile-form]")) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const photo = formData.get("photo");
    if (photo?.name) {
      const photoData = new FormData();
      photoData.append("photo", photo);
      const photoResponse = await fetch("/api/lets-cook/profile-photo", { method: "POST", body: photoData });
      const photoPayload = await photoResponse.json().catch(() => ({}));
      if (!photoResponse.ok) {
        letsCookSession = { ...letsCookSession, status: photoPayload.error || "Profile picture upload failed." };
        renderAccount();
        return;
      }
      applyLetsCookState(photoPayload, "Profile picture saved.");
    }
    const profileResponse = await fetch("/api/lets-cook/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ displayName: formData.get("displayName")?.toString().trim() })
    });
    const profilePayload = await profileResponse.json().catch(() => ({}));
    applyLetsCookState(profilePayload, profileResponse.ok ? "Profile saved." : profilePayload.error || "Profile save failed.");
    renderAccount();
    return;
  }


  if (!event.target.matches("[data-upload-form]")) return;
  event.preventDefault();
  const formData = new FormData(event.target);
  const recipe = recipes.find((item) => item.id === formData.get("recipeId"));
  const file = formData.get("file");
  const url = formData.get("url")?.toString().trim() || "";
  formData.set("recipeTitle", recipe?.title || "Recipe");
  if (letsCookSession.authenticated) {
    const response = await fetch("/api/lets-cook/food-videos", {
      method: "POST",
      body: formData
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      letsCookSession = { ...letsCookSession, status: payload.error || "Food video upload failed." };
      renderAccount();
      return;
    }
    applyLetsCookState(payload, "Food video saved.");
    render();
    return;
  }
  submissions = [{
    id: Date.now().toString(),
    recipeTitle: recipe?.title || "Recipe",
    title: formData.get("title")?.toString().trim() || "Cook video",
    type: url ? "YouTube link" : file?.name ? `Local file: ${file.name}` : "Draft upload"
  }, ...submissions];
  localStorage.setItem("letsCookSubmissions", JSON.stringify(submissions));
  render();
}

function toggleValue(list, value) {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}

async function loadLetsCookState() {
  try {
    const response = await fetch("/api/lets-cook/state", { cache: "no-store" });
    if (!response.ok) throw new Error(`Let's Cook state failed: ${response.status}`);
    const payload = await response.json();
    applyLetsCookState(payload);
  } catch (error) {
    console.warn("Using browser-only Let's Cook state fallback.", error);
  }
}

function applyLetsCookState(payload, status = "") {
  if (!payload) return;
  letsCookSession = {
    authenticated: Boolean(payload.authenticated),
    user: payload.user || null,
    status
  };
  saved = payload.saved || saved || [];
  planned = payload.planned || planned || [];
  lessonProgress = payload.lessonProgress || lessonProgress || {};
  submissions = payload.submissions || submissions || [];
}

async function submitLetsCookAuth(url, payload) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const data = await response.json().catch(() => ({}));
  applyLetsCookState(data, response.ok ? "Your Let's Cook account is connected." : data.error || "Account request failed.");
  renderAccount();
}

async function persistLetsCookState() {
  if (!letsCookSession.authenticated) {
    localStorage.setItem("letsCookSaved", JSON.stringify(saved));
    localStorage.setItem("letsCookPlanned", JSON.stringify(planned));
    localStorage.setItem("letsCookLessonProgress", JSON.stringify(lessonProgress));
    return false;
  }
  const response = await fetch("/api/lets-cook/state", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ saved, planned, lessonProgress })
  });
  const payload = await response.json().catch(() => ({}));
  applyLetsCookState(payload, response.ok ? "Saved to your Let's Cook account." : payload.error || "Save failed.");
  return response.ok;
}

function readJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function escapeHTML(value) {
  return value.toString().replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

Promise.all([loadRecipeDatabase(), loadLetsCookState()]).finally(render);
