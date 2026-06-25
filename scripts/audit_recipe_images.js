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
globalThis.__recipeImageAudit = recipes.map((recipe) => {
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
});
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

const rows = context.__recipeImageAudit;
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
);
const sharedImages = [...byImage.entries()]
  .filter(([, recipes]) => recipes.length > 1)
  .map(([image, recipes]) => ({
    image,
    recipes: recipes.map(({ id, title }) => ({ id, title }))
  }));

const report = {
  generatedAt: new Date().toISOString(),
  totalRecipes: rows.length,
  uniqueImages: byImage.size,
  missingFiles,
  fallbacks,
  sharedImages,
  recipes: rows
};

const outputPath = path.join(root, "data", "recipe-image-audit.json");
fs.writeFileSync(outputPath, `${JSON.stringify(report, null, 2)}\n`);

console.log(`Recipes: ${rows.length}`);
console.log(`Unique images: ${byImage.size}`);
console.log(`Missing files: ${missingFiles.length}`);
console.log(`Fallback/queued images: ${fallbacks.length}`);
console.log(`Shared image groups: ${sharedImages.length}`);
console.log(`Report: ${path.relative(root, outputPath)}`);

if (missingFiles.length || fallbacks.length) process.exitCode = 1;
