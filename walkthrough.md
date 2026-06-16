# Walkthrough - Ener Thai Nutrition E-Commerce Website

A complete, premium, responsive e-commerce web platform for **Ener Thai Nutrition**, a premium Thai natural sports nutrition company creating energy gels (SUNRISE, STRIKE, and SUNSET) for endurance runners.

The website has been built using 100% vanilla **HTML5, CSS3, and JavaScript**, completely free of external dependencies. This makes it light, secure, and ready to deploy instantly onto **GitHub Pages**.

---

## Page Inventory & Features

All 8 requested pages are located in the project root:

1. **Home Page ([index.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/index.html))**
   - Premium atmospheric hero section showcasing Ener Thai’s natural identity.
   - Interactive, tab-based **PREPARE → PERFORM → RECOVER** switcher displaying Sunrise, Strike, and Sunset timing, flavors, and buy buttons.
   - Featured products row, benefit points (stomach safety, natural absorption), customer testimonials, and FAQ preview accordions.
   - Newsletter signup.
2. **Products Catalog ([products.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/products.html))**
   - Clean, modern grid displaying all 3 gels.
   - Features individual quantity selectors and "Add to Cart" hooks.
   - Features inline-accordion card expansions for complete FDA-style nutrition labels and detailed ingredient lists.
3. **Dynamic Product Detail Page ([product.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/product.html))**
   - Dynamically renders product assets by reading the URL query parameter `?id=sunrise`, `?id=strike`, or `?id=sunset`.
   - Populates descriptions, specific ingredient lists, benefits lists, and custom-styled FDA Nutrition Facts tables.
   - Includes cross-sell panels showcasing the other products in the three-step fueling loop.
   - **SEO Enhancement**: Dynamically generates and injects JSON-LD Product Schema markup (names, details, prices, THB currency, and stock availability) into the document `<head>` to support search engines indexing.
4. **Fueling Calculator ([calculator.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/calculator.html))**
   - Form sidebar with quick distance presets (5K to 100K Ultra) and pacing presets (Beginner to Elite) with optional weight, temperature, and digestive tolerance toggles.
   - **Sweat Rate Tool**: Collapsible section that lets runners input training weight before/after runs, duration in minutes, and fluid intake to calculate their hourly sweat rate (ml/hour). Features a checkable toggle to automatically apply this sweat rate directly into the fluid calculation formulas instead of standard templates.
   - Triggers real-time athletic calculations, including race duration, target carbohydrates per hour, cumulative carb grams, and fluid volumes.
   - Generates an interactive vertical timeline showing precisely when to consume each product (e.g. 1 hour pre-race Sunrise, Strike intervals during running, and post-race Sunset).
   - "Add Bundle" button that calculates the precise packet count required for the race and adds the package to the cart in a single click.
5. **Our Story ([story.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/story.html))**
   - Magazine-style editorial page telling the stories of sourcing high-grade Jasmine rice from Isan, coconuts from Amphawa, forest honey from Chiang Mai, and raw ginger from Phetchabun hill cooperatives.
   - Outlines environmental commitments and fair direct-trade farmer initiatives.
6. **Science ([science.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/science.html))**
   - Explains the carbohydrate gate limits (SGLT1 and GLUT5 transporters) and the benefits of the 1:0.8 Maltodextrin-to-Fructose absorption ratio.
   - Features a styled SVG line graph visualizing muscle glycogen depletion curves.
7. **FAQ ([faq.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/faq.html))**
   - Interactive accordion groupings covering gel biology, pacing timings, hydration, storage, and logistics.
8. **Contact ([contact.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/contact.html))**
   - Contact form with an interception script that simulates form delivery and replaces the form with a success checkmark and follow-up message.

---

## Phase 3: Ultimate UX Polish

We have successfully implemented all Phase 3 enhancements:

1. **Global Currency Switcher (THB ฿ / USD $)**:
   - Header button toggles currency selections dynamically.
   - Choices are persisted in `localStorage` under `enerthai_currency`.
   - Triggers a custom window event (`currencychange`) that updates in-page pricing displays on `products.html`, `product.html` (detail page), and the shopping cart drawer subtotal/total counts automatically.
2. **Dark Mode Toggle**:
   - A theme selector in the header switches between light and dark themes.
   - Persisted in `localStorage` under `enerthai_theme` and toggles the class `.dark-theme` on the body element.
   - **Scroll Styling Fix**: Sticky header class toggle (`.scrolled`) handles background color shifts natively in CSS, preventing scrolled light backgrounds on dark-mode layouts.
   - **Contrast & Button Fixes**: Primary buttons (`.btn-primary`), recommended product pills (`.rec-product-pill`), and the header cart badge (`.cart-badge`) adapt dynamically in dark mode for clear readability, avoiding white-on-white text layouts.
   - **Page-Specific Dark Overrides**: Custom overrides style diagrams, channel gates, grid lines, and magazine image sections in `science.html` and `story.html` to align with the night theme.
   - **Gastric Emptying Times Chart**: Replaced static text placeholder in `science.html` with a fully responsive Y-axis SVG bar chart comparing gastric transit speeds (45 min vs. 15 min).
3. **Dynamic Toast Notifications**:
   - Custom overlay toasts notify customers when adding items to the cart, switching currencies, or copying timelines.
   - Toasts feature interactive actions (e.g. clicking "View Cart" on an add-to-cart toast instantly slides the cart drawer open).
4. **Live Search & Phase/Dietary Filtering**:
   - Search bar in `products.html` filters gels by name, flavor, and custom keyword attributes.
   - Phase filter buttons isolate gels by Prepare (Pre), Perform (During), and Recover (Post) phases.
   - Dietary toggle checkboxes filter by Caffeinated and Vegan formulas.
5. **Timeline Copying & Print-Friendly Stylesheets**:
   - **Copy Plan**: Extracts the dynamic timeline points, formats them chronologically, and copies them to the system clipboard with toast confirmation.
   - **Print Plan**: Triggers `window.print()` to print/export the fueling schedule.
   - **Print stylesheet overrides**: A custom `@media print` block in both `css/style.css` and `css/pages.css` hides headers, footers, forms, checkouts, and **mobile navigation menus** (`.mobile-menu` / `#mobileMenu`) to deliver a clean, publication-ready timeline sheet.

---

## Technical & Sourcing Assets

- **PWA Offline Integration**:
  - [manifest.json](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/manifest.json): Declares application names, orientation, theme colors, and SVG app icon parameters.
  - [sw.js](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/sw.js): Caches all page assets locally on installation for complete offline operation.
- **Stylesheets**: 
  - [css/style.css](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/css/style.css): Holds custom CSS variables (including dark-mode variables), resets, layout grids, global header/footer, mobile menu sliders, toasts, and the cart drawer panels.
  - [css/pages.css](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/css/pages.css): Houses page-specific styling (hero alignments, custom FDA labels, timeline nodes, FAQ structures) and `@media print` rules.
- **Scripts**:
  - [js/main.js](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/js/main.js): Runs the central `localStorage` shopping cart engine, registers the Service Worker, handles theme/currency selections, generates dynamic WhatsApp & LINE checkouts, and renders dynamic toast notifications.
  - [js/calculator.js](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/js/calculator.js): Handles math calculators (finish times, sweat rate indices, target carbs/fluids), generates timelines, binds copy/print actions, and triggers bundle purchases.

---

## Verification Steps (Phase 3 Updates)

1. **Verify Global Currency Selector**:
   - Click the currency indicator button in the header (e.g. `THB`).
   - Observe that the button toggles to `USD` and a toast notification states: `Currency switched to USD`.
   - Go to [products.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/products.html) and observe that the card price tags instantly convert (e.g., Strike becomes `$2.75`, Sunrise becomes `$3.00`, and Sunset becomes `$3.25`).
   - Add Sunrise to your cart and open the drawer. Verify that the cart drawer's item pricing and subtotals display correctly in USD format (e.g. `$3.00`).
   - Switch back to `THB` and confirm that all values revert to Thai Baht values immediately.

2. **Verify Dark Mode Toggle**:
   - Click the sun/moon icon in the header actions.
   - Observe that the layout switches instantly to a dark-mode theme. Refresh the page or click a navigation link; verify that the dark-mode theme remains persistent.
   - Click the icon again to revert back to the light-mode theme.

3. **Verify Catalog Live Search & Filters**:
   - Navigate to [products.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/products.html).
   - Enter `lime` in the search bar. Observe that only the Strike card remains visible. Clear the search.
   - Click `Prepare (Pre)` in the phase list. Observe that only the Sunrise card is shown. Click `All Phases` to restore all cards.
   - Check the `Caffeinated Only` checkbox. Observe that only Strike remains visible. Uncheck it.
   - Check `Vegan Only` checkbox. Observe that Sunrise and Strike remain visible, while Sunset (containing forest honey) is hidden.

4. **Verify Timeline Copy & Print Actions**:
   - Go to [calculator.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/calculator.html) and click `Generate Fuel Plan`.
   - Click `Copy Plan`. Verify that a toast confirmation shows: `Fueling plan copied to clipboard!`. Paste the contents in a text editor to confirm the chronological timeline list.
   - Click `Print Plan`. Verify that your browser opens the system print dialogue, showcasing a cleanly formatted, print-optimized document containing only your race fueling plan (omitting headers, footers, sidebars, and buttons).

---

## Phase 4: Brand Assets & Packaging Integration

We have successfully integrated the official brand assets:

1. **Brand Logo Integration**:
   - Replaced all inline SVG navigation logos with high-resolution brand logo images: `assets/logo-black.png` (light theme) and `assets/logo-white.png` (dark theme).
   - Designed a responsive CSS switcher for the logo: when dark mode is toggled, the logo automatically switches colors.
   - Added the white logo to the permanently dark global footer, establishing a cohesive premium identity.
2. **Product Packaging Integration (SUNRISE, STRIKE, SUNSET)**:
   - Replaced all gradient box placeholders across the site (Home page, Catalog, Details page, and Cart drawer thumbnails) with the actual sachet transparent PNG packaging images:
     - `assets/gel-sunrise.png` (Yellow brush style sachet)
     - `assets/gel-strike.png` (Red brush style sachet)
     - `assets/gel-sunset.png` (Purple brush style sachet)
   - Created interactive CSS classes (`.hero-gel-image`, `.journey-gel-image`, `.product-card-image`, and `.product-detail-image`) with subtle rotations, drop-shadows, and scaling zoom animations on hover to deliver a premium, responsive touch.
3. **PWA & Offline Integrity**:
   - Updated the service worker cache file list in `sw.js` and bumped cache version to `enerthai-v2` to cache the new logo and sachet images locally, ensuring they render perfectly when offline.

---

## Verification Steps (Phase 4 Updates)

1. **Verify Logo Rendering & Theme Toggling**:
   - Refresh the page and inspect the header. Confirm that the black Ener Thai logo is displayed cleanly.
   - Click the Dark Mode toggle button. Verify that the logo instantly transitions to the white version.
   - Inspect the global footer. Verify that the white Ener Thai logo is rendered on the dark background.
2. **Verify Sachet Packagings & Animations**:
   - On [index.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/index.html), verify that the hero visual displays the Strike sachet image, and the PREPARE/PERFORM/RECOVER journey tabs render the respective Sunrise/Strike/Sunset sachet images. Hover over them to see the smooth float/tilt hover animation.
   - Go to [products.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/products.html) and check that each product card contains its respective sachet image instead of solid color gradients.
   - Click on a product card or go to [product.html?id=sunrise](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/product.html?id=sunrise). Confirm that the left visual gallery dynamically renders the correct high-res packaging image corresponding to the product.
3. **Verify Cart Drawer Thumbnails**:
   - Add a product to your cart and open the drawer. Observe that the cart item thumbnail displays the actual sachet packaging design rather than a flat CSS color block.

---

## Phase 5: Nutrition Database & FDA Label Updates

We have successfully completed all Phase 5 updates:

1. **Centralized Product Database Updates**:
   - Swapped caffeine roles: **SUNRISE** is now caffeinated (70mg from green tea) and **STRIKE** is caffeine-free.
   - Set the price of Sunrise, Strike, and Sunset to **฿99.00** THB ($3.00 USD).
   - Updated Sunrise to 135 kcal, 31g carbs, 27g sugars, 15mg sodium, 250mg potassium, mango & banana flavor.
   - Updated Strike to 118 kcal, 30g carbs, 26g sugars, 225mg sodium, 350mg potassium, 40mg calcium, 40mg Vitamin C, coconut & guava flavor.
   - Updated Sunset recovery gel to 117 kcal, 23g carbs, 20g sugars, 9g organic pea protein isolate, 25mg sodium, 50mg potassium, 24mg Vitamin C, pineapple, mandarin orange & passion fruit flavor.
2. **Catalog Grid Updates (`products.html` & `index.html`)**:
   - Swapped filtering attributes (`data-caffeine="true"` for Sunrise, `data-caffeine="false"` for Strike) so the live filters remain accurate.
   - Marked Sunset as vegan-friendly (`data-vegan="true"`) since it uses tropical fruits instead of forest honey.
   - Updated search keywords (`data-keywords`) for all three products.
   - Updated all expandable card panels for Nutrition Facts and Ingredients to show exact new specs.
   - Updated home page tabs, featured product cards, testimonials, and FAQs.
3. **FDA-Style Nutrition Fact Labels (`product.html`)**:
   - Formatted the detailed dynamic label to match the English version of the standard FDA-style output.
   - Added Saturated Fat, Trans Fat, Cholesterol, Dietary Fiber, Added Sugars, Calcium, and Vitamin C rows.
   - Updated the JavaScript loader script to dynamically calculate and display % Daily Value (% DV) based on standard daily value benchmarks:
     - Sodium: 2300mg
     - Carbohydrates: 275g
     - Dietary Fiber: 28g
     - Protein: 50g
     - Potassium: 4700mg
     - Calcium: 1300mg
     - Vitamin C: 90mg
4. **Fueling Calculator Updates (`js/calculator.js`)**:
   - Updated the timeline step details:
     - Sunrise node displays `31g carbs, 70mg caffeine`.
     - Sunset recovery node displays `23g carbs, 9g pea protein`.
     - Strike interval nodes display `caffeine-free STRIKE gel` and correct cumulative carbs.
   - Verified that recommended bundle calculator and checkout add-to-cart operations work accurately with the updated sachet counts and specifications.

---

## Verification Steps (Phase 5 Updates)

1. **Verify Live Search & Caffeine/Vegan Filters**:
   - Go to [products.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/products.html).
   - Check `Caffeinated Only` filter. Only Sunrise should be visible.
   - Check `Vegan Only` filter. Sunrise and Strike should be visible, and Sunset (which contains honey) should be hidden.
   - Search for `guava`. Only Strike should be visible.
2. **Verify Expanded Nutrition Accordions**:
   - On the products catalog, expand the Nutrition Facts and Ingredients accordions for each gel and verify the values.
3. **Verify Detailed FDA Nutrition Panel**:
   - Click on the product cards to go to `product.html` (e.g. `product.html?id=sunrise`, `?id=strike`, `?id=sunset`).
   - Check the FDA-styled nutrition facts panel. All fields (including Saturated Fat, Cholesterol, Added Sugars, Calcium, and Vitamin C) should display with correct calculated % Daily Value (DV).
4. **Verify Fueling Timeline Outputs**:
   - Generate a fueling schedule on [calculator.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/calculator.html).
   - Verify that the timeline prints `caffeinated SUNRISE gel (31g carbs, 70mg caffeine)` for pre-race, `caffeine-free STRIKE gel` during the race, and `SUNSET recovery gel (23g carbs, 9g pea protein)` post-race.

---

## Phase 6: AI Chatbot Integration

We have successfully integrated the real-time AI Chatbot ("EnerBot"):

1. **Secure Cloudflare Pages Backend Function**:
   - Created [/functions/api/chat.js](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/functions/api/chat.js) as a serverless backend proxy.
   - It securely accesses the `GEMINI_API_KEY` from the environment and makes HTTP requests to Gemini 1.5 Flash. The API key is kept 100% hidden on the server, avoiding any exposure in public browser code.
   - Embeds a comprehensive knowledge base as system instructions: products details, flat 99 THB ($3.00 USD) pricing, clean-ingredient profiles, and custom pacing math models.
2. **Interactive UI Widget & Styles**:
   - Appended chatbot container styles to the end of [/css/style.css](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/css/style.css).
   - Features a floating sunset-gradient circular toggle button with hover scaling and toggle rotation effects.
   - Includes a premium chat window with glassmorphism blending, clean text inputs, quick-reply chips, and a smooth slide-and-scale entry animation.
   - Fully optimized for dark theme compatibility, mobile responsiveness, and hidden during print tasks.
3. **Dynamic Frontend Client**:
   - Implemented [/js/chatbot.js](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/js/chatbot.js) which dynamically builds the chatbot DOM structure, handles message session persistence, displays scrolling typing indicators, and renders markdown formats (bolding, paragraphs, bullet/numbered lists) into clean HTML bubbles.
4. **Site-Wide Tag Inclusion**:
   - Integrated the defer-script script tag into the head of all 8 main HTML pages.

---

## Verification Steps (Phase 6 Updates)

1. **Verify Visual Presence**:
   - Load any page (e.g. `index.html`, `calculator.html`). Confirm that a round orange sunset-gradient chat toggle floats in the bottom-right corner.
   - Confirm that the toast notifications container is adjusted to sit above the chat toggle (`bottom: 96px`) when triggered, preventing overlap.
2. **Verify Toggle & Close Actions**:
   - Click the chat toggle. Confirm the chat window slides up smoothly and the input field auto-focuses.
   - Click the toggle again (which shows an 'X') or click the close button. Confirm the window slides away.
3. **Verify Conversation Flow & Markdown Rendering**:
   - Open the chat and ask a question, e.g. *"What is in the Sunrise gel?"*
   - Verify the typing indicator (three pulsing dots) is displayed while waiting.
   - Once the response arrives, confirm it details Mango & Banana, 31g carbs, 70mg caffeine, and 250mg potassium, formatted in clean bold lines and lists.
4. **Verify Personalized Pacing Calculator advice**:
   - Ask: *"Can you recommend a plan for my 10K run?"*
   - The bot should ask you details like pace, weight, experience level, etc.
   - Answer: *"My pace is 7:30 min/km and weight is 70 kg, recreational level."*
   - Verify that the bot calculates the finish time (75 minutes), carbs per hour (60g), and details the exact 4-gel pacing timeline (1 Sunrise 60m before, 2 Strike during at 30m and 60m, and 1 Sunset recovery gel) with explanations of why it works and why they won't get fat.
5. **Verify Print Media Layout**:
   - Open `calculator.html`, open the chatbot, and press `Ctrl+P`.
   - Verify that the print preview excludes the chatbot button and chat window, keeping the printable plan layout 100% clean.

---

## Phase 7: Premium Agricultural Origins Images

We have successfully integrated the actual local farm images into the "Premium Agricultural Origins" section of the Our Story page:

1. **Image Assets Sourced**:
   - `assets/story-banana.jpg` (Phop Phra Golden Banana, Tak)
   - `assets/story-mango.png` (Bang Khla Nam Dok Mai Mango, Chachoengsao)
   - `assets/story-pineapple.jpg` (Prachuap Pattavia Pineapple, Prachuap Khiri Khan)
2. **HTML Update**:
   - Replaced CSS gradient placeholders inside Section 4 of `story.html` with responsive `<img>` elements pointing to the respective farm assets.
   - Added class `.origin-image` to the image elements.
   - Wrapped the location text in a span with class `.origin-label` to serve as a floating text badge.
3. **CSS Enhancements**:
   - Configured `.origin-img-placeholder` with `position: relative; overflow: hidden;` to contain the absolute-positioned images.
   - Designed `.origin-image` with `width: 100%; height: 100%; object-fit: cover;` to ensure perfect aspect ratio preservation.
   - Added a smooth micro-animation: on hover, the image scales up gently (`transform: scale(1.05)`) with a transition time of `0.5s`.
   - Styled the `.origin-label` using a modern glassmorphic theme (background opacity, blur filter, subtle borders) to float on top of the image in the bottom-left corner.
   - Provided dark theme overrides for the glassmorphic label (`body.dark-theme .origin-label`) to preserve contrast and aesthetics in dark mode.

---

## Verification Steps (Phase 7 Updates)

1. **Verify Image Loading**:
   - Open [story.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/story.html) in a browser.
   - Scroll down to Section 4: "Premium Agricultural Origins".
   - Confirm that the Phop Phra Banana, Bang Khla Mango, and Prachuap Pineapple cards show the actual photographic assets instead of the grey-orange gradients.
2. **Verify Hover Animation**:
   - Hover the cursor over any of the three cards.
   - Confirm that the image smoothly scales up slightly, giving a premium interactive feel.
3. **Verify Glassmorphic Label**:
   - Confirm that the location label (e.g. `🍌 Phop Phra, Tak`) floats clearly on the bottom-left corner of the image.
   - Toggle Dark Mode in the header. Confirm that the label's background updates to a darker translucent style, remaining highly legible and premium.
