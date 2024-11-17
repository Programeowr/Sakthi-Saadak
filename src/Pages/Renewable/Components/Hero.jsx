import React from 'react';
import { Sun } from 'lucide-react';

function Hero() {
  return (
    <section className="RE-hero">
      <div className="RE-hero-content">
        <h1>Access Your Renewable Energy Potential</h1>
        <p>
          Discover how much clean energy you could generate and the positive impact
          you could make on the environment. Get personalized insights based on your
          location and property specifications.
        </p>
       
      </div>
      <div className="RE-hero-image">
        <Sun size={400} color="#00c2ff" strokeWidth={1} />
      </div>
    </section>
  );
}

export default Hero