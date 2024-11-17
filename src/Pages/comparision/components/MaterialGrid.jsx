import React from 'react';
import { Plus, Check } from 'lucide-react';

const materialData = {
  Washing: [
    { id: 'topLoad', name: 'Top Load', 'Energy Efficiency (KWh/Load)': 0.25, 'Lifespan': `12 years`, 'Carbon Foorprint (Kg-CO2/year)': 150, 'Recyclability' : `Moderate`, 'info': 'A washing machine with a horizontal drum that loads and unloads clothes through a door on the front.' },
    { id: 'frontLoad', name: 'Front Load', 'Energy Efficiency (KWh/Load)': 0.15, 'Lifespan': `15 years`, 'Carbon Foorprint (Kg-CO2/year)': 100, 'Recyclability' : `High` },
    { id: 'he-topLoad', name: 'High-Efficiency Top Load', 'Energy Efficiency (KWh/Load)': 0.2, 'Lifespan': `12 years`, 'Carbon Foorprint (Kg-CO2/year)': 125, 'Recyclability' : `High` },
    { id: 'compact', name: 'Compact', 'Energy Efficiency (KWh/Load)': 0.2, 'Lifespan': `10 years`, 'Carbon Foorprint (Kg-CO2/year)': 250, 'Recyclability' : `Moderate` },
  ],
  Refrigerator: [
    { id: 'topFreezer', name: 'Top Freezer', 'Energy Efficiency (KWh/year)': 300, 'Lifespan': `12 years`, 'Carbon Footprint (Kg-CO2/year)': 150, 'Recyclability' : `Moderate` },
    { id: 'bottomFreezer', name: 'Bottom Freezer', 'Energy Efficiency (KWh/year)': 250, 'Lifespan': `15 years`, 'Carbon Footprint (Kg-CO2/year)': 130, 'Recyclability' : `High` },
    { id: 'sideBySide', name: 'Side-by-Side', 'Energy Efficiency (KWh/year)': 400, 'Lifespan': `15 years`, 'Carbon Footprint (Kg-CO2/year)': 180, 'Recyclability' : `Moderate` },
    { id: 'frenchDoor', name: 'French Door', 'Energy Efficiency (KWh/year)': 350, 'Lifespan': `18 years`, 'Carbon Footprint (Kg-CO2/year)': 160, 'Recyclability' : `High` },
  ],
  AC: [
    { id: 'window', name: 'Window AC', 'Energy Efficiency (SEER)': 12, 'Lifespan': `10 years`, 'Carbon Footprint (Kg-CO2/year)': 150, 'Recyclability' : `Moderate` },
    { id: 'split', name: 'Split AC', 'Energy Efficiency (SEER)': 15, 'Lifespan': `15 years`, 'Carbon Footprint (Kg-CO2/year)': 120, 'Recyclability' : `High` },
    { id: 'portable', name: 'Portable AC', 'Energy Efficiency (SEER)': 13, 'Lifespan': `10 years`, 'Carbon Footprint (Kg-CO2/year)': 140, 'Recyclability' : `Moderate` },
    { id: 'central', name: 'Central AC', 'Energy Efficiency (SEER)': 18, 'Lifespan': `20 years`, 'Carbon Footprint (Kg-CO2/year)': 100, 'Recyclability' : `High` },
  ],
  WaterHeater: [
    { id: 'tankless', name: 'Tankless', 'Energy Efficiency (EF)': 0.95, 'Lifespan': `20 years`, 'Carbon Footprint (Kg-CO2/year)': 50, 'Recyclability' : `High` },
    { id: 'storage', name: 'Storage (Tank)', 'Energy Efficiency (EF)': 0.75, 'Lifespan': `12 years`, 'Carbon Footprint (Kg-CO2/year)': 120, 'Recyclability' : `Moderate` },
    { id: 'heatPump', name: 'Heat Pump', 'Energy Efficiency (EF)': 2.0, 'Lifespan': `15 years`, 'Carbon Footprint (Kg-CO2/year)': 30, 'Recyclability' : `High` },
    { id: 'solar', name: 'Solar', 'Energy Efficiency (EF)': 2.5, 'Lifespan': `25 years`, 'Carbon Footprint (Kg-CO2/year)': 10, 'Recyclability' : `Very High` },
  ],
  Microwave: [
    { id: 'countertop', name: 'Countertop', 'Energy Efficiency (KWh)': 0.9, 'Lifespan': `10 years`, 'Carbon Footprint (Kg-CO2/year)': 50, 'Recyclability' : `Moderate` },
    { id: 'overRange', name: 'Over-the-Range', 'Energy Efficiency (KWh)': 1.0, 'Lifespan': `12 years`, 'Carbon Footprint (Kg-CO2/year)': 60, 'Recyclability' : `Moderate` },
    { id: 'drawer', name: 'Drawer', 'Energy Efficiency (KWh)': 0.7, 'Lifespan': `10 years`, 'Carbon Footprint (Kg-CO2/year)': 45, 'Recyclability' : `High` },
    { id: 'builtIn', name: 'Built-In', 'Energy Efficiency (KWh)': 0.8, 'Lifespan': `12 years`, 'Carbon Footprint (Kg-CO2/year)': 55, 'Recyclability' : `High` },
  ],
  Dishwasher: [
    { id: 'builtIn', name: 'Built-In', 'Energy Efficiency (KWh/load)': 0.9, 'Lifespan': `12 years`, 'Carbon Footprint (Kg-CO2/year)': 70, 'Recyclability' : `High` },
    { id: 'portable', name: 'Portable', 'Energy Efficiency (KWh/load)': 1.0, 'Lifespan': `10 years`, 'Carbon Footprint (Kg-CO2/year)': 80, 'Recyclability' : `Moderate` },
    { id: 'countertop', name: 'Countertop', 'Energy Efficiency (KWh/load)': 0.8, 'Lifespan': `7 years`, 'Carbon Footprint (Kg-CO2/year)': 60, 'Recyclability' : `Moderate` },
    { id: 'drawer', name: 'Drawer', 'Energy Efficiency (KWh/load)': 0.7, 'Lifespan': `10 years`, 'Carbon Footprint (Kg-CO2/year)': 50, 'Recyclability' : `High` },
  ],
  Fan: [
    { id: 'ceiling', name: 'Ceiling Fan', 'Energy Efficiency (watts)': 60, 'Lifespan': `12 years`, 'Carbon Footprint (Kg-CO2/year)': 20, 'Recyclability' : `High` },
    { id: 'tower', name: 'Tower Fan', 'Energy Efficiency (watts)': 80, 'Lifespan': `10 years`, 'Carbon Footprint (Kg-CO2/year)': 30, 'Recyclability' : `Moderate` },
    { id: 'pedestal', name: 'Pedestal Fan', 'Energy Efficiency (watts)': 75, 'Lifespan': `10 years`, 'Carbon Footprint (Kg-CO2/year)': 25, 'Recyclability' : `Moderate` },
    { id: 'box', name: 'Box Fan', 'Energy Efficiency (watts)': 100, 'Lifespan': `8 years`, 'Carbon Footprint (Kg-CO2/year)': 40, 'Recyclability' : `Low` },
  ],
  Heater: [
    { id: 'electric', name: 'Electric Heater', 'Energy Efficiency (COP)': 1.0, 'Lifespan': `10 years`, 'Carbon Footprint (Kg-CO2/year)': 200, 'Recyclability' : `Low` },
    { id: 'gas', name: 'Gas Heater', 'Energy Efficiency (COP)': 1.5, 'Lifespan': `12 years`, 'Carbon Footprint (Kg-CO2/year)': 150, 'Recyclability' : `High` },
    { id: 'oilRadiator', name: 'Oil-Filled Radiator', 'Energy Efficiency (COP)': 1.2, 'Lifespan': `15 years`, 'Carbon Footprint (Kg-CO2/year)': 100, 'Recyclability' : `Low` },
    { id: 'ceramic', name: 'Ceramic Heater', 'Energy Efficiency (COP)': 1.4, 'Lifespan': `10 years`, 'Carbon Footprint (Kg-CO2/year)': 130, 'Recyclability' : `Low` },
  ],
  Vacuum: [
    { id: 'upright', name: 'Upright Vacuum', 'Energy Efficiency (watts)': 1000, 'Lifespan': `8 years`, 'Carbon Footprint (Kg-CO2/year)': 100, 'Recyclability' : `Moderate` },
    { id: 'canister', name: 'Canister Vacuum', 'Energy Efficiency (watts)': 900, 'Lifespan': `7 years`, 'Carbon Footprint (Kg-CO2/year)': 60, 'Recyclability' : `Moderate` },
    { id: 'stick', name: 'Stick Vacuum', 'Energy Efficiency (watts)': 300, 'Lifespan': `3 years`, 'Carbon Footprint (Kg-CO2/year)': 30, 'Recyclability' : `High` },
    { id: 'robot', name: 'Robot Vacuum', 'Energy Efficiency (watts)': 250, 'Lifespan': `3 years`, 'Carbon Footprint (Kg-CO2/year)': 20, 'Recyclability' : `High` },
  ],
  Light: [
    { id: 'led', name: 'LED Tube Lights', 'Energy Efficiency (lumens/watt)': 100, 'Lifespan (hours)': 35000, 'Heat Emission': `15%`, 'Recyclability': `High` },
    { id: 'solarLed', name: 'Solar Powered LED Tube Lights', 'Energy Efficiency (lumens/watt)': 100, 'Lifespan (hours)': 175000, 'Heat Emission': `0%`, 'Recyclability': `High` },
    { id: 'cfl', name: 'CFLs', 'Energy Efficiency (lumens/watt)': 60, 'Lifespan (hours)': 9000, 'Heat Emission': `35%`, 'Recyclability': `Moderate` },
    { id: 'fluorescent', name: 'Fluorescent Tube Lights', 'Energy Efficiency (lumens/watt)': 70, 'Lifespan (hours)': 10000, 'Heat Emission': `25%`, 'Recyclability': `Moderate` },
  ],
};

const materialInfo = {
    Washing: [{ id: 'topLoad', name: 'Top Load', info: 'A washing machine with a horizontal drum that loads and unloads clothes through a door on the front.' }],
}

function MaterialGrid({ category, onSelectMaterial, selectedMaterials }) {
  const materials = materialData[category] || [];

  const isSelected = (materialId) => {
    return selectedMaterials.some(m => m.id === materialId);
  };

  return (
    <div className="mc-grid">
      {materials.map(material => (
        <div key={material.id} className="mc-grid-item">
          <div className="mc-material-card">
            <h3>{material.name}</h3>
            <div className="mc-material-specs">
            {Object.entries(material).map(([key, value]) => {
                if (key === 'info') {
                  return (
                    <div key={key} className="mc-spec">
                      <span className="mc-spec-value">{value}</span>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <button
              className={`mc-select-btn ${isSelected(material.id) ? 'selected' : ''}`}
              onClick={() => onSelectMaterial(material)}
              disabled={isSelected(material.id)}
            >
              {isSelected(material.id) ? (
                <><Check /> Selected</>
              ) : (
                <><Plus /> Compare</>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MaterialGrid;