import { useState, useEffect } from 'react';
import { getRecommendations } from '../JSB/CarbonGemini.ts';

function Insights() {
    const [recommendations, setRecommendations] = useState([]);

        useEffect(() => {
            async function fetchRecommendations() {
                const calculationElement = document.getElementById('calculation');
                const emissionValue = calculationElement?.textContent 
                    ? parseFloat(calculationElement.textContent) 
                    : 0;
    
                const aiRecommendations = await getRecommendations(emissionValue);
                setRecommendations(aiRecommendations);
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
                <ul>
                    {recommendations.map((recommendation, index) => (
                        <li key={index}>{recommendation}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Insights;
