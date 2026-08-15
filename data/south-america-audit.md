# South America World Map Audit — August 2026

## Baseline

The pre-audit canonical library contained 7 South American recipes. Only Brazil, Peru, Colombia, and Argentina were selectable World Map destinations.

| Country | Before | After |
| --- | ---: | ---: |
| Brazil | 1 | 13 |
| Argentina | 2 | 6 |
| Peru | 1 | 8 |
| Colombia | 1 | 8 |
| Venezuela | 1 | 6 |
| Chile | 1 | 5 |
| Ecuador | 0 | 5 |
| Bolivia | 0 | 4 |
| Uruguay | 0 | 4 |
| Paraguay | 0 | 4 |
| Guyana | 0 | 4 |
| Suriname | 0 | 4 |
| **Total** | **7** | **71** |

## Findings and corrections

- The 7 existing recipes had broad `global` or `mexican` cuisine values and no structured South America country/continent metadata. Their records now carry explicit country, cuisine, continent, region, meal type, aliases, and cookbook-section fields.
- Chile keyword matching previously risked treating any recipe tagged with chile peppers as Chilean. South America World Map filtering now requires an exact structured country match.
- No duplicate canonical IDs, titles, ingredient lists, or instruction lists were found in the audited South America collection.
- Brazil, Peru, Colombia, and Argentina were the only pre-audit map destinations. All 12 sovereign South American countries represented by this experience now have real coordinates and country-boundary IDs.

## Added coverage

- **Brazil (12):** Pão de Queijo, Moqueca Baiana, Coxinha de Frango, Brazilian Pastel, Churrasco-Style Picanha, Farofa de Cebola, Acarajé, Vatapá, Brigadeiro, Beijinho de Coco, Quindim, Molho à Campanha.
- **Argentina (4):** Milanesa, Locro, Provoleta, Alfajores.
- **Peru (7):** Ceviche, Lomo Saltado, Ají de Gallina, Causa Limeña, Anticuchos, Papa a la Huancaína, Suspiro a la Limeña.
- **Colombia (7):** Bandeja Paisa, Ajiaco, Sancocho, Beef and Potato Empanadas, Patacones, Arroz con Coco, Buñuelos.
- **Venezuela (5):** Pabellón Criollo, Cachapas, Tequeños, Hallacas, Asado Negro.
- **Chile (4):** Empanadas de Pino, Chicken Cazuela, Completo, Sopaipillas.
- **Ecuador (5):** Encebollado, Llapingachos, Hornado, Locro de Papa, Ecuadorian Shrimp Ceviche.
- **Bolivia (4):** Salteñas, Silpancho, Sopa de Maní, Pique Macho.
- **Uruguay (4):** Chivito, Parrillada, Tortas Fritas, Chajá.
- **Paraguay (4):** Sopa Paraguaya, Chipa, Mbejú, Vori Vori.
- **Guyana (4):** Pepperpot, Cook-Up Rice, Metemgee, Chicken Curry with Roti.
- **Suriname (4):** Pom, Chicken Roti, Saoto Soup, Moksi Alesi.

All 64 additions include quantities, at least five instructions, preparation and cooking times, servings, category, meal type, dietary metadata where supportable, aliases/search terms, explicit country metadata, and a unique dish-specific visual asset.

## Verification

- Automated cookbook/navigation/search suite: passed.
- Content quality audit: 790 recipes audited; 0 duplicate IDs, titles, ingredient lists, or instruction lists; 0 cuisine collection issues; 0 cookbook classification issues; 0 missing image files.
- Desktop local browser (1440×1000): South America overview displayed 12 country links and 71 recipes with no horizontal overflow.
- Mobile local browser (390×844): South America overview and Brazil's 13-card collection rendered with no horizontal overflow.
- Recipe route/back behavior: Brazilian Feijoada opened its canonical recipe and browser Back returned to the Brazil collection.
- Android WebView compatibility was checked through the same hash-route/static-asset code path and a phone-size Chromium viewport. A physical Android device was not available in this environment.
