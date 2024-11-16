import React from 'react';
import { Home,AirVent, Lightbulb,Refrigerator,Fan, Thermometer,Eraser, Droplets, Wind ,Microwave, WashingMachine, } from 'lucide-react';

const categories = [
  { id: 'Washing', name: 'Laundry', icon: WashingMachine },
  { id: 'Refrigerator', name: 'Refrigerator', icon: Refrigerator },
  { id: 'AC', name: 'AC', icon: AirVent },
  { id: 'WaterHeater', name: 'Heater', icon: Droplets  },
  { id: 'Microwave', name: 'Microwave', icon: Microwave },
  { id: 'Dishwasher', name: 'Dishwasher', icon: Eraser },
  { id: 'Fan', name: 'Fan', icon: Fan },
  { id: 'Vacuum', name: 'Vacuum', icon: Wind },
  { id: 'Light', name: 'Light', icon: Lightbulb }

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