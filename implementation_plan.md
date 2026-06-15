# Implementation Plan - AI Chatbot Integration

Implement a secure, real-time AI chatbot ("EnerBot") on all pages of the website. The bot will run serverless on Cloudflare Pages Functions to keep the API key 100% hidden and secure.

---

## User Review Required

> [!IMPORTANT]
> - **API Key Setup:** You will need to obtain a Gemini API key (or OpenAI key) and add it to your Cloudflare dashboard environment variables under the name `GEMINI_API_KEY` for the serverless function to work in production.
> - **Hosting Deployment:** To run the backend portion of this chatbot, the site must be hosted on Cloudflare Pages (which is free and connects directly to your GitHub repository).

---

## Open Questions

> [!NOTE]
> - **Which LLM API would you like to use?**
>   - **Option 1 (Recommended):** Gemini 1.5 Flash (extremely fast, low latency, and has a generous free tier of 15 requests/minute).
>   - **Option 2:** OpenAI GPT-4o-mini (highly capable, requires a paid API account with credits).
> - **Default Quick-Replies:** What pre-canned buttons should appear when opening the chat? (e.g., "Recommend a bundle", "Are these gels vegan?", "Why 99 THB?", "Will I get fat?").

---

## Proposed Changes

### Backend Function (Cloudflare Workers Proxy)
#### [NEW] [chat.js](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/functions/api/chat.js)
- Create a Cloudflare Pages Function endpoint at `/functions/api/chat.js` that intercepts requests sent to `/api/chat`.
- Securely fetch the API key from the environment variables (`context.env.GEMINI_API_KEY`).
- Provide system instructions detailing:
  - **Brand Voice:** Professional, energetic, scientifically grounded, friendly.
  - **Product Lineup:** Sunrise (Pre-race, 31g carbs, 70mg caffeine, Mango & Banana), Strike (During, 30g carbs, 225mg sodium, 350mg potassium, 40mg Vitamin C, Coconut & Guava), Sunset (Post-race, 23g carbs, 9g pea protein, vegan, Pineapple, Mandarin & Passion Fruit).
  - **Pricing:** Flat rate of 99.00 THB / $3.00 USD for all individual sachets.
  - **Pacing Science:** 60-minute rule (runs over 60 mins need fueling), calorie balance (running 10K burns ~700 kcal, consuming 4 gels is only ~488 kcal, so there is no risk of getting fat; in fact, proper fueling prevents post-run binge eating).
- Send the chat history and the user prompt to Gemini, and stream or send the text back in a JSON response.

---

### Global Chat UI Widget
#### [MODIFY] [style.css](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/css/style.css)
- Add styles for the floating chatbot:
  - A subtle, glowing circular action button (fixed at bottom-right with an animated chat bubble icon).
  - A premium chat window with dark-glassmorphism styling, clean message bubbles, an input field, quick-reply chips, and smooth slide-in/fade-out animations.
  - Dark-mode support to ensure readability matching the rest of the theme.

#### [NEW] [chatbot.js](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/js/chatbot.js)
- Implement frontend chatbot logic:
  - Create the chat DOM structure dynamically or load it so it appears on all pages.
  - Maintain conversation history in session storage.
  - Render message bubbles with auto-scroll to the bottom.
  - Manage loading states (typing indicators).
  - Connect quick-reply buttons directly into the input handler.
  - Make POST requests to `/api/chat` with user queries.

---

### Page Integrations
#### [MODIFY] [index.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/index.html)
#### [MODIFY] [products.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/products.html)
#### [MODIFY] [product.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/product.html)
#### [MODIFY] [calculator.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/calculator.html)
#### [MODIFY] [science.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/science.html)
#### [MODIFY] [story.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/story.html)
#### [MODIFY] [faq.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/faq.html)
#### [MODIFY] [contact.html](file:///C:/Users/Kaopan/.gemini/antigravity/brain/f054b131-c7b5-44a1-91e6-977638858d86/contact.html)
- Include `<script src="js/chatbot.js" defer></script>` in the header/footer of all templates.

---

## Verification Plan

### Automated Tests
- Setup a local test server using Wrangler (`npx wrangler pages dev .`) to simulate the Cloudflare Workers / Functions environment locally.
- Test the `/api/chat` route with mock prompts to verify it receives requests, accesses environment variables, and correctly queries the Gemini API.

### Manual Verification
- Verify that the chat bubble floats cleanly above page layouts on desktop, tablet, and mobile views.
- Test toggling the chat window open and closed, and verifying that the animations are fluid.
- Send messages and test the typing indicator.
- Verify that clicking quick replies automatically sends the prompt and starts the response.
- Verify that the API key is completely invisible in developer tools (Inspect Source / Network requests).
