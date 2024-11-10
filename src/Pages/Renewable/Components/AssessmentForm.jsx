import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

function AssessmentForm({ onSubmit }) {
  const [location, setLocation] = React.useState('');
  const [roofType, setRoofType] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
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
        <div className="RE-form-group">
          <label htmlFor="roofType">Roof Configuration</label>
          <select
            id="roofType"
            value={roofType}
            onChange={(e) => setRoofType(e.target.value)}
            required
          >
            <option value="">Select roof type</option>
            <option value="flat">Flat</option>
            <option value="slanted">Slanted</option>
            <option value="multiple">Multiple Sections</option>
          </select>
          <ChevronDown className="RE-select-icon" />
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