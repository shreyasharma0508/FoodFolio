import React, { useState } from "react";

function StepTwo({ nextStep, prevStep, setUserData, userData }) {
  const [selectedGoals, setSelectedGoals] = useState(userData.goals || []);

  const toggleGoal = (goal) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

  const handleNext = () => {
    if (selectedGoals.length === 0) {
      alert("Please select at least one goal.");
      return;
    }
    setUserData((prev) => ({ ...prev, goals: selectedGoals }));
    nextStep();
  };

  return (
    <div className="multi-step-form">
      <h2>Thanks! Now for your goals.</h2>
      <p>Select up to 3 goals that are important to you.</p>
      <div className="checkbox-group">
        {["Lose Weight", "Gain Muscle", "Maintain Weight", "Modify My Diet", "Manage Stress"].map((goal) => (
          <label key={goal}>
            <input
              type="checkbox"
              checked={selectedGoals.includes(goal)}
              onChange={() => toggleGoal(goal)}
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

export default StepTwo;
