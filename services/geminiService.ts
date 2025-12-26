
import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";

// Initialize Gemini client using the environment variable directly to ensure it uses the latest key
export const getGeminiClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

// Generates text response using the latest Gemini 3 Flash model
export const generateText = async (prompt: string, systemInstruction?: string) => {
  const ai = getGeminiClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      systemInstruction,
      temperature: 0.7,
    },
  });
  return response.text;
};

// Specialized code generation using Gemini 3 Pro with thinking capabilities
export const generateCode = async (prompt: string) => {
  const ai = getGeminiClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: prompt,
    config: {
      systemInstruction: "You are an expert software engineer. Provide high-quality, documented code. Use markdown for the code blocks.",
      temperature: 0.3,
      thinkingConfig: { thinkingBudget: 4000 }
    },
  });
  return response.text;
};

// Image synthesis using the Gemini 2.5 Flash Image model
export const generateImage = async (prompt: string) => {
  const ai = getGeminiClient();
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [{ text: prompt }]
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1"
      }
    }
  });

  // Safely find the image part in the response candidates
  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
};

// Multimodal analysis for vision tasks using Gemini 3 Flash
export const analyzeVision = async (prompt: string, imageBase64: string, mimeType: string) => {
  const ai = getGeminiClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: {
      parts: [
        { inlineData: { data: imageBase64, mimeType } },
        { text: prompt }
      ]
    },
  });
  return response.text;
};
