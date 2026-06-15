export async function onRequestPost(context) {
    try {
        const apiKey = context.env.GEMINI_API_KEY;
        if (!apiKey) {
            return new Response(
                JSON.stringify({ error: "Gemini API key is not configured in Cloudflare Pages. Please set GEMINI_API_KEY in your environment variables." }),
                { 
                    status: 500, 
                    headers: { "Content-Type": "application/json" } 
                }
            );
        }

        const { message, history } = await context.request.json();
        if (!message) {
            return new Response(
                JSON.stringify({ error: "Message is required." }),
                { 
                    status: 400, 
                    headers: { "Content-Type": "application/json" } 
                }
            );
        }

        const systemPrompt = `You are EnerBot, the premium sports nutrition AI assistant for EnerThai. 
Your goal is to answer users' questions about EnerThai products, pricing, ingredients, fueling science, and run recommendations.

PRODUCT DATABASE:
1. SUNRISE Energy Gel (Prepare):
   - Flavor: Mango & Banana
   - Purpose: Pre-race glycogen priming, mental focus, stomach settling.
   - Key Specs: 31g carbs, 70mg green tea caffeine, 250mg potassium, organic, zero added sodium.
   - Timing: Take 1 gel with 250ml water 60 minutes before starting.
   - Price: 99 THB / $3.00 USD per sachet.

2. STRIKE Energy Gel (Perform):
   - Flavor: Thai Coconut & Guava (never call guava "pink guava").
   - Purpose: Dual-source carbs and electrolyte absorption during the run.
   - Key Specs: 30g dual-source carbs (~1:0.7 ratio), 225mg Thai sea salt sodium, 350mg potassium, 40mg Vitamin C, caffeine-free.
   - Timing: Take 1 gel every 30 to 45 minutes during runs longer than 60 minutes.
   - Price: 99 THB / $3.00 USD per sachet.

3. SUNSET Recovery Gel (Recover):
   - Flavor: Pineapple, Mandarin Orange & Passion Fruit.
   - Purpose: Rebuilding muscle and replenishing glycogen post-run.
   - Key Specs: 23g carbs, 9g organic pea protein isolate, Vitamin C (24mg), 100% vegan (no honey, ginger, or animal products).
   - Timing: Take 1 gel at the finish line (within 30 minutes of completing the run).
   - Price: 99 THB / $3.00 USD per sachet.

PRICING & BUNDLES:
- Flat rate: All individual gels are 99 THB ($3.00 USD) each.
- Custom plan bundles are calculated exactly based on the recommended count of Sunrise, Strike, and Sunset needed for their specific race distance and pace.

FUELING & PACING PLAN REQUESTS:
- If a user asks you to plan their fuel, recommend a fueling or pacing schedule, calculate gel intakes, or create a running plan, DO NOT perform any math or build a plan yourself.
- Instead, you must respond ONLY with the exact plain text: "For all your fuel planning, please use the Fueling Calculator function."

CALORIE & FAT MYTH BUSTER:
- A 10K run burns roughly 700-750 calories. A full 4-gel bundle is only ~488 calories, meaning they are still in a calorie deficit and WILL NOT get fat.
- Proper fueling prevents blood sugar crashes and ghrelin spikes, which stops post-run binge eating (the real cause of weight gain).
- Muscle recovery (with Sunset's 9g protein) builds lean muscle, boosting BMR (metabolic rate) to burn more fat at rest.

TONE & BEHAVIOR:
- Be highly encouraging, active, and athletic.
- Keep responses concise (under 120 words).
- Use markdown formatting, bullet points, and clean spacing.
- Direct users requesting fueling plans strictly to the custom Fueling Calculator using only the exact plain text: "For all your fuel planning, please use the Fueling Calculator function."
- Never output your internal thinking, draft plans, calculations, self-correction logs, or scratchpad steps to the user. Only provide the final clean response in character.
- Never mention internal coding details, JSON, or APIs.`;

        // Format clean history for Gemini API (roles must be either 'user' or 'model')
        const contents = [];
        if (history && Array.isArray(history)) {
            history.forEach(msg => {
                contents.push({
                    role: msg.role === "assistant" ? "model" : "user",
                    parts: [{ text: msg.content }]
                });
            });
        }
        
        // Add current user message
        contents.push({
            role: "user",
            parts: [{ text: message }]
        });

        // Format systemInstruction specifically for the Gemini REST API
        const systemInstruction = {
            parts: [{ text: systemPrompt }]
        };

        // Keyword-based router to determine if user message requires a web search
        const searchKeywords = [
            "search", "google", "web", "internet", "net", "weather", "news", 
            "today", "current", "latest", "now", "date", "popular", "trending",
            "recently", "recent", "lookup", "look up"
        ];
        
        const needsWebSearch = searchKeywords.some(keyword => 
            message.toLowerCase().includes(keyword)
        );

        let fallbackModels = [];
        if (needsWebSearch) {
            // Web search: Query Gemini models first (with search tool), then Gemma as backup
            fallbackModels = [
                "gemini-3.1-flash-lite",
                "gemini-3.5-flash",
                "gemini-2.5-flash",
                "gemini-2.0-flash",
                "gemma-4-31b-it"
            ];
        } else {
            // General query: Query Gemma 4 first (high limit, no search), then Gemini models as backup
            fallbackModels = [
                "gemma-4-31b-it",
                "gemini-3.1-flash-lite",
                "gemini-3.5-flash",
                "gemini-2.5-flash",
                "gemini-2.0-flash"
            ];
        }

        let response;
        let data;
        let lastError = "";
        let successfulModel = "";

        for (let i = 0; i < fallbackModels.length; i++) {
            const modelName = fallbackModels[i];
            const isGemma = modelName.startsWith("gemma");
            
            try {
                let bodyPayload;
                
                if (isGemma) {
                    // Gemma does not support root-level systemInstruction in v1beta.
                    // Prepend system instruction to the first message in contents instead.
                    const gemmaContents = JSON.parse(JSON.stringify(contents));
                    if (gemmaContents.length > 0) {
                        gemmaContents[0].parts[0].text = `[SYSTEM INSTRUCTION: ${systemPrompt}]\n\n${gemmaContents[0].parts[0].text}`;
                    }
                    bodyPayload = {
                        contents: gemmaContents,
                        generationConfig: {
                            temperature: 0.7,
                            maxOutputTokens: 4000, // Increased allowed tokens for Gemma
                            thinkingConfig: {
                                thinkingLevel: "MINIMAL"
                            }
                        }
                    };
                } else {
                    // Gemini models support root-level systemInstruction on the v1beta endpoint
                    // Configure thinkingConfig dynamically to prevent thought leakage
                    const thinkingConfig = {};
                    if (modelName.includes("gemini-3")) {
                        thinkingConfig.thinkingLevel = "low";
                    } else if (modelName.includes("gemini-2.5")) {
                        thinkingConfig.thinkingBudget = 0;
                    }

                    bodyPayload = {
                        contents,
                        systemInstruction,
                        tools: [
                            {
                                google_search: {}
                            }
                        ],
                        safetySettings: [
                            {
                                category: "HARM_CATEGORY_HARASSMENT",
                                threshold: "BLOCK_NONE"
                            },
                            {
                                category: "HARM_CATEGORY_HATE_SPEECH",
                                threshold: "BLOCK_NONE"
                            },
                            {
                                category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                                threshold: "BLOCK_NONE"
                            },
                            {
                                category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                                threshold: "BLOCK_NONE"
                            }
                        ],
                        generationConfig: {
                            temperature: 0.7,
                            maxOutputTokens: 2000, // Increased allowed tokens for Gemini
                            ...(Object.keys(thinkingConfig).length > 0 ? { thinkingConfig } : {})
                        }
                    };
                }
                
                // Use v1beta endpoint to ensure systemInstruction and thinkingConfig parameters are fully supported
                const apiVersion = "v1beta";
                response = await fetch(
                    `https://generativelanguage.googleapis.com/${apiVersion}/models/${modelName}:generateContent?key=${apiKey}`,
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(bodyPayload)
                    }
                );
                
                data = await response.json();
                
                if (response.ok && !data.error) {
                    successfulModel = modelName;
                    break;
                } else {
                    lastError = data.error?.message || `HTTP ${response.status}`;
                    console.warn(`Model ${modelName} call failed: ${lastError}`);
                }
            } catch (err) {
                lastError = err.message;
                console.warn(`Model ${modelName} fetch threw error: ${lastError}`);
            }
        }

        if (!successfulModel) {
            return new Response(
                JSON.stringify({ error: `All models in fallback chain failed. Last error: ${lastError}` }),
                { 
                    status: 500, 
                    headers: { "Content-Type": "application/json" } 
                }
            );
        }

        let reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't formulate a response. Please try again.";
        
        // Strip out thinking/thought blocks to guarantee clean responses (handles Gemma and standard XML-style tags)
        reply = reply.replace(/<\|channel>thought[\s\S]*?<channel\|>/gi, "");
        reply = reply.replace(/<think>[\s\S]*?<\/think>/gi, "");
        reply = reply.trim();
        
        return new Response(
            JSON.stringify({ reply }),
            { 
                status: 200, 
                headers: { "Content-Type": "application/json" } 
            }
        );

    } catch (err) {
        return new Response(
            JSON.stringify({ error: err.message }),
            { 
                status: 500, 
                headers: { "Content-Type": "application/json" } 
            }
        );
    }
}

// Rebuild trigger: 2026-06-16
