const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "data", "south-america-recipes.js"), "utf8")
  + "\n;globalThis.__specs = SOUTH_AMERICA_RECIPE_SPECS; globalThis.__existing = SOUTH_AMERICA_EXISTING_RECIPE_METADATA;";
const context = {};
vm.createContext(context);
vm.runInContext(source, context);

const countryPalettes = {
  brazil: ["#087d15", "#f8c630", "#144a85"], argentina: ["#6cb4df", "#f7f2df", "#e5b643"],
  peru: ["#c81d35", "#fff5e6", "#73243b"], colombia: ["#f4ce20", "#1956a5", "#c72f34"],
  venezuela: ["#f3c623", "#1f4e9c", "#b72d38"], chile: ["#d52b1e", "#ffffff", "#0039a6"],
  ecuador: ["#f7d117", "#224f9d", "#d52b35"], bolivia: ["#d52b35", "#f4cf24", "#16844a"],
  uruguay: ["#5aa9de", "#f8f5e9", "#d7a829"], paraguay: ["#c92e3d", "#f8f5e9", "#244b9b"],
  guyana: ["#2b8c4b", "#f4c83f", "#c83238"], suriname: ["#2c8b49", "#f5efe2", "#c92b39"]
};

function escapeXml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" }[char]));
}

function dishMotif(id, primary, secondary) {
  if (/soup|stew|locro|ajiaco|sancocho|encebollado|pepperpot|metemgee|saoto|vori/.test(id)) {
    return `<path d="M250 245h260c-7 108-54 165-130 165s-123-57-130-165Z" fill="#fff8e6"/><ellipse cx="380" cy="245" rx="130" ry="35" fill="${secondary}"/><path d="M300 222c20-30 45-30 65 0m35 0c20-34 48-34 68 0" fill="none" stroke="#fff8e6" stroke-width="11" stroke-linecap="round"/>`;
  }
  if (/bread|pao|chipa|mbeju|sopa-paraguaya|arepa|cachapa|sopaipilla|torta-frita|bunuel/.test(id)) {
    return `<ellipse cx="380" cy="315" rx="165" ry="82" fill="#fff8e6"/><g fill="${secondary}"><ellipse cx="320" cy="300" rx="62" ry="42"/><ellipse cx="405" cy="328" rx="68" ry="45"/><ellipse cx="460" cy="280" rx="55" ry="38"/></g><path d="M285 300h190" stroke="${primary}" stroke-width="8" stroke-linecap="round" opacity=".55"/>`;
  }
  if (/dessert|brigadeiro|beijinho|quindim|alfajor|suspiro|chaja/.test(id)) {
    return `<path d="M285 365h190l-24-142H309Z" fill="#fff8e6"/><path d="M309 250h142M297 310h166" stroke="${secondary}" stroke-width="20"/><circle cx="338" cy="206" r="30" fill="${secondary}"/><circle cx="420" cy="196" r="34" fill="${primary}"/>`;
  }
  if (/ceviche|moqueca|shrimp|seafood/.test(id)) {
    return `<ellipse cx="380" cy="320" rx="170" ry="88" fill="#fff8e6"/><path d="M278 318c45-70 90-70 135 0-45 65-90 65-135 0Zm135 0c36-52 72-52 108 0-36 48-72 48-108 0Z" fill="${secondary}"/><circle cx="320" cy="307" r="7" fill="${primary}"/><circle cx="450" cy="309" r="7" fill="${primary}"/>`;
  }
  return `<ellipse cx="380" cy="325" rx="175" ry="92" fill="#fff8e6"/><path d="M270 340c42-95 82-125 120-90 45-45 92-5 115 88-70 38-160 40-235 2Z" fill="${secondary}"/><g fill="${primary}"><circle cx="330" cy="302" r="17"/><circle cx="390" cy="285" r="14"/><circle cx="450" cy="315" r="19"/></g>`;
}

function renderSvg(id, title, country) {
  const [primary, cream, secondary] = countryPalettes[country] || ["#087d15", "#fff6df", "#f25f55"];
  const label = title.length > 28 ? `${title.slice(0, 27)}…` : title;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 760 510" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(title)}</title><desc id="desc">Editorial illustration created specifically for ${escapeXml(title)} from ${escapeXml(country)}.</desc>
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${primary}"/><stop offset="1" stop-color="${secondary}"/></linearGradient><filter id="shadow"><feDropShadow dx="0" dy="12" stdDeviation="12" flood-opacity=".28"/></filter></defs>
  <rect width="760" height="510" fill="url(#bg)"/><circle cx="94" cy="88" r="120" fill="${cream}" opacity=".16"/><circle cx="690" cy="430" r="155" fill="${cream}" opacity=".12"/>
  <g filter="url(#shadow)">${dishMotif(id, primary, secondary)}</g>
  <rect x="42" y="34" width="210" height="38" rx="19" fill="${cream}" opacity=".94"/><text x="147" y="60" text-anchor="middle" font-family="Arial, sans-serif" font-size="17" font-weight="700" fill="${primary}">${escapeXml(country.toUpperCase())}</text>
  <rect x="36" y="425" width="688" height="58" rx="20" fill="#142c3a" opacity=".9"/><text x="380" y="463" text-anchor="middle" font-family="Georgia, serif" font-size="30" font-weight="700" fill="#fffaf0">${escapeXml(label)}</text>
  </svg>`;
}

const outputDir = path.join(root, "images", "recipes", "south-america-2026");
fs.mkdirSync(outputDir, { recursive: true });
const entries = context.__specs.map(([id, title, country]) => ({ id, title, country }));
for (const [id, metadata] of Object.entries(context.__existing)) {
  entries.push({ id, title: metadata.title || id.replaceAll("-", " "), country: metadata.country });
}
for (const entry of entries) {
  fs.writeFileSync(path.join(outputDir, `${entry.id}.svg`), renderSvg(entry.id, entry.title, entry.country), "utf8");
}
console.log(`Generated ${entries.length} dish-specific South America illustrations.`);
