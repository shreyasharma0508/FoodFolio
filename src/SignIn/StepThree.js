import React, { useState } from "react";

function StepThree({ nextStep, prevStep, setUserData, userData }) {
  const [weeklyGoal, setWeeklyGoal] = useState(userData.weeklyGoal || "");

  const handleNext = () => {
    if (!weeklyGoal) {
      alert("Please select a weekly goal.");
      return;
    }
    setUserData((prev) => ({ ...prev, weeklyGoal }));
    nextStep();
  };

  return (
    <div className="multi-step-form">
      <h2>What is your weekly goal?</h2>
      <p>Let’s break down your overall health goal into a weekly one you can maintain.</p>
      <div className="radio-group">
        {[
          "Lose 0.5 pounds per week",
          "Lose 1 pound per week (Recommended)",
          "Lose 1.5 pounds per week",
          "Lose 2 pounds per week",
        ].map((goal) => (
          <label key={goal}>
            <input
              type="radio"
              name="weeklyGoal"
              value={goal}
              checked={weeklyGoal === goal}
              onChange={(e) => setWeeklyGoal(e.target.value)}
            />
            {goal}
          </label>
        ))}
      </div>
      <div className="button-group">
        <button className="btn-secondary" onClick={prevStep}>
          Back
        </button>
        <button className="btn-primary" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default StepThree;
