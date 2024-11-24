import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function StepSeven({ prevStep }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email && password && agree) {
      // Simulate API call
      console.log("Creating account with:", { email, password });
      navigate("/dashboard");
    } else {
      alert("Please fill all fields and agree to terms.");
    }
  };

  return (
    <div className="step">
      <h2>Create your account</h2>
      <p>Almost there! Enter your email and create a password.</p>
      <input
        type="email"
        placeholder="Email Address"
        className="input-field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="input-field"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={agree}
          onChange={() => setAgree(!agree)}
        />{" "}
        I agree to Foodfolio's Terms & Conditions.
      </label>
      <div className="button-group">
        <button className="btn-secondary" onClick={prevStep}>
          Back
        </button>
        <button className="btn-primary" onClick={handleSubmit}>
          Finish
        </button>
      </div>
    </div>
  );
}

export default StepSeven;
