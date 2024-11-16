import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import Navbar from './components/Navbar.jsx';
import SearchBar from './components/SearchBar.jsx';
import CategoryFilter from './components/CategoryFilter.jsx';
import FAQItem from './components/FAQItem.jsx';
import './FAQ.css';

const faqData = [
  {
    category: 'energy-saving',
    question: 'What are the most effective ways to reduce energy consumption at home?',
    answer: 'The most effective ways include: 1) Installing LED lighting, 2) Using smart thermostats, 3) Improving insulation, 4) Using energy-efficient appliances, 5) Regular HVAC maintenance, and 6) Implementing smart power strips. Our platform helps track the impact of these changes on your energy usage.'
  },
  {
    category: 'tracking',
    question: 'How can I track my daily energy consumption?',
    answer: 'Our platform provides real-time energy monitoring through smart meters and IoT devices. You can view detailed breakdowns of energy usage by appliance, time of day, and compare with historical data. We also provide mobile alerts for unusual consumption patterns.'
  },
  {
    category: 'renewable',
    question: 'What renewable energy solutions are most cost-effective for homes?',
    answer: 'Solar panels are typically the most cost-effective for homes, with an average payback period of 5-7 years. We can analyze your location, roof orientation, and energy needs to calculate potential savings and recommend the best system size.'
  },
  {
    category: 'carbon',
    question: 'How do I calculate my household carbon footprint?',
    answer: 'Our platform calculates your carbon footprint by analyzing: 1) Energy consumption, 2) Transportation habits, 3) Waste generation, 4) Water usage, and 5) Consumer habits. We provide monthly reports and personalized recommendations for reduction.'
  },
  {
    category: 'materials',
    question: 'Which building materials provide the best energy efficiency?',
    answer: 'High-performance materials include: 1) Double-pane low-E windows, 2) Spray foam insulation, 3) Cool roofing materials, 4) Insulated concrete forms, and 5) Phase change materials. We can help compare options based on your climate and budget.'
  },
  {
    category: 'tracking',
    question: 'What metrics should I monitor to optimize energy usage?',
    answer: 'Key metrics include: 1) Peak usage times, 2) Standby power consumption, 3) HVAC efficiency, 4) Appliance-specific usage, 5) Cost per kWh, and 6) Carbon emissions. Our dashboard provides real-time monitoring of these metrics.'
  },
  {
    category: 'energy-saving',
    question: 'How can I reduce my energy bills during peak seasons?',
    answer: 'Effective strategies include: 1) Using programmable thermostats, 2) Running appliances during off-peak hours, 3) Using natural ventilation when possible, 4) Regular maintenance of HVAC systems, and 5) Installing solar screens or awnings.'
  },
  {
    category: 'renewable',
    question: 'What government incentives are available for renewable energy?',
    answer: 'Common incentives include: 1) Federal tax credits, 2) State rebates, 3) Solar renewable energy certificates (SRECs), 4) Net metering programs, and 5) Local utility incentives. Our platform helps identify available incentives in your area.'
  }
];

function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="ss-home-body">
      <Navbar />
      
      <section className="ss-home-hero">
        <div className="ss-home-hero-content">
          <h1 className="ss-home-hero-title">Energy Saving FAQs</h1>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>
      </section>

      <div className="faq-container">
        <CategoryFilter 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />

        <div className="faq-list">
          {filteredFAQs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            />
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="no-results">
            <HelpCircle size={48} />
            <p>No questions found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;