import React from "react";

function StepFour({ nextStep, prevStep }) {
  return (
    <div className="step">
      <h2>What is your baseline activity level?</h2>
      <p>Not including workouts—we count that separately.</p>
      <div className="radio-group">
        <label>
          <input type="radio" name="activityLevel" /> Not Very Active (e.g., desk job)
        </label>
        <br />
        <label>
          <input type="radio" name="activityLevel" /> Lightly Active (e.g., teacher)
        </label>
        <br />
        <label>
          <input type="radio" name="activityLevel" /> Active (e.g., food server)
        </label>
        <br />
        <label>
          <input type="radio" name="activityLevel" /> Very Active (e.g., bike messenger)
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

export default StepFour;
