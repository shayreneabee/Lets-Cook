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
  "Party Cups",
  "Kid-Friendly Cooking"
];

const ecosystemApps = [
  {
    id: "lets-cook",
    title: "Let's Cook Ya'll",
    accent: "gold",
    image: "assets/lc-fried-chicken.jpg",
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
    outcomes: ["Make a no-cook lunch", "Practice one stovetop recipe with help", "Build a colorful snack plate"],
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
    outcomes: ["Cook one confident weeknight dinner", "Make one side without a box", "Plan leftovers before cooking"],
    recipes: ["chicken-street-tacos", "lemon-herb-salmon", "cajun-cream-salmon-rotini", "shrimp-and-grits-green-beans", "chicken-parmesan"]
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
    outcomes: ["Write a prep timeline", "Cook a sauce or braise", "Plate and serve without rushing"],
    recipes: ["oxtails", "jerk-chicken", "biryani", "smothered-pork-chops", "bourbon-praline-bread-pudding"]
  }
];

const imageFallbacks = new Map();

function photoSlots(folder, prefix, count = 25) {
  return Array.from({ length: count }, (_, index) => {
    const slot = String(index + 1).padStart(2, "0");
    return [`images/${folder}/${prefix}-${slot}.png`, `images/${folder}/${prefix}-${slot}.jpg`, `images/${folder}/${prefix}-${slot}.jpeg`];
  }).flat();
}

function photoList(folder, prefix, count, fallbacks = []) {
  return [...photoSlots(folder, prefix, count), ...fallbacks];
}

const photographyLibrary = {
  hero: {
    family: photoList("hero", "hero", 20, ["assets/cooking-family.jpeg", "assets/editorial-cooking-hero.jpg", "assets/editorial-kitchen-prep.jpg"]),
    learning: photoList("hero", "hero", 20, ["assets/editorial-kitchen-prep.jpg", "assets/ingredients.jpeg"]),
    hospitality: photoList("hero", "hero", 20, ["assets/lc-desserts.jpg", "assets/cooking-family.jpeg"])
  },
  skills: {
    knife: photoList("skills", "knife-skills", 25, ["assets/editorial-kitchen-prep.jpg"]),
    measuring: photoList("skills", "measuring", 25, ["assets/ingredients.jpeg"]),
    baking: photoList("skills", "baking", 25, ["assets/lc-desserts.jpg"]),
    sauces: photoList("skills", "sauce-prep", 25, ["assets/ingredients.jpeg"]),
    grilling: photoList("skills", "grilling", 25, ["assets/lc-fried-chicken.jpg"]),
    plating: photoList("skills", "plating", 25, ["assets/lc-shrimp-and-grits.jpg"])
  },
  cuisines: {
    southern: photoList("cuisines/southern", "southern", 25, ["assets/lc-fried-chicken.jpg", "assets/lc-shrimp-and-grits.jpg", "assets/lc-seafood.jpg"]),
    creole: photoList("cuisines/southern", "southern", 25, ["assets/lc-seafood.jpg", "assets/editorial-cajun-pasta.jpg"]),
    mexican: photoList("cuisines/mexican", "mexican", 25, ["assets/lc-birria-tacos.jpg"]),
    italian: photoList("cuisines/italian", "italian", 25, ["assets/lc-pasta.jpg", "assets/lc-chicken-piccata.jpg"]),
    indian: photoList("cuisines/indian", "indian", 25, ["assets/lc-indian-food.jpg", "assets/indian-food.jpeg", "assets/tandoori-chicken.jpeg"]),
    "asian-inspired": photoList("cuisines/asian", "asian", 25, ["assets/lc-asian-food.jpg", "assets/lc-fried-rice.jpg", "assets/lc-orange-chicken.jpg"]),
    mediterranean: photoList("cuisines/mediterranean", "mediterranean", 25, ["assets/lc-mediterranean-food.jpg"]),
    caribbean: photoList("cuisines/caribbean", "caribbean", 25, ["assets/lc-african-food.jpg"]),
    global: photoList("community", "community", 50, ["assets/lc-african-food.jpg", "assets/lc-asian-food.jpg", "assets/lc-mediterranean-food.jpg"]),
    hosting: photoList("community", "community", 50, ["assets/lc-desserts.jpg", "assets/cooking-family.jpeg"])
  }
};

function photoFor(collection, key, index = 0, fallback = "assets/logo.png") {
  const list = photographyLibrary[collection]?.[key] || photographyLibrary.cuisines?.[key] || [];
  const source = list[index % list.length] || fallback;
  const safeFallback = list.find((item) => item.startsWith("assets/")) || fallback;
  if (source.startsWith("images/")) imageFallbacks.set(source, safeFallback);
  return source;
}

function expectedImageSlots() {
  return Object.values(photographyLibrary)
    .flatMap((group) => Object.values(group))
    .flat()
    .filter((item) => item.startsWith("images/"));
}

function reportMissingImages() {
  const slots = [...new Set(expectedImageSlots())];
  console.table(slots.map((slot) => ({
    slot,
    fallback: imageFallbacks.get(slot) || "assets/logo.png",
    status: "expected"
  })));
  return slots;
}

function stableIndex(value = "", modulo = 25) {
  return [...String(value)].reduce((sum, char) => sum + char.charCodeAt(0), 0) % modulo;
}

const cuisineCoverImages = {
  southern: "images/cuisines/southern/southern-01.png",
  "soul-food": "images/cuisines/southern/southern-02.png",
  creole: "assets/editorial-cajun-pasta.jpg",
  cajun: "assets/editorial-cajun-pasta.jpg",
  bbq: "images/cuisines/southern/southern-06.png",
  "low-country": "images/cuisines/southern/southern-09.png",
  "mississippi-favorites": "images/cuisines/southern/southern-05.png",
  mexican: "assets/lc-birria-tacos.jpg",
  indian: "assets/lc-indian-food.jpg",
  caribbean: "assets/lc-african-food.jpg",
  mediterranean: "assets/lc-mediterranean-food.jpg",
  "asian-inspired": "assets/lc-asian-food.jpg",
  italian: "assets/lc-pasta.jpg",
  hosting: "assets/lc-desserts.jpg",
  global: "assets/lc-african-food.jpg"
};

const categoryCoverImages = {
  "Kid-Friendly Cooking": "assets/kid-friendly.jpeg",
  "Party Cups": "assets/lc-desserts.jpg",
  Desserts: "assets/lc-desserts.jpg",
  Seafood: "assets/lc-seafood.jpg",
  Chicken: "assets/beautiful-chicken.jpeg",
  Vegetarian: "assets/ingredients.jpeg",
  "Party & Hosting": "assets/lc-desserts.jpg",
  "Family Dinners": "assets/cooking-family.jpeg"
};

function recipePhotoFor(recipe = {}) {
  return resolveRecipeImage(recipe).image;
}

function resolveRecipeImage(recipe = {}) {
  const mappedImage = recipeImageOverrides[recipe.id];
  const explicitImage = recipe.image_url || recipe.image;
  const cuisineKey = recipe.category === "Party Cups" ? "hosting" : recipe.cuisine || "global";
  const image = mappedImage
    || explicitImage
    || cuisineCoverImages[cuisineKey]
    || categoryCoverImages[recipe.category]
    || "assets/logo.png";
  const source = mappedImage ? "recipe" : explicitImage ? "recipe-data" : cuisineCoverImages[cuisineKey] ? "cuisine" : categoryCoverImages[recipe.category] ? "category" : "fallback";
  if (image.startsWith("images/")) {
    imageFallbacks.set(image, cuisineCoverImages[cuisineKey] || categoryCoverImages[recipe.category] || "assets/logo.png");
  }
  return {
    image,
    source,
    fallbackUsed: source !== "recipe" && source !== "recipe-data",
    missingImage: !mappedImage && !explicitImage,
    recipe: recipe.title || recipe.id || "Untitled recipe"
  };
}

function recipeImageReport() {
  const rows = recipes.map((recipe) => {
    const resolved = resolveRecipeImage(recipe);
    const content = imageContentRegistry[resolved.image];
    return {
      recipe: recipe.title,
      id: recipe.id,
      cuisine: recipe.cuisine,
      category: recipe.category,
      assignedImage: resolved.image,
      source: resolved.source,
      attachedContent: content?.title || recipe.title,
      contentRoute: content?.href || `#recipes/${recipe.id}`,
      missingRecipeImage: resolved.missingImage,
      fallbackUsed: resolved.fallbackUsed
    };
  });
  console.table(rows);
  return rows;
}

function imageContentAudit() {
  const recipeIds = new Set(recipes.map((recipe) => recipe.id));
  const usedImages = new Set(recipes.map((recipe) => resolveRecipeImage(recipe).image));
  const registryRows = Object.entries(imageContentRegistry).map(([image, content]) => {
    const recipeId = content.href?.startsWith("#recipes/") ? content.href.replace("#recipes/", "") : "";
    return {
      image,
      attachedContent: content.title,
      type: content.type,
      primaryRoute: content.href,
      lessonRoute: content.lesson,
      menuRoute: content.menu,
      usedByRecipe: usedImages.has(image),
      targetRecipeExists: recipeId ? recipeIds.has(recipeId) : true
    };
  });
  const unregisteredRecipeImages = [...usedImages]
    .filter((image) => !imageContentRegistry[image] && !image.startsWith("assets/logo"))
    .map((image) => ({
      image,
      recipes: recipes.filter((recipe) => resolveRecipeImage(recipe).image === image).map((recipe) => recipe.title).join(", ")
    }));
  const result = {
    registeredImages: registryRows,
    unregisteredRecipeImages,
    missingRecipeTargets: registryRows.filter((row) => row.targetRecipeExists === false),
    unusedRegisteredImages: registryRows.filter((row) => row.usedByRecipe === false && row.image.startsWith("images/cuisines/"))
  };
  console.table(registryRows);
  if (unregisteredRecipeImages.length) console.table(unregisteredRecipeImages);
  return result;
}

function contentQualityReport() {
  const recipeIssues = recipes.map((recipe) => {
    const issues = [];
    if (!recipe.title || !recipe.description) issues.push("missing title or description");
    if (!recipe.ingredients?.length) issues.push("missing ingredients");
    if (!(recipe.directions?.length || recipe.steps?.length)) issues.push("missing cooking steps");
    if (!(recipe.prep_time || recipe.prepTime)) issues.push("missing prep time");
    if (!(recipe.cook_time || recipe.cookTime || recipe.time)) issues.push("missing cook time");
    if (!recipe.servings) issues.push("missing servings");
    return { recipe: recipe.title || recipe.id, cuisine: recipe.cuisine, issues };
  }).filter((row) => row.issues.length);
  const lessonIssues = academyModules.map((lesson) => {
    const hasSteps = lesson.modules?.some((module) => /step|practice|how/i.test(module.title) && module.items?.length);
    const issues = [];
    if (!lesson.overview || !lesson.why) issues.push("missing purpose");
    if (!hasSteps) issues.push("missing practice or step-by-step module");
    return { lesson: lesson.title, issues };
  }).filter((row) => row.issues.length);
  const cuisineIssues = cuisines.map((cuisine) => ({
    cuisine: cuisine.name,
    recipeCount: recipesForCuisine(cuisine.id, 20).length
  })).filter((row) => row.recipeCount === 0);
  const report = { recipeIssues, lessonIssues, cuisineIssues };
  console.table(recipeIssues);
  console.table(lessonIssues);
  console.table(cuisineIssues);
  return report;
}

window.reportLetsCookContentQuality = contentQualityReport;

function pathPhotoFor(path = {}) {
  const pathPhotos = {
    "kid-chefs": photoFor("cuisines", "hosting", 1, path.image || "assets/kid-friendly.jpeg"),
    "amateur-home-chef": photoFor("hero", "learning", 2, path.image || "assets/cooking-family.jpeg"),
    "professional-mode": photoFor("skills", "plating", 2, path.image || "assets/ingredients.jpeg")
  };
  return pathPhotos[path.id] || photoFor("hero", "learning", 0, path.image || "assets/logo.png");
}

const cuisines = [
  { id: "southern", name: "Southern Classics", image: cuisineCoverImages.southern, blurb: "Comforting dishes, porch-table sides, slow braises, and big hospitality." },
  { id: "creole", name: "Creole", image: cuisineCoverImages.creole, blurb: "New Orleans flavor, seafood, spice, rice, roux, and soulful one-pot meals." },
  { id: "cajun", name: "Cajun", image: cuisineCoverImages.cajun, blurb: "Roux, rice, seafood, sausage, one-pot meals, and Louisiana country-kitchen rhythm." },
  { id: "soul-food", name: "Soul Food", image: cuisineCoverImages["soul-food"], blurb: "Food memory, Sunday dinner, greens, cornbread, beans, slow meats, and celebration." },
  { id: "bbq", name: "BBQ", image: cuisineCoverImages.bbq, blurb: "Smoke, rubs, sauces, pickles, bread, beans, slaw, and feeding a crowd." },
  { id: "low-country", name: "Low Country", image: cuisineCoverImages["low-country"], blurb: "Seafood, rice, okra, boils, coastal flavor, and generous shared tables." },
  { id: "mississippi-favorites", name: "Mississippi Favorites", image: cuisineCoverImages["mississippi-favorites"], blurb: "Catfish, comeback sauce, tamales, pound cake, greens, and hometown comfort." },
  { id: "indian", name: "Indian", image: cuisineCoverImages.indian, blurb: "Layered spices, cozy curries, breads, rice dishes, and generous family-style meals." },
  { id: "mexican", name: "Mexican", image: cuisineCoverImages.mexican, blurb: "Chiles, tortillas, salsas, braises, bright toppings, and weeknight-friendly flavor." },
  { id: "caribbean", name: "Caribbean", image: cuisineCoverImages.caribbean, blurb: "Warm spice, rice and peas, seafood, stews, grilling, and sunny island comfort." },
  { id: "mediterranean", name: "Mediterranean", image: cuisineCoverImages.mediterranean, blurb: "Fresh herbs, olive oil, grilled proteins, breads, salads, and bright sauces." },
  { id: "asian-inspired", name: "Asian Inspired", image: cuisineCoverImages["asian-inspired"], blurb: "Crisp, saucy, family-friendly dinners with bold pantry flavor." },
  { id: "italian", name: "Italian Comfort", image: cuisineCoverImages.italian, blurb: "Pasta nights, red sauce, baked mains, and beginner-friendly classics." },
  { id: "hosting", name: "Party & Hosting", image: cuisineCoverImages.hosting, blurb: "Boards, bites, desserts, and dinner-party helpers that make people feel cared for." },
  { id: "global", name: "Global Flavors", image: cuisineCoverImages.global, blurb: "Practical recipes and flavor lessons that help cooks move between regional food traditions with respect." },
  { id: "nigerian", name: "Nigerian", image: photoFor("cuisines", "global"), blurb: "Jollof rice, egusi, suya, moi moi, pepper soup, and layered tomato-pepper stew bases." },
  { id: "ghanaian", name: "Ghanaian", image: photoFor("cuisines", "global", 1), blurb: "Waakye, red red, kelewele, groundnut soup, jollof, shito, and generous rice-and-bean plates." },
  { id: "ethiopian", name: "Ethiopian", image: photoFor("cuisines", "global", 2), blurb: "Injera, berbere, lentil stews, shiro, tibs, doro wat, and shared platter hospitality." },
  { id: "moroccan", name: "Moroccan", image: cuisineCoverImages.mediterranean, blurb: "Tagines, couscous, harira, preserved lemon, olives, mint tea, and warm spice layering." }
];

const learningPillars = [
  { title: "Culinary Academy", route: "#culinary-academy", text: "A single learning hub for basics, ingredients, techniques, equipment, science, world foods, seasonings, and professional skills." },
  { title: "Cuisine Explorer", route: "#cuisine-explorer", text: "A polished world-food rolodex for culture, regions, country-level cuisines, ingredients, and traditions." },
  { title: "Menu Builder", route: "#menu-intelligence", text: "Build culturally grounded meals with mains, sides, breads, sauces, drinks, desserts, and timing." },
  { title: "Hospitality & Hosting", route: "#hosting", text: "Plan fish fries, Sunday dinners, showers, brunch, catering prep, and warm gathering menus." }
];

const academyCategories = [
  { id: "basics", title: "Basics", text: "Definitions, safety, measuring, reading recipes, tasting, timing, and kitchen confidence.", entries: ["kitchen-safety", "measurements"] },
  { id: "ingredients", title: "Ingredients", text: "Produce, proteins, grains, spices, pantry staples, substitutions, and how ingredients behave.", entries: ["ingredients", "seasonings"] },
  { id: "techniques", title: "Techniques", text: "Knife skills, sauteing, frying, braising, roasting, baking, simmering, and plating.", entries: ["knife-skills", "braising", "frying", "baking-basics"] },
  { id: "equipment", title: "Equipment", text: "Pans, knives, cutting boards, thermometers, small appliances, serving tools, and care.", entries: ["equipment", "kitchen-safety"] },
  { id: "food-science", title: "Food Science", text: "Heat, texture, browning, emulsions, thickening, acidity, salt, fat, and flavor balance.", entries: ["food-science", "sauces"] },
  { id: "world-foods", title: "World Foods", text: "Culture, history, etiquette, ingredients, regional identity, and traditional dishes.", entries: ["world-foods", "ingredients"] },
  { id: "sauces-seasonings", title: "Sauces & Seasonings", text: "Spice blends, marinades, gravies, dips, sauces, finishing herbs, and flavor bases.", entries: ["sauces", "gravy", "roux", "pan-sauce", "bechamel", "tomato-sauce", "reduction-sauce", "marinades", "seasonings"] },
  { id: "professional-skills", title: "Professional Skills", text: "Prep lists, station setup, costing, batching, service flow, catering, and consistency.", entries: ["professional-skills", "measurements"] }
];

const academyModules = [
  {
    id: "knife-skills",
    title: "Knife Skills",
    category: "Techniques",
    overview: "Knife skills are the foundation for safer prep, even cooking, and calmer meals.",
    why: "Food cooks more evenly when pieces are similar sizes, and confident knife habits prevent rushing and slipping.",
    beginner: "Start slow. Use a stable board, a sharp knife, and a tucked-finger claw grip before worrying about speed.",
    keyConcepts: ["Stable cutting board", "Sharp knife safety", "Claw grip", "Even pieces", "Slow before fast"],
    modules: [
      { title: "Module 1: Knife Types", items: ["Chef knife: the everyday workhorse for chopping, slicing, and dicing.", "Paring knife: small detail cuts, peeling, and trimming.", "Serrated knife: bread, tomatoes, citrus, and delicate crusts."] },
      { title: "Module 2: Knife Safety", items: ["Put a damp towel under the board.", "Keep fingertips tucked behind your knuckles.", "Carry knives pointed down.", "Never try to catch a falling knife."] },
      { title: "Module 3: Basic Cuts", items: ["Dice: small cubes for even cooking.", "Mince: very small pieces for garlic, herbs, and aromatics.", "Julienne: thin matchsticks for vegetables.", "Chiffonade: rolled leafy herbs or greens sliced into ribbons."] },
      { title: "Module 4: Practice Exercises", items: ["Dice one onion slowly.", "Mince one clove of garlic.", "Julienne one carrot.", "Chiffonade basil or spinach leaves."] },
      { title: "Module 5: Knowledge Check", items: ["Which knife is best for bread?", "Why do even cuts matter?", "What should go under a slippery cutting board?"] },
      { title: "Module 6: Next Recommended Skill", items: ["Practice heat control so your evenly cut ingredients cook the way you planned."] }
    ],
    related: ["kitchen-safety", "measurements", "heat-control"],
    next: "kitchen-safety"
  },
  {
    id: "kitchen-safety",
    title: "Kitchen Safety",
    category: "Basics",
    overview: "Safety helps every cook move with confidence around heat, knives, water, and food storage.",
    why: "A clean, calm kitchen prevents burns, slips, cross-contamination, and rushed mistakes.",
    beginner: "Wash hands, clear the counter, stabilize the board, and ask for help with heat or sharp tools when needed.",
    keyConcepts: ["Hand washing", "Cross-contamination", "Hot handles", "Clean-as-you-go", "Safe storage"],
    modules: [
      { title: "Setup", items: ["Wash hands for 20 seconds.", "Clear clutter before bringing food out.", "Keep towels dry around heat."] },
      { title: "Heat Safety", items: ["Turn handles inward.", "Use dry oven mitts.", "Open lids away from your face."] },
      { title: "Food Safety", items: ["Keep raw meat away from ready-to-eat foods.", "Chill leftovers quickly.", "Label food with dates."] }
    ],
    related: ["knife-skills", "equipment", "measurements"],
    next: "measurements"
  },
  {
    id: "measurements",
    title: "Measurements",
    category: "Basics",
    overview: "Measurements help you repeat recipes, scale meals, and understand when precision matters.",
    why: "Baking needs accuracy, while savory cooking teaches you how to measure, taste, and adjust.",
    beginner: "Use dry cups for dry ingredients, liquid cups for liquids, and measuring spoons for small amounts.",
    keyConcepts: ["Teaspoon vs tablespoon", "Dry vs liquid cups", "Scaling recipes", "Pinches and dashes", "Taste and adjust"],
    modules: [
      { title: "Core Tools", items: ["Measuring spoons", "Dry measuring cups", "Liquid measuring cups", "Kitchen scale"] },
      { title: "Scaling", items: ["Double ingredients carefully.", "Keep spice increases gentle.", "Write down changes."] },
      { title: "Practice", items: ["Measure 1 cup flour.", "Measure 1/2 cup liquid.", "Convert 3 teaspoons to 1 tablespoon."] }
    ],
    related: ["ingredients", "professional-skills", "food-science"],
    next: "ingredients"
  },
  {
    id: "equipment",
    title: "Equipment",
    category: "Equipment",
    overview: "Equipment is about choosing the right tool for the job, not owning every gadget.",
    why: "The right pan, knife, thermometer, or bowl makes cooking easier, safer, and more consistent.",
    beginner: "Start with a chef knife, cutting board, skillet, pot, sheet pan, mixing bowl, spatula, tongs, and thermometer.",
    keyConcepts: ["Tool purpose", "Pan size", "Heat-safe handles", "Thermometers", "Cleaning and care"],
    modules: [
      { title: "Starter Kit", items: ["Chef knife", "Cutting board", "Skillet", "Saucepan", "Sheet pan"] },
      { title: "Helpful Extras", items: ["Tongs", "Fish spatula", "Thermometer", "Microplane", "Fine mesh strainer"] },
      { title: "Care", items: ["Dry knives right away.", "Avoid overcrowding pans.", "Use the right board for the task."] }
    ],
    related: ["knife-skills", "kitchen-safety", "professional-skills"],
    next: "food-science"
  },
  {
    id: "food-science",
    title: "Food Science",
    category: "Food Science",
    overview: "Food science explains what heat, salt, acid, fat, and time are doing to your food.",
    why: "When you understand the why, you can fix bland food, prevent overcooking, and build better texture.",
    beginner: "Browning creates flavor, acid brightens, salt wakes food up, and fat carries flavor.",
    keyConcepts: ["Browning", "Moisture", "Emulsions", "Thickening", "Salt-fat-acid-heat"],
    modules: [
      { title: "Heat", items: ["Low heat softens.", "Medium heat cooks evenly.", "High heat browns quickly."] },
      { title: "Texture", items: ["Starch thickens.", "Protein firms as it cooks.", "Resting helps juices settle."] },
      { title: "Flavor Balance", items: ["Salt for clarity.", "Acid for brightness.", "Fat for roundness."] }
    ],
    related: ["sauces", "seasonings", "heat-control"],
    next: "sauces"
  },
  {
    id: "sauces",
    title: "Sauces",
    category: "Sauces & Seasonings",
    overview: "Sauces turn simple food into complete meals by adding moisture, flavor, texture, and identity.",
    why: "A sauce can connect a protein, grain, vegetable, and cuisine style into one plate.",
    beginner: "Learn a pan sauce, a gravy or roux, a yogurt sauce, and a quick vinaigrette first.",
    keyConcepts: ["Roux", "Reduction", "Emulsion", "Curry base", "Finishing acid"],
    modules: [
      { title: "Quick Sauces", items: ["Yogurt sauce", "Vinaigrette", "Garlic butter", "Pan sauce"] },
      { title: "Comfort Sauces", items: ["Gravy", "Cheese sauce", "Cream sauce", "Tomato sauce"] },
      { title: "Global Sauces", items: ["Curry base", "Salsa", "Tzatziki", "Jerk sauce"] }
    ],
    related: ["food-science", "seasonings", "roux"],
    next: "seasonings"
  },
  {
    id: "ingredients",
    title: "Ingredients",
    category: "Ingredients",
    overview: "Ingredients are the building blocks of meals: proteins, vegetables, grains, fats, acids, herbs, and spices.",
    why: "Knowing what an ingredient does helps you substitute, plan meals, and waste less food.",
    beginner: "Ask: Is it protein, starch, vegetable, fat, acid, seasoning, or garnish?",
    keyConcepts: ["Ingredient role", "Fresh vs pantry", "Substitutions", "Storage", "Seasonality"],
    modules: [
      { title: "Ingredient Roles", items: ["Protein anchors the meal.", "Starch fills and carries sauce.", "Vegetables bring color and texture."] },
      { title: "Substitutions", items: ["Swap similar textures first.", "Match cooking time.", "Taste after changing ingredients."] },
      { title: "Storage", items: ["Label leftovers.", "Keep herbs dry.", "Freeze proteins flat when possible."] }
    ],
    related: ["seasonings", "world-foods", "kitchen-search"],
    next: "world-foods"
  },
  {
    id: "seasonings",
    title: "Seasonings",
    category: "Sauces & Seasonings",
    overview: "Seasonings build flavor through salt, spices, herbs, aromatics, acids, heat, sweetness, and smoke.",
    why: "Seasoning is how food moves from plain to personal, cultural, and memorable.",
    beginner: "Start with salt, pepper, garlic, onion, paprika, lemon or vinegar, and one herb you like.",
    keyConcepts: ["Salt in layers", "Blooming spices", "Fresh herbs", "Acid finish", "Heat control"],
    modules: [
      { title: "Flavor Layers", items: ["Season early.", "Taste midway.", "Finish with acid or herbs."] },
      { title: "Spice Care", items: ["Store away from heat.", "Smell spices before using.", "Bloom spices in oil for deeper flavor."] },
      { title: "Practice", items: ["Season roasted vegetables three ways.", "Compare lemon vs vinegar.", "Make a small house blend."] }
    ],
    related: ["sauces", "food-science", "world-foods"],
    next: "world-foods"
  },
  {
    id: "world-foods",
    title: "World Foods",
    category: "World Foods",
    overview: "World foods connect ingredients, language, traditions, geography, etiquette, and family memory.",
    why: "Learning culture helps you cook with respect and build menus that actually make sense together.",
    beginner: "Start with one cuisine, learn its pantry staples, then cook one beginner recipe and one traditional side.",
    keyConcepts: ["Food culture", "Common pantry", "Traditional dishes", "Table etiquette", "Regional identity"],
    modules: [
      { title: "How To Explore", items: ["Pick a region.", "Learn 5 common ingredients.", "Study one menu.", "Cook one beginner recipe."] },
      { title: "Respect", items: ["Notice names and origins.", "Avoid treating cuisines as one single dish.", "Learn table customs when serving."] },
      { title: "Next Step", items: ["Open Cuisine Explorer and choose a country or region."] }
    ],
    related: ["ingredients", "seasonings", "cuisine-explorer"],
    next: "professional-skills"
  },
  {
    id: "professional-skills",
    title: "Professional Skills",
    category: "Professional Skills",
    overview: "Professional skills turn cooking into a repeatable system for service, catering, meal prep, and consistency.",
    why: "Prep lists, costing, timing, and station setup keep bigger meals from becoming chaos.",
    beginner: "Write a prep list and timeline before cooking for anyone besides yourself.",
    keyConcepts: ["Mise en place", "Prep lists", "Batching", "Costing", "Service flow"],
    modules: [
      { title: "Prep List", items: ["List every task.", "Mark what can be done ahead.", "Group tasks by station."] },
      { title: "Costing", items: ["Estimate portions.", "Track ingredient cost.", "Add a buffer for waste."] },
      { title: "Service Flow", items: ["Know what must be hot.", "Set serving tools early.", "Create a refill plan."] }
    ],
    related: ["measurements", "hosting-flow", "menu-intelligence"],
    next: "hosting-flow"
  }
];

const techniqueAcademyModules = [
  ["gravy", "Gravy", "Sauces & Seasonings", "Gravy is a savory sauce made from drippings, fat, flour or starch, and liquid.", ["Pan drippings or butter", "Flour or cornstarch", "Stock, broth, or milk", "Whisk", "Skillet or saucepan"], ["Start with fat and flavor.", "Whisk in flour or slurry until smooth.", "Add liquid slowly while whisking.", "Simmer until it coats a spoon.", "Taste for salt, pepper, and acid."], ["Adding liquid too fast", "Letting flour stay raw", "Walking away from the pan"], ["If lumpy, strain or blend briefly.", "If too thick, whisk in warm liquid.", "If bland, add salt, pepper, herbs, or a tiny splash of vinegar."], ["smothered-pork-chops", "fried-chicken", "shrimp-and-grits-green-beans"]],
  ["roux", "Roux", "Sauces & Seasonings", "Roux is cooked fat and flour used to thicken gravy, gumbo, cheese sauce, and creamy sauces.", ["Butter, oil, or drippings", "All-purpose flour", "Wooden spoon or whisk", "Heavy-bottom pan"], ["Melt fat over medium heat.", "Stir in equal parts flour.", "Cook until pale, blonde, brown, or dark depending on the dish.", "Add liquid slowly while stirring.", "Keep stirring until smooth."], ["Using high heat too fast", "Stopping before raw flour flavor cooks out", "Adding cold liquid all at once"], ["Lower heat if it smells burnt.", "Start over if black specks appear.", "Use warm liquid for smoother sauce."], ["gumbo", "mac-and-cheese", "smothered-pork-chops"]],
  ["pan-sauce", "Pan Sauce", "Sauces & Seasonings", "Pan sauce uses browned bits left in the skillet to make a quick sauce for meat, fish, or vegetables.", ["Skillet drippings", "Stock or wine", "Butter", "Lemon or vinegar", "Herbs"], ["Cook protein and remove it to rest.", "Pour off excess fat.", "Add liquid and scrape browned bits.", "Reduce slightly.", "Finish with butter and acid."], ["Burning the fond", "Adding too much liquid", "Skipping the final taste"], ["If salty, add unsalted stock.", "If thin, reduce longer.", "If flat, add lemon or vinegar."], ["chicken-piccata", "lemon-herb-salmon", "tuscan-chicken"]],
  ["bechamel", "Bechamel", "Sauces & Seasonings", "Bechamel is a creamy white sauce made from roux and milk, useful for mac and cheese, casseroles, and gratins.", ["Butter", "Flour", "Milk", "Whisk", "Salt", "Nutmeg optional"], ["Make a pale roux.", "Warm milk separately if possible.", "Whisk milk in gradually.", "Simmer until smooth and thick.", "Season gently."], ["Browning the roux too much", "Boiling too hard", "Not whisking the corners of the pan"], ["Whisk vigorously for small lumps.", "Strain for a silky sauce.", "Thin with milk if too heavy."], ["mac-and-cheese", "chicken-parmesan", "tuscan-chicken"]],
  ["tomato-sauce", "Tomato Sauce", "Sauces & Seasonings", "Tomato sauce builds flavor from tomatoes, aromatics, herbs, salt, time, and balance.", ["Tomatoes", "Onion or garlic", "Olive oil", "Herbs", "Salt", "Sugar optional"], ["Soften aromatics in oil.", "Add tomatoes and seasoning.", "Simmer until the sauce thickens.", "Taste for acid, sweetness, and salt.", "Finish with herbs or olive oil."], ["Scorching the bottom", "Over-sugaring", "Not simmering long enough"], ["Add water if too thick.", "Add tomato paste if thin.", "Add butter or olive oil if sharp."], ["chicken-parmesan", "spaghetti", "mini-pizza-bagels"]],
  ["reduction-sauce", "Reduction Sauce", "Sauces & Seasonings", "Reduction concentrates liquid by simmering until flavor and texture become stronger.", ["Stock, juice, wine, or pan liquid", "Wide saucepan", "Spoon", "Butter optional"], ["Choose a flavorful liquid.", "Simmer uncovered.", "Skim if needed.", "Stop when it coats the spoon.", "Finish with butter, herbs, or acid."], ["Reducing salty liquids too far", "Boiling violently", "Leaving the pan unattended"], ["Dilute with unsalted liquid if too intense.", "Whisk in butter for shine.", "Add acid if heavy."], ["oxtails", "lemon-herb-salmon", "chicken-piccata"]],
  ["marinades", "Marinades", "Sauces & Seasonings", "Marinades season food before cooking with salt, aromatics, acid, oil, herbs, and spices.", ["Salt", "Oil", "Acid", "Garlic or onion", "Herbs and spices", "Covered container"], ["Build salt, fat, acid, and flavor.", "Coat food evenly.", "Chill while marinating.", "Pat dry before searing.", "Discard used marinade or boil it before serving."], ["Too much acid for too long", "Reusing raw marinade", "Not drying before browning"], ["If too acidic, add oil or sweetness.", "If bland, add salt.", "If wet, pat dry before cooking."], ["jerk-chicken", "orange-chicken", "chicken-gyros"]],
  ["braising", "Braising", "Techniques", "Braising cooks tougher foods gently with moisture until tender and flavorful.", ["Heavy pot", "Protein or vegetables", "Aromatics", "Liquid", "Lid"], ["Season and brown the food.", "Cook aromatics.", "Add liquid partway up the food.", "Cover and simmer low.", "Cook until fork-tender."], ["Boiling too hard", "Not browning first", "Using too much liquid"], ["Lower heat for tenderness.", "Cook longer if tough.", "Reduce liquid for sauce."], ["oxtails", "smothered-pork-chops", "caribbean-curry-chicken"]],
  ["frying", "Frying", "Techniques", "Frying uses hot fat to create crisp texture while cooking food through safely.", ["Heavy pot or skillet", "Oil", "Thermometer", "Rack", "Tongs"], ["Dry food well.", "Heat oil to the right temperature.", "Fry in small batches.", "Drain on a rack.", "Season while hot."], ["Crowding the pan", "Oil too cool", "Draining on paper until soggy"], ["Raise heat between batches.", "Use a rack for crispness.", "Cut food evenly for even cooking."], ["fried-chicken", "fried-catfish", "fried-sweet-plantains"]],
  ["baking-basics", "Baking Basics", "Techniques", "Baking rewards measuring, oven temperature, pan prep, timing, and patience.", ["Measuring cups or scale", "Mixing bowls", "Sheet pan or baking dish", "Oven thermometer optional"], ["Read the recipe first.", "Measure carefully.", "Preheat fully.", "Prepare pans.", "Check doneness before removing."], ["Opening the oven too often", "Overmixing batter", "Guessing measurements"], ["Rotate pans if browning unevenly.", "Tent with foil if top browns too fast.", "Cool as directed before slicing."], ["cornbread", "bourbon-praline-bread-pudding", "pecan-pie"]]
].map(([id, title, category, overview, tools, steps, mistakes, troubleshooting, relatedRecipes], index) => ({
  id,
  title,
  category,
  overview,
  why: `${title} gives cooks a repeatable foundation they can use across family meals, hosting menus, and professional prep.`,
  beginner: `Start with the basic method, keep the heat controlled, and taste or check texture before moving on.`,
  keyConcepts: tools.slice(0, 5),
  modules: [
    { title: "Overview", items: [overview] },
    { title: "Ingredients & Tools", items: tools },
    { title: "Step-by-step", items: steps },
    { title: "Common Mistakes", items: mistakes },
    { title: "Troubleshooting", items: troubleshooting },
    { title: "Related Recipes", items: relatedRecipes }
  ],
  related: relatedRecipes,
  next: ["gravy", "roux", "pan-sauce", "bechamel", "tomato-sauce", "reduction-sauce", "marinades", "braising", "frying", "baking-basics"][(index + 1) % 10]
}));

academyModules.push(...techniqueAcademyModules);

const learningLevels = [
  {
    id: "kid-chef",
    title: "Kid Chef",
    depth: "Tiny wins, safety, language, and kitchen confidence.",
    image: "assets/kid-friendly.jpeg",
    topics: ["Hand washing", "No-heat snacks", "Measuring", "Spreading", "Mixing", "Cleaning up"],
    supports: ["basic definitions", "tools and safety"]
  },
  {
    id: "beginner-home-cook",
    title: "Beginner Home Cook",
    depth: "Simple meals, timing, seasoning, and knowing what goes together.",
    image: "assets/lc-fried-chicken.jpg",
    topics: ["Knife basics", "Heat control", "Pantry staples", "Easy sides", "Weeknight planning"],
    supports: ["basic definitions", "tools and safety", "cultural context", "menu planning"]
  },
  {
    id: "intermediate-cook",
    title: "Intermediate Cook",
    depth: "Layered flavor, cuisine foundations, sauces, meal prep, and hosting rhythm.",
    image: "assets/lc-shrimp-and-grits.jpg",
    topics: ["Sauces", "Braising", "Rice and grains", "Cuisine 101", "Balanced menus"],
    supports: ["cultural context", "cooking techniques", "menu planning", "food science"]
  },
  {
    id: "culinary-student",
    title: "Culinary Student",
    depth: "Technique, repetition, knife cuts, station setup, flavor systems, and food vocabulary.",
    image: "assets/ingredients.jpeg",
    topics: ["Mise en place", "Mother sauces", "Food safety", "Flavor families", "Prep lists"],
    supports: ["cooking techniques", "food science", "professional operations"]
  },
  {
    id: "professional-chef",
    title: "Professional Chef",
    depth: "Operations, cost, scaling, service flow, catering prep, plating, and hospitality systems.",
    image: "assets/lc-desserts.jpg",
    topics: ["Menu costing", "Batch prep", "Service timing", "Catering sheets", "Plating polish"],
    supports: ["food science", "professional operations", "menu planning"]
  }
];

const cuisineExplorerGroups = [
  {
    id: "african-cuisines",
    title: "African Cuisines",
    image: photoFor("cuisines", "global"),
    note: "Stews, grains, spice blends, grilled meats, vegetables, fermented foods, and regional hospitality.",
    regions: ["Nigeria", "Ghana", "Ethiopia", "Senegal", "Morocco", "South Africa", "Kenya", "East Africa", "West Africa", "North Africa"]
  },
  {
    id: "asian-cuisines",
    title: "Asian Cuisines",
    image: photoFor("cuisines", "asian-inspired"),
    note: "Rice, noodles, broths, stir-fries, fermented sauces, pickles, dumplings, heat, balance, and texture.",
    regions: ["Japan", "China", "Korea", "Thailand", "Vietnam", "Philippines", "India"]
  },
  {
    id: "mediterranean-cuisines",
    title: "Mediterranean Cuisines",
    image: photoFor("cuisines", "mediterranean"),
    note: "Olive oil, herbs, citrus, yogurt sauces, grilled proteins, mezze, breads, vegetables, and shared tables.",
    regions: ["Greece", "Turkey", "Lebanon", "Egypt", "Morocco", "Italy-adjacent regions"]
  },
  {
    id: "caribbean-cuisines",
    title: "Caribbean Cuisines",
    image: photoFor("cuisines", "caribbean"),
    note: "Warm spice, plantains, rice and peas, seafood, curries, jerk seasoning, stews, and celebration food.",
    regions: ["Jamaica", "Trinidad", "Haiti", "Puerto Rico", "Dominican Republic", "Bahamas", "Barbados"]
  },
  {
    id: "european-cuisines",
    title: "European Cuisines",
    image: photoFor("cuisines", "italian"),
    note: "Pasta, roasts, breads, sauces, preserved foods, pastry, soups, braises, and seasonal cooking.",
    regions: ["Italy", "France", "Spain", "Portugal", "Germany", "United Kingdom", "Eastern Europe"]
  },
  {
    id: "southern-soul-food",
    title: "Southern / Soul Food",
    image: photoFor("cuisines", "southern"),
    note: "Cast iron, greens, cornbread, fish fries, Sunday dinner, slow cooking, and hospitality at the center.",
    regions: ["Mississippi", "Louisiana", "Georgia", "Alabama", "Carolinas", "Texas", "Tennessee"]
  },
  {
    id: "cajun-creole",
    title: "Cajun / Creole",
    image: photoFor("cuisines", "creole"),
    note: "Roux, seafood, rice, holy trinity, spice, gumbo, jambalaya, etouffee, and New Orleans table culture.",
    regions: ["New Orleans", "Acadiana", "Louisiana Gulf Coast", "Creole", "Cajun"]
  },
  {
    id: "latin-american",
    title: "Mexican / Latin American",
    image: photoFor("cuisines", "mexican"),
    note: "Chiles, corn, beans, braises, salsas, tortillas, adobo, citrus, herbs, and family-style meals.",
    regions: ["Mexico", "Peru", "Colombia", "Cuba", "Brazil", "Central America", "Tex-Mex"]
  },
  {
    id: "bbq",
    title: "BBQ",
    image: photoFor("cuisines", "southern", 1),
    note: "Smoke, rubs, sauces, low-and-slow timing, sides, bread, pickles, and feeding a crowd.",
    regions: ["Memphis", "Texas", "Kansas City", "Carolinas", "Mississippi", "Backyard BBQ"]
  },
  {
    id: "vegetarian",
    title: "Vegetarian",
    image: photoFor("cuisines", "mediterranean"),
    note: "Beans, grains, vegetables, sauces, herbs, texture, protein balance, and satisfying plant-forward meals.",
    regions: ["Southern vegetarian", "Indian vegetarian", "Mediterranean", "Asian vegetarian", "Meal prep"]
  },
  {
    id: "holiday-sunday",
    title: "Holiday / Sunday Dinner",
    image: photoFor("cuisines", "hosting"),
    note: "Centerpiece mains, traditional sides, desserts, hosting rhythm, prep lists, and table memory.",
    regions: ["Thanksgiving", "Christmas", "Easter", "Sunday dinner", "Church dinner", "Family reunion"]
  }
];

const countryCuisineProfiles = {
  nigeria: {
    title: "Nigeria",
    region: "West Africa",
    cuisine: "nigerian",
    overview: "Nigerian cooking is bold, layered, and deeply regional, with rice dishes, stews, soups, grilled foods, peppers, tomatoes, onions, and palm oil showing up often.",
    culture: "Meals are generous and often shared, with food connected to celebrations, family gatherings, markets, and regional identity.",
    ingredients: ["rice", "tomatoes", "peppers", "onions", "palm oil", "egusi", "okra", "plantains", "beans"],
    dishes: ["jollof rice", "egusi soup", "suya", "moi moi", "pepper soup", "fried plantains"],
    techniques: ["stew bases", "pepper blending", "grilling", "simmering soups", "rice steaming"],
    menu: ["jollof rice", "grilled chicken or suya", "fried plantains", "cabbage slaw", "zobo or ginger drink"],
    beginnerRecipes: ["Nigerian Jollof Rice", "Egusi Soup", "Suya Skewers", "Nigerian Fried Rice", "Pepper Soup", "Moi Moi"]
  },
  ghana: {
    title: "Ghana",
    region: "West Africa",
    cuisine: "ghanaian",
    overview: "Ghanaian food is warm, hearty, and centered around stews, rice, plantains, beans, soups, fish, and spice.",
    culture: "Food often carries family history and regional pride, especially around rice dishes, soups, and shared bowls.",
    ingredients: ["rice", "beans", "plantains", "tomatoes", "peppers", "fish", "groundnuts", "cassava"],
    dishes: ["waakye", "red red", "kelewele", "groundnut soup", "banku", "light soup"],
    techniques: ["slow stews", "spiced frying", "soup simmering", "fermented dough cooking"],
    menu: ["waakye", "spiced chicken", "kelewele", "shito", "ginger drink"],
    beginnerRecipes: ["Waakye", "Ghanaian Jollof Rice", "Kelewele", "Groundnut Soup", "Red Red"]
  },
  ethiopia: {
    title: "Ethiopia",
    region: "East Africa",
    cuisine: "ethiopian",
    overview: "Ethiopian cuisine is famous for injera, spice-rich stews, lentils, vegetables, and communal eating.",
    culture: "Meals are often served on injera and eaten together, making hospitality and sharing part of the food experience.",
    ingredients: ["berbere", "niter kibbeh", "lentils", "teff", "chickpeas", "collards", "onions"],
    dishes: ["doro wat", "misir wat", "shiro", "injera", "gomen", "tibs"],
    techniques: ["spice blooming", "slow stewing", "lentil simmering", "injera-style flatbread service"],
    menu: ["misir wat", "gomen", "shiro", "injera", "spiced tea"],
    beginnerRecipes: ["Doro Wat", "Misir Wat", "Shiro Wat", "Tibs", "Injera", "Kik Alicha"]
  },
  morocco: {
    title: "Morocco",
    region: "North Africa",
    cuisine: "moroccan",
    overview: "Moroccan cooking layers warm spices, citrus, herbs, preserved foods, couscous, tagines, vegetables, lamb, chicken, and seafood.",
    culture: "Meals are often fragrant and shared, with tea, bread, stews, and hospitality carrying strong meaning.",
    ingredients: ["couscous", "chickpeas", "preserved lemon", "olives", "cumin", "cinnamon", "mint", "harissa"],
    dishes: ["tagine", "couscous", "harira", "zaalouk", "briouats", "mint tea"],
    techniques: ["slow braising", "steaming couscous", "spice layering", "preserved lemon finishing"],
    menu: ["chicken tagine", "couscous", "carrot salad", "flatbread", "mint tea"],
    beginnerRecipes: ["Chicken Tagine", "Couscous with Vegetables", "Harira Soup", "Chermoula Fish", "Moroccan Carrot Salad"]
  },
  india: {
    title: "India",
    region: "South Asia",
    cuisine: "indian",
    overview: "Indian cooking is highly regional, but many beginner paths start with learning spice blooming, lentils, rice, flatbreads, yogurt marinades, and tomato-onion curry bases.",
    culture: "Meals often balance rice or bread, dal or legumes, vegetables, pickles or chutneys, yogurt, and a main dish. Spices are usually layered in fat before liquids are added.",
    ingredients: ["basmati rice", "lentils", "chickpeas", "garam masala", "cumin", "coriander", "turmeric", "ginger", "garlic", "ghee", "yogurt"],
    dishes: ["butter chicken", "chana masala", "dal", "biryani", "palak paneer", "naan"],
    techniques: ["blooming spices", "building curry bases", "simmering lentils", "steaming rice", "marinating with yogurt", "finishing with ghee or cream"],
    menu: ["butter chicken or chana masala", "dal tadka", "basmati rice or biryani", "naan", "cucumber raita", "mango lassi"],
    beginnerRecipes: ["Butter Chicken", "Chana Masala", "Dal Tadka", "Beginner Chicken Biryani"]
  },
  haiti: {
    title: "Haiti",
    region: "Caribbean",
    overview: "Haitian cuisine is bold, generous, and deeply rooted in African, French, Indigenous Taino, and Caribbean foodways, with rice, beans, epis, pikliz, plantains, stews, seafood, and slow-cooked meats showing up often.",
    culture: "Haitian meals are full of seasoning, family memory, celebration, and care. Flavor often starts with epis, a green seasoning base, and finishes with bright heat from pikliz.",
    ingredients: ["epis", "scotch bonnet peppers", "thyme", "garlic", "green onion", "rice", "beans", "plantains", "cabbage", "lime", "seafood"],
    dishes: ["griot", "diri kole ak pwa", "soup joumou", "poule en sauce", "fried plantains", "pikliz", "legim"],
    techniques: ["marinating with citrus and epis", "slow braising", "frying plantains", "rice and bean cooking", "pickling vegetables"],
    menu: ["griot or poule en sauce", "diri kole ak pwa", "fried plantains", "pikliz", "avocado or cabbage salad", "ginger drink"],
    beginnerRecipes: ["Haitian-style rice and beans", "fried sweet plantains", "Caribbean curry chicken", "pikliz-style slaw"]
  },
  mississippi: {
    title: "Mississippi Food Heritage",
    region: "U.S. South",
    cuisine: "mississippi-favorites",
    overview: "Mississippi cooking connects Delta, Gulf Coast, Black Southern, Indigenous, immigrant, church supper, fish fry, and family reunion traditions.",
    culture: "A Mississippi plate usually teaches balance: fried or braised mains, something creamy, something green, bread for the pot liquor or sauce, a bright condiment, and a dessert people recognize.",
    ingredients: ["catfish", "cornmeal", "comeback sauce", "greens", "sweet potatoes", "buttermilk", "hot sauce", "Gulf shrimp", "pecans", "Delta-style tamales"],
    dishes: ["fried catfish", "comeback sauce", "collard greens", "macaroni and cheese", "cornbread", "shrimp and grits", "black-eyed peas", "pound cake"],
    techniques: ["cornmeal dredging", "cast iron frying", "slow simmering greens", "grits whisking", "buttermilk marinating", "building a Sunday plate"],
    menu: ["fried catfish", "spaghetti or potato salad", "collard greens", "hushpuppies or cornbread", "comeback sauce and hot sauce", "sweet tea", "peach cobbler"],
    beginnerRecipes: ["Southern Fried Chicken", "Shrimp and Grits with Green Beans", "Creamy Stone-Ground Grits", "Collard Greens", "Black-Eyed Peas", "Cornbread"]
  }
};

const foodEncyclopedia = [
  {
    term: "Tzatziki",
    pronunciation: "tsah-TZEE-kee",
    origin: "Greek / Eastern Mediterranean",
    purpose: "A cool yogurt, cucumber, garlic, lemon, and herb sauce served with grilled meats, vegetables, pita, or mezze.",
    beginner: "Think of it as a fresh, creamy dip that cools spicy or grilled food.",
    pro: "Salt and drain cucumber first so the sauce stays thick; finish with good olive oil.",
    related: ["gyros", "grilled chicken", "pita", "Greek salad"]
  },
  {
    term: "Chopsticks",
    pronunciation: "",
    origin: "East and Southeast Asian dining traditions",
    purpose: "Eating utensils used across many cultures with different shapes, materials, etiquette, and table customs.",
    beginner: "Use them gently like tongs. Do not stick them upright in rice because that can be disrespectful in some cultures.",
    pro: "Respect local etiquette; serving chopsticks and personal chopsticks may be separate at shared meals.",
    related: ["noodles", "rice bowls", "dumplings", "sushi"]
  },
  {
    term: "Berbere",
    pronunciation: "ber-BER-ay",
    origin: "Ethiopia and Eritrea",
    purpose: "A complex chile spice blend often used in stews, lentils, meats, and sauces.",
    beginner: "It brings heat, warmth, and depth. Start small and taste.",
    pro: "Bloom it in fat to wake up the spices before adding liquids.",
    related: ["doro wat", "lentils", "injera", "stews"]
  },
  {
    term: "Couscous",
    pronunciation: "KOOS-koos",
    origin: "North Africa",
    purpose: "Tiny semolina granules served with stews, vegetables, herbs, or sauced meats.",
    beginner: "It cooks fast and works like a fluffy grain side, even though it is pasta.",
    pro: "Steam and fluff in stages for the lightest texture; finish with herbs, citrus, or broth.",
    related: ["tagine", "roasted vegetables", "lamb", "chickpeas"]
  },
  {
    term: "Plantain",
    pronunciation: "PLAN-tin or plan-TAYN",
    origin: "Tropical regions across Africa, the Caribbean, Latin America, and Southeast Asia",
    purpose: "A starchy banana relative used green for savory dishes or ripe for sweet fried sides.",
    beginner: "Green plantains are firm and savory; yellow-black plantains are sweeter.",
    pro: "Choose ripeness by recipe: green for tostones, ripe for maduros or sweet fried plantains.",
    related: ["rice and peas", "jerk chicken", "tostones", "maduros"]
  },
  {
    term: "Umami",
    pronunciation: "oo-MAH-mee",
    origin: "Japanese food science term",
    purpose: "A savory taste found in foods like mushrooms, soy sauce, tomatoes, aged cheese, seaweed, and cooked meats.",
    beginner: "It is the deep savory taste that makes food feel satisfying.",
    pro: "Layer umami with acid and fat so food tastes full without becoming heavy.",
    related: ["mushrooms", "soy sauce", "parmesan", "tomatoes"]
  },
  {
    term: "Curry",
    pronunciation: "KUR-ee",
    origin: "Broad global term with South Asian, Caribbean, Southeast Asian, British, and other uses",
    purpose: "A family of sauced, spiced dishes or spice blends; the meaning changes by culture.",
    beginner: "Curry is not one thing. Ask what region or style you are cooking.",
    pro: "Build flavor with aromatics, toasted or bloomed spices, liquid, and a balanced finish.",
    related: ["chana masala", "Thai curry", "Caribbean curry chicken", "rice"]
  },
  {
    term: "Roux",
    pronunciation: "roo",
    origin: "French technique central to Creole, Cajun, Southern, and classic sauces",
    purpose: "A cooked mixture of fat and flour used to thicken and flavor sauces, gravies, gumbo, and soups.",
    beginner: "Cook flour and fat together until it smells nutty before adding liquid.",
    pro: "Color controls flavor and thickening power: darker roux tastes deeper but thickens less.",
    related: ["gumbo", "gravy", "mac and cheese", "bechamel"]
  },
  {
    term: "Mise en place",
    pronunciation: "meez ahn plahs",
    origin: "French culinary practice",
    purpose: "The habit of preparing ingredients, tools, and timing before cooking starts.",
    beginner: "Read the recipe, set everything out, and chop before turning on the heat.",
    pro: "Use prep lists, station setup, labels, and batch timing to cook calmly at scale.",
    related: ["prep list", "knife skills", "service flow", "meal prep"]
  },
  {
    term: "Gravy",
    pronunciation: "GRAY-vee",
    origin: "Southern, British, French, and home-cooking traditions",
    purpose: "A savory sauce made from drippings, fat, flour or starch, and liquid; used for biscuits, rice, potatoes, chops, turkey, and smothered dishes.",
    beginner: "Start with equal parts fat and flour, cook until it smells nutty, then whisk in warm liquid slowly.",
    pro: "Control thickness with roux color, liquid temperature, reduction time, and final seasoning.",
    related: ["biscuits", "smothered pork chops", "turkey", "rice"]
  },
  {
    term: "Mirepoix",
    pronunciation: "meer-PWAH",
    origin: "French cooking",
    purpose: "A flavor base of onion, carrot, and celery used to start soups, stocks, braises, and sauces.",
    beginner: "Dice the vegetables small and cook them until softened before adding liquid.",
    pro: "Adjust cut size to cooking time; small dice for quick sauces, larger pieces for long stocks.",
    related: ["stock", "soup", "braising", "tomato sauce"]
  },
  {
    term: "Holy Trinity",
    pronunciation: "",
    origin: "Cajun and Creole cooking",
    purpose: "A Louisiana flavor base of onion, celery, and bell pepper used in gumbo, jambalaya, dirty rice, and etouffee.",
    beginner: "Cook it slowly enough to soften and sweeten before adding spices or liquid.",
    pro: "Pair it with roux, garlic, bay, thyme, and cayenne for deeper Louisiana flavor.",
    related: ["gumbo", "jambalaya", "dirty rice", "etouffee"]
  },
  {
    term: "Braising",
    pronunciation: "BRAY-zing",
    origin: "Global slow-cooking technique",
    purpose: "A method that browns food first, then cooks it gently with a small amount of liquid until tender.",
    beginner: "Brown the meat, add aromatics and liquid, cover, and cook low until fork-tender.",
    pro: "Use the right pot, avoid too much liquid, skim fat, and reduce the braising liquid into sauce.",
    related: ["oxtails", "pot roast", "tagine", "greens"]
  },
  {
    term: "Searing",
    pronunciation: "SEER-ing",
    origin: "Foundational dry-heat technique",
    purpose: "Browning food in a hot pan to create flavor, crust, and color before serving or further cooking.",
    beginner: "Dry the food, preheat the pan, and do not move it too soon.",
    pro: "Manage surface moisture, pan crowding, and fat smoke point for even browning.",
    related: ["steak", "tibs", "pan sauce", "blackened fish"]
  },
  {
    term: "Folding",
    pronunciation: "FOHL-ding",
    origin: "Baking and pastry technique",
    purpose: "A gentle mixing method that combines ingredients without knocking out air.",
    beginner: "Use a spatula to scoop from the bottom and turn the batter over itself.",
    pro: "Rotate the bowl and stop as soon as streaks disappear to protect volume.",
    related: ["cakes", "mousse", "whipped cream", "souffle"]
  },
  {
    term: "Proofing",
    pronunciation: "PROOF-ing",
    origin: "Bread baking",
    purpose: "Letting yeast dough rest and rise so flavor and structure develop.",
    beginner: "Let dough rise until puffy, usually about doubled, in a warm draft-free spot.",
    pro: "Use temperature, time, dough strength, and fermentation cues instead of the clock alone.",
    related: ["bread", "rolls", "pizza dough", "naan"]
  },
  {
    term: "Tempering",
    pronunciation: "TEM-per-ing",
    origin: "Sauce, custard, chocolate, and spice techniques",
    purpose: "Gradually adjusting temperature so ingredients combine smoothly without scrambling, splitting, or seizing.",
    beginner: "Whisk a little hot liquid into eggs or dairy before adding everything back to the pot.",
    pro: "Use tempering for custards, chocolate, yogurt sauces, and spice blooming with careful heat control.",
    related: ["custard", "pudding", "yogurt sauce", "chocolate"]
  },
  {
    term: "Deglazing",
    pronunciation: "dee-GLAY-zing",
    origin: "Sauce-making technique",
    purpose: "Adding liquid to a hot pan to dissolve browned bits into a flavorful sauce base.",
    beginner: "After searing, pour in stock, wine, citrus, or water and scrape the pan gently.",
    pro: "Choose liquid that matches the dish, reduce for concentration, then finish with butter or herbs.",
    related: ["pan sauce", "gravy", "chicken piccata", "braised meats"]
  },
  {
    term: "Simmering",
    pronunciation: "SIM-er-ing",
    origin: "Universal moist-heat technique",
    purpose: "Cooking liquid just below a boil with small steady bubbles for soups, sauces, beans, and braises.",
    beginner: "Look for gentle bubbles, not a rolling boil.",
    pro: "Use simmering to control tenderness, clarity, reduction, and seasoning concentration.",
    related: ["beans", "soup", "tomato sauce", "greens"]
  },
  {
    term: "Black-Eyed Peas Tradition",
    pronunciation: "",
    origin: "Southern and African American New Year's foodways",
    purpose: "Black-eyed peas are often served for luck, resilience, and a strong start to the year, usually with greens, cornbread, and pork or smoked seasoning.",
    beginner: "Start with canned or soaked peas, season them well, and serve with rice or cornbread.",
    pro: "Build the pot with aromatics, smoked meat or vegetables, bay leaf, broth, and a bright vinegar finish.",
    related: ["black-eyed peas", "collard greens", "cornbread", "New Year's Day"]
  },
  {
    term: "History of Grits",
    pronunciation: "",
    origin: "Indigenous corn traditions and Southern cooking",
    purpose: "Grits come from ground corn and became a foundational Southern starch served at breakfast, with seafood, or as a creamy side.",
    beginner: "Cook low and slow, stir often, and season with salt, butter, and cheese if you like.",
    pro: "Use stone-ground grits, hydrate them patiently, and finish with cream, stock, or cheese depending on the plate.",
    related: ["shrimp and grits", "corn", "breakfast", "Low Country"]
  },
  {
    term: "Cornbread Traditions",
    pronunciation: "",
    origin: "Southern, Indigenous, and African American table traditions",
    purpose: "Cornbread is a skillet bread, side, dressing base, and potlikker partner that changes by family, region, and occasion.",
    beginner: "Preheat the skillet so the crust gets crisp.",
    pro: "Balance cornmeal grind, fat, heat, and liquid for the texture you want, from crumbly to tender.",
    related: ["greens", "dressing", "fish fry", "Sunday dinner"]
  },
  {
    term: "Soul Food Origins",
    pronunciation: "",
    origin: "African American foodways shaped by African roots, Southern agriculture, survival, migration, and celebration",
    purpose: "Soul food honors resourcefulness, seasoning, family tables, and cultural memory through dishes like greens, beans, cornbread, yams, fried chicken, and slow-cooked meats.",
    beginner: "Learn the story of the dish while you learn the technique.",
    pro: "Respect origin, balance richness with acid and vegetables, and cook with intention rather than shortcuts alone.",
    related: ["collard greens", "candied yams", "mac and cheese", "Sunday dinner"]
  },
  {
    term: "Mississippi Food Heritage",
    pronunciation: "",
    origin: "Mississippi Delta, Gulf Coast, Black Southern, Indigenous, and immigrant food traditions",
    purpose: "Mississippi food connects catfish, tamales, biscuits, greens, seafood, barbecue, farm tables, church dinners, and family reunion cooking.",
    beginner: "Start with one local plate and learn why the sides belong with it.",
    pro: "Use place-based ingredients, season with restraint and depth, and tell the story of the menu.",
    related: ["catfish", "hot tamales", "sweet tea", "family reunion"]
  }
];

const menuPairings = [
  {
    cuisine: "Southern / Soul Food",
    country_or_region: "U.S. South",
    occasion: "Fish fry",
    main_dish: "Fried catfish",
    main_recipe_ids: ["fried-catfish"],
    side_recipe_ids: ["southern-potato-salad", "creamy-coleslaw", "southern-collard-greens", "bbq-baked-beans", "southern-baked-mac-cheese"],
    bread_recipe_ids: ["hushpuppies", "cornbread"],
    sauce_recipe_ids: ["tartar-sauce"],
    drink_recipe_ids: ["sweet-tea", "lemonade"],
    dessert_recipe_ids: ["peach-cobbler", "banana-pudding"],
    alternate_recipe_ids: ["blackened-swordfish", "southern-shrimp-and-grits", "fried-chicken"],
    traditional_sides: ["spaghetti", "potato salad", "coleslaw", "greens", "baked beans", "mac and cheese"],
    breads: ["hushpuppies", "cornbread"],
    sauces_condiments: ["tartar sauce", "hot sauce", "lemon", "pickles"],
    drinks: ["sweet tea", "lemonade"],
    desserts: ["peach cobbler", "banana pudding"],
    cultural_notes: "Fish fries are often community meals where hot food, sides, and conversation matter as much as the main dish.",
    beginner_level: "Use one fried main, two cold sides, one hot side, bread, and a store-bought dessert if needed.",
    pro_level: "Hold fried fish on racks, batch sides ahead, keep sauce station clean, and stagger frying close to service.",
    cook_time: "90-150 min",
    hosting_notes: "Set condiments and napkins before frying starts; keep drinks self-serve."
  },
  {
    cuisine: "Southern / Soul Food",
    country_or_region: "U.S. South",
    occasion: "Sunday dinner",
    main_dish: "Smothered pork chops or oxtails",
    main_recipe_ids: ["smothered-pork-chops", "oxtails"],
    side_recipe_ids: ["southern-collard-greens", "candied-yams", "southern-black-eyed-peas", "southern-baked-mac-cheese"],
    bread_recipe_ids: ["cornbread", "dinner-rolls"],
    sauce_recipe_ids: ["southern-gravy"],
    drink_recipe_ids: ["sweet-tea", "lemonade"],
    dessert_recipe_ids: ["bourbon-praline-bread-pudding", "pound-cake", "banana-pudding"],
    alternate_recipe_ids: ["fried-chicken", "southern-meatloaf", "southern-cornbread-dressing"],
    traditional_sides: ["collard greens", "candied yams", "black-eyed peas", "mac and cheese"],
    breads: ["cornbread", "dinner rolls"],
    sauces_condiments: ["pepper vinegar", "hot sauce", "gravy"],
    drinks: ["sweet tea", "iced water", "lemonade"],
    desserts: ["bread pudding", "pound cake", "banana pudding"],
    cultural_notes: "Sunday dinner is about abundance, leftovers, and gathering after church or family visits.",
    beginner_level: "Choose one slow main, two sides, one bread, and one dessert.",
    pro_level: "Create a prep timeline and use oven, stovetop, and holding space intentionally.",
    cook_time: "2-4 hours",
    hosting_notes: "Make dessert and greens ahead so the final hour is calmer."
  },
  {
    cuisine: "Caribbean",
    country_or_region: "Jamaica and broader Caribbean",
    occasion: "Family plate",
    main_dish: "Jerk chicken",
    main_recipe_ids: ["jerk-chicken"],
    side_recipe_ids: ["rice-and-peas", "fried-sweet-plantains", "cabbage-saute", "cucumber-salad"],
    bread_recipe_ids: ["coco-bread"],
    sauce_recipe_ids: ["jerk-sauce"],
    drink_recipe_ids: ["sorrel-drink", "lemonade"],
    dessert_recipe_ids: ["rum-cake"],
    alternate_recipe_ids: ["caribbean-curry-chicken", "ghanaian-kelewele", "nigerian-suya-skewers"],
    traditional_sides: ["rice and peas", "fried plantains", "cabbage", "cucumber salad"],
    breads: ["coco bread", "festival"],
    sauces_condiments: ["jerk sauce", "pepper sauce", "lime"],
    drinks: ["sorrel", "ginger beer", "tropical punch"],
    desserts: ["rum cake", "coconut drops"],
    cultural_notes: "Heat, sweetness, citrus, and spice balance the plate.",
    beginner_level: "Use baked jerk chicken with rice, plantains, and a fresh salad.",
    pro_level: "Control smoke, marinade timing, and final glaze while keeping sides bright.",
    cook_time: "90-180 min",
    hosting_notes: "Serve sauces on the side so guests control heat."
  },
  {
    cuisine: "Mediterranean",
    country_or_region: "Greek / Levant-inspired",
    occasion: "Lunch spread",
    main_dish: "Chicken gyros or grilled salmon",
    main_recipe_ids: ["chicken-gyros", "lemon-herb-salmon"],
    side_recipe_ids: ["greek-salad", "creamy-hummus", "roasted-vegetables", "rice-pilaf"],
    bread_recipe_ids: ["pita-flatbread"],
    sauce_recipe_ids: ["tzatziki-sauce"],
    drink_recipe_ids: ["mint-lemonade"],
    dessert_recipe_ids: ["baklava-cups"],
    alternate_recipe_ids: ["grilled-swordfish-lemon-herb", "mediterranean-swordfish", "moroccan-carrot-salad"],
    traditional_sides: ["Greek salad", "hummus", "roasted vegetables", "rice pilaf"],
    breads: ["pita", "flatbread"],
    sauces_condiments: ["tzatziki", "olive oil", "lemon", "herbs"],
    drinks: ["mint lemonade", "sparkling water"],
    desserts: ["baklava", "fruit with yogurt"],
    cultural_notes: "Shared plates and bright sauces make the table feel generous without heaviness.",
    beginner_level: "Buy pita, make one sauce, grill one protein, and assemble a salad.",
    pro_level: "Balance acid, herbs, char, and creamy sauce across the full spread.",
    cook_time: "45-90 min",
    hosting_notes: "Serve in shallow bowls so the table feels abundant."
  },
  {
    cuisine: "BBQ",
    country_or_region: "U.S. regional barbecue",
    occasion: "Cookout",
    main_dish: "Smoked ribs or pulled pork",
    main_recipe_ids: ["bbq-smoked-ribs", "bbq-pulled-pork"],
    side_recipe_ids: ["bbq-baked-beans", "creamy-coleslaw", "southern-potato-salad", "corn-on-the-cob"],
    bread_recipe_ids: ["cornbread", "slider-buns"],
    sauce_recipe_ids: ["bbq-sauce-trio"],
    drink_recipe_ids: ["sweet-tea", "lemonade"],
    dessert_recipe_ids: ["peach-cobbler", "banana-pudding"],
    alternate_recipe_ids: ["bbq-chicken-quarters", "bbq-brisket-basics", "fried-chicken"],
    traditional_sides: ["baked beans", "coleslaw", "potato salad", "corn on the cob", "pickles"],
    breads: ["white bread", "cornbread", "slider buns"],
    sauces_condiments: ["vinegar sauce", "sweet barbecue sauce", "mustard sauce", "pickles"],
    drinks: ["sweet tea", "lemonade", "cold water"],
    desserts: ["peach cobbler", "banana pudding"],
    cultural_notes: "BBQ menus are built around smoke, patience, sauce choice, and sides that can sit on a table without falling apart.",
    beginner_level: "Start with oven-baked or grilled chicken, one sauce, slaw, beans, and dessert.",
    pro_level: "Track smoker temperature, rest meat properly, and set separate sauce and slicing stations.",
    cook_time: "3-12 hours",
    hosting_notes: "Hold cooked meat wrapped in a cooler, label sauces, and keep wet wipes near the serving line."
  },
  {
    cuisine: "Cajun",
    country_or_region: "Louisiana",
    occasion: "One-pot supper",
    main_dish: "Chicken and sausage jambalaya",
    main_recipe_ids: ["cajun-jambalaya"],
    side_recipe_ids: ["green-salad", "smothered-green-beans", "southern-potato-salad", "corn-maque-choux"],
    bread_recipe_ids: ["french-bread"],
    sauce_recipe_ids: ["creole-seasoning-blend"],
    drink_recipe_ids: ["sweet-tea", "lemonade"],
    dessert_recipe_ids: ["bourbon-praline-bread-pudding"],
    alternate_recipe_ids: ["cajun-chicken-sausage-gumbo", "cajun-shrimp-etouffee", "cajun-dirty-rice"],
    traditional_sides: ["green salad", "smothered green beans", "potato salad", "corn maque choux"],
    breads: ["French bread"],
    sauces_condiments: ["hot sauce", "green onions", "parsley"],
    drinks: ["iced tea", "lemonade"],
    desserts: ["bread pudding"],
    cultural_notes: "Cajun meals often use rice, smoked meats, seafood, trinity, and layered seasoning to feed a crowd from one pot.",
    beginner_level: "Use measured seasoning and cook rice gently so it steams instead of turns mushy.",
    pro_level: "Build fond, use stock, control rice absorption, and rest the pot before serving.",
    cook_time: "60-90 min",
    hosting_notes: "Jambalaya holds well; keep garnish fresh and hot sauce nearby."
  },
  {
    cuisine: "Creole",
    country_or_region: "New Orleans / Gulf South",
    occasion: "Celebration supper",
    main_dish: "Shrimp Creole",
    main_recipe_ids: ["creole-shrimp-creole"],
    side_recipe_ids: ["white-rice", "okra-tomato-stew", "green-salad", "buttered-vegetables"],
    bread_recipe_ids: ["french-bread"],
    sauce_recipe_ids: ["creole-seasoning-blend"],
    drink_recipe_ids: ["sweet-tea", "mint-lemonade"],
    dessert_recipe_ids: ["creole-bananas-foster", "bourbon-praline-bread-pudding"],
    alternate_recipe_ids: ["creole-seafood-gumbo", "creole-courtbouillon", "cajun-shrimp-etouffee"],
    traditional_sides: ["white rice", "okra", "green salad", "buttered vegetables"],
    breads: ["French bread"],
    sauces_condiments: ["Creole seasoning", "hot sauce", "lemon"],
    drinks: ["iced tea", "sparkling water"],
    desserts: ["bananas Foster", "bread pudding"],
    cultural_notes: "Creole menus often layer tomato, seafood, trinity, herbs, butter, and city-style hospitality.",
    beginner_level: "Make the sauce first, cook seafood gently, and serve over rice.",
    pro_level: "Use seafood stock, finish with herbs, and avoid overcooking shrimp.",
    cook_time: "45-75 min",
    hosting_notes: "Keep rice warm separately and add seafood close to service."
  },
  {
    cuisine: "Indian",
    country_or_region: "South Asia",
    occasion: "Family curry night",
    main_dish: "Chana masala or butter chicken",
    main_recipe_ids: ["chana-masala", "butter-chicken"],
    side_recipe_ids: ["indian-dal-tadka", "cucumber-raita", "kachumber-salad"],
    bread_recipe_ids: ["garlic-naan"],
    sauce_recipe_ids: ["mint-chutney", "cucumber-raita"],
    drink_recipe_ids: ["mango-lassi"],
    dessert_recipe_ids: ["kheer"],
    alternate_recipe_ids: ["chicken-tikka-masala", "biryani", "palak-paneer"],
    traditional_sides: ["dal", "cucumber raita", "sauteed greens", "kachumber salad"],
    breads: ["naan", "roti"],
    sauces_condiments: ["mint chutney", "mango chutney", "yogurt"],
    drinks: ["lassi", "tea", "lime water"],
    desserts: ["kheer", "fruit"],
    cultural_notes: "Indian menus balance spice, starch, cooling yogurt, pickles or chutneys, and lentils or vegetables.",
    beginner_level: "Cook one curry, one rice or bread, and one cooling side.",
    pro_level: "Bloom whole spices, manage oil separation, and finish with acid, herbs, or ghee.",
    cook_time: "45-120 min",
    hosting_notes: "Keep rice warm and offer chutneys so guests can adjust heat and brightness."
  },
  {
    cuisine: "Mexican",
    country_or_region: "Mexico / Mexican American table",
    occasion: "Taco night",
    main_dish: "Birria tacos or chicken street tacos",
    main_recipe_ids: ["birria-style-tacos", "chicken-street-tacos"],
    side_recipe_ids: ["black-bean-side", "cilantro-lime-rice", "elote-corn", "mexican-slaw"],
    bread_recipe_ids: ["corn-tortillas"],
    sauce_recipe_ids: ["salsa-roja", "salsa-verde", "pickled-red-onions"],
    drink_recipe_ids: ["agua-fresca", "lemonade"],
    dessert_recipe_ids: ["churro-bites", "flan-cups"],
    alternate_recipe_ids: ["swordfish-tacos", "cheese-quesadillas", "black-bean-enchiladas"],
    traditional_sides: ["beans", "cilantro lime rice", "elote-style corn", "slaw"],
    breads: ["corn tortillas", "flour tortillas"],
    sauces_condiments: ["salsa roja", "salsa verde", "lime", "pickled onions", "crema"],
    drinks: ["agua fresca", "limeade"],
    desserts: ["churro bites", "flan"],
    cultural_notes: "A good taco table is about warm tortillas, bright salsa, acid, texture, and enough toppings for choice.",
    beginner_level: "Warm tortillas last and keep toppings in small bowls.",
    pro_level: "Toast chiles, build salsa, and hold braised meat in its juices.",
    cook_time: "35 min-3 hours",
    hosting_notes: "Use a tortilla warmer and refill garnishes often."
  }
];

const hostingKnowledge = [
  { title: "Fish Fry", text: "Crispy main, cold sides, hot sides, bread, sauce station, drinks, and a dessert people can scoop.", pairing: "Fried catfish" },
  { title: "Sunday Dinner", text: "One slow-cooked centerpiece, two or three sides, bread, dessert, leftovers, and time to sit down.", pairing: "Smothered pork chops or oxtails" },
  { title: "Church Dinner", text: "Portable pans, clear labels, allergy awareness, serving utensils, and foods that hold well.", pairing: "Baked chicken, greens, casseroles" },
  { title: "Funeral Repast", text: "Comforting, easy-to-serve foods with quiet hospitality, drinks, paper goods, and extra help.", pairing: "Baked pasta, chicken, salads, desserts" },
  { title: "Family Reunion", text: "Large-batch mains, grill items, nostalgic sides, kid foods, hydration, and labeled stations.", pairing: "BBQ, fried chicken, potluck sides" },
  { title: "Brunch", text: "Eggs, breads, fruit, one savory main, one sweet item, coffee, juice, and make-ahead pacing.", pairing: "Brunch cups and fruit cups" },
  { title: "Baby Shower", text: "Small bites, pretty cups, alcohol-free drinks, desserts, and food that stays neat.", pairing: "Party cups and dessert cups" },
  { title: "Holiday Dinner", text: "A centerpiece, traditional sides, oven schedule, dessert plan, and a written prep timeline.", pairing: "Turkey, ham, dressing, yams" },
  { title: "Holiday Menus", text: "Plan the centerpiece, oven schedule, classic sides, make-ahead desserts, drinks, and leftover storage before the holiday rush starts.", pairing: "Ham, turkey, dressing, greens, yams, pies" },
  { title: "Date Night", text: "One impressive but calm main, one side, one dessert, and minimal last-minute cleanup.", pairing: "Seafood pasta or steakhouse-style plate" },
  { title: "Sunday Dinner Menus", text: "Build around a comforting main, greens or beans, a starch, bread, dessert, and time for people to linger.", pairing: "Oxtails, pork chops, fried chicken, collards, cornbread" },
  { title: "Church Potluck Menus", text: "Choose portable pans, labeled dishes, allergy notes, serving spoons, and foods that hold safely on a table.", pairing: "Baked chicken, casseroles, greens, pasta salad, sheet cake" },
  { title: "Family Reunion Menus", text: "Use large-batch mains, grill stations, kid-friendly sides, hydration, desserts, and clear food station flow.", pairing: "BBQ, fried chicken, baked beans, potato salad, banana pudding" },
  { title: "Tailgate Menus", text: "Keep it handheld, sturdy, and easy to refill with hot dips, wings, sliders, cups, drinks, and trash bags close by.", pairing: "Wings, tailgate cups, sliders, chips, dips" },
  { title: "Cookout Menus", text: "Balance grilled mains with cold sides, fresh fruit, bread, sauces, drinks, and desserts that tolerate heat.", pairing: "Burgers, ribs, hot dogs, coleslaw, baked beans, cobbler" },
  { title: "Meal Prep", text: "Proteins, grains, vegetables, sauces, labels, reheating notes, and flexible mix-and-match meals.", pairing: "Chicken bowls and rice bowls" },
  { title: "Catering Prep", text: "Counts, portions, holding temps, service flow, packaging, backup utensils, and transport timing.", pairing: "Party cups, trays, and batch sides" }
];

const menuRecipeSections = [
  ["Main dishes", "main_recipe_ids"],
  ["Sides", "side_recipe_ids"],
  ["Bread", "bread_recipe_ids"],
  ["Sauces", "sauce_recipe_ids"],
  ["Drinks", "drink_recipe_ids"],
  ["Dessert", "dessert_recipe_ids"]
];

function recipeById(id) {
  return recipes.find((recipe) => recipe.id === id);
}

function recipeLinksFor(ids = []) {
  return ids
    .map((id) => recipeById(id))
    .filter(Boolean)
    .map((recipe) => `<a href="#recipes/${recipe.id}">${recipe.title}</a>`);
}

function recipesForMenu(menu) {
  const ids = menuRecipeSections.flatMap(([, key]) => menu[key] || []);
  return [...new Set(ids)].map((id) => recipeById(id)).filter(Boolean);
}

function menuShoppingList(menu) {
  return [...new Set(recipesForMenu(menu).flatMap((recipe) => recipe.ingredients || []))];
}

function menuMissingRecipeIds() {
  return menuPairings.flatMap((menu) =>
    [...menuRecipeSections.map(([, key]) => key), "alternate_recipe_ids"].flatMap((key) =>
      (menu[key] || []).filter((id) => !recipeById(id)).map((id) => ({ menu: `${menu.cuisine} / ${menu.occasion}`, section: key, id }))
    )
  );
}

window.auditLetsCookMenuIntelligence = () => ({
  totalMenus: menuPairings.length,
  missingRecipeLinks: menuMissingRecipeIds(),
  menus: menuPairings.map((menu) => ({
    menu: `${menu.cuisine} / ${menu.occasion}`,
    recipeCount: recipesForMenu(menu).length,
    linkedRecipes: recipesForMenu(menu).map((recipe) => recipe.id)
  }))
});

const ingredientPlaybooks = {
  chicken: {
    techniques: ["Bread and bake or air-fry", "Pan-sear then sauce", "Grill and slice", "Stir-fry quickly over high heat", "Simmer gently in curry or chili"],
    sides: ["Cilantro lime rice", "Mac and cheese", "Collard greens", "Greek salad", "Cornbread"],
    substitutions: ["Turkey cutlets", "Shrimp", "Tofu strips", "Cauliflower florets", "Portobello strips"],
    mealPlans: ["Weeknight chicken bowls", "Kid-friendly crispy strip tray", "Taco night with rice and toppings", "Meal-prep wraps and salads"]
  },
  "chicken strips": {
    techniques: ["Season, bread, and bake until crisp", "Chop into quick stir-fry pieces", "Toss in orange, buffalo, barbecue, or garlic sauce", "Slice into wraps, salads, tacos, or pasta", "Reheat on a rack so they stay crisp"],
    sides: ["Cilantro lime rice", "Stovetop mac and cheese", "Roasted vegetables", "Cornbread", "Simple salad"],
    substitutions: ["Chicken thighs cut into strips", "Turkey tenders", "Fish strips", "Tofu strips", "Cauliflower florets"],
    mealPlans: ["Monday: crispy chicken wraps", "Wednesday: orange chicken rice bowls", "Friday: chicken strip taco night", "Weekend: party platter with dips and sides"]
  },
  shrimp: {
    techniques: ["Quick sear", "Saute in garlic butter", "Fold into grits", "Toss through fried rice", "Blacken with high heat"],
    sides: ["Grits", "Fried rice", "Green beans", "Greek salad", "Garlic bread"],
    substitutions: ["Chicken strips", "Fish chunks", "Scallops", "Mushrooms", "Firm tofu"],
    mealPlans: ["Shrimp and grits supper", "Fried rice night", "Seafood pasta dinner", "Taco bowl with slaw"]
  },
  swordfish: {
    techniques: ["Grill thick steaks over medium-high heat", "Blacken in a hot skillet", "Sear and finish with lemon butter", "Cube for tacos", "Marinate briefly with citrus and herbs"],
    sides: ["Citrus slaw", "Rice pilaf", "Roasted vegetables", "Greek salad", "Cornbread or hushpuppies"],
    substitutions: ["Mahi mahi", "Tuna steaks", "Salmon", "Halibut", "Firm tofu steaks"],
    mealPlans: ["Grilled swordfish Mediterranean plate", "Blackened swordfish Southern supper", "Swordfish taco night", "Seafood meal-prep bowls"]
  },
  rice: {
    techniques: ["Rinse before cooking", "Toast with aromatics", "Steam covered", "Fry day-old rice", "Season with herbs, citrus, or broth"],
    sides: ["Black beans", "Curry chicken", "Orange chicken", "Seafood", "Roasted vegetables"],
    substitutions: ["Quinoa", "Couscous", "Cauliflower rice", "Grits", "Pasta"],
    mealPlans: ["Rice bowl week", "Curry night", "Fried rice lunch prep", "Taco rice skillet"]
  }
};

let recipes = [
  {
    id: "pb-and-j-sandwich",
    title: "Classic PB&J Sandwich",
    cuisine: "global",
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
    cuisine: "global",
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
    description: "A New Orleans-style beef noodle bowl with seasoned broth, tender beef, spaghetti, boiled egg, and green onion.",
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
    description: "Creamy stone-ground grits topped with quick-sauteed shrimp, peppers, garlic, lemon, and green beans.",
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
    description: "A creamy one-pot chili with chicken, white beans, corn, green chiles, cumin, and a gentle broth base.",
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
    description: "A slow-simmered lamb broth with bones, aromatics, herbs, and vegetables for a rich soup base.",
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
    description: "Baked elbow macaroni folded into a cheddar-rich sauce and finished with a browned cheese top.",
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

const nextFeatureRecipes = [
  ["southern-crispy-fried-chicken", "Crispy Fried Chicken", "southern", "Soul Food", "images/cuisines/southern/southern-01.png", "20 min", "35 min", "Intermediate", 6, "Buttermilk-marinated chicken fried crisp with a seasoned crust and juicy center.", ["Chicken pieces", "Buttermilk", "Hot sauce", "Flour", "Cornstarch", "Seasoned salt", "Paprika", "Oil"], ["Marinate chicken in buttermilk, hot sauce, and seasoning.", "Dredge in seasoned flour and cornstarch.", "Rest coated chicken for 10 minutes.", "Fry in batches until deeply golden.", "Drain on a rack and season while hot."], ["southern", "soul food", "fried", "chicken"]],
  ["southern-baked-mac-cheese", "Baked Mac and Cheese", "southern", "Soul Food", "images/cuisines/southern/southern-02.png", "15 min", "35 min", "Beginner", 8, "Creamy baked macaroni with sharp cheddar, a custardy center, and a golden top.", ["Elbow macaroni", "Sharp cheddar", "Evaporated milk", "Eggs", "Butter", "Mustard powder", "Paprika"], ["Boil macaroni just shy of tender.", "Whisk milk, eggs, seasoning, and melted butter.", "Layer pasta with cheese.", "Pour custard over the top.", "Bake until bubbly and golden."], ["southern", "soul food", "mac and cheese", "holiday"]],
  ["southern-collard-greens", "Slow-Cooked Collard Greens", "southern", "Soul Food", "images/cuisines/southern/southern-03.png", "20 min", "1 hr 30 min", "Beginner", 8, "Tender greens simmered with smoky flavor, garlic, pepper vinegar, and Sunday dinner patience.", ["Collard greens", "Smoked turkey", "Onion", "Garlic", "Chicken stock", "Vinegar", "Red pepper flakes"], ["Wash greens well.", "Simmer smoked turkey with aromatics.", "Add greens by the handful.", "Cook until tender.", "Finish with vinegar and seasoning."], ["southern", "greens", "soul food", "slow cooking"]],
  ["southern-black-eyed-peas", "Black-Eyed Peas", "southern", "Soul Food", "images/cuisines/southern/southern-04.png", "10 min", "1 hr", "Beginner", 6, "Comforting peas simmered with onion, garlic, smoked meat, and a little good-luck tradition.", ["Black-eyed peas", "Smoked turkey or ham", "Onion", "Garlic", "Bay leaf", "Stock", "Hot sauce"], ["Rinse peas.", "Cook aromatics and smoked meat.", "Add peas, bay, and stock.", "Simmer until tender.", "Season and serve with greens."], ["southern", "black-eyed peas", "tradition", "new year"]],
  ["southern-cornbread-dressing", "Cornbread Dressing", "southern", "Holiday", "images/cuisines/southern/southern-05.png", "25 min", "45 min", "Intermediate", 10, "Savory holiday dressing with crumbled cornbread, herbs, onion, celery, and rich stock.", ["Cornbread", "Celery", "Onion", "Sage", "Poultry seasoning", "Eggs", "Chicken stock"], ["Crumble day-old cornbread.", "Cook celery and onion.", "Mix with herbs, eggs, and stock.", "Spread in a baking dish.", "Bake until set and golden."], ["southern", "holiday", "cornbread", "dressing"]],
  ["southern-meatloaf", "Southern Meatloaf", "southern", "Family Dinners", "images/cuisines/southern/southern-06.png", "15 min", "55 min", "Beginner", 6, "Tender meatloaf with a sweet-tangy glaze and Sunday plate energy.", ["Ground beef", "Breadcrumbs", "Egg", "Onion", "Bell pepper", "Worcestershire", "Ketchup", "Brown sugar"], ["Mix meatloaf gently.", "Shape into a loaf.", "Stir ketchup glaze.", "Bake until cooked through.", "Rest before slicing."], ["southern", "meatloaf", "family dinner", "comfort food"]],
  ["southern-stone-ground-grits", "Creamy Stone-Ground Grits", "southern", "Beginner Basics", "images/cuisines/southern/southern-07.png", "5 min", "35 min", "Beginner", 4, "Slow-simmered grits finished with butter, cheese, and a little patience.", ["Stone-ground grits", "Water or stock", "Milk", "Butter", "Cheddar", "Salt"], ["Whisk grits into simmering liquid.", "Cook low and slow.", "Stir often.", "Finish with butter and cheese.", "Taste for salt."], ["southern", "grits", "breakfast", "low country"]],
  ["southern-pecan-pie", "Pecan Pie", "southern", "Desserts", "images/cuisines/southern/southern-08.png", "15 min", "55 min", "Intermediate", 8, "A glossy pecan pie with a buttery crust, toasted nuts, and classic Southern sweetness.", ["Pie crust", "Pecans", "Eggs", "Corn syrup", "Brown sugar", "Butter", "Vanilla"], ["Toast pecans lightly.", "Whisk filling.", "Fill crust with pecans.", "Pour filling over top.", "Bake until just set."], ["southern", "dessert", "pecan pie", "holiday"]],
  ["southern-shrimp-and-grits", "Low Country Shrimp and Grits", "southern", "Seafood", "images/cuisines/southern/southern-09.png", "15 min", "30 min", "Intermediate", 4, "Creamy grits topped with seasoned shrimp, peppers, and a quick skillet sauce.", ["Shrimp", "Grits", "Butter", "Cheddar", "Bell pepper", "Garlic", "Stock", "Lemon"], ["Cook grits low and slow.", "Season shrimp.", "Saute peppers and garlic.", "Cook shrimp quickly.", "Spoon shrimp and sauce over grits."], ["southern", "low country", "shrimp", "grits"]],
  ["asian-garlic-fried-rice", "Garlic Fried Rice", "asian-inspired", "Asian Inspired", "images/cuisines/asian/asian-01.png", "10 min", "12 min", "Beginner", 4, "Day-old rice stir-fried with garlic, egg, scallions, and pantry seasoning.", ["Cooked rice", "Garlic", "Eggs", "Scallions", "Soy sauce", "Oil"], ["Break up cold rice.", "Scramble eggs and set aside.", "Fry garlic in oil.", "Add rice and sauce.", "Fold eggs and scallions back in."], ["asian", "fried rice", "rice", "quick meals"]],
  ["asian-orange-chicken", "Orange Chicken", "asian-inspired", "Quick Meals", "images/cuisines/asian/asian-02.png", "15 min", "25 min", "Intermediate", 4, "Crisp chicken bites tossed in a bright orange glaze with garlic and ginger.", ["Chicken breast", "Cornstarch", "Orange juice", "Soy sauce", "Garlic", "Ginger", "Rice vinegar"], ["Coat chicken in cornstarch.", "Cook until crisp.", "Simmer orange sauce.", "Toss chicken in glaze.", "Serve over rice."], ["asian", "orange chicken", "chicken", "takeout style"]],
  ["asian-cashew-chicken", "Cashew Chicken", "asian-inspired", "Family Dinners", "images/cuisines/asian/asian-03.png", "15 min", "20 min", "Beginner", 4, "Tender chicken, vegetables, cashews, and glossy sauce in a fast skillet dinner.", ["Chicken", "Cashews", "Bell pepper", "Soy sauce", "Hoisin", "Garlic", "Ginger"], ["Mix sauce.", "Cook chicken.", "Add vegetables.", "Return chicken with sauce.", "Finish with cashews."], ["asian", "cashew", "chicken", "stir fry"]],
  ["asian-beef-broccoli", "Beef and Broccoli", "asian-inspired", "Family Dinners", "images/cuisines/asian/asian-04.png", "20 min", "15 min", "Beginner", 4, "Thin beef and broccoli in a savory sauce with garlic, ginger, and rice-ready flavor.", ["Beef strips", "Broccoli", "Soy sauce", "Oyster sauce", "Garlic", "Ginger", "Cornstarch"], ["Marinate beef briefly.", "Steam or blanch broccoli.", "Sear beef quickly.", "Add sauce.", "Fold broccoli back in."], ["asian", "beef", "broccoli", "quick meals"]],
  ["asian-lo-mein", "Vegetable Lo Mein", "asian-inspired", "Vegetarian", "images/cuisines/asian/asian-05.png", "15 min", "15 min", "Beginner", 4, "Noodles tossed with vegetables, soy-based sauce, sesame, and weeknight speed.", ["Noodles", "Cabbage", "Carrots", "Scallions", "Soy sauce", "Sesame oil", "Garlic"], ["Cook noodles.", "Stir-fry vegetables.", "Add noodles and sauce.", "Toss until glossy.", "Finish with scallions."], ["asian", "noodles", "vegetarian", "lo mein"]],
  ["asian-dumpling-bowls", "Dumpling Bowl", "asian-inspired", "Quick Meals", "images/cuisines/asian/asian-06.png", "10 min", "15 min", "Beginner", 4, "Pan-seared dumplings served over greens, rice, chili crunch, and a quick dipping sauce.", ["Frozen dumplings", "Rice", "Cabbage", "Soy sauce", "Rice vinegar", "Chili crunch", "Sesame seeds"], ["Cook rice.", "Pan-sear dumplings.", "Mix dipping sauce.", "Layer rice and cabbage.", "Top with dumplings and sauce."], ["asian", "dumplings", "rice bowl", "quick meals"]],
  ["asian-teriyaki-salmon", "Teriyaki Salmon", "asian-inspired", "Seafood", "images/cuisines/asian/asian-07.png", "10 min", "15 min", "Beginner", 4, "Salmon glazed with soy, ginger, garlic, and honey for a glossy dinner plate.", ["Salmon", "Soy sauce", "Honey", "Ginger", "Garlic", "Rice vinegar", "Sesame oil"], ["Mix glaze.", "Sear salmon.", "Brush with glaze.", "Cook until just flaky.", "Serve with rice and vegetables."], ["asian", "salmon", "teriyaki", "seafood"]],
  ["asian-thai-basil-chicken", "Thai Basil Chicken", "asian-inspired", "Quick Meals", "images/cuisines/asian/asian-08.png", "10 min", "15 min", "Intermediate", 4, "Ground chicken cooked hot and fast with garlic, chiles, basil, and savory sauce.", ["Ground chicken", "Garlic", "Chile", "Basil", "Soy sauce", "Fish sauce", "Sugar"], ["Mix sauce.", "Cook garlic and chile.", "Brown chicken.", "Add sauce.", "Fold in basil at the end."], ["asian", "thai", "basil", "quick meals"]],
  ["asian-miso-noodles", "Miso Butter Noodles", "asian-inspired", "Beginner Basics", "images/cuisines/asian/asian-09.png", "10 min", "12 min", "Beginner", 3, "Cozy noodles with miso, butter, garlic, scallions, and an umami-rich finish.", ["Noodles", "Miso", "Butter", "Garlic", "Scallions", "Reserved pasta water"], ["Cook noodles.", "Soften garlic in butter.", "Whisk miso with pasta water.", "Toss noodles in sauce.", "Finish with scallions."], ["asian", "miso", "noodles", "umami"]],
  ["asian-crab-rangoon", "Crab Rangoon", "asian-inspired", "Party & Hosting", "images/cuisines/asian/asian-10.png", "20 min", "15 min", "Intermediate", 24, "Crisp wontons filled with creamy crab, scallion, and garlic for party trays.", ["Wonton wrappers", "Cream cheese", "Crab", "Scallions", "Garlic powder", "Oil"], ["Mix filling.", "Fill wonton wrappers.", "Seal edges with water.", "Fry or bake until crisp.", "Serve with sweet chili sauce."], ["asian", "crab rangoon", "party", "appetizer"]],
  ["bbq-smoked-ribs", "Sticky BBQ Ribs", "bbq", "BBQ", "assets/beautiful-chicken.jpeg", "20 min", "3 hr", "Intermediate", 6, "Tender ribs seasoned with a dry rub, cooked low, then glazed until sticky and ready for a cookout plate.", ["Pork ribs", "Brown sugar", "Paprika", "Garlic powder", "Mustard", "BBQ sauce", "Apple juice"], ["Remove membrane from ribs.", "Rub with mustard and spice blend.", "Cook covered low until tender.", "Brush with sauce.", "Finish uncovered until glaze sets."], ["bbq", "ribs", "cookout", "smoking basics"]],
  ["bbq-pulled-pork", "Pulled Pork Shoulder", "bbq", "BBQ", "assets/american-food.jpeg", "20 min", "6 hr", "Advanced", 10, "Slow-cooked pork shoulder seasoned with rub, cooked until shreddable, and finished with vinegar or sweet sauce.", ["Pork shoulder", "Dry rub", "Apple cider vinegar", "Stock", "BBQ sauce", "Buns", "Pickles"], ["Season pork generously.", "Cook low and slow until fork-tender.", "Rest the meat.", "Shred and moisten with juices.", "Serve with sauce, pickles, and buns."], ["bbq", "pulled pork", "low and slow", "cookout"]],
  ["bbq-brisket-basics", "Brisket Basics", "bbq", "BBQ", "assets/american-food.jpeg", "30 min", "8 hr", "Advanced", 10, "A beginner-friendly brisket guide focused on seasoning, low heat, resting, and slicing across the grain.", ["Beef brisket", "Kosher salt", "Black pepper", "Garlic powder", "Wood smoke or oven setup", "Stock"], ["Trim excess hard fat.", "Season heavily.", "Cook low until tender.", "Rest wrapped before slicing.", "Slice across the grain and serve with sauce."], ["bbq", "brisket", "smoking", "meat science"]],
  ["bbq-chicken-quarters", "BBQ Chicken Quarters", "bbq", "BBQ", "assets/beautiful-chicken.jpeg", "15 min", "50 min", "Beginner", 4, "Juicy chicken quarters seasoned, cooked gently, and sauced at the end so the glaze does not burn.", ["Chicken leg quarters", "Dry rub", "Oil", "BBQ sauce", "Apple cider vinegar"], ["Pat chicken dry.", "Season under and over the skin.", "Cook over indirect heat or bake.", "Brush with sauce near the end.", "Rest before serving."], ["bbq", "chicken", "grilling", "sauce"]],
  ["cajun-chicken-sausage-gumbo", "Chicken and Sausage Gumbo", "cajun", "Cajun", "assets/lc-seafood.jpg", "30 min", "1 hr 45 min", "Advanced", 8, "A dark-roux gumbo with chicken, smoked sausage, trinity, stock, and rice.", ["Chicken thighs", "Andouille sausage", "Oil", "Flour", "Onion", "Celery", "Bell pepper", "Chicken stock", "Rice"], ["Cook oil and flour into a dark roux.", "Add trinity and stir until softened.", "Add sausage, chicken, and stock.", "Simmer until chicken is tender.", "Serve over rice with green onion."], ["cajun", "gumbo", "roux", "rice"]],
  ["cajun-jambalaya", "Chicken and Sausage Jambalaya", "cajun", "Cajun", "assets/lc-fried-rice.jpg", "20 min", "45 min", "Intermediate", 6, "A seasoned rice pot with chicken, sausage, trinity, tomatoes optional, and Cajun flavor in every spoonful.", ["Chicken", "Smoked sausage", "Rice", "Onion", "Celery", "Bell pepper", "Stock", "Cajun seasoning"], ["Brown sausage and chicken.", "Cook trinity in the drippings.", "Toast rice with seasoning.", "Add stock.", "Cover and steam until rice is tender."], ["cajun", "jambalaya", "rice", "one pot"]],
  ["cajun-shrimp-etouffee", "Shrimp Etouffee", "cajun", "Cajun", "assets/lc-seafood.jpg", "20 min", "35 min", "Intermediate", 4, "Shrimp smothered in a buttery roux-based sauce with trinity, seafood stock, and rice.", ["Shrimp", "Butter", "Flour", "Onion", "Celery", "Bell pepper", "Seafood stock", "Cajun seasoning", "Rice"], ["Make a blond roux with butter and flour.", "Cook trinity until soft.", "Whisk in stock.", "Simmer until sauce thickens.", "Add shrimp just until cooked."], ["cajun", "etouffee", "shrimp", "roux"]],
  ["cajun-dirty-rice", "Dirty Rice", "cajun", "Cajun", "assets/lc-fried-rice.jpg", "15 min", "35 min", "Beginner", 6, "Rice cooked with browned meat, trinity, seasoning, and herbs for a savory Louisiana side or main.", ["Cooked rice", "Ground beef or turkey", "Chicken livers optional", "Onion", "Celery", "Bell pepper", "Cajun seasoning", "Green onion"], ["Brown meat well.", "Add trinity and seasoning.", "Fold in rice.", "Steam together briefly.", "Finish with green onion."], ["cajun", "dirty rice", "rice", "side dish"]],
  ["creole-shrimp-creole", "Shrimp Creole", "creole", "Creole", "assets/lc-seafood.jpg", "20 min", "35 min", "Intermediate", 4, "Shrimp simmered briefly in a tomato, trinity, herb, and seafood sauce served over rice.", ["Shrimp", "Tomatoes", "Onion", "Celery", "Bell pepper", "Garlic", "Seafood stock", "Rice"], ["Cook trinity until soft.", "Add garlic, tomatoes, and stock.", "Simmer into a sauce.", "Add shrimp at the end.", "Serve over rice."], ["creole", "shrimp", "tomato sauce", "rice"]],
  ["creole-seafood-gumbo", "Creole Seafood Gumbo", "creole", "Creole", "assets/lc-seafood.jpg", "30 min", "1 hr 20 min", "Advanced", 8, "A seafood gumbo with roux, okra or file, trinity, shrimp, crab, and rice.", ["Shrimp", "Crab", "Oil", "Flour", "Okra", "Onion", "Celery", "Bell pepper", "Seafood stock", "Rice"], ["Make a medium roux.", "Cook trinity and okra.", "Add seafood stock and simmer.", "Add seafood near the end.", "Serve with rice and file if using."], ["creole", "gumbo", "seafood", "roux"]],
  ["creole-courtbouillon", "Fish Courtbouillon", "creole", "Creole", "assets/lc-seafood.jpg", "20 min", "35 min", "Intermediate", 4, "Fish gently cooked in a Creole tomato-herb sauce with lemon, trinity, and rice.", ["Firm white fish", "Tomatoes", "Onion", "Celery", "Bell pepper", "Garlic", "Lemon", "Seafood stock"], ["Build tomato sauce with trinity.", "Add stock and simmer.", "Season fish.", "Nestle fish into sauce.", "Cook gently until flaky."], ["creole", "courtbouillon", "fish", "tomato"]],
  ["creole-bananas-foster", "Bananas Foster", "creole", "Desserts", "assets/lc-desserts.jpg", "10 min", "8 min", "Intermediate", 4, "A New Orleans dessert of bananas cooked in butter, brown sugar, cinnamon, and served over ice cream.", ["Bananas", "Butter", "Brown sugar", "Cinnamon", "Vanilla ice cream", "Rum extract or rum optional"], ["Melt butter and sugar.", "Add sliced bananas.", "Cook until glossy.", "Add cinnamon and optional rum carefully.", "Serve warm over ice cream."], ["creole", "dessert", "bananas foster", "new orleans"]],
  ["nigerian-jollof-rice", "Nigerian Jollof Rice", "nigerian", "West African", "assets/lc-african-food.jpg", "20 min", "45 min", "Intermediate", 6, "Long-grain rice cooked in a blended tomato, pepper, onion, and spice base until smoky and deeply seasoned.", ["Long-grain parboiled rice", "Tomatoes", "Red bell peppers", "Scotch bonnet", "Onion", "Tomato paste", "Stock", "Thyme", "Curry powder"], ["Blend tomatoes, peppers, Scotch bonnet, and onion.", "Fry tomato paste in oil until darkened.", "Cook the blended base until reduced.", "Add stock, seasoning, and washed rice.", "Cover tightly and steam on low until rice is tender."], ["nigeria", "jollof", "rice", "west african"]],
  ["nigerian-egusi-soup", "Egusi Soup", "nigerian", "West African", "assets/lc-african-food.jpg", "20 min", "45 min", "Intermediate", 6, "A rich Nigerian melon-seed soup simmered with palm oil, pepper base, leafy greens, and meat or fish.", ["Ground egusi", "Palm oil", "Pepper blend", "Stock", "Spinach or bitter leaf", "Smoked fish or beef", "Crayfish powder"], ["Heat palm oil gently.", "Cook pepper base until thick.", "Stir egusi with a little stock to form a paste.", "Add egusi paste in spoonfuls and simmer.", "Add protein and greens; cook until thick and seasoned."], ["nigeria", "egusi", "soup", "melon seed"]],
  ["nigerian-suya-skewers", "Suya Skewers", "nigerian", "West African", "assets/lc-african-food.jpg", "25 min", "12 min", "Intermediate", 4, "Thin beef skewers coated in peanut-chile suya spice and grilled hot for smoky street-food flavor.", ["Thin beef strips", "Ground peanuts", "Paprika", "Cayenne", "Ginger", "Garlic powder", "Onion powder", "Oil"], ["Soak skewers if wooden.", "Mix peanut spice blend.", "Thread beef onto skewers.", "Brush lightly with oil and coat with spice.", "Grill or broil until charred at the edges."], ["nigeria", "suya", "grilled", "street food"]],
  ["nigerian-fried-rice", "Nigerian Fried Rice", "nigerian", "West African", "assets/lc-african-food.jpg", "20 min", "25 min", "Beginner", 6, "Curried rice stir-fried with mixed vegetables, liver or shrimp optional, and Nigerian party-rice seasoning.", ["Parboiled rice", "Mixed vegetables", "Curry powder", "Thyme", "Stock", "Onion", "Bell pepper", "Oil"], ["Parboil rice in seasoned stock.", "Saute onion and vegetables.", "Add curry powder and thyme.", "Fold in rice and stir-fry in batches.", "Taste and adjust salt before serving."], ["nigeria", "fried rice", "party rice", "west african"]],
  ["nigerian-pepper-soup", "Pepper Soup", "nigerian", "West African", "assets/lc-african-food.jpg", "15 min", "45 min", "Beginner", 4, "A clear, spicy broth simmered with meat or fish, pepper soup spice, scent leaf or basil, and fresh chile.", ["Goat meat, chicken, or fish", "Pepper soup spice", "Onion", "Scotch bonnet", "Ginger", "Stock or water", "Scent leaf or basil"], ["Season protein with salt, onion, and ginger.", "Simmer until nearly tender.", "Add pepper soup spice and chile.", "Cook until broth is fragrant.", "Finish with herbs and serve hot."], ["nigeria", "pepper soup", "broth", "spicy"]],
  ["nigerian-moi-moi", "Moi Moi", "nigerian", "West African", "assets/lc-african-food.jpg", "30 min", "45 min", "Intermediate", 8, "Steamed bean pudding made from peeled black-eyed peas blended with peppers, onion, oil, and seasoning.", ["Peeled black-eyed peas", "Red bell pepper", "Onion", "Scotch bonnet", "Oil", "Stock", "Salt", "Boiled egg optional"], ["Soak and peel beans or use peeled beans.", "Blend beans with peppers and onion.", "Whisk in oil, stock, and seasoning.", "Pour into cups or leaves.", "Steam until firm and set."], ["nigeria", "moi moi", "beans", "steamed"]],
  ["ghanaian-waakye", "Waakye", "ghanaian", "West African", "assets/lc-african-food.jpg", "15 min", "55 min", "Intermediate", 6, "Ghanaian rice and beans cooked together, traditionally colored with sorghum leaves and served with sauces and sides.", ["Rice", "Black-eyed peas or cowpeas", "Waakye leaves optional", "Salt", "Water", "Shito or stew for serving"], ["Parcook soaked beans until nearly tender.", "Add washed rice and salt.", "Add waakye leaves if using.", "Steam until rice and beans are tender.", "Serve with stew, shito, egg, or plantains."], ["ghana", "waakye", "rice and beans", "west african"]],
  ["ghanaian-jollof-rice", "Ghanaian Jollof Rice", "ghanaian", "West African", "assets/lc-african-food.jpg", "20 min", "45 min", "Intermediate", 6, "Perfumed jollof rice cooked in a tomato stew base with ginger, garlic, curry powder, and stock.", ["Jasmine or long-grain rice", "Tomatoes", "Tomato paste", "Onion", "Ginger", "Garlic", "Curry powder", "Stock"], ["Cook onion, ginger, garlic, and tomato paste.", "Add blended tomato and simmer into stew.", "Season with curry powder and stock.", "Add washed rice.", "Cover and steam gently until tender."], ["ghana", "jollof", "rice", "tomato stew"]],
  ["ghanaian-kelewele", "Kelewele", "ghanaian", "West African", "assets/lc-african-food.jpg", "15 min", "10 min", "Beginner", 4, "Ripe plantains tossed with ginger, chile, and warm spices, then fried until caramelized.", ["Ripe plantains", "Fresh ginger", "Cayenne or chile", "Salt", "Nutmeg optional", "Oil"], ["Cut ripe plantains into chunks.", "Blend or grate ginger with chile and salt.", "Toss plantains with seasoning.", "Fry until browned and soft inside.", "Drain and serve warm."], ["ghana", "kelewele", "plantains", "snack"]],
  ["ghanaian-groundnut-soup", "Groundnut Soup", "ghanaian", "West African", "assets/lc-african-food.jpg", "20 min", "1 hr", "Intermediate", 6, "A Ghanaian peanut-based soup simmered with tomato, onion, chile, stock, and chicken or vegetables.", ["Peanut butter or ground peanuts", "Chicken or vegetables", "Tomatoes", "Onion", "Scotch bonnet", "Stock", "Ginger"], ["Simmer chicken or vegetables with onion and seasoning.", "Blend tomatoes, onion, chile, and ginger.", "Stir peanut butter with warm stock until smooth.", "Add peanut mixture and tomato blend.", "Simmer until rich and slightly thick."], ["ghana", "groundnut soup", "peanut", "soup"]],
  ["ghanaian-red-red", "Red Red", "ghanaian", "West African", "assets/lc-african-food.jpg", "15 min", "45 min", "Beginner", 4, "Black-eyed peas stewed in red palm oil with tomato, onion, chile, and served with fried plantains.", ["Black-eyed peas", "Palm oil", "Tomatoes", "Onion", "Scotch bonnet", "Garlic", "Ripe plantains"], ["Cook peas until tender.", "Make a tomato and onion stew in palm oil.", "Add peas and simmer until saucy.", "Fry ripe plantains separately.", "Serve beans with plantains."], ["ghana", "red red", "beans", "plantains"]],
  ["ethiopian-doro-wat", "Doro Wat", "ethiopian", "East African", "assets/lc-african-food.jpg", "25 min", "1 hr 15 min", "Advanced", 6, "Ethiopian chicken stew built with slow-cooked onions, berbere, spiced butter, chicken, and boiled eggs.", ["Chicken pieces", "Onions", "Berbere", "Niter kibbeh or butter", "Garlic", "Ginger", "Stock", "Boiled eggs"], ["Cook chopped onions slowly until reduced and sweet.", "Add spiced butter, garlic, ginger, and berbere.", "Add chicken and coat in the spice base.", "Simmer with a little stock until tender.", "Add boiled eggs near the end."], ["ethiopia", "doro wat", "berbere", "stew"]],
  ["ethiopian-misir-wat", "Misir Wat", "ethiopian", "East African", "assets/lc-african-food.jpg", "10 min", "35 min", "Beginner", 4, "Red lentils simmered with berbere, onions, garlic, and spiced butter until creamy and deeply seasoned.", ["Red lentils", "Onion", "Berbere", "Garlic", "Ginger", "Niter kibbeh or oil", "Stock or water"], ["Rinse lentils.", "Cook onions until soft.", "Bloom berbere in fat.", "Add lentils and liquid.", "Simmer until thick and tender."], ["ethiopia", "misir wat", "lentils", "berbere"]],
  ["ethiopian-shiro-wat", "Shiro Wat", "ethiopian", "East African", "assets/lc-african-food.jpg", "10 min", "25 min", "Beginner", 4, "A silky chickpea-flour stew seasoned with onions, garlic, berbere, and warm spice.", ["Shiro powder or chickpea flour", "Onion", "Garlic", "Berbere", "Oil", "Water or stock"], ["Cook onions in oil until soft.", "Add garlic and berbere.", "Whisk shiro powder with water.", "Add gradually while stirring.", "Simmer until smooth and thick."], ["ethiopia", "shiro", "chickpea", "stew"]],
  ["ethiopian-tibs", "Tibs", "ethiopian", "East African", "assets/lc-african-food.jpg", "15 min", "15 min", "Intermediate", 4, "Quick-seared beef or lamb with onion, peppers, garlic, rosemary, and Ethiopian spice.", ["Beef or lamb strips", "Onion", "Jalapeno", "Garlic", "Rosemary", "Berbere optional", "Oil"], ["Slice meat thin.", "Heat pan until hot.", "Sear meat in batches.", "Add onion, pepper, garlic, and rosemary.", "Season and serve with injera."], ["ethiopia", "tibs", "seared meat", "injera"]],
  ["ethiopian-injera", "Injera", "ethiopian", "East African", "assets/lc-african-food.jpg", "10 min", "20 min", "Advanced", 6, "A spongy fermented flatbread traditionally made with teff flour and used as both bread and utensil.", ["Teff flour", "Water", "Starter or fermentation time", "Salt", "Oil for pan"], ["Mix teff flour and water into a thin batter.", "Ferment until lightly sour and bubbly.", "Thin batter as needed.", "Cook on one side in a covered nonstick skillet.", "Cool stacked under a towel."], ["ethiopia", "injera", "teff", "flatbread"]],
  ["ethiopian-kik-alicha", "Kik Alicha", "ethiopian", "East African", "assets/lc-african-food.jpg", "10 min", "40 min", "Beginner", 4, "Mild yellow split peas cooked with turmeric, onion, garlic, ginger, and spiced butter or oil.", ["Yellow split peas", "Onion", "Garlic", "Ginger", "Turmeric", "Niter kibbeh or oil", "Water"], ["Rinse split peas.", "Cook onions until soft.", "Add garlic, ginger, and turmeric.", "Add peas and water.", "Simmer until tender and creamy."], ["ethiopia", "kik alicha", "split peas", "vegetarian"]],
  ["moroccan-chicken-tagine", "Chicken Tagine", "moroccan", "North African", "images/cuisines/mediterranean/mediterranean-11.png", "20 min", "1 hr", "Intermediate", 4, "Chicken braised with onions, preserved lemon, olives, ginger, turmeric, and warm Moroccan spices.", ["Chicken pieces", "Onions", "Preserved lemon", "Green olives", "Ginger", "Turmeric", "Cumin", "Stock"], ["Season chicken with spices.", "Brown lightly if desired.", "Cook onions until soft.", "Add chicken, lemon, olives, and stock.", "Cover and braise until tender."], ["morocco", "tagine", "preserved lemon", "braise"]],
  ["moroccan-couscous-vegetables", "Couscous with Vegetables", "moroccan", "North African", "images/cuisines/mediterranean/mediterranean-12.png", "20 min", "35 min", "Beginner", 6, "Fluffy couscous served with spiced vegetables, chickpeas, herbs, and broth.", ["Couscous", "Carrots", "Zucchini", "Chickpeas", "Onion", "Cumin", "Cinnamon", "Stock"], ["Cook vegetables with onion and spices.", "Add chickpeas and stock.", "Steam or hydrate couscous.", "Fluff couscous with a fork.", "Spoon vegetables and broth over the top."], ["morocco", "couscous", "vegetables", "chickpeas"]],
  ["moroccan-harira", "Harira Soup", "moroccan", "North African", "images/cuisines/mediterranean/mediterranean-13.png", "20 min", "1 hr", "Intermediate", 6, "A tomato-based Moroccan soup with lentils, chickpeas, herbs, warm spices, and optional lamb.", ["Tomatoes", "Lentils", "Chickpeas", "Onion", "Celery", "Cilantro", "Parsley", "Ginger", "Cinnamon"], ["Cook onion and celery.", "Add spices, tomatoes, lentils, and chickpeas.", "Simmer until lentils are tender.", "Add herbs near the end.", "Adjust thickness with broth."], ["morocco", "harira", "lentils", "soup"]],
  ["moroccan-chermoula-fish", "Chermoula Fish", "moroccan", "North African", "images/cuisines/mediterranean/mediterranean-14.png", "20 min", "15 min", "Beginner", 4, "Fish marinated with cilantro, parsley, garlic, lemon, cumin, paprika, and olive oil.", ["White fish", "Cilantro", "Parsley", "Garlic", "Lemon", "Cumin", "Paprika", "Olive oil"], ["Blend or chop herbs with garlic, lemon, spices, and oil.", "Coat fish with chermoula.", "Marinate briefly.", "Bake, grill, or pan-cook until flaky.", "Serve with couscous or salad."], ["morocco", "chermoula", "fish", "seafood"]],
  ["moroccan-carrot-salad", "Moroccan Carrot Salad", "moroccan", "North African", "images/cuisines/mediterranean/mediterranean-15.png", "15 min", "10 min", "Beginner", 4, "Tender carrots tossed with cumin, lemon, olive oil, herbs, and a little chile.", ["Carrots", "Cumin", "Lemon juice", "Olive oil", "Parsley", "Paprika", "Harissa optional"], ["Slice carrots.", "Simmer until just tender.", "Whisk lemon, oil, cumin, paprika, and salt.", "Toss carrots with dressing.", "Finish with herbs."], ["morocco", "carrot salad", "cumin", "side dish"]],
  ["indian-dal-tadka", "Dal Tadka", "indian", "Indian", "images/cuisines/indian/indian-07.png", "10 min", "35 min", "Beginner", 4, "Yellow lentils simmered until soft, then finished with a hot spiced oil of cumin, garlic, chile, and ghee.", ["Yellow lentils", "Turmeric", "Cumin seeds", "Garlic", "Ghee or oil", "Chile", "Cilantro"], ["Rinse lentils.", "Simmer with turmeric and water until soft.", "Mash lightly for texture.", "Heat ghee with cumin, garlic, and chile.", "Pour tadka over dal and finish with cilantro."], ["indian", "dal", "lentils", "tadka"]],
  ["grilled-swordfish-lemon-herb", "Grilled Swordfish with Lemon Herbs", "mediterranean", "Seafood", "images/cuisines/mediterranean/mediterranean-01.png", "10 min", "12 min", "Intermediate", 4, "Meaty swordfish steaks grilled with lemon, olive oil, garlic, and fresh herbs.", ["Swordfish steaks", "Olive oil", "Lemon", "Garlic", "Parsley", "Oregano", "Salt"], ["Pat swordfish dry.", "Season with oil, lemon, garlic, and herbs.", "Grill over medium-high heat.", "Rest briefly.", "Serve with salad or rice."], ["swordfish", "seafood", "grilling", "mediterranean"]],
  ["blackened-swordfish", "Blackened Swordfish", "southern", "Seafood", "images/cuisines/southern/southern-09.png", "10 min", "10 min", "Intermediate", 4, "Firm swordfish coated in bold blackening spice and seared hot for a smoky crust.", ["Swordfish steaks", "Blackening seasoning", "Butter", "Lemon", "Oil"], ["Dry fish well.", "Coat with seasoning.", "Heat skillet until hot.", "Sear both sides.", "Finish with lemon butter."], ["swordfish", "blackened", "seafood", "southern"]],
  ["swordfish-tacos", "Swordfish Tacos with Citrus Slaw", "mexican", "Seafood", "images/cuisines/mexican/mexican-01.png", "20 min", "12 min", "Beginner", 4, "Seared swordfish tucked into tortillas with crunchy citrus slaw and creamy sauce.", ["Swordfish", "Tortillas", "Cabbage", "Lime", "Cilantro", "Crema", "Chili powder"], ["Season and sear swordfish.", "Toss cabbage with lime and cilantro.", "Warm tortillas.", "Flake fish into pieces.", "Build tacos with slaw and crema."], ["swordfish", "tacos", "seafood", "mexican"]],
  ["mediterranean-swordfish", "Mediterranean Swordfish with Tomatoes and Olives", "mediterranean", "Seafood", "images/cuisines/mediterranean/mediterranean-02.png", "15 min", "18 min", "Intermediate", 4, "Swordfish simmered with cherry tomatoes, olives, garlic, lemon, herbs, and olive oil.", ["Swordfish steaks", "Cherry tomatoes", "Olives", "Garlic", "Lemon", "Olive oil", "Parsley"], ["Season swordfish.", "Sear briefly on both sides.", "Cook tomatoes, olives, garlic, and oil.", "Return fish and simmer gently.", "Finish with lemon and parsley."], ["swordfish", "mediterranean", "olives", "seafood"]],
  ["garlic-butter-swordfish", "Swordfish with Garlic Butter", "mediterranean", "Seafood", "images/cuisines/mediterranean/mediterranean-03.png", "10 min", "12 min", "Beginner", 4, "Pan-seared swordfish finished with garlic butter, lemon, and herbs for a fast seafood dinner.", ["Swordfish steaks", "Butter", "Garlic", "Lemon", "Parsley", "Salt", "Black pepper"], ["Pat swordfish dry.", "Season both sides.", "Sear in a hot pan.", "Add butter and garlic.", "Spoon garlic butter over fish and finish with lemon."], ["swordfish", "garlic butter", "seafood", "pan sauce"]]
].map(([id, title, cuisine, category, image, prep_time, cook_time, difficulty, servings, description, ingredients, instructions, tags]) => ({
  id,
  title,
  slug: id,
  cuisine,
  category,
  image,
  image_url: image,
  prep_time,
  prepTime: prep_time,
  cook_time,
  cookTime: cook_time,
  time: cook_time,
  cookTimeMinutes: Number(cook_time.match(/\d+/)?.[0] || 30),
  skill_level: difficulty === "Beginner" ? "Amateur" : "Professional",
  difficulty,
  level: difficulty,
  servings,
  path: difficulty === "Beginner" ? "amateur-home-chef" : "professional-mode",
  description,
  ingredients,
  directions: instructions,
  instructions,
  steps: instructions,
  tags,
  cultural_variations: [],
  source: { type: "original", name: "Let's Cook Y'all kitchen recipe" },
  featured: cuisine === "southern" || cuisine === "asian-inspired"
}));

const menuIntelligenceRecipes = [
  ["southern-potato-salad", "Southern Potato Salad", "southern", "Sides", "images/cuisines/southern/southern-04.png", "20 min", "20 min", "Beginner", 8, "Tender potatoes folded with eggs, mustard, mayo, celery, onion, and a little pickle brightness.", ["3 lb Yukon gold potatoes", "4 large eggs", "1 cup mayonnaise", "2 tbsp yellow mustard", "1/2 cup diced celery", "1/4 cup diced onion", "1/3 cup sweet pickle relish", "1 tsp seasoned salt"], ["Boil potatoes until tender, then cool and cube.", "Boil eggs, peel, and chop.", "Whisk mayonnaise, mustard, relish, and seasoning.", "Fold potatoes, eggs, celery, and onion into dressing.", "Chill at least 1 hour before serving."], ["southern", "side dish", "fish fry", "cookout"]],
  ["candied-yams", "Candied Yams", "southern", "Sides", "images/cuisines/southern/southern-04.png", "15 min", "45 min", "Beginner", 8, "Tender sweet potatoes baked in a buttery brown sugar glaze with cinnamon and vanilla.", ["4 lb sweet potatoes", "1/2 cup butter", "3/4 cup brown sugar", "1/2 cup orange juice", "1 tsp cinnamon", "1 tsp vanilla", "1/2 tsp salt"], ["Peel and slice sweet potatoes.", "Melt butter with brown sugar, orange juice, cinnamon, vanilla, and salt.", "Layer potatoes in a baking dish.", "Pour glaze over top and cover.", "Bake until tender, then uncover to thicken the syrup."], ["southern", "soul food", "holiday", "side dish"]],
  ["creamy-coleslaw", "Creamy Coleslaw", "southern", "Sides", "images/cuisines/southern/southern-03.png", "15 min", "0 min", "Beginner", 8, "Crunchy cabbage slaw with a creamy, tangy dressing that balances fried fish and barbecue plates.", ["6 cups shredded cabbage", "1 cup shredded carrot", "1/2 cup mayonnaise", "2 tbsp apple cider vinegar", "1 tbsp sugar", "1 tsp Dijon mustard", "1/2 tsp celery seed", "1/2 tsp salt"], ["Whisk mayonnaise, vinegar, sugar, mustard, celery seed, and salt.", "Toss cabbage and carrot with dressing.", "Rest 15 minutes.", "Taste and adjust vinegar or salt.", "Serve chilled."], ["southern", "bbq", "side dish", "fish fry"]],
  ["bbq-baked-beans", "BBQ Baked Beans", "bbq", "Sides", "assets/american-food.jpeg", "10 min", "45 min", "Beginner", 8, "Smoky-sweet beans baked with onion, molasses, mustard, and barbecue sauce.", ["3 cans navy beans", "1/2 cup diced onion", "1/2 cup barbecue sauce", "1/4 cup molasses", "2 tbsp brown sugar", "1 tbsp yellow mustard", "1 tsp smoked paprika", "4 strips bacon optional"], ["Saute onion until soft.", "Stir beans, sauce, molasses, sugar, mustard, and paprika together.", "Pour into a baking dish.", "Top with bacon if using.", "Bake until bubbly and thick."], ["bbq", "beans", "cookout", "side dish"]],
  ["hushpuppies", "Golden Hushpuppies", "southern", "Breads", "assets/fresh-bread.jpeg", "10 min", "15 min", "Intermediate", 8, "Crisp cornmeal fritters with tender centers, perfect beside fried catfish.", ["1 cup cornmeal", "1/2 cup flour", "1 tbsp sugar", "1 tsp baking powder", "1/2 tsp salt", "1/2 cup buttermilk", "1 egg", "1/4 cup minced onion", "4 cups frying oil"], ["Whisk dry ingredients.", "Stir in buttermilk, egg, and onion.", "Rest batter 5 minutes.", "Drop spoonfuls into 350 F oil.", "Fry until deep golden and drain on a rack."], ["southern", "fish fry", "bread", "fried"]],
  ["dinner-rolls", "Soft Dinner Rolls", "southern", "Breads", "assets/fresh-bread.jpeg", "20 min", "18 min", "Intermediate", 12, "Tender pull-apart rolls for Sunday dinner and holiday tables.", ["3 cups flour", "2 1/4 tsp instant yeast", "1 cup warm milk", "3 tbsp sugar", "4 tbsp melted butter", "1 egg", "1 tsp salt"], ["Mix flour, yeast, sugar, and salt.", "Add milk, butter, and egg.", "Knead until smooth.", "Rise until doubled, shape rolls, and rise again.", "Bake until golden and brush with butter."], ["southern", "holiday", "bread", "sunday dinner"]],
  ["tartar-sauce", "Fish Fry Tartar Sauce", "southern", "Sauces", "assets/editorial-kitchen-prep.jpg", "10 min", "0 min", "Beginner", 8, "A creamy pickle-forward sauce for catfish, shrimp, and fish sandwiches.", ["1 cup mayonnaise", "1/3 cup dill pickle relish", "1 tbsp lemon juice", "1 tbsp minced onion", "1 tsp Dijon mustard", "1 tbsp chopped parsley", "1/4 tsp black pepper"], ["Stir all ingredients together.", "Taste for lemon and pickle balance.", "Chill 20 minutes if possible.", "Serve cold with fried fish."], ["sauce", "fish fry", "southern", "seafood"]],
  ["southern-gravy", "Onion Pan Gravy", "southern", "Sauces", "assets/editorial-kitchen-prep.jpg", "10 min", "15 min", "Beginner", 6, "A skillet gravy built from onions, flour, stock, and pan flavor for smothered meats.", ["2 tbsp oil or drippings", "1 onion sliced", "2 tbsp flour", "2 cups chicken stock", "1/2 tsp garlic powder", "1/2 tsp black pepper", "Salt to taste"], ["Cook onion in drippings until soft.", "Sprinkle flour over onion and stir 2 minutes.", "Whisk in stock gradually.", "Simmer until thick.", "Season and spoon over chops or rice."], ["gravy", "sauce", "southern", "smothered"]],
  ["sweet-tea", "Southern Sweet Tea", "southern", "Drinks", "assets/editorial-cooking-hero.jpg", "5 min", "10 min", "Beginner", 8, "Strong black tea sweetened while warm and poured over ice.", ["8 cups water", "6 black tea bags", "3/4 cup sugar", "1 lemon optional", "Ice"], ["Boil 4 cups water.", "Steep tea bags 8 minutes.", "Stir in sugar while warm.", "Add remaining cold water.", "Chill and serve over ice with lemon."], ["drink", "southern", "fish fry", "cookout"]],
  ["lemonade", "Fresh Lemonade", "southern", "Drinks", "assets/editorial-cooking-hero.jpg", "10 min", "5 min", "Beginner", 8, "Bright lemonade balanced with simple syrup and fresh lemon juice.", ["1 cup lemon juice", "3/4 cup sugar", "1 cup water for syrup", "5 cups cold water", "Ice"], ["Simmer sugar and 1 cup water until dissolved.", "Cool syrup.", "Combine lemon juice, syrup, and cold water.", "Taste and adjust.", "Serve over ice."], ["drink", "lemon", "hosting", "kid-friendly"]],
  ["peach-cobbler", "Peach Cobbler", "southern", "Desserts", "assets/lc-desserts.jpg", "15 min", "45 min", "Beginner", 8, "Warm peaches baked under a buttery golden crust for Sunday tables and cookouts.", ["6 cups sliced peaches", "1 cup sugar", "1 tbsp lemon juice", "1 cup flour", "1 cup milk", "1 stick butter", "2 tsp baking powder", "1 tsp cinnamon"], ["Melt butter in a baking dish.", "Toss peaches with sugar and lemon.", "Whisk flour, milk, baking powder, and cinnamon.", "Pour batter over butter, then add peaches.", "Bake until browned and bubbling."], ["dessert", "southern", "cookout", "holiday"]],
  ["banana-pudding", "Banana Pudding", "southern", "Desserts", "assets/lc-desserts.jpg", "20 min", "0 min", "Beginner", 10, "Layers of vanilla pudding, bananas, wafers, and whipped topping chilled until spoonable.", ["2 boxes vanilla pudding mix", "4 cups cold milk", "5 bananas", "1 box vanilla wafers", "2 cups whipped topping"], ["Whisk pudding with milk.", "Slice bananas.", "Layer wafers, bananas, and pudding.", "Repeat layers.", "Top with whipped topping and chill."], ["dessert", "soul food", "potluck", "kid-friendly"]],
  ["pound-cake", "Vanilla Pound Cake", "southern", "Desserts", "assets/lc-desserts.jpg", "20 min", "1 hr 10 min", "Intermediate", 12, "A buttery sliceable cake for Sunday dinner, holidays, and repast tables.", ["3 cups flour", "3 cups sugar", "1 cup butter", "6 eggs", "1 cup sour cream", "1 tbsp vanilla", "1/2 tsp salt"], ["Cream butter and sugar well.", "Add eggs one at a time.", "Mix in flour, sour cream, vanilla, and salt.", "Pour into greased tube pan.", "Bake until a tester comes out clean."], ["dessert", "southern", "holiday", "sunday dinner"]],
  ["rice-and-peas", "Caribbean Rice and Peas", "caribbean", "Sides", "assets/lc-african-food.jpg", "10 min", "35 min", "Beginner", 6, "Rice cooked with kidney beans, coconut milk, thyme, scallion, and allspice warmth.", ["2 cups long-grain rice", "1 can kidney beans", "1 can coconut milk", "1 cup water", "2 scallions", "2 thyme sprigs", "1 tsp allspice", "1 Scotch bonnet whole optional"], ["Rinse rice.", "Combine coconut milk, water, beans, scallion, thyme, and allspice.", "Bring to a simmer.", "Add rice, cover, and cook low.", "Rest 10 minutes and fluff."], ["caribbean", "rice", "side dish", "family plate"]],
  ["cabbage-saute", "Caribbean Cabbage Saute", "caribbean", "Sides", "assets/ingredients.jpeg", "10 min", "15 min", "Beginner", 6, "Tender-crisp cabbage with peppers, carrot, thyme, and a light buttery finish.", ["6 cups sliced cabbage", "1 carrot shredded", "1 bell pepper sliced", "2 tbsp butter", "1 tsp thyme", "1/2 tsp allspice", "Salt to taste"], ["Melt butter in a wide skillet.", "Add cabbage, carrot, pepper, thyme, and allspice.", "Cook until crisp-tender.", "Season with salt.", "Serve warm."], ["caribbean", "vegetable", "side dish", "quick"]],
  ["cucumber-salad", "Cucumber Lime Salad", "caribbean", "Sides", "assets/ingredients.jpeg", "10 min", "0 min", "Beginner", 4, "Cool cucumbers tossed with lime, herbs, onion, and a touch of chile.", ["2 cucumbers sliced", "1/4 red onion sliced", "2 tbsp lime juice", "1 tbsp olive oil", "1 tbsp cilantro", "1/4 tsp salt", "Pinch chile flakes"], ["Slice cucumbers and onion.", "Whisk lime, oil, salt, and chile.", "Toss with cucumbers.", "Finish with cilantro.", "Chill briefly."], ["caribbean", "salad", "cooling", "quick"]],
  ["coco-bread", "Coco Bread", "caribbean", "Breads", "assets/fresh-bread.jpeg", "25 min", "18 min", "Intermediate", 8, "Soft folded Caribbean bread with coconut milk richness.", ["3 cups flour", "2 tsp yeast", "1 cup coconut milk", "2 tbsp sugar", "4 tbsp butter", "1 tsp salt"], ["Mix dough ingredients.", "Knead until smooth.", "Rise until doubled.", "Roll and fold with butter.", "Bake until lightly golden."], ["caribbean", "bread", "coconut", "family plate"]],
  ["jerk-sauce", "Jerk Sauce", "caribbean", "Sauces", "assets/editorial-kitchen-prep.jpg", "15 min", "0 min", "Intermediate", 12, "A bold sauce of scallion, thyme, allspice, chile, garlic, ginger, and lime.", ["6 scallions", "2 Scotch bonnets", "4 garlic cloves", "1 tbsp thyme", "1 tbsp allspice", "1 tbsp brown sugar", "2 tbsp lime juice", "2 tbsp vinegar"], ["Blend all ingredients until saucy.", "Taste carefully for heat.", "Use as marinade or table sauce.", "Refrigerate leftovers."], ["caribbean", "jerk", "sauce", "spicy"]],
  ["sorrel-drink", "Sorrel Drink", "caribbean", "Drinks", "assets/editorial-cooking-hero.jpg", "10 min", "20 min", "Beginner", 8, "Hibiscus drink steeped with ginger, cloves, citrus, and sweetened to taste.", ["2 cups dried sorrel hibiscus", "8 cups water", "2 inch ginger sliced", "6 cloves", "1 orange peel", "1/2 cup sugar"], ["Boil water with ginger and cloves.", "Add sorrel and orange peel.", "Steep 20 minutes.", "Strain and sweeten.", "Chill well."], ["caribbean", "drink", "holiday", "hibiscus"]],
  ["rum-cake", "Caribbean Rum Cake", "caribbean", "Desserts", "assets/lc-desserts.jpg", "20 min", "55 min", "Intermediate", 12, "A moist bundt cake brushed with buttery rum syrup for celebrations.", ["1 box yellow cake mix", "1 box vanilla pudding mix", "4 eggs", "1/2 cup oil", "1/2 cup rum or rum syrup", "1/2 cup water", "1 cup sugar", "1/2 cup butter"], ["Mix cake batter with pudding, eggs, oil, rum, and water.", "Bake in a bundt pan.", "Simmer butter, sugar, and a splash of rum or extract.", "Brush warm cake with syrup.", "Cool before slicing."], ["caribbean", "dessert", "holiday", "celebration"]],
  ["greek-salad", "Greek Salad", "mediterranean", "Salads", "images/cuisines/mediterranean/mediterranean-04.png", "15 min", "0 min", "Beginner", 4, "Tomato, cucumber, olives, feta, herbs, and lemony olive oil dressing.", ["2 cups tomatoes", "1 cucumber", "1/2 red onion", "1/2 cup olives", "1/2 cup feta", "3 tbsp olive oil", "1 tbsp lemon juice", "1 tsp oregano"], ["Chop vegetables.", "Whisk oil, lemon, oregano, salt, and pepper.", "Toss vegetables and olives.", "Top with feta.", "Serve fresh."], ["mediterranean", "salad", "vegetarian", "quick"]],
  ["creamy-hummus", "Creamy Hummus", "mediterranean", "Dips", "images/cuisines/mediterranean/mediterranean-05.png", "10 min", "0 min", "Beginner", 8, "Chickpeas blended with tahini, lemon, garlic, and olive oil until smooth.", ["2 cans chickpeas", "1/3 cup tahini", "1/4 cup lemon juice", "2 garlic cloves", "3 tbsp olive oil", "1/2 tsp cumin", "Salt to taste"], ["Drain chickpeas.", "Blend tahini, lemon, garlic, and oil.", "Add chickpeas and cumin.", "Blend with water until smooth.", "Finish with olive oil."], ["mediterranean", "dip", "vegetarian", "party"]],
  ["roasted-vegetables", "Roasted Vegetables", "mediterranean", "Sides", "images/cuisines/mediterranean/mediterranean-06.png", "15 min", "30 min", "Beginner", 6, "Seasonal vegetables roasted with olive oil, herbs, lemon, and browned edges.", ["6 cups mixed vegetables", "3 tbsp olive oil", "1 tsp oregano", "1 tsp garlic powder", "1 lemon", "1 tsp salt"], ["Cut vegetables evenly.", "Toss with oil and seasoning.", "Spread on a sheet pan.", "Roast until browned.", "Finish with lemon."], ["mediterranean", "vegetables", "side dish", "roasting"]],
  ["rice-pilaf", "Herbed Rice Pilaf", "mediterranean", "Sides", "images/cuisines/mediterranean/mediterranean-07.png", "10 min", "20 min", "Beginner", 6, "Fluffy rice toasted with aromatics, simmered in stock, and finished with herbs.", ["2 cups rice", "2 tbsp olive oil", "1/2 onion minced", "3 cups stock", "1 bay leaf", "2 tbsp parsley", "Salt"], ["Toast rice in oil with onion.", "Add stock and bay leaf.", "Cover and simmer.", "Rest 10 minutes.", "Fluff with herbs."], ["mediterranean", "rice", "side dish", "pilaf"]],
  ["pita-flatbread", "Skillet Pita Flatbread", "mediterranean", "Breads", "assets/fresh-bread.jpeg", "25 min", "10 min", "Intermediate", 8, "Soft flatbread cooked in a skillet for gyros, dips, and spreads.", ["3 cups flour", "2 tsp yeast", "1 cup warm water", "2 tbsp olive oil", "1 tsp sugar", "1 tsp salt"], ["Mix dough and knead.", "Rise until puffy.", "Divide and roll thin.", "Cook in a hot skillet.", "Keep warm under a towel."], ["mediterranean", "bread", "pita", "flatbread"]],
  ["tzatziki-sauce", "Tzatziki Sauce", "mediterranean", "Sauces", "assets/editorial-kitchen-prep.jpg", "15 min", "0 min", "Beginner", 8, "Greek yogurt sauce with cucumber, garlic, lemon, dill, and olive oil.", ["1 cup Greek yogurt", "1/2 cucumber grated", "1 tbsp lemon juice", "1 garlic clove", "1 tbsp dill", "1 tbsp olive oil", "1/2 tsp salt"], ["Squeeze liquid from cucumber.", "Stir yogurt, cucumber, lemon, garlic, dill, oil, and salt.", "Chill 10 minutes.", "Serve with grilled foods or pita."], ["mediterranean", "sauce", "yogurt", "cooling"]],
  ["mint-lemonade", "Mint Lemonade", "mediterranean", "Drinks", "assets/editorial-cooking-hero.jpg", "10 min", "5 min", "Beginner", 6, "Fresh lemonade blended or stirred with mint for a bright table drink.", ["1 cup lemon juice", "1/2 cup sugar", "5 cups water", "1 cup mint leaves", "Ice"], ["Make simple syrup with sugar and 1 cup water.", "Blend or steep mint with syrup.", "Combine with lemon juice and cold water.", "Strain if desired.", "Serve over ice."], ["mediterranean", "drink", "mint", "hosting"]],
  ["baklava-cups", "Baklava Cups", "mediterranean", "Desserts", "assets/lc-desserts.jpg", "15 min", "12 min", "Beginner", 24, "Mini phyllo cups filled with spiced nuts and honey syrup.", ["24 phyllo cups", "1 cup chopped walnuts", "1/2 cup pistachios", "1/4 cup honey", "2 tbsp butter", "1/2 tsp cinnamon"], ["Mix nuts with cinnamon.", "Fill phyllo cups.", "Bake until fragrant.", "Warm honey with butter.", "Spoon syrup over cups."], ["mediterranean", "dessert", "party", "baklava"]],
  ["corn-on-the-cob", "Buttery Corn on the Cob", "bbq", "Sides", "assets/ingredients.jpeg", "5 min", "12 min", "Beginner", 6, "Sweet corn boiled or grilled and finished with butter, salt, and pepper.", ["6 ears corn", "4 tbsp butter", "1 tsp salt", "1/2 tsp black pepper", "Parsley optional"], ["Shuck corn.", "Boil or grill until tender.", "Brush with butter.", "Season with salt and pepper.", "Serve hot."], ["bbq", "side dish", "cookout", "kid-friendly"]],
  ["slider-buns", "Soft Slider Buns", "bbq", "Breads", "assets/fresh-bread.jpeg", "20 min", "15 min", "Intermediate", 12, "Small soft buns for pulled pork, burgers, and party sandwiches.", ["3 cups flour", "2 tsp yeast", "1 cup warm milk", "2 tbsp sugar", "3 tbsp butter", "1 egg", "1 tsp salt"], ["Mix dough.", "Knead until smooth.", "Rise until doubled.", "Shape small buns.", "Bake until golden."], ["bbq", "bread", "party", "sandwiches"]],
  ["bbq-sauce-trio", "BBQ Sauce Trio", "bbq", "Sauces", "assets/editorial-kitchen-prep.jpg", "15 min", "15 min", "Beginner", 12, "Three simple table sauces: sweet tomato, vinegar pepper, and mustard barbecue.", ["1 cup ketchup", "1/2 cup apple cider vinegar", "1/4 cup brown sugar", "2 tbsp mustard", "1 tbsp Worcestershire", "1 tsp black pepper", "1 tsp smoked paprika"], ["Simmer ketchup, sugar, vinegar, Worcestershire, and paprika for sweet sauce.", "Mix vinegar, pepper, and salt for vinegar sauce.", "Stir mustard, vinegar, and honey for mustard sauce.", "Label each sauce.", "Serve warm or room temperature."], ["bbq", "sauce", "cookout", "hosting"]],
  ["smothered-green-beans", "Smothered Green Beans", "cajun", "Sides", "assets/ingredients.jpeg", "10 min", "35 min", "Beginner", 6, "Green beans cooked down with onion, garlic, smoked sausage or turkey, and Cajun seasoning.", ["1 1/2 lb green beans", "1/2 lb smoked sausage optional", "1 onion", "2 garlic cloves", "1 cup stock", "1 tsp Cajun seasoning", "1 tbsp oil"], ["Brown sausage if using.", "Cook onion and garlic.", "Add green beans, stock, and seasoning.", "Cover and simmer until tender.", "Taste and adjust seasoning."], ["cajun", "side dish", "green beans", "one-pot"]],
  ["corn-maque-choux", "Corn Maque Choux", "cajun", "Sides", "assets/ingredients.jpeg", "15 min", "20 min", "Beginner", 6, "Cajun corn sauteed with trinity, cream, and gentle spice.", ["4 cups corn kernels", "1/2 onion diced", "1/2 bell pepper diced", "1 celery stalk diced", "1/2 cup cream", "1 tsp Cajun seasoning", "2 tbsp butter"], ["Cook trinity in butter.", "Add corn and Cajun seasoning.", "Cook until corn is tender.", "Stir in cream.", "Simmer until lightly thickened."], ["cajun", "corn", "side dish", "maque choux"]],
  ["french-bread", "Warm French Bread", "cajun", "Breads", "assets/fresh-bread.jpeg", "5 min", "8 min", "Beginner", 8, "A simple warm loaf served with gumbo, Creole sauce, or jambalaya.", ["1 French bread loaf", "3 tbsp butter", "1 garlic clove optional", "1 tbsp parsley optional"], ["Slice bread almost through.", "Mix butter with garlic and parsley.", "Spread into cuts.", "Wrap loosely in foil.", "Warm until soft and fragrant."], ["cajun", "creole", "bread", "hosting"]],
  ["white-rice", "Steamed White Rice", "creole", "Sides", "assets/lc-fried-rice.jpg", "5 min", "18 min", "Beginner", 6, "Fluffy rice for gumbo, Creole sauces, curries, and stews.", ["2 cups long-grain rice", "3 cups water", "1 tsp salt", "1 tbsp butter optional"], ["Rinse rice until water runs mostly clear.", "Bring water, rice, and salt to a boil.", "Cover and reduce heat.", "Cook until water is absorbed.", "Rest 10 minutes and fluff."], ["rice", "side dish", "beginner", "creole"]],
  ["okra-tomato-stew", "Okra and Tomato Stew", "creole", "Sides", "assets/ingredients.jpeg", "15 min", "25 min", "Beginner", 6, "Tender okra simmered with tomatoes, onion, garlic, and Creole seasoning.", ["1 lb okra sliced", "1 can diced tomatoes", "1 onion", "2 garlic cloves", "1 tsp Creole seasoning", "1 tbsp oil", "1/2 cup stock"], ["Cook onion and garlic in oil.", "Add okra and seasoning.", "Add tomatoes and stock.", "Simmer until okra is tender.", "Serve over or beside rice."], ["creole", "okra", "side dish", "tomato"]],
  ["green-salad", "Simple Green Salad", "creole", "Salads", "assets/ingredients.jpeg", "10 min", "0 min", "Beginner", 4, "Crisp greens with a light vinaigrette to balance rich dishes.", ["6 cups mixed greens", "1 cucumber", "1/4 red onion", "3 tbsp olive oil", "1 tbsp vinegar", "1 tsp Dijon mustard", "Salt and pepper"], ["Wash and dry greens.", "Slice cucumber and onion.", "Whisk oil, vinegar, mustard, salt, and pepper.", "Toss lightly before serving."], ["salad", "side dish", "hosting", "quick"]],
  ["buttered-vegetables", "Buttered Vegetables", "creole", "Sides", "assets/ingredients.jpeg", "10 min", "12 min", "Beginner", 6, "Tender vegetables tossed with butter, herbs, lemon, and salt.", ["4 cups mixed vegetables", "3 tbsp butter", "1 tbsp lemon juice", "1 tbsp parsley", "1/2 tsp salt", "1/4 tsp black pepper"], ["Steam or simmer vegetables until tender.", "Drain well.", "Toss with butter.", "Add lemon, parsley, salt, and pepper.", "Serve warm."], ["vegetables", "side dish", "beginner", "hosting"]],
  ["creole-seasoning-blend", "Creole Seasoning Blend", "creole", "Seasonings", "assets/editorial-kitchen-prep.jpg", "5 min", "0 min", "Beginner", 16, "A pantry seasoning for Creole sauces, seafood, rice, and vegetables.", ["2 tbsp paprika", "1 tbsp garlic powder", "1 tbsp onion powder", "1 tbsp dried oregano", "1 tbsp dried thyme", "1 tsp cayenne", "1 tbsp black pepper", "1 tbsp salt"], ["Measure spices into a bowl.", "Whisk until even.", "Store in a labeled jar.", "Use lightly and adjust salt in recipes."], ["creole", "seasoning", "pantry", "sauce"]],
  ["cucumber-raita", "Cucumber Raita", "indian", "Sauces", "assets/indian-food.jpeg", "10 min", "0 min", "Beginner", 6, "Cooling yogurt sauce with cucumber, cumin, cilantro, and salt.", ["1 cup yogurt", "1/2 cucumber grated", "1/2 tsp cumin", "1 tbsp cilantro", "1 tsp lemon juice", "1/4 tsp salt"], ["Squeeze cucumber dry.", "Stir yogurt, cucumber, cumin, cilantro, lemon, and salt.", "Chill briefly.", "Serve with curry or rice."], ["indian", "sauce", "yogurt", "cooling"]],
  ["kachumber-salad", "Kachumber Salad", "indian", "Salads", "assets/indian-food.jpeg", "10 min", "0 min", "Beginner", 4, "Fresh chopped cucumber, tomato, onion, herbs, lemon, and chile.", ["1 cucumber", "2 tomatoes", "1/4 red onion", "1 tbsp cilantro", "1 tbsp lemon juice", "Pinch chile", "Salt"], ["Dice vegetables.", "Toss with cilantro, lemon, chile, and salt.", "Rest 5 minutes.", "Serve fresh."], ["indian", "salad", "fresh", "quick"]],
  ["mint-chutney", "Mint Chutney", "indian", "Sauces", "assets/indian-food.jpeg", "10 min", "0 min", "Beginner", 8, "Bright herb chutney with mint, cilantro, chile, lemon, and yogurt or water.", ["1 cup mint", "1 cup cilantro", "1 green chile", "1 tbsp lemon juice", "1/4 cup yogurt or water", "1/2 tsp cumin", "Salt"], ["Blend herbs, chile, lemon, yogurt, cumin, and salt.", "Thin with water if needed.", "Taste for lemon and salt.", "Chill until serving."], ["indian", "chutney", "sauce", "herbs"]],
  ["mango-lassi", "Mango Lassi", "indian", "Drinks", "assets/indian-food.jpeg", "5 min", "0 min", "Beginner", 4, "Creamy yogurt drink blended with mango, milk, and a little cardamom.", ["2 cups mango", "1 cup yogurt", "1/2 cup milk", "2 tbsp honey", "Pinch cardamom", "Ice optional"], ["Blend mango, yogurt, milk, honey, and cardamom.", "Add ice if desired.", "Taste for sweetness.", "Serve cold."], ["indian", "drink", "mango", "cooling"]],
  ["kheer", "Rice Kheer", "indian", "Desserts", "assets/lc-desserts.jpg", "5 min", "35 min", "Beginner", 6, "Creamy rice pudding simmered with milk, sugar, cardamom, and nuts.", ["1/2 cup rice", "4 cups milk", "1/3 cup sugar", "1/2 tsp cardamom", "2 tbsp almonds or pistachios", "1 tbsp raisins optional"], ["Rinse rice.", "Simmer rice in milk, stirring often.", "Cook until creamy.", "Add sugar and cardamom.", "Top with nuts."], ["indian", "dessert", "rice pudding", "holiday"]],
  ["birria-style-tacos", "Birria-Style Tacos", "mexican", "Main Dishes", "assets/lc-birria-tacos.jpg", "30 min", "3 hr", "Advanced", 6, "Slow-braised chile beef tucked into tortillas with consomme for dipping.", ["3 lb chuck roast", "4 dried guajillo chiles", "2 ancho chiles", "1 onion", "4 garlic cloves", "4 cups beef stock", "12 corn tortillas", "2 cups shredded cheese optional"], ["Toast and soak chiles.", "Blend chiles with onion, garlic, and stock.", "Brown beef.", "Braise beef in chile sauce until tender.", "Shred meat and crisp in tortillas with consomme for dipping."], ["mexican", "tacos", "braising", "party"]],
  ["black-bean-side", "Seasoned Black Beans", "mexican", "Sides", "assets/ingredients.jpeg", "10 min", "20 min", "Beginner", 6, "Black beans simmered with onion, garlic, cumin, and lime.", ["2 cans black beans", "1/2 onion diced", "2 garlic cloves", "1 tsp cumin", "1/2 cup stock", "1 tbsp lime juice", "Salt"], ["Cook onion and garlic.", "Add cumin and beans.", "Simmer with stock.", "Mash some beans for body.", "Finish with lime."], ["mexican", "beans", "side dish", "vegetarian"]],
  ["cilantro-lime-rice", "Cilantro Lime Rice", "mexican", "Sides", "assets/lc-fried-rice.jpg", "5 min", "20 min", "Beginner", 6, "Fluffy rice finished with lime, cilantro, and a little oil.", ["2 cups rice", "3 cups water", "1 tsp salt", "1 tbsp oil", "1 lime", "1/2 cup cilantro"], ["Cook rice with water, salt, and oil.", "Rest and fluff.", "Add lime zest and juice.", "Fold in cilantro.", "Taste for salt."], ["mexican", "rice", "side dish", "taco night"]],
  ["elote-corn", "Elote-Style Corn", "mexican", "Sides", "assets/ingredients.jpeg", "10 min", "15 min", "Beginner", 6, "Corn coated with creamy lime sauce, chile, cheese, and cilantro.", ["6 ears corn", "1/3 cup mayonnaise", "1/3 cup crema", "1 lime", "1/2 cup cotija", "1 tsp chile powder", "2 tbsp cilantro"], ["Cook corn by grilling or boiling.", "Mix mayo, crema, and lime.", "Brush corn with sauce.", "Sprinkle cheese and chile.", "Finish with cilantro."], ["mexican", "corn", "side dish", "cookout"]],
  ["mexican-slaw", "Citrus Taco Slaw", "mexican", "Sides", "assets/ingredients.jpeg", "10 min", "0 min", "Beginner", 6, "Crunchy cabbage slaw with lime, cilantro, and a touch of honey.", ["4 cups shredded cabbage", "1 carrot", "1/4 cup cilantro", "2 tbsp lime juice", "1 tbsp honey", "1 tbsp oil", "1/2 tsp salt"], ["Whisk lime, honey, oil, and salt.", "Toss cabbage, carrot, and cilantro.", "Rest 10 minutes.", "Serve with tacos."], ["mexican", "slaw", "side dish", "tacos"]],
  ["corn-tortillas", "Warm Corn Tortillas", "mexican", "Breads", "assets/fresh-bread.jpeg", "5 min", "5 min", "Beginner", 12, "A simple method for warming tortillas so taco night tastes intentional.", ["12 corn tortillas", "1 tsp oil optional", "Clean towel"], ["Heat a dry skillet.", "Warm tortillas 20 to 30 seconds per side.", "Stack in a clean towel.", "Keep covered until serving."], ["mexican", "tortillas", "bread", "taco night"]],
  ["salsa-roja", "Salsa Roja", "mexican", "Sauces", "assets/editorial-kitchen-prep.jpg", "10 min", "15 min", "Beginner", 10, "Red salsa made with tomatoes, chile, onion, garlic, cilantro, and lime.", ["4 tomatoes", "2 dried or fresh chiles", "1/4 onion", "2 garlic cloves", "1/4 cup cilantro", "1 lime", "Salt"], ["Char or simmer tomatoes and chiles.", "Blend with onion and garlic.", "Add cilantro and lime.", "Season with salt.", "Chill or serve warm."], ["mexican", "salsa", "sauce", "tacos"]],
  ["salsa-verde", "Salsa Verde", "mexican", "Sauces", "assets/editorial-kitchen-prep.jpg", "10 min", "12 min", "Beginner", 10, "Tangy green salsa with tomatillos, chile, onion, cilantro, and lime.", ["1 lb tomatillos", "1 jalapeno", "1/4 onion", "1 garlic clove", "1/4 cup cilantro", "1 lime", "Salt"], ["Remove tomatillo husks.", "Simmer tomatillos and jalapeno until softened.", "Blend with onion, garlic, cilantro, and lime.", "Season with salt."], ["mexican", "salsa", "sauce", "tomatillo"]],
  ["pickled-red-onions", "Pickled Red Onions", "mexican", "Sauces", "assets/editorial-kitchen-prep.jpg", "10 min", "5 min", "Beginner", 12, "Quick onions pickled with vinegar, lime, salt, and sugar for tacos and bowls.", ["1 red onion sliced", "1/2 cup vinegar", "1/2 cup water", "1 tbsp sugar", "1 tsp salt", "1 lime"], ["Slice onion thin.", "Warm vinegar, water, sugar, and salt.", "Pour over onions.", "Add lime juice.", "Rest 30 minutes."], ["mexican", "pickle", "topping", "tacos"]],
  ["agua-fresca", "Watermelon Agua Fresca", "mexican", "Drinks", "assets/editorial-cooking-hero.jpg", "10 min", "0 min", "Beginner", 6, "Fresh fruit drink blended with water, lime, and light sweetness.", ["4 cups watermelon", "3 cups water", "2 tbsp lime juice", "1 tbsp sugar optional", "Ice"], ["Blend watermelon, water, lime, and sugar.", "Strain if desired.", "Chill.", "Serve over ice."], ["mexican", "drink", "fruit", "kid-friendly"]],
  ["churro-bites", "Churro Bites", "mexican", "Desserts", "assets/lc-desserts.jpg", "15 min", "15 min", "Intermediate", 6, "Small fried dough bites tossed in cinnamon sugar.", ["1 cup water", "4 tbsp butter", "1 cup flour", "2 eggs", "1/2 cup sugar", "1 tsp cinnamon", "Oil for frying"], ["Boil water and butter.", "Stir in flour to form dough.", "Beat in eggs one at a time.", "Pipe or spoon into hot oil.", "Toss in cinnamon sugar."], ["mexican", "dessert", "party", "fried"]],
  ["flan-cups", "Vanilla Flan Cups", "mexican", "Desserts", "assets/lc-desserts.jpg", "20 min", "45 min", "Intermediate", 6, "Creamy custard cups with caramel sauce.", ["1 cup sugar", "1 can evaporated milk", "1 can sweetened condensed milk", "4 eggs", "1 tbsp vanilla", "Hot water for bath"], ["Melt sugar into caramel and pour into cups.", "Blend milks, eggs, and vanilla.", "Pour custard over caramel.", "Bake in a water bath until set.", "Chill before unmolding."], ["mexican", "dessert", "custard", "holiday"]]
].map(([id, title, cuisine, category, image, prep_time, cook_time, difficulty, servings, description, ingredients, instructions, tags]) => ({
  id,
  title,
  slug: id,
  cuisine,
  category,
  image,
  image_url: image,
  prep_time,
  prepTime: prep_time,
  cook_time,
  cookTime: cook_time,
  time: cook_time,
  cookTimeMinutes: Number(cook_time.match(/\d+/)?.[0] || 30),
  skill_level: difficulty === "Beginner" ? "Amateur" : "Professional",
  difficulty,
  level: difficulty,
  servings,
  path: difficulty === "Beginner" ? "amateur-home-chef" : "professional-mode",
  description,
  ingredients,
  directions: instructions,
  instructions,
  steps: instructions,
  tags,
  cultural_variations: [],
  source: { type: "original", name: "Let's Cook Y'all menu intelligence recipe" },
  featured: false
}));

const existingRecipeIds = new Set(recipes.map((recipe) => recipe.id));
recipes = [...recipes, ...[...nextFeatureRecipes, ...menuIntelligenceRecipes].filter((recipe) => !existingRecipeIds.has(recipe.id))];

const lessons = [
  {
    id: "kitchen-safety",
    title: "Kitchen Safety",
    image: "assets/kid-friendly.jpeg",
    level: "Beginner",
    text: "Start with clean hands, stable stations, hot-pan awareness, and calm grown-up help.",
    skills: ["Wash hands and surfaces", "Use a stable cutting board", "Handle hot pans with help", "Clean as you go"],
    steps: ["Wash hands and tie back hair.", "Clear the counter before bringing food out.", "Put a towel under a slippery cutting board.", "Ask for help with heat, knives, boiling water, and ovens."],
    recipes: ["pb-and-j-sandwich", "fruit-kabobs", "mini-pizza-bagels"]
  },
  {
    id: "knife-skills",
    title: "Knife Skills",
    image: "assets/editorial-kitchen-prep.jpg",
    level: "Beginner",
    text: "Practice safe grips, stable cutting boards, and beginner-friendly cuts.",
    skills: ["Claw grip", "Rock chop", "Slice safely", "Cut even pieces"],
    steps: ["Stabilize the board.", "Hold food with a tucked-finger claw grip.", "Cut slowly before trying to cut fast.", "Keep pieces even so they cook evenly."],
    recipes: ["greek-salad", "roasted-vegetable-tray", "cilantro-lime-rice"]
  },
  {
    id: "seasoning",
    title: "Seasoning Without Fear",
    image: "assets/editorial-kitchen-prep.jpg",
    level: "Beginner",
    text: "Learn salt, acid, fat, heat, herbs, and tasting as you go.",
    skills: ["Salt in layers", "Use acid to brighten", "Balance sweetness and heat", "Taste before serving"],
    steps: ["Start with a small amount of salt.", "Taste before adding more.", "Use lemon, lime, or vinegar when food tastes flat.", "Finish with herbs, butter, or olive oil when it needs roundness."],
    recipes: ["chicken-street-tacos", "lemon-herb-salmon", "chana-masala"]
  },
  {
    id: "heat-control",
    title: "Heat Control",
    image: "assets/editorial-cooking-hero.jpg",
    level: "Beginner",
    text: "Understand low, medium, and high heat so food browns, melts, simmers, and softens without panic.",
    skills: ["Low heat melting", "Medium saute", "High heat sear", "Simmer gently"],
    steps: ["Use low heat for eggs, cheese, and gentle sauces.", "Use medium heat for most skillet cooking.", "Use high heat only when you are ready to move quickly.", "Lower the heat if food browns before it cooks through."],
    recipes: ["soft-scrambled-eggs", "stovetop-mac-and-cheese", "jerk-chicken"]
  },
  {
    id: "rice-grits-pasta",
    title: "Rice, Grits, and Pasta",
    image: "assets/editorial-cajun-pasta.jpg",
    level: "Beginner",
    text: "Master the everyday bases that make dinner feel possible.",
    skills: ["Salt pasta water", "Rest rice", "Whisk grits", "Save pasta water"],
    steps: ["Read the package or recipe first.", "Salt the water or liquid.", "Stir at the right time, then let food cook undisturbed when needed.", "Taste for doneness before draining or serving."],
    recipes: ["cilantro-lime-rice", "rice-and-peas", "cajun-cream-salmon-rotini"]
  },
  {
    id: "sauces-gravies",
    title: "Sauces and Gravies",
    image: "assets/ingredients.jpeg",
    level: "Intermediate",
    text: "Build creamy sauces, pan gravies, curry bases, and quick dips without guessing.",
    skills: ["Make a roux", "Reduce gently", "Bloom spices", "Adjust thickness"],
    steps: ["Start with fat, aromatics, or spices.", "Add liquid slowly when thickening.", "Simmer until the sauce coats a spoon.", "Taste for salt, acid, and richness."],
    recipes: ["butter-chicken", "smothered-pork-chops", "creamy-hummus"]
  },
  {
    id: "meal-prep",
    title: "Meal Prep Basics",
    image: "assets/cooking-family.jpeg",
    level: "Beginner",
    text: "Cook once, eat calmer: prep proteins, grains, vegetables, and sauces that can become several meals.",
    skills: ["Batch grains", "Store safely", "Reheat without drying", "Build bowls"],
    steps: ["Pick one protein, one grain, one vegetable, and one sauce.", "Label leftovers with the date.", "Cool food before storing.", "Reheat with moisture so it stays tender."],
    recipes: ["chicken-gyros", "caribbean-curry-chicken", "fried-rice"]
  },
  {
    id: "hosting-flow",
    title: "Hosting Flow",
    image: "assets/editorial-kitchen-prep.jpg",
    level: "Intermediate",
    text: "Prep lists, timing, serving pieces, and keeping guests comfortable.",
    skills: ["Write a prep list", "Plan oven timing", "Set serving zones", "Keep food warm"],
    steps: ["Choose dishes that do not all need last-minute attention.", "Write what can be made ahead.", "Set out plates, napkins, and serving spoons early.", "Leave one simple thing for guests to help with."],
    recipes: ["charcuterie-boards", "rotel-dip", "party-meatballs"]
  }
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

recipes.push(
  {
    id: "charcuterie-cups",
    title: "Charcuterie Cups",
    cuisine: "hosting",
    category: "Party Cups",
    image: "assets/editorial-kitchen-prep.jpg",
    time: "25 min",
    level: "Beginner",
    servings: 12,
    path: "professional-mode",
    description: "Individual charcuterie cups with cheese, meat, crackers, fruit, and a little something briny for easy mingling.",
    ingredients: ["12 clear 9 oz cups", "12 cheese cubes", "12 salami roses or folded slices", "12 breadsticks", "12 small clusters grapes", "12 olives or pickles", "Fresh herbs"],
    steps: ["Set cups on a tray.", "Add grapes or fruit to the bottom.", "Tuck in cheese, salami, and olives.", "Stand a breadstick in each cup.", "Finish with herbs and chill until guests arrive."],
    tags: ["party cups", "hosting", "charcuterie", "no-cook"],
    partyCup: true,
    cost_per_cup: 3.25,
    cost_per_guest: 3.25,
    cups_per_guest: 1,
    shopping_items: [
      { item: "clear 9 oz cups", amount: 1, unit: "cup" },
      { item: "cheese cubes", amount: 1, unit: "piece" },
      { item: "salami slices", amount: 1, unit: "piece" },
      { item: "breadsticks", amount: 1, unit: "piece" },
      { item: "grape clusters", amount: 1, unit: "small cluster" },
      { item: "olives or pickles", amount: 1, unit: "piece" }
    ],
    makeAhead: "Assemble up to 4 hours ahead; add crackers or breadsticks closer to serving so they stay crisp."
  },
  {
    id: "fruit-cups",
    title: "Fruit Cups",
    cuisine: "hosting",
    category: "Party Cups",
    image: "assets/ingredients.jpeg",
    time: "20 min",
    level: "Beginner",
    servings: 12,
    path: "kid-chefs",
    description: "Bright individual fruit cups with melon, berries, grapes, citrus, and a honey-lime drizzle.",
    ingredients: ["12 clear cups", "6 cups mixed fruit", "1 cup berries", "1 lime", "2 tbsp honey", "Mint leaves"],
    steps: ["Wash and cut fruit into bite-size pieces.", "Whisk honey with lime juice.", "Layer fruit into cups.", "Drizzle lightly.", "Top with mint and keep chilled."],
    tags: ["party cups", "fruit", "kid friendly", "no-cook"],
    partyCup: true,
    cost_per_cup: 1.85,
    cost_per_guest: 1.85,
    cups_per_guest: 1,
    shopping_items: [
      { item: "clear cups", amount: 1, unit: "cup" },
      { item: "mixed fruit", amount: 0.5, unit: "cup" },
      { item: "berries", amount: 0.08, unit: "cup" },
      { item: "lime", amount: 0.08, unit: "each" },
      { item: "honey", amount: 0.5, unit: "tsp" },
      { item: "mint leaves", amount: 1, unit: "leaf" }
    ],
    makeAhead: "Cut firm fruit the night before; add bananas, apples, or mint the day of."
  },
  {
    id: "dessert-cups",
    title: "Dessert Cups",
    cuisine: "hosting",
    category: "Party Cups",
    image: "assets/editorial-kitchen-prep.jpg",
    time: "30 min",
    level: "Beginner",
    servings: 12,
    path: "amateur-home-chef",
    description: "Layered sweet cups with cookie crumbs, pudding or mousse, whipped topping, and berries.",
    ingredients: ["12 dessert cups", "2 cups cookie crumbs", "4 cups pudding or mousse", "2 cups whipped topping", "1 cup berries", "Chocolate shavings"],
    steps: ["Spoon cookie crumbs into each cup.", "Add pudding or mousse.", "Top with whipped topping.", "Finish with berries and chocolate.", "Chill until serving."],
    tags: ["party cups", "dessert", "make ahead"],
    partyCup: true,
    cost_per_cup: 2.15,
    cost_per_guest: 2.15,
    cups_per_guest: 1,
    shopping_items: [
      { item: "dessert cups", amount: 1, unit: "cup" },
      { item: "cookie crumbs", amount: 0.17, unit: "cup" },
      { item: "pudding or mousse", amount: 0.33, unit: "cup" },
      { item: "whipped topping", amount: 0.17, unit: "cup" },
      { item: "berries", amount: 0.08, unit: "cup" },
      { item: "chocolate shavings", amount: 1, unit: "pinch" }
    ],
    makeAhead: "Best made the morning of the party and held cold."
  },
  {
    id: "brunch-cups",
    title: "Brunch Cups",
    cuisine: "hosting",
    category: "Party Cups",
    image: "assets/editorial-cooking-hero.jpg",
    time: "35 min",
    level: "Intermediate",
    servings: 12,
    path: "amateur-home-chef",
    description: "Mini brunch cups layered with potatoes, eggs, cheese, herbs, and optional bacon or turkey sausage.",
    ingredients: ["12 heat-safe cups or ramekins", "4 cups roasted breakfast potatoes", "12 scrambled eggs", "1 1/2 cups shredded cheese", "12 bacon pieces or sausage bites", "Chives"],
    steps: ["Roast potatoes until tender.", "Scramble eggs softly.", "Layer potatoes, eggs, cheese, and protein.", "Warm gently before serving.", "Finish with chives."],
    tags: ["party cups", "brunch", "breakfast", "warm"],
    partyCup: true,
    cost_per_cup: 2.75,
    cost_per_guest: 2.75,
    cups_per_guest: 1,
    shopping_items: [
      { item: "heat-safe cups", amount: 1, unit: "cup" },
      { item: "roasted potatoes", amount: 0.33, unit: "cup" },
      { item: "eggs", amount: 1, unit: "egg" },
      { item: "shredded cheese", amount: 0.13, unit: "cup" },
      { item: "bacon or sausage bites", amount: 1, unit: "piece" },
      { item: "chives", amount: 1, unit: "pinch" }
    ],
    makeAhead: "Prep potatoes and toppings the night before; assemble and warm near brunch time."
  },
  {
    id: "tailgate-cups",
    title: "Tailgate Cups",
    cuisine: "hosting",
    category: "Party Cups",
    image: "assets/american-food.jpeg",
    time: "25 min",
    level: "Beginner",
    servings: 12,
    path: "amateur-home-chef",
    description: "Game-day cups with chips, dip, slider bites, pickles, and crunchy toppings so guests can grab and go.",
    ingredients: ["12 sturdy cups", "6 cups tortilla chips or corn chips", "3 cups queso or bean dip", "12 slider bites or meatballs", "Pickles", "Jalapenos", "Green onions"],
    steps: ["Add chips to each cup.", "Spoon dip into a small liner or cup insert.", "Add slider bite or meatball.", "Top with pickles, jalapenos, and green onion.", "Serve immediately for best crunch."],
    tags: ["party cups", "tailgate", "game day", "hosting"],
    partyCup: true,
    cost_per_cup: 3.1,
    cost_per_guest: 3.1,
    cups_per_guest: 1,
    shopping_items: [
      { item: "sturdy cups", amount: 1, unit: "cup" },
      { item: "chips", amount: 0.5, unit: "cup" },
      { item: "queso or bean dip", amount: 0.25, unit: "cup" },
      { item: "slider bites or meatballs", amount: 1, unit: "piece" },
      { item: "pickle slices", amount: 2, unit: "slice" },
      { item: "jalapenos", amount: 2, unit: "slice" }
    ],
    makeAhead: "Cook hot bites ahead; assemble chips right before guests arrive."
  },
  {
    id: "holiday-cups",
    title: "Holiday Cups",
    cuisine: "hosting",
    category: "Party Cups",
    image: "assets/editorial-kitchen-prep.jpg",
    time: "30 min",
    level: "Beginner",
    servings: 12,
    path: "professional-mode",
    description: "Festive cups with savory bites, fruit, sweets, and seasonal color for Christmas, Thanksgiving, showers, or family gatherings.",
    ingredients: ["12 decorative cups", "12 cheese cubes", "12 turkey or ham roll-ups", "12 crackers", "1 cup cranberries or grapes", "12 mini cookies", "Rosemary sprigs"],
    steps: ["Pick cups that match the holiday colors.", "Add fruit to anchor the bottom.", "Tuck in cheese, roll-ups, crackers, and a sweet bite.", "Add rosemary or a themed pick.", "Keep covered and chilled."],
    tags: ["party cups", "holiday", "hosting", "make ahead"],
    partyCup: true,
    cost_per_cup: 3.45,
    cost_per_guest: 3.45,
    cups_per_guest: 1,
    shopping_items: [
      { item: "decorative cups", amount: 1, unit: "cup" },
      { item: "cheese cubes", amount: 1, unit: "piece" },
      { item: "turkey or ham roll-ups", amount: 1, unit: "piece" },
      { item: "crackers", amount: 1, unit: "piece" },
      { item: "cranberries or grapes", amount: 0.08, unit: "cup" },
      { item: "mini cookies", amount: 1, unit: "cookie" },
      { item: "rosemary sprigs", amount: 1, unit: "small sprig" }
    ],
    makeAhead: "Assemble cold items up to 6 hours ahead; add crackers last."
  }
);

const partyCupIds = ["charcuterie-cups", "fruit-cups", "dessert-cups", "brunch-cups", "tailgate-cups", "holiday-cups"];

const recipeImageOverrides = {
  "southern-fried-chicken": "images/cuisines/southern/southern-01.png",
  "southern-crispy-fried-chicken": "images/cuisines/southern/southern-01.png",
  "fried-chicken": "images/cuisines/southern/southern-01.png",
  "southern-baked-mac-cheese": "images/cuisines/southern/southern-02.png",
  "mac-and-cheese": "images/cuisines/southern/southern-02.png",
  "stovetop-mac-and-cheese": "images/cuisines/southern/southern-02.png",
  "southern-collard-greens": "images/cuisines/southern/southern-03.png",
  "collard-greens": "images/cuisines/southern/southern-03.png",
  "southern-black-eyed-peas": "images/cuisines/southern/southern-04.png",
  "black-eyed-peas": "images/cuisines/southern/southern-04.png",
  "southern-buttermilk-biscuits": "images/cuisines/southern/southern-05.png",
  "buttermilk-biscuits": "images/cuisines/southern/southern-05.png",
  "biscuits": "images/cuisines/southern/southern-05.png",
  "southern-cornbread-dressing": "images/cuisines/southern/southern-05.png",
  "cornbread": "images/cuisines/southern/southern-05.png",
  "southern-meatloaf": "images/cuisines/southern/southern-06.png",
  "meatloaf": "images/cuisines/southern/southern-06.png",
  "southern-stone-ground-grits": "images/cuisines/southern/southern-07.png",
  "creamy-stone-ground-grits": "images/cuisines/southern/southern-07.png",
  "stone-ground-grits": "images/cuisines/southern/southern-07.png",
  "grits": "images/cuisines/southern/southern-07.png",
  "southern-pecan-pie": "images/cuisines/southern/southern-08.png",
  "pecan-pie": "images/cuisines/southern/southern-08.png",
  "bourbon-praline-bread-pudding": "images/cuisines/southern/southern-08.png",
  "southern-shrimp-and-grits": "images/cuisines/southern/southern-09.png",
  "shrimp-and-grits": "images/cuisines/southern/southern-09.png",
  "shrimp-and-grits-green-beans": "images/cuisines/southern/southern-09.png",
  "orange-chicken": "assets/lc-orange-chicken.jpg",
  "general-tso-chicken": "assets/lc-orange-chicken.jpg",
  "cashew-chicken": "assets/lc-cashew-chicken.jpg",
  "fried-rice": "assets/lc-fried-rice.jpg",
  "pineapple-fried-rice": "assets/lc-fried-rice.jpg",
  "garlic-wings": "assets/beautiful-chicken.jpeg",
  "wings": "assets/beautiful-chicken.jpeg",
  "cajun-cream-pasta": "assets/lc-pasta.jpg",
  "cajun-cream-salmon-rotini": "assets/lc-pasta.jpg",
  "cajun-cream-salmon-rotini-pasta": "assets/lc-pasta.jpg",
  "chicken-piccata": "assets/lc-chicken-piccata.jpg",
  "chicken-parmesan": "assets/lc-chicken-piccata.jpg",
  "blackened-fish": "assets/lc-seafood.jpg",
  "fried-catfish": "assets/lc-seafood.jpg",
  "lemon-herb-salmon": "assets/lc-seafood.jpg",
  "seafood-boil": "assets/lc-seafood.jpg",
  "birria-tacos": "assets/lc-birria-tacos.jpg",
  "chicken-street-tacos": "assets/lc-birria-tacos.jpg",
  "tandoori-chicken": "assets/lc-indian-food.jpg",
  "butter-chicken": "assets/lc-indian-food.jpg",
  "chicken-tikka-masala": "assets/lc-indian-food.jpg",
  "biryani": "assets/lc-indian-food.jpg",
  "palak-paneer": "assets/lc-indian-food.jpg",
  "chana-masala": "assets/lc-indian-food.jpg",
  "dessert-charcuterie-board": "assets/lc-desserts.jpg",
  "dessert-cups": "assets/lc-desserts.jpg",
  "fruit-cups": "assets/lc-desserts.jpg",
  "holiday-cups": "assets/lc-desserts.jpg"
};

const imageContentRegistry = {
  "images/cuisines/southern/southern-01.png": {
    title: "Southern Fried Chicken",
    type: "recipe",
    href: "#recipes/southern-crispy-fried-chicken",
    lesson: "#culinary-academy/frying",
    menu: "#menu-intelligence/1"
  },
  "images/cuisines/southern/southern-02.png": {
    title: "Baked Mac and Cheese",
    type: "recipe",
    href: "#recipes/southern-baked-mac-cheese",
    lesson: "#culinary-academy/bechamel",
    menu: "#menu-intelligence/1"
  },
  "images/cuisines/southern/southern-03.png": {
    title: "Slow-Cooked Collard Greens",
    type: "recipe",
    href: "#recipes/southern-collard-greens",
    lesson: "#culinary-academy/braising",
    menu: "#cuisine/soul-food"
  },
  "images/cuisines/southern/southern-04.png": {
    title: "Black-Eyed Peas",
    type: "recipe",
    href: "#recipes/southern-black-eyed-peas",
    lesson: "#culinary-academy/black-eyed-peas-tradition",
    menu: "#cuisine/mississippi-favorites"
  },
  "images/cuisines/southern/southern-05.png": {
    title: "Cornbread Dressing / Biscuits",
    type: "recipe",
    href: "#recipes/southern-cornbread-dressing",
    lesson: "#culinary-academy/cornbread-traditions",
    menu: "#hosting/holiday-hosting"
  },
  "images/cuisines/southern/southern-06.png": {
    title: "Southern Meatloaf",
    type: "recipe",
    href: "#recipes/southern-meatloaf",
    lesson: "#culinary-academy/kitchen-safety",
    menu: "#cuisine/southern"
  },
  "images/cuisines/southern/southern-07.png": {
    title: "Creamy Stone-Ground Grits",
    type: "recipe",
    href: "#recipes/southern-stone-ground-grits",
    lesson: "#culinary-academy/history-of-grits",
    menu: "#cuisine/low-country"
  },
  "images/cuisines/southern/southern-08.png": {
    title: "Pecan Pie / Bread Pudding",
    type: "recipe",
    href: "#recipes/southern-pecan-pie",
    lesson: "#culinary-academy/baking-basics",
    menu: "#hosting/sunday-comfort-supper"
  },
  "images/cuisines/southern/southern-09.png": {
    title: "Low Country Shrimp and Grits",
    type: "recipe",
    href: "#recipes/southern-shrimp-and-grits",
    lesson: "#culinary-academy/rice-grits-pasta",
    menu: "#cuisine/low-country"
  },
  "images/cuisines/asian/asian-01.png": {
    title: "Garlic Fried Rice",
    type: "recipe",
    href: "#recipes/asian-garlic-fried-rice",
    lesson: "#culinary-academy/world-foods",
    menu: "#cuisine/asian-inspired"
  },
  "images/cuisines/asian/asian-02.png": {
    title: "Orange Chicken",
    type: "recipe",
    href: "#recipes/asian-orange-chicken",
    lesson: "#culinary-academy/sauces",
    menu: "#cuisine/asian-inspired"
  },
  "images/cuisines/asian/asian-03.png": {
    title: "Cashew Chicken",
    type: "recipe",
    href: "#recipes/asian-cashew-chicken",
    lesson: "#culinary-academy/world-foods",
    menu: "#cuisine/asian-inspired"
  },
  "images/cuisines/asian/asian-04.png": {
    title: "Beef and Broccoli",
    type: "recipe",
    href: "#recipes/asian-beef-broccoli",
    lesson: "#culinary-academy/searing",
    menu: "#cuisine/asian-inspired"
  },
  "images/cuisines/asian/asian-05.png": {
    title: "Vegetable Lo Mein",
    type: "recipe",
    href: "#recipes/asian-lo-mein",
    lesson: "#culinary-academy/rice-grits-pasta",
    menu: "#cuisine/asian-inspired"
  },
  "images/cuisines/asian/asian-06.png": {
    title: "Dumpling Bowl",
    type: "recipe",
    href: "#recipes/asian-dumpling-bowls",
    lesson: "#culinary-academy/world-foods",
    menu: "#cuisine/asian-inspired"
  },
  "images/cuisines/asian/asian-07.png": {
    title: "Teriyaki Salmon",
    type: "recipe",
    href: "#recipes/asian-teriyaki-salmon",
    lesson: "#culinary-academy/pan-sauce",
    menu: "#cuisine/asian-inspired"
  },
  "images/cuisines/asian/asian-08.png": {
    title: "Thai Basil Chicken",
    type: "recipe",
    href: "#recipes/asian-thai-basil-chicken",
    lesson: "#culinary-academy/world-foods",
    menu: "#cuisine-explorer/thailand"
  },
  "images/cuisines/asian/asian-09.png": {
    title: "Miso Butter Noodles",
    type: "recipe",
    href: "#recipes/asian-miso-noodles",
    lesson: "#culinary-academy/umami",
    menu: "#cuisine-explorer/japan"
  },
  "images/cuisines/asian/asian-10.png": {
    title: "Crab Rangoon",
    type: "recipe",
    href: "#recipes/asian-crab-rangoon",
    lesson: "#hosting/tailgate",
    menu: "#cuisine/asian-inspired"
  },
  "assets/lc-african-food.jpg": {
    title: "West and East African recipe set",
    type: "cuisine collection",
    href: "#cuisine-explorer/african-cuisines",
    lesson: "#culinary-academy/world-foods",
    menu: "#cuisine/nigerian"
  },
  "assets/lc-indian-food.jpg": {
    title: "Indian curry and bread lessons",
    type: "cuisine collection",
    href: "#cuisine/indian",
    lesson: "#culinary-academy/curry",
    menu: "#menu-intelligence/7"
  },
  "assets/lc-birria-tacos.jpg": {
    title: "Mexican taco night",
    type: "recipe/menu",
    href: "#recipes/chicken-street-tacos",
    lesson: "#culinary-academy/world-foods",
    menu: "#menu-intelligence/8"
  },
  "assets/lc-mediterranean-food.jpg": {
    title: "Mediterranean lunch spread",
    type: "menu",
    href: "#cuisine/mediterranean",
    lesson: "#culinary-academy/tzatziki",
    menu: "#menu-intelligence/3"
  },
  "assets/lc-desserts.jpg": {
    title: "Desserts and party cups",
    type: "hosting",
    href: "#hosting",
    lesson: "#culinary-academy/baking-basics",
    menu: "#hosting/holiday-hosting"
  },
  "assets/lc-seafood.jpg": {
    title: "Seafood cooking",
    type: "recipe collection",
    href: "#kitchen-search/seafood",
    lesson: "#culinary-academy/searing",
    menu: "#cuisine/low-country"
  },
  "assets/lc-pasta.jpg": {
    title: "Pasta and sauce lessons",
    type: "recipe collection",
    href: "#cuisine/italian",
    lesson: "#culinary-academy/tomato-sauce",
    menu: "#cuisine/italian"
  }
};

const ingredientUnits = new Set([
  "cup", "cups", "tbsp", "tbsps", "tablespoon", "tablespoons", "tsp", "tsps", "teaspoon", "teaspoons",
  "oz", "ounce", "ounces", "lb", "lbs", "pound", "pounds", "g", "gram", "grams", "kg", "ml", "l",
  "clove", "cloves", "slice", "slices", "piece", "pieces", "can", "cans", "egg", "eggs", "bunch",
  "bunches", "sprig", "sprigs", "stalk", "stalks", "fillet", "fillets", "steak", "steaks"
]);

function normalizeRecipe(recipe) {
  const imageOverride = recipeImageOverrides[recipe.id];
  if (imageOverride) {
    recipe.image = imageOverride;
    recipe.image_url = imageOverride;
  }
  recipe.image_url ||= recipe.image;
  recipe.image ||= recipe.image_url;
  recipe.slug ||= recipe.title?.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || recipe.id;
  recipe.prep_time ||= recipe.prepTime || "15 min";
  recipe.cook_time ||= recipe.cookTime || recipe.time || "30 min";
  recipe.prepTime ||= recipe.prep_time;
  recipe.cookTime ||= recipe.cook_time;
  recipe.difficulty ||= recipe.level || "Beginner";
  recipe.level ||= recipe.difficulty;
  recipe.skill_level ||= recipe.path === "kid-chefs" ? "Kid Chef" : recipe.path === "professional-mode" ? "Professional" : "Amateur";
  recipe.directions ||= recipe.steps || [];
  recipe.steps ||= recipe.directions;
  recipe.tags ||= [recipe.category, recipe.cuisine, recipe.path].filter(Boolean);
  recipe.structured_ingredients = structuredIngredientsFor(recipe);
  recipe.skills_learned ||= recipe.skillsLearned || (recipe.tags || []).slice(0, 4).map((tag) => `${tag} cooking`);
  recipe.storage ||= "Cool leftovers within 2 hours, store covered in the refrigerator, and use within 3 to 4 days unless the dish notes say otherwise.";
  recipe.reheating ||= "Reheat gently until hot all the way through. Add a splash of water, stock, milk, or sauce if the dish needs moisture.";
  recipe.cultural_variations ||= [];
  recipe.related_recipe_ids ||= recipe.relatedRecipeIds || [];
  recipe.video_url ||= recipe.videoUrl || "";
  recipe.videoUrl ||= recipe.video_url;
  recipe.source ||= { type: "internal", name: "Let's Cook Y'all" };
  recipe.cost_per_cup ||= recipe.costPerCup || 0;
  recipe.cost_per_guest ||= recipe.costPerGuest || recipe.cost_per_cup || 0;
  recipe.cups_per_guest ||= recipe.cupsPerGuest || 1;
  recipe.shopping_items ||= recipe.shoppingItems || [];
  return recipe;
}

recipes = recipes.map(normalizeRecipe);

function partyCupRecipes() {
  return partyCupIds.map((id) => recipes.find((recipe) => recipe.id === id)).filter(Boolean);
}

function money(value) {
  return `$${Number(value || 0).toFixed(2)}`;
}

function formatAmount(value) {
  const number = Number(value || 0);
  if (!Number.isFinite(number)) return value;
  if (Number.isInteger(number)) return String(number);
  return number.toFixed(number < 10 ? 1 : 0).replace(/\.0$/, "");
}

function parseQuantityToken(token = "") {
  const clean = String(token).trim();
  if (!clean) return null;
  if (/^\d+(\.\d+)?$/.test(clean)) return Number(clean);
  const fraction = clean.match(/^(\d+)\/(\d+)$/);
  if (fraction) return Number(fraction[1]) / Number(fraction[2]);
  return null;
}

function parseIngredientLine(line = "") {
  if (typeof line === "object" && line.name) {
    const quantity = Number(line.quantity ?? line.amount ?? 0);
    return {
      quantity: Number.isFinite(quantity) && quantity > 0 ? quantity : null,
      unit: line.unit || "",
      name: line.name,
      note: line.note || "",
      original: line.original || `${line.quantity || ""} ${line.unit || ""} ${line.name}`.trim()
    };
  }
  const original = String(line || "").trim();
  const match = original.match(/^(\d+(?:\.\d+)?|\d+\/\d+)(?:\s+(\d+\/\d+))?\s+(.+)$/);
  if (!match) return { quantity: null, unit: "", name: original, note: "", original };
  const whole = parseQuantityToken(match[1]);
  const fraction = parseQuantityToken(match[2]);
  const quantity = Number(whole || 0) + Number(fraction || 0);
  let remainder = match[3].trim();
  const words = remainder.split(/\s+/);
  let unit = "";
  if (words.length && ingredientUnits.has(words[0].toLowerCase().replace(/[,.]/g, ""))) {
    unit = words.shift().replace(/[,.]/g, "");
    remainder = words.join(" ");
  }
  return {
    quantity: quantity > 0 ? quantity : null,
    unit,
    name: remainder.trim(),
    note: "",
    original
  };
}

function formatFraction(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "";
  const whole = Math.floor(number);
  const fraction = number - whole;
  const common = [
    [1 / 8, "1/8"], [1 / 6, "1/6"], [1 / 4, "1/4"], [1 / 3, "1/3"],
    [1 / 2, "1/2"], [2 / 3, "2/3"], [3 / 4, "3/4"], [5 / 6, "5/6"]
  ];
  const closest = common.reduce((best, item) => Math.abs(item[0] - fraction) < Math.abs(best[0] - fraction) ? item : best, [0, ""]);
  if (fraction < 0.05) return String(whole);
  if (1 - fraction < 0.05) return String(whole + 1);
  return `${whole ? `${whole} ` : ""}${closest[1]}`.trim();
}

function singularizeUnit(unit = "", quantity = 1) {
  if (!unit || Math.abs(quantity - 1) > 0.05) return unit;
  const units = { cups: "cup", tablespoons: "tablespoon", teaspoons: "teaspoon", ounces: "ounce", pounds: "pound", cloves: "clove", slices: "slice", pieces: "piece", cans: "can", eggs: "egg", bunches: "bunch", sprigs: "sprig", stalks: "stalk", fillets: "fillet", steaks: "steak" };
  return units[unit.toLowerCase()] || unit;
}

function formatScaledIngredient(ingredient, multiplier) {
  const quantity = Number(ingredient.quantity || 0) * multiplier;
  if (!quantity) return ingredient.original || ingredient.name;
  const unit = singularizeUnit(ingredient.unit || "", quantity);
  return `${formatFraction(quantity)} ${unit} ${ingredient.name}`.replace(/\s+/g, " ").trim();
}

function structuredIngredientsFor(recipe = {}) {
  return (recipe.structured_ingredients || recipe.ingredients_structured || recipe.ingredients || []).map(parseIngredientLine);
}

function scaledPartyItems(recipe, guestCount, cupsPerGuest = recipe.cups_per_guest || 1) {
  const totalCups = Math.max(1, Number(guestCount || 1) * Number(cupsPerGuest || 1));
  return (recipe.shopping_items || []).map((item) => ({
    ...item,
    total: Number(item.amount || 0) * totalCups
  }));
}

function partyPlanFor(guestCount = 12, selectedId = "all") {
  const selectedRecipes = selectedId === "all"
    ? partyCupRecipes()
    : partyCupRecipes().filter((recipe) => recipe.id === selectedId);
  const totalCost = selectedRecipes.reduce((sum, recipe) => {
    return sum + Number(recipe.cost_per_guest || recipe.cost_per_cup || 0) * Number(guestCount || 0);
  }, 0);
  const items = new Map();
  selectedRecipes.forEach((recipe) => {
    scaledPartyItems(recipe, guestCount).forEach((item) => {
      const key = `${item.item}|${item.unit}`;
      const current = items.get(key) || { item: item.item, unit: item.unit, total: 0 };
      current.total += item.total;
      items.set(key, current);
    });
  });
  return {
    recipes: selectedRecipes,
    totalCups: selectedRecipes.length * Number(guestCount || 0),
    totalCost,
    items: [...items.values()]
  };
}

function partyRecipeResults(recipe, guestCount = 24, cupsPerGuest = 1) {
  const totalCups = Math.max(1, Number(guestCount || 1) * Number(cupsPerGuest || 1));
  const totalCost = totalCups * Number(recipe.cost_per_cup || 0);
  const perGuest = Number(recipe.cost_per_cup || 0) * Number(cupsPerGuest || 1);
  return `
    <div class="party-result-summary">
      <article><strong>${totalCups}</strong><span>Total cups</span></article>
      <article><strong>${money(recipe.cost_per_cup)}</strong><span>Cost per cup</span></article>
      <article><strong>${money(perGuest)}</strong><span>Cost per guest</span></article>
      <article><strong>${money(totalCost)}</strong><span>Estimated total</span></article>
    </div>
    <div class="party-shopping-list">
      <h3>Shopping list</h3>
      <ul>${scaledPartyItems(recipe, guestCount, cupsPerGuest).map((item) => `<li><strong>${formatAmount(item.total)}</strong> ${item.unit} ${item.item}</li>`).join("")}</ul>
    </div>
    ${recipe.makeAhead ? `<p class="hosting-note"><strong>Make ahead:</strong> ${recipe.makeAhead}</p>` : ""}
  `;
}

function scaledRecipeList(recipe, targetServings) {
  const baseServings = Math.max(1, Number(recipe.servings || 1));
  const multiplier = targetServings / baseServings;
  const scalable = (recipe.structured_ingredients || []).filter((ingredient) => ingredient.quantity && ingredient.name);
  if (!scalable.length) return "";
  return scalable.map((ingredient) => `<li>${formatScaledIngredient(ingredient, multiplier)}</li>`).join("");
}

function recipeUtilityPanel(recipe) {
  const scales = [2, 4, 6, 8];
  const scalable = (recipe.structured_ingredients || []).filter((ingredient) => ingredient.quantity && ingredient.name);
  return `
    <article class="detail-panel recipe-tools-panel">
      <p class="eyebrow">Cook tools</p>
      <h2>Save, print, shop${scalable.length ? ", and scale" : ""}.</h2>
      <div class="recipe-tool-actions">
        <button class="small-button" data-save="${recipe.id}">${saved.includes(recipe.id) ? "Saved" : "Save Recipe"}</button>
        <button class="small-button secondary" data-print-recipe>Print Recipe</button>
        <button class="small-button secondary" data-plan="${recipe.id}">${planned.includes(recipe.id) ? "Planned" : "Add to Meal Plan"}</button>
      </div>
      ${scalable.length ? `<div class="recipe-scale-grid">
        ${scales.map((servings) => `
          <section>
            <h3>${servings} servings</h3>
            <ul>${scaledRecipeList(recipe, servings)}</ul>
          </section>
        `).join("")}
      </div>` : `<p class="hosting-note">Scaling is available when this recipe has measured ingredient quantities.</p>`}
      <div class="party-shopping-list">
        <h3>Shopping List</h3>
        <ul>${[...new Set([...(recipe.ingredients || []), ...(recipe.shopping_items || []).map((item) => item.item || item)])].map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    </article>
  `;
}

function renderPartyPlannerResults() {
  const target = document.querySelector("#partyPlannerResults");
  if (!target) return;
  const guestCount = Math.max(1, Number(document.querySelector("#partyGuestCount")?.value || 12));
  const selectedId = document.querySelector("#partyCupSelect")?.value || "all";
  const plan = partyPlanFor(guestCount, selectedId);
  target.innerHTML = `
    <div class="party-result-summary">
      <article><strong>${guestCount}</strong><span>Guests</span></article>
      <article><strong>${plan.totalCups}</strong><span>Total cups</span></article>
      <article><strong>${money(plan.totalCost)}</strong><span>Estimated total</span></article>
      <article><strong>${money(plan.totalCost / Math.max(guestCount, 1))}</strong><span>Cost per guest</span></article>
    </div>
    <div class="party-shopping-list">
      <h3>Generated shopping list</h3>
      <ul>${plan.items.map((item) => `<li><strong>${formatAmount(item.total)}</strong> ${item.unit} ${item.item}</li>`).join("")}</ul>
    </div>
  `;
}

function renderRecipePartyResults() {
  const target = document.querySelector("#recipePartyResults");
  const recipeId = document.querySelector("[data-party-recipe]")?.dataset.partyRecipe;
  if (!target || !recipeId) return;
  const recipe = recipes.find((item) => item.id === recipeId);
  if (!recipe) return;
  const guestCount = Math.max(1, Number(document.querySelector("#recipePartyGuests")?.value || 24));
  const cupsPerGuest = Math.max(1, Number(document.querySelector("#recipeCupsPerGuest")?.value || 1));
  target.innerHTML = partyRecipeResults(recipe, guestCount, cupsPerGuest);
}

function setShareMeta({ title = "Let's Cook Ya'll", description = "Warm recipes, cooking lessons, and kitchen confidence from Brent & Co.", image = "assets/logo.png" } = {}) {
  const absoluteImage = image.startsWith("http") ? image : `${location.origin}/${image.replace(/^\/+/, "")}`;
  const values = {
    "description": description,
    "og:title": title,
    "og:description": description,
    "og:image": absoluteImage,
    "og:type": "article",
    "twitter:card": "summary_large_image",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": absoluteImage
  };
  document.title = title;
  Object.entries(values).forEach(([name, content]) => {
    const selector = name.startsWith("og:") ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let tag = document.querySelector(selector);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute(name.startsWith("og:") ? "property" : "name", name);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  });
}

function cuisineName(cuisineId) {
  return cuisines.find((item) => item.id === cuisineId)?.name || "Global Flavors";
}

const cuisineAliases = {
  asian: "asian-inspired",
  "asian-cuisines": "asian-inspired",
  soul: "soul-food",
  "southern-soul-food": "southern",
  lowcountry: "low-country",
  mississippi: "mississippi-favorites",
  louisiana: "creole",
  "cajun-creole": "creole",
  "latin-american": "mexican",
  "mexican-latin-american": "mexican",
  "mediterranean-cuisines": "mediterranean",
  "caribbean-cuisines": "caribbean",
  "european-cuisines": "italian",
  "holiday-sunday": "hosting",
  "african-cuisines": "global",
  african: "global",
  nigeria: "nigerian",
  ghana: "ghanaian",
  ethiopia: "ethiopian",
  senegal: "global",
  morocco: "moroccan",
  haiti: "caribbean",
  jamaica: "caribbean",
  trinidad: "caribbean",
  china: "asian-inspired",
  japan: "asian-inspired",
  korea: "asian-inspired",
  thailand: "asian-inspired",
  vietnam: "asian-inspired",
  philippines: "asian-inspired",
  india: "indian",
  greece: "mediterranean",
  turkey: "mediterranean",
  lebanon: "mediterranean",
  egypt: "mediterranean",
  italy: "italian",
  france: "italian",
  spain: "mediterranean"
};

const cuisineRecipeAliases = {
  creole: ["cajun", "southern"],
  cajun: ["creole", "southern"],
  "soul-food": ["southern", "mississippi-favorites"],
  bbq: ["southern", "mississippi-favorites"],
  "low-country": ["southern", "seafood"],
  "mississippi-favorites": ["southern", "soul-food", "creole"],
  "asian-inspired": ["global"],
  indian: ["mediterranean", "global"],
  nigerian: [],
  ghanaian: [],
  ethiopian: [],
  moroccan: [],
  caribbean: ["global"],
  mediterranean: ["italian", "global"],
  italian: ["mediterranean"],
  hosting: ["southern", "global"],
  global: ["southern", "asian-inspired", "mediterranean", "mexican", "indian", "caribbean", "italian"]
};

const strictCuisineIds = new Set([
  "southern",
  "asian-inspired",
  "nigerian",
  "ghanaian",
  "ethiopian",
  "moroccan",
  "indian",
  "italian",
  "mexican",
  "mediterranean",
  "cajun",
  "creole",
  "bbq",
  "soul-food",
  "low-country",
  "mississippi-favorites",
  "caribbean"
]);

function canonicalCuisineId(id = "") {
  const normalized = slugify(decodeURIComponent(id || ""));
  return cuisineAliases[normalized] || normalized;
}

function recipesForCuisine(cuisineId, limit = 12) {
  const canonical = canonicalCuisineId(cuisineId || "global");
  const relatedIds = [canonical, ...(cuisineRecipeAliases[canonical] || [])];
  const wanted = new Set(relatedIds);
  const picked = [];
  const add = (items) => {
    items.forEach((item) => {
      if (item && !picked.some((existing) => existing.id === item.id) && picked.length < limit) {
        picked.push(item);
      }
    });
  };
  add(recipes.filter((recipe) => wanted.has(recipe.cuisine)));
  if (picked.length < limit) {
    const tokens = relatedIds.flatMap((id) => id.split("-")).filter((word) => word.length > 2);
    add(recipes.filter((recipe) => {
      const haystack = recipeSearchText(recipe);
      return tokens.some((token) => haystack.includes(token));
    }));
  }
  if (!strictCuisineIds.has(canonical) && picked.length < Math.min(4, limit)) {
    add(recipes.filter((recipe) => recipe.ingredients?.length && (recipe.directions?.length || recipe.steps?.length)));
  }
  return picked.slice(0, limit);
}

function cuisineGuideRoute(cuisineId) {
  const guideIds = {
    southern: "southern-soul-food",
    creole: "cajun-creole",
    cajun: "cajun-creole",
    "soul-food": "southern-soul-food",
    bbq: "bbq",
    "low-country": "southern-soul-food",
    "mississippi-favorites": "mississippi",
    indian: "india",
    mexican: "latin-american",
    caribbean: "caribbean-cuisines",
    mediterranean: "mediterranean-cuisines",
    "asian-inspired": "asian-cuisines",
    italian: "european-cuisines",
    hosting: "holiday-sunday",
    global: "world-foods"
  };
  return `#cuisine-explorer/${guideIds[cuisineId] || cuisineId}`;
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

function recipeTagline(recipe) {
  const tags = (recipe.tags || []).filter((tag) => !["Imported", "TheMealDB"].includes(tag)).slice(0, 3);
  return tags.length ? tags.join(" • ") : `${cuisineName(recipe.cuisine)} • ${recipe.category}`;
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
  const hiddenExplorerOnly = ["hosting", "global", "nigerian", "ghanaian", "ethiopian", "moroccan"];
  return cuisines.filter((item) => item.id !== activeCuisine && !hiddenExplorerOnly.includes(item.id)).slice(0, 7);
}

function cuisine101For(cuisineId) {
  return cuisine101[cuisineId] || cuisine101.global;
}

const cuisineEducationProfiles = {
  southern: {
    culture: "Southern cooking is built around seasonality, preservation, family tables, church meals, cast iron, slow pots, and using every ingredient with care.",
    ingredients: ["cornmeal", "buttermilk", "greens", "sweet potatoes", "beans", "smoked turkey", "catfish", "pecans"],
    techniques: ["cast-iron frying", "slow simmering", "buttermilk marinating", "gravy making", "biscuit handling"],
    menus: ["fried chicken, mac and cheese, greens, cornbread, banana pudding", "catfish, slaw, hushpuppies, hot sauce, sweet tea"]
  },
  "asian-inspired": {
    culture: "This lane introduces Asian cooking foundations while respecting that China, Japan, Korea, Thailand, Vietnam, the Philippines, India, and many other places each have their own foodways.",
    ingredients: ["rice", "noodles", "soy sauce", "ginger", "garlic", "scallions", "sesame", "chiles"],
    techniques: ["stir-frying", "steaming", "sauce balancing", "rice timing", "quick searing"],
    menus: ["garlic fried rice with dumplings and greens", "teriyaki salmon with rice and cucumber salad"]
  },
  nigerian: {
    culture: "Nigerian food is regional, bold, pepper-forward, and generous, with stews, rice dishes, soups, beans, grilled meats, and swallow foods anchoring many meals.",
    ingredients: ["scotch bonnet", "red bell pepper", "tomato", "palm oil", "egusi", "crayfish", "stockfish", "plantain"],
    techniques: ["pepper-base reduction", "rice steaming", "soup thickening", "spice grilling", "bean steaming"],
    menus: ["jollof rice, suya, moi moi, fried plantains", "egusi soup with greens and swallow"]
  },
  ghanaian: {
    culture: "Ghanaian tables often center hearty stews, rice, beans, plantains, groundnuts, fish, and sauces with heat, depth, and comfort.",
    ingredients: ["cowpeas", "rice", "plantains", "peanuts", "palm oil", "tomato", "ginger", "shito"],
    techniques: ["rice-and-bean steaming", "tomato stew building", "plantain frying", "groundnut soup simmering"],
    menus: ["waakye with stew, egg, shito, and plantains", "red red with fried plantains"]
  },
  ethiopian: {
    culture: "Ethiopian meals are often shared from one platter with injera, layered stews, lentils, vegetables, berbere, and spiced butter.",
    ingredients: ["teff", "berbere", "niter kibbeh", "lentils", "split peas", "onions", "garlic", "ginger"],
    techniques: ["onion reduction", "spice blooming", "lentil simmering", "injera fermentation", "shared plating"],
    menus: ["doro wat, misir wat, shiro, greens, injera", "tibs with injera and lentils"]
  },
  moroccan: {
    culture: "Moroccan cooking layers sweet, savory, citrus, herbs, warm spices, olives, preserved lemon, couscous, tagines, and mint tea hospitality.",
    ingredients: ["preserved lemon", "olives", "cumin", "cinnamon", "ginger", "chickpeas", "couscous", "mint"],
    techniques: ["tagine braising", "couscous steaming", "herb marinade making", "spice layering"],
    menus: ["chicken tagine, couscous, carrot salad, mint tea", "harira, chermoula fish, bread, oranges"]
  },
  indian: {
    culture: "Indian food changes by region, religion, season, and home tradition, but many dishes build flavor through aromatics, spices, lentils, breads, rice, and chutneys.",
    ingredients: ["garam masala", "turmeric", "cumin", "coriander", "lentils", "ginger", "garlic", "ghee"],
    techniques: ["spice blooming", "tadka", "curry base building", "rice steaming", "flatbread cooking"],
    menus: ["chana masala, dal tadka, rice, naan, cucumber raita", "butter chicken, biryani, greens, chutney"]
  },
  italian: {
    culture: "Italian cooking values good ingredients, seasonal simplicity, pasta water, olive oil, herbs, sauces, and meal structure.",
    ingredients: ["pasta", "tomatoes", "olive oil", "garlic", "basil", "parmesan", "lemon", "beans"],
    techniques: ["pasta water emulsifying", "sauce simmering", "cutlet breading", "risotto stirring"],
    menus: ["chicken parmesan, pasta, salad, garlic bread", "piccata, roasted vegetables, tiramisu-style cups"]
  },
  mexican: {
    culture: "Mexican food is deeply regional and rooted in corn, chiles, beans, salsas, masa, herbs, slow meats, and bright acidity.",
    ingredients: ["corn tortillas", "chiles", "beans", "tomatillos", "cilantro", "lime", "masa", "avocado"],
    techniques: ["salsa roasting", "tortilla warming", "adobo marinating", "braising", "taco assembly"],
    menus: ["birria tacos, consommé, rice, beans, pickled onions", "fish tacos, slaw, salsa, limeade"]
  },
  mediterranean: {
    culture: "Mediterranean cooking is broad, including Greek, Turkish, Levantine, North African, and coastal traditions with olive oil, herbs, grains, beans, seafood, and shared plates.",
    ingredients: ["olive oil", "lemon", "yogurt", "chickpeas", "cucumber", "herbs", "pita", "seafood"],
    techniques: ["grilling", "mezze assembly", "yogurt sauce making", "bean pureeing", "fish roasting"],
    menus: ["hummus, Greek salad, grilled fish, pita, fruit", "gyros, tzatziki, roasted vegetables, mint lemonade"]
  },
  cajun: {
    culture: "Cajun cooking comes from Louisiana country traditions with rice, roux, smoked meats, seafood, seasoning, and one-pot meals that feed groups.",
    ingredients: ["holy trinity", "roux", "rice", "andouille", "crawfish", "chicken", "cayenne", "green onion"],
    techniques: ["dark roux", "rice absorption", "stewing", "smothering", "seasoning in layers"],
    menus: ["jambalaya, green salad, French bread, bread pudding", "gumbo, rice, potato salad, sweet tea"]
  },
  creole: {
    culture: "Creole cooking reflects New Orleans and Gulf influences, blending African, French, Spanish, Caribbean, and Indigenous foodways.",
    ingredients: ["tomatoes", "holy trinity", "seafood", "okra", "roux", "rice", "Creole seasoning", "butter"],
    techniques: ["roux making", "sauce simmering", "seafood timing", "court-bouillon poaching"],
    menus: ["shrimp Creole, rice, salad, French bread", "Creole gumbo, potato salad, bread pudding"]
  },
  bbq: {
    culture: "BBQ is regional and patience-driven, focused on smoke, seasoning, sauce, fire management, and sides that hold up outdoors.",
    ingredients: ["pork ribs", "brisket", "chicken", "dry rub", "wood smoke", "vinegar", "molasses", "mustard"],
    techniques: ["dry rubs", "low-and-slow smoking", "sauce glazing", "resting meat", "temperature control"],
    menus: ["ribs, baked beans, slaw, cornbread, peach cobbler", "pulled pork, pickles, buns, potato salad"]
  },
  "soul-food": {
    culture: "Soul food honors African American survival, migration, celebration, seasoning, Sunday tables, and making beauty from practical ingredients.",
    ingredients: ["greens", "beans", "cornmeal", "sweet potatoes", "smoked seasoning", "chicken", "hot sauce", "buttermilk"],
    techniques: ["slow greens", "deep frying", "smothering", "baking casseroles", "seasoning with acid and smoke"],
    menus: ["fried chicken, yams, greens, mac and cheese, cornbread", "oxtails, rice, cabbage, pound cake"]
  },
  "low-country": {
    culture: "Low Country food connects coastal Carolina and Georgia Geechee/Gullah foodways with rice, seafood, okra, crab, shrimp, and communal boils.",
    ingredients: ["shrimp", "rice", "okra", "crab", "corn", "sausage", "grits", "hot sauce"],
    techniques: ["seafood boiling", "rice steaming", "grits simmering", "okra stewing", "shellfish timing"],
    menus: ["shrimp and grits, greens, cornbread", "seafood boil, corn, potatoes, slaw, lemon butter"]
  },
  "mississippi-favorites": {
    culture: "Mississippi food blends Delta, Gulf Coast, Black Southern, church supper, family reunion, and fish fry traditions.",
    ingredients: ["catfish", "cornmeal", "comeback sauce", "Gulf shrimp", "greens", "pecans", "buttermilk", "hot sauce"],
    techniques: ["cornmeal dredging", "cast iron frying", "grits whisking", "sauce station setup", "large-batch sides"],
    menus: ["fried catfish, spaghetti, slaw, hushpuppies, sweet tea", "shrimp and grits, greens, cornbread, pound cake"]
  }
};

const hostingIdeas = [
  { title: "Sunday Comfort Supper", text: "A warm table with braised meat, greens, cornbread, and dessert.", timing: "Start the braise early; finish sides in the last hour.", setup: ["Set serving spoons out first", "Keep one dish oven-safe", "Make dessert ahead"], recipes: ["oxtails", "collard-greens", "cornbread", "bourbon-praline-bread-pudding"] },
  { title: "Game Night Bites", text: "Finger foods, dips, wings, boards, and one sweet bite so people can graze.", timing: "Build the board first; keep hot bites rotating.", setup: ["Use small plates", "Keep napkins everywhere", "Make a refill tray"], recipes: ["crab-rangoon", "charcuterie-boards", "garlic-wings", "rotel-dip"] },
  { title: "Beginner Dinner Party", text: "A simple starter, one main, one side, and one dessert without too many moving parts.", timing: "Choose one hot main and make the starter ahead.", setup: ["Pick serving bowls early", "Prep garnish before guests arrive", "Use a written timeline"], recipes: ["shrimp-and-grits-green-beans", "greek-salad", "charcuterie-boards", "bourbon-praline-bread-pudding"] },
  { title: "Taco Night", text: "A build-your-own spread with protein, rice, salsa, and easy toppings.", timing: "Cook the chicken and rice first; warm tortillas last.", setup: ["Put toppings in small bowls", "Keep limes cut", "Use foil to hold tortillas"], recipes: ["chicken-street-tacos", "cilantro-lime-rice", "black-bean-enchiladas", "cheese-quesadillas"] },
  { title: "Caribbean Family Plate", text: "Big flavor with curry, rice and peas, plantains, and something bright on the side.", timing: "Start curry first, then rice, then plantains right before serving.", setup: ["Serve sauces on the side", "Use a platter for plantains", "Keep drinks cold"], recipes: ["caribbean-curry-chicken", "rice-and-peas", "fried-sweet-plantains", "jerk-chicken"] },
  { title: "Mediterranean Lunch Spread", text: "Fresh, bright, and easy to set out with pita, dips, salad, and protein.", timing: "Make hummus and salad ahead; cook protein close to serving.", setup: ["Slice pita last", "Set olive oil and lemon out", "Use shallow bowls"], recipes: ["creamy-hummus", "greek-salad", "chicken-gyros", "lemon-herb-salmon"] },
  { title: "Holiday Hosting", text: "A centerpiece meal with make-ahead sides, dessert, drinks, and a written oven schedule.", timing: "Shop three days ahead, prep desserts and casseroles the day before, and reserve oven space on paper.", setup: ["Label serving dishes", "Stage foil and storage containers", "Create a drink station"], recipes: ["southern-cornbread-dressing", "southern-collard-greens", "southern-pecan-pie", "holiday-cups"] },
  { title: "Church Potluck", text: "Portable pans, clear labels, allergy notes, foods that hold well, and generous serving utensils.", timing: "Choose dishes that travel well and pack them with serving spoons, foil, and labels.", setup: ["Write ingredient cards", "Use lidded pans", "Pack extra serving spoons"], recipes: ["southern-baked-mac-cheese", "cajun-dirty-rice", "dessert-cups", "fruit-cups"] },
  { title: "Repast Table", text: "Quiet comfort food, simple drinks, easy service, and enough help so grieving family members do not carry the work.", timing: "Use make-ahead casseroles, salads, fruit, bread, and desserts; assign helpers for refills and cleanup.", setup: ["Keep table flow simple", "Set water and tea first", "Use disposable containers for leftovers"], recipes: ["southern-baked-mac-cheese", "southern-collard-greens", "southern-cornbread-dressing", "dessert-cups"] },
  { title: "Family Reunion", text: "Large-batch mains, grill foods, nostalgic sides, kid-friendly choices, hydration, and station-style service.", timing: "Assign families by category: grill, sides, desserts, drinks, paper goods, and cleanup.", setup: ["Create shade for cold foods", "Label family dishes", "Put trash stations in sight"], recipes: ["bbq-pulled-pork", "southern-crispy-fried-chicken", "southern-black-eyed-peas", "fruit-cups"] },
  { title: "Cookout", text: "Grilled or smoked mains with cold sides, sauces, bread, fruit, and desserts that can handle outdoor serving.", timing: "Season meat the night before, make cold sides early, and sauce grilled foods near the end.", setup: ["Separate raw and cooked trays", "Set sauce station", "Keep ice for drinks and cold sides"], recipes: ["bbq-smoked-ribs", "bbq-chicken-quarters", "southern-black-eyed-peas", "charcuterie-cups"] },
  { title: "Tailgate", text: "Handheld foods, dips, wings, cups, sliders, and a cleanup plan that works from a trunk or tent.", timing: "Cook hot items before leaving, pack sauces separately, and assemble crunchy items on site.", setup: ["Bring wipes and trash bags", "Use sturdy cups", "Keep dips insulated"], recipes: ["tailgate-cups", "garlic-wings", "crab-rangoon", "rotel-dip"] },
  { title: "Graduation Party", text: "A celebratory open-house menu with trays, cups, finger foods, cake, drinks, and refill-friendly stations.", timing: "Use food that can be replenished in waves and keep a backup tray chilled.", setup: ["Set photo table away from food", "Use small plates", "Create a refill schedule"], recipes: ["charcuterie-cups", "brunch-cups", "dessert-cups", "fruit-cups"] },
  { title: "Baby Shower", text: "Pretty small bites, alcohol-free drinks, fruit, dessert cups, and gentle foods that stay neat.", timing: "Make dessert and fruit cups early, then assemble savory cups close to guest arrival.", setup: ["Use soft colors", "Keep drinks self-serve", "Label common allergens"], recipes: ["fruit-cups", "dessert-cups", "brunch-cups", "charcuterie-cups"] },
  { title: "Brunch Hosting", text: "Eggs, fruit, breads, one savory main, one sweet bite, coffee, juice, and a calm make-ahead rhythm.", timing: "Prep fruit and baked items the night before; cook eggs or warm dishes just before serving.", setup: ["Set coffee first", "Use tiered trays", "Keep butter and condiments together"], recipes: ["brunch-cups", "soft-scrambled-eggs", "fruit-cups", "chicken-salad-croissants"] }
];

const kidsKitchenLevels = [
  {
    title: "Junior Chef",
    ages: "Ages 5-8",
    focus: "Washing, spreading, counting, stirring cold foods, and building snack plates.",
    safety: ["Wash hands before touching food", "Use butter knives or kid-safe tools only", "Keep grown-ups in charge of heat and sharp knives"],
    recipes: ["pb-and-j-sandwich", "fruit-kabobs", "mini-pizza-bagels"],
    badges: ["Clean Hands", "Great Spreader", "Pattern Builder"],
    challenge: "Build a colorful snack plate with one fruit, one protein, and one crunchy item."
  },
  {
    title: "Young Chef",
    ages: "Ages 9-12",
    focus: "Measuring, mixing, reading recipes, simple stovetop awareness, and assembling family snacks.",
    safety: ["Ask before using heat", "Turn pan handles inward", "Use measuring cups and spoons before free-pouring"],
    recipes: ["stovetop-mac-and-cheese", "soft-scrambled-eggs", "turkey-pinwheels"],
    badges: ["Measuring Pro", "Stirring Star", "Recipe Reader"],
    challenge: "Cook one supervised breakfast or lunch and explain every safety step out loud."
  },
  {
    title: "Teen Chef",
    ages: "Ages 13-17",
    focus: "Knife basics, simple hot meals, timing sides, seasoning, and cleaning as a cook.",
    safety: ["Use a stable cutting board", "Know where the fire extinguisher is", "Check food temperature when cooking meat"],
    recipes: ["chicken-salad-croissants", "wraps", "orange-chicken"],
    badges: ["Knife Ready", "Heat Manager", "Meal Builder"],
    challenge: "Plan and cook a simple dinner with one main, one side, and one cleanup plan."
  }
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
document.addEventListener("error", handleImageFallback, true);
window.reportLetsCookMissingImages = reportMissingImages;
window.reportLetsCookRecipeImages = recipeImageReport;
window.auditLetsCookImageContent = imageContentAudit;

function handleImageFallback(event) {
  const image = event.target;
  if (!(image instanceof HTMLImageElement)) return;
  const path = image.getAttribute("src") || "";
  const fallback = imageFallbacks.get(path);
  if (!fallback || image.dataset.fallbackApplied === "true") return;
  image.dataset.fallbackApplied = "true";
  image.src = fallback;
}

function routeParts() {
  const [route, id] = (window.location.hash.replace("#", "") || "lets-cook").split("/");
  return { route, id };
}

function render() {
  const { route, id } = routeParts();
  if (route !== "recipes" || !id) setShareMeta();
  setActive(route);
  updateAppChrome(route);
  if (route === "home") return renderPlatformHome();
  if (route === "lets-cook") return renderLetsCookHome();
  if (route === "find-the-beat") return renderFindTheBeatHome();
  if (route === "second-chance") return renderSecondChanceHome();
  if (route === "community") return renderCommunity();
  if (route === "kitchen") return renderKitchen();
  if (route === "cook101") return id ? renderLesson(id) : renderCook101();
  if (route === "skills-academy") return renderSkillsAcademy();
  if (route === "culinary-academy") return renderCulinaryAcademy(id);
  if (route === "build-a-meal") return renderBuildMeal(id);
  if (route === "kitchen-search") return renderKitchenSearch(id);
  if (route === "cuisine-explorer") return renderCuisineExplorer(id);
  if (route === "food-encyclopedia") return renderCulinaryAcademy(id);
  if (route === "menu-intelligence") return renderMenuIntelligence(id);
  if (route === "kids-cooking") return renderKidsCooking();
  if (route === "recipes") {
    if (id) requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
    return id ? renderRecipe(id) : renderRecipes();
  }
  if (route === "paths") return id ? renderPath(id) : renderPaths();
  if (route === "pathways") return renderPaths();
  if (route === "planner") return renderPlanner(id);
  if (route === "hosting") return renderHosting(id);
  if (route === "about") return renderAbout();
  if (route === "account") return renderAccount();
  if (route === "search") return renderRecipes();
  if (route === "cuisine") return renderCuisine(id);
  renderPlatformHome();
}

function setActive(route) {
  const cookingRoutes = ["kitchen", "cook101", "skills-academy", "culinary-academy", "build-a-meal", "kitchen-search", "cuisine-explorer", "food-encyclopedia", "menu-intelligence", "kids-cooking", "recipes", "paths", "pathways", "planner", "hosting", "about", "account", "search", "cuisine"];
  const normalizedRoute = cookingRoutes.includes(route) ? "lets-cook" : route;
  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.classList.toggle("active", link.dataset.route === normalizedRoute);
  });
}

function activeAppForRoute(route) {
  const cookingRoutes = ["lets-cook", "kitchen", "cook101", "skills-academy", "culinary-academy", "build-a-meal", "kitchen-search", "cuisine-explorer", "food-encyclopedia", "menu-intelligence", "kids-cooking", "recipes", "paths", "pathways", "planner", "hosting", "about", "account", "search", "cuisine"];
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

function slugify(value = "") {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function titleizeSlug(value = "") {
  return String(value)
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function academyModuleById(id) {
  const normalized = slugify(decodeURIComponent(id || ""));
  return academyModules.find((module) => module.id === normalized);
}

function lessonLinkFor(id) {
  const lesson = lessons.find((item) => item.id === id);
  if (lesson) return { href: `#cook101/${lesson.id}`, title: lesson.title };
  const module = academyModules.find((item) => item.id === id);
  if (module) return { href: `#culinary-academy/${module.id}`, title: module.title };
  if (id === "cuisine-explorer") return { href: "#cuisine-explorer", title: "Cuisine Explorer" };
  if (id === "menu-intelligence") return { href: "#menu-intelligence", title: "Menu Builder" };
  if (id === "kitchen-search") return { href: "#kitchen-search", title: "What's In My Kitchen" };
  return { href: "#culinary-academy", title: titleizeSlug(id) || "Culinary Academy" };
}

function knownAcademyHref(item) {
  const normalized = slugify(item);
  if (academyModules.some((module) => module.id === normalized)) return `#culinary-academy/${normalized}`;
  if (foodEncyclopedia.some((entry) => slugify(entry.term) === normalized)) return `#culinary-academy/${normalized}`;
  if (cuisineExplorerGroups.some((group) => group.id === normalized || group.regions.some((region) => slugify(region) === normalized))) return `#cuisine-explorer/${normalized}`;
  return "";
}

function academyPhotoFor(id) {
  const photos = {
    "knife-skills": photoFor("skills", "knife"),
    "kitchen-safety": photoFor("hero", "learning"),
    measurements: photoFor("skills", "measuring"),
    equipment: photoFor("skills", "knife"),
    "food-science": photoFor("skills", "sauces"),
    sauces: photoFor("skills", "sauces"),
    ingredients: photoFor("skills", "measuring"),
    seasonings: photoFor("skills", "sauces"),
    "world-foods": photoFor("cuisines", "global"),
    "professional-skills": photoFor("skills", "plating")
  };
  return photos[id] || photoFor("hero", "learning");
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

function heroRotator(title, text, images = [], actions = "") {
  const rotationImages = images.length ? images : [photoFor("hero", "family", 0, "assets/cooking-family.jpeg")];
  return `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Brent & Co. / Let's Cook Ya'll</p>
        <h1>${title}</h1>
        <p>${text}</p>
        ${actions ? `<div class="hero-actions">${actions}</div>` : ""}
      </div>
      <figure class="hero-media hero-rotator">
        ${rotationImages.map((image, index) => `<img src="${image}" alt="" style="--slide: ${index};" />`).join("")}
      </figure>
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
  const recipeOfWeek = recipes.find((recipe) => recipe.id === "yakamein") || recipes[0];
  const kidPick = recipes.find((recipe) => recipe.id === "pb-and-j-sandwich") || recipes.find((recipe) => recipe.skill_level === "Kid Chef");
  const southernClassic = recipes.find((recipe) => recipe.id === "oxtails") || recipes.find((recipe) => recipe.cuisine === "southern");
  const globalFlavor = recipes.find((recipe) => recipe.id === "chicken-street-tacos") || recipes.find((recipe) => recipe.cuisine !== "southern");
  const heroImages = Array.from({ length: 10 }, (_, index) => photoFor("hero", "family", index, "assets/cooking-family.jpeg"));
  app.innerHTML = `
    ${heroRotator(
      "Cook With Confidence",
      "A warm culinary learning platform that helps you turn ingredients into meals, understand cuisines, build skills, plan ahead, and cook with confidence.",
      heroImages,
      `<a class="small-button" href="#build-a-meal">Build A Meal</a><a class="small-button secondary" href="#kitchen-search/chicken%20strips">What's In My Kitchen</a><a class="small-button secondary" href="#recipes">Browse Recipes</a>`
    )}
    ${cookSubnav()}
    ${ingredientDiscoverySection("chicken strips")}
    <section class="cream-section homepage-photo-strip">
      <div class="section-heading compact-heading">
        <p class="eyebrow">Learn by looking, tasting, and doing</p>
        <h2>Real meals, real technique, real confidence.</h2>
      </div>
      <div class="hero-photo-grid">${heroImages.slice(0, 6).map((image, index) => `<figure><img src="${image}" alt="Let's Cook Y'all kitchen moment ${index + 1}" /></figure>`).join("")}</div>
    </section>
    ${learningArchitectureSection()}
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
    <section class="cream-section rollout-section">
      <div class="section-heading">
        <p class="eyebrow">Share-ready picks</p>
        <h2>Content made for the table and the timeline.</h2>
      </div>
      <div class="rollout-grid">
        ${[
          ["Recipe of the Week", recipeOfWeek],
          ["Kid Chef Pick", kidPick],
          ["Southern Classic", southernClassic],
          ["Global Flavor", globalFlavor]
        ].map(([label, recipe]) => recipe ? `<article><span>${label}</span>${recipeCard(recipe)}</article>` : "").join("")}
      </div>
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
      <a href="#culinary-academy">Culinary Academy</a>
      <a href="#cuisine-explorer">Cuisine Explorer</a>
      <a href="#menu-intelligence">Menu Builder</a>
      <a href="#hosting">Hospitality & Hosting</a>
      <a href="#recipes">Recipes</a>
      <a href="#account">Account</a>
    </section>
  `;
}

function learningArchitectureSection() {
  return `
    <section class="cream-section learning-architecture">
      <div class="section-heading">
        <p class="eyebrow">Culinary learning platform</p>
        <h2>Recipes are the start. The goal is learning how to cook.</h2>
        <p>Let's Cook Y'all now has clear learning lanes for recipes, meal building, cuisine foundations, skills, ingredient search, planning, kids, and growth pathways.</p>
      </div>
      <div class="learning-pillar-grid">
        ${learningPillars.map((pillar) => `
          <a class="learning-pillar-card" href="${pillar.route}">
            <span>${pillar.title}</span>
            <p>${pillar.text}</p>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function ingredientDiscoverySection(seed = "chicken strips") {
  return `
    <section class="gold-section ingredient-discovery">
      <div class="ingredient-discovery-copy">
        <p class="eyebrow">Start with one ingredient</p>
        <h2>Turn what you have into a whole cooking plan.</h2>
        <p>Type an ingredient like chicken strips, shrimp, rice, pasta, or ground beef and learn what meals, cuisines, techniques, sides, substitutions, and weekly plans can come from it.</p>
      </div>
      <form class="ingredient-search-panel" data-ingredient-form>
        <label for="ingredientSearchInput">What's in your kitchen?</label>
        <div>
          <input id="ingredientSearchInput" name="ingredient" value="${seed}" placeholder="chicken strips" />
          <button class="small-button" type="submit">Explore Ideas</button>
        </div>
      </form>
    </section>
  `;
}

function normalizeIngredientTerm(term = "") {
  return decodeURIComponent(term).toLowerCase().trim().replace(/[-_]+/g, " ").replace(/\s+/g, " ");
}

function recipeSearchText(recipe) {
  return [
    recipe.title,
    recipe.description,
    recipe.category,
    recipe.cuisine,
    ...(recipe.ingredients || []),
    ...(recipe.tags || [])
  ].join(" ").toLowerCase();
}

function recipesForIngredient(term) {
  const normalized = normalizeIngredientTerm(term);
  const words = normalized.split(" ").filter((word) => word.length > 2);
  return recipes.filter((recipe) => {
    const haystack = recipeSearchText(recipe);
    return haystack.includes(normalized) || words.some((word) => haystack.includes(word));
  });
}

function ingredientGuideFor(term) {
  const normalized = normalizeIngredientTerm(term || "chicken strips");
  const playbookKey = Object.keys(ingredientPlaybooks).find((key) => normalized.includes(key));
  const playbook = ingredientPlaybooks[playbookKey] || ingredientPlaybooks.chicken;
  const matches = recipesForIngredient(normalized);
  const meals = (matches.length ? matches : recipesForCuisine("global", 6)).slice(0, 6);
  const cuisineIds = [...new Set(meals.map((recipe) => recipe.cuisine).filter(Boolean))].slice(0, 5);
  return {
    term: normalized,
    exactMatch: matches.length > 0,
    meals,
    cuisines: cuisineIds.length ? cuisineIds : ["southern", "mexican", "asian-inspired", "mediterranean"],
    techniques: playbook.techniques,
    sides: playbook.sides,
    substitutions: playbook.substitutions,
    mealPlans: playbook.mealPlans
  };
}

function ingredientGuideMarkup(term) {
  const guide = ingredientGuideFor(term);
  return `
    <section class="cream-section ingredient-results">
      <div class="section-heading">
        <p class="eyebrow">Ingredient thinking</p>
        <h2>What you can do with ${guide.term}</h2>
        <p>Use this as a cook's map: choose a meal, pick a cuisine lane, practice one technique, add a side, and keep a substitution ready.</p>
        ${guide.exactMatch ? "" : `<p class="content-note">No exact ${guide.term} recipe is saved yet. Use these cookable recipes to practice the same method, then swap in ${guide.term} when the protein or vegetable cooks similarly.</p>`}
      </div>
      <div class="ingredient-results-grid">
        <article class="ingredient-panel meal-panel">
          <span>Meals</span>
          <div class="mini-recipe-list">${guide.meals.map((recipe) => `<a href="#recipes/${recipe.id}">${recipe.title}<small>${cuisineName(recipe.cuisine)} / ${recipe.time || recipe.cook_time}</small></a>`).join("")}</div>
        </article>
        <article class="ingredient-panel">
          <span>Cuisines</span>
          <div class="learning-chip-row">${guide.cuisines.map((id) => `<a href="#cuisine/${id}">${cuisineName(id)}</a>`).join("")}</div>
        </article>
        <article class="ingredient-panel">
          <span>Techniques</span>
          <ul>${guide.techniques.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
        <article class="ingredient-panel">
          <span>Side Dishes</span>
          <ul>${guide.sides.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
        <article class="ingredient-panel">
          <span>Substitutions</span>
          <ul>${guide.substitutions.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
        <article class="ingredient-panel">
          <span>Meal Plans</span>
          <ul>${guide.mealPlans.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
      </div>
    </section>
  `;
}

function renderBuildMeal(id) {
  const term = id ? normalizeIngredientTerm(id) : "chicken strips";
  app.innerHTML = `
    ${hero("Build A Meal", "Learn the rhythm of a balanced plate: main ingredient, flavor direction, side dish, sauce, texture, and timing.", photoFor("hero", "learning"), `<a class="small-button" href="#kitchen-search/${encodeURIComponent(term)}">Search Ingredients</a>`)}
    ${cookSubnav()}
    ${ingredientDiscoverySection(term)}
    <section class="cream-section meal-builder-section">
      <div class="section-heading">
        <p class="eyebrow">The plate framework</p>
        <h2>Think like a cook before you follow a recipe.</h2>
      </div>
      <div class="meal-framework">
        ${[
          ["1", "Choose the anchor", "Pick your protein, vegetable, grain, or leftover ingredient."],
          ["2", "Pick a cuisine lane", "Southern, Mexican, Indian, Mediterranean, Asian-inspired, Italian, or Caribbean."],
          ["3", "Choose a technique", "Bake, sear, saute, simmer, grill, roast, stir-fry, or assemble."],
          ["4", "Add balance", "Pair with starch, vegetable, sauce, crunch, acid, or something fresh."],
          ["5", "Plan the timing", "Start slow items first, finish fresh items last, and keep the plate warm."]
        ].map(([number, title, text]) => `<article><strong>${number}</strong><h3>${title}</h3><p>${text}</p></article>`).join("")}
      </div>
    </section>
    ${ingredientGuideMarkup(term)}
  `;
}

function renderKitchenSearch(id) {
  const term = id ? normalizeIngredientTerm(id) : "chicken strips";
  app.innerHTML = `
    ${hero("What's In My Kitchen", "Search by what you already have, then discover recipes, cuisines, techniques, side dishes, substitutions, and meal plans.", photoFor("skills", "measuring"), `<a class="small-button" href="#build-a-meal/${encodeURIComponent(term)}">Build A Meal</a>`)}
    ${cookSubnav()}
    ${ingredientDiscoverySection(term)}
    ${ingredientGuideMarkup(term)}
  `;
}

function renderCuisineExplorerDetail(id) {
  const normalized = slugify(decodeURIComponent(id || ""));
  const group = cuisineExplorerGroups.find((item) => item.id === normalized);
  const profile = countryCuisineProfiles[normalized];
  const parentGroup = cuisineExplorerGroups.find((item) => item.regions.some((region) => slugify(region) === normalized));
  const title = profile?.title || group?.title || titleizeSlug(normalized);
  const image = profile ? parentGroup?.image : group?.image;
  const recipeCuisineId = canonicalCuisineId(profile?.cuisine || group?.id || parentGroup?.id || normalized);
  const overview = profile?.overview || group?.note || "Explore the ingredients, dishes, techniques, and hosting traditions that shape this food culture.";
  const ingredients = profile?.ingredients || ["regional staples", "fresh herbs", "spices", "grains", "seasonal produce"];
  const dishes = profile?.dishes || group?.regions || ["traditional mains", "family sides", "shared breads", "celebration dishes"];
  const techniques = profile?.techniques || ["building flavor bases", "seasoning in layers", "balancing texture", "serving family-style"];
  const menu = profile?.menu || ["main dish", "starch or bread", "vegetable side", "sauce or condiment", "drink"];
  const beginnerRecipes = profile?.beginnerRecipes || recipesForCuisine(recipeCuisineId, 4).map((recipe) => recipe.title);
  const profileRecipeMatches = (profile ? recipes.filter((recipe) => {
    const titleMatch = beginnerRecipes.some((name) => recipe.title.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(recipe.title.toLowerCase()));
    const tagMatch = (recipe.tags || []).some((tag) => normalizeIngredientTerm(tag).includes(normalized));
    return titleMatch || tagMatch;
  }).slice(0, 6) : []).concat(recipesForCuisine(recipeCuisineId, 6)).filter((recipe, index, list) => list.findIndex((item) => item.id === recipe.id) === index).slice(0, 6);
  const regions = group?.regions || [];
  app.innerHTML = `
    ${hero(title, overview, image || photoFor("cuisines", "mediterranean"), `<a class="small-button" href="#cuisine-explorer">All Cuisines</a><a class="small-button secondary" href="#menu-intelligence">Build A Menu</a>`)}
    ${cookSubnav()}
    <section class="cream-section cuisine-detail-page">
      <div class="section-heading">
        <p class="eyebrow">${profile?.region || group?.title || "Cuisine Explorer"}</p>
        <h2>${title} food culture, ingredients, dishes, and beginner paths.</h2>
      </div>
      <div class="academy-module-grid">
        <article class="academy-module-card"><h3>Overview</h3><p>${overview}</p></article>
        <article class="academy-module-card"><h3>Food Culture</h3><p>${profile?.culture || "This food lane is shaped by geography, family memory, ingredients, migration, celebration, and everyday hospitality."}</p></article>
        <article class="academy-module-card"><h3>Common Ingredients</h3><ul>${ingredients.map((item) => `<li>${item}</li>`).join("")}</ul></article>
        <article class="academy-module-card"><h3>Traditional Dishes</h3><ul>${dishes.map((item) => `<li>${item}</li>`).join("")}</ul></article>
        <article class="academy-module-card"><h3>Cooking Techniques</h3><ul>${techniques.map((item) => `<li>${item}</li>`).join("")}</ul></article>
        <article class="academy-module-card"><h3>Menu Example</h3><ul>${menu.map((item) => `<li>${item}</li>`).join("")}</ul></article>
        <article class="academy-module-card"><h3>Beginner Recipes</h3><ul>${beginnerRecipes.map((item) => `<li>${item}</li>`).join("")}</ul></article>
      </div>
      <div class="section-heading compact-heading"><p class="eyebrow">Recipes to try</p><h2>Practice recipes for ${title}.</h2></div>
      <div class="recipe-grid">${profileRecipeMatches.map(recipeCard).join("")}</div>
      ${regions.length ? `<div class="section-heading compact-heading"><p class="eyebrow">Country paths</p><h2>Choose a country or region next.</h2></div><div class="region-chip-row linked-chip-row">${regions.map((region) => `<a href="#cuisine-explorer/${slugify(region)}">${region}</a>`).join("")}</div>` : ""}
      ${progressionNav("#cuisine-explorer", "All Cuisines", "#culinary-academy/world-foods", "World Foods Lesson", ["#menu-intelligence", "#hosting"])}
    </section>
  `;
}

function renderCuisineExplorer(id) {
  if (id) return renderCuisineExplorerDetail(id);
  app.innerHTML = `
    ${hero("Cuisine Explorer", "A culinary rolodex for food culture, regional flavor, ingredients, traditions, and the way meals connect across the world.", photoFor("cuisines", "indian"), `<a class="small-button" href="#culinary-academy">Open Culinary Academy</a><a class="small-button secondary" href="#menu-intelligence">Build A Menu</a>`)}
    ${cookSubnav()}
    <section class="cream-section">
      <div class="section-heading">
        <p class="eyebrow">Cuisine rolodex</p>
        <h2>Explore regions, countries, traditions, and flavor systems.</h2>
        <p>Choose a region to learn its ingredients, table traditions, beginner dishes, cooking techniques, and menus that make sense together.</p>
      </div>
      <div class="cuisine-rolodex">
        ${cuisineExplorerGroups.map((group) => `
          <article class="cuisine-region-card">
            <figure><img src="${group.image}" alt="${group.title}" /></figure>
            <div>
              <h3><a href="#cuisine-explorer/${group.id}">${group.title}</a></h3>
              <p>${group.note}</p>
              <div class="region-chip-row linked-chip-row">${group.regions.map((region) => `<a href="#cuisine-explorer/${slugify(region)}">${region}</a>`).join("")}</div>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="gold-section">
      <div class="section-heading">
        <p class="eyebrow">Same ingredient, new direction</p>
        <h2>Chicken can become tacos, curry, pasta, bowls, wraps, or Sunday dinner.</h2>
      </div>
      ${ingredientGuideMarkup("chicken").replace("cream-section ingredient-results", "ingredient-results embedded-results")}
    </section>
  `;
}

function academySearchMarkup(query) {
  if (!query) return "";
  const normalized = query.toLowerCase();
  const moduleMatches = academyModules.filter((module) => [module.title, module.category, module.overview, module.why, module.beginner, ...module.keyConcepts].join(" ").toLowerCase().includes(normalized));
  const entryMatches = foodEncyclopedia.filter((entry) => [entry.term, entry.origin, entry.purpose, ...(entry.related || [])].join(" ").toLowerCase().includes(normalized));
  const cuisineMatches = cuisineExplorerGroups.filter((group) => [group.title, group.note, ...group.regions].join(" ").toLowerCase().includes(normalized));
  const menuMatches = menuPairings.filter((menu) => [menu.cuisine, menu.occasion, menu.main_dish, menu.cultural_notes, ...menu.traditional_sides].join(" ").toLowerCase().includes(normalized));
  return `
    <div class="academy-search-results">
      <h3>Learning paths for "${query}"</h3>
      <div class="academy-result-grid">
        ${moduleMatches.map((module) => `<a href="#culinary-academy/${module.id}"><span>Lesson</span><strong>${module.title}</strong><p>${module.overview}</p></a>`).join("")}
        ${entryMatches.map((entry) => `<a href="#culinary-academy/${slugify(entry.term)}"><span>Food term</span><strong>${entry.term}</strong><p>${entry.purpose}</p></a>`).join("")}
        ${cuisineMatches.map((group) => `<a href="#cuisine-explorer/${group.id}"><span>Cuisine</span><strong>${group.title}</strong><p>${group.note}</p></a>`).join("")}
        ${menuMatches.map((menu, index) => `<a href="#menu-intelligence/${index}"><span>Menu guide</span><strong>${menu.main_dish}</strong><p>${menu.cuisine} / ${menu.occasion}</p></a>`).join("")}
      </div>
    </div>
  `;
}

function renderAcademyModule(module) {
  const relatedLinks = module.related.map(lessonLinkFor);
  app.innerHTML = `
    ${hero(module.title, module.overview, academyPhotoFor(module.id), `<a class="small-button" href="#culinary-academy">All Academy</a><a class="small-button secondary" href="#cuisine-explorer">Explore Cuisines</a>`)}
    ${cookSubnav()}
    <section class="cream-section academy-detail-page">
      <article class="detail-panel lesson-detail">
        <p class="eyebrow">${module.category} / Culinary Academy</p>
        <h2>${module.title}</h2>
        <p class="detail-copy">${module.overview}</p>
        <div class="chef-note-grid">
          <section><strong>Why it matters</strong><p>${module.why}</p></section>
          <section><strong>Beginner explanation</strong><p>${module.beginner}</p></section>
        </div>
        <div class="region-chip-row">${module.keyConcepts.map((concept) => `<span>${concept}</span>`).join("")}</div>
      </article>
      <div class="academy-module-grid">
        ${module.modules.map((part) => `
          <article class="academy-module-card">
            <h3>${part.title}</h3>
            <ul>${part.items.map((item) => `<li>${item}</li>`).join("")}</ul>
          </article>
        `).join("")}
      </div>
      <div class="section-heading compact-heading">
        <p class="eyebrow">Continue learning</p>
        <h2>This lesson connects to real recipes, techniques, and menu planning.</h2>
      </div>
      <div class="academy-result-grid">
        ${relatedLinks.map((link) => `<a href="${link.href}"><span>Related</span><strong>${link.title}</strong><p>Open the next useful step.</p></a>`).join("")}
      </div>
      ${progressionNav("#culinary-academy", "Culinary Academy", lessonLinkFor(module.next).href, lessonLinkFor(module.next).title, relatedLinks.map((link) => link.href))}
    </section>
  `;
}

function progressionNav(previousHref, previousLabel, nextHref, nextLabel, relatedHrefs = []) {
  const related = relatedHrefs.map((href) => `<a href="${href}">${href.replace("#", "").replace("/", " / ")}</a>`).join("");
  return `
    <nav class="progression-nav" aria-label="Lesson progression">
      <a href="${previousHref}"><span>Previous</span><strong>${previousLabel}</strong></a>
      <a href="${nextHref}"><span>Next</span><strong>${nextLabel}</strong></a>
      ${related ? `<div><span>Related</span>${related}</div>` : ""}
    </nav>
  `;
}

function renderCulinaryAcademy(id) {
  const query = id ? normalizeIngredientTerm(id) : "";
  const module = academyModuleById(id);
  if (module) return renderAcademyModule(module);
  const entries = query
    ? foodEncyclopedia.filter((entry) => [entry.term, entry.origin, entry.purpose, ...(entry.related || [])].join(" ").toLowerCase().includes(query))
    : foodEncyclopedia;
  app.innerHTML = `
    ${hero("Culinary Academy", "One learning home for food terms, ingredients, techniques, equipment, food science, world foods, seasonings, and professional kitchen skills.", photoFor("hero", "learning"), `<a class="small-button" href="#cuisine-explorer">Explore Cuisines</a><a class="small-button secondary" href="#menu-intelligence">Build A Menu</a>`)}
    ${cookSubnav()}
    <section class="cream-section">
      <div class="section-heading">
        <p class="eyebrow">Academy categories</p>
        <h2>Everything food learners need, organized into clear study lanes.</h2>
      </div>
      <div class="academy-category-grid">
        ${academyCategories.map((category) => `
          <article class="academy-category-card">
            <h3>${category.title}</h3>
            <p>${category.text}</p>
            <div class="region-chip-row linked-chip-row">${category.entries.map((entry) => {
              const linkedModule = academyModuleById(entry);
              return `<a href="#culinary-academy/${entry}">${linkedModule?.title || titleizeSlug(entry)}</a>`;
            }).join("")}</div>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="cream-section">
      <div class="section-heading">
        <p class="eyebrow">Search the academy</p>
        <h2>Definitions for beginners, context for culture, and notes for serious cooks.</h2>
      </div>
      <form class="ingredient-search-panel encyclopedia-search" data-academy-form>
        <label for="academySearchInput">Search food terms, ingredients, equipment, and techniques</label>
        <div>
          <input id="academySearchInput" name="term" value="${query}" placeholder="roux, plantain, umami, chopsticks..." />
          <button class="small-button" type="submit">Search</button>
        </div>
      </form>
      ${academySearchMarkup(query)}
      <div class="encyclopedia-grid">
        ${entries.map((entry) => `
          <article class="encyclopedia-card">
            <span>${entry.origin}</span>
            <h3>${entry.term}</h3>
            ${entry.pronunciation ? `<p class="pronunciation">${entry.pronunciation}</p>` : ""}
            <p>${entry.purpose}</p>
            <div class="chef-note-grid">
              <section><strong>Beginner note</strong><p>${entry.beginner}</p></section>
              <section><strong>Pro chef note</strong><p>${entry.pro}</p></section>
            </div>
            <div class="region-chip-row linked-chip-row">${entry.related.map((item) => {
              const href = knownAcademyHref(item);
              return href ? `<a href="${href}">${item}</a>` : `<span>${item}</span>`;
            }).join("")}</div>
          </article>
        `).join("") || `<div class="empty-state">No encyclopedia entries found yet.</div>`}
      </div>
    </section>
  `;
}

const renderFoodEncyclopedia = renderCulinaryAcademy;

function menuPairingCard(menu) {
  const mainLinks = recipeLinksFor(menu.main_recipe_ids);
  const sectionHtml = menuRecipeSections
    .filter(([label]) => label !== "Main dishes")
    .map(([label, key]) => {
      const links = recipeLinksFor(menu[key]);
      return links.length ? `<section><strong>${label}</strong><span class="recipe-link-list">${links.join("")}</span></section>` : "";
    })
    .join("");
  const alternateLinks = recipeLinksFor(menu.alternate_recipe_ids);
  return `
    <article class="menu-pairing-card">
      <p class="eyebrow">${menu.cuisine} / ${menu.occasion}</p>
      <h3>${mainLinks.length ? mainLinks.join(" or ") : menu.main_dish}</h3>
      <p>${menu.cultural_notes}</p>
      <div class="menu-columns">
        ${sectionHtml}
        <section><strong>Cook Time</strong><span>${menu.cook_time}</span></section>
      </div>
      ${alternateLinks.length ? `<div class="alternate-menu-links"><strong>Alternate ideas</strong><span class="recipe-link-list">${alternateLinks.join("")}</span></div>` : ""}
      <div class="chef-note-grid">
        <section><strong>Beginner</strong><p>${menu.beginner_level}</p></section>
        <section><strong>Professional</strong><p>${menu.pro_level}</p></section>
      </div>
      <p class="hosting-note">${menu.hosting_notes}</p>
    </article>
  `;
}

function renderMenuIntelligence(id) {
  const selectedIndex = Number.isFinite(Number(id)) ? Math.max(0, Math.min(menuPairings.length - 1, Number(id))) : 0;
  const selectedMenu = menuPairings[selectedIndex];
  const cuisinesList = [...new Set(menuPairings.map((menu) => menu.cuisine))];
  const occasionsList = [...new Set(menuPairings.map((menu) => menu.occasion))];
  app.innerHTML = `
    ${hero("Traditional Menu Intelligence", "Learn what goes together culturally and practically: mains, sides, breads, sauces, drinks, desserts, timing, and hosting notes.", photoFor("hero", "hospitality"), `<a class="small-button" href="#hosting">Hosting Ideas</a><a class="small-button secondary" href="#build-a-meal">Build A Meal</a>`)}
    ${cookSubnav()}
    <section class="cream-section menu-builder-section">
      <div class="section-heading">
        <p class="eyebrow">Menu Builder</p>
        <h2>Select a cuisine, occasion, and main dish. We'll suggest the rest of the table.</h2>
      </div>
      <form class="menu-builder-form" data-menu-builder-form>
        <label>Cuisine<select name="cuisine">${cuisinesList.map((item) => `<option${item === selectedMenu.cuisine ? " selected" : ""}>${item}</option>`).join("")}</select></label>
        <label>Occasion<select name="occasion">${occasionsList.map((item) => `<option${item === selectedMenu.occasion ? " selected" : ""}>${item}</option>`).join("")}</select></label>
        <label>Main Dish<select name="main">${menuPairings.map((menu, index) => `<option value="${index}"${index === selectedIndex ? " selected" : ""}>${recipeLinksFor(menu.main_recipe_ids).map((link) => link.replace(/<[^>]+>/g, "")).join(" or ") || menu.main_dish}</option>`).join("")}</select></label>
        <button class="small-button" type="submit">Build Menu</button>
      </form>
      <div class="menu-builder-result">
        ${menuPairingCard(selectedMenu)}
        ${progressionNav("#cuisine-explorer", "Cuisine Explorer", "#hosting", "Hospitality & Hosting", ["#culinary-academy/world-foods", "#build-a-meal"])}
      </div>
    </section>
    <section class="cream-section">
      <div class="section-heading">
        <p class="eyebrow">Menu pairings</p>
        <h2>Build meals that make sense on the plate and at the table.</h2>
      </div>
      <div class="menu-pairing-grid">
        ${menuPairings.map((menu, index) => `<a class="menu-pairing-link" href="#menu-intelligence/${index}">${menuPairingCard(menu)}</a>`).join("")}
      </div>
    </section>
    <section class="gold-section">
      <div class="section-heading">
        <p class="eyebrow">Hospitality knowledge</p>
        <h2>Hosting is a skill too.</h2>
      </div>
      <div class="hosting-knowledge-grid">
        ${hostingKnowledge.map((item) => `<article><h3>${item.title}</h3><p>${item.text}</p><span>${item.pairing}</span></article>`).join("")}
      </div>
    </section>
  `;
}

function renderSkillsAcademy() {
  app.innerHTML = `
    ${hero("Cooking Skills Academy", "Duolingo-style progression meets culinary school foundations: safety, vocabulary, culture, technique, science, hospitality, and operations.", photoFor("skills", "knife"), `<a class="small-button" href="#culinary-academy">Open Culinary Academy</a><a class="small-button secondary" href="#menu-intelligence">Menu Intelligence</a>`)}
    ${cookSubnav()}
    <section class="cream-section">
      <div class="section-heading">
        <p class="eyebrow">Learning levels</p>
        <h2>From kid-level confidence to professional kitchen thinking.</h2>
      </div>
      <div class="learning-level-grid">
        ${learningLevels.map((level) => `
          <article class="learning-level-card">
            <figure><img src="${level.image}" alt="${level.title}" /></figure>
            <div>
              <h3>${level.title}</h3>
              <p>${level.depth}</p>
              <div class="region-chip-row">${level.supports.map((item) => `<span>${item}</span>`).join("")}</div>
              <ul>${level.topics.map((topic) => `<li>${topic}</li>`).join("")}</ul>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="cream-section cook101-overview">
      <div class="section-heading">
        <p class="eyebrow">Beginner to confident</p>
        <h2>Core skills that make every recipe easier.</h2>
      </div>
      <div class="lesson-grid">${lessons.map(lessonCard).join("")}</div>
    </section>
    <section class="band cuisine-101-band">
      <div class="section-heading">
        <p class="eyebrow">Cuisine 101</p>
        <h2>Learn the building blocks behind each cooking style.</h2>
      </div>
      <div class="cook101-cuisine-grid">
        ${Object.entries(cuisine101).map(([id, lesson]) => `
          <article>
            <h3>${lesson.title}</h3>
            <p>${lesson.items.slice(0, 3).join(", ")}</p>
            <a class="small-button secondary" href="#cuisine/${id}">Explore Recipes</a>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderKidsCooking() {
  const kidPath = paths.find((path) => path.id === "kid-chefs");
  const kidRecipes = recipes.filter((recipe) => recipe.path === "kid-chefs" || recipe.skill_level === "Kid Chef" || recipe.tags?.includes("kid chefs"));
  app.innerHTML = `
    ${hero("Kids Kitchen", "A safe, joyful cooking space for Junior Chefs, Young Chefs, and Teen Chefs to build real kitchen confidence one small skill at a time.", photoFor("cuisines", "hosting", 2, "assets/kid-friendly.jpeg"), `<a class="small-button" href="#paths/kid-chefs">Open Kid Chef Path</a>`)}
    ${cookSubnav()}
    <section class="cream-section">
      <div class="about-layout">
        <article class="detail-panel">
          <p class="eyebrow">Kid Chef pathway</p>
          <h2>${kidPath?.title || "Start small. Build confidence."}</h2>
          <p class="detail-copy">${kidPath?.description || "PB&J, mac and cheese, wraps, pizza bagels, and snack plates help kids learn real kitchen rhythm without pressure."}</p>
          <ul>${(kidPath?.skills || ["Wash hands", "Measure ingredients", "Spread and assemble", "Stir carefully", "Clean as you go"]).map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
        <article class="detail-panel">
          <p class="eyebrow">Grown-up guide</p>
          <h2>Keep it safe and encouraging.</h2>
          <p class="detail-copy">Let kids own one small job at a time. Teach hand washing, counter cleanup, measuring, and tasting before sharp knives or hot pans.</p>
        </article>
      </div>
      <div class="section-heading">
        <p class="eyebrow">Age-based learning</p>
        <h2>Choose the lane that fits the child, not just the recipe.</h2>
      </div>
      <div class="academy-module-grid kids-level-grid">
        ${kidsKitchenLevels.map((level) => {
          const levelRecipes = level.recipes.map((recipeId) => recipes.find((recipe) => recipe.id === recipeId)).filter(Boolean);
          return `
            <article class="academy-module-card">
              <p class="eyebrow">${level.ages}</p>
              <h3>${level.title}</h3>
              <p>${level.focus}</p>
              <h4>Safety first</h4>
              <ul>${level.safety.map((item) => `<li>${item}</li>`).join("")}</ul>
              <h4>Skill badges</h4>
              <div class="path-badges">${level.badges.map((badge) => `<span>${badge}</span>`).join("")}</div>
              <p><strong>Challenge:</strong> ${level.challenge}</p>
              <div class="stack-list">${levelRecipes.map(compactRecipe).join("")}</div>
            </article>
          `;
        }).join("")}
      </div>
      <div class="section-heading">
        <p class="eyebrow">Kid-friendly recipes</p>
        <h2>Simple recipes with a clear grown-up safety role.</h2>
      </div>
      <div class="recipe-grid">${kidRecipes.map(recipeCard).join("")}</div>
    </section>
  `;
}

function missionValuesSection() {
  const values = ["Hospitality", "Learning", "Family flavor", "Confidence"];
  return `
    <section class="cream-section">
      <div class="mission-values">
        <div class="mv-header">
          <p class="eyebrow">Mission, vision, values</p>
          <h2>Cooking should feel welcoming, useful, and full of love.</h2>
          <p class="mv-tagline">Cook. Learn. Grow.</p>
        </div>
        <div class="mv-grid">
          <article class="mv-card">
            <span>Mission</span>
            <h3>Help home cooks build confidence.</h3>
            <p>Let's Cook Y'all brings recipes, lessons, hosting tools, and food videos into one warm kitchen where people can learn at their own pace.</p>
          </article>
          <article class="mv-card">
            <span>Vision</span>
            <h3>A digital kitchen for every kind of cook.</h3>
            <p>We are building a cozy learning space where families, beginners, and ambitious cooks can save recipes, plan meals, and grow their skills over time.</p>
          </article>
          <article class="mv-card values-card">
            <span>Core Values</span>
            <h3>Food with feeling.</h3>
            <div class="value-list">${values.map((value) => `<span>${value}</span>`).join("")}</div>
          </article>
        </div>
      </div>
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
        <h2>Cookable recipes with clear steps.</h2>
        <p>Use these cards for meals you can actually make: orange chicken, crab rangoon, yakamein, shrimp and grits, oxtails, wings, pasta, party boards, soups, and hosting dishes with ingredients, timing, and directions.</p>
      </div>
    </section>
    <section class="cream-section">
      <div class="recipe-grid">${personal.map(recipeCard).join("")}</div>
    </section>
  `;
}

function renderCook101() {
  app.innerHTML = `
    <section class="cook101-hero">
      <div>
        <p class="eyebrow">Cook 101</p>
        <h1>Learn the skills, then cook the recipe.</h1>
        <p>Safety, chopping, seasoning, heat, sauces, grains, prep, and hosting flow, all connected to real recipes you can practice right away.</p>
      </div>
      <div class="cook101-stats" aria-label="Cook 101 overview">
        <article><strong>${lessons.length}</strong><span>Core lessons</span></article>
        <article><strong>${Object.keys(cuisine101).length}</strong><span>Cuisine guides</span></article>
        <article><strong>Real</strong><span>Practice recipes</span></article>
      </div>
    </section>
    ${cookSubnav()}
    <section class="cream-section cook101-overview">
      <div class="section-heading">
        <p class="eyebrow">Build confidence first</p>
        <h2>Start with the skills that make every recipe easier.</h2>
      </div>
      <div class="lesson-grid">${lessons.map(lessonCard).join("")}</div>
    </section>
    <section class="band cuisine-101-band">
      <div class="section-heading">
        <p class="eyebrow">Cuisine 101</p>
        <h2>Learn the flavor foundations by culture and cooking style.</h2>
      </div>
      <div class="cook101-cuisine-grid">
        ${Object.entries(cuisine101).map(([id, lesson]) => `
          <article>
            <h3>${lesson.title}</h3>
            <p>${lesson.items.slice(0, 3).join(", ")}</p>
            <a class="small-button secondary" href="#cuisine/${id}">Explore Recipes</a>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderLesson(id) {
  const lesson = lessons.find((item) => item.id === id) || lessons[0];
  const lessonIndex = lessons.findIndex((item) => item.id === lesson.id);
  const previousLesson = lessons[(lessonIndex - 1 + lessons.length) % lessons.length];
  const nextLesson = lessons[(lessonIndex + 1) % lessons.length];
  const linkedRecipes = lesson.recipes.map((recipeId) => recipes.find((recipe) => recipe.id === recipeId)).filter(Boolean);
  app.innerHTML = `
    ${hero(lesson.title, lesson.text, academyPhotoFor(lesson.id) || lesson.image, `<a class="small-button" href="#cook101">All Basics</a>`)}
    ${cookSubnav()}
    <section class="cream-section">
      <article class="detail-panel lesson-detail">
        <p class="eyebrow">Cook 101 / ${lesson.level}</p>
        <h2>${lesson.title}</h2>
        <p class="detail-copy">${lesson.text}</p>
        <div class="detail-columns">
          <section><h3>Practice Steps</h3><ol>${lesson.steps.map((step) => `<li>${step}</li>`).join("")}</ol></section>
          <section><h3>Skills You Build</h3><ul>${lesson.skills.map((skill) => `<li>${skill}</li>`).join("")}</ul></section>
        </div>
      </article>
      <div class="section-heading lesson-recipes-heading">
        <p class="eyebrow">Practice recipes</p>
        <h2>Try the skill in a real kitchen moment.</h2>
      </div>
      <div class="recipe-grid">${linkedRecipes.map(recipeCard).join("")}</div>
      ${progressionNav(`#cook101/${previousLesson.id}`, previousLesson.title, `#cook101/${nextLesson.id}`, nextLesson.title, ["#culinary-academy", "#menu-intelligence"])}
    </section>
  `;
}

function renderRecipes() {
  const quickFilters = [
    ["Southern", "cuisine:southern"],
    ["Mexican", "cuisine:mexican"],
    ["Indian", "cuisine:indian"],
    ["Mediterranean", "cuisine:mediterranean"],
    ["Desserts", "category:Desserts"],
    ["Party Cups", "category:Party Cups"],
    ["Kid Friendly", "skill:Kid Chef"],
    ["Quick Meals", "category:Quick Meals"],
    ["Professional", "skill:Professional"]
  ];
  app.innerHTML = `
    ${hero("Recipes", "Southern classics, quick weeknight meals, global flavor, family dinners, beginner basics, party bites, and kid-friendly cooking.", photoFor("hero", "learning", 3, "assets/lc-pasta.jpg"))}
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
      <div class="quick-filter-row">${quickFilters.map(([label, value]) => `<button class="quick-filter" type="button" data-quick-filter="${value}">${label}</button>`).join("")}</div>
      <div id="learningResults" class="learning-search-results"></div>
    </section>
    <section class="cream-section"><div id="results" class="recipe-grid">${recipes.map(recipeCard).join("")}</div></section>
  `;
}

function renderRecipe(id) {
  const recipe = recipes.find((item) => item.id === id) || recipes[0];
  setShareMeta({
    title: `${recipe.title} | Let's Cook Ya'll`,
    description: recipe.description,
    image: recipePhotoFor(recipe)
  });
  const path = paths.find((item) => item.id === recipe.path);
  const cuisineLesson = cuisine101For(recipe.cuisine);
  const related = relatedRecipesFor(recipe);
  const otherCuisines = otherCuisinesFor(recipe.cuisine);
  const partyRecipePanel = recipe.partyCup ? `
    <section class="band party-cup-band">
      <div class="section-heading">
        <p class="eyebrow">Party Cups calculator</p>
        <h2>Scale ${recipe.title} by guest count.</h2>
        <p>Start with one cup per guest, then increase for long parties or light dinner replacements.</p>
      </div>
      <div class="party-calc-card" data-party-recipe="${recipe.id}">
        <div class="party-calc-controls">
          <label>Guests<input id="recipePartyGuests" type="number" min="1" max="500" value="24" /></label>
          <label>Cups per guest<input id="recipeCupsPerGuest" type="number" min="1" max="4" value="${recipe.cups_per_guest || 1}" /></label>
        </div>
        <div id="recipePartyResults">${partyRecipeResults(recipe, 24, recipe.cups_per_guest || 1)}</div>
      </div>
    </section>
  ` : "";
  app.innerHTML = `
    <section class="recipe-hero recipe-story-hero">
      <figure><img src="${recipePhotoFor(recipe)}" alt="${recipe.title}" /></figure>
      <div class="recipe-hero-copy">
        <p class="eyebrow">Let's Make</p>
        <h1>${recipe.title}</h1>
        <div class="script-accent">${recipeTagline(recipe)}</div>
        <p>${recipe.description}</p>
        <div class="recipe-facts">
          <span><small>Prep Time</small>${recipe.prep_time}</span>
          <span><small>Cook Time</small>${recipe.cook_time}</span>
          <span><small>Servings</small>${recipe.servings}</span>
          <span><small>Skill Level</small>${recipe.difficulty}</span>
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
          <h2>Gather everything first.</h2>
          <ul class="ingredient-checklist">${recipe.ingredients.map((item) => `<li><span>&#10003;</span>${item}</li>`).join("")}</ul>
        </article>
        ${recipeUtilityPanel(recipe)}
        <article class="detail-panel directions-panel recipe-steps-panel">
          <p class="eyebrow">How to make it</p>
          <h2>Cook it one calm step at a time.</h2>
          <div class="recipe-step-grid">${recipe.directions.map((item, index) => `
            <section class="recipe-step-card">
              <strong>${index + 1}</strong>
              <p>${item}</p>
            </section>
          `).join("")}</div>
        </article>
        <article class="detail-panel momma-panel">
          <p class="eyebrow">Tips from Momma</p>
          <ul>${(recipe.tips?.length ? recipe.tips : ["Taste as you go. A recipe is a guide, but your kitchen gets the final say.", "Set everything out before the heat comes on so cooking feels calm.", "Let cooked meat rest before serving so the juices stay where they belong."]).map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
        <article class="detail-panel recipe-learning-panel">
          <p class="eyebrow">What this teaches</p>
          <h2>Skills, storage, and reheating.</h2>
          <div class="detail-columns">
            <section><h3>Skills learned</h3><ul>${(recipe.skills_learned || []).map((item) => `<li>${item}</li>`).join("")}</ul></section>
            <section><h3>Storage</h3><p>${recipe.storage}</p><h3>Reheating</h3><p>${recipe.reheating}</p></section>
          </div>
        </article>
      </div>
    </section>
    ${partyRecipePanel}
    <section class="cream-section related-section">
      <div class="section-heading">
        <p class="eyebrow">${cuisineName(recipe.cuisine)} recommendations</p>
        <h2>More favorites in this flavor family.</h2>
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
    ${hero("Cooking Paths", "Choose the pace that fits your kitchen today: Kid Chefs, Amateur Home Chef, or Professional Mode.", photoFor("hero", "learning", 4, "assets/cooking-family.jpeg"))}
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
    ${hero(path.title, path.description, pathPhotoFor(path), `<a class="small-button" href="#paths">All Paths</a>`)}
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
        <div class="path-outcome-strip">${path.outcomes.map((outcome) => `<span>${outcome}</span>`).join("")}</div>
      </div>
    </section>
    <section class="cream-section path-recipe-section">
      <div class="section-heading">
        <p class="eyebrow">Start here</p>
        <h2>Practice recipes for ${path.title}.</h2>
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

function renderPlanner(id) {
  const plannedRecipes = recipes.filter((recipe) => planned.includes(recipe.id));
  const shoppingItems = [...new Set(plannedRecipes.flatMap((recipe) => recipe.ingredients))];
  const selectedIndex = Number.isFinite(Number(id)) ? Math.max(0, Math.min(menuPairings.length - 1, Number(id))) : 0;
  const selectedMenu = menuPairings[selectedIndex];
  const menuShoppingItems = menuShoppingList(selectedMenu);
  const menuRecipeCount = recipesForMenu(selectedMenu).length;
  const quickPlan = [
    { title: "Kid-friendly start", ids: ["pb-and-j-sandwich", "stovetop-mac-and-cheese", "fruit-kabobs"] },
    { title: "Weeknight dinner", ids: ["chicken-street-tacos", "cilantro-lime-rice", "greek-salad"] },
    { title: "Sunday comfort", ids: ["oxtails", "collard-greens", "cornbread"] }
  ];
  const featuredPlanRecipes = ["chicken-street-tacos", "caribbean-curry-chicken", "lemon-herb-salmon", "stovetop-mac-and-cheese"].map((id) => recipes.find((recipe) => recipe.id === id)).filter(Boolean);
  app.innerHTML = `
    ${hero("Meal Planner", "Answer the classic question: what can I cook? Choose a cuisine, occasion, and main dish, then get sides, bread, dessert, drinks, sauces, shopping list, prep timeline, and hosting notes.", photoFor("hero", "learning", 5, "assets/lc-orange-chicken.jpg"))}
    ${cookSubnav()}
    <section class="cream-section">
      <div class="planner-summary">
        <article><strong>${plannedRecipes.length}</strong><span>Meals planned</span></article>
        <article><strong>${shoppingItems.length + menuShoppingItems.length}</strong><span>Ingredients listed</span></article>
        <article><strong>${menuRecipeCount}</strong><span>Linked menu recipes</span></article>
        <article><strong>${saved.length}</strong><span>Saved recipes</span></article>
      </div>
      <article class="detail-panel menu-builder-section">
        <p class="eyebrow">Menu Planner</p>
        <h2>Build a full table from one main dish.</h2>
        <form class="menu-builder-form" data-menu-planner-form>
          <label>Cuisine<select name="cuisine">${[...new Set(menuPairings.map((menu) => menu.cuisine))].map((item) => `<option${item === selectedMenu.cuisine ? " selected" : ""}>${item}</option>`).join("")}</select></label>
          <label>Occasion<select name="occasion">${[...new Set(menuPairings.map((menu) => menu.occasion))].map((item) => `<option${item === selectedMenu.occasion ? " selected" : ""}>${item}</option>`).join("")}</select></label>
          <label>Main Dish<select name="main">${menuPairings.map((menu, index) => `<option value="${index}"${index === selectedIndex ? " selected" : ""}>${recipeLinksFor(menu.main_recipe_ids).map((link) => link.replace(/<[^>]+>/g, "")).join(" or ") || menu.main_dish}</option>`).join("")}</select></label>
          <button class="small-button" type="submit">Generate Menu</button>
        </form>
        ${menuPairingCard(selectedMenu)}
        <div class="planner-layout compact-planner-layout">
          <section class="academy-module-card"><h3>Shopping List</h3><ul>${menuShoppingItems.map((item) => `<li>${item}</li>`).join("")}</ul></section>
          <section class="academy-module-card"><h3>Prep Timeline</h3><p>${selectedMenu.hosting_notes}</p><ul><li>Two days before: choose menu and shop shelf-stable goods.</li><li>Day before: prep sauces, desserts, and cold sides.</li><li>Day of: cook the main, warm breads, finish fresh sides, and set drinks.</li></ul></section>
          <section class="academy-module-card"><h3>Alternate Recipes</h3><div class="recipe-link-list">${recipeLinksFor(selectedMenu.alternate_recipe_ids).join("") || "<span>Try another menu for alternates.</span>"}</div></section>
        </div>
      </article>
      <div class="planner-layout">
        <article class="detail-panel">
          <p class="eyebrow">Start fast</p>
          <h2>Pick a plan that already makes sense.</h2>
          <div class="planner-preset-grid">${quickPlan.map((plan) => `
            <section>
              <h3>${plan.title}</h3>
              <ul>${plan.ids.map((id) => `<li>${recipes.find((recipe) => recipe.id === id)?.title || id}</li>`).join("")}</ul>
              <a class="small-button secondary" href="#recipes">Browse recipes</a>
            </section>
          `).join("")}</div>
        </article>
        <article class="detail-panel">
          <p class="eyebrow">This week</p>
          <h2>This Week</h2>
          <div class="stack-list">${plannedRecipes.length ? plannedRecipes.map(compactRecipe).join("") : featuredPlanRecipes.map(compactRecipe).join("")}</div>
        </article>
        <article class="detail-panel">
          <p class="eyebrow">Shop once</p>
          <h2>Shopping List</h2>
          <ul class="shopping-list">${shoppingItems.length ? shoppingItems.map((item) => `<li>${item}</li>`).join("") : menuShoppingItems.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
      </div>
    </section>
  `;
}

function hostingGuideFor(id) {
  const normalized = slugify(decodeURIComponent(id || ""));
  const idea = hostingIdeas.find((item) => slugify(item.title) === normalized)
    || hostingKnowledge.find((item) => slugify(item.title) === normalized)
    || hostingIdeas[0];
  const recipeIds = idea.recipes || recipesForMenu(menuPairings[0]).map((recipe) => recipe.id);
  const guideRecipes = recipeIds.map((recipeId) => recipeById(recipeId)).filter(Boolean);
  const shopping = [...new Set(guideRecipes.flatMap((recipe) => recipe.ingredients || []).slice(0, 18))];
  return {
    title: idea.title,
    text: idea.text,
    timing: idea.timing || "Write the menu first, prep what can be chilled or held, then save hot/fresh items for last.",
    setup: idea.setup || ["Label dishes clearly", "Set serving utensils early", "Create drink and trash stations", "Keep one helper assigned to refills"],
    recipes: guideRecipes,
    shopping,
    serving: ["Use shallow serving dishes so food looks generous.", "Group sauces and condiments together.", "Keep hot foods hot and cold foods cold.", "Place napkins, cups, plates, and trash bags before guests arrive."]
  };
}

function renderHostingDetail(id) {
  const guide = hostingGuideFor(id);
  app.innerHTML = `
    ${hero(guide.title, guide.text, photoFor("cuisines", "hosting", 3, "assets/lc-desserts.jpg"), `<a class="small-button" href="#hosting">All Hosting</a><a class="small-button secondary" href="#menu-intelligence">Build A Menu</a>`)}
    ${cookSubnav()}
    <section class="cream-section hosting-detail-page">
      <div class="academy-module-grid">
        <article class="academy-module-card">
          <h3>Sample Menu</h3>
          <div class="stack-list">${guide.recipes.length ? guide.recipes.map(compactRecipe).join("") : `<p>${guide.text}</p>`}</div>
        </article>
        <article class="academy-module-card">
          <h3>Shopping List</h3>
          <ul>${guide.shopping.length ? guide.shopping.map((item) => `<li>${item}</li>`).join("") : ["paper goods", "ice", "drinks", "main dish ingredients", "side dish ingredients", "dessert"].map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
        <article class="academy-module-card">
          <h3>Prep Timeline</h3>
          <p>${guide.timing}</p>
          <ul><li>Two days before: shop and check serving pieces.</li><li>Day before: prep sauces, desserts, cold sides, and labels.</li><li>Day of: cook hot dishes, set drink station, warm breads last.</li></ul>
        </article>
        <article class="academy-module-card">
          <h3>Serving Suggestions</h3>
          <ul>${guide.serving.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
        <article class="academy-module-card">
          <h3>Setup Checklist</h3>
          <ul>${guide.setup.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
      </div>
      ${progressionNav("#hosting", "All Hosting Guides", "#menu-intelligence", "Menu Builder", ["#culinary-academy/professional-skills", "#recipes"])}
    </section>
  `;
}

function renderHosting(id) {
  if (id) return renderHostingDetail(id);
  const cups = partyCupRecipes();
  const initialPlan = partyPlanFor(24, "all");
  app.innerHTML = `
    ${hero("Hosting & Entertaining", "Party cups, menu flow, shopping lists, and warm little details for making guests feel cared for.", photoFor("cuisines", "hosting", 4, "assets/lc-desserts.jpg"))}
    ${cookSubnav()}
    <section class="cream-section">
      <div class="section-heading">
        <p class="eyebrow">Party Cups</p>
        <h2>Individual cups that make hosting easier.</h2>
        <p>Build charcuterie, fruit, dessert, brunch, tailgate, or holiday cups and scale quantities automatically by guest count.</p>
      </div>
      <div class="party-cup-grid">${cups.map((recipe) => `
        <article class="party-cup-card">
          <a href="#recipes/${recipe.id}"><img src="${recipePhotoFor(recipe)}" alt="${recipe.title}" /></a>
          <div>
            <p class="eyebrow">${recipe.category}</p>
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
            <div class="party-cost-row">
              <span>${money(recipe.cost_per_cup)} per cup</span>
              <span>${money(recipe.cost_per_guest)} per guest</span>
            </div>
            <a class="small-button" href="#recipes/${recipe.id}">View Cup Recipe</a>
          </div>
        </article>
      `).join("")}</div>
    </section>
    <section class="band party-planner-band">
      <div class="section-heading">
        <p class="eyebrow">Party Planning</p>
        <h2>Enter guest count. Get quantities.</h2>
        <p>Choose one cup style or plan a mixed cup table. The calculator estimates total cups, cost, and a shopping list.</p>
      </div>
      <div class="party-planner-shell">
        <div class="party-calc-controls">
          <label>Guest count<input id="partyGuestCount" type="number" min="1" max="500" value="24" /></label>
          <label>Cup style<select id="partyCupSelect"><option value="all">Mixed Party Cups</option>${cups.map((recipe) => `<option value="${recipe.id}">${recipe.title}</option>`).join("")}</select></label>
        </div>
        <div id="partyPlannerResults">
          <div class="party-result-summary">
            <article><strong>24</strong><span>Guests</span></article>
            <article><strong>${initialPlan.totalCups}</strong><span>Total cups</span></article>
            <article><strong>${money(initialPlan.totalCost)}</strong><span>Estimated total</span></article>
            <article><strong>${money(initialPlan.totalCost / 24)}</strong><span>Cost per guest</span></article>
          </div>
          <div class="party-shopping-list">
            <h3>Generated shopping list</h3>
            <ul>${initialPlan.items.map((item) => `<li><strong>${formatAmount(item.total)}</strong> ${item.unit} ${item.item}</li>`).join("")}</ul>
          </div>
        </div>
      </div>
    </section>
    <section class="cream-section">
      <div class="section-heading">
        <p class="eyebrow">Hosting menus</p>
        <h2>Keep the rest of the table calm too.</h2>
      </div>
      <div class="hosting-grid">${hostingIdeas.map((idea) => `
        <article class="detail-panel">
          <p class="eyebrow">Hosting menu</p>
          <h2>${idea.title}</h2>
          <p class="detail-copy">${idea.text}</p>
          <div class="hosting-note"><strong>Timing:</strong> ${idea.timing}</div>
          <ul class="hosting-checklist">${idea.setup.map((item) => `<li>${item}</li>`).join("")}</ul>
          <div class="stack-list">${idea.recipes.map((id) => compactRecipe(recipes.find((recipe) => recipe.id === id))).join("")}</div>
          <a class="small-button secondary" href="#hosting/${slugify(idea.title)}">Open Hosting Guide</a>
        </article>
      `).join("")}</div>
    </section>
    <section class="gold-section">
      <div class="section-heading">
        <p class="eyebrow">More hosting situations</p>
        <h2>Every gathering gets a guide, not a dead end.</h2>
      </div>
      <div class="hosting-knowledge-grid">
        ${hostingKnowledge.map((item) => `<a href="#hosting/${slugify(item.title)}"><article><h3>${item.title}</h3><p>${item.text}</p><span>${item.pairing}</span></article></a>`).join("")}
      </div>
    </section>
  `;
}

function renderAbout() {
  app.innerHTML = `
    ${hero("Brent & Co. Kitchen", "Let's Cook Ya'll is the cooking-skills corner of Brent & Co.: polished, practical, warm, and rooted in hospitality.", photoFor("hero", "hospitality", 6, "assets/lc-mediterranean-food.jpg"))}
    ${cookSubnav()}
    ${missionValuesSection()}
    <section class="cream-section">
      <div class="founder-story-card">
        <figure><img src="assets/founder-shalanda-brent.png" alt="Shalanda Brent, Founder and CEO of Brent & Co" /></figure>
        <article>
          <p class="eyebrow">Founder & CEO, Brent & Co</p>
          <h2>Shalanda Brent</h2>
          <h3>Veteran. Builder. Designer. Founder.</h3>
          <p>Shalanda Brent is a U.S. Army veteran, software developer, UX designer, and founder of Brent & Co. She builds digital platforms that connect people to opportunity, creativity, and community through workforce development, music technology, and culinary education.</p>
          <p>Shalanda Brent is the founder and CEO of Brent & Co, a venture studio focused on building practical technology that improves lives. A veteran, software developer, UX designer, and entrepreneur, she created Find The Beat, Let’s Cook Y’all, and Second Chance Careers to help people connect, create, learn, and grow. Her work combines technology, community, and real-world problem solving to create platforms that serve everyday people.</p>
          <blockquote>I built Brent & Co because I know what it feels like to start over, rebuild, and create something from the ground up. These platforms were created for real people with real needs — people looking for work, people looking for creative connection, and people looking for community. I didn’t wait for permission. I built it. Now I’m focused on making sure it reaches the people it was built for.</blockquote>
          <a class="small-button" ${linkAttrs("https://www.brentandco.org/about.html#about-founder")}>Learn More About Brent & Co</a>
        </article>
      </div>
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
    ${hero("Your Let's Cook Account", "Save recipes, track lesson progress, keep your profile picture, and upload food videos from your own kitchen.", photoFor("hero", "learning", 7, "assets/lc-asian-food.jpg"))}
    ${cookSubnav()}
    <section class="cream-section">
      <div class="account-layout">
        <article class="account-panel">
          <h2>${letsCookSession.authenticated ? "Kitchen Profile" : "Create Your Kitchen Profile"}</h2>
          <p>${letsCookSession.authenticated ? `Signed in as ${escapeHTML(user.email || "")}. Your saved recipes, meal plan, lesson progress, and food videos are backed by the Let's Cook database.` : "Create an account so your favorites, progress, profile picture, and food videos are saved beyond this browser."}</p>
          ${status}
          ${letsCookSession.authenticated ? `
            <div class="account-profile-head">
              ${accountAvatar(user)}
              <div>
                <p class="eyebrow">${escapeHTML(user.role || "Home Cook")}</p>
                <h2>${escapeHTML(user.displayName || "Home Cook")}</h2>
                ${officialBadges ? `<div class="founder-badges">${officialBadges}</div>` : ""}
              </div>
            </div>
            <div class="empty-state">
              <strong>Profile ${Number(user.profileCompletion || 0)}% Complete</strong>
              <div class="completion-meter" aria-label="Profile completion"><span style="width:${Math.min(100, Number(user.profileCompletion || 0))}%"></span></div>
              <p class="helper-text">${Number(user.profileCompletion || 0) >= 100 ? "Your kitchen profile is ready." : "Add your photo, bio, city/state, cook type, videos, and details when you are ready."}</p>
            </div>
            <form class="profile-form" data-lets-profile-form>
              <label>Display name<input name="displayName" value="${escapeHTML(user.displayName || "")}" required /></label>
              <label>Username<input name="username" value="${escapeHTML(user.username || "")}" placeholder="shay-kitchen" /></label>
              <label>Bio<textarea name="bio" placeholder="Tell people what you love to cook.">${escapeHTML(user.bio || "")}</textarea></label>
              <label>City<input name="city" value="${escapeHTML(user.city || "")}" /></label>
              <label>State<input name="state" value="${escapeHTML(user.state || "")}" /></label>
              <label>Account type<input name="accountType" value="${escapeHTML(user.accountType || "")}" placeholder="Home Cook" /></label>
              <label>Profile picture<input name="photo" type="file" accept="image/*" /></label>
              <a class="small-button secondary" href="/profile/${encodeURIComponent(user.username || user.id || "")}">View Public Profile</a>
              <a class="small-button secondary" href="/settings">Settings</a>
              <button class="small-button" type="submit">Save Profile</button>
            </form>
            <form class="profile-form" data-lets-logout-form>
              <button class="small-button secondary" type="submit">Log Out</button>
            </form>
            ${user.isAdmin ? `<a class="small-button" href="/admin">Open Admin Dashboard</a>` : ""}
          ` : `
            <form class="profile-form" data-lets-signup-form>
              <label>Email<input name="email" type="email" placeholder="you@example.com" required /></label>
              <label>Password<input name="password" type="password" minlength="8" placeholder="At least 8 characters" required /></label>
              <p class="helper-text">Create your account first. Cooking level, favorite cuisines, and dietary preferences can come later.</p>
              <button class="small-button" type="submit">Create Account</button>
            </form>
            <form class="profile-form" data-lets-login-form>
              <label>Email<input name="email" type="email" required /></label>
              <label>Password<input name="password" type="password" required /></label>
              <button class="small-button secondary" type="submit">Log In</button>
            </form>
            <div class="oauth-prep">
              <p class="eyebrow">Brent & Co single sign-on</p>
              <a class="small-button" href="/sso/login?next=%2F%23account">Continue with Google</a>
              <a class="small-button secondary" href="/sso/login?next=%2F%23account">Continue with Apple</a>
              <button class="small-button secondary" type="button" disabled>Continue with Facebook</button>
              <a class="small-button secondary" href="/sso/login?next=%2F%23account">Continue with Brent Account</a>
            </div>
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
  const cuisineId = canonicalCuisineId(id);
  const cuisine = cuisines.find((item) => item.id === cuisineId) || cuisines[0];
  const cuisineRecipes = recipesForCuisine(cuisine.id, 18);
  const education = cuisineEducationProfiles[cuisine.id] || cuisineEducationProfiles.global || {
    culture: cuisine.blurb,
    ingredients: ["salt", "acid", "fat", "heat", "fresh herbs"],
    techniques: ["taste as you go", "prep before cooking", "balance texture", "season in layers"],
    menus: ["one main, one vegetable, one starch, one sauce, one drink"]
  };
  app.innerHTML = `
    ${hero(cuisine.name, cuisine.blurb, cuisine.image)}
    ${cookSubnav()}
    <section class="cream-section">
      <div class="section-heading">
        <p class="eyebrow">${cuisine.name}</p>
        <h2>Learn the culture, ingredients, techniques, and recipes.</h2>
        <p>${education.culture}</p>
      </div>
      <div class="academy-module-grid cuisine-learning-grid">
        <article class="academy-module-card"><h3>Key Ingredients</h3><ul>${education.ingredients.map((item) => `<li>${item}</li>`).join("")}</ul></article>
        <article class="academy-module-card"><h3>Core Techniques</h3><ul>${education.techniques.map((item) => `<li>${item}</li>`).join("")}</ul></article>
        <article class="academy-module-card"><h3>Menu Ideas</h3><ul>${education.menus.map((item) => `<li>${item}</li>`).join("")}</ul></article>
      </div>
      <div class="section-heading">
        <p class="eyebrow">Cook this cuisine</p>
        <h2>Recipe choices that belong here.</h2>
      </div>
      <div class="recipe-grid">${cuisineRecipes.map(recipeCard).join("")}</div>
      <div class="next-step-strip">
        <a class="small-button secondary" href="${cuisineGuideRoute(cuisine.id)}">Open Cuisine Guide</a>
        <a class="small-button secondary" href="#menu-intelligence">Build A Menu</a>
        <a class="small-button secondary" href="#culinary-academy/world-foods">World Foods Lesson</a>
      </div>
    </section>
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
      <img src="${pathPhotoFor(path)}" alt="" />
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
  return `
    <article class="lesson-card">
      <figure><img src="${academyPhotoFor(lesson.id)}" alt="" /></figure>
      <div>
        <p class="eyebrow">${lesson.level}</p>
        <h3>${lesson.title}</h3>
        <p>${lesson.text}</p>
        <div class="lesson-skill-row">${lesson.skills.slice(0, 3).map((skill) => `<span>${skill}</span>`).join("")}</div>
        <a class="small-button secondary" href="#cook101/${lesson.id}">Start Lesson</a>
      </div>
    </article>`;
}

function recipeCard(recipe) {
  const isPersonal = personalRecipeIds.includes(recipe.id);
  return `
    <article class="recipe-card">
      <a class="recipe-photo" href="#recipes/${recipe.id}"><img src="${recipePhotoFor(recipe)}" alt="${recipe.title}" /></a>
      <div class="recipe-content">
        <div class="recipe-card-topline">
          ${isPersonal ? `<span>Shay's Kitchen</span>` : `<span>${cuisineName(recipe.cuisine)}</span>`}
          <span>${recipe.skill_level}</span>
        </div>
        <h3>${recipe.title}</h3>
        <div class="recipe-mini-meta">
          <span>${recipeDuration(recipe)}</span>
          <span>${recipe.difficulty}</span>
          <span>${recipe.servings} servings</span>
        </div>
        <p>${recipe.description}</p>
        <div class="ingredient-preview"><strong>Ingredients:</strong> ${recipe.ingredients.slice(0, 4).join(", ")}</div>
        <div class="card-actions"><a class="small-button" href="#recipes/${recipe.id}">View Recipe</a><button class="small-button secondary" data-save="${recipe.id}">${saved.includes(recipe.id) ? "Saved" : "&#9825; Save"}</button>${recipe.video_url ? `<a class="small-button secondary" href="${recipe.video_url}" target="_blank" rel="noreferrer">&#9654; Watch</a>` : ""}</div>
      </div>
    </article>
  `;
}

function personalRecipes() {
  return personalRecipeIds.map((id) => recipes.find((recipe) => recipe.id === id)).filter(Boolean);
}

function compactRecipe(recipe) {
  if (!recipe) return "";
  return `<div class="compact-recipe"><img src="${recipePhotoFor(recipe)}" alt="" /><div><strong>${recipe.title}</strong><span>${recipe.time} / ${recipe.level}</span></div><button class="small-button secondary" data-plan="${recipe.id}">${planned.includes(recipe.id) ? "Remove" : "Plan"}</button></div>`;
}

function applyRecipeDatabase(database) {
  if (!database?.recipes?.length) return;
  const bundledRecipes = recipes.map((recipe) => ({ ...recipe }));
  categories = database.categories || categories;
  if (!categories.includes("Party Cups")) categories = [...categories, "Party Cups"];
  personalRecipeIds = database.collections?.shaysKitchen || personalRecipeIds;
  const loadedRecipes = database.recipes.map((recipe) => ({
    id: recipe.id,
    title: recipe.title,
    slug: recipe.slug,
    cuisine: recipe.cuisine,
    category: recipe.category,
    image: recipe.image || recipe.image_url || "assets/logo.png",
    image_url: recipe.image_url || recipe.image || "assets/logo.png",
    time: recipe.cookTime || `${recipe.cookTimeMinutes || 0} min`,
    cookTime: recipe.cookTime || recipe.cook_time,
    cook_time: recipe.cook_time || recipe.cookTime,
    cookTimeMinutes: recipe.cookTimeMinutes,
    skill_level: recipe.skill_level || recipe.skillLevel,
    prepTime: recipe.prepTime || recipe.prep_time,
    prep_time: recipe.prep_time || recipe.prepTime,
    prepTimeMinutes: recipe.prepTimeMinutes,
    level: recipe.difficulty,
    difficulty: recipe.difficulty,
    servings: recipe.servings,
    path: recipe.path || "amateur-home-chef",
    description: recipe.description,
    ingredients: recipe.ingredients || [],
    structured_ingredients: recipe.structured_ingredients || recipe.ingredients_structured || [],
    ingredients_structured: recipe.ingredients_structured || recipe.structured_ingredients || [],
    steps: recipe.instructions || recipe.directions || [],
    directions: recipe.directions || recipe.instructions || [],
    instructions: recipe.instructions || recipe.directions || [],
    tags: recipe.tags || [],
    cultural_variations: recipe.cultural_variations || [],
    video_url: recipe.video_url || recipe.videoUrl || "",
    videoUrl: recipe.videoUrl || recipe.video_url || "",
    related_recipe_ids: recipe.related_recipe_ids || recipe.relatedRecipeIds || [],
    featured: Boolean(recipe.featured),
    chefNotes: recipe.chefNotes || "",
    equipment: recipe.equipment || [],
    tips: recipe.tips || [],
    makeAhead: recipe.makeAhead || "",
    servingIdeas: recipe.servingIdeas || [],
    source: recipe.source || { type: "internal" },
    partyCup: Boolean(recipe.partyCup),
    cost_per_cup: recipe.cost_per_cup || recipe.costPerCup || 0,
    cost_per_guest: recipe.cost_per_guest || recipe.costPerGuest || 0,
    cups_per_guest: recipe.cups_per_guest || recipe.cupsPerGuest || 1,
    shopping_items: recipe.shopping_items || recipe.shoppingItems || []
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

function learningSearchResults(query) {
  if (!query) return "";
  const normalized = query.toLowerCase();
  const results = [
    ...academyModules
      .filter((module) => [module.title, module.category, module.overview, ...module.keyConcepts].join(" ").toLowerCase().includes(normalized))
      .slice(0, 3)
      .map((module) => ({ type: "Lesson", title: module.title, text: module.overview, href: `#culinary-academy/${module.id}` })),
    ...foodEncyclopedia
      .filter((entry) => [entry.term, entry.origin, entry.purpose, ...(entry.related || [])].join(" ").toLowerCase().includes(normalized))
      .slice(0, 3)
      .map((entry) => ({ type: "Food Term", title: entry.term, text: entry.purpose, href: `#culinary-academy/${slugify(entry.term)}` })),
    ...cuisineExplorerGroups
      .filter((group) => [group.title, group.note, ...group.regions].join(" ").toLowerCase().includes(normalized))
      .slice(0, 2)
      .map((group) => ({ type: "Cuisine", title: group.title, text: group.note, href: `#cuisine-explorer/${group.id}` })),
    ...menuPairings
      .filter((menu) => [menu.cuisine, menu.occasion, menu.main_dish, menu.cultural_notes, ...menu.traditional_sides].join(" ").toLowerCase().includes(normalized))
      .slice(0, 2)
      .map((menu) => ({ type: "Menu Guide", title: menu.main_dish, text: `${menu.cuisine} / ${menu.occasion}`, href: `#menu-intelligence/${menuPairings.indexOf(menu)}` })),
    ...hostingIdeas
      .filter((idea) => [idea.title, idea.text, ...(idea.setup || [])].join(" ").toLowerCase().includes(normalized))
      .slice(0, 2)
      .map((idea) => ({ type: "Hosting", title: idea.title, text: idea.text, href: `#hosting/${slugify(idea.title)}` }))
  ];
  if (!results.length) return "";
  return `
    <div class="academy-search-results">
      <h3>Learning results</h3>
      <div class="academy-result-grid">
        ${results.map((item) => `<a href="${item.href}"><span>${item.type}</span><strong>${item.title}</strong><p>${item.text}</p></a>`).join("")}
      </div>
    </div>
  `;
}

function handleSearch(event) {
  renderPartyPlannerResults();
  renderRecipePartyResults();
  const query = document.querySelector("#searchBox")?.value.toLowerCase().trim() || "";
  const pantry = document.querySelector("#pantryBox")?.value.toLowerCase().split(",").map((item) => item.trim()).filter(Boolean) || [];
  const category = document.querySelector("#categoryFilter")?.value || "";
  const cuisine = document.querySelector("#cuisineFilter")?.value || "";
  const maxTime = Number(document.querySelector("#timeFilter")?.value || 0);
  const level = document.querySelector("#levelFilter")?.value || "";
  const quick = document.querySelector(".quick-filter.active")?.dataset.quickFilter || "";
  const results = recipes.filter((recipe) => {
    const ingredientText = recipe.ingredients.join(" ").toLowerCase();
    const tagText = (recipe.tags || []).join(" ").toLowerCase();
    const haystack = `${recipe.title} ${recipe.category} ${recipe.level} ${recipe.difficulty || ""} ${recipe.description} ${ingredientText} ${tagText}`.toLowerCase();
    const hasPantryItems = !pantry.length || pantry.every((item) => ingredientText.includes(item));
    const quickMatch = !quick
      || (quick.startsWith("cuisine:") && recipe.cuisine === quick.replace("cuisine:", ""))
      || (quick.startsWith("category:") && (recipe.category === quick.replace("category:", "") || recipe.tags?.includes(quick.replace("category:", ""))))
      || (quick.startsWith("skill:") && recipe.skill_level === quick.replace("skill:", ""));
    return quickMatch
      && (!query || haystack.includes(query))
      && hasPantryItems
      && (!category || recipe.category === category || recipe.tags?.includes(category))
      && (!cuisine || recipe.cuisine === cuisine)
      && (!maxTime || (recipe.cookTimeMinutes || 999) <= maxTime)
      && (!level || recipe.level === level || recipe.difficulty === level);
  });
  const resultsNode = document.querySelector("#results");
  if (resultsNode) {
    resultsNode.innerHTML = results.length ? results.map(recipeCard).join("") : `<div class="empty-state">No recipes found yet.</div>`;
  }
  const learningNode = document.querySelector("#learningResults");
  if (learningNode) learningNode.innerHTML = learningSearchResults(query || pantry[0] || "");
}

function handleClick(event) {
  const quickFilter = event.target.closest("[data-quick-filter]");
  const saveButton = event.target.closest("[data-save]");
  const planButton = event.target.closest("[data-plan]");
  const printButton = event.target.closest("[data-print-recipe]");
  if (quickFilter) {
    document.querySelectorAll(".quick-filter").forEach((button) => button.classList.toggle("active", button === quickFilter && !button.classList.contains("active")));
    handleSearch();
    return;
  }
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
  if (printButton) {
    window.print();
  }
}


async function handleSubmit(event) {
  if (event.target.matches("[data-encyclopedia-form], [data-academy-form]")) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const term = formData.get("term")?.toString().trim() || "";
    window.location.hash = term ? `#culinary-academy/${encodeURIComponent(term)}` : "#culinary-academy";
    return;
  }

  if (event.target.matches("[data-ingredient-form]")) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const ingredient = formData.get("ingredient")?.toString().trim() || "chicken strips";
    window.location.hash = `#kitchen-search/${encodeURIComponent(ingredient)}`;
    return;
  }

  if (event.target.matches("[data-menu-builder-form]")) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const selected = Number(formData.get("main"));
    window.location.hash = `#menu-intelligence/${Number.isFinite(selected) ? selected : 0}`;
    return;
  }

  if (event.target.matches("[data-menu-planner-form]")) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const selected = Number(formData.get("main"));
    window.location.hash = `#planner/${Number.isFinite(selected) ? selected : 0}`;
    return;
  }

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
      body: JSON.stringify({
        displayName: formData.get("displayName")?.toString().trim(),
        username: formData.get("username")?.toString().trim(),
        bio: formData.get("bio")?.toString().trim(),
        city: formData.get("city")?.toString().trim(),
        state: formData.get("state")?.toString().trim(),
        accountType: formData.get("accountType")?.toString().trim()
      })
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
  return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function userInitials(user = {}) {
  const name = user.displayName || user.fullName || user.email || "SB";
  return name.replace("/", " ").split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase() || "SB";
}

function accountAvatar(user = {}, className = "profile-avatar") {
  const src = user.avatarUrl || user.profilePic || "";
  return src
    ? `<img class="${className}" src="${escapeHTML(src)}" alt="${escapeHTML(user.displayName || "Profile picture")}" />`
    : `<div class="${className} initials-avatar" aria-label="${escapeHTML(user.displayName || "Profile")}">${escapeHTML(user.initials || userInitials(user))}</div>`;
}

Promise.all([loadRecipeDatabase(), loadLetsCookState()]).finally(render);
