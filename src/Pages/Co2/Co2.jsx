import React, { useEffect, useState } from 'react';
import { ArrowLeft, Loader2 } from 'lucide-react';
import Hero from './Components/Hero';
import Insights from './Components/Insights';
import Emmisions from './JSB/Emmisions'
import './Co2.css'; 

function Co2() {
  const [calculating, setCalculating] = useState(false);

  const handleBack = () => {
    window.history.back();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function handleEmmision() {
    setCalculating(true);
    const token = localStorage.getItem('token');
    const insights = document.getElementById("calculation-container");
  
    window.scrollTo({
      top: insights.offsetTop,  
      behavior: 'smooth'  
    });

    await Emmisions(token);
    setCalculating(false);
  }

  return (
    <div className="co2-tracker">
      <button onClick={handleBack} className="backButton">
        <ArrowLeft className="backIcon" />
        <span>Back</span>
      </button>
      <Hero />
      <section id="emissions-data" className="emissions-section">
        <div className="co2-button">
          <button 
            className="cta-button" 
            id="calculate-button" 
            onClick={handleEmmision}
            disabled={calculating}
          >
            {calculating ? (
              <span className="flex items-center justify-center">
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                Calculating...
              </span>
            ) : (
              'Click to know your carbon footprint'
            )}
          </button>
        </div>
        <Insights />
      </section>
    </div>
  );
}

export default Co2