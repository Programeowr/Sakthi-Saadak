import React from 'react';
import { BookOpen, Zap, Wind, Leaf, Building, Activity } from 'lucide-react';
import './CategoryFilter.css';

const categories = [
  { id: 'all', icon: BookOpen, label: 'All' },
  { id: 'energy-saving', icon: Zap, label: 'Energy Saving' },
  { id: 'renewable', icon: Wind, label: 'Renewable Energy' },
  { id: 'carbon', icon: Leaf, label: 'Carbon Footprint' },
  { id: 'materials', icon: Building, label: 'Materials' },
  { id: 'tracking', icon: Activity, label: 'Usage Tracking' }
];

export default function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="category-filter">
      {categories.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => onCategoryChange(id)}
          className={`category-button ${activeCategory === id ? 'active' : ''}`}
        >
          <Icon size={18} />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}