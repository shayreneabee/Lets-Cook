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
  recipeBoxTabDefinitions,
  recipeBoxTabByKey,
  recipesForRecipeBoxTab,
  cookbookCollectionDefinitions,
  cookbookCollectionById,
  recipesForCookbookCollection,
  vegetarianCurationProfile,
  vegetarianCollectionMarkup,
  cookbookCollectionCards,
  isDrinkRecipe,
  canonicalSearchResults,
  renderSearchPage,
  recipeDietaryProfile,
  recipeAllowedForCookYourWay,
  cookbookSectionRoute,
  cookbookChapterShelf,
  dailyDiverseRecipes,
  recipesForCookbookChapter,
  recipePhotoFor,
  recipeCookbookPrimarySection,
  allRecipeCollection,
  rankRecipesForDiscovery,
  parseIngredientTerms,
  inferredIngredientQueryTerms,
  ingredientMatchGroups,
  pantryScanMatches,
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
  augustAroundWorldWeeks,
  augustCultureForDate,
  augustCultureById,
  recipesForAugustCulture,
  aroundWorldSearchMatches,
  worldGlobeDestinations,
  worldDestinationCountryIds,
  decodeWorldCountryTopology,
  worldGlobeDestinationById,
  worldGlobeDestinationForQuery,
  recipesForWorldDestination,
  worldGlobeMarkup,
  worldDestinationCollectionMarkup,
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
const expectedTopLevelSections = ["breakfast", "soups", "salads", "vegetables", "appetizers-finger-foods", "main-dishes", "sides", "breads", "cookies", "desserts", "miscellaneous"];
const expectedSections = ["breakfast", "soups", "salads", "vegetables", "appetizers-finger-foods", "main-dishes", "beef", "poultry", "fish-seafood", "sides", "breads", "cookies", "desserts", "miscellaneous"];
assert.deepStrictEqual([...api.cookbookChapterDefinitions].map((chapter) => chapter.id), expectedTopLevelSections, "Cookbook must show the approved divider cards in order");
assert.deepStrictEqual([...api.cookbookChapterKeys], expectedSections, "Cookbook must expose top-level and Main Dish chapter keys");
const expectedRecipeBoxTabs = ["breakfast", "soups", "salads", "vegetables", "appetizers-finger-foods", "main-dishes", "sides", "breads", "cookies", "desserts", "vegan-plant-based", "miscellaneous"];
assert.deepStrictEqual([...api.recipeBoxTabDefinitions].map((tab) => tab.id), expectedRecipeBoxTabs, "Recipe box must offer the approved simple cookbook chapters");
const expectedVisualCollections = ["breakfast-brunch", "appetizers-finger-foods", "weeknight-dinners", "soups-stews-bowls", "salads-sides", "main-dishes", "breads", "desserts-baking", "drinks", "holiday-tables", "budget-meals", "30-minute-meals", "slow-cooker-one-pot", "around-the-world", "southern-comfort", "louisiana-classics", "meal-prep", "vegetarian", "vegan", "gluten-free", "allergy-friendly"];
assert.deepStrictEqual([...api.cookbookCollectionDefinitions].map((collection) => collection.id), expectedVisualCollections, "Living Cookbook must offer every requested visual collection");
for (const collectionId of expectedVisualCollections) {
  const collection = api.cookbookCollectionById(collectionId);
  const collectionRecipes = api.recipesForCookbookCollection(collection);
  assert(collection && collectionRecipes.length > 0, `${collectionId} must resolve to canonical recipe cards`);
  assert.strictEqual(new Set(collectionRecipes.map((recipe) => recipe.id)).size, collectionRecipes.length, `${collectionId} must not duplicate recipes`);
}
const collectionMarkup = api.cookbookCollectionCards("vegan");
assert(collectionMarkup.includes("Pick a Cookbook") && collectionMarkup.includes("Browse by craving, occasion, cooking style, or dietary need."), "Visual collection shelf must use the approved heading copy");
assert.strictEqual((collectionMarkup.match(/data-cookbook-collection-select=/g) || []).length, expectedVisualCollections.length, "Visual collection shelf must render every requested cover");
assert(/class="visual-cookbook-card active"[^>]*data-cookbook-collection-select="vegan"/.test(collectionMarkup), "Selected visual collection must have an active state");
const drinksCollection = api.recipesForCookbookCollection(api.cookbookCollectionById("drinks"));
assert(drinksCollection.length >= 25, "Drinks must contain a substantial beverage library");
assert(drinksCollection.every(api.isDrinkRecipe), "The Drinks collection must contain beverages only");
assert.strictEqual(new Set(drinksCollection.map(api.recipePhotoFor)).size, drinksCollection.length, "Every drink recipe must have a unique primary image");
const foodOnlyDrinkLeaks = drinksCollection.filter((recipe) => /\b(cake|cakes|cookie|cookies|bread|breads|bowl|bowls|sauce|frosting|marinade|steak|sandwich|sandwiches|dessert|desserts|shrimp cocktail|fruit cocktail)\b/i.test(`${recipe.title} ${recipe.category}`));
assert.strictEqual(foodOnlyDrinkLeaks.length, 0, `Food leaked into Drinks: ${foodOnlyDrinkLeaks.map((recipe) => recipe.title).join(", ")}`);
for (const foodTitle of ["Shrimp Cocktail", "Coffee Cake", "Tea Cakes", "Matcha Cake", "Smoothie Bowl", "Cocktail Sauce"]) {
  assert.strictEqual(api.isDrinkRecipe({ title: foodTitle, category: "Food", tags: [foodTitle.split(" ").pop()] }), false, `${foodTitle} must never enter the Drinks collection`);
}
for (const drinkTitle of ["Classic Margarita", "Peach Bellini", "Virgin Mojito", "Southern Sweet Tea", "Mango Smoothie", "Espresso Martini"]) {
  assert.strictEqual(api.isDrinkRecipe({ title: drinkTitle, category: "Drinks", tags: ["drink"] }), true, `${drinkTitle} must remain in Drinks`);
}
const vegetarianCollection = api.recipesForCookbookCollection(api.cookbookCollectionById("vegetarian"));
const firstVegetarianProfile = api.vegetarianCurationProfile(vegetarianCollection[0]);
assert(firstVegetarianProfile.group === "meals", "Vegetarian must lead with a substantial complete meal");
assert(!/peanut butter and jelly|\btoast\b|\bsnack\b/i.test(vegetarianCollection[0].title), "A simple snack must never lead Vegetarian");
assert(!vegetarianCollection.some((recipe) => /bologna|grouper/i.test(recipe.title)), "Meat and fish title variants must not leak into Vegetarian");
const vegetarianMarkup = api.vegetarianCollectionMarkup(vegetarianCollection);
assert(vegetarianMarkup.includes("Featured Vegetarian Meals"), "Vegetarian must present a curated complete-meal group");
assert(vegetarianMarkup.includes("Quick Bites & Easy Snacks"), "Vegetarian must preserve simple recipes in a secondary group");
const vegetarianIdsInMarkup = [...vegetarianMarkup.matchAll(/href="#recipes\/([^"]+)"/g)].map((match) => match[1]);
assert(vegetarianCollection.every((recipe) => vegetarianIdsInMarkup.includes(recipe.id)), "Vegetarian curation must not remove valid vegetarian recipes");
for (const tabId of expectedRecipeBoxTabs) {
  const tab = api.recipeBoxTabByKey(tabId);
  const tabRecipes = api.recipesForRecipeBoxTab(tab);
  assert(tab && tabRecipes.length > 0, `${tabId} must resolve to real recipe cards`);
  assert.strictEqual(new Set(tabRecipes.map(api.recipePhotoFor)).size, tabRecipes.length, `${tabId} must not repeat a primary image`);
}

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
assert.strictEqual(api.recipeCookbookPrimarySection(byId("deviled-eggs")), "appetizers-finger-foods", "Deviled Eggs belong in Appetizers & Finger Foods");
assert.strictEqual(api.recipeCookbookPrimarySection(byId("frito-pie")), "miscellaneous", "Savory Frito Pie must not be classified as soup or dessert");
assert.strictEqual(api.recipeCookbookPrimarySection(byId("idaho-huckleberry-pancakes")), "breakfast", "Pancakes belong in Breakfast");
assert.strictEqual(api.recipeCookbookPrimarySection(byId("southern-baked-mac-cheese")), "sides", "Mac and Cheese belongs in Sides");
const veganProfile = api.recipeDietaryProfile(byId("watermelon-feta-salad"));
assert(veganProfile && Array.isArray(veganProfile.allergens) && veganProfile.cookbookChapter, "Every recipe must expose structured dietary metadata");
api.setHousehold({ eatingStyle: "vegan", allergies: "", dietary: "", avoid: "" });
assert(api.allRecipeCollection().filter(api.recipeAllowedForCookYourWay).length > 12, "Vegan Cook Your Way must produce a substantive recipe library");
api.setHousehold({ eatingStyle: "no-preference" });
const miscellaneous = api.recipesForCookbookChapter(api.cookbookChapterByKey("miscellaneous"));
for (const duplicateId of ["cuban-sandwich-press", "mini-quesadillas", "cowboy-trail-mix", "tex-mex-breakfast-tacos", "salvadoran-pupusa-supper"]) assert(!miscellaneous.some((recipe) => recipe.id === duplicateId), `${duplicateId} must not duplicate its canonical dish in Miscellaneous`);
const miscellaneousMarkup = api.miscellaneousChapterMarkup(miscellaneous);
for (const group of ["Appetizers, Snacks & Party Food", "Pasta, Rice, Pizza & Handhelds", "Sauces, Condiments & Seasonings", "Drinks & Sips"]) assert(miscellaneousMarkup.includes(group), `Miscellaneous must include the ${group} shelf`);
const chapterShelf = api.cookbookChapterShelf("poultry");
assert.strictEqual((chapterShelf.match(/data-cookbook-chapter-select=/g) || []).length, 15, "Recipe box must render the divider cards plus Main Dishes subchapters");
assert(!chapterShelf.includes("cookbook-chapter-scroll"), "Recipe box must not use the old horizontal scroller");
assert(chapterShelf.includes('data-living-recipe-box') && chapterShelf.includes('data-recipe-box-toggle'), "Living Cookbook must use an interactive recipe box with an open control");
assert(chapterShelf.includes('class="living-recipe-box is-open"'), "A direct cookbook tab route must open the recipe box");
const closedChapterShelf = api.cookbookChapterShelf();
assert(closedChapterShelf.includes('class="living-recipe-box "'), "The cookbook must load with its recipe box closed");
const closedDedicatedCookbook = api.cookbookChapterShelf("", { includeCollections: true });
assert(closedDedicatedCookbook.includes('class="cream-section visual-cookbook-collections recipe-box-contained-menu"'), "Visual cookbook collections must live inside the Living Cookbook experience");
assert(/recipe-box-contained-menu[^>]*data-cookbook-open-content hidden/.test(closedDedicatedCookbook), "Collection menus must stay hidden until the Living Cookbook opens");
assert(/recipe-box-filter-drawer[^>]*data-cookbook-open-content hidden/.test(closedDedicatedCookbook), "Cookbook filters must stay hidden until theÛx¶‰žËkºwµçp…Á¤¹É•¥Á•Í½ÉÕÕÍÑÕ±ÑÕÉ”¡Õ±ÑÕÉ”°ÑÉÕ”¤¹±•¹Ñ °€‘íÕ±ÑÕÉ”¹Ñ¥Ñ±•ô½±±•Ñ¥½¸µÕÍÐ¹½ÐÉ•Á•…ÐÉ•¥Á”É•½É‘Í€¤ì)ô)…ÍÍ•ÉÐ¡…Á¤¹…É½Õ¹‘]½É±‘M•…É¡5…Ñ¡•Ì ‰%¹‘¥„ˆ¤¹Í½µ” ¡Õ±ÑÕÉ”¤€ôøÕ±ÑÕÉ”¹¥€ôôô€‰¥¹‘¥„ˆ¤°€‰M•…É µÕÍÐÉ•ÑÕÉ¸Ñ¡”%¹‘¥„Õ±ÑÕÉ”½±±•Ñ¥½¸ˆ¤ì)…ÍÍ•ÉÐ¡…Á¤¹…É½Õ¹‘]½É±‘M•…É¡5…Ñ¡•Ì ‰¡¥‰¥ÍÕÌˆ¤¹Í½µ” ¡Õ±ÑÕÉ”¤€ôøÕ±ÑÕÉ”¹¥€ôôô€‰…™É¥„ˆ¤°€‰M•…É µÕÍÐ½¹¹•ÐÍ¥¹…ÑÕÉ”¥¹É•‘¥•¹ÑÌ…¹‘É¥¹­ÌÑ¼Õ±ÑÕÉ”½±±•Ñ¥½¹Ìˆ¤ì)…ÍÍ•ÉÐ¡…Á¤¹Ý½É±‘±½‰••ÍÑ¥¹…Ñ¥½¹Ì¹±•¹Ñ €øô€ÐÀ°€‰]½É±5…ÀµÕÍÐ•áÁ½Í”„ÍÕ‰ÍÑ…¹Ñ¥…°Í•Ð½˜±½‰”‘•ÍÑ¥¹…Ñ¥½¹Ìˆ¤ì)½¹ÍÐÝ½É±‘Q½Á½±½ä€ô)M=8¹Á…ÉÍ”¡™Ì¹É•…‘¥±•Må¹Œ¡Á…Ñ ¹©½¥¸¡É½½Ð°€‰‘…Ñ„ˆ°€‰Ý½É±µ½Õ¹ÑÉ¥•Ì´ÄÄÁ´¹©Í½¸ˆ¤°€‰ÕÑ˜àˆ¤¤ì)½¹ÍÐ½Õ¹ÑÉå•½µ•ÑÉä€ô…Á¤¹‘•½‘•]½É±‘½Õ¹ÑÉåQ½Á½±½ä¡Ý½É±‘Q½Á½±½ä¤ì)…ÍÍ•ÉÐ¡½Õ¹ÑÉå•½µ•ÑÉä¹±•¹Ñ €øô€ÄÜÀ°€‰]½É±5…ÀµÕÍÐÉ•¹‘•È„½µÁ±•Ñ”É•…°µÝ½É±½Õ¹ÑÉä‰½Õ¹‘…Éä‘…Ñ…Í•Ðˆ¤ì)½¹ÍÐÉ•ÅÕ•ÍÑ•‘•½É…Á¡¥•ÍÑ¥¹…Ñ¥½¹Ì€ôì(€Á¡¥±¥ÁÁ¥¹•Ìèì½Õ¹ÑÉå%è€ˆØÀàˆ°±…ÐèlÐ°€ÈÉt°±½¸èlÄÄÔ°€ÄÌÁtô°(€¹¥•É¥„èì½Õ¹ÑÉå%è€ˆÔØØˆ°±…ÐèlÐ°€ÄÑt°±½¸èlÈ°€ÄÕtô°(€¡…¹„èì½Õ¹ÑÉå%è€ˆÈààˆ°±…ÐèlÐ°€ÄÉt°±½¸èl´Ð°€Étô°(€É••”èì½Õ¹ÑÉå%è€ˆÌÀÀˆ°±…ÐèlÌÐ°€ÐÍt°±½¸èlÄä°€ÌÁtô°(€€‰ÁÕ•ÉÑ¼µÉ¥¼ˆèì½Õ¹ÑÉå%è€ˆØÌÀˆ°±…ÐèlÄÜ°€Äåt°±½¸èl´Øà°€´ØÕtô°(€Á•ÉÔèì½Õ¹ÑÉå%è€ˆØÀÐˆ°±…Ðèl´Ää°€Åt°±½¸èl´àÈ°€´Øátô°(€­½É•„èì½Õ¹ÑÉå%è€ˆÐÄÀˆ°±…ÐèlÌÌ°€Ìåt°±½¸èlÄÈÐ°€ÄÌÉtô)ôì)™½È€¡½¹ÍÐm‘•ÍÑ¥¹…Ñ¥½¹%°•áÁ•Ñ•‘t½˜=‰©•Ð¹•¹ÑÉ¥•Ì¡É•ÅÕ•ÍÑ•‘•½É…Á¡¥•ÍÑ¥¹…Ñ¥½¹Ì¤¤ì(€½¹ÍÐ‘•ÍÑ¥¹…Ñ¥½¸€ô…Á¤¹Ý½É±‘±½‰••ÍÑ¥¹…Ñ¥½¹	å%¡‘•ÍÑ¥¹…Ñ¥½¹%¤ì(€…ÍÍ•ÉÐ¡‘•ÍÑ¥¹…Ñ¥½¸°€‘í‘•ÍÑ¥¹…Ñ¥½¹%‘ôµÕÍÐÉ•µ…¥¸…¸…Ù…¥±…‰±”±½‰”‘•ÍÑ¥¹…Ñ¥½¹€¤ì(€…ÍÍ•ÉÐ¡‘•ÍÑ¥¹…Ñ¥½¸¹±…Ð€øô•áÁ•Ñ•¹±…ÑlÁt€˜˜‘•ÍÑ¥¹…Ñ¥½¸¹±…Ð€ðô•áÁ•Ñ•¹±…ÑlÅt°€‘í‘•ÍÑ¥¹…Ñ¥½¹%‘ô±…Ñ¥ÑÕ‘”µÕÍÐµ…Ñ ¥ÑÌÉ•…°µÝ½É±±½…Ñ¥½¹€¤ì(€…ÍÍ•ÉÐ¡‘•ÍÑ¥¹…Ñ¥½¸¹±½¸€øô•áÁ•Ñ•¹±½¹lÁt€˜˜‘•ÍÑ¥¹…Ñ¥½¸¹±½¸€ðô•áÁ•Ñ•¹±½¹lÅt°€‘í‘•ÍÑ¥¹…Ñ¥½¹%‘ô±½¹¥ÑÕ‘”µÕÍÐµ…Ñ ¥ÑÌÉ•…°µÝ½É±±½…Ñ¥½¹€¤ì(€…ÍÍ•ÉÐ¹ÍÑÉ¥ÑÅÕ…°¡…Á¤¹Ý½É±‘•ÍÑ¥¹…Ñ¥½¹½Õ¹ÑÉå%‘Ím‘•ÍÑ¥¹…Ñ¥½¹%‘t°•áÁ•Ñ•¹½Õ¹ÑÉå%°€‘í‘•ÍÑ¥¹…Ñ¥½¹%‘ôµÕÍÐµ…ÀÑ¼¥ÑÌÉ•…°%M<¹Õµ•É¥Œ½Õ¹ÑÉä•½µ•ÑÉå€¤ì(€…ÍÍ•ÉÐ¡½Õ¹ÑÉå•½µ•ÑÉä¹Í½µ” ¡½Õ¹ÑÉä¤€ôø½Õ¹ÑÉä¹¥€ôôô•áÁ•Ñ•¹½Õ¹ÑÉå%€˜˜½Õ¹ÑÉä¹Á½±å½¹Ì¹±•¹Ñ ¤°€‘í‘•ÍÑ¥¹…Ñ¥½¹%‘ôµÕÍÐ¡…Ù”É•…°ÁÉ½©•Ñ•½Õ¹ÑÉä‰½Õ¹‘…É¥•Í€¤ì)ô)…ÍÍ•ÉÐ …Í½ÕÉ”¹¥¹±Õ‘•Ì ‰½¹ÍÐÝ½É±‘±½‰•½¹Ñ¥¹•¹ÑÌˆ¤°€‰]½É±5…ÀµÕÍÐ¹½Ð™…±°‰…¬Ñ¼¡…¹µ‘É…Ý¸½¹Ñ¥¹•¹Ð…ÁÁÉ½á¥µ…Ñ¥½¹Ìˆ¤ì)…ÍÍ•ÉÐ¹ÍÑÉ¥ÑÅÕ…°¡…Á¤¹Ý½É±‘±½‰••ÍÑ¥¹…Ñ¥½¹½ÉEÕ•Éä ‰¥±¥Á¥¹¼ˆ¤¹¥°€‰Á¡¥±¥ÁÁ¥¹•Ìˆ°€‰¥±¥Á¥¹¼Í•…É µÕÍÐÉ•Í½±Ù”Ñ¼Ñ¡”A¡¥±¥ÁÁ¥¹•Ì±½‰”‘•ÍÑ¥¹…Ñ¥½¸ˆ¤ì)…ÍÍ•ÉÐ¹ÍÑÉ¥ÑÅÕ…°¡…Á¤¹Ý½É±‘±½‰••ÍÑ¥¹…Ñ¥½¹½ÉEÕ•Éä ‰9¥•É¥„ˆ¤¹¥°€‰¹¥•É¥„ˆ°€‰9¥•É¥„Í•…É µÕÍÐÉ•Í½±Ù”Ñ¼¥ÑÌ±½‰”‘•ÍÑ¥¹…Ñ¥½¸ˆ¤ì)½¹ÍÐÁ¡¥±¥ÁÁ¥¹•Í•ÍÑ¥¹…Ñ¥½¸€ô…Á¤¹Ý½É±‘±½‰••ÍÑ¥¹…Ñ¥½¹	å% ‰Á¡¥±¥ÁÁ¥¹•Ìˆ¤ì)…ÍÍ•ÉÐ¡Á¡¥±¥ÁÁ¥¹•Í•ÍÑ¥¹…Ñ¥½¸€˜˜9Õµ‰•È¹¥Í¥¹¥Ñ”¡Á¡¥±¥ÁÁ¥¹•Í•ÍÑ¥¹…Ñ¥½¸¹±…Ð¤€˜˜9Õµ‰•È¹¥Í¥¹¥Ñ”¡Á¡¥±¥ÁÁ¥¹•Í•ÍÑ¥¹…Ñ¥½¸¹±½¸¤°€‰A¡¥±¥ÁÁ¥¹•ÌµÕÍÐ¡…Ù”É•…°±½‰”½½É‘¥¹…Ñ•Ìˆ¤ì)½¹ÍÐÁ¡¥±¥ÁÁ¥¹•ÍI•¥Á•Ì€ô…Á¤¹É•¥Á•Í½É]½É±‘•ÍÑ¥¹…Ñ¥½¸¡Á¡¥±¥ÁÁ¥¹•Í•ÍÑ¥¹…Ñ¥½¸¤ì)…ÍÍ•ÉÐ¡Á¡¥±¥ÁÁ¥¹•ÍI•¥Á•Ì¹±•¹Ñ €ø€À°€‰A¡¥±¥ÁÁ¥¹•ÌµÕÍÐÉ•Ù•…°¥ÑÌ…¹½¹¥…°É•¥Á”½±±•Ñ¥½¸ˆ¤ì)…ÍÍ•ÉÐ¡Á¡¥±¥ÁÁ¥¹•ÍI•¥Á•Ì¹•Ù•Éä ¡É•¥Á”¤€ôø€½Á¡¥±¥ÁÁ¥¹•Íñ™¥±¥Á¥¹½ñ™¥±¥Á¥¹„½¤¹Ñ•ÍÐ¡€‘íÉ•¥Á”¹Ñ¥Ñ±•ô€‘íÉ•¥Á”¹Õ¥Í¥¹•ô€‘íÉ•¥Á”¹…Ñ•½Éåô€‘ì¡É•¥Á”¹Ñ…Ìñðmt¤¹©½¥¸ ˆ€ˆ¥õ€¤¤°€‰A¡¥±¥ÁÁ¥¹•ÌµÕÍÐ¹•Ù•ÈÉ••¥Ù”•¹•É¥ŒÍ¥…¸É•¥Á•Ìˆ¤ì)½¹ÍÐ±½‰•5…É­ÕÀ€ô…Á¤¹Ý½É±‘±½‰•5…É­ÕÀ¡Á¡¥±¥ÁÁ¥¹•Í•ÍÑ¥¹…Ñ¥½¸¤ì)…ÍÍ•ÉÐ¡±½‰•5…É­ÕÀ¹¥¹±Õ‘•Ì ‰‘…Ñ„µÝ½É±µ±½‰”ˆ¤€˜˜±½‰•5…É­ÕÀ¹¥¹±Õ‘•Ì ‰‘…Ñ„µÝ½É±µ±½‰”µÍ•…É ˆ¤°€‰]½É±5…ÀµÕÍÐ±•…Ý¥Ñ …¸¥¹Ñ•É…Ñ¥Ù”°Í•…É¡…‰±”±½‰”ˆ¤ì)…ÍÍ•ÉÐ¡±½‰•5…É­ÕÀ¹¥¹±Õ‘•Ì ‰M½ÕÑ¡•…ÍÐÍ¥„ˆ¤€˜˜±½‰•5…É­ÕÀ¹¥¹±Õ‘•Ì ‰A¡¥±¥ÁÁ¥¹•Ìˆ¤°€‰]½É±5…ÀµÕÍÐÁÉ•Í•ÉÙ”É•¥½¸µÑ¼µ½Õ¹ÑÉä•½É…Á¡¥Œ‘É¥±±‘½Ý¸ˆ¤ì)½¹ÍÐÁ¡¥±¥ÁÁ¥¹•Í½±±•Ñ¥½¹5…É­ÕÀ€ô…Á¤¹Ý½É±‘•ÍÑ¥¹…Ñ¥½¹½±±•Ñ¥½¹5…É­ÕÀ¡Á¡¥±¥ÁÁ¥¹•Í•ÍÑ¥¹…Ñ¥½¸¤ì)…ÍÍ•ÉÐ¡Á¡¥±¥ÁÁ¥¹•Í½±±•Ñ¥½¹5…É­ÕÀ¹¥¹±Õ‘•Ì ‰]•±½µ”Ñ¼Ñ¡”A¡¥±¥ÁÁ¥¹•Ìˆ¤€˜˜Á¡¥±¥ÁÁ¥¹•Í½±±•Ñ¥½¹5…É­ÕÀ¹¥¹±Õ‘•Ì ‰=Á•¸Ñ¡”™Õ±°É•¥Á”ˆ¤°€‰±½‰”‘•ÍÑ¥¹…Ñ¥½¸µÕÍÐÉ•Ù•…°Õ±ÑÕÉ…°½¹Ñ•áÐ…¹™Õ±°É•¥Á”±¥¹­Ìˆ¤ì()½¹Ñ•áÐ¹±½…Ñ¥½¸¹¡…Í €ô€ˆÉ•¥Á•ÌýÍ•Ñ¥½¸õ½½­¥•Ìˆì)…ÍÍ•ÉÐ¹‘••ÁMÑÉ¥ÑÅÕ…°¡ì€¸¸¹…Á¤¹É½ÕÑ•A…ÉÑÌ ¤ô°ìÉ½ÕÑ”è€‰É•¥Á•Ìˆ°¥èÕ¹‘•™¥¹•°Í•Ñ¥½¸è€‰½½­¥•Ìˆ°½±±•Ñ¥½¸è€ˆˆ°Õ±ÑÕÉ”è€ˆˆ°‘É¥¹¬è€ˆˆ°ÍÕ‰…Ñ•½Éäè€ˆˆ°ÅÕ•Éäè€ˆˆô°€‰I•™É•Í µÕÍÐÉ•ÍÑ½É”½½­¥•Ì™É½´Ñ¡”UI0ˆ¤ì)½¹Ñ•áÐ¹±½…Ñ¥½¸¹¡…Í €ô€ˆÉ•¥Á•ÌýÍ•Ñ¥½¸õÍ½ÕÁÌˆì)…ÍÍ•ÉÐ¹ÍÑÉ¥ÑÅÕ…°¡…Á¤¹É½ÕÑ•A…ÉÑÌ ¤¹Í•Ñ¥½¸°€‰Í½ÕÁÌˆ°€‰	…¬½½ÉÝ…ÉÍÑ…Ñ”µÕÍÐÉ•ÍÑ½É”M½ÕÁÌˆ¤ì)½¹Ñ•áÐ¹±½…Ñ¥½¸¹¡…Í €ô€ˆ±¥Ù¥¹œµ½½­‰½½¬ýÕ±ÑÕÉ”õ¥¹‘¥„ˆì)…ÍÍ•ÉÐ¹ÍÑÉ¥ÑÅÕ…°¡…Á¤¹É½ÕÑ•A…ÉÑÌ ¤¹Õ±ÑÕÉ”°€‰¥¹‘¥„ˆ°€‰É½Õ¹Ñ¡”]½É±½½­‰½½¬±¥¹­ÌµÕÍÐÁÉ•Í•ÉÙ”Ñ¡”Í•±•Ñ•Õ±ÑÕÉ”ˆ¤ì)½¹Ñ•áÐ¹±½…Ñ¥½¸¹¡…Í €ô€ˆÉ•¥Á•ÌýÍ•Ñ¥½¸õ¹½ÐµÉ•…°ˆì)…ÍÍ•ÉÐ¹ÍÑÉ¥ÑÅÕ…°¡…Á¤¹½½­‰½½­¡…ÁÑ•É	å-•ä¡…Á¤¹É½ÕÑ•A…ÉÑÌ ¤¹Í•Ñ¥½¸¤°¹Õ±°°€‰%¹Ù…±¥¡…ÁÑ•ÉÌµÕÍÐ¹½Ð™…±°‰…¬Ñ¼M½ÕÁÌˆ¤ì()½¹ÍÐÉ•¥Á•%‘Ì€ô¹•ÜM•Ð¡…Á¤¹…±±I•¥Á•½±±•Ñ¥½¸ ¤¹µ…À ¡É•¥Á”¤€ôøÉ•¥Á”¹¥¤¤ì)™½È€¡½¹ÍÐÉ•¥Á”½˜…Á¤¹…±±I•¥Á•½±±•Ñ¥½¸ ¤¤ì(€½¹ÍÐ…É€ô…Á¤¹É•¥Á•…É¡É•¥Á”¤ì(€½¹ÍÐ±¥¹­•‘%‘Ì€ôl¸¸¹…É¹µ…Ñ¡±° ½¡É•˜ôˆÉ•¥Á•Íp¼¡mx‰t¬¤ˆ½œ¥t¹µ…À ¡µ…Ñ ¤€ôøµ…Ñ¡lÅt¤ì(€…ÍÍ•ÉÐ¡±¥¹­•‘%‘Ì¹±•¹Ñ €øô€È°€‘íÉ•¥Á”¹¥‘ô…ÉµÕÍÐ±¥¹¬¥ÑÌÁ¡½Ñ¼…¹…Ñ¥½¸Ñ¼„É•¥Á”Á…•€¤ì(€…ÍÍ•ÉÐ¡±¥¹­•‘%‘Ì¹•Ù•Éä ¡¥¤€ôøÉ•¥Á•%‘Ì¹¡…Ì¡¥¤¤°€‘íÉ•¥Á”¹¥‘ô…ÉÁ½¥¹ÑÌÑ¼„µ¥ÍÍ¥¹œÉ•¥Á•€¤ì)ô()½¹ÍÐ™½½Ñ•È€ô…Á¤¹Í¥Ñ•½½Ñ•É5…É­ÕÀ ‰É•¥Á•Ìˆ¤ì)™½È€¡½¹ÍÐÉ½ÕÑ”½˜lˆ±•ÑÌµ½½¬ˆ°€ˆÉ•¥Á•Ìˆ°€ˆÕ¥Í¥¹”µ•áÁ±½É•Èˆ°€ˆ…µ•É¥„´ÈÔÀˆ°€ˆ½½¬ÄÀÄˆ°€ˆ±¥Ù¥¹œµ½½­‰½½¬½¡½±¥‘…äµÑ…‰±•Ìˆ°€ˆ…½Õ¹Ðˆ°€ˆ…‘µÉ•¥Á”ˆ°€ˆ…‰½ÕÐˆ°€ˆ½¹Ñ…Ðˆ°€ˆÁÉ¥Ù…äˆ°€ˆÑ•ÉµÌ‰t¤ì(€…ÍÍ•ÉÐ¡™½½Ñ•È¹¥¹±Õ‘•Ì¡¡É•˜ôˆ‘íÉ½ÕÑ•ô‰€¤°½½Ñ•ÈÉ½ÕÑ”µ¥ÍÍ¥¹œè€‘íÉ½ÕÑ•õ€¤ì)ô)…ÍÍ•ÉÐ¡™½½Ñ•È¹¥¹±Õ‘•Ì ‰‘…Ñ„µ‰…¬µÑ¼µÑ½Àˆ¤°€‰½½Ñ•È	…¬Ñ¼Q½ÀµÕÍÐ¡…Ù”„É•…°¡…¹‘±•ÈÑ…É•Ðˆ¤ì()½¹ÍÐÁÉ½™¥±•5…É­ÕÀ€ô…Á¤¹½½­¥¹AÉ½™¥±•!½µ”¡ì‘¥ÍÁ±…å9…µ”è€‰Q•ÍÐ½½¬ˆ°‰¥¼è€‰$½½¬½±½É™Õ°™½½¸ˆ°¥Ñäè€‰¡¥…¼ˆ°ÍÑ…Ñ”è€‰%0ˆ°…½Õ¹ÑQåÁ”è€‰!½µ”½½¬ˆ°‰…‘•Ìèl‰½Õ¹‘¥¹œ½½¬‰tô¤ì)™½È€¡½¹ÍÐÑ…ˆ½˜l‰Á½ÍÑÌˆ°€‰É•¥Á•Ìˆ°€‰Ù¥‘•½Ìˆ°€‰™…Ù½É¥Ñ•Ìˆ°€‰µ•…°µÁ±…¹Ìˆ°€‰É•Ù¥•ÝÌˆ°€‰…‰½ÕÐ‰t¤ì(€…ÍÍ•ÉÐ¡ÁÉ½™¥±•5…É­ÕÀ¹¥¹±Õ‘•Ì¡‘…Ñ„µÁÉ½™¥±”µÑ…ˆôˆ‘íÑ…‰ô‰€¤°½½­¥¹œÁÉ½™¥±”Ñ…ˆµ¥ÍÍ¥¹œè€‘íÑ…‰õ€¤ì)ô)…ÍÍ•ÉÐ¡ÁÉ½™¥±•5…É­ÕÀ¹¥¹±Õ‘•Ì ‰½½¬µÁÉ½™¥±”µ½Ù•Èˆ¤°€‰½½­¥¹œÁÉ½™¥±”¹••‘Ì„ÕÍÑ½µ¥é…‰±”½Ù•Èˆ¤ì)…ÍÍ•ÉÐ¡ÁÉ½™¥±•5…É­ÕÀ¹¥¹±Õ‘•Ì ‰½½¬µÁÉ½™¥±”µ…Ù…Ñ…Èˆ¤°€‰½½­¥¹œÁÉ½™¥±”¹••‘Ì…¸½Ù•É±…ÁÁ¥¹œ…Ù…Ñ…Èˆ¤ì)…ÍÍ•ÉÐ¡ÁÉ½™¥±•5…É­ÕÀ¹¥¹±Õ‘•Ì ‰½±±½Ý•ÉÌˆ¤€˜˜ÁÉ½™¥±•5…É­ÕÀ¹¥¹±Õ‘•Ì ‰½±±½Ý¥¹œˆ¤°€‰½½­¥¹œÁÉ½™¥±”¹••‘Ì½µµÕ¹¥ÑäÍÑ…ÑÌˆ¤ì)…ÍÍ•ÉÐ¡ÁÉ½™¥±•5…É­ÕÀ¹¥¹±Õ‘•Ì ‰…Ù½É¥Ñ”Õ¥Í¥¹•Ìˆ¤€˜˜ÁÉ½™¥±•5…É­ÕÀ¹¥¹±Õ‘•Ì ‰½½­¥¹œÍÑå±”ˆ¤°€‰½½­¥¹œÁÉ½™¥±”¹••‘Ì™½½¥‘•¹Ñ¥Ñä‘•Ñ…¥±Ìˆ¤ì()½¹ÍÐÁ½ÍÑ5…É­ÕÀ€ô…Á¤¹½µµÕ¹¥ÑåA½ÍÑ…É¡ì¥è€‰Ñ•ÍÐµÁ½ÍÐˆ°…ÕÑ¡½Èè€‰Q•ÍÐ½½¬ˆ°Ñ•áÐè€‰‘‘•µÕÍ¡É½½µÌ¸ˆ°É•¥Á•%è€‰…ÉÉ½Ðµ…­”ˆô¤ì)™½È€¡½¹ÍÐ…Ñ¥½¸½˜l‰™½É¬ˆ°€‰µ…‘”ˆ°€‰Í…Ù”‰t¤…ÍÍ•ÉÐ¡Á½ÍÑ5…É­ÕÀ¹¥¹±Õ‘•Ì¡‘…Ñ„µ½µµÕ¹¥Ñäµ…Ñ¥½¸ôˆ‘í…Ñ¥½¹ô‰€¤°½µµÕ¹¥Ñä…Ñ¥½¸µ¥ÍÍ¥¹œè€‘í…Ñ¥½¹õ€¤ì)…ÍÍ•ÉÐ¡Á½ÍÑ5…É­ÕÀ¹¥¹±Õ‘•Ì ‰‘…Ñ„µ½µµÕ¹¥ÑäµÍ¡…É”ˆ¤°€‰½µµÕ¹¥ÑäÁ½ÍÐµÕÍÐÍÕÁÁ½ÉÐÍ¡…É¥¹œˆ¤ì)…ÍÍ•ÉÐ¡Á½ÍÑ5…É­ÕÀ¹¥¹±Õ‘•Ì ‰‘…Ñ„µ½µµÕ¹¥Ñäµ™½±±½Üˆ¤°€‰½µµÕ¹¥ÑäÁ½ÍÐµÕÍÐÍÕÁÁ½ÉÐ™½±±½Ý¥¹œˆ¤ì)…ÍÍ•ÉÐ¡Á½ÍÑ5…É­ÕÀ¹¥¹±Õ‘•Ì ‰‘…Ñ„µ­¥Ñ¡•¸µ¹½Ñ”µ™½É´ˆ¤°€‰½µµÕ¹¥ÑäÁ½ÍÐµÕÍÐÍÕÁÁ½ÉÐ-¥Ñ¡•¸9½Ñ•Ìˆ¤ì)…ÍÍ•ÉÐ¡Á½ÍÑ5…É­ÕÀ¹¥¹±Õ‘•Ì ˆÉ•¥Á•Ì½…ÉÉ½Ðµ…­”ˆ¤°€‰½µµÕ¹¥ÑäÁ½ÍÑÌµÕÍÐ±¥¹¬‘¥É•Ñ±äÑ¼É•¥Á•Ìˆ¤ì)…ÍÍ•ÉÐ¡Á½ÍÑ5…É­ÕÀ¹¥¹±Õ‘•Ì ˆ½µµÕ¹¥Ñä½Ñ•ÍÐµÁ½ÍÐˆ¤°€‰½µµÕ¹¥Ñä½½¬¹…µ•ÌµÕÍÐ±¥¹¬Ñ¼ÁÕ‰±¥ŒÁÉ½™¥±•Ìˆ¤ì)…ÍÍ•ÉÐ¡…Á¤¹½µµÕ¹¥ÑåY¥‘•½½É´ ¤¹¥¹±Õ‘•Ì ‰…•ÁÐõp‰Ù¥‘•¼¼©pˆˆ¤€˜˜…Á¤¹½µµÕ¹¥ÑåY¥‘•½½É´ ¤¹¥¹±Õ‘•Ì ‰¹…µ”õp‰É•¥Á•%‘pˆˆ¤°€‰%¸5ä-¥Ñ¡•¸µÕÍÐÕÁ±½…Ù¥‘•½Ì…¹±¥¹¬É•¥Á•Ìˆ¤ì()…Á¤¹É•¹‘•É½µµÕ¹¥Ñä ¤ì)…ÍÍ•ÉÐ¡•±•µ•¹Ð¹¥¹¹•É!Q50¹¥¹±Õ‘•Ì ‰‘…Ñ„µ½µµÕ¹¥ÑäµÁ½ÍÐµ™½É´ˆ¤°€‰½µµÕ¹¥Ñä™••¹••‘Ì„Á½ÍÐ½µÁ½Í•Èˆ¤ì)…ÍÍ•ÉÐ¡•±•µ•¹Ð¹¥¹¹•É!Q50¹¥¹±Õ‘•Ì ‰½É¬€˜MÁ½½¸ˆ¤°€‰½µµÕ¹¥Ñä™••¹••‘ÌÑ¡”Í¥¹…ÑÕÉ”…ÁÁÉ•¥…Ñ¥½¸…Ñ¥½¸ˆ¤ì)…Á¤¹É•¹‘•É½µµÕ¹¥Ñä ‰Ý•±½µ”µÑ…‰±”ˆ¤ì)…ÍÍ•ÉÐ¡•±•µ•¹Ð¹¥¹¹•É!Q50¹¥¹±Õ‘•Ì ‰M¡…ä	•”ˆ¤€˜˜•±•µ•¹Ð¹¥¹¹•É!Q50¹¥¹±Õ‘•Ì ‰½½¬µÁÉ½™¥±”µ½Ù•Èˆ¤°€‰AÕ‰±¥Œ½µµÕ¹¥ÑäÉ½ÕÑ•ÌµÕÍÐÉ•¹‘•È„É•…°½½­¥¹œÁÉ½™¥±”ˆ¤ì()…ÍÍ•ÉÐ¹ÍÑÉ¥ÑÅÕ…°¡…Á¤¹…ÕÕÍÑ…Ñ•-•åÌ ¤¹±•¹Ñ °€ÌÄ°€‰ÕÕÍÐ…±•¹‘…ÈµÕÍÐ¥¹±Õ‘”…±°€ÌÄ‘…åÌˆ¤ì)™½È€¡½¹ÍÐ‘…Ñ•-•ä½˜…Á¤¹…ÕÕÍÑ…Ñ•-•åÌ ¤¤ì(€½¹ÍÐµ•¹Ô€ô…Á¤¹‘•™…Õ±Ñ5•¹Õ½É…Ñ”¡‘…Ñ•-•ä¤ì(€™½È€¡½¹ÍÐÍ±½Ð½˜l‰‰É•…­™…ÍÐˆ°€‰±Õ¹ ˆ°€‰‘¥¹¹•Èˆ°€‰Í¹…¬‰t¤ì(€€€½¹ÍÐÉ•¥Á”€ô…Á¤¹…±•¹‘…ÉI•¥Á”¡µ•¹ÕmÍ±½Ñt¹É•¥Á•%¤ì(€€€…ÍÍ•ÉÐ¡É•¥Á”°€‘í‘…Ñ•-•åô€‘íÍ±½ÑôµÕÍÐÁ½¥¹ÐÑ¼„É•…°ÁÕ‰±¥Í¡…‰±”É•¥Á•€¤ì(€€€…ÍÍ•ÉÐ¡É•¥Á”¹¥¹É•‘¥•¹ÑÌ¹±•¹Ñ €ø€À°€‘í‘…Ñ•-•åô€‘íÍ±½ÑôÉ•¥Á”µÕÍÐ¡…Ù”¥¹É•‘¥•¹ÑÍ€¤ì(€€€…ÍÍ•ÉÐ ¡É•¥Á”¹¥¹ÍÑÉÕÑ¥½¹ÌñðÉ•¥Á”¹‘¥É•Ñ¥½¹Ì¤¹±•¹Ñ €ø€À°€‘í‘…Ñ•-•åô€‘íÍ±½ÑôÉ•¥Á”µÕÍÐ¡…Ù”¥¹ÍÑÉÕÑ¥½¹Í€¤ì(€€€…ÍÍ•ÉÐ¡É•¥Á”¹¥µ…”ñðÉ•¥Á”¹¥µ…•}ÕÉ°°€‘í‘…Ñ•-•åô€‘íÍ±½ÑôÉ•¥Á”µÕÍÐ¡…Ù”…¸¥µ…•€¤ì(€ô)ô)½¹ÍÐÑ½‘…å5…É­ÕÀ€ô…Á¤¹Ñ½‘…åA±…Ñ•M•Ñ¥½¸ ¤ì)…ÍÍ•ÉÐ¡Ñ½‘…å5…É­ÕÀ¹¥¹±Õ‘•Ì ‰Q½‘…çŠeÌA±…Ñ”ˆ¤°€‰!½µ•Á…”µÕÍÐ¥¹±Õ‘”Q½‘…çŠeÌA±…Ñ”ˆ¤ì)…ÍÍ•ÉÐ¹ÍÑÉ¥ÑÅÕ…° ¡Ñ½‘…å5…É­ÕÀ¹µ…Ñ  ½‘…Ñ„µ…±•¹‘…ÈµÉ•¥Á”µ½Á•¸ô½œ¤ñðmt¤¹±•¹Ñ °€à°€‰Ù•ÉäQ½‘…çŠeÌA±…Ñ”µ•…°µÕÍÐ¡…Ù”ÑÝ¼‘¥É•ÐÉ•¥Á”±¥¹­Ìˆ¤ì)½¹ÍÐµ½¹Ñ¡5…É­ÕÀ€ô…Á¤¹µ½¹Ñ¡±å-¥Ñ¡•¹…±•¹‘…ÉM•Ñ¥½¸ ¤ì)…ÍÍ•ÉÐ¡µ½¹Ñ¡5…É­ÕÀ¹¥¹±Õ‘•Ì ‰ÕÕÍÐèÉ½Õ¹Ñ¡”]½É±ˆ¤°€‰1•ÓŠeÌA±…¸…±•¹‘…ÈµÕÍÐ…ÉÉäÑ¡”ÕÕÍÐÉ½Õ¹Ñ¡”]½É±±…Õ¹ ˆ¤ì)…ÍÍ•ÉÐ¹ÍÑÉ¥ÑÅÕ…° ¡µ½¹Ñ¡5…É­ÕÀ¹µ…Ñ  ½‘…Ñ„µÍ•±•Ðµ­¥Ñ¡•¸µ‘…Ñ”ô½œ¤ñðmt¤¹±•¹Ñ °€ÌÜ°€‰1…Õ¹ …±•¹‘…ÈµÕÍÐ¥¹±Õ‘”)Õ±ä€ÈØÑ¡É½Õ ÕÕÍÐ€ÌÄˆ¤ì)…ÍÍ•ÉÐ¡µ½¹Ñ¡5…É­ÕÀ¹¥¹±Õ‘•Ì ‰‘…Ñ„µÁ±…¹¹•Èµµ½¹Ñ õp‰ÁÉ•Ù¥½ÕÍpˆˆ¤€˜˜µ½¹Ñ¡5…É­ÕÀ¹¥¹±Õ‘•Ì ‰‘…Ñ„µÁ±…¹¹•Èµµ½¹Ñ õp‰¹•áÑpˆˆ¤°€‰…±•¹‘…ÈµÕÍÐÍÕÁÁ½ÉÐÁÉ•Ù¥½ÕÌ…¹¹•áÐµ½¹Ñ ¹…Ù¥…Ñ¥½¸ˆ¤ì()½¹ÍÐÝ••­5…É­ÕÀ€ô…Á¤¹¡½µ•Á…•]••­±åMÑÉ¥À ¤ì)…ÍÍ•ÉÐ¡Ý••­5…É­ÕÀ¹¥¹±Õ‘•Ì ‰Q¡¥Ì]••¬…Ð1•ÓŠeÌ½½¬gŠe…±°ˆ¤°€‰!½µ•Á…”¹••‘ÌÑ¡”½µÁ…ÐÝ••­±äÁÉ•Ù¥•Üˆ¤ì)…ÍÍ•ÉÐ¹ÍÑÉ¥ÑÅÕ…° ¡Ý••­5…É­ÕÀ¹µ…Ñ  ½‘…Ñ„µÝ••¬µ‘…Ñ”ô½œ¤ñðmt¤¹±•¹Ñ °€Ü°€‰!½µ•Á…”µÕÍÐÍ¡½Ü½¹”Ý••¬½¹±äˆ¤ì)…ÍÍ•ÉÐ¡Ý••­5…É­ÕÀ¹¥¹±Õ‘•Ì ˆ±•ÑÌµÁ±…¸ˆ¤€˜˜Ý••­5…É­ÕÀ¹¥¹±Õ‘•Ì ‰UÍ”Q¡¥Ì]••¬ˆ¤€˜˜Ý••­5…É­ÕÀ¹¥¹±Õ‘•Ì ‰Y¥•ÜÉ½•Éä1¥ÍÐˆ¤°€‰]••­±äÁÉ•Ù¥•ÜµÕÍÐ±¥¹¬Ñ¼Á±…¹¹¥¹œ…Ñ¥½¹Ìˆ¤ì)…Á¤¹É•¹‘•É1•ÑÍ½½­!½µ” ¤ì)…ÍÍ•ÉÐ¡•±•µ•¹Ð¹¥¹¹•É!Q50¹¥¹±Õ‘•Ì œñ Ä¥ô‰¡½µ•!•É½Q¥Ñ±”ˆùÉ½Õ¹Ñ¡”]½É±ð½ Äøœ¤°€‰!½µ•Á…”¡•É¼µÕÍÐ±…Õ¹ ÕÕÍÐÉ½Õ¹Ñ¡”]½É±ˆ¤ì)…ÍÍ•ÉÐ¡•±•µ•¹Ð¹¥¹¹•É!Q50¹¥¹±Õ‘•Ì ‰Õ±ÑÕÉ”½˜Ñ¡”]••¬ˆ¤€˜˜•±•µ•¹Ð¹¥¹¹•É!Q50¹¥¹±Õ‘•Ì ‰•…ÑÕÉ•É¥¹¬ˆ¤€˜˜•±•µ•¹Ð¹¥¹¹•É!Q50¹¥¹±Õ‘•Ì ‰A…¹ÑÉäMÑ…Á±•Ìˆ¤°€‰!½µ•Á…”µÕÍÐ¥¹±Õ‘”Ñ¡”½½É‘¥¹…Ñ•Ý••­±äÕ±ÑÕÉ”™•…ÑÕÉ•Ìˆ¤ì)…ÍÍ•ÉÐ¡•±•µ•¹Ð¹¥¹¹•É!Q50¹¥¹±Õ‘•Ì ‰]¡…ÐgŠe…±°½½­¥¹œÉ½Õ¹Ñ¡”]½É±ˆ¤°€‰!½µ•Á…”µÕÍÐ¥¹±Õ‘”Ñ¡”É½Õ¹Ñ¡”]½É±½µµÕ¹¥Ñä¡…±±•¹”ˆ¤ì)…ÍÍ•ÉÐ …•±•µ•¹Ð¹¥¹¹•É!Q50¹¥¹±Õ‘•Ì ‰µ½¹Ñ¡±äµ­¥Ñ¡•¸µÍ•Ñ¥½¸ˆ¤°€‰Õ±°µ½¹Ñ¡±ä…±•¹‘…ÈµÕÍÐ¹½Ð…ÁÁ•…È½¸Ñ¡”¡½µ•Á…”ˆ¤ì)…ÍÍ•ÉÐ¡•±•µ•¹Ð¹¥¹¹•É!Q50¹¥¹±Õ‘•Ì ‰¡½µ•Á…”µÝ••¬µÍÑÉ¥Àˆ¤°€‰!½µ•Á…”µÕÍÐÉ•Ñ…¥¸Ñ¡”Ý••­±äµ•…°µÁ±…¹¹¥¹œÁÉ•Ù¥•Üˆ¤ì)…Á¤¹É•¹‘•É1•ÑÍA±…¸ ¤ì)…ÍÍ•ÉÐ¡•±•µ•¹Ð¹¥¹¹•É!Q50¹¥¹±Õ‘•Ì ‰Q½‘…çŠeÌA±…Ñ”ˆ¤€˜˜•±•µ•¹Ð¹¥¹¹•É!Q50¹¥¹±Õ‘•Ì ‰µ½¹Ñ¡±äµ­¥Ñ¡•¸µÍ•Ñ¥½¸ˆ¤€˜˜•±•µ•¹Ð¹¥¹¹•É!Q50¹¥¹±Õ‘•Ì ‰-¥Ñ¡•¸É½•Éä1¥ÍÐˆ¤°€‰1•ÓŠeÌA±…¸µÕÍÐ½¹Ñ…¥¸Q½‘…çŠeÌA±…Ñ”°…±•¹‘…È°…¹É½•É¥•Ìˆ¤ì()½¹ÍÐ™…µ¥±åI•¥Á”€ô…Á¤¹…±±I•¥Á•½±±•Ñ¥½¸ ¤¹™¥¹¡…Á¤¹½½­±½¹±¥¥‰±”¤ì)…ÍÍ•ÉÐ¡™…µ¥±åI•¥Á”°€‰Ð±•…ÍÐ½¹”½µÁ±•Ñ”É•¥Á”µÕÍÐÍÕÁÁ½ÉÐ½½¬±½¹œQ½•Ñ¡•Èˆ¤ì)½¹ÍÐ±¥ÑÑ±•)½ˆ€ô…Á¤¹½½­±½¹Q…Í­½È¡™…µ¥±åI•¥Á”°€‰MÑ¥ÈÑ¡”¥¹É•‘¥•¹ÑÌˆ°€ˆÌ´Ôˆ¤ì)½¹ÍÐ©Õ¹¥½É)½ˆ€ô…Á¤¹½½­±½¹Q…Í­½È¡™…µ¥±åI•¥Á”°€‰MÑ¥ÈÑ¡”¥¹É•‘¥•¹ÑÌˆ°€ˆä´ÄÈˆ¤ì)…ÍÍ•ÉÐ¹¹½ÑMÑÉ¥ÑÅÕ…°¡±¥ÑÑ±•)½ˆ¹¡¥±°©Õ¹¥½É)½ˆ¹¡¥±°€‰”Í•±•Ñ¥½¸µÕÍÐ¡…¹”Ñ¡”¡¥±“ŠeÌ©½ˆˆ¤ì)…ÍÍ•ÉÐ ½‘Õ±Ð½¹±ä½¤¹Ñ•ÍÐ¡…Á¤¹½½­±½¹Q…Í­½È¡™…µ¥±åI•¥Á”°€‰	…­”¥¸„¡½Ð½Ù•¸ˆ°€ˆä´ÄÈˆ¤¹…‘Õ±Ð¤°€‰!•…ÐÍÑ•ÁÌµÕÍÐÉ•µ…¥¸…‘Õ±Ðµ½¹±äˆ¤ì()½¹ÍÐÕÉ…Ñ•‘]••¬€ô…Á¤¹•¹•É…Ñ•‘5•¹ÕÍ½É]••¬ ˆÈÀÈØ´ÀÜ´ÈÈˆ¤ì)½¹ÍÐÕÉ…Ñ•‘5•…±Ì€ô=‰©•Ð¹Ù…±Õ•Ì¡ÕÉ…Ñ•‘]••¬¤¹™±…Ñ5…À ¡µ•¹Ô¤€ôømµ•¹Ô¹‰É•…­™…ÍÐ°µ•¹Ô¹±Õ¹ °µ•¹Ô¹‘¥¹¹•È°µ•¹Ô¹Í¹…­t¤ì)…ÍÍ•ÉÐ¹ÍÑÉ¥ÑÅÕ…°¡¹•ÜM•Ð¡ÕÉ…Ñ•‘5•…±Ì¹µ…À ¡µ•…°¤€ôøµ•…°¹É•¥Á•%¤¤¹Í¥é”°ÕÉ…Ñ•‘5•…±Ì¹±•¹Ñ °€‰ÕÉ…Ñ•Ý••¬µÕÍÐ¹½ÐÉ•Á•…ÐÉ•¥Á•Ìˆ¤ì)½¹ÍÐ‘¥¹¹•ÉQÉ…¥ÑÌ€ô=‰©•Ð¹Ù…±Õ•Ì¡ÕÉ…Ñ•‘]••¬¤¹µ…À ¡µ•¹Ô¤€ôø…Á¤¹Á±…¹¹•ÉI•¥Á•QÉ…¥ÑÌ¡…Á¤¹…±•¹‘…ÉI•¥Á”¡µ•¹Ô¹‘¥¹¹•È¹É•¥Á•%¤¤¤ì)…ÍÍ•ÉÐ¡¹•ÜM•Ð¡‘¥¹¹•ÉQÉ…¥ÑÌ¹µ…À ¡¥Ñ•´¤€ôø¥Ñ•´¹ÁÉ½Ñ•¥¸¤¤¹Í¥é”€øô€Ð°€‰]••­±ä‘¥¹¹•ÉÌµÕÍÐ‰…±…¹”ÁÉ½Ñ•¥¹Ìˆ¤ì)…ÍÍ•ÉÐ¡¹•ÜM•Ð¡‘¥¹¹•ÉQÉ…¥ÑÌ¹µ…À ¡¥Ñ•´¤€ôø¥Ñ•´¹Õ¥Í¥¹”¤¤¹Í¥é”€øô€Ð°€‰]••­±ä‘¥¹¹•ÉÌµÕÍÐ‰…±…¹”Õ¥Í¥¹•Ìˆ¤ì)…ÍÍ•ÉÐ¡¹•ÜM•Ð¡‘¥¹¹•ÉQÉ…¥ÑÌ¹µ…À ¡¥Ñ•´¤€ôø¥Ñ•´¹µ•Ñ¡½¤¤¹Í¥é”€øô€Ì°€‰]••­±ä‘¥¹¹•ÉÌµÕÍÐ‰…±…¹”½½­¥¹œµ•Ñ¡½‘Ìˆ¤ì)½¹ÍÐ™½±±½Ý¥¹]••­%‘Ì€ô¹•ÜM•Ð¡=‰©•Ð¹Ù…±Õ•Ì¡…Á¤¹•¹•É…Ñ•‘5•¹ÕÍ½É]••¬ ˆÈÀÈØ´ÀÜ´Èäˆ¤¤¹™±…Ñ5…À ¡µ•¹Ô¤€ôømµ•¹Ô¹‰É•…­™…ÍÐ¹É•¥Á•%°µ•¹Ô¹±Õ¹ ¹É•¥Á•%°µ•¹Ô¹‘¥¹¹•È¹É•¥Á•%°µ•¹Ô¹Í¹…¬¹É•¥Á•%‘t¤¤ì)½¹ÍÐÉ•Á•…Ñ•‘É½ÍÍ]••­Ì€ôÕÉ…Ñ•‘5•…±Ì¹™¥±Ñ•È ¡µ•…°¤€ôø™½±±½Ý¥¹]••­%‘Ì¹¡…Ì¡µ•…°¹É•¥Á•%¤¤¹±•¹Ñ ì)…ÍÍ•ÉÐ¡É•Á•…Ñ•‘É½ÍÍ]••­Ì€ðô€Ü°€‰½¹Í•ÕÑ¥Ù”Ý••­ÌµÕÍÐÍÕ‰ÍÑ…¹Ñ¥…±±äÉ½Ñ…Ñ”Ñ¡”µ•¹Ôˆ¤ì()…Á¤¹Í•Ñ!½ÕÍ•¡½±¡ìÍ•ÉÙ¥¹Ìè€Ð°•…Ñ¥¹MÑå±”è€‰¹¼µÁÉ•™•É•¹”ˆ°…±±•É¥•Ìè€ˆˆ°‘¥•Ñ…Éäè€ˆˆ°…Ù½¥è€ˆˆô¤ì)…Á¤¹Í•ÑA…¹ÑÉå=Ý¹•¡mt¤ì)½¹ÍÐÝ••­%Ñ•µÌ€ô…Á¤¹‰Õ¥±‘-¥Ñ¡•¹É½•Éå%Ñ•µÌ ‰Ý••¬ˆ¤ì)…ÍÍ•ÉÐ¡Ý••­%Ñ•µÌ¹±•¹Ñ €ø€À°€‰]••­±äÉ½•Éä±¥ÍÐµÕÍÐÕÍ”É•…°É•¥Á”¥¹É•‘¥•¹ÑÌˆ¤ì)½¹ÍÐÉ½•Éå-•åÌ€ôÝ••­%Ñ•µÌ¹µ…À ¡¥Ñ•´¤€ôø€‘í¥Ñ•´¹¹…µ”¹Ñ½1½Ý•É…Í” ¥õð‘íMÑÉ¥¹œ¡¥Ñ•´¹Õ¹¥Ðñð€ˆˆ¤¹Ñ½1½Ý•É…Í” ¥õ€¤ì)…ÍÍ•ÉÐ¹ÍÑÉ¥ÑÅÕ…°¡¹•ÜM•Ð¡É½•Éå-•åÌ¤¹Í¥é”°É½•Éå-•åÌ¹±•¹Ñ °€‰]••­±äÉ½•Éä±¥ÍÐµÕÍÐ½¹Í½±¥‘…Ñ”‘ÕÁ±¥…Ñ”¥¹É•‘¥•¹ÑÌˆ¤ì)½¹ÍÐ½Ý¹•‘9…µ”€ôÝ••­%Ñ•µÍlÁt¹¹…µ”¹Ñ½1½Ý•É…Í” ¤ì)…Á¤¹Í•ÑA…¹ÑÉå=Ý¹•¡m½Ý¹•‘9…µ•t¤ì)…ÍÍ•ÉÐ¡…Á¤¹‰Õ¥±‘-¥Ñ¡•¹É½•Éå%Ñ•µÌ ‰Ý••¬ˆ¤¹™¥¹ ¡¥Ñ•´¤€ôø¥Ñ•´¹¹…µ”¹Ñ½1½Ý•É…Í” ¤€ôôô½Ý¹•‘9…µ”¤ü¹½Ý¹•°€‰A…¹ÑÉäµ½Ý¹•¥Ñ•µÌµÕÍÐ‰”Í•Á…É…Ñ•™É½´¥Ñ•µÌÑ¼ÁÕÉ¡…Í”ˆ¤ì)½¹ÍÐÉ½•Éå5…É­ÕÀ€ô…Á¤¹É½•ÉåA±…¹¹¥¹M•Ñ¥½¸ ¤ì)™½È€¡½¹ÍÐ…Ñ¥½¸½˜l‰Í…Ù”ˆ°€‰ÁÉ¥¹Ðˆ°€‰•µ…¥°ˆ°€‰‘½Ý¹±½…ˆ°€‰Í¡…É”‰t¤…ÍÍ•ÉÐ¡É½•Éå5…É­ÕÀ¹¥¹±Õ‘•Ì¡‘…Ñ„´‘í…Ñ¥½¹ôµÉ½•Éäµ±¥ÍÑ€¤°É½•Éä…Ñ¥½¸µ¥ÍÍ¥¹œè€‘í…Ñ¥½¹õ€¤ì)…ÍÍ•ÉÐ¡É½•Éå5…É­ÕÀ¹¥¹±Õ‘•Ì ‰‘…Ñ„µ±•…ÈµÉ½•Éäµ¡•­•ˆ¤°€‰É½•Éä±¥ÍÐµÕÍÐ±•…È¡•­•¥Ñ•µÌˆ¤ì()½¹ÍÐÉ½ÕÑ•‘A…•Ì€ô¹•ÜM•Ð¡l(€€‰¡½µ”ˆ°€‰±•ÑÌµ½½¬ˆ°€‰™¥¹µÑ¡”µ‰•…Ðˆ°€‰Í•½¹µ¡…¹”ˆ°€‰½µµÕ¹¥Ñäˆ°€‰­¥Ñ¡•¸ˆ°€‰…µ•É¥„´ÈÔÀˆ°(€€‰…‘µÉ•¥Á”ˆ°€‰ÍÕ‰µ¥ÐµÉ•¥Á”ˆ°€‰½½¬ÄÀÄˆ°€‰Í­¥±±Ìµ……‘•µäˆ°€‰Õ±¥¹…Éäµ……‘•µäˆ°€‰‰Õ¥±µ„µµ•…°ˆ°(€€‰­¥Ñ¡•¸µÍ•…É ˆ°€‰Á…¹ÑÉäµÍ…¸ˆ°€‰Õ¥Í¥¹”µ•áÁ±½É•Èˆ°€‰™½½µ•¹å±½Á•‘¥„ˆ°€‰Ý¡…Ðµå…±°µ½½­¥¹œˆ°(€€‰µ•¹Ôµ¥¹Ñ•±±¥•¹”ˆ°€‰±¥Ù¥¹œµ½½­‰½½¬ˆ°€‰­¥‘Ìµ½½­¥¹œˆ°€‰­¥‘Ìµ­½É¹•Èˆ°€‰É•¥Á•Ìˆ°€‰Á…Ñ¡Ìˆ°(€€‰Á…Ñ¡Ý…åÌˆ°€‰Á±…¹¹•Èˆ°€‰±•ÑÌµÁ±…¸ˆ°€‰½½¬µ…±½¹œˆ°€‰¡½ÍÑ¥¹œˆ°€‰…Ñ¡•É¥¹œµÁ±…¹¹•Èˆ°€‰…‰½ÕÐˆ°€‰…½Õ¹Ðˆ°€‰ÁÉ¥Ù…äˆ°€‰Ñ•ÉµÌˆ°€‰½¹Ñ…Ðˆ°€‰Í•…É ˆ°€‰Õ¥Í¥¹”ˆ)t¤ì)½¹ÍÐ±½…±½Õµ•¹Ñ¹¡½ÉÌ€ô¹•ÜM•Ð¡l‰…¥-¥Ñ¡•¹%¹Ù•¹Ñ½Éå½É´‰t¤ì)½¹ÍÐ±¥Ñ•É…±%¹Ñ•É¹…±1¥¹­Ì€ôl¸¸¹Í½ÕÉ”¹µ…Ñ¡±° ½¡É•˜ôˆŒ¡mxˆ‘t¬¤ˆ½œ¥t¹µ…À ¡µ…Ñ ¤€ôøµ…Ñ¡lÅt¤ì)™½È€¡½¹ÍÐ¡É•˜½˜±¥Ñ•É…±%¹Ñ•É¹…±1¥¹­Ì¤ì(€½¹ÍÐÉ½ÕÑ”€ô¡É•˜¹ÍÁ±¥Ð ½l¼ýt¼¥lÁtì(€…ÍÍ•ÉÐ¡É½ÕÑ•‘A…•Ì¹¡…Ì¡É½ÕÑ”¤ñð±½…±½Õµ•¹Ñ¹¡½ÉÌ¹¡…Ì¡É½ÕÑ”¤°1¥Ñ•É…°¥¹Ñ•É¹…°±¥¹¬¡…Ì¹¼É½ÕÑ”½È‘½Õµ•¹ÐÑ…É•Ðè€Œ‘í¡É•™õ€¤ì)ô()½¹Í½±”¹±½œ¡½½­‰½½¬¹…Ù¥…Ñ¥½¸Ñ•ÍÑÌÁ…ÍÍ•™½È€‘í•áÁ•Ñ•‘M•Ñ¥½¹Ì¹±•¹Ñ¡ô¡…ÁÑ•ÉÌ°€‘íÉ•¥Á•%‘Ì¹Í¥é•ôÉ•¥Á”…É‘Ì°…¹€‘í±¥Ñ•É…±%¹Ñ•É¹…±1¥¹­Ì¹±•¹Ñ¡ô±¥Ñ•É…°¥¹Ñ•É¹…°±¥¹­Ì¹€¤ì)½¹Í½±”¹±½œ¡É¥¹­Ì…Õ‘¥ÐÁ…ÍÍ•™½È€‘í‘É¥¹­Í½±±•Ñ¥½¸¹±•¹Ñ¡ô‰•Ù•É…”É•¥Á•ÌÝ¥Ñ é•É¼™½½µ¥Ñ•´±•…­Ì¹€¤ì