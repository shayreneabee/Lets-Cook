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
  cuisines,
  controlledCuisineRecipeIds,
  trainingOnlyRecipeIds: [...trainingOnlyRecipeIds],
  generalRecipeCollection: allRecipeCollection().map((recipe) => ({
    id: recipe.id,
    title: recipe.title,
    cuisine: recipe.cuisine || "",
    category: recipe.category || ""
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
const recipeIds = new Set(recipes.map((recipe) => recipe.id));
const canonicalRecipeId = (id) => audit.recipeIdAliases?.[id] || id;
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

const duplicateRecipeIds = duplicatesBy(recipes, (recipe) => recipe.id).map(({ key, items }) => ({ id: key, recipes: items.map(compactRecipe) }));
const duplicateRecipeTitles = duplicatesBy(recipes, (recipe) => normalize(recipe.title)).map(({ key, items }) => ({ titleKey: key, recipes: items.map(compactRecipe) }));

const imageRows = audit.imageRows;
const imageGroups = duplicatesBy(imageRows, (row) => row.image).map(({ key, items }) => ({
  image: key,
  count: items.length,
  recipes: items.map(({ id, title, cuisine, category }) => ({ id, title, cuisine, category }))
}));

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

const incompleteRecipes = recipes.map((recipe) => {
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

const report = {
  generatedAt: new Date().toISOString(),
  summary: {
    totalRecipes: recipes.length,
    duplicateRecipeIdGroups: duplicateRecipeIds.length,
    duplicateRecipeTitleGroups: duplicateRecipeTitles.length,
    uniqueImages: new Set(imageRows.map((row) => row.image)).size,
    sharedImageGroups: imageGroups.length,
    genericRecipeImages: genericRecipeImages.length,
    fallbackImages: fallbackImages.length,
    missingImageFiles: missingImageFiles.length,
    requiredHolidayCount: requiredHolidays.length,
    completeRequiredHolidays: holidayCoverage.filter((holiday) => !incompleteHolidayTables.includes(holiday)).length,
    incompleteRequiredHolidays: incompleteHolidayTables.length,
    menuReferenceIssues: menuReferenceIssues.length,
    cuisineCollectionIssues: cuisineCollectionIssues.length,
    ingredientSearchIssues: ingredientSearchIssues.length,
    trainingOnlyGeneralLeaks: trainingOnlyGeneralLeaks.length,
    recipesMissingRequiredDetails: recipesMissingRequiredDetails.length,
    recipesMissingRecommendedDetails: recipesMissingRecommendedDetails.length
  },
  duplicateRecipeIds,
  duplicateRecipeTitles,
  sharedImages: imageGroups,
  cuisineCollections: audit.cuisineCollections.filter((collection) => audit.controlledCuisineRecipeIds?.[collection.id]?.length),
  genericRecipeImages,
  fallbackImages,
  missingImageFiles,
  holidayCoverage,
  incompleteHolidayTables,
  menuReferenceIssues,
  cuisineCollectionIssues,
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
  `- Duplicate recipe ID groups: ${report.summary.duplicateRecipeIdGroups}`,
  `- Duplicate recipe title groups: ${report.summary.duplicateRecipeTitleGroups}`,
  `- Shared image groups: ${report.summary.sharedImageGroups}`,
  `- Generic recipe image assignments: ${report.summary.genericRecipeImages}`,
  `- Fallback/queued images: ${report.summary.fallbackImages}`,
  `- Missing image files: ${report.summary.missingImageFiles}`,
  `- Complete required holidays: ${report.summary.completeRequiredHolidays} of ${report.summary.requiredHolidayCount}`,
  `- Holiday tables needing work: ${report.summary.incompleteRequiredHolidays}`,
  `- Menu reference issue groups: ${report.summary.menuReferenceIssues}`,
  `- Cuisine collection issues: ${report.summary.cuisineCollectionIssues}`,
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
  "## Menu Reference Issues",
  "",
  ...(menuReferenceIssues.length ? menuReferenceIssues.map((row) => `- ${row.cuisine} / ${row.occasion}: missing [${row.missingIds.join(", ")}], duplicate [${row.duplicateIds.join(", ")}]`) : ["- None"]),
  "",
  "## Cuisine Collection Issues",
  "",
  ...(cuisineCollectionIssues.length ? cuisineCollectionIssues.map((row) => `- ${row.cuisineName}: ${row.recipe.id} / ${row.recipe.title} (${row.reason})`) : ["- None"]),
  "",
  "## Ingredient Search Smoke",
  "",
  ...audit.ingredientSearchSmoke.map((row) => `- ${row.matches.length ? "OK" : "NEEDS WORK"}: ${row.term} -> ${row.matches.map((match) => match.title).join(", ") || "no matches"}`),
  "",
  "Full machine-readable details are in `data/content-quality-audit.json`."
].join("\n");

fs.writeFileSync(path.join(dataDir, "content-quality-audit.md"), `${md}\n`);

console.log(`Recipes audited: ${report.summary.totalRecipes}`);
console.log(`Duplicate recipe ID groups: ${report.summary.duplicateRecipeIdGroups}`);
console.log(`Generic recipe images: ${report.summary.genericRecipeImages}`);
console.log(`Fallback/queued images: ${report.summary.fallbackImages}`);
console.log(`Missing image files: ${report.summary.missingImageFiles}`);
console.log(`Complete required holidays: ${report.summary.completeRequiredHolidays}/${report.summary.requiredHolidayCount}`);
console.log(`Cuisine collection issues: ${report.summary.cuisineCollectionIssues}`);
console.log(`Ingredient search smoke issues: ${report.summary.ingredientSearchIssues}`);
console.log(`Training-only recipes in general discovery: ${report.summary.trainingOnlyGeneralLeaks}`);
console.log("Reports: data/content-quality-audit.json, data/content-quality-audit.md");

if (missingImageFiles.length || duplicateRecipeIds.length || menuReferenceIssues.length || cuisineCollectionIssues.length || ingredientSearchIssues.length || trainingOnlyGeneralLeaks.length) {
  process.exitCode = 1;
}
