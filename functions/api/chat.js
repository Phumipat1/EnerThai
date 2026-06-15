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

        // Format history for Gemini API (roles must be either 'user' or 'model')
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

        // Set up the System Instruction to train the bot
        const systemInstruction = {
            parts: [{
                text: `You are EnerBot, the premium sports nutrition AI assistant for EnerThai. 
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

FUELING & PACING SCIENCE (HELPFUL CALCULATIONS):
If the user asks for a fueling plan, running advice, or asks you to recommend a plan, ask them for:
- Distance they are running (in km).
- Target running pace (in min/km).
- Body weight (in kg, optional, to calculate sweat/fluids).
- Experience level (Beginner, Recreational, Advanced/Elite).
- Race temperature (Cool, Moderate, Hot).

Formulas to guide your advice:
- Duration (Hours) = (Distance * Pace) / 60.
- Carb Rate per Hour: 
  - Duration < 1.0 hour: 30g/hour
  - 1.0 to 2.0 hours: 60g/hour
  - 2.0 to 3.0 hours: 80g/hour
  - > 3.0 hours: 90g/hour
  - Experience Adjustments: Beginner subtracts 10g/hr (min 30g); Advanced/Elite adds 10g/hr (max 100g).
- Total Carbs = Carb Rate * Duration.
- Sunrise gel: 1 recommended if distance >= 10K or duration > 45 mins.
- Sunset gel: 1 recommended if distance >= 10K or duration > 60 mins.
- Strike gels: Spaced every 30 to 45 mins. Number of Strike gels = Math.round(Total Carbs / 30). Lock spacing between 30 and 45 mins. Ignore any Strike gel that would be taken after the finish time (e.g. at/after Duration - 5 mins).
- Fluid requirements: base 500ml/hr. Add 200ml/hr if hot, subtract 100ml/hr if cool. If body weight > 80kg add 100ml/hr, if < 60kg subtract 50ml/hr.

CALORIE & FAT MYTH BUSTER:
- A 10K run burns roughly 700-750 calories. A full 4-gel bundle is only ~488 calories, meaning they are still in a calorie deficit and WILL NOT get fat.
- Proper fueling prevents blood sugar crashes and ghrelin spikes, which stops post-run binge eating (the real cause of weight gain).
- Muscle recovery (with Sunset's 9g protein) builds lean muscle, boosting BMR (metabolic rate) to burn more fat at rest.

TONE & BEHAVIOR:
- Be highly encouraging, active, and athletic.
- Keep responses concise (under 150 words) unless you are delivering a structured custom fueling plan.
- Use markdown formatting, bullet points, and clean spacing.
- Recommend users visit the custom Fueling Calculator page (calculator.html) if they want a visual printable timeline.
- Never mention internal coding details, JSON, or APIs.`
            }]
        };

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents,
                    systemInstruction,
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 1000
                    }
                })
            }
        );

        const data = await response.json();
        if (data.error) {
            return new Response(
                JSON.stringify({ error: data.error.message }),
                { 
                    status: 500, 
                    headers: { "Content-Type": "application/json" } 
                }
            );
        }

        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't formulate a response. Please try again.";
        
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
