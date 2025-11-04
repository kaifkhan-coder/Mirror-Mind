
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This will be caught by the app's error handling and displayed to the user.
  // In a real-world scenario, you might have more robust handling for missing keys.
  throw new Error("API_KEY environment variable is not set. Please configure it to use the application.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

/**
 * Generates an artistic image based on a user's thought.
 * @param prompt The user's thought or prompt.
 * @returns A promise that resolves to a base64 data URL of the generated image.
 */
export const generateArtFromThought = async (prompt: string): Promise<string> => {
  try {
    const artisticPrompt = `An abstract, artistic, and visually stunning masterpiece reflecting the thought: "${prompt}". Emphasize ethereal qualities, vibrant and harmonious colors, and dynamic, fluid shapes. The style should be imaginative and dream-like.`;
    
    const response = await ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: artisticPrompt,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/jpeg',
          aspectRatio: '1:1',
        },
    });

    if (response.generatedImages && response.generatedImages.length > 0) {
      const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
      return `data:image/jpeg;base64,${base64ImageBytes}`;
    } else {
      throw new Error("No image was generated. The model might not have been able to interpret the prompt.");
    }
  } catch (error) {
    console.error("Error generating art with Gemini API:", error);
    // Provide a more user-friendly error message
    if (error instanceof Error && error.message.includes('API_KEY')) {
        return Promise.reject(new Error("The API key is invalid or has expired. Please check your configuration."));
    }
    throw new Error("Failed to create art. The service may be temporarily unavailable.");
  }
};
