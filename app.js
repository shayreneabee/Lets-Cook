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
    description: "Southern fresh meets global flavor through recipes, Cook 101 lessons, the Let's Cook Y'all kitchen, hosting ideas, and meal planning.",
    route: "#lets-cook",
    externalUrl: liveAppUrls.letsCook,
    status: "Launch ready",
    links: [
      ["Open Let's Cook", liveAppUrls.letsCook],
      ["Let's Cook Y'all Kitchen", "#kitchen"]
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
    title: "Kids Korner",
    eyebrow: "Junior chefs, big kitchen joy",
    level: "Beginner",
    image: "assets/kid-friendly.jpeg",
    description: "Bright, simple recipes, games, activities, and Junior Chef badges for young cooks and their grown-ups.",
    promise: "Make the kitchen feel playful, safe, colorful, and confidence-building from the very first recipe.",
    pace: "10-25 minute adventures",
    focus: "Snack plates, mini pizzas, cookies, badges, games, and simple family recipes",
    badges: ["Junior Chef", "Let's Cook!", "Family guided"],
    steps: ["Wash hands and set up a cheerful station", "Practice spreading, stirring, measuring, mixing, and tasting", "Earn badges with mini pizzas, snack plates, cookies, and simple meals"],
    modules: [
      { title: "Kitchen Safety Quest", text: "Hand washing, clean counters, safe tools, and grown-up help around heat." },
      { title: "Build & Decorate", text: "PB&J, snack plates, mini sandwiches, colorful toppings, and food kids can proudly serve." },
      { title: "Stir, Scoop & Sprinkle", text: "Mac and cheese, oatmeal, eggs, cookie decorating, and safe heat skills with grown-up help." },
      { title: "Junior Chef Badges", text: "Little wins for trying, helping, cleaning up, tasting, and learning kitchen words." }
    ],
    skills: ["Wash and prep a station", "Measure dry and wet ingredients", "Mix without overworking", "Use kid-safe tools", "Taste and describe flavor"],
    outcomes: ["Make a no-cook lunch", "Earn a Junior Chef badge", "Build a colorful snack plate"],
    recipes: ["pb-and-j-sandwich", "stovetop-mac-and-cheese", "mini-pizza-bagels", "fruit-kabobs", "soft-scrambled-eggs"]
  },
  {
    id: "amateur-home-chef",
    title: "Home Cook",
    eyebrow: "The heart of the kitchen",
    level: "Beginner to Intermediate",
    image: "assets/cooking-family.jpeg",
    description: "Warm, practical cooking for weeknight dinners, comfort food, holidays, meal planning, and family favorites.",
    promise: "Turn everyday cooking into something calmer, cozier, tastier, and easier to share.",
    pace: "25-45 minute lessons",
    focus: "Weeknight meals, comfort food, meal planning, sides, holidays, and confidence",
    badges: ["Weeknight Comfort", "Family Table", "Meal Planner"],
    steps: ["Learn seasoning and timing", "Cook proteins without guessing", "Plan two or three meals ahead for your real life"],
    modules: [
      { title: "Season With Sense", text: "Salt, acid, herbs, spice, and how to fix food that tastes flat." },
      { title: "Weeknight Comfort", text: "Chicken, shrimp, salmon, ground meats, pasta, casseroles, and sides without panic." },
      { title: "Dinner Flow", text: "Prep order, grocery rhythm, leftovers, sauces, and getting everything hot at the same time." },
      { title: "Family & Holiday Favorites", text: "The cozy dishes people ask for again: Sunday dinner, cookouts, potlucks, and celebration tables." }
    ],
    skills: ["Build a balanced plate", "Season in layers", "Read doneness cues", "Prep ahead", "Save leftovers with purpose"],
    outcomes: ["Cook one confident weeknight dinner", "Plan a family meal", "Make one side without a box"],
    recipes: ["chicken-street-tacos", "lemon-herb-salmon", "cajun-cream-salmon-rotini", "shrimp-and-grits-green-beans", "chicken-parmesan"]
  },
  {
    id: "professional-mode",
    title: "Chef's Table",
    eyebrow: "A seat at the table",
    level: "Advanced",
    image: "assets/ingredients.jpeg",
    description: "An elegant studio for advanced techniques, plating inspiration, regional specialties, seasonal menus, and challenges.",
    promise: "Practice the rhythm, organization, and finishing touches that make food feel restaurant-level without losing warmth.",
    pace: "45-90 minute sessions",
    focus: "Mise en place, sauces, braises, plating, multi-course menus, and seasonal challenges",
    badges: ["Technique Lab", "Plating Polish", "Seasonal Menu"],
    steps: ["Prep like a calm chef", "Build sauces, reductions, braises, and layered flavor", "Plate, host, and serve with confidence"],
    modules: [
      { title: "Mise En Place", text: "Prep lists, stations, timing, and the calm that comes from being ready." },
      { title: "Sauce & Braise Lab", text: "Roux, pan sauces, reductions, slow cooking, and flavor concentration." },
      { title: "Plate & Host", text: "Finishing salt, garnish, contrast, serving flow, and table timing." },
      { title: "Seasonal Challenges", text: "Regional specialties, fine-dining inspiration, and multi-course menus that feel earned." }
    ],
    skills: ["Write a prep list", "Build a sauce base", "Control heat and reduction", "Plate with contrast", "Host without rushing"],
    outcomes: ["Write a prep timeline", "Build a seasonal menu", "Plate and serve without rushing"],
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
  southern: "images/recipes/audit-2026-06/southern-crispy-fried-chicken.jpg",
  "soul-food": "images/recipes/audit-2026-06/shrimp-and-grits.jpg",
  creole: "images/recipes/audit-2026-06/creole-seafood-gumbo.jpg",
  cajun: "images/recipes/audit-2026-06/cajun-jambalaya.jpg",
  bbq: "images/recipes/audit-2026-06/kansas-city-ribs.jpg",
  "low-country": "images/regional/frogmore-stew.png",
  "mississippi-favorites": "images/regional/mississippi-buffalo-fish.png",
  mexican: "images/recipes/audit-2026-06/birria-style-tacos.jpg",
  indian: "images/recipes/audit-2026-06/butter-chicken.jpg",
  caribbean: "images/recipes/generated-2026-07/caribbean-cuisine-hub.png",
  mediterranean: "images/recipes/audit-2026-06/greek-salad.jpg",
  "asian-inspired": "images/recipes/generated-2026-07/asian-cuisine-hub-market.png",
  italian: "images/recipes/audit-2026-06/chicken-parmesan.jpg",
  hosting: "images/recipes/audit-2026-06/charcuterie-boards.jpg",
  global: "images/cuisines/africa/nigeria/jollof-rice.jpg",
  nigerian: "images/cuisines/africa/nigeria/jollof-rice.jpg",
  ghanaian: "images/cuisines/africa/ghana/waakye.jpg",
  ethiopian: "images/cuisines/africa/ethiopia/doro-wat.jpg",
  moroccan: "images/cuisines/africa/morocco/chicken-tagine.jpg"
};

const midwestCoverImages = {
  midwest: "images/recipes/audit-2026-06/italian-beef.jpg",
  chicago: "images/recipes/audit-2026-06/italian-beef.jpg",
  wisconsin: "images/recipes/audit-2026-06/wisconsin-friday-fish-fry.jpg",
  michigan: "images/recipes/audit-2026-06/detroit-style-pizza.jpg",
  minnesota: "images/recipes/audit-2026-06/tater-tot-hotdish.jpg",
  indiana: "images/recipes/audit-2026-06/breaded-pork-tenderloin-sandwich.jpg",
  ohio: "images/recipes/audit-2026-06/cincinnati-chili.jpg",
  iowa: "images/recipes/audit-2026-06/maid-rite-loose-meat-sandwich.jpg",
  missouri: "images/recipes/audit-2026-06/kansas-city-burnt-ends.jpg",
  kansas: "images/recipes/audit-2026-06/bierocks.jpg",
  nebraska: "images/recipes/audit-2026-06/runza.jpg",
  "north-dakota": "images/recipes/audit-2026-06/knoephla-soup.jpg",
  "south-dakota": "images/recipes/audit-2026-06/south-dakota-chislic.jpg"
};

const newEnglandCoverImages = {
  "new-england": "images/recipes/new-england-2026/vermont-cheddar-apple-pie.jpg",
  maine: "images/recipes/new-england-2026/maine-blueberry-pie.jpg",
  "new-hampshire": "images/recipes/new-england-2026/apple-cider-doughnuts.jpg",
  vermont: "images/recipes/new-england-2026/maple-glazed-pork-chops.jpg",
  massachusetts: "images/recipes/new-england-2026/boston-cream-pie.jpg",
  "rhode-island": "images/recipes/new-england-2026/coffee-milk.jpg",
  connecticut: "images/recipes/new-england-2026/new-haven-apizza.jpg"
};

const southwestCoverImages = {
  southwest: "images/regional/texas-beef-ribs.png",
  texas: "images/juneteenth/smoked-sliced-brisket.png",
  "new-mexico": "images/recipes/southwest-2026/green-chile-stew.jpg",
  arizona: "images/recipes/southwest-2026/sonoran-hot-dogs.jpg",
  oklahoma: "images/recipes/southwest-2026/oklahoma-onion-burgers.jpg"
};

const midAtlanticCoverImages = {
  "mid-atlantic": "images/recipes/mid-atlantic-2026/new-york-pizza.Ûµã‹h‘éì¶»§q«^u‰É½Ý¸µ‰É•…¹©Áœˆ°ÁÉ•Àè€ˆÄÔµ¥¸ˆ°½½¬è€ˆÔÔµ¥¸ˆ°Í•ÉÙ¥¹Ìè€ÄÀô¤°(€µ¥‘Ñ±…¹Ñ¥I•¥Á” ‰É½Í•µ…Éäµ™½…¥„ˆ°€‰½…¥„ˆ°€‰¥Ñ…±¥…¸ˆ°€‰	É•…‘Ìˆ°€‰=±¥Ù”µ½¥°µÉ¥ ™½…¥„Ý¥Ñ „É¥ÍÀ‰½ÑÑ½´°…¥ÉäÉÕµˆ°É½Í•µ…Éä°…¹™±…­äÍ…±Ð¸ˆ°lˆÐÕÁÌ‰É•…™±½ÕÈˆ°€ˆÈ€Ä¼ÐÑÍÀå•…ÍÐˆ°€ˆÈÕÁÌÝ…É´Ý…Ñ•Èˆ°€ˆÈÑÍÀÍ…±Ðˆ°€ˆÄ¼ÌÕÀ½±¥Ù”½¥°ˆ°€‰I½Í•µ…Éäˆ°€‰±…­äÍ…±Ð‰t°l‰5¥à„Ý•Ð‘½Õ …¹É•™É¥•É…Ñ”½Ù•É¹¥¡Ð¸ˆ°€‰A½ÕÈ¥¹Ñ¼…¸½¥±•Á…¸…¹±•ÐÉ¥Í”Õ¹Ñ¥°‰Õ‰‰±ä¸ˆ°€‰¥µÁ±”‘••Á±äÝ¥Ñ ½¥±•™¥¹•ÉÌ¸ˆ°€‰Q½ÀÝ¥Ñ É½Í•µ…Éä°½¥°°…¹Í…±Ð¸ˆ°€‰	…­”…Ð€ÐÈÔÕ¹Ñ¥°‘••Á±ä½±‘•¸¸‰t°l‰™½…¥„ˆ°€‰¥Ñ…±¥…¸‰É•…ˆ°€‰½±¥Ù”½¥°‰t°ì¥µ…”è€‰¥µ…•Ì½É•¥Á•Ì½Á¡½Ñ¼µÉ•Ù¥•Ü½É½Í•µ…Éäµ™½…¥„¹Á¹œˆ°ÁÉ•Àè€ˆÈÀµ¥¸Á±ÕÌÉ¥Í¥¹œˆ°½½¬è€ˆÈàµ¥¸ˆ°Í•ÉÙ¥¹Ìè€ÄÈô¤°(€µ¥‘Ñ±…¹Ñ¥I•¥Á” ‰±…ÍÍ¥Œµ…É±¥Œµ‰É•…ˆ°€‰…É±¥Œ	É•…ˆ°€‰¥Ñ…±¥…¸ˆ°€‰	É•…‘Ìˆ°€‰ÉÕÍÑä‰É•…ÍÁÉ•…Ý¥Ñ …É±¥Œµ¡•Éˆ‰ÕÑÑ•È…¹‰…­•Õ¹Ñ¥°É¥ÍÀ…ÐÑ¡”•‘•Ì¸ˆ°lˆÄÉ•¹ ½È%Ñ…±¥…¸±½…˜ˆ°€ˆàÑ‰ÍÀÍ½™Ñ•¹•‰ÕÑÑ•Èˆ°€ˆÐ…É±¥Œ±½Ù•Ìˆ°€ˆÈÑ‰ÍÀÁ…ÉÍ±•äˆ°€ˆÄ¼ÐÕÀÁ…Éµ•Í…¸½ÁÑ¥½¹…°ˆ°€‰M…±Ð‰t°l‰MÁ±¥ÐÑ¡”±½…˜±•¹Ñ¡Ý¥Í”¸ˆ°€‰5¥à‰ÕÑÑ•È°…É±¥Œ°Á…ÉÍ±•ä°Í…±Ð°…¹Á…Éµ•Í…¸¸ˆ°€‰MÁÉ•…Ñ¼•Ù•Éä•‘”¸ˆ°€‰	…­”…Ð€ÐÀÀÕ¹Ñ¥°¡½Ð…¹É¥ÍÀ¸ˆ°€‰	É½¥°‰É¥•™±ä™½È•áÑÉ„½±½È…¹Í±¥”¸‰t°l‰…É±¥Œ‰É•…ˆ°€‰¥Ñ…±¥…¸ˆ°€‰Í¥‘”‰t°ì¥µ…”è€‰¥µ…•Ì½É•¥Á•Ì½Á¡½Ñ¼µÉ•Ù¥•Ü½±…ÍÍ¥Œµ…É±¥Œµ‰É•…¹Á¹œˆ°ÁÉ•Àè€ˆÄÀµ¥¸ˆ°½½¬è€ˆÄÈµ¥¸ˆ°Í•ÉÙ¥¹Ìè€àô¤°(€µ¥‘Ñ±…¹Ñ¥I•¥Á” ‰±…ÍÍ¥Œµ¥¹¹…µ½¸µÉ½±±Ìˆ°€‰¥¹¹…µ½¸I½±±Ìˆ°€‰Í½ÕÑ¡•É¸ˆ°€‰	É•…‘Ìˆ°€‰M½™ÐÍÝ¥É±•‰É•…­™…ÍÐÉ½±±ÌÝ¥Ñ ¥¹¹…µ½¸µ‰É½Ý¸ÍÕ…È™¥±±¥¹œ…¹Ù…¹¥±±„±…é”¸ˆ°lˆÐÕÁÌ™±½ÕÈˆ°€ˆÈ€Ä¼ÐÑÍÀå•…ÍÐˆ°€ˆÄÕÀÝ…É´µ¥±¬ˆ°€ˆÄ¼ÌÕÀ‰ÕÑÑ•Èˆ°€ˆÈ•Ìˆ°€ˆÌ¼ÐÕÀ‰É½Ý¸ÍÕ…Èˆ°€ˆÈÑ‰ÍÀ¥¹¹…µ½¸ˆ°€‰Y…¹¥±±„±…é”‰t°l‰5¥à°­¹•…°…¹É¥Í”Ñ¡”•¹É¥¡•‘½Õ ¸ˆ°€‰I½±°¥¹Ñ¼„É•Ñ…¹±”…¹ÍÁÉ•…Ý¥Ñ ‰ÕÑÑ•È°ÍÕ…È°…¹¥¹¹…µ½¸¸ˆ°€‰I½±°ÕÀ°ÕÐ°…¹Á±…”¥¸„‰…­¥¹œ‘¥Í ¸ˆ°€‰I¥Í”Õ¹Ñ¥°ÁÕ™™ä…¹‰…­”…Ð€ÌÔÀ¸ˆ°€‰±…é”Ý¡¥±”Ý…É´¸‰t°l‰¥¹¹…µ½¸É½±±Ìˆ°€‰‰É•…­™…ÍÐˆ°€‰å•…ÍÐ‰É•…‰t°ì¥µ…”è€‰¥µ…•Ì½É•¥Á•Ì½…Õ‘¥Ð´ÈÀÈØ´ÀØ½‘¥¹¹•ÈµÉ½±±Ì¹©Áœˆ°ÁÉ•Àè€ˆÌÔµ¥¸Á±ÕÌÉ¥Í¥¹œˆ°½½¬è€ˆÈÔµ¥¸ˆ°Í•ÉÙ¥¹Ìè€ÄÈ°±•Ù•°è€‰%¹Ñ•Éµ•‘¥…Ñ”ˆô¤°(€µ¥‘Ñ±…¹Ñ¥I•¥Á” ‰±…ÍÍ¥ŒµÁ•…¹ÕÐµ‰ÕÑÑ•Èµ½½­¥•Ìˆ°€‰A•…¹ÕÐ	ÕÑÑ•È½½­¥•Ìˆ°€‰Í½ÕÑ¡•É¸ˆ°€‰½½­¥•Ìˆ°€‰Q•¹‘•ÈÁ•…¹ÕÐ‰ÕÑÑ•È½½­¥•ÌÝ¥Ñ Ñ¡”±…ÍÍ¥ŒÉ¥ÍÍÉ½ÍÌÑ½À¸ˆ°lˆÄÕÀÁ•…¹ÕÐ‰ÕÑÑ•Èˆ°€ˆÄ¼ÈÕÀ‰ÕÑÑ•Èˆ°€ˆÌ¼ÐÕÀ‰É½Ý¸ÍÕ…Èˆ°€ˆÄ¼ÈÕÀÍÕ…Èˆ°€ˆÄ•œˆ°€ˆÄ€Ä¼ÈÕÁÌ™±½ÕÈˆ°€ˆÄÑÍÀ‰…­¥¹œÍ½‘„‰t°l‰É•…´‰ÕÑÑ•È°Á•…¹ÕÐ‰ÕÑÑ•È°…¹ÍÕ…ÉÌ¸ˆ°€‰	•…Ð¥¸•œ¸ˆ°€‰½±¥¸™±½ÕÈ…¹‰…­¥¹œÍ½‘„¸ˆ°€‰I½±°¥¹Ñ¼‰…±±Ì…¹ÁÉ•ÍÌÝ¥Ñ „™½É¬¸ˆ°€‰	…­”…Ð€ÌÔÀÕ¹Ñ¥°Ñ¡”•‘•ÌÍ•Ð¸‰t°l‰Á•…¹ÕÐ‰ÕÑÑ•È½½­¥•Ìˆ°€‰½½­¥•Ì‰t°ì¥µ…”è€‰¥µ…•Ì½É•¥Á•Ì½½½­¥•Ì´ÈÀÈØ½Á•…¹ÕÐµ‰ÕÑÑ•Èµ½½­¥•Ì¹Á¹œˆ°ÁÉ•Àè€ˆÄÔµ¥¸ˆ°½½¬è€ˆÄÀµ¥¸ˆ°Í•ÉÙ¥¹Ìè€ÈÐô¤°(€µ¥‘Ñ±…¹Ñ¥I•¥Á” ‰½…Ñµ•…°µÉ…¥Í¥¸µ½½­¥•Ìˆ°€‰=…Ñµ•…°I…¥Í¥¸½½­¥•Ìˆ°€‰Í½ÕÑ¡•É¸ˆ°€‰½½­¥•Ìˆ°€‰¡•Ýä½…Ñµ•…°½½­¥•ÌÝ¥Ñ É…¥Í¥¹Ì°¥¹¹…µ½¸°…¹É¥ÍÀ½±‘•¸•‘•Ì¸ˆ°lˆÄÕÀ‰ÕÑÑ•Èˆ°€ˆÄÕÀ‰É½Ý¸ÍÕ…Èˆ°€ˆÈ•Ìˆ°€ˆÄ€Ä¼ÈÕÁÌ™±½ÕÈˆ°€ˆÌÕÁÌÉ½±±•½…ÑÌˆ°€ˆÄÕÀÉ…¥Í¥¹Ìˆ°€ˆÄÑÍÀ¥¹¹…µ½¸ˆ°€ˆÄÑÍÀ‰…­¥¹œÍ½‘„‰t°l‰É•…´‰ÕÑÑ•È…¹ÍÕ…È°Ñ¡•¸‰•…Ð¥¸•Ì¸ˆ°€‰5¥à™±½ÕÈ°¥¹¹…µ½¸°…¹‰…­¥¹œÍ½‘„¸ˆ°€‰½±¥¸½…ÑÌ…¹É…¥Í¥¹Ì¸ˆ°€‰M½½À½¹Ñ¼±¥¹•Á…¹Ì¸ˆ°€‰	…­”…Ð€ÌÔÀÕ¹Ñ¥°½±‘•¸…ÐÑ¡”•‘•Ì¸‰t°l‰½…Ñµ•…°É…¥Í¥¸½½­¥•Ìˆ°€‰½½­¥•Ì‰t°ì¥µ…”è€‰¥µ…•Ì½É•¥Á•Ì½½½­¥•Ì´ÈÀÈØ½½…Ñµ•…°µÉ…¥Í¥¸µ½½­¥•Ì¹Á¹œˆ°ÁÉ•Àè€ˆÄÔµ¥¸ˆ°½½¬è€ˆÄÈµ¥¸ˆ°Í•ÉÙ¥¹Ìè€ÌÀô¤°(€µ¥‘Ñ±…¹Ñ¥I•¥Á” ‰Í¹¥­•É‘½½‘±•Ìˆ°€‰M¹¥­•É‘½½‘±•Ìˆ°€‰Í½ÕÑ¡•É¸ˆ°€‰½½­¥•Ìˆ°€‰M½™Ð°Ñ…¹ä½½­¥•ÌÉ½±±••¹•É½ÕÍ±ä¥¸¥¹¹…µ½¸ÍÕ…È¸ˆ°lˆÄÕÀ‰ÕÑÑ•Èˆ°€ˆÄ€Ä¼ÈÕÁÌÍÕ…Èˆ°€ˆÈ•Ìˆ°€ˆÈ€Ì¼ÐÕÁÌ™±½ÕÈˆ°€ˆÈÑÍÀÉ•…´½˜Ñ…ÉÑ…Èˆ°€ˆÄÑÍÀ‰…­¥¹œÍ½‘„ˆ°€ˆÈÑÍÀ¥¹¹…µ½¸‰t°l‰É•…´‰ÕÑÑ•È…¹ÍÕ…È°Ñ¡•¸…‘•Ì¸ˆ°€‰5¥à¥¸™±½ÕÈ°É•…´½˜Ñ…ÉÑ…È°…¹‰…­¥¹œÍ½‘„¸ˆ°€‰I½±°‘½Õ ¥¹Ñ¼‰…±±Ì¸ˆ°€‰½…Ð¥¸¥¹¹…µ½¸ÍÕ…È¸ˆ°€‰	…­”…Ð€ÌÜÔÕ¹Ñ¥°ÁÕ™™•…¹©ÕÍÐÍ•Ð¸‰t°l‰Í¹¥­•É‘½½‘±•Ìˆ°€‰½½­¥•Ìˆ°€‰¥¹¹…µ½¸‰t°ì¥µ…”è€‰¥µ…•Ì½É•¥Á•Ì½½½­¥•Ì´ÈÀÈØ½Í¹¥­•É‘½½‘±•Ì¹Á¹œˆ°ÁÉ•Àè€ˆÈÀµ¥¸ˆ°½½¬è€ˆäµ¥¸ˆ°Í•ÉÙ¥¹Ìè€ÌÀô¤°(€µ¥‘Ñ±…¹Ñ¥I•¥Á” ‰±…ÍÍ¥ŒµÍ¡½ÉÑ‰É•…ˆ°€‰M¡½ÉÑ‰É•…ˆ°€‰±½‰…°ˆ°€‰½½­¥•Ìˆ°€‰	ÕÑÑ•Éä°Í…¹‘äÍ¡½ÉÑ‰É•…Ý¥Ñ ±•…¸Ù…¹¥±±„™±…Ù½È…¹É¥ÍÀ•‘•Ì¸ˆ°lˆÄÕÀ‰ÕÑÑ•Èˆ°€ˆÄ¼ÈÕÀÁ½Ý‘•É•ÍÕ…Èˆ°€ˆÈÕÁÌ™±½ÕÈˆ°€ˆÄÑÍÀÙ…¹¥±±„ˆ°€ˆÄ¼ÈÑÍÀÍ…±Ð‰t°l‰É•…´‰ÕÑÑ•È…¹Á½Ý‘•É•ÍÕ…È¸ˆ°€‰5¥à¥¸Ù…¹¥±±„°™±½ÕÈ°…¹Í…±Ð¸ˆ°€‰AÉ•ÍÌ¥¹Ñ¼„Á…¸½ÈÍ¡…Á”¥¹Ñ¼„±½œ…¹¡¥±°¸ˆ°€‰ÕÐ½ÈÍ½É”Á½ÉÑ¥½¹Ì¸ˆ°€‰	…­”…Ð€ÌÈÔÕ¹Ñ¥°Á…±”½±¸‰t°l‰Í¡½ÉÑ‰É•…ˆ°€‰½½­¥•Ì‰t°ì¥µ…”è€‰¥µ…•Ì½É•¥Á•Ì½½½­¥•Ì´ÈÀÈØ½Í¡½ÉÑ‰É•…¹Á¹œˆ°ÁÉ•Àè€ˆÄÔµ¥¸Á±ÕÌ¡¥±±¥¹œˆ°½½¬è€ˆÈÔµ¥¸ˆ°Í•ÉÙ¥¹Ìè€ÈÐô¤°(€µ¥‘Ñ±…¹Ñ¥I•¥Á” ‰µ½±…ÍÍ•Ìµ½½­¥•Ìˆ°€‰5½±…ÍÍ•Ì½½­¥•Ìˆ°€‰Í½ÕÑ¡•É¸ˆ°€‰½½­¥•Ìˆ°€‰¡•Ýä‘…É¬µ½±…ÍÍ•Ì½½­¥•Ì™É…É…¹ÐÝ¥Ñ ¥¹•È°¥¹¹…µ½¸°…¹±½Ù•Ì¸ˆ°lˆÌ¼ÐÕÀ‰ÕÑÑ•Èˆ°€ˆÄÕÀ‰É½Ý¸ÍÕ…Èˆ°€ˆÄ•œˆ°€ˆÄ¼ÌÕÀµ½±…ÍÍ•Ìˆ°€ˆÈ€Ä¼ÐÕÁÌ™±½ÕÈˆ°€ˆÈÑÍÀ¥¹•Èˆ°€ˆÄÑÍÀ¥¹¹…µ½¸ˆ°€ˆÄ¼ÐÑÍÀ±½Ù•Ì‰t°l‰É•…´‰ÕÑÑ•È…¹ÍÕ…È¸ˆ°€‰	•…Ð¥¸•œ…¹µ½±…ÍÍ•Ì¸ˆ°€‰½±¥¸™±½ÕÈ…¹ÍÁ¥•Ì¸ˆ°€‰¡¥±°°Ñ¡•¸É½±°¥¸ÍÕ…È¸ˆ°€‰	…­”…Ð€ÌÔÀÕ¹Ñ¥°É…­±•…¹Í•Ð…ÐÑ¡”•‘•Ì¸‰t°l‰µ½±…ÍÍ•Ì½½­¥•Ìˆ°€‰¥¹•È½½­¥•Ìˆ°€‰½½­¥•Ì‰t°ì¥µ…”è€‰¥µ…•Ì½É•¥Á•Ì½½½­¥•Ì´ÈÀÈØ½µ½±…ÍÍ•Ìµ½½­¥•Ì¹Á¹œˆ°ÁÉ•Àè€ˆÈÀµ¥¸Á±ÕÌ¡¥±±¥¹œˆ°½½¬è€ˆÄÀµ¥¸ˆ°Í•ÉÙ¥¹Ìè€ÈÐô¤°(€µ¥‘Ñ±…¹Ñ¥I•¥Á” ‰Ñ¡Õµ‰ÁÉ¥¹Ðµ½½­¥•Ìˆ°€‰Q¡Õµ‰ÁÉ¥¹Ð½½­¥•Ìˆ°€‰±½‰…°ˆ°€‰½½­¥•Ìˆ°€‰Q•¹‘•È‰ÕÑÑ•È½½­¥•Ì™¥±±•Ý¥Ñ ‰É¥¡Ð©…´¸ˆ°lˆÄÕÀ‰ÕÑÑ•Èˆ°€ˆÈ¼ÌÕÀÍÕ…Èˆ°€ˆÈ•œå½±­Ìˆ°€ˆÈÕÁÌ™±½ÕÈˆ°€ˆÄÑÍÀÙ…¹¥±±„ˆ°€ˆÄ¼ÈÕÀ©…´‰t°l‰É•…´‰ÕÑÑ•È…¹ÍÕ…È°Ñ¡•¸…‘å½±­Ì…¹Ù…¹¥±±„¸ˆ°€‰5¥à¥¸™±½ÕÈ¸ˆ°€‰I½±°¥¹Ñ¼‰…±±Ì…¹µ…­”„‘••ÀÑ¡Õµ‰ÁÉ¥¹Ð¸ˆ°€‰¥±°Ý¥Ñ „Íµ…±°ÍÁ½½¹™Õ°½˜©…´¸ˆ°€‰	…­”…Ð€ÌÔÀÕ¹Ñ¥°±¥¡Ñ±ä½±‘•¸¸‰t°l‰Ñ¡Õµ‰ÁÉ¥¹Ð½½­¥•Ìˆ°€‰©…´½½­¥•Ìˆ°€‰½½­¥•Ì‰t°ì¥µ…”è€‰¥µ…•Ì½É•¥Á•Ì½½½­¥•Ì´ÈÀÈØ½Ñ¡Õµ‰ÁÉ¥¹Ðµ½½­¥•Ì¹Á¹œˆ°ÁÉ•Àè€ˆÈÀµ¥¸ˆ°½½¬è€ˆÄÈµ¥¸ˆ°Í•ÉÙ¥¹Ìè€ÈÐô¤°(€µ¥‘Ñ±…¹Ñ¥I•¥Á” ‰¡½½±…Ñ”µÉ¥¹­±”µ½½­¥•Ìˆ°€‰¡½½±…Ñ”É¥¹­±”½½­¥•Ìˆ°€‰±½‰…°ˆ°€‰½½­¥•Ìˆ°€‰Õ‘ä¡½½±…Ñ”½½­¥•ÌÉ½±±•¥¸Á½Ý‘•É•ÍÕ…È™½È„‘É…µ…Ñ¥ŒÉ…­±•Ñ½À¸ˆ°lˆÄÕÀ½½„ˆ°€ˆÈÕÁÌÍÕ…Èˆ°€ˆÄ¼ÈÕÀ½¥°ˆ°€ˆÐ•Ìˆ°€ˆÈÕÁÌ™±½ÕÈˆ°€ˆÈÑÍÀ‰…­¥¹œÁ½Ý‘•Èˆ°€ˆÄÕÀÁ½Ý‘•É•ÍÕ…È‰t°l‰]¡¥Í¬½½„°ÍÕ…È°…¹½¥°¸ˆ°€‰	•…Ð¥¸•Ì°Ñ¡•¸™½±¥¸™±½ÕÈ…¹‰…­¥¹œÁ½Ý‘•È¸ˆ°€‰¡¥±°Õ¹Ñ¥°™¥É´¸ˆ°€‰I½±°¥¸Á½Ý‘•É•ÍÕ…È¸ˆ°€‰	…­”…Ð€ÌÔÀÕ¹Ñ¥°É…­±•…¹Í½™Ðµ•¹Ñ•É•¸‰t°l‰¡½½±…Ñ”É¥¹­±”½½­¥•Ìˆ°€‰½½­¥•Ìˆ°€‰¡½½±…Ñ”‰t°ì¥µ…”è€‰¥µ…•Ì½É•¥Á•Ì½½½­¥•Ì´ÈÀÈØ½¡½½±…Ñ”µÉ¥¹­±”µ½½­¥•Ì¹Á¹œˆ°ÁÉ•Àè€ˆÈÀµ¥¸Á±ÕÌ¡¥±±¥¹œˆ°½½¬è€ˆÄÄµ¥¸ˆ°Í•ÉÙ¥¹Ìè€ÌÀô¤°(€µ¥‘Ñ±…¹Ñ¥I•¥Á” ‰Ý¡¥Ñ”µ¡½½±…Ñ”µµ……‘…µ¥„µ½½­¥•Ìˆ°€‰]¡¥Ñ”¡½½±…Ñ”5……‘…µ¥„½½­¥•Ìˆ°€‰±½‰…°ˆ°€‰½½­¥•Ìˆ°€‰¡•Ýä½½­¥•ÌÝ¥Ñ ‰ÕÑÑ•Éäµ……‘…µ¥…Ì…¹É•…µäÝ¡¥Ñ”¡½½±…Ñ”¸ˆ°lˆÄÕÀ‰ÕÑÑ•Èˆ°€ˆÄÕÀ‰É½Ý¸ÍÕ…Èˆ°€ˆÄ¼ÈÕÀÍÕ…Èˆ°€ˆÈ•Ìˆ°€ˆÈ€Ì¼ÐÕÁÌ™±½ÕÈˆ°€ˆÄÑÍÀ‰…­¥¹œÍ½‘„ˆ°€ˆÄÕÀÝ¡¥Ñ”¡½½±…Ñ”¡¥ÁÌˆ°€ˆÄÕÀµ……‘…µ¥…Ì‰t°l‰É•…´‰ÕÑÑ•È…¹ÍÕ…ÉÌ¸ˆ°€‰	•…Ð¥¸•Ì¸ˆ°€‰½±¥¸™±½ÕÈ…¹‰…­¥¹œÍ½‘„¸ˆ°€‰‘Ý¡¥Ñ”¡½½±…Ñ”…¹µ……‘…µ¥…Ì¸ˆ°€‰M½½À…¹‰…­”…Ð€ÌÔÀÕ¹Ñ¥°½±‘•¸…ÐÑ¡”•‘•Ì¸‰t°l‰Ý¡¥Ñ”¡½½±…Ñ”µ……‘…µ¥„½½­¥•Ìˆ°€‰½½­¥•Ì‰t°ì¥µ…”è€‰¥µ…•Ì½É•¥Á•Ì½½½­¥•Ì´ÈÀÈØ½Ý¡¥Ñ”µ¡½½±…Ñ”µµ……‘…µ¥„µ½½­¥•Ì¹Á¹œˆ°ÁÉ•Àè€ˆÈÀµ¥¸ˆ°½½¬è€ˆÄÄµ¥¸ˆ°Í•ÉÙ¥¹Ìè€ÌÀô¤°(€µ¥‘Ñ±…¹Ñ¥I•¥Á” ‰Á•…¸µÍ…¹‘¥•Ìˆ°€‰A•…¸M…¹‘¥•Ìˆ°€‰Í½ÕÑ¡•É¸ˆ°€‰½½­¥•Ìˆ°€‰ÉÕµ‰±ä‰ÕÑÑ•È½½­¥•Ì±½…‘•Ý¥Ñ Ñ½…ÍÑ•Á•…¹Ì¸ˆ°lˆÄÕÀ‰ÕÑÑ•Èˆ°€ˆÈ¼ÌÕÀÁ½Ý‘•É•ÍÕ…Èˆ°€ˆÈÕÁÌ™±½ÕÈˆ°€ˆÄÕÀÑ½…ÍÑ•Á•…¹Ìˆ°€ˆÄÑÍÀÙ…¹¥±±„ˆ°€ˆÄ¼ÈÑÍÀÍ…±Ð‰t°l‰É•…´‰ÕÑÑ•È…¹Á½Ý‘•É•ÍÕ…È¸ˆ°€‰‘Ù…¹¥±±„°™±½ÕÈ°…¹Í…±Ð¸ˆ°€‰½±¥¸Á•…¹Ì¸ˆ°€‰M¡…Á”°¡¥±°°…¹Í±¥”¸ˆ°€‰	…­”…Ð€ÌÈÔÕ¹Ñ¥°Ñ¡”•‘•Ì…É”±¥¡Ñ±ä½±‘•¸¸‰t°l‰Á•…¸Í…¹‘¥•Ìˆ°€‰½½­¥•Ìˆ°€‰Á•…¹Ì‰t°ì¥µ…”è€‰¥µ…•Ì½É•¥Á•Ì½½½­¥•Ì´ÈÀÈØ½Á•…¸µÍ…¹‘¥•Ì¹Á¹œˆ°ÁÉ•Àè€ˆÈÀµ¥¸Á±ÕÌ¡¥±±¥¹œˆ°½½¬è€ˆÄØµ¥¸ˆ°Í•ÉÙ¥¹Ìè€ÌÀô¤)tì()½¹ÍÐ‘É¥¹­½±±•Ñ¥½¹½Ù•È€ô€‰…ÍÍ•ÑÌ½±¥Ù¥¹œµ½½­‰½½¬µ‘É¥¹­Ìµ½Ù•È¹Á¹œˆì)½¹ÍÐ‘É¥¹­…Ñ•½Éå%µ…•Ì€ôì(€½­Ñ…¥°è‘É¥¹­½±±•Ñ¥½¹½Ù•È°(€µ½­Ñ…¥°è‘É¥¹­½±±•Ñ¥½¹½Ù•È°(€ÁÕ¹ è€‰¥µ…•Ì½É•¥Á•Ì½¡½±¥‘…ä´ÈÀÈØ½¡½±¥‘…äµÁÕ¹ ¹Á¹œˆ°(€Íµ½½Ñ¡¥”è€‰¥µ…•Ì½É•¥Á•Ì½…Õ‘¥Ð´ÈÀÈØ´ÀØ½‰•ÉÉäµ‰…¹…¹„µÍµ½½Ñ¡¥•Ì¹©Áœˆ°(€½™™•”è€‰¥µ…•Ì½É•¥Á•Ì½¹•Üµ•¹±…¹´ÈÀÈØ½½™™•”µµ¥±¬¹©Áœˆ°(€Ñ•„è€‰¥µ…•Ì½É•¥Á•Ì½…Õ‘¥Ð´ÈÀÈØ´ÀØ½ÍÝ••ÐµÑ•„¹©Áœˆ°(€±•µ½¹…‘”è€‰¥µ…•Ì½©Õ¹•Ñ••¹Ñ ½™É•Í µ±•µ½¹…‘”¹Á¹œˆ)ôì()™Õ¹Ñ¥½¸‘É¥¹­I•¥Á”¡¥°Ñ¥Ñ±”°‘É¥¹­QåÁ”°‘•ÍÉ¥ÁÑ¥½¸°¥¹É•‘¥•¹ÑÌ°‘¥É•Ñ¥½¹Ì°Ñ…Ì°•áÑÉ…Ì€ôíô¤ì(€½¹ÍÐ…±½¡½±¥Œ€ô	½½±•…¸¡•áÑÉ…Ì¹…±½¡½±¥Œ¤ì(€É•ÑÕÉ¸ì(€€€€¸¸¹•áÁ…¹Í¥½¹I•¥Á”¡¥°Ñ¥Ñ±”°€‰É¥¹­Ìˆ°‘É¥¹­…Ñ•½Éå%µ…•Ím‘É¥¹­QåÁ•tñð‘É¥¹­½±±•Ñ¥½¹½Ù•È°•áÑÉ…Ì¹ÁÉ•Àñð€ˆÄÀµ¥¸ˆ°€ˆÀµ¥¸ˆ°•áÑÉ…Ì¹Í•ÉÙ¥¹Ìñð€È°€‰	•¥¹¹•Èˆ°‘•ÍÉ¥ÁÑ¥½¸°¥¹É•‘¥•¹ÑÌ°‘¥É•Ñ¥½¹Ì°l‰‘É¥¹¬ˆ°‘É¥¹­QåÁ”°…±½¡½±¥Œ€ü€‰½¹Ñ…¥¹Ì…±½¡½°ˆ€è€‰¹½¹…±½¡½±¥Œˆ°€¸¸¹Ñ…Ít°ìÕ¥Í¥¹”è•áÑÉ…Ì¹Õ¥Í¥¹”ñð€‰…µ•É¥…¸ˆ°ÍÑ½É…”è€‰M•ÉÙ”™É•Í ½Ù•È¥”¸I•™É¥•É…Ñ”…¹äÁÉ•Á…É•‰…Í”™½ÈÕÀÑ¼€È‘…åÌ¸ˆô¤°(€€€‘É¥¹­QåÁ”°(€€€…±½¡½±¥Œ°(€€€Ñ•µÁ•É…ÑÕÉ”è•áÑÉ…Ì¹Ñ•µÁ•É…ÑÕÉ”ñð€‰½±ˆ°(€€€…É¹¥Í è•áÑÉ…Ì¹…É¹¥Í ñð€‰É•Í ¥ÑÉÕÌ½È¡•É‰Ìˆ°(€€€±…ÍÍÝ…É”è•áÑÉ…Ì¹±…ÍÍÝ…É”ñð€‰!¥¡‰…±°±…ÍÌˆ°(€€€…±½¡½±É••Y•ÉÍ¥½¸è•áÑÉ…Ì¹…±½¡½±É••Y•ÉÍ¥½¸ñð€ˆˆ°(€€€±½ÝMÕ…Èè	½½±•…¸¡•áÑÉ…Ì¹±½ÝMÕ…È¤°(€€€Õ±ÑÕÉ…±9½Ñ•Ìè•áÑÉ…Ì¹Õ±ÑÕÉ…±9½Ñ•Ìñð€ˆˆ°(€€€Í½ÕÉ”è•áÑÉ…Ì¹Í½ÕÉ”ñð€ˆˆ(€ôì)ô()½¹ÍÐ‘É¥¹­Í½±±•Ñ¥½¹I•¥Á•Ì€ôl(€‘É¥¹­I•¥Á” ‰±…ÍÍ¥Œµµ…É…É¥Ñ„ˆ°€‰±…ÍÍ¥Œ5…É…É¥Ñ„ˆ°€‰½­Ñ…¥°ˆ°€‰‰…±…¹•Ñ•ÅÕ¥±„°½É…¹”±¥ÅÕ•ÕÈ°…¹±¥µ”½­Ñ…¥°Ý¥Ñ „É¥ÍÀÍ…±Ñ•É¥´¸ˆ°lˆÐ½è‰±…¹¼Ñ•ÅÕ¥±„ˆ°€ˆÈ½è½É…¹”±¥ÅÕ•ÕÈˆ°€ˆÈ½è™É•Í ±¥µ”©Õ¥”ˆ°€ˆÄÑÍÀ……Ù”ÍåÉÕÀ½ÁÑ¥½¹…°ˆ°€‰-½Í¡•ÈÍ…±Ðˆ°€‰%”‰t°l‰IÕ¸„±¥µ”Ý•‘”…É½Õ¹ÑÝ¼É½­Ì±…ÍÍ•Ì…¹‘¥ÀÉ¥µÌ¥¸Í…±Ð¸ˆ°€‰M¡…­”Ñ•ÅÕ¥±„°½É…¹”±¥ÅÕ•ÕÈ°±¥µ”©Õ¥”°……Ù”°…¹¥”Õ¹Ñ¥°Ù•Éä½±¸ˆ°€‰¥±°±…ÍÍ•ÌÝ¥Ñ ™É•Í ¥”…¹ÍÑÉ…¥¸Ñ¡”½­Ñ…¥°½Ù•È¥Ð¸ˆ°€‰…É¹¥Í •… ±…ÍÌÝ¥Ñ „±¥µ”Ý¡••°¸‰t°l‰Ñ•ÅÕ¥±„ˆ°€‰±¥µ”ˆ°€‰Á…ÉÑäˆ°€‰™É½é•¸½ÁÑ¥½¸‰t°ì…±½¡½±¥ŒèÑÉÕ”°…É¹¥Í è€‰1¥µ”Ý¡••°ˆ°±…ÍÍÝ…É”è€‰M…±ÐµÉ¥µµ•É½­Ì±…ÍÌˆ°…±½¡½±É••Y•ÉÍ¥½¸è€‰M¡…­”±¥µ”©Õ¥”°½É…¹”©Õ¥”°……Ù”°…¹ÍÁ…É­±¥¹œÝ…Ñ•È½Ù•È¥”¸ˆô¤°(€‘É¥¹­I•¥Á” ‰ÍÑÉ…Ý‰•ÉÉäµµ…É…É¥Ñ„ˆ°€‰MÑÉ…Ý‰•ÉÉä5…É…É¥Ñ„ˆ°€‰½­Ñ…¥°ˆ°€‰É•Í ÍÑÉ…Ý‰•ÉÉ¥•Ìµ…­”Ñ¡¥ÌÑ•ÅÕ¥±„½­Ñ…¥°‰É¥¡Ð°Ñ…ÉÐ°…¹¹½ÐÑ½¼ÍÝ••Ð¸ˆ°lˆÐ½è‰±…¹¼Ñ•ÅÕ¥±„ˆ°€ˆÈ½è½É…¹”±¥ÅÕ•ÕÈˆ°€ˆÄÕÀÍÑÉ…Ý‰•ÉÉ¥•Ìˆ°€ˆÈ½è™É•Í ±¥µ”©Õ¥”ˆ°€ˆÄÑÍÀ……Ù”ÍåÉÕÀˆ°€‰%”‰t°l‰	±•¹ÍÑÉ…Ý‰•ÉÉ¥•Ì°Ñ•ÅÕ¥±„°½É…¹”±¥ÅÕ•ÕÈ°±¥µ”©Õ¥”°……Ù”°…¹¥”Õ¹Ñ¥°Íµ½½Ñ ¸ˆ°€‰Q…ÍÑ”…¹…‘©ÕÍÐ±¥µ”½È……Ù”¸ˆ°€‰A½ÕÈ¥¹Ñ¼ÑÝ¼Í…±ÐµÉ¥µµ•É½­Ì±…ÍÍ•Ì¸ˆ°€‰…É¹¥Í Ý¥Ñ „ÍÑÉ…Ý‰•ÉÉä…¹±¥µ”¸‰t°l‰Ñ•ÅÕ¥±„ˆ°€‰ÍÑÉ…Ý‰•ÉÉäˆ°€‰™É½é•¸ˆ°€‰Á…ÉÑä‰t°ì…±½¡½±¥ŒèÑÉÕ”°…É¹¥Í è€‰MÑÉ…Ý‰•ÉÉä…¹±¥µ”Ý¡••°ˆ°±…ÍÍÝ…É”è€‰M…±ÐµÉ¥µµ•É½­Ì±…ÍÌˆ°…±½¡½±É••Y•ÉÍ¥½¸è€‰I•Á±…”Ñ•ÅÕ¥±„…¹±¥ÅÕ•ÕÈÝ¥Ñ €Ä¼ÈÕÀ½É…¹”©Õ¥”…¹ÍÁ…É­±¥¹œÝ…Ñ•È¸ˆô¤°(€‘É¥¹­I•¥Á” ‰Á…±½µ„ˆ°€‰A…±½µ„ˆ°€‰½­Ñ…¥°ˆ°€‰Ñ…ÉÐ°ÍÁ…É­±¥¹œÑ•ÅÕ¥±„¡¥¡‰…±°Ý¥Ñ É…Á•™ÉÕ¥Ð…¹±¥µ”¸ˆ°lˆÐ½è‰±…¹¼Ñ•ÅÕ¥±„ˆ°€ˆÐ½èÉ…Á•™ÉÕ¥ÐÍ½‘„ˆ°€ˆÄ½è™É•Í ±¥µ”©Õ¥”ˆ°€‰A¥¹ ­½Í¡•ÈÍ…±Ðˆ°€‰%”‰t°l‰¥±°ÑÝ¼Ñ…±°±…ÍÍ•ÌÝ¥Ñ ¥”¸ˆ°€‰‘Ñ•ÅÕ¥±„…¹±¥µ”©Õ¥”Ñ¼•… ±…ÍÌ¸ˆ°€‰Q½ÀÝ¥Ñ É…Á•™ÉÕ¥ÐÍ½‘„…¹„Ñ¥¹äÁ¥¹ ½˜Í…±Ð¸ˆ°€‰MÑ¥È½¹”…¹…É¹¥Í Ý¥Ñ É…Á•™ÉÕ¥Ð¸‰t°l‰Ñ•ÅÕ¥±„ˆ°€‰É…Á•™ÉÕ¥Ðˆ°€‰Á…ÉÑä‰t°ì…±½¡½±¥ŒèÑÉÕ”°…É¹¥Í è€‰É…Á•™ÉÕ¥ÐÝ•‘”ˆ°±…ÍÍÝ…É”è€‰!¥¡‰…±°±…ÍÌˆ°…±½¡½±É••Y•ÉÍ¥½¸è€‰UÍ”É…Á•™ÉÕ¥ÐÍ½‘„°±¥µ”°…¹„ÍÁ±…Í ½˜½É…¹”©Õ¥”¸ˆô¤°(€‘É¥¹­I•¥Á” ‰±…ÍÍ¥Œµµ½©¥Ñ¼ˆ°€‰±…ÍÍ¥Œ5½©¥Ñ¼ˆ°€‰½­Ñ…¥°ˆ°€‰½½°µ¥¹Ð°±¥µ”°ÉÕ´°…¹Í½‘„µ…­”„±•…¸°É•™É•Í¡¥¹œ¡¥¡‰…±°¸ˆ°lˆÐ½èÝ¡¥Ñ”ÉÕ´ˆ°€ˆÈ½è™É•Í ±¥µ”©Õ¥”ˆ°€ˆÐÑÍÀÍÕ…Èˆ°€ˆÄØµ¥¹Ð±•…Ù•Ìˆ°€ˆÐ½è±ÕˆÍ½‘„ˆ°€‰ÉÕÍ¡•¥”‰t°l‰•¹Ñ±äµÕ‘‘±”µ¥¹Ð°ÍÕ…È°…¹±¥µ”©Õ¥”¥¸ÑÝ¼±…ÍÍ•Ì¸ˆ°€‰‘ÉÕ´…¹™¥±°•… ±…ÍÌÝ¥Ñ ÉÕÍ¡•¥”¸ˆ°€‰Q½ÀÝ¥Ñ ±ÕˆÍ½‘„…¹ÍÑ¥È±¥¡Ñ±ä¸ˆ°€‰‘„µ¥¹Ð‰½ÕÅÕ•Ð…¹±¥µ”Ý•‘”¸‰t°l‰ÉÕ´ˆ°€‰µ¥¹Ðˆ°€‰±¥µ”ˆ°€‰Á…ÉÑä‰t°ì…±½¡½±¥ŒèÑÉÕ”°…É¹¥Í è€‰5¥¹Ð‰½ÕÅÕ•Ð…¹±¥µ”Ý•‘”ˆ°±…ÍÍÝ…É”è€‰!¥¡‰…±°±…ÍÌˆ°…±½¡½±É••Y•ÉÍ¥½¸è€‰M­¥ÀÉÕ´…¹…‘€Èµ½É”½Õ¹•Ì±ÕˆÍ½‘„Á•È±…ÍÌ¸ˆô¤°(€‘É¥¹­I•¥Á” ‰½±µ™…Í¡¥½¹•ˆ°€‰=±…Í¡¥½¹•ˆ°€‰½­Ñ…¥°ˆ°€‰ÍÁ¥É¥Ðµ™½ÉÝ…ÉÝ¡¥Í­•ä½­Ñ…¥°Í½™Ñ•¹•Ý¥Ñ ÍÕ…È…¹…É½µ…Ñ¥Œ‰¥ÑÑ•ÉÌ¸ˆ°lˆÐ½è‰½ÕÉ‰½¸½ÈÉå”Ý¡¥Í­•äˆ°€ˆÈÑÍÀ‘•µ•É…É„ÍåÉÕÀˆ°€ˆÐ‘…Í¡•Ì…É½µ…Ñ¥Œ‰¥ÑÑ•ÉÌˆ°€ˆÈ½É…¹”Á••±Ìˆ°€‰1…É”¥”Õ‰”‰t°l‰‘Ý¡¥Í­•ä°ÍåÉÕÀ°…¹‰¥ÑÑ•ÉÌÑ¼ÑÝ¼É½­Ì±…ÍÍ•Ì¸ˆ°€‰‘„±…É”¥”Õ‰”Ñ¼•… ±…ÍÌ…¹ÍÑ¥È€ÈÀÍ•½¹‘Ì¸ˆ°€‰áÁÉ•ÍÌ…¸½É…¹”Á••°½Ù•È•… ‘É¥¹¬¸ˆ°€‰É½À¥¸Ñ¡”Á••°…¹Í•ÉÙ”¸‰t°l‰Ý¡¥Í­•äˆ°€‰‰½ÕÉ‰½¸ˆ°€‰±…ÍÍ¥Œ‰t°ì…±½¡½±¥ŒèÑÉÕ”°…É¹¥Í è€‰áÁÉ•ÍÍ•½É…¹”Á••°ˆ°±…ÍÍÝ…É”è€‰I½­Ì±…ÍÌˆ°…±½¡½±É••Y•ÉÍ¥½¸è€‰UÍ”¹½¹…±½¡½±¥ŒÝ¡¥Í­•ä…±Ñ•É¹…Ñ¥Ù”Ý¥Ñ Ñ¡”Í…µ”‰¥ÑÑ•ÉÌ…¹½É…¹”¸ˆô¤°(€‘É¥¹­I•¥Á” ‰Ý¡¥Í­•äµÍ½ÕÈˆ°€‰]¡¥Í­•äM½ÕÈˆ°€‰½­Ñ…¥°ˆ°€‰Q…ÉÐ±•µ½¸…¹Íµ½½Ñ Ý¡¥Í­•äµ…­”„±…ÍÍ¥ŒÍ¡…­•¸Í½ÕÈ¸ˆ°lˆÐ½è‰½ÕÉ‰½¸ˆ°€ˆÈ½è™É•Í ±•µ½¸©Õ¥”ˆ°€ˆÄ€Ä¼È½èÍ¥µÁ±”ÍåÉÕÀˆ°€ˆÈ•œÝ¡¥Ñ•Ì½ÁÑ¥½¹…°ˆ°€‰%”ˆ°€ˆÈ¡•ÉÉ¥•Ì‰t°l‰ÉäÍ¡…­”‰½ÕÉ‰½¸°±•µ½¸°ÍåÉÕÀ°…¹•œÝ¡¥Ñ”¥˜ÕÍ¥¹œ¸ˆ°€‰‘¥”…¹Í¡…­”¡…ÉÕ¹Ñ¥°¡¥±±•…¹™É½Ñ¡ä¸ˆ°€‰MÑÉ…¥¸½Ù•È™É•Í ¥”¥¸ÑÝ¼É½­Ì±…ÍÍ•Ì¸ˆ°€‰…É¹¥Í Ý¥Ñ ¡•ÉÉ¥•Ì…¹±•µ½¸¸‰t°l‰Ý¡¥Í­•äˆ°€‰±•µ½¸ˆ°€‰Í½ÕÈ‰t°ì…±½¡½±¥ŒèÑÉÕ”°…É¹¥Í è€‰¡•ÉÉä…¹±•µ½¸Á••°ˆ°±…ÍÍÝ…É”è€‰I½­Ì±…ÍÌˆ°…±½¡½±É••Y•ÉÍ¥½¸è€‰UÍ”¹½¹…±½¡½±¥Œ‰½ÕÉ‰½¸…±Ñ•É¹…Ñ¥Ù”½ÈÍÑ••Á•‰±…¬Ñ•„¸ˆô¤°(€‘É¥¹­I•¥Á” ‰µ½Í½ÜµµÕ±”ˆ°€‰5½Í½Ü5Õ±”ˆ°€‰½­Ñ…¥°ˆ°€‰Y½‘­„°ÍÁ¥ä¥¹•È‰••È°…¹±¥µ”Í•ÉÙ•¥”µ½±¸ˆ°lˆÐ½èÙ½‘­„ˆ°€ˆÄ½è™É•Í ±¥µ”©Õ¥”ˆ°€ˆà½è¥¹•È‰••Èˆ°€‰%”ˆ°€ˆÈ±¥µ”Ý•‘•Ì‰t°l‰¥±°ÑÝ¼µÕ±”µÕÌÝ¥Ñ ¥”¸ˆ°€‰A½ÕÈÙ½‘­„…¹±¥µ”©Õ¥”½Ù•ÈÑ¡”¥”¸ˆ°€‰Q½ÀÝ¥Ñ ¥¹•È‰••È…¹ÍÑ¥È•¹Ñ±ä¸ˆ°€‰…É¹¥Í Ý¥Ñ ±¥µ”¸‰t°l‰Ù½‘­„ˆ°€‰¥¹•Èˆ°€‰±¥µ”‰t°ì…±½¡½±¥ŒèÑÉÕ”°…É¹¥Í è€‰1¥µ”Ý•‘”…¹µ¥¹Ðˆ°±…ÍÍÝ…É”è€‰½ÁÁ•ÈµÕ±”µÕœˆ°…±½¡½±É••Y•ÉÍ¥½¸è€‰M­¥ÀÙ½‘­„…¹ÕÍ”•áÑÉ„¥¹•È‰••ÈÝ¥Ñ ±¥µ”¸ˆô¤°(€‘É¥¹­I•¥Á” ‰±•µ½¸µ‘É½Àˆ°€‰1•µ½¸É½Àˆ°€‰½­Ñ…¥°ˆ°€‰‰É¥¡ÐÙ½‘­„±•µ½¸½­Ñ…¥°Ý¥Ñ „±¥¡ÐÍÕ…ÈÉ¥´¸ˆ°lˆÐ½èÙ½‘­„ˆ°€ˆÈ½è™É•Í ±•µ½¸©Õ¥”ˆ°€ˆÄ€Ä¼È½èÍ¥µÁ±”ÍåÉÕÀˆ°€ˆÄ½è½É…¹”±¥ÅÕ•ÕÈˆ°€‰MÕ…Èˆ°€‰%”‰t°l‰I¥´ÑÝ¼½ÕÁ”±…ÍÍ•ÌÝ¥Ñ ±•µ½¸…¹ÍÕ…È¸ˆ°€‰M¡…­”Ù½‘­„°±•µ½¸©Õ¥”°ÍåÉÕÀ°½É…¹”±¥ÅÕ•ÕÈ°…¹¥”Õ¹Ñ¥°™É½ÍÑä¸ˆ°€‰½Õ‰±”ÍÑÉ…¥¸¥¹Ñ¼Ñ¡”ÁÉ•Á…É•±…ÍÍ•Ì¸ˆ°€‰…É¹¥Í Ý¥Ñ „±•µ½¸ÑÝ¥ÍÐ¸‰t°l‰Ù½‘­„ˆ°€‰±•µ½¸ˆ°€‰Á…ÉÑä‰t°ì…±½¡½±¥ŒèÑÉÕ”°…É¹¥Í è€‰1•µ½¸ÑÝ¥ÍÐˆ°±…ÍÍÝ…É”è€‰½ÕÁ”±…ÍÌˆ°…±½¡½±É••Y•ÉÍ¥½¸è€‰M¡…­”±•µ½¸©Õ¥”°ÍåÉÕÀ°½É…¹”©Õ¥”°…¹ÍÁ…É­±¥¹œÝ…Ñ•È¸ˆô¤°(€‘É¥¹­I•¥Á” ‰Á•… µ‰•±±¥¹¤ˆ°€‰A•… 	•±±¥¹¤ˆ°€‰½­Ñ…¥°ˆ°€‰A•… ÁÕË¥”…¹ÍÁ…É­±¥¹œÝ¥¹”µ…­”…¸•…Íä‰ÉÕ¹ Ñ½…ÍÐ¸ˆ°lˆÄ¼ÈÕÀÁ•… ÁÕË¥”ˆ°€ˆà½è¡¥±±•ÁÉ½Í•¼ˆ°€ˆÈÑ¡¥¸Á•… Í±¥•Ì‰t°l‰MÁ½½¸€ÈÑ…‰±•ÍÁ½½¹ÌÁ•… ÁÕË¥”¥¹Ñ¼•… ™±ÕÑ”¸ˆ°€‰M±½Ý±äÑ½ÀÝ¥Ñ ¡¥±±•ÁÉ½Í•¼¸ˆ°€‰MÑ¥È½¹”Ù•Éä•¹Ñ±ä¸ˆ°€‰…É¹¥Í Ý¥Ñ „Á•… Í±¥”¸‰t°l‰Á•… ˆ°€‰‰ÉÕ¹ ˆ°€‰ÍÁ…É­±¥¹œ‰t°ì…±½¡½±¥ŒèÑÉÕ”°…É¹¥Í è€‰Q¡¥¸Á•… Í±¥”ˆ°±…ÍÍÝ…É”è€‰¡…µÁ…¹”™±ÕÑ”ˆ°…±½¡½±É••Y•ÉÍ¥½¸è€‰UÍ”¡¥±±•ÍÁ…É­±¥¹œÝ¡¥Ñ”É…Á”©Õ¥”¸ˆô¤°(€‘É¥¹­I•¥Á” ‰±…ÍÍ¥Œµµ¥µ½Í„ˆ°€‰±…ÍÍ¥Œ5¥µ½Í„ˆ°€‰½­Ñ…¥°ˆ°€‰É•Í ½É…¹”©Õ¥”…¹ÍÁ…É­±¥¹œÝ¥¹”™½È…¸Õ¹™ÕÍÍä‰ÉÕ¹ ‘É¥¹¬¸ˆ°lˆØ½è¡¥±±•ÁÉ½Í•¼ˆ°€ˆØ½è¡¥±±•