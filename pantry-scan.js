(() => {
  const STORAGE_KEY = "letsCookPantryScan";
  const quickIngredients = [
    "chicken", "ground beef", "eggs", "cheese", "milk", "butter", "rice", "pasta", "bread", "tortillas",
    "potatoes", "onion", "bell pepper", "garlic", "tomatoes", "beans", "corn", "flour", "sugar", "oats",
    "peanut butter", "jelly", "bananas", "apples", "yogurt", "lettuce", "cabbage", "shrimp", "salmon", "bacon"
  ];

  const aliases = new Map([
    ["macaroni", "pasta"],
    ["noodles", "pasta"],
    ["noodle", "pasta"],
    ["hamburger", "ground beef"],
    ["beef", "ground beef"],
    ["tomato", "tomatoes"],
    ["egg", "eggs"],
    ["tortilla", "tortillas"],
    ["potato", "potatoes"],
    ["banana", "bananas"],
    ["apple", "apples"],
    ["bean", "beans"],
    ["cheddar", "cheese"],
    ["mozzarella", "cheese"]
  ]);

  function normalize(value = "") {
    return String(value)
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function unique(values = []) {
    return [...new Set(values.map(normalize).filter(Boolean).map((item) => aliases.get(item) || item))];
  }

  function readPantryState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { ingredients: [], notes: "" };
    } catch {
      return { ingredients: [], notes: "" };
    }
  }

  function savePantryState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function recipeIngredientText(recipe = {}) {
    const items = recipe.ingredients || recipe.structured_ingredients || recipe.ingredients_structured || [];
    return normalize(items.map((item) => typeof item === "string" ? item : item.name || item.original || "").join(" "));
  }

  function recipeTitleText(recipe = {}) {
    return normalize([recipe.title, recipe.description, recipe.category, recipe.cuisine, ...(recipe.tags || [])].join(" "));
  }

  function findPantryMatches(ingredients = []) {
    const pantry = unique(ingredients);
    const sourceRecipes = Array.isArray(recipes) ? recipes : [];
    return sourceRecipes.map((recipe) => {
      const ingredientText = recipeIngredientText(recipe);
      const titleText = recipeTitleText(recipe);
      const matches = pantry.filter((item) => ingredientText.includes(item) || titleText.includes(item));
      const kidBonus = /kid|snack|pizza|sandwich|parfait|smoothie|mac|cookie|nachos/i.test([recipe.category, recipe.path, recipe.title, ...(recipe.tags || [])].join(" ")) ? 1 : 0;
      const score = matches.length * 3 + kidBonus;
      return { recipe, matches, score };
    }).filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.recipe.title.localeCompare(b.recipe.title))
      .slice(0, 9);
  }

  function ingredientTokensFromText(text = "") {
    const normalized = normalize(text);
    const typed = normalized.split(/,|\n| and /).flatMap((chunk) => chunk.split(/\s{2,}/));
    const spotted = quickIngredients.filter((item) => normalized.includes(item));
    return unique([...typed, ...spotted]);
  }

  function recipeImage(recipe = {}) {
    if (typeof recipePhotoFor === "function") return recipePhotoFor(recipe);
    return recipe.image_url || recipe.image || "assets/logo.png";
  }

  function renderResults(ingredients) {
    const target = document.querySelector("#pantryScanResults");
    if (!target) return;
    const matches = findPantryMatches(ingredients);
    if (!ingredients.length) {
      target.innerHTML = `<p class="hosting-note">Add a few ingredients or tap the quick chips to get recipe ideas.</p>`;
      return;
    }
    if (!matches.length) {
      target.innerHTML = `<p class="hosting-note">No strong matches yet. Add a protein, starch, or vegetable and Chef Y'all will try again.</p>`;
      return;
    }
    target.innerHTML = matches.map(({ recipe, matches }) => `
      <article class="planner-recipe-card pantry-result-card">
        <img src="${recipeImage(recipe)}" alt="${recipe.title}" />
        <div>
          <p class="eyebrow">Uses: ${matches.slice(0, 4).join(", ")}</p>
          <h3>${recipe.title}</h3>
          <p>${recipe.description || "A pantry-friendly Let's Cook Y'all idea."}</p>
          <div class="recipe-card-meta compact-meta">
            <span>${recipe.prep_time || recipe.prepTime || "15 min"} prep</span>
            <span>${recipe.cook_time || recipe.cookTime || recipe.time || "30 min"} cook</span>
            <span>${recipe.difficulty || recipe.level || "Beginner"}</span>
          </div>
          <div class="planner-card-actions">
            <a class="small-button secondary" href="#recipes/${recipe.id}">View Recipe</a>
            <button class="small-button" data-plan="${recipe.id}">Add to Plan</button>
          </div>
        </div>
      </article>
    `).join("");
  }

  function selectedIngredientsFromDom() {
    const notes = document.querySelector("#pantryScanNotes")?.value || "";
    const chips = [...document.querySelectorAll("[data-pantry-chip].active")].map((chip) => chip.dataset.pantryChip);
    const ingredients = unique([...ingredientTokensFromText(notes), ...chips]);
    savePantryState({ ingredients, notes });
    return ingredients;
  }

  function renderPantryScanPage() {
    const app = document.querySelector("#app");
    if (!app) return;
    const state = readPantryState();
    app.innerHTML = `
      <section class="hero pantry-scan-hero">
        <div class="hero-copy">
          <p class="eyebrow">Kids Korner / Jerod's Pantry Scan Idea</p>
          <h1>Take a pantry picture, confirm what you see, and make a meal.</h1>
          <p>This first version lets families upload a pantry photo, type or tap the ingredients they see, then Chef Y'all matches them to recipes already inside Let's Cook Y'all.</p>
          <div class="hero-actions">
            <a class="button primary" href="#kids-korner">Back to Kids Korner</a>
            <button class="button secondary" id="runPantryScan">Find Meal Ideas</button>
          </div>
        </div>
        <div class="hero-card pantry-preview-card">
          <p class="eyebrow">Camera-ready MVP</p>
          <input id="pantryPhotoInput" type="file" accept="image/*" capture="environment" />
          <div id="pantryPhotoPreview" class="pantry-photo-preview">Upload or snap a pantry photo.</div>
        </div>
      </section>

      <section class="section-block pantry-scan-workbench">
        <div class="section-heading">
          <p class="eyebrow">Confirm ingredients</p>
          <h2>What does the camera see?</h2>
          <p>Until we wire in true computer vision, this keeps the user flow real: photo first, ingredient confirmation second, recipe ideas third.</p>
        </div>
        <textarea id="pantryScanNotes" rows="4" placeholder="Example: rice, chicken, eggs, cheese, tortillas, bell pepper, onion">${state.notes || ""}</textarea>
        <div class="region-chip-row pantry-chip-row">
          ${quickIngredients.map((item) => `<button type="button" class="small-button secondary ${state.ingredients?.includes(item) ? "active" : ""}" data-pantry-chip="${item}">${item}</button>`).join("")}
        </div>
        <div class="planner-card-actions">
          <button class="small-button" id="runPantryScanInline">Find Meal Ideas</button>
          <button class="small-button secondary" id="clearPantryScan">Clear</button>
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Chef Y'all ideas</p>
          <h2>Meals from what you already have</h2>
        </div>
        <div id="pantryScanResults" class="planner-recipe-list"></div>
      </section>
    `;
    renderResults(state.ingredients || []);
  }

  function addKidsKornerPantryBanner() {
    const app = document.querySelector("#app");
    if (!app || document.querySelector("#kidsPantryScanBanner")) return;
    const route = location.hash.replace("#", "").split("/")[0];
    if (route !== "kids-korner" && route !== "kids-cooking") return;
    const banner = document.createElement("section");
    banner.id = "kidsPantryScanBanner";
    banner.className = "section-block pantry-scan-callout";
    banner.innerHTML = `
      <div class="section-heading">
        <p class="eyebrow">New family challenge</p>
        <h2>What's in the pantry?</h2>
        <p>Snap a picture, confirm the ingredients, and let Chef Y'all suggest meals kids can help make.</p>
      </div>
      <a class="button primary" href="#pantry-scan">Try Pantry Scan</a>
    `;
    const firstBlock = app.querySelector(".section-block");
    if (firstBlock) firstBlock.before(banner); else app.appendChild(banner);
  }

  function syncPantryRoute() {
    setTimeout(() => {
      if (location.hash.replace("#", "").split("/")[0] === "pantry-scan") renderPantryScanPage();
      else addKidsKornerPantryBanner();
    }, 0);
  }

  document.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-pantry-chip]");
    if (chip) {
      chip.classList.toggle("active");
      renderResults(selectedIngredientsFromDom());
    }
    if (event.target.closest("#runPantryScan") || event.target.closest("#runPantryScanInline")) {
      renderResults(selectedIngredientsFromDom());
    }
    if (event.target.closest("#clearPantryScan")) {
      localStorage.removeItem(STORAGE_KEY);
      renderPantryScanPage();
    }
  });

  document.addEventListener("input", (event) => {
    if (event.target?.id === "pantryScanNotes") renderResults(selectedIngredientsFromDom());
  });

  document.addEventListener("change", (event) => {
    if (event.target?.id !== "pantryPhotoInput") return;
    const file = event.target.files?.[0];
    const preview = document.querySelector("#pantryPhotoPreview");
    if (!file || !preview) return;
    const reader = new FileReader();
    reader.onload = () => {
      preview.innerHTML = `<img src="${reader.result}" alt="Pantry photo preview" /><p>Photo loaded. Now confirm the ingredients below.</p>`;
    };
    reader.readAsDataURL(file);
  });

  window.addEventListener("hashchange", syncPantryRoute);
  window.addEventListener("load", syncPantryRoute);
  if (document.readyState !== "loading") syncPantryRoute();
})();
