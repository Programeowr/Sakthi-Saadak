import React from 'react';
import { WashingMachine, AirVent ,Microwave,SatelliteDish , Refrigerator} from 'lucide-react';

const categories = [
  { id: 'Washing', name: 'Laundry', icon: WashingMachine  },          // Use Home icon
  { id: 'Refrigerator', name: 'Refrigerator', icon: Refrigerator },      // Fridge icon for Refrigerator
  { id: 'AC', name: 'AC', icon: AirVent },    // AirConditioner icon
  { id: 'WaterHeater', name: 'Heater', icon: Thermometer },      // Thermometer icon for Heater
  { id: 'Microwave', name: 'Microwave', icon: Microwave },        // Microwave icon
  { id: 'Dishwasher', name: 'Dishwasher', icon: SatelliteDish },           // Use Home icon for Dishwasher
  { id: 'Fan', name: 'Fan', icon: Fan },                          // Fan icon
  { id: 'Heater', name: 'Heater', icon: Heater },                 // Heater icon
  { id: 'Vacuum', name: 'Vacuum', icon: Vacuum },                 // Vacuum icon
  { id: 'Light', name: 'Light', icon: Lightbulb }                  // Lightbulb icon
];


function CategorySelector({ selectedCategory, onCategoryChange }) {
  return (
    <div className="mc-category-selector">
      {categories.map(category => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            className={`mc-category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(category.id)}
          >
            <Icon className="mc-category-icon" />
            <span>{category.name}</span>
          </button>
        );
      })}
    </div>
  );
}

export default CategorySelector;