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
globalThis.__recipeImageAudit = {
  canonicalRecipeId,
  rows: recipes.map((recipe) => {
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
  })
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

const canonicalRecipeId = (id) => context.__recipeImageAudit.canonicalRecipeId(id);
const rows = context.__recipeImageAudit.rows.filter((row) => canonicalRecipeId(row.id) === row.id);
const byImage = new Map();
for (const row of rows) {
  if (!byImage.has(row.image)) byImage.set(row.image, []);
  byImage.get(row.image).push(row);
}

const missingFiles = rows.filter((row) => !fs.existsSync(path.join(root, row.image)));
const fallbacks = rows.filter((row) =>
  row.fallbackUsed
  || row.missingRecipeImage
  || row.image === "assets/logo.png"
  || row.image === "assets/recipe-photo-needed.svg"
);
const photoQueue = fallbacks.map((row) => ({
  id: row.id,
  title: row.title,
  cuisine: row.cuisine,
  category: row.category,
  expectedPath: `images/recipes/audit-2026-06/${row.id}.jpg`,
  prompt: `Editorial food photography of ${row.title}, authentic ${row.cuisine || row.category} dish, plated clearly so the food is immediately recognizable, warm natural light, Southern Living and Food & Wine quality, no text, no watermark.`
}));
const sharedImages = [...byImage.entries()]
  .filter(([, recipes]) => recipes.length > 1)
  .map(([image, recipes]) => ({
    image,
    recipes: recipes.map(({ id, title }) => ({ id, title }))
  }));
const unrelatedSharedImages = sharedImages.filter((group) => new Set(group.recipes.map((recipe) => recipe.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"))).size > 1);
const imageReviewQueue = unrelatedSharedImages.flatMap((group) => group.recipes.slice(1).map((recipe) => ({
  ...recipe,
  reusedImage: group.image,
  expectedPath: `images/recipes/photo-review/${recipe.id}.jpg`,
  reason: "Shared primary image belongs to a different named dish."
})));

const report = {
  generatedAt: new Date().toISOString(),
  totalRecipes: rows.length,
  uniqueImages: byImage.size,
  missingFiles,
  fallbacks,
  photoQueue,
  sharedImages,
  unrelatedSharedImages,
  imageReviewQueue,
  recipes: rows
};

const outputPath = path.join(root, "data", "recipe-image-audit.json");
fs.writeFileSync(outputPath, `${JSON.stringify(report, null, 2)}\n`);

console.log(`Recipes: ${rows.length}`);
console.log(`Unique images: ${byImage.size}`);
console.log(`Missing files: ${missingFiles.length}`);
console.log(`Fallback/queued images: ${fallbacks.length}`);
console.log(`Photo queue items: ${photoQueue.length}`);
console.log(`Shared image groups: ${sharedImages.length}`);
console.log(`Unrelated shared image groups: ${unrelatedSharedImages.length}`);
console.log(`Image review queue items: ${imageReviewQueue.length}`);
console.log(`Report: ${path.relative(root, outputPath)}`);

if (missingFiles.length) process.exitCode = 1;
