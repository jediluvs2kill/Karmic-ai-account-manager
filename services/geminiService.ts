import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIResponse = async (prompt: string): Promise<string> => {
  try {
    const fullPrompt = `You are "Karmic AI," an expert AI assistant for managing corporate accounts. Your role is to help users log expenses, check budgets, inquire about payroll, and manage company finances. When a user asks you to perform an action like logging an expense, respond with a confirmation that the action has been completed. For questions, provide clear and concise answers based on fictional, typical company data. Be professional and helpful. User's request: "${prompt}"`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error fetching data from Gemini API:", error);
    if (error instanceof Error) {
        return `Sorry, I encountered an error while processing your request: ${error.message}`;
    }
    return "Sorry, I encountered an unknown error while processing your request.";
  }
};