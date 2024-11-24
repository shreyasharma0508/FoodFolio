import React from "react";

function StepFive({ nextStep, prevStep }) {
  return (
    <div className="step">
      <h2>Please tell us about yourself</h2>
      <p>We use this information to calculate an accurate calorie goal for you.</p>
      <input type="date" placeholder="Date of Birth" className="input-field" />
      <input type="text" placeholder="Zip Code" className="input-field" />
      <div className="button-group">
        <button className="btn-secondary" onClick={prevStep}>
          Back
        </button>
        <button className="btn-primary" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
}

export default StepFive;
