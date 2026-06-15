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

        // Diagnostic Step: Query available models for this API key
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`,
            {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }
        );

        const data = await response.json();
        
        if (data.error) {
            return new Response(
                JSON.stringify({ error: `ListModels Error: ${data.error.message}` }),
                { 
                    status: 500, 
                    headers: { "Content-Type": "application/json" } 
                }
            );
        }

        // Format the models list for the user
        const modelsList = data.models 
            ? data.models.map(m => m.name.replace("models/", "")).join(", ")
            : "No models found in response.";

        return new Response(
            JSON.stringify({ reply: `Diagnostic Info: Your API key has access to the following models: **${modelsList}**` }),
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
