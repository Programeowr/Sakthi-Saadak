import React from 'react';
import { Plus, Check } from 'lucide-react';

const materialData = {

    Washing: [
      { id: 'topLoad', name: 'Top Load', 'Energy Efficiency (KWh/Load)': 0.25, 'Lifespan': `12 years`, 'Carbon Footprint (Kg-CO2/year)': 150, 'Recyclability': `Moderate`, 'info': 'A washing machine loaded through the top, using an agitator or impeller for cleaning.' },
      { id: 'frontLoad', name: 'Front Load', 'Energy Efficiency (KWh/Load)': 0.15, 'Lifespan': `15 years`, 'Carbon Footprint (Kg-CO2/year)': 100, 'Recyclability': `High`, 'info': 'A front-loading machine that uses less water and energy for efficient cleaning.' },
      { id: 'heTopLoad', name: 'High-Efficiency Top Load', 'Energy Efficiency (KWh/Load)': 0.2, 'Lifespan': `12 years`, 'Carbon Footprint (Kg-CO2/year)': 125, 'Recyclability': `High`, 'info': 'A quieter top-load machine using advanced water-saving technology.' },
      { id: 'compact', name: 'Compact', 'Energy Efficiency (KWh/Load)': 0.2, 'Lifespan': `10 years`, 'Carbon Footprint (Kg-CO2/year)': 250, 'Recyclability': `Moderate`, 'info': 'A space-saving washing machine for small homes or apartments.' },
    ],
    Refrigerator: [
      { id: 'topFreezer', name: 'Top Freezer', 'Energy Efficiency (KWh/year)': 300, 'Lifespan': `12 years`, 'Carbon Footprint (Kg-CO2/year)': 150, 'Recyclability': `Moderate`, 'info': 'A refrigerator with the freezer positioned above the main compartment.' },
      { id: 'bottomFreezer', name: 'Bottom Freezer', 'Energy Efficiency (KWh/year)': 250, 'Lifespan': `15 years`, 'Carbon Footprint (Kg-CO2/year)': 130, 'Recyclability': `High`, 'info': 'A fridge with the freezer located below the main refrigerator.' },
      { id: 'sideBySide', name: 'Side-by-Side', 'Energy Efficiency (KWh/year)': 400, 'Lifespan': `15 years`, 'Carbon Footprint (Kg-CO2/year)': 180, 'Recyclability': `Moderate`, 'info': 'A fridge with adjacent freezer and refrigerator sections.' },
      { id: 'frenchDoor', name: 'French Door', 'Energy Efficiency (KWh/year)': 350, 'Lifespan': `18 years`, 'Carbon Footprint (Kg-CO2/year)': 160, 'Recyclability': `High`, 'info': 'A fridge with double doors and a bottom freezer drawer.' },
    ],
    AC: [
      { id: 'window', name: 'Window AC', 'Energy Efficiency (SEER)': 12, 'Lifespan': `10 years`, 'Carbon Footprint (Kg-CO2/year)': 150, 'Recyclability': `Moderate`, 'info': 'A compact air conditioner installed in a window to cool single rooms.' },
      { id: 'split', name: 'Split AC', 'Energy Efficiency (SEER)': 15, 'Lifespan': `15 years`, 'Carbon Footprint (Kg-CO2/year)': 120, 'Recyclability': `High`, 'info': 'An air conditioner with separate indoor and outdoor units for efficiency.' },
      { id: 'portable', name: 'Portable AC', 'Energy Efficiency (SEER)': 13, 'Lifespan': `10 years`, 'Carbon Footprint (Kg-CO2/year)': 140, 'Recyclability': `Moderate`, 'info': 'A movable air conditioner designed to cool single rooms easily.' },
      { id: 'central', name: 'Central AC', 'Energy Efficiency (SEER)': 18, 'Lifespan': `20 years`, 'Carbon Footprint (Kg-CO2/year)': 100, 'Recyclability': `High`, 'info': 'A centralized cooling system for entire homes or large spaces.' },
    ],
    WaterHeater: [
      { id: 'tankless', name: 'Tankless', 'Energy Efficiency (EF)': 0.95, 'Lifespan': `20 years`, 'Carbon Footprint (Kg-CO2/year)': 50, 'Recyclability': `High`, 'info': 'A water heater that provides instant hot water without a storage tank.' },
      { id: 'storage', name: 'Storage (Tank)', 'Energy Efficiency (EF)': 0.75, 'Lifespan': `12 years`, 'Carbon Footprint (Kg-CO2/year)': 120, 'Recyclability': `Moderate`, 'info': 'A traditional water heater with a tank to store hot water.' },
      { id: 'heatPump', name: 'Heat Pump', 'Energy Efficiency (EF)': 2.0, 'Lifespan': `15 years`, 'Carbon Footprint (Kg-CO2/year)': 30, 'Recyclability': `High`, 'info': 'A heater that uses air or ground heat for efficient water warming.' },
      { id: 'solar', name: 'Solar', 'Energy Efficiency (EF)': 2.5, 'Lifespan': `25 years`, 'Carbon Footprint (Kg-CO2/year)': 10, 'Recyclability': `Very High`, 'info': 'A water heater that uses solar panels to convert sunlight into heat.' },
    ],
    Microwave: [
      { id: 'countertop', name: 'Countertop', 'Energy Efficiency (KWh/year)': 150, 'Lifespan': `10 years`, 'Carbon Footprint (Kg-CO2/year)': 60, 'Recyclability': `Moderate`, 'info': 'A microwave designed for easy placement on kitchen counters.' },
      { id: 'drawer', name: 'Drawer', 'Energy Efficiency (KWh/year)': 140, 'Lifespan': `12 years`, 'Carbon Footprint (Kg-CO2/year)': 55, 'Recyclability': `Moderate`, 'info': 'A microwave that slides out like a drawer for convenient use.' },
      { id: 'builtIn', name: 'Built-in', 'Energy Efficiency (KWh/year)': 130, 'Lifespan': `15 years`, 'Carbon Footprint (Kg-CO2/year)': 50, 'Recyclability': `High`, 'info': 'A microwave integrated into kitchen cabinetry for a clean look.' },
      { id: 'overRange', name: 'Over-the-Range', 'Energy Efficiency (KWh/year)': 120, 'Lifespan': `12 years`, 'Carbon Footprint (Kg-CO2/year)': 48, 'Recyclability': `Moderate`, 'info': 'A microwave installed above the stove with built-in ventilation.' },
    ],
    Dishwasher: [
      { id: 'portable', name: 'Portable', 'Energy Efficiency (KWh/year)': 200, 'Lifespan': `10 years`, 'Carbon Footprint (Kg-CO2/year)': 80, 'Recyclability': `Moderate`, 'info': 'A compact, movable dishwasher for smaller kitchens.' },
      { id: 'drawer', name: 'Drawer', 'Energy Efficiency (KWh/year)': 180, 'Lifespan': `12 years`, 'Carbon Footprint (Kg-CO2/year)': 70, 'Recyclability': `High`, 'info': 'A dishwasher with a pull-out drawer design for smaller loads.' },
      { id: 'builtIn', name: 'Built-in', 'Energy Efficiency (KWh/year)': 150, 'Lifespan': `15 years`, 'Carbon Footprint (Kg-CO2/year)': 60, 'Recyclability': `High`, 'info': 'A dishwasher seamlessly integrated under kitchen counters.' },
    ],
  
    Fan: [
      { id: 'ceiling', name: 'Ceiling Fan', 'Energy Efficiency (W)': 75, 'Lifespan': `15 years`, 'Carbon Footprint (Kg-CO2/year)': 25, 'Recyclability': `High`, 'info': 'A fan mounted on the ceiling to circulate air and cool a room.' },
      { id: 'tower', name: 'Tower Fan', 'Energy Efficiency (W)': 50, 'Lifespan': `10 years`, 'Carbon Footprint (Kg-CO2/year)': 18, 'Recyclability': `Moderate`, 'info': 'A slim, vertical fan that oscillates to cool a room efficiently.' },
      { id: 'pedestal', name: 'Pedestal Fan', 'Energy Efficiency (W)': 60, 'Lifespan': `10 years`, 'Carbon Footprint (Kg-CO2/year)': 20, 'Recyclability': `Moderate`, 'info': 'A standing fan with adjustable height and oscillating airflow.' },
      { id: 'box', name: 'Box Fan', 'Energy Efficiency (W)': 70, 'Lifespan': `8 years`, 'Carbon Footprint (Kg-CO2/year)': 22, 'Recyclability': `Moderate`, 'info': 'A portable, square fan for efficient air movement in small spaces.' },
    ],
    Heater: [
      { id: 'electric', name: 'Electric Heater', 'Energy Efficiency (KWh/year)': 2000, 'Lifespan': `10 years`, 'Carbon Footprint (Kg-CO2/year)': 500, 'Recyclability': `Moderate`, 'info': 'A heater that uses electricity to warm small to medium spaces.' },
      { id: 'gas', name: 'Gas Heater', 'Energy Efficiency (KWh/year)': 1800, 'Lifespan': `15 years`, 'Carbon Footprint (Kg-CO2/year)': 400, 'Recyclability': `Moderate`, 'info': 'A heater powered by natural gas or propane for larger spaces.' },
      { id: 'oil', name: 'Oil-Filled Heater', 'Energy Efficiency (KWh/year)': 1500, 'Lifespan': `12 years`, 'Carbon Footprint (Kg-CO2/year)': 350, 'Recyclability': `High`, 'info': 'A portable heater that uses oil to distribute long-lasting warmth.' },
      { id: 'ceramic', name: 'Ceramic Heater', 'Energy Efficiency (KWh/year)': 1200, 'Lifespan': `8 years`, 'Carbon Footprint (Kg-CO2/year)': 300, 'Recyclability': `Moderate`, 'info': 'A compact electric heater with ceramic plates for quick heating.' },
    ],
    Vacuum: [
      { id: 'upright', name: 'Upright Vacuum', 'Energy Efficiency (W)': 1200, 'Lifespan': `8 years`, 'Carbon Footprint (Kg-CO2/year)': 100, 'Recyclability': `Moderate`, 'info': 'A vertical vacuum cleaner ideal for carpets and large areas.' },
      { id: 'canister', name: 'Canister Vacuum', 'Energy Efficiency (W)': 1100, 'Lifespan': `10 years`, 'Carbon Footprint (Kg-CO2/year)': 90, 'Recyclability': `High`, 'info': 'A vacuum with a hose and canister for cleaning multiple surfaces.' },
      { id: 'cordless', name: 'Cordless Vacuum', 'Energy Efficiency (W)': 800, 'Lifespan': `5 years`, 'Carbon Footprint (Kg-CO2/year)': 50, 'Recyclability': `Moderate`, 'info': 'A lightweight, battery-powered vacuum for quick cleaning tasks.' },
      { id: 'robot', name: 'Robot Vacuum', 'Energy Efficiency (W)': 100, 'Lifespan': `5 years`, 'Carbon Footprint (Kg-CO2/year)': 30, 'Recyclability': `Moderate`, 'info': 'An automated vacuum cleaner for hands-free floor cleaning.' },
    ],
    Light: [
      { id: 'led', name: 'LED Tube Light', 'Energy Efficiency (W)': 15, 'Lifespan': `25 years`, 'Carbon Footprint (Kg-CO2/year)': 10, 'Recyclability': `High`, 'info': 'An energy-efficient LED light for bright and long-lasting illumination.' },
      { id: 'solarLed', name: 'Solar LED Tube', 'Energy Efficiency (W)': 12, 'Lifespan': `20 years`, 'Carbon Footprint (Kg-CO2/year)': 5, 'Recyclability': `High`, 'info': 'A solar-powered LED tube light for off-grid or outdoor use.' },
      { id: 'cfl', name: 'CFL Bulb', 'Energy Efficiency (W)': 18, 'Lifespan': `10 years`, 'Carbon Footprint (Kg-CO2/year)': 15, 'Recyclability': `Moderate`, 'info': 'An energy-saving light bulb using compact fluorescent technology.' },
      { id: 'fluorescent', name: 'Fluorescent Tube', 'Energy Efficiency (W)': 20, 'Lifespan': `8 years`, 'Carbon Footprint (Kg-CO2/year)': 25, 'Recyclability': `Moderate`, 'info': 'A traditional tube light commonly used in offices and homes.' },
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