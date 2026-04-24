const { GoogleGenAI, Type } = require('@google/genai');
const dotenv = require('dotenv');
dotenv.config();

async function test() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const responseSchema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        question: { type: Type.STRING },
        options: { type: Type.ARRAY, items: { type: Type.STRING } },
        correctOption: { type: Type.NUMBER }
      },
      required: ["question", "options", "correctOption"]
    }
  };
  const prompt = `Generate 7 challenging multiple-choice quiz questions about "Jethalal Gada". For each question, provide 4 options and the index of the correct one (0-3). Output ONLY JSON matching the schema.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema
    }
  });

  console.log(response.text);
}

test();
