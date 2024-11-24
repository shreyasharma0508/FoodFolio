import React from "react";

function StepThree({ nextStep, prevStep }) {
  return (
    <div className="step">
      <h2>What is your weekly goal?</h2>
      <p>Let’s break down your overall health goal into a weekly one you can maintain.</p>
      <div className="radio-group">
        <label>
          <input type="radio" name="weeklyGoal" /> Lose 0.5 pounds per week
        </label>
        <br />
        <label>
          <input type="radio" name="weeklyGoal" /> Lose 1 pound per week (Recommended)
        </label>
        <br />
        <label>
          <input type="radio" name="weeklyGoal" /> Lose 1.5 pounds per week
        </label>
        <br />
        <label>
          <input type="radio" name="weeklyGoal" /> Lose 2 pounds per week
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

export default StepThree;
