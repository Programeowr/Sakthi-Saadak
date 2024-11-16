import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI("AIzaSyD3yRCQ5k5WqF70tMkTIfiBpY-LM0VHFow");

export async function getRecommendations(emissions : number) {
  const prompt = `Given monthly CO2 emissions of ${emissions} kg due to Energy Usage, provide 3 specific, actionable recommendations to reduce carbon footprint. Format as a bullet list. Don't bold the text and don't hyphenate.`;
  
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = result.response;
    const recommendations = response.text().split('\n').filter(line => line.trim());
    return recommendations;
  } catch (error) {
    console.error('Error getting recommendations:', error);
    return [
      'Switch to Renewable Energy Sources to reduce energy consumption',
      'Consider using public transportation or carpooling',
      'Reduce, reuse, and recycle materials whenever possible'
    ];
  }
}