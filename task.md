# Task List: Ener Thai E-Commerce Website

- `[x]` Create directory structure and asset placeholders
- `[x]` Create core CSS stylesheets (`css/style.css` & `css/pages.css`)
- `[x]` Implement global JavaScript (`js/main.js`) for cart state & UI interactions
- `[x]` Build Home Page (`index.html`)
- `[x]` Build Products Catalog Page (`products.html`)
- `[x]` Build Dynamic Product Detail Page (`product.html`)
- `[x]` Build Fueling Calculator (`calculator.html` & `js/calculator.js`)
- `[x]` Build Our Story Page (`story.html`)
- `[x]` Build Science Page (`science.html`)
- `[x]` Build FAQ Page (`faq.html`)
- `[x]` Build Contact Page (`contact.html`)
- `[x]` Verify functionality, responsiveness, and performance
- `[x]` Generate walkthrough report

## Phase 2: Premium Enhancements
- `[x]` Create PWA files (`manifest.json` & `sw.js`) and register Service Worker in `js/main.js`
- `[x]` Add WhatsApp and LINE redirection buttons to Checkout Modal in `js/main.js` and `css/style.css`
- `[x]` Build Sweat Rate Calculator interface and equation mapping in `calculator.html` and `js/calculator.js`
- `[x]` Inject SEO Product Schema (JSON-LD) dynamically in `product.html`
- `[x]` Update walkthrough report & verify features

## Phase 3: Ultimate UX Polish
- `[x]` Implement global Currency Switcher (THB / USD) in `js/main.js` and navigation headers
- `[x]` Add "Copy Plan" clipboard generator and `@media print` style blocks for PDF prints in `calculator.html` & `js/calculator.js`
- `[x]` Implement Dark Mode toggle button & CSS custom variables in `css/style.css` & `js/main.js`
- `[x]` Add custom dynamic Toast Notification alerts to e-commerce events in `js/main.js` & `css/style.css`
- `[x]` Build search & phase filtering widgets in `products.html`
- `[x]` Revise walkthrough report & execute final checks

## Phase 4: Brand Assets & Packaging Integration
- `[x]` Create `assets` folder and copy/rename PNG assets
- `[x]` Update CSS styles for header logos and new packaging images in `css/style.css` and `css/pages.css`
- `[x]` Update header and footer logo markup in all 8 HTML files
- `[x]` Replace sachet placeholders on index.html, products.html, and product.html
- `[x]` Update dynamic product details sachet image swaps in `product.html` JavaScript
- `[x]` Update dynamic cart item sachet thumbnail rendering in `js/main.js`
- `[x]` Verify asset rendering, theme compatibility, and print layout, and update walkthrough.md

## Phase 5: Nutrition Database & FDA Label Updates
- `[x]` Update central product database in `js/main.js` with new specifications
- `[x]` Update filter tags and expander panels on `products.html`
- `[x]` Update FDA-style static panel structure and loader logic in `product.html`
- `[x]` Update calculator timeline strings in `js/calculator.js`
- `[x]` Verify new nutrition filters, labels, and math, and update walkthrough.md

## Phase 6: AI Chatbot Integration
- `[x]` Create Cloudflare Pages Function `/functions/api/chat.js` for Gemini API proxying
- `[x]` Add global floating chat widget styles to `css/style.css`
- `[x]` Build dynamic chatbot script `js/chatbot.js` containing chat UI rendering, state, and user interactions
- `[x]` Integrate `js/chatbot.js` script tag across all 8 HTML page files
- `[x]` Verify local execution and update walkthrough.md

## Phase 9: Batch Traceability Scanner (Option A)
- `[x]` Create trace.html with camera viewport and manual input fallbacks
- `[x]` Create js/trace.js containing scanning logic and batch database mapping
- `[x]` Add custom scanner styling to css/pages.css
- `[x]` Integrate trace.html and js/trace.js in sw.js and bump cache version to enerthai-v4
- `[x]` Add navigation links in header & footer of all HTML pages
- `[x]` Verify scanning functions, manual input fallbacks, PWA caching, and update walkthrough.md
