import { Zap, Globe, Leaf, ArrowRight } from 'lucide-react';

function Content() {
  return (
    <div className="content-section">
      <div className="content-grid">
        <div className="text-content animate-fade-up">
          <h1 className="main-heading">
            Linking Today with a{' '}
            <span className="highlight animate-pulse">Sustainable Energy</span>{' '}
            Tomorrow.
          </h1>
          <p className="sub-heading">
            Sakthi Saadhak unlocks access to global utility data. Our technology
            powers the next generation of climate solutions, giving anyone the
            tools to electrify and decarbonize.
          </p>
          
          <div className="feature-grid">
            <div className="feature-card animate-scale-in">
              <Zap className="feature-icon" />
              <h3>Smart Energy</h3>
              <p>Optimize your energy consumption</p>
            </div>
            <div className="feature-card animate-scale-in" style={{animationDelay: '0.2s'}}>
              <Globe className="feature-icon" />
              <h3>Global Impact</h3>
              <p>Join the sustainable revolution</p>
            </div>
            <div className="feature-card animate-scale-in" style={{animationDelay: '0.4s'}}>
              <Leaf className="feature-icon" />
              <h3>Go Green</h3>
              <p>Reduce your carbon footprint</p>
            </div>
          </div>

          <div className="cta-buttons">
            <a 
              href="/signup"
              className="primary-btn animate-scale-in"
            >
              Get Started
              <ArrowRight className="btn-icon" />
            </a>
            <button className="secondary-btn animate-scale-in">
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-image animate-float">
          <img 
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Sustainable Energy"
            className="rounded-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Content;