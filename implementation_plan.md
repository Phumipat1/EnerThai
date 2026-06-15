# Implementation Plan - Nutrition Facts & Product Database Update

Update the **EnerThai** product database, catalog grids, detailed pages, and fueling calculator outputs to match the newly provided nutrition and ingredient profiles.

---

## New Nutrition & Ingredient Specifications

### 1. SUNRISE (Prepare)
- **Flavor**: Mango & Banana
- **Caffeine**: 70mg (Caffeinated from green tea)
- **Energy**: 135 kcal
- **Carbohydrates**: 31g
- **Sugars**: 27g (0g added sugars)
- **Sodium**: 15mg (Natural from fruit, no added salt)
- **Potassium**: 250mg
- **Antioxidants**: Catechin from tea + Carotene from mango
- **Ingredients**: Natural Mango Puree, Natural Banana Puree, Water, Maltodextrin, Green Tea Extract (Caffeine), Citric Acid.

### 2. STRIKE (Perform)
- **Flavor**: Thai Coconut & Guava
- **Caffeine**: 0mg (Caffeine-free)
- **Energy**: 118 kcal
- **Carbohydrates**: 30g
- **Sugars**: 26g (0g added sugars)
- **Sodium**: 225mg (Thai sea salt)
- **Potassium**: 350mg
- **Calcium**: 40mg
- **Vitamin C**: 40mg (53% Thai RDI)
- **Ingredients**: Thai Coconut Water, Natural Guava Puree, Lime Juice, Sea Salt, Maltodextrin, Calcium Lactate, Ascorbic Acid (Vitamin C).

### 3. SUNSET (Recover)
- **Flavor**: Thai Forest Honey & Organic Pea Protein
- **Energy**: 117 kcal
- **Carbohydrates**: 23g
- **Sugars**: 20g (0g added sugars)
- **Protein**: 9g (from organic plant pea protein)
- **Sodium**: 25mg (no added salt)
- **Potassium**: 50mg (natural)
- **Ingredients**: Organic Plant-based Pea Protein, Thai Forest Honey, Water, Ginger Root Extract, Lemon Juice, Sea Salt.

---

## Proposed Changes

### Centralized Product Database
#### [MODIFY] [main.js](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/js/main.js)
- Update product descriptors, flavor strings, ingredients, and nutrition fields for `sunrise`, `strike`, and `sunset`.

---

### Catalog Grid Update
#### [MODIFY] [products.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/products.html)
- Swap filtering tags for Sunrise and Strike:
  - Sunrise: `data-caffeine="true"`, `data-keywords="mango banana yellow caffeine green tea prepare"`
  - Strike: `data-caffeine="false"`, `data-keywords="coconut guava lime sodium electrolytes vitamin c perform strike"`
- Update card descriptions, flavors, list items, and expanding accordion panels for **NUTRITION FACTS** and **INGREDIENTS** to reflect the new specifications.

---

### Detailed Product Layout & Dynamic Label Loader
#### [MODIFY] [product.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/product.html)
- Reformat the static `#nutritionPanel` HTML to match the English version of the standard FDA-style output (incorporating Saturated Fat, Trans Fat, Cholesterol, Dietary Fiber, Added Sugars, Calcium, and Vitamin C).
- Update the javascript loader script to dynamically populate all these fields and calculate % Daily Value (DV) percentages based on standard references (e.g. 2300mg Sodium, 275g Carbs, 28g Fiber, 50g Protein, 4700mg Potassium, 1300mg Calcium, 90mg Vitamin C).

---

### Calculator Timing & Timeline Update
#### [MODIFY] [calculator.js](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/js/calculator.js)
- Update the timeline HTML output blocks:
  - Sunrise node description: list `31g carbs` and `70mg caffeine`.
  - Sunset node description: list `23g carbs` and `9g pea protein`.
- Verify the math in the recommended bundle calculator works accurately with the updated sachet counts.

---

## Verification Plan

### Manual Verification
- Verify search & phase filtering widgets in `products.html` correctly display the new caffeine status (Sunrise shows up under "Caffeinated", Strike shows up under "Caffeine-free").
- Expand the Nutrition Facts panels on `products.html` and verify the values.
- Navigate to `product.html?id=strike`, `product.html?id=sunrise`, and `product.html?id=sunset` and check the FDA-styled nutrition facts panels for formatting accuracy and correct % DV math.
- Generate a fueling plan on `calculator.html` and verify that the generated timeline prints the updated specs.
