
import { GoogleGenAI } from "@google/genai";
import { SummaryLength, SummaryTone } from "../types";

export const generateSummary = async (text: string, length: SummaryLength, tone: SummaryTone): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const lengthMap = {
    [SummaryLength.SHORT]: 'a very concise list of 3-5 key points',
    [SummaryLength.MEDIUM]: 'a balanced briefing with 5-8 informative bullet points',
    [SummaryLength.LONG]: 'a comprehensive detailed briefing with 8-12 bullet points'
  };

  const toneMap = {
    [SummaryTone.PROFESSIONAL]: 'professional, informative, and neutral',
    [SummaryTone.CASUAL]: 'conversational and friendly',
    [SummaryTone.ENTHUSIASTIC]: 'energetic and highlight the most exciting aspects'
  };

  const prompt = `Please provide a high-quality summary of the following news article. 
    Format: Return ONLY a clean list of bullet points using markdown (e.g., - Point).
    Length: ${lengthMap[length]}
    Tone: ${toneMap[tone]}
    
    Article content:
    ${text}`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [{ parts: [{ text: prompt }] }],
  });

  return response.text || "Summary generation failed.";
};
