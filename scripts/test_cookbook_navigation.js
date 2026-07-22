const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert");

const root = path.resolve(__dirname, "..");
let source = fs.readFileSync(path.join(root, "app.js"), "utf8");

source = source.replace(
  /Promise\.all\(\[loadRecipeDatabase\(\), loadLetsCookState\(\)\]\)\.finally\(\(\) => \{[\s\S]*?\n\}\);\s*$/,
  ""
);

source += `
globalThis.__cookbookTest = {
  cookbookChapterDefinitions,
  cookbookChapterKeys,
  cookbookChapterByKey,
  cookbookSectionRoute,
  cookbookChapterShelf,
  dailyDiverseRecipes,
  recipesForCookbookChapter,
  recipePhotoFor,
  recipeCookbookPrimarySection,
  allRecipeCollection,
  rankRecipesForDiscovery,
  routeParts,
  recipeCard,
  siteFooterMarkup,
  renderCommunity,
  communityPostCard,
  cookingProfileHome,
  communityVideoForm,
  renderRecipes,
  miscellaneousChapterMarkup,
  augustCalendarConfig,
  augustDateKeys,
  defaultMenuForDate,
  generatedMenusForWeek,
  plannerRecipeTraits,
  resolvedKitchenMenu,
  calendarRecipe,
  calendarMealsForDates,
  buildKitchenGroceryItems,
  todayPlateSection,
  monthlyKitchenCalendarSection,
  groceryPlanningSection,
  homepageWeeklyStrip,
  renderLetsPlan,
  renderLetsCookHome,
  cookAlongEligible,
  cookAlongTaskFor,
  setHousehold(value) { household = { ...household, ...value }; },
  setPantryOwned(value) { pantryOwned = value; }
};
`;

const storage = new Map();
const element = {
  addEventListener() {},
  classList: { add() {}, remove() {}, toggle() { return false; }, contains() { return false; } },
  setAttribute() {},
  getAttribute() { return ""; },
  querySelector() { return element; },
  querySelectorAll() { return []; },
  focus() {},
  scrollIntoView() {},
  insertAdjacentHTML() {},
  style: {},
  dataset: {}
};

const context = {
  console,
  setTimeout,
  clearTimeout,
  URLSearchParams,
  requestAnimationFrame(callback) { callback(); },
  FormData: class {},
  HTMLImageElement: class {},
  localStorage: {
    getItem(key) { return storage.get(key) ?? null; },
    setItem(key, value) { storage.set(key, String(value)); }
  },
  location: { hash: "" },
  navigator: {},
  matchMedia() { return { matches: true }; },
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

const api = context.__cookbookTest;
const expectedTopLevelSections = ["breakfast", "soups", "salads", "vegetables", "main-dishes", "sides", "breads", "cookies", "desserts", "miscellaneous"];
const expectedSections = ["breakfast", "soups", "salads", "vegetables", "main-dishes", "beef", "poultry", "fish-seafood", "sides", "breads", "cookies", "desserts", "miscellaneous"];
assert.deepStrictEqual([...api.cookbookChapterDefinitions].map((chapter) => chapter.id), expectedTopLevelSections, "Cookbook must show the approved divider cards in order");
assert.deepStrictEqual([...api.cookbookChapterKeys], expectedSections, "Cookbook must expose top-level and Main Dish chapter keys");

for (const key of expectedSections) {
  const chapter = api.cookbookChapterByKey(key);
  assert(chapter, `Missing cookbook chapter: ${key}`);
  const chapterRecipes = api.recipesForCookbookChapter(chapter);
  assert(chapterRecipes.length > 0, `${key} must contain real recipes`);
  assert(chapterRecipes.every((recipe) => key === "main-dishes" ? ["beef", "poultry", "fish-seafood"].includes(api.recipeCookbookPrimarySection(recipe)) : api.recipeCookbookPrimarySection(recipe) === key), `${key} contains a misclassified recipe`);
  assert.strictEqual(new Set(chapterRecipes.map(api.recipePhotoFor)).size, chapterRecipes.length, `${key} must not repeat a primary image in one cookbook result set`);
  assert.strictEqual(api.cookbookSectionRoute(key), `#recipes?section=${key}`, `${key} route is not canonical`);
}

const cookies = api.recipesForCookbookChapter(api.cookbookChapterByKey("cookies"));
assert(cookies.some((recipe) => recipe.id === "chewy-chocolate-cookies"), "Cookies must include Chocolate Chip Cookies");
assert(!cookies.some((recipe) => api.recipeCookbookPrimarySection(recipe) === "soups"), "Cookies must not show soups");

const poultry = api.recipesForCookbookChapter(api.cookbookChapterByKey("poultry"));
assert(poultry.some((recipe) => recipe.id === "orange-chicken"), "Orange Chicken must be Poultry");
assert(poultry.every((recipe) => api.recipeCookbookPrimarySection(recipe) === "poultry"), "Poultry must exclude beef and seafood");

const desserts = api.recipesForCookbookChapter(api.cookbookChapterByKey("desserts"));
assert(desserts.some((recipe) => recipe.id === "carrot-cake"), "Carrot Cake must be Desserts");
assert(!desserts.some((recipe) => recipe.id === "orange-chicken"), "Desserts must exclude Orange Chicken");

const byId = (id) => api.allRecipeCollection().find((recipe) => recipe.id === id);
assert.strictEqual(api.recipeCookbookPrimarySection(byId("alabama-white-sauce-chicken")), "poultry", "A sauce name must not pull a chicken main into Miscellaneous");
assert.strictEqual(api.recipeCookbookPrimarySection(byId("argentinian-chimichurri-steak")), "beef", "Chimichurri Steak must remain in Beef");
assert.strictEqual(api.recipeCookbookPrimarySection(byId("montana-huckleberry-crisp")), "desserts", "Fruit crisps must be Desserts");
assert.strictEqual(api.recipeCookbookPrimarySection(byId("apple-cider-doughnuts")), "desserts", "Doughnuts must be Desserts");
assert.strictEqual(api.recipeCookbookPrimarySection(byId("white-sandwich-bread")), "breads", "Sandwich bread must remain in Breads");
assert.strictEqual(api.recipeCookbookPrimarySection(byId("deviled-eggs")), "miscellaneous", "Deviled Eggs belong in Miscellaneous, not Vegetables");
assert.strictEqual(api.recipeCookbookPrimarySection(byId("frito-pie")), "miscellaneous", "Savory Frito Pie must not be classified as soup or dessert");
assert.strictEqual(api.recipeCookbookPrimarySection(byId("idaho-huckleberry-pancakes")), "breakfast", "Pancakes belong in Breakfast");
assert.strictEqual(api.recipeCookbookPrimarySection(byId("southern-baked-mac-cheese")), "sides", "Mac and Cheese belongs in Sides");
const miscellaneous = api.recipesForCookbookChapter(api.cookbookChapterByKey("miscellaneous"));
for (const duplicateId of ["cuban-sandwich-press", "mini-quesadillas", "cowboy-trail-mix", "tex-mex-breakfast-tacos", "salvadoran-pupusa-supper"]) assert(!miscellaneous.some((recipe) => recipe.id === duplicateId), `${duplicateId} must not duplicate its canonical dish in Miscellaneous`);
const miscellaneousMarkup = api.miscellaneousChapterMarkup(miscellaneous);
for (const group of ["Appetizers, Snacks & Party Food", "Pasta, Rice, Pizza & Handhelds", "Sauces, Condiments & Seasonings", "Drinks & Sips"]) assert(miscellaneousMarkup.includes(group), `Miscellaneous must include the ${group} shelf`);
const chapterShelf = api.cookbookChapterShelf("poultry");
assert.strictEqual((chapterShelf.match(/data-cookbook-chapter-select=/g) || []).length, 10, "Recipe box must render ten top-level divider cards");
assert(!chapterShelf.includes("cookbook-chapter-scroll"), "Recipe box must not use the old horizontal scroller");
assert(chapterShelf.includes('data-living-recipe-box') && chapterShelf.includes('data-recipe-box-toggle'), "Living Cookbook must use an interactive recipe box with an open control");
assert(chapterShelf.includes('class="living-recipe-box is-open"'), "A direct cookbook chapter route must open the recipe box");
const closedChapterShelf = api.cookbookChapterShelf();
assert(closedChapterShelf.includes('class="living-recipe-box "'), "The cookbook must load with its recipe box closed");
assert(chapterShelf.includes('data-cookbook-subchapter-select="beef"') && chapterShelf.includes('data-cookbook-subchapter-select="poultry"') && chapterShelf.includes('data-cookbook-subchapter-select="fish-seafood"'), "Main Dishes must expose Beef, Poultry, and Fish & Seafood");
const rotation = api.dailyDiverseRecipes(api.allRecipeCollection(), 18, "integrity-test");
assert.strictEqual(new Set(rotation.map((recipe) => recipe.id)).size, rotation.length, "Daily rotation must not repeat canonical recipe IDs");
assert.strictEqual(new Set(rotation.map(api.recipePhotoFor)).size, rotation.length, "Daily rotation must not repeat primary images");

function topRecipe(query) {
  return api.rankRecipesForDiscovery(api.allRecipeCollection(), { query })[0]?.recipe;
}

assert.strictEqual(topRecipe("Chocolate Chip Cookies")?.id, "chewy-chocolate-cookies", "Exact Chocolate Chip Cookies search must rank first");
assert.strictEqual(topRecipe("Carrot Cake")?.id, "carrot-cake", "Exact Carrot Cake search must rank first");
assert.strictEqual(topRecipe("Orange Chicken")?.id, "orange-chicken", "Exact Orange Chicken search must rank first");
assert(/steak|rib|beef/i.test(`${topRecipe("ribeye")?.title} ${(topRecipe("ribeye")?.ingredients || []).join(" ")}`), "Ribeye must return a relevant recipe first");
assert.strictEqual(api.rankRecipesForDiscovery(api.allRecipeCollection(), { query: "zzzxqvnotfood" }).filter((row) => row.score > 0).length, 0, "Nonsense searches must not return unrelated recipes");

context.location.hash = "#recipes?section=cookies";
assert.deepStrictEqual({ ...api.routeParts() }, { route: "recipes", id: undefined, section: "cookies", query: "" }, "Refresh must restore Cookies from the URL");
context.location.hash = "#recipes?section=soups";
assert.strictEqual(api.routeParts().section, "soups", "Back/Forward state must restore Soups");
context.location.hash = "#recipes?section=not-real";
assert.strictEqual(api.cookbookChapterByKey(api.routeParts().section), null, "Invalid chapters must not fall back to Soups");

const recipeIds = new Set(api.allRecipeCollection().map((recipe) => recipe.id));
for (const recipe of api.allRecipeCollection()) {
  const card = api.recipeCard(recipe);
  const linkedIds = [...card.matchAll(/href="#recipes\/([^"]+)"/g)].map((match) => match[1]);
  assert(linkedIds.length >= 2, `${recipe.id} card must link its photo and action to a recipe page`);
  assert(linkedIds.every((id) => recipeIds.has(id)), `${recipe.id} card points to a missing recipe`);
}

const footer = api.siteFooterMarkup("recipes");
for (const route of ["#lets-cook", "#recipes", "#cuisine-explorer", "#america-250", "#cook101", "#living-cookbook/holiday-tables", "#account", "#add-recipe", "#about", "#contact", "#privacy", "#terms"]) {
  assert(footer.includes(`href="${route}"`), `Footer route missing: ${route}`);
}
assert(footer.includes("data-back-to-top"), "Footer Back to Top must have a real handler target");

const profileMarkup = api.cookingProfileHome({ displayName: "Test Cook", bio: "I cook colorful food.", city: "Chicago", state: "IL", accountType: "Home Cook", badges: ["Founding Cook"] });
for (const tab of ["posts", "recipes", "videos", "favorites", "meal-plans", "reviews", "about"]) {
  assert(profileMarkup.includes(`data-profile-tab="${tab}"`), `Cooking profile tab missing: ${tab}`);
}
assert(profileMarkup.includes("cook-profile-cover"), "Cooking profile needs a customizable cover");
assert(profileMarkup.includes("cook-profile-avatar"), "Cooking profile needs an overlapping avatar");
assert(profileMarkup.includes("Followers") && profileMarkup.includes("Following"), "Cooking profile needs community stats");
assert(profileMarkup.includes("Favorite cuisines") && profileMarkup.includes("Cooking style"), "Cooking profile needs food identity details");

const postMarkup = api.communityPostCard({ id: "test-post", author: "Test Cook", text: "Added mushrooms.", recipeId: "carrot-cake" });
for (const action of ["fork", "made", "save"]) assert(postMarkup.includes(`data-community-action="${action}"`), `Community action missing: ${action}`);
assert(postMarkup.includes("data-community-share"), "Community post must support sharing");
assert(postMarkup.includes("data-community-follow"), "Community post must support following");
assert(postMarkup.includes("data-kitchen-note-form"), "Community post must support Kitchen Notes");
assert(postMarkup.includes("#recipes/carrot-cake"), "Community posts must link directly to recipes");
assert(postMarkup.includes("#community/test-post"), "Community cook names must link to public profiles");
assert(api.communityVideoForm().includes("accept=\"video/*\"") && api.communityVideoForm().includes("name=\"recipeId\""), "In My Kitchen must upload videos and link recipes");

api.renderCommunity();
assert(element.innerHTML.includes("data-community-post-form"), "Community feed needs a post composer");
assert(element.innerHTML.includes("Fork & Spoon"), "Community feed needs the signature appreciation action");
api.renderCommunity("welcome-table");
assert(element.innerHTML.includes("Shay Bee") && element.innerHTML.includes("cook-profile-cover"), "Public community routes must render a real cooking profile");

assert.strictEqual(api.augustDateKeys().length, 31, "August calendar must include all 31 days");
for (const dateKey of api.augustDateKeys()) {
  const menu = api.defaultMenuForDate(dateKey);
  for (const slot of ["breakfast", "lunch", "dinner", "snack"]) {
    const recipe = api.calendarRecipe(menu[slot].recipeId);
    assert(recipe, `${dateKey} ${slot} must point to a real publishable recipe`);
    assert(recipe.ingredients.length > 0, `${dateKey} ${slot} recipe must have ingredients`);
    assert((recipe.instructions || recipe.directions).length > 0, `${dateKey} ${slot} recipe must have instructions`);
    assert(recipe.image || recipe.image_url, `${dateKey} ${slot} recipe must have an image`);
  }
}
const todayMarkup = api.todayPlateSection();
assert(todayMarkup.includes("Today’s Plate"), "Homepage must include Today’s Plate");
assert.strictEqual((todayMarkup.match(/data-calendar-recipe-open=/g) || []).length, 8, "Every Today’s Plate meal must have two direct recipe links");
const monthMarkup = api.monthlyKitchenCalendarSection();
assert(monthMarkup.includes("Late July into August: Back to School"), "Let’s Plan calendar must bridge late July into August");
assert.strictEqual((monthMarkup.match(/data-select-kitchen-date=/g) || []).length, 37, "Launch calendar must include July 26 through August 31");
assert(monthMarkup.includes("data-planner-month=\"previous\"") && monthMarkup.includes("data-planner-month=\"next\""), "Calendar must support previous and next month navigation");

const weekMarkup = api.homepageWeeklyStrip();
assert(weekMarkup.includes("This Week at Let’s Cook Y’all"), "Homepage needs the compact weekly preview");
assert.strictEqual((weekMarkup.match(/data-week-date=/g) || []).length, 7, "Homepage must show one week only");
assert(weekMarkup.includes("#lets-plan") && weekMarkup.includes("Use This Week") && weekMarkup.includes("View Grocery List"), "Weekly preview must link to planning actions");
api.renderLetsCookHome();
assert(element.innerHTML.includes('<h1 id="homeHeroTitle">What Y’all Cooking?</h1>'), "Homepage hero must use the exact What Y’all Cooking? headline");
assert(!element.innerHTML.includes("monthly-kitchen-section"), "Full monthly calendar must not appear on the homepage");
assert(element.innerHTML.includes("homepage-week-strip"), "Homepage must render the weekly strip directly after its hero");
api.renderLetsPlan();
assert(element.innerHTML.includes("Today’s Plate") && element.innerHTML.includes("monthly-kitchen-section") && element.innerHTML.includes("Kitchen Grocery List"), "Let’s Plan must contain Today’s Plate, calendar, and groceries");

const familyRecipe = api.allRecipeCollection().find(api.cookAlongEligible);
assert(familyRecipe, "At least one complete recipe must support Cook Along Together");
const littleJob = api.cookAlongTaskFor(familyRecipe, "Stir the ingredients", "3-5");
const juniorJob = api.cookAlongTaskFor(familyRecipe, "Stir the ingredients", "9-12");
assert.notStrictEqual(littleJob.child, juniorJob.child, "Age selection must change the child’s job");
assert(/Adult only/i.test(api.cookAlongTaskFor(familyRecipe, "Bake in a hot oven", "9-12").adult), "Heat steps must remain adult-only");

const curatedWeek = api.generatedMenusForWeek("2026-07-22");
const curatedMeals = Object.values(curatedWeek).flatMap((menu) => [menu.breakfast, menu.lunch, menu.dinner, menu.snack]);
assert.strictEqual(new Set(curatedMeals.map((meal) => meal.recipeId)).size, curatedMeals.length, "A curated week must not repeat recipes");
const dinnerTraits = Object.values(curatedWeek).map((menu) => api.plannerRecipeTraits(api.calendarRecipe(menu.dinner.recipeId)));
assert(new Set(dinnerTraits.map((item) => item.protein)).size >= 4, "Weekly dinners must balance proteins");
assert(new Set(dinnerTraits.map((item) => item.cuisine)).size >= 4, "Weekly dinners must balance cuisines");
assert(new Set(dinnerTraits.map((item) => item.method)).size >= 3, "Weekly dinners must balance cooking methods");
const followingWeekIds = new Set(Object.values(api.generatedMenusForWeek("2026-07-29")).flatMap((menu) => [menu.breakfast.recipeId, menu.lunch.recipeId, menu.dinner.recipeId, menu.snack.recipeId]));
const repeatedAcrossWeeks = curatedMeals.filter((meal) => followingWeekIds.has(meal.recipeId)).length;
assert(repeatedAcrossWeeks <= 7, "Consecutive weeks must substantially rotate the menu");

api.setHousehold({ servings: 4, allergies: "", dietary: "", avoid: "" });
api.setPantryOwned([]);
const weekItems = api.buildKitchenGroceryItems("week");
assert(weekItems.length > 0, "Weekly grocery list must use real recipe ingredients");
const groceryKeys = weekItems.map((item) => `${item.name.toLowerCase()}|${String(item.unit || "").toLowerCase()}`);
assert.strictEqual(new Set(groceryKeys).size, groceryKeys.length, "Weekly grocery list must consolidate duplicate ingredients");
const ownedName = weekItems[0].name.toLowerCase();
api.setPantryOwned([ownedName]);
assert(api.buildKitchenGroceryItems("week").find((item) => item.name.toLowerCase() === ownedName)?.owned, "Pantry-owned items must be separated from items to purchase");
const groceryMarkup = api.groceryPlanningSection();
for (const action of ["save", "print", "email", "download", "share"]) assert(groceryMarkup.includes(`data-${action}-grocery-list`), `Grocery action missing: ${action}`);
assert(groceryMarkup.includes("data-clear-grocery-checked"), "Grocery list must clear checked items");

const routedPages = new Set([
  "home", "lets-cook", "find-the-beat", "second-chance", "community", "kitchen", "america-250",
  "add-recipe", "submit-recipe", "cook101", "skills-academy", "culinary-academy", "build-a-meal",
  "kitchen-search", "pantry-scan", "cuisine-explorer", "food-encyclopedia", "what-yall-cooking",
  "menu-intelligence", "living-cookbook", "kids-cooking", "kids-korner", "recipes", "paths",
  "pathways", "planner", "lets-plan", "cook-along", "hosting", "about", "account", "privacy", "terms", "contact", "search", "cuisine"
]);
const localDocumentAnchors = new Set(["aiKitchenInventoryForm"]);
const literalInternalLinks = [...source.matchAll(/href="#([^"$]+)"/g)].map((match) => match[1]);
for (const href of literalInternalLinks) {
  const route = href.split(/[/?]/)[0];
  assert(routedPages.has(route) || localDocumentAnchors.has(route), `Literal internal link has no route or document target: #${href}`);
}

console.log(`Cookbook navigation tests passed for ${expectedSections.length} chapters, ${recipeIds.size} recipe cards, and ${literalInternalLinks.length} literal internal links.`);
