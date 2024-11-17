import React from 'react';
import { X } from 'lucide-react';

function ComparisonTable({ materials, onRemoveMaterial }) {
  if (materials.length === 0) {
    return (
      <div className="mc-empty-state">
        <p>Select materials to compare them side by side</p>
      </div>
    );
  }

  const allProperties = new Set();
  materials.forEach(material => {
    Object.keys(material).forEach(key => {
      if (key !== 'id' && key !== 'name' && key!== 'info') {
        allProperties.add(key);
      }
    });
  });

  return (
    <div className="mc-table-container">
      <table className="mc-comparison-table">
        <thead>
          <tr>
            <th>Property</th>
            {materials.map(material => (
              <th key={material.id}>
                {material.name}
                <button
                  className="mc-remove-btn"
                  onClick={() => onRemoveMaterial(material.id)}
                >
                  <X size={16} />
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from(allProperties).map(property => (
            <tr key={property}>
              <td className="mc-property">{property}</td>
              {materials.map(material => (
                <td key={material.id}>{material[property] || '-'}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonTable;