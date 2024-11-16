import React from 'react';

function ComparisonChart({ materials }) {
  if (materials.length === 0) {
    return (
      <div className="mc-empty-state">
        <p>Select materials to view comparison charts</p>
      </div>
    );
  }

  const numericProperties = Object.keys(materials[0]).filter(key => {
    return (
      key !== 'id' &&
      key !== 'name' &&
      typeof materials[0][key] === 'number'
    );
  });

  const maxValues = {};
  numericProperties.forEach(prop => {
    maxValues[prop] = Math.max(...materials.map(m => m[prop]));
  });

  return (
    <div className="mc-chart-container">
      {numericProperties.map(property => (
        <div key={property} className="mc-chart">
          <h3>{property}</h3>
          <div className="mc-bar-chart">
            {materials.map(material => {
              const percentage = (material[property] / maxValues[property]) * 100;
              return (
                <div key={material.id} className="mc-bar-group">
                  <div className="mc-bar-label">{material.name}</div>
                  <div className="mc-bar-wrapper">
                    <div
                      className="mc-bar"
                      style={{ width: `${percentage}%` }}
                    >
                      <span className="mc-bar-value">{material[property]}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ComparisonChart;