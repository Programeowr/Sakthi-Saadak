import { useState, useEffect } from 'react';
import { getRecommendations } from '../JSB/CarbonGemini.ts';
import { Loader2 } from 'lucide-react';

function Insights() {
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchRecommendations() {
            setLoading(true);
            const calculationElement = document.getElementById('calculation');
            const emissionValue = calculationElement?.textContent 
                ? parseFloat(calculationElement.textContent) 
                : 0;

            const aiRecommendations = await getRecommendations(emissionValue);
            setRecommendations(aiRecommendations);
            setLoading(false);
        }

        fetchRecommendations();
    }, []);

    return (
        <div className="insights-container" id="calculation-container">
            <h2>Your Carbon Insights</h2>
            <div className="insights-grid">
                <div className="insight-card">
                    <div className="insight-icon">🌱</div>
                    <h3>Current Status</h3>
                    <p className="insight-value" id="calculation"></p>
                    <p className="insight-desc">Your monthly CO2 emissions</p>
                </div>
            </div>

            <div className="recommendations">
                <h3>Recommendations</h3>
                {loading ? (
                    <div className="flex items-center justify-center py-8">
                        <Loader2 className="w-8 h-8 animate-spin text-green-600" />
                        <span className="ml-2 text-gray-600">Analyzing your carbon footprint...</span>
                    </div>
                ) : (
                    <ul className="space-y-2">
                        {recommendations.map((recommendation, index) => (
                            <li key={index} className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                {recommendation}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Insights;