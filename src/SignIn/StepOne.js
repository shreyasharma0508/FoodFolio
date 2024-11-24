import React from "react";

function StepOne({ nextStep }) {
  return (
    <div className="step">
      <h2>What’s your first name?</h2>
      <p>We’re happy you’re here. Let’s get to know a little about you.</p>
      <input type="text" placeholder="First Name" className="input-field" />
      <div className="button-group">
        <button className="btn-primary" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
}

export default StepOne;
