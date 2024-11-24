import React from "react";

function StepSix({ nextStep, prevStep }) {
  return (
    <div className="step">
      <h2>How tall are you?</h2>
      <p>Please provide your height and weight to calculate your goals.</p>
      <input
        type="number"
        placeholder="Height (feet)"
        className="input-field"
      />
      <input
        type="number"
        placeholder="Height (inches)"
        className="input-field"
      />
      <input
        type="number"
        placeholder="Current Weight (lbs)"
        className="input-field"
      />
      <input
        type="number"
        placeholder="Goal Weight (lbs)"
        className="input-field"
      />
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

export default StepSix;
