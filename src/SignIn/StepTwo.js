import React from "react";

function StepTwo({ nextStep, prevStep }) {
  return (
    <div className="step">
      <h2>Thanks! Now for your goals.</h2>
      <p>Select up to 3 goals that are important to you, including one weight goal.</p>
      <div className="checkbox-group">
        <label>
          <input type="checkbox" /> Lose Weight
        </label>
        <br />
        <label>
          <input type="checkbox" /> Gain Muscle
        </label>
        <br />
        <label>
          <input type="checkbox" /> Maintain Weight
        </label>
        <br />
        <label>
          <input type="checkbox" /> Modify My Diet
        </label>
        <br />
        <label>
          <input type="checkbox" /> Manage Stress
        </label>
      </div>
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

export default StepTwo;
