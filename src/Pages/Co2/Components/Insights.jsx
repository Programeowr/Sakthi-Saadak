
function Insights(){


    return(
        <div className="insights-container">
          <h2>Your Carbon Insights</h2>
          <div className="insights-grid">
            <div className="insight-card">
              <div className="insight-icon">🌱</div>
              <h3>Current Status</h3>
              <p className="insight-value">5.5 tons</p>
              <p className="insight-desc">Your monthly CO2 emissions</p>
            </div>
          </div>

          <div className="recommendations">
            <h3>Recommendations</h3>
            <ul>
              <li>Switch to LED bulbs to reduce energy consumption</li>
            </ul>
          </div>
        </div>
    );
}

export default Insights