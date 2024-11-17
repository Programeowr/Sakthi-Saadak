import React from 'react';
import { ArrowRight } from 'lucide-react';

function AssessmentForm({ onSubmit }) {
  const [location, setLocation] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(location);
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
          />
        </div>
        <button type="submit" className="RE-submit-button">
          Calculate Potential
          <ArrowRight className="RE-button-icon" />
        </button>
      </form>
    </section>
  );
}

export default AssessmentForm;