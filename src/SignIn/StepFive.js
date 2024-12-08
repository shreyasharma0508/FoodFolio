import React, { useState } from "react";

function StepFive({ nextStep, prevStep, setUserData, userData }) {
  const [dob, setDob] = useState(userData.dob || "");
  const [zipCode, setZipCode] = useState(userData.zipCode || "");

  const handleNext = () => {
    if (!dob || !zipCode) {
      alert("Please fill out all fields.");
      return;
    }
    setUserData((prev) => ({ ...prev, dob, zipCode }));
    nextStep();
  };

  return (
    <div className="step">
      <h2>Please tell us about yourself</h2>
      <p>We use this information to calculate an accurate calorie goal for you.</p>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        className="input-field"
        placeholder="Date of Birth"
      />
      <input
        type="text"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        className="input-field"
        placeholder="Zip Code"
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

export default StepFive;
