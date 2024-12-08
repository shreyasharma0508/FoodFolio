import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function StepSeven({ prevStep, setUserData, userData }) {
  const [email, setEmail] = useState(userData.email || "");
  const [password, setPassword] = useState(userData.password || "");
  const [agree, setAgree] = useState(userData.agree || false);
  const navigate = useNavigate();

  const handleFinish = () => {
    if (!email || !password || !agree) {
      alert("Please fill all fields and agree to the terms.");
      return;
    }
    setUserData((prev) => ({ ...prev, email, password, agree }));
    navigate("/dashboard");
  };

  return (
    <div className="step">
      <h2>Create your account</h2>
      <p>Almost there! Enter your email and create a password.</p>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
        placeholder="Email Address"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
        placeholder="Password"
      />
      <label>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        I agree to FoodFolio's Terms & Conditions.
      </label>
      <div className="button-group">
        <button className="btn-secondary" onClick={prevStep}>
          Back
        </button>
        <button className="btn-primary" onClick={handleFinish}>
          Finish
        </button>
      </div>
    </div>
  );
}

export default StepSeven;
