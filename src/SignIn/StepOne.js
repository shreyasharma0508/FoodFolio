import React, { useState } from "react";

function StepOne({ nextStep, setUserData, userData }) {
  const [firstName, setFirstName] = useState(userData.firstName || "");
  const [lastName, setLastName] = useState(userData.lastName || "");

  const handleNext = () => {
    if (firstName.trim() === "" || lastName.trim() === "") {
      alert("Please enter both your first and last names.");
      return;
    }
    setUserData((prev) => ({ ...prev, firstName, lastName }));
    nextStep();
  };

  return (
    <div className="step">
      <h2>What’s your name?</h2>
      <p>We’re happy you’re here. Let’s get to know a little about you.</p>
      <input
        type="text"
        placeholder="First Name"
        className="input-field"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        className="input-field"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <div className="button-group">
        <button className="btn-primary" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default StepOne;
