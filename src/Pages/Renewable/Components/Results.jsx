import React from 'react';
import { Sun, Wind } from 'lucide-react';

function Results() {
  return (
    <section className="RE-results-section visible">
      <div className="RE-potential-overview">
        <h2>Your Renewable Energy Potential</h2>

        <div className="RE-potential-cards" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          {/* Solar Potential Card */}
          <div 
            className="RE-potential-card" 
            style={{
              textAlign: 'center',
              padding: '20px',
              minHeight: '200px', // Ensure space for future text
              width: '300px'      // Control card width
            }}
          >
            <Sun className="RE-card-icon" size={48} />
            <h3>Solar Energy Potential</h3>
            {/* Empty space for future text */}
          </div>

          {/* Wind Potential Card */}
          <div 
            className="RE-potential-card" 
            style={{
              textAlign: 'center',
              padding: '20px',
              minHeight: '200px', // Ensure space for future text
              width: '300px'      // Control card width
            }}
          >
            <Wind className="RE-card-icon" size={48} />
            <h3>Wind Energy Potential</h3>
            {/* Empty space for future text */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;
