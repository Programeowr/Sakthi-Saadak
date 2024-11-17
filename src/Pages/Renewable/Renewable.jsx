import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Hero from './Components/Hero.jsx';
import AssessmentForm from './Components/AssessmentForm.jsx';
import Results from './Components/Results.jsx';
import { getEnergyPotentialData } from './RenewableGemini.ts';
import './Renewable.css';

function Renewable() {
  const [showResults, setShowResults] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [energyData, setEnergyData] = useState(null);

  const handleBack = () => {
    window.history.back();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = async (location) => {
    setIsFormSubmitted(true);
    
    // Get energy data from Gemini AI
    const data = await getEnergyPotentialData(location);
    setEnergyData(data);

    // Show results with animation
    setTimeout(() => {
      setShowResults(true);
      // Scroll to results section
      const resultsSection = document.querySelector('.RE-results-section');
      if (resultsSection) {
        resultsSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 500);
  };

  return (
    <div className="RE-app">
      <button onClick={handleBack} className="backButton">
        <ArrowLeft className="backIcon" />
        <span>Back</span>
      </button>
      <main>
        <Hero />
        <AssessmentForm onSubmit={handleFormSubmit} />
        {isFormSubmitted && <Results showResults={showResults} energyData={energyData} />}
      </main>
    </div>
  );
}

export default Renewable;