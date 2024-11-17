import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Hero from './Components/Hero';
import Insights from './Components/Insights';
import Emmisions from './JSB/Emmisions'
import './Co2.css'; 

function Co2() {

  const handleBack = () => {
    window.history.back();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleEmmision(){
    const token = localStorage.getItem('token');
    const insights = document.getElementById("calculation-container");
  
    window.scrollTo({
      top: insights.offsetTop,  
      behavior: 'smooth'  
  });

    Emmisions(token);
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
          <button className="cta-button" id="calculate-button" onClick={handleEmmision}>Click to know your carbon footprint</button>
        </div>
        <Insights />
      </section>
    </div>
  );
}

export default Co2