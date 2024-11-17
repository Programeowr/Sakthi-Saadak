import React from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

function AssessmentForm({ onSubmit }) {
  const [location, setLocation] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await onSubmit(location);
    setIsLoading(false);
  };

  return (
    <section id="RE-assessment" className="RE-assessment-section">
      <form onSubmit={handleSubmit} className="RE-assessment-form">
        <h2>Energy Assessment Form</h2>
        <div className="RE-form-group">
          <label htmlFor="location">Your Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your city or postal code"
            required
            disabled={isLoading}
          />
        </div>
        <button 
          type="submit" 
          className="RE-submit-button"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="RE-button-icon animate-spin" />
              Calculating...
            </>
          ) : (
            <>
              Calculate Potential
              <ArrowRight className="RE-button-icon" />
            </>
          )}
        </button>
      </form>
    </section>
  );
}

export default AssessmentForm;