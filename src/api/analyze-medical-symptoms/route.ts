import { groq } from "@ai-sdk/groq"
import { generateText } from "ai"

// Allow longer processing time for medical analysis
export const maxDuration = 30

// Medical system prompt with careful guidelines
const MEDICAL_SYSTEM_PROMPT = `You are an AI medical assistant designed to analyze symptoms and provide preliminary information. 
You are NOT a doctor and should always clarify this. Your role is to:

1. Analyze the symptoms described by the user
2. Suggest possible conditions that might match these symptoms (always include a disclaimer)
3. Assess the severity level as "Mild", "Moderate", or "Severe"
4. Recommend whether the user should seek medical attention and with what urgency
5. Provide general self-care advice that might help alleviate symptoms
6. NEVER prescribe medications or provide definitive diagnoses
7. Always encourage users to consult with a healthcare professional for proper diagnosis and treatment

Return your response in the following JSON format ONLY (no other text):
{
  "condition": "Possible condition name",
  "explanation": "Brief explanation of the condition and how it relates to symptoms",
  "severity": "Mild/Moderate/Severe",
  "recommendations": ["Recommendation 1", "Recommendation 2", "etc"],
  "selfCare": true/false,
  "seeDoctor": true/false,
  "emoji": "An appropriate emoji for the condition"
}

The selfCare field should be true if self-care measures might help, and the seeDoctor field should be true if medical consultation is advised.
`

export async function POST(req: Request) {
  try {
    // Extract the symptoms from the request body
    const { symptoms, selectedSymptoms } = await req.json()

    // Combine text input and selected symptom tags
    const combinedSymptoms = [
      symptoms ? `User described symptoms: ${symptoms}` : "",
      selectedSymptoms?.length > 0 ? `Selected symptom tags: ${selectedSymptoms.join(", ")}` : "",
    ]
      .filter(Boolean)
      .join("\n")

    if (!combinedSymptoms) {
      return new Response(JSON.stringify({ error: "No symptoms provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Generate the analysis using Groq's LLama model
    const { text } = await generateText({
      model: groq("llama-3.1-70b-instant"), // Using Llama 3.1 70B for medical knowledge
      system: MEDICAL_SYSTEM_PROMPT,
      prompt: `Please analyze these symptoms: ${combinedSymptoms}`,
      temperature: 0.2, // Lower temperature for more consistent medical advice
      maxTokens: 1000,
    })

    // Parse the JSON response
    try {
      const parsedResponse = JSON.parse(text)
      return new Response(JSON.stringify(parsedResponse), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      })
    } catch (parseError) {
      console.error("Failed to parse LLM response:", parseError)
      return new Response(
        JSON.stringify({
          error: "Failed to parse analysis results",
          rawResponse: text,
        }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      )
    }
  } catch (error) {
    console.error("Error analyzing symptoms:", error)
    return new Response(JSON.stringify({ error: "Failed to analyze symptoms" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
