import React, { useState } from "react";

function StepFour({ nextStep, prevStep, setUserData, userData }) {
  const [activityLevel, setActivityLevel] = useState(userData.activityLevel || "");

  const handleNext = () => {
    if (!activityLevel) {
      alert("Please select your activity level.");
      return;
    }
    setUserData((prev) => ({ ...prev, activityLevel }));
    nextStep();
  };

  return (
    <div className="multi-step-form">
      <h2>What is your baseline activity level?</h2>
      <p>Not including workouts—we count that separately.</p>
      <div className="radio-group">
        {[
          "Not Very Active (e.g., desk job)",
          "Lightly Active (e.g., teacher)",
          "Active (e.g., food server)",
          "Very Active (e.g., bike messenger)",
        ].map((level) => (
          <label key={level}>
            <input
              type="radio"
              name="activityLevel"
              value={level}
              checked={activityLevel === level}
              onChange={(e) => setActivityLevel(e.target.value)}
            />
            {level}
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

export default StepFour;
