import React from 'react';
import { Home, Lightbulb, Thermometer, Droplets, Wind } from 'lucide-react';

const categories = [
  { id: 'Washing Machine', name: 'Laundry', icon: Thermometer },
  { id: 'Refregerator', name: 'Refregerator', icon: Lightbulb },
  { id: 'Air Conditioner', name: 'AC', icon: Wind },
  { id: 'Water Heater', name: 'Water Heater', icon: Droplets  },
  { id: 'Microwave', name: 'Microwave', icon: Home },
  { id: 'Dishwasher', name: 'DIshwasher', icon: Home },
  { id: 'Fan', name: 'Fan', icon: Home },
  { id: 'Heater', name: 'Heater', icon: Home },
  { id: 'Vacuum', name: 'Vacuum', icon: Home },
  { id: 'Light', name: 'Light', icon: Home }

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