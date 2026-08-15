const fs = require("fs");
const path = require("path");
const api = require("./test_cookbook_navigation.js");

const root = path.resolve(__dirname, "..");
const recipes = api.allRecipeCollection();
const oldGlutenRule = /flour|bread|pasta|noodle|wheat|barley|rye|soy sauce/;
const rows = recipes.map((recipe) => {
  const ingredients = (recipe.ingredients || []).map((item) => String(typeof item === "string" ? item : item.name || item.item || ""));
  const oldQualifies = !oldGlutenRule.test(ingredients.join(" ").toLowerCase());
  const assessment = api.recipeGlutenAssessment(recipe);
  const dietary = [
    ...(Array.isArray(recipe.dietary) ? recipe.dietary : recipe.dietary ? [recipe.dietary] : []),
    recipe.glutenStatus,
    recipe.gluten_status
  ].filter(Boolean).map(String);
  return {
    id: recipe.id,
    title: recipe.title,
    image: api.recipePhotoFor(recipe),
    ingredients,
    oldQualifies,
    qualifies: assessment.qualifies,
    status: assessment.status,
    verification: assessment.verification,
    blockers: assessment.blockers,
    uncertainties: assessment.uncertainties,
    dietary
  };
});

const previous = rows.filter((row) => row.oldQualifies);
const current = rows.filter((row) => row.qualifies);
const removed = rows.filter((row) => row.oldQualifies && !row.qualifies);
const added = rows.filter((row) => !row.oldQualifies && row.qualifies);
const uncertain = rows.filter((row) => row.status === "needs gluten verification");
const metadataCorrections = rows.filter((row) => row.dietary.some((value) => /gluten[- ]free/i.test(value)) && !row.qualifies);
const searchResultIds = api.canonicalSearchResults("gluten-free").map((recipe) => recipe.id);
const invalidSearchResults = searchResultIds.filter((id) => !current.some((row) => row.id === id));
const duplicateIds = current.filter((row, index) => current.findIndex((candidate) => candidate.id === row.id) !== index);
const cardIntegrityIssues = current.filter((row) => {
  const recipe = recipes.find((candidate) => candidate.id === row.id);
  const card = api.recipeCard(recipe);
  return !card.includes(`href="#recipes/${row.id}"`) || !card.includes(`src="${row.image}"`);
});

const report = {
  generatedAt: new Date().toISOString(),
  reviewed: rows.length,
  previousCount: previous.length,
  currentCount: current.length,
  removedCount: removed.length,
  addedCount: added.length,
  uncertainCount: uncertain.length,
  metadataCorrectionsCount: metadataCorrections.length,
  searchResultCount: searchResultIds.length,
  invalidSearchResults,
  duplicateIds,
  cardIntegrityIssues,
  removed,
  added,
  uncertain,
  metadataCorrections,
  qualifyingRecipes: current
};

const dataDir = path.join(root, "data");
fs.writeFileSync(path.join(dataDir, "gluten-free-audit.json"), `${JSON.stringify(report, null, 2)}\n`);
const md = [
  "# Gluten-Free Recipe Audit",
  "",
  `Generated: ${report.generatedAt}`,
  "",
  `- Production recipes reviewed: ${report.reviewed}`,
  `- Previous broad-filter count: ${report.previousCount}`,
  `- Current ingredient-reviewed count: ${report.currentCount}`,
  `- Removed: ${report.removedCount}`,
  `- Added: ${report.addedCount}`,
  `- Needs packaged-ingredient or substitution verification: ${report.uncertainCount}`,
  `- Structured dietary entries corrected by ingredient validation: ${report.metadataCorrectionsCount}`,
  `- Invalid gluten-free search results: ${report.invalidSearchResults.length}`,
  `- Duplicate canonical IDs: ${report.duplicateIds.length}`,
  `- Card title/image/link integrity issues: ${report.cardIntegrityIssues.length}`,
  "",
  "## Removed from Gluten-Free",
  "",
  ...(removed.length ? removed.map((row) => `- ${row.id}: ${row.title} — ${[...row.blockers, ...row.uncertainties].join("; ")}`) : ["- None"]),
  "",
  "## Added to Gluten-Free",
  "",
  ...(added.length ? added.map((row) => `- ${row.id}: ${row.title} — ${row.verification}`) : ["- None"]),
  "",
  "## Needs Manual Verification",
  "",
  ...(uncertain.length ? uncertain.map((row) => `- ${row.id}: ${row.title} — ${row.uncertainties.join("; ")}`) : ["- None"])
].join("\n");
fs.writeFileSync(path.join(dataDir, "gluten-free-audit.md"), `${md}\n`);

console.log(`Gluten-free audit: ${report.reviewed} reviewed, ${report.removedCount} removed, ${report.addedCount} added, ${report.uncertainCount} uncertain, ${report.currentCount} qualifying.`);
console.log(`Search issues: ${report.invalidSearchResults.length}; duplicate IDs: ${report.duplicateIds.length}; card integrity issues: ${report.cardIntegrityIssues.length}.`);
if (report.invalidSearchResults.length || report.duplicateIds.length || report.cardIntegrityIssues.length) process.exitCode = 1;
