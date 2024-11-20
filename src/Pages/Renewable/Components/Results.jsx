import React, { useEffect, useRef } from 'react';
import { Sun, Wind } from 'lucide-react';

function Results({ energyData, showResults }) {
  const resultsRef = useRef(null);

  const { solar, wind } = energyData || {
    solar: { potential: 'unknown', averageDailyHours: 0, annualGeneration: 'N/A', recommendation: 'Enter a location to see solar potential' },
    wind: { potential: 'unknown', averageSpeed: 'N/A', annualGeneration: 'N/A', recommendation: 'Enter a location to see wind potential' }
  };

  const getPotentialColor = (potential) => {
    switch (potential?.toLowerCase()) {
      case 'high':
        return 'text-green-600';
      case 'medium':
        return 'text-yellow-600';
      case 'low':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <section ref={resultsRef} className={`RE-results-section ${showResults ? 'visible' : ''}`}>
      <div className="RE-potential-overview">
        <h2>Your Renewable Energy Potential</h2>

        <div className="RE-potential-cards" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          {/* Solar Potential Card */}
          <div 
            className="RE-potential-card" 
            style={{
              textAlign: 'center',
              padding: '20px',
              minHeight: '200px',
              width: '300px'
            }}
          >
            <Sun className="RE-card-icon" size={48} />
            <h3>Solar Energy Potential</h3>
            <div className="mt-4">
              <p className={`text-lg font-bold ${getPotentialColor(solar.potential)}`}>
                {solar.potential?.toUpperCase() || 'Unknown'} Potential
              </p>
              <p className="mt-2">Daily Sunlight: {solar.averageDailyHours} hours</p>
              <p className="mt-2">Annual Generation: {solar.annualGeneration}</p>
              <p className="mt-4 text-sm text-gray-600">{solar.recommendation}</p>
            </div>
          </div>

          {/* Wind Potential Card */}
          <div 
            className="RE-potential-card" 
            style={{
              textAlign: 'center',
              padding: '20px',
              minHeight: '200px',
              width: '300px'
            }}
          >
            <Wind className="RE-card-icon" size={48} />
            <h3>Wind Energy Potential</h3>
            <div className="mt-4">
              <p className={`text-lg font-bold ${getPotentialColor(wind.potential)}`}>
                {wind.potential?.toUpperCase() || 'Unknown'} Potential
              </p>
              <p className="mt-2">Average Wind Speed: {wind.averageSpeed}</p>
              <p className="mt-2">Annual Generation: {wind.annualGeneration}</p>
              <p className="mt-4 text-sm text-gray-600">{wind.recommendation}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;