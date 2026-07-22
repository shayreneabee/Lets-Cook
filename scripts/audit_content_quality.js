const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
let source = fs.readFileSync(path.join(root, "app.js"), "utf8");

source = source.replace(
  /Promise\.all\(\[loadRecipeDatabase\(\), loadLetsCookState\(\)\]\)\.finally\(\(\) => \{[\s\S]*?\n\}\);\s*$/,
  ""
);

source += `
globalThis.__contentQualityAudit = {
  recipes,
  recipeIdAliases,
  canonicalRecipeId,
  allRecipeCollection,
  cuisines,
  controlledCuisineRecipeIds,
  trainingOnlyRecipeIds: [...trainingOnlyRecipeIds],
  generalRecipeCollection: allRecipeCollection().map((recipe) => ({
    id: recipe.id,
    title: recipe.title,
    cuisine: recipe.cuisine || "",
    category: recipe.category || "",
    primaryCookbookSection: recipeCookbookPrimarySection(recipe)
  })),
  cookbookSections: allRecipeCollection().map((recipe) => ({
    id: recipe.id,
    title: recipe.title,
    cuisine: recipe.cuisine || "",
    category: recipe.category || "",
    primaryCookbookSection: recipeCookbookPrimarySection(recipe),
    image: resolveRecipeImage(recipe).image
  })),
  cookbookChapterResults: cookbookChapterDefinitions.map((chapter) => ({
    id: chapter.id,
    title: chapter.title,
    recipes: recipesForCookbookChapter(chapter).map((recipe) => ({
      id: recipe.id,
      title: recipe.title,
      image: resolveRecipeImage(recipe).image
    }))
  })),
  curatedHolidayTables,
  livingCookbookChapters,
  menuPairings,
  cuisineCollections: cuisines.map((cuisine) => ({
    id: cuisine.id,
    name: cuisine.name,
    recipes: recipesForCuisine(cuisine.id, 36).map((recipe) => ({
      id: recipe.id,
      title: recipe.title,
      cuisine: recipe.cuisine || "",
      category: recipe.category || "",
      image: resolveRecipeImage(recipe).image
    }))
  })),
  imageRows: recipes.map((recipe) => {
    const resolved = resolveRecipeImage(recipe);
    return {
      id: recipe.id,
      title: recipe.title,
      cuisine: recipe.cuisine || "",
      category: recipe.category || "",
      image: resolved.image,
      source: resolved.source,
      fallbackUsed: resolved.fallbackUsed,
      missingRecipeImage: resolved.missingImage
    };
  }),
  ingredientSearchSmoke: ["ribeye", "chicken thighs", "ground beef"].map((term) => ({
    term,
    matches: recipesForIngredient(term).slice(0, 8).map((recipe) => ({
      id: recipe.id,
      title: recipe.title,
      cuisine: recipe.cuisine || "",
      category: recipe.category || ""
    }))
  }))
};
`;

const storage = new Map();
const element = {
  addEventListener() {},
  classList: { add() {}, remove() {}, toggle() { return false; } },
  setAttribute() {},
  getAttribute() { return ""; },
  querySelector() { return element; },
  querySelectorAll() { return []; },
  style: {},
  dataset: {}
};

const context = {
  console,
  setTimeout,
  clearTimeout,
  requestAnimationFrame(callback) { callback(); },
  FormData: class {},
  HTMLImageElement: class {},
  localStorage: {
    getItem(key) { return storage.get(key) ?? null; },
    setItem(key, value) { storage.set(key, String(value)); }
  },
  location: { hash: "" },
  navigator: {},
  addEventListener() {},
  scrollTo() {},
  document: {
    querySelector() { return element; },
    querySelectorAll() { return []; },
    addEventListener() {},
    createElement() { return element; }
  },
  fetch: async () => ({ ok: false, json: async () => ({}), text: async () => "" })
};
context.window = context;
context.globalThis = context;

vm.createContext(context);
vm.runInContext(source, context, { filename: "app.js" });

const audit = context.__contentQualityAudit;
const recipes = audit.recipes;
const canonicalRecipeId = (id) => audit.canonicalRecipeId ? audit.canonicalRecipeId(id) : (audit.recipeIdAliases?.[id] || id);
const canonicalRecipes = recipes.filter((recipe) => canonicalRecipeId(recipe.id) === recipe.id);
const retiredDuplicateRecords = recipes
  .filter((recipe) => canonicalRecipeId(recipe.id) !== recipe.id)
  .map((recipe) => ({ ...compactRecipe(recipe), canonicalId: canonicalRecipeId(recipe.id) }));
const recipeIds = new Set(canonicalRecipes.map((recipe) => recipe.id));
const hasRecipeId = (id) => recipeIds.has(canonicalRecipeId(id));
const normalize = (value) => String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const requiredHolidays = [
  "New Year's",
  "Valentine's Day",
  "Mardi Gras",
  "St. Patrick's Day",
  "Easter",
  "Cinco de Mayo",
  "Mother's Day",
  "Father's Day",
  "Memorial Day",
  "Juneteenth",
  "Fourth of July",
  "Labor Day",
  "Halloween",
  "Thanksgiving",
  "Christmas",
  "Kwanzaa",
  "Hanukkah",
  "Diwali",
  "Lunar New Year",
  "Ramadan / Eid"
];

function duplicatesBy(items, keyFn) {
  const groups = new Map();
  for (const item of items) {
    const key = keyFn(item);
    if (!key) continue;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  }
  return [...groups.entries()]
    .filter(([, group]) => group.length > 1)
    .map(([key, group]) => ({ key, items: group }));
}

function idsFromTable(table = {}) {
  return [
    ...(table.main_recipe_ids || []),
    ...(table.appetizer_recipe_ids || []),
    ...(table.side_recipe_ids || []),
    ...(table.bread_recipe_ids || []),
    ...(table.sauce_recipe_ids || []),
    ...(table.drink_recipe_ids || []),
    ...(table.dessert_recipe_ids || []),
    ...(table.recipeIds || [])
  ];
}

function compactRecipe(recipe) {
  return { id: recipe.id, title: recipe.title, cuisine: recipe.cuisine || "", category: recipe.category || "" };
}

const duplicateRecipeIds = duplicatesBy(canonicalRecipes, (recipe) => recipe.id).map(({ key, items }) => ({ id: key, recipes: items.map(compactRecipe) }));
const duplicateRecipeTitles = duplicatesBy(canonicalRecipes, (recipe) => normalize(recipe.title)).map(({ key, items }) => ({ titleKey: key, recipes: items.map(compactRecipe) }));
const duplicateRecipeSlugs = duplicatesBy(canonicalRecipes, (recipe) => normalize(recipe.slug || recipe.id)).map(({ key, items }) => ({ slugKey: key, recipes: items.map(compactRecipe) }));
const normalizedIngredientSignature = (recipe) => [...new Set((recipe.ingredients || []).map((item) => normalize(String(item).replace(/\d+[\d/ .-]*/g, ""))).filter(Boolean))].sort().join("|");
const normalizedInstructionSignature = (recipe) => (recipe.instructions || recipe.steps || []).map((item) => normalize(item)).filter(Boolean).join("|");
const allowedIngredientVariationSets = new Set([
  "arizona-fry-bread|northern-plains-fry-bread"
]);
const ingredientSignatureGroups = duplicatesBy(canonicalRecipes, normalizedIngredientSignature)
  .filter((group) => group.items.length > 1 && group.key.split("|").length >= 3)
  .map(({ key, items }) => ({ signature: key, recipes: items.map(compactRecipe) }));
const ingredientVariationReviews = ingredientSignatureGroups.filter((group) => allowedIngredientVariationSets.has(group.recipes.map((recipe) => recipe.id).sort().join("|")));
const duplicateIngredientLists = ingredientSignatureGroups.filter((group) => !allowedIngredientVariationSets.has(group.recipes.map((recipe) => recipe.id).sort().join("|")));
const duplicateInstructionLists = duplicatesBy(canonicalRecipes, normalizedInstructionSignature)
  .filter((group) => group.items.length > 1 && group.key.split("|").length >= 3)
  .map(({ key, items }) => ({ signature: key, recipes: items.map(compactRecipe) }));

const imageRows = audit.imageRows.filter((row) => canonicalRecipeId(row.id) === row.id);
const imageGroups = duplicatesBy(imageRows, (row) => row.image).map(({ key, items }) => ({
  image: key,
  count: items.length,
  recipes: items.map(({ id, title, cuisine, category }) => ({ id, title, cuisine, category }))
}));
const unrelatedSharedImages = imageGroups.filter((group) => new Set(group.recipes.map((recipe) => normalize(recipe.title))).size > 1);
const imageReviewQueue = unrelatedSharedImages.flatMap((group) => group.recipes.slice(1).map((recipe) => ({
  ...recipe,
  reusedImage: group.image,
  expectedPath: `images/recipes/photo-review/${recipe.id}.jpg`,
  reason: "Primary image is shared with a different public dish and requires an exact replacement."
})));

const genericImagePatterns = [
  /^assets\/logo\.png$/,
  /^assets\/recipe-photo-needed\.svg$/,
  /^assets\/lc-seafood\.jpg$/,
  /^assets\/beautiful-chicken\.jpeg$/,
  /^assets\/american-food\.jpeg$/,
  /^assets\/lc-desserts\.jpg$/,
  /^assets\/lc-fried-rice\.jpg$/,
  /^assets\/lc-asian-food\.jpg$/,
  /^assets\/lc-african-food\.jpg$/,
  /^assets\/lc-indian-food\.jpg$/,
  /^assets\/german-food\.jpeg$/
];
const genericRecipeImages = imageRows.filter((row) => genericImagePatterns.some((pattern) => pattern.test(row.image)));
const missingImageFiles = imageRows.filter((row) => row.image && !row.image.startsWith("http") && !fs.existsSync(path.join(root, row.image)));
const fallbackImages = imageRows.filter((row) => row.fallbackUsed || row.missingRecipeImage);
const imageMismatchRules = [
  {
    name: "stew-or-pie-using-hamburger-steak",
    recipe: /(stew|shepherd|pie|bigos|paprikash|tagine)/i,
    image: /hamburger-steak-with-gravy|german-food/i,
    reason: "stew or pie recipe is using a hamburger steak/generic platter image"
  },
  {
    name: "adobo-using-smothered-chicken",
    recipe: /adobo|filipino/i,
    image: /smothered-chicken|beautiful-chicken/i,
    reason: "Filipino adobo is using a Southern smothered/generic chicken image"
  },
  {
    name: "smothered-chicken-using-adobo-or-generic",
    recipe: /smothered chicken/i,
    image: /adobo|lc-asian-food|beautiful-chicken/i,
    reason: "smothered chicken is using an adobo, Asian, or generic chicken image"
  }
];
const semanticImageMismatches = imageRows
  .map((row) => {
    const text = `${row.id} ${row.title} ${row.cuisine} ${row.category}`;
    const rule = imageMismatchRules.find((item) => item.recipe.test(text) && item.image.test(row.image));
    return rule ? { ...row, rule: rule.name, reason: rule.reason } : null;
  })
  .filter(Boolean);

const holidayTables = audit.curatedHolidayTables;
const holidayCoverage = requiredHolidays.map((title) => {
  const table = holidayTables.find((holiday) => normalize(holiday.title) === normalize(title));
  const ids = idsFromTable(table);
  const missingIds = ids.filter((id) => !hasRecipeId(id));
  const duplicateIds = duplicatesBy(ids.map((id) => ({ id })), (item) => item.id).map(({ key }) => key);
  return {
    title,
    present: Boolean(table),
    recipeCount: [...new Set(ids)].length,
    hasAppetizers: Boolean(table?.appetizer_recipe_ids?.length),
    hasMains: Boolean(table?.main_recipe_ids?.length),
    hasSides: Boolean(table?.side_recipe_ids?.length),
    hasDesserts: Boolean(table?.dessert_recipe_ids?.length),
    hasDrinks: Boolean(table?.drink_recipe_ids?.length),
    hasTimeline: Boolean(table?.timeline?.length),
    hasShopping: Boolean(table?.shopping?.length),
    missingIds,
    duplicateIds
  };
});

const incompleteHolidayTables = holidayCoverage.filter((holiday) =>
  !holiday.present
  || holiday.recipeCount < 8
  || !holiday.hasAppetizers
  || !holiday.hasMains
  || !holiday.hasSides
  || !holiday.hasDesserts
  || !holiday.hasDrinks
  || !holiday.hasTimeline
  || !holiday.hasShopping
  || holiday.missingIds.length
  || holiday.duplicateIds.length
);

const menuReferenceIssues = audit.menuPairings.map((menu) => {
  const ids = idsFromTable(menu);
  return {
    occasion: menu.occasion,
    cuisine: menu.cuisine,
    missingIds: ids.filter((id) => !hasRecipeId(id)),
    duplicateIds: duplicatesBy(ids.map((id) => ({ id })), (item) => item.id).map(({ key }) => key)
  };
}).filter((row) => row.missingIds.length || row.duplicateIds.length);

const incompleteRecipes = canonicalRecipes.map((recipe) => {
  const missing = [];
  if (!recipe.id) missing.push("id");
  if (!recipe.title) missing.push("title");
  if (!recipe.description) missing.push("description");
  if (!Array.isArray(recipe.ingredients) || recipe.ingredients.length < 3) missing.push("ingredients");
  if ((!Array.isArray(recipe.instructions) || recipe.instructions.length < 3) && (!Array.isArray(recipe.steps) || recipe.steps.length < 3)) missing.push("instructions");
  if (!recipe.prep_time && !recipe.prep) missing.push("prep_time");
  if (!recipe.cook_time && !recipe.cook) missing.push("cook_time");
  if (!recipe.servings) missing.push("servings");
  if (!recipe.difficulty && !recipe.level) missing.push("difficulty");
  if (!recipe.cuisine) missing.push("cuisine");
  if (!recipe.category) missing.push("category");
  const recommendedMissing = ["cultural_origin", "chef_tips", "nutrition", "storage", "reheating", "pairings"].filter((field) => {
    const value = recipe[field];
    return value === undefined || value === null || value === "" || (Array.isArray(value) && !value.length);
  });
  return { ...compactRecipe(recipe), missing, recommendedMissing };
}).filter((row) => row.missing.length || row.recommendedMissing.length);
const recipesMissingRequiredDetails = incompleteRecipes.filter((row) => row.missing.length);
const recipesMissingRecommendedDetails = incompleteRecipes.filter((row) => row.recommendedMissing.length);

const forbiddenSpecialtyPattern = /pb&j|peanut butter|kids korner|apple nachos|ants on a log|scrambled eggs|plain toast|mini pizza|pizza faces|mac and cheese bites|smoothie cups|fruit kabob|fruit kabobs/i;
const trainingOnlyGeneralLeaks = audit.generalRecipeCollection.filter((recipe) => audit.trainingOnlyRecipeIds.includes(recipe.id));
const broadCuisineIds = new Set(["global", "hosting", "holiday"]);
const cuisineCollectionIssues = audit.cuisineCollections.flatMap((collection) => {
  const controlledIds = new Set(audit.controlledCuisineRecipeIds?.[collection.id] || []);
  const hasControlledMap = controlledIds.size > 0;
  if (collection.id === "holiday-sunday") return [];
  return collection.recipes
    .filter((recipe) => {
      const text = `${recipe.id} ${recipe.title} ${recipe.cuisine} ${recipe.category}`.toLowerCase();
      const forbidden = forbiddenSpecialtyPattern.test(text);
      const mismatched = hasControlledMap
        && !broadCuisineIds.has(collection.id)
        && recipe.cuisine !== collection.id
        && !controlledIds.has(recipe.id);
      return forbidden || mismatched;
    })
    .map((recipe) => ({
      cuisineId: collection.id,
      cuisineName: collection.name,
      recipe,
      reason: forbiddenSpecialtyPattern.test(`${recipe.id} ${recipe.title} ${recipe.cuisine} ${recipe.category}`.toLowerCase())
        ? "forbidden fallback/basic recipe"
        : "recipe cuisine does not match controlled cuisine mapping"
    }));
});
const ingredientSearchIssues = audit.ingredientSearchSmoke.filter((row) => !row.matches.length);

const cookbookClassificationRules = [
  {
    section: "desserts",
    forbidden: /\b(chicken|turkey|beef|steak|shrimp|fish|seafood|salmon|crab|oyster|pork|ham|soup|stew|gumbo|chili|chowder)\b/i,
    reason: "dessert chapter contains savory protein or soup language"
  },
  {
    section: "soups",
    forbidden: /\b(cake|cookie|cookies|pie|cobbler|pudding|shortcake|dessert|brownie|cupcake)\b/i,
    reason: "soup chapter contains dessert language"
  },
  {
    section: "salads",
    forbidden: /\b(cake|cookie|pie|pudding|soup|stew|gumbo|chili|biscuit|bread|rolls)\b/i,
    reason: "salad chapter contains dessert, soup, or bread language"
  },
  {
    section: "breads",
    forbidden: /\b(salad|soup|stew|gumbo|chili|shrimp|fish|seafood|salmon|crab|beef|steak|chicken|turkey)\b/i,
    reason: "bread chapter contains salad, soup, or entree language"
  },
  {
    section: "beef",
    forbidden: /\b(shrimp|fish|seafood|salmon|crab|oyster|turkey|cake|cookie|pie|dessert)\b/i,
    reason: "beef chapter contains seafood, poultry, or dessert language"
  },
  {
    section: "poultry",
    forbidden: /\b(beef|steak|brisket|shrimp|fish|seafood|salmon|crab|oyster|cake|cookie|pie|dessert)\b/i,
    reason: "poultry chapter contains beef, seafood, or dessert language"
  },
  {
    section: "fish-seafood",
    forbidden: /\b(beef|steak|brisket|chicken|turkey|cake|cookie|pie|dessert)\b/i,
    reason: "fish and seafood chapter contains beef, poultry, or dessert language"
  }
];

const cookbookClassificationIssues = audit.cookbookSections.flatMap((recipe) => {
  const text = `${recipe.id} ${recipe.title} ${recipe.category} ${recipe.cuisine}`.toLowerCase();
  if (recipe.primaryCookbookSection === "beef" && /chicken fried steak/i.test(text)) return [];
  if (recipe.primaryCookbookSection === "beef" && /(shepherd|cottage).+pie/i.test(text)) return [];
  if (recipe.primaryCookbookSection === "poultry" && /chicken.+pot pie|chicken pot pie/i.test(text)) return [];
  const rule = cookbookClassificationRules.find((item) => item.section === recipe.primaryCookbookSection && item.forbidden.test(text));
  return rule ? [{ ...recipe, reason: rule.reason }] : [];
});
const cookbookCardDuplicateIssues = audit.cookbookChapterResults.flatMap((chapter) => {
  const duplicateIds = duplicatesBy(chapter.recipes, (recipe) => recipe.id).map(({ key }) => key);
  const duplicateImages = duplicatesBy(chapter.recipes, (recipe) => recipe.image).map(({ key, items }) => ({ image: key, recipeIds: items.map((recipe) => recipe.id) }));
  return duplicateIds.length || duplicateImages.length ? [{ chapter: chapter.id, duplicateIds, duplicateImages }] : [];
});

const report = {
  generatedAt: new Date().toISOString(),
  summary: {
    totalRecipes: canonicalRecipes.length,
    retiredDuplicateRecords: retiredDuplicateRecords.length,
    duplicateRecipeIdGroups: duplicateRecipeIds.length,
    duplicateRecipeTitleGroups: duplicateRecipeTitles.length,
    duplicateRecipeSlugGroups: duplicateRecipeSlugs.length,
    duplicateIngredientListGroups: duplicateIngredientLists.length,
    ingredientVariationReviewGroups: ingredientVariationReviews.length,
    duplicateInstructionListGroups: duplicateInstructionLists.length,
    uniqueImages: new Set(imageRows.map((row) => row.image)).size,
    sharedImageGroups: imageGroups.length,
    unrelatedSharedImageGroups: unrelatedSharedImages.length,
    imageReviewQueueItems: imageReviewQueue.length,
    genericRecipeImages: genericRecipeImages.length,
    semanticImageMismatches: semanticImageMismatches.length,
    fallbackImages: fallbackImages.length,
    missingImageFiles: missingImageFiles.length,
    requiredHolidayCount: requiredHolidays.length,
    completeRequiredHolidays: holidayCoverage.filter((holiday) => !incompleteHolidayTables.includes(holiday)).length,
    incompleteRequiredHolidays: incompleteHolidayTables.length,
    menuReferenceIssues: menuReferenceIssues.length,
    cuisineCollectionIssues: cuisineCollectionIssues.length,
    cookbookClassificationIssues: cookbookClassificationIssues.length,
    cookbookCardDuplicateIssues: cookbookCardDuplicateIssues.length,
    ingredientSearchIssues: ingredientSearchIssues.length,
    trainingOnlyGeneralLeaks: trainingOnlyGeneralLeaks.length,
    recipesMissingRequiredDetails: recipesMissingRequiredDetails.length,
    recipesMissingRecommendedDetails: recipesMissingRecommendedDetails.length
  },
  duplicateRecipeIds,
  duplicateRecipeTitles,
  duplicateRecipeSlugs,
  duplicateIngredientLists,
  ingredientVariationReviews,
  duplicateInstructionLists,
  retiredDuplicateRecords,
  sharedImages: imageGroups,
  unrelatedSharedImages,
  imageReviewQueue,
  cuisineCollections: audit.cuisineCollections.filter((collection) => audit.controlledCuisineRecipeIds?.[collection.id]?.length),
  genericRecipeImages,
  semanticImageMismatches,
  fallbackImages,
  missingImageFiles,
  holidayCoverage,
  incompleteHolidayTables,
  menuReferenceIssues,
  cuisineCollectionIssues,
  cookbookSections: audit.cookbookSections,
  cookbookClassificationIssues,
  cookbookCardDuplicateIssues,
  ingredientSearchSmoke: audit.ingredientSearchSmoke,
  ingredientSearchIssues,
  trainingOnlyGeneralLeaks,
  recipesMissingRequiredDetails,
  recipesMissingRecommendedDetails,
  incompleteRecipes
};

const dataDir = path.join(root, "data");
fs.mkdirSync(dataDir, { recursive: true });
fs.writeFileSync(path.join(dataDir, "content-quality-audit.json"), `${JSON.stringify(report, null, 2)}\n`);

const md = [
  "# Let's Cook Y'all Content Quality Audit",
  "",
  `Generated: ${report.generatedAt}`,
  "",
  "## Summary",
  "",
  `- Recipes audited: ${report.summary.totalRecipes}`,
  `- Retired duplicate recipe records: ${report.summary.retiredDuplicateRecords}`,
  `- Duplicate recipe ID groups: ${report.summary.duplicateRecipeIdGroups}`,
  `- Duplicate recipe title groups: ${report.summary.duplicateRecipeTitleGroups}`,
  `- Duplicate recipe slug groups: ${report.summary.duplicateRecipeSlugGroups}`,
  `- Duplicate ingredient-list groups: ${report.summary.duplicateIngredientListGroups}`,
  `- Intentional ingredient-list variations reviewed: ${report.summary.ingredientVariationReviewGroups}`,
  `- Duplicate instruction-list groups: ${report.summary.duplicateInstructionListGroups}`,
  `- Shared image groups: ${report.summary.sharedImageGroups}`,
  `- Unrelated shared image groups: ${report.summary.unrelatedSharedImageGroups}`,
  `- Image review queue items: ${report.summary.imageReviewQueueItems}`,
  `- Generic recipe image assignments: ${report.summary.genericRecipeImages}`,
  `- Semantic image mismatches: ${report.summary.semanticImageMismatches}`,
  `- Fallback/queued images: ${report.summary.fallbackImages}`,
  `- Missing image files: ${report.summary.missingImageFiles}`,
  `- Complete required holidays: ${report.summary.completeRequiredHolidays} of ${report.summary.requiredHolidayCount}`,
  `- Holiday tables needing work: ${report.summary.incompleteRequiredHolidays}`,
  `- Menu reference issue groups: ${report.summary.menuReferenceIssues}`,
  `- Cuisine collection issues: ${report.summary.cuisineCollectionIssues}`,
  `- Cookbook classification issues: ${report.summary.cookbookClassificationIssues}`,
  `- Cookbook duplicate-card issues: ${report.summary.cookbookCardDuplicateIssues}`,
  `- Ingredient search smoke issues: ${report.summary.ingredientSearchIssues}`,
  `- Training-only recipes in general discovery: ${report.summary.trainingOnlyGeneralLeaks}`,
  `- Recipes missing required details: ${report.summary.recipesMissingRequiredDetails}`,
  `- Recipes missing recommended enrichment details: ${report.summary.recipesMissingRecommendedDetails}`,
  "",
  "## Required Holiday Coverage",
  "",
  ...holidayCoverage.map((holiday) => `- ${holiday.present && !incompleteHolidayTables.includes(holiday) ? "OK" : "NEEDS WORK"}: ${holiday.title} (${holiday.recipeCount} recipes)`),
  "",
  "## Top Shared Images",
  "",
  ...imageGroups.slice(0, 20).map((group) => `- ${group.image}: ${group.count} recipes`),
  "",
  "## Generic Recipe Images To Replace",
  "",
  ...genericRecipeImages.slice(0, 40).map((row) => `- ${row.id}: ${row.title} -> ${row.image}`),
  "",
  "## Semantic Image Mismatches",
  "",
  ...(semanticImageMismatches.length ? semanticImageMismatches.map((row) => `- ${row.id}: ${row.title} -> ${row.image} (${row.reason})`) : ["- None"]),
  "",
  "## Menu Reference Issues",
  "",
  ...(menuReferenceIssues.length ? menuReferenceIssues.map((row) => `- ${row.cuisine} / ${row.occasion}: missing [${row.missingIds.join(", ")}], duplicate [${row.duplicateIds.join(", ")}]`) : ["- None"]),
  "",
  "## Cuisine Collection Issues",
  "",
  ...(cuisineCollectionIssues.length ? cuisineCollectionIssues.map((row) => `- ${row.cuisineName}: ${row.recipe.id} / ${row.recipe.title} (${row.reason})`) : ["- None"]),
  "",
  "## Cookbook Classification Issues",
  "",
  ...(cookbookClassificationIssues.length ? cookbookClassificationIssues.map((row) => `- ${row.primaryCookbookSection}: ${row.id} / ${row.title} (${row.reason})`) : ["- None"]),
  "",
  "## Ingredient Search Smoke",
  "",
  ...audit.ingredientSearchSmoke.map((row) => `- ${row.matches.length ? "OK" : "NEEDS WORK"}: ${row.term} -> ${row.matches.map((match) => match.title).join(", ") || "no matches"}`),
  "",
  "Full machine-readable details are in `data/content-quality-audit.json`."
].join("\n");

fs.writeFileSync(path.join(dataDir, "content-quality-audit.md"), `${md}\n`);

console.log(`Recipes audited: ${report.summary.totalRecipes}`);
console.log(`Retired duplicate recipe records: ${report.summary.retiredDuplicateRecords}`);
console.log(`Duplicate recipe ID groups: ${report.summary.duplicateRecipeIdGroups}`);
console.log(`Duplicate recipe title groups: ${report.summary.duplicateRecipeTitleGroups}`);
console.log(`Duplicate recipe slug groups: ${report.summary.duplicateRecipeSlugGroups}`);
console.log(`Duplicate ingredient-list groups: ${report.summary.duplicateIngredientListGroups}`);
console.log(`Intentional ingredient-list variations reviewed: ${report.summary.ingredientVariationReviewGroups}`);
console.log(`Duplicate instruction-list groups: ${report.summary.duplicateInstructionListGroups}`);
console.log(`Unrelated shared image groups: ${report.summary.unrelatedSharedImageGroups}`);
console.log(`Image review queue items: ${report.summary.imageReviewQueueItems}`);
console.log(`Generic recipe images: ${report.summary.genericRecipeImages}`);
console.log(`Semantic image mismatches: ${report.summary.semanticImageMismatches}`);
console.log(`Fallback/queued images: ${report.summary.fallbackImages}`);
console.log(`Missing image files: ${report.summary.missingImageFiles}`);
console.log(`Complete required holidays: ${report.summary.completeRequiredHolidays}/${report.summary.requiredHolidayCount}`);
console.log(`Cuisine collection issues: ${report.summary.cuisineCollectionIssues}`);
console.log(`Cookbook classification issues: ${report.summary.cookbookClassificationIssues}`);
console.log(`Cookbook duplicate-card issues: ${report.summary.cookbookCardDuplicateIssues}`);
console.log(`Ingredient search smoke issues: ${report.summary.ingredientSearchIssues}`);
console.log(`Training-only recipes in general discovery: ${report.summary.trainingOnlyGeneralLeaks}`);
console.log("Reports: data/content-quality-audit.json, data/content-quality-audit.md");

if (missingImageFiles.length || duplicateRecipeIds.length || duplicateRecipeTitles.length || duplicateRecipeSlugs.length || duplicateIngredientLists.length || duplicateInstructionLists.length || semanticImageMismatches.length || menuReferenceIssues.length || cuisineCollectionIssues.length || cookbookClassificationIssues.length || cookbookCardDuplicateIssues.length || ingredientSearchIssues.length || trainingOnlyGeneralLeaks.length) {
  process.exitCode = 1;
}
