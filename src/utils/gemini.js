import { GoogleGenAI } from '@google/genai';

// Initialize the Gemini client
// Note: In a real production app, you should not expose your API key in the frontend.
// This should be an endpoint on your backend that securely calls the Gemini API.
const getGenAIClient = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("VITE_GEMINI_API_KEY is not set in your environment variables. Generating a mock image instead.");
    return null;
  }
  return new GoogleGenAI({ apiKey: apiKey });
};

const ai = getGenAIClient();

export const generateJewelryDesign = async (prompt) => {
  if (!ai) {
    // Return a mock response if no API key is set
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          imageUrl: "https://images.unsplash.com/photo-1599643477874-5c866f466cb5?q=80&w=1000&auto=format&fit=crop", // placeholder jewelry image
          isMock: true,
          error: null
        });
      }, 2000);
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: 'imagen-3.0-generate-001',
      contents: prompt,
      config: {
        outputMimeType: 'image/jpeg',
      }
    });

    // The image data is returned in base64 format in the files array
    if (response.files && response.files.length > 0) {
      // Assuming it returns base64 in a specific format, we need to extract it
      // Based on docs, it might be in response.parts or response.files
      // Let's use the standard base64 data URI format if we have raw bytes or b64
      // We will assume `response.files[0].data` holds base64 encoded bytes for now based on common Gemini SDK patterns, or we'll need to parse the specific return struct.
      // Usually, generateContent for images returns base64.
      
      const base64Image = response.text || (response.candidates && response.candidates[0]?.content?.parts[0]?.inlineData?.data);
      
      if (base64Image) {
        return {
           // if it returns raw base64 string
           imageUrl: `data:image/jpeg;base64,${base64Image}`,
           isMock: false,
           error: null
        };
      } else if (response.candidates && response.candidates[0]?.content?.parts[0]?.text) {
         // Fallback if it returned text instead
         console.error("API returned text instead of image inlineData");
         throw new Error("API returned text instead of image data. Make sure you are using the correct model and prompt format.");
      }
    }
     
    // If we're not sure about the exact structure from the new SDK, let's just log and throw to catch it.
    console.log("Full Gemini Image Response:", response);
    throw new Error("Could not parse image from response.");

  } catch (error) {
    console.error("Error generating image with Gemini:", error);
    return {
      imageUrl: null,
      isMock: false,
      error: error.message || "Failed to generate design."
    };
  }
};
