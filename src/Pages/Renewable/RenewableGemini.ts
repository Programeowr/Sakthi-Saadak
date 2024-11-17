import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI("AIzaSyD3yRCQ5k5WqF70tMkTIfiBpY-LM0VHFow");

export async function getEnergyPotentialData(location : string) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `Analyze the renewable energy potential for ${location}. Return ONLY a JSON object (no markdown, no code blocks) with this exact structure:
    {
      "solar": {
        "potential": "high/medium/low",
        "averageDailyHours": number,
        "annualGeneration": "estimated kWh per year for a typical home installation",
        "recommendation": "brief recommendation"
      },
      "wind": {
        "potential": "high/medium/low",
        "averageSpeed": "average wind speed in m/s",
        "annualGeneration": "estimated kWh per year for a typical home installation",
        "recommendation": "brief recommendation"
      }
    }`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    
    // Clean the response by removing markdown code blocks and any extra whitespace
    text = text.replace(/```json\n?|\n?```/g, '').trim();
    
    // Additional cleaning to ensure we only have the JSON object
    text = text.replace(/^(?:\{|\n\{)/, '{').replace(/}(?:\n)?$/, '}');
    
    try {
      return JSON.parse(text);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      console.log('Raw text received:', text);
      throw new Error('Invalid JSON response from AI');
    }
  } catch (error) {
    console.error('Error getting energy potential data:', error);
    return {
      solar: {
        potential: "unknown",
        averageDailyHours: 0,
        annualGeneration: "Data unavailable",
        recommendation: "Error fetching solar data"
      },
      wind: {
        potential: "unknown",
        averageSpeed: "Data unavailable",
        annualGeneration: "Data unavailable",
        recommendation: "Error fetching wind data"
      }
    };
  }
}