import React, { useState } from "react";

function StepSix({ nextStep, prevStep, setUserData, userData }) {
  const [heightFeet, setHeightFeet] = useState(userData.heightFeet || "");
  const [heightInches, setHeightInches] = useState(userData.heightInches || "");
  const [currentWeight, setCurrentWeight] = useState(userData.currentWeight || "");
  const [goalWeight, setGoalWeight] = useState(userData.goalWeight || "");

  const handleNext = () => {
    if (!heightFeet || !heightInches || !currentWeight || !goalWeight) {
      alert("Please fill out all fields.");
      return;
    }
    setUserData((prev) => ({ ...prev, heightFeet, heightInches, currentWeight, goalWeight }));
    nextStep();
  };

  return (
    <div className="step">
      <h2>How tall are you?</h2>
      <p>Please provide your height and weight to calculate your goals.</p>
      <input
        type="number"
        value={heightFeet}
        onChange={(e) => setHeightFeet(e.target.value)}
        className="input-field"
        placeholder="Height (feet)"
      />
      <input
        type="number"
        value={heightInches}
        onChange={(e) => setHeightInches(e.target.value)}
        className="input-field"
        placeholder="Height (inches)"
      />
      <input
        type="number"
        value={currentWeight}
        onChange={(e) => setCurrentWeight(e.target.value)}
        className="input-field"
        placeholder="Current Weight (lbs)"
      />
      <input
        type="number"
        value={goalWeight}
        onChange={(e) => setGoalWeight(e.target.value)}
        className="input-field"
        placeholder="Goal Weight (lbs)"
      />
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

export default StepSix;