import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI("AIzaSyD3yRCQ5k5WqF70tMkTIfiBpY-LM0VHFow");

export async function getEnergyRecommendations(energyUsed: number, threshold: number, appliance: string) {
  const efficiency = ((energyUsed - threshold) / threshold) * 100;
  const status = efficiency > 0 ? 'above' : 'below';
  
  const prompt = `Given that a ${appliance} is using ${energyUsed} W-h of energy, which is ${efficiency.toFixed(1)}% ${status} the average threshold of ${threshold} W-h:
  1. Provide 3 specific, brief, one-line, actionable recommendations to optimize energy usage
  2. Focus on practical tips for this specific appliance
  3. Include potential cost savings where applicable
  4. Don't Bold the Text
  Format as a bullet list without any additional text.`;
  
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text().split('\n').filter(line => line.trim());
  } catch (error) {
    console.error('Error getting recommendations:', error);
    return [
      `• Consider upgrading to an energy-efficient ${appliance} to reduce power consumption`,
      '• Schedule regular maintenance to ensure optimal performance',
      '• Use the appliance during off-peak hours to reduce electricity costs'
    ];
  }
}