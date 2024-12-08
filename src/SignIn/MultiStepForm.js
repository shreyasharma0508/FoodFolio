import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import StepSeven from "./StepSeven";
import { useUser } from "../context/UserContext";

function MultiStepForm() {
  const { userData, setUserData } = useUser();
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 7));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne nextStep={nextStep} setUserData={setUserData} userData={userData} />;
      case 2:
        return <StepTwo nextStep={nextStep} prevStep={prevStep} setUserData={setUserData} userData={userData} />;
      case 3:
        return <StepThree nextStep={nextStep} prevStep={prevStep} setUserData={setUserData} userData={userData} />;
      case 4:
        return <StepFour nextStep={nextStep} prevStep={prevStep} setUserData={setUserData} userData={userData} />;
      case 5:
        return <StepFive nextStep={nextStep} prevStep={prevStep} setUserData={setUserData} userData={userData} />;
      case 6:
        return <StepSix nextStep={nextStep} prevStep={prevStep} setUserData={setUserData} userData={userData} />;
      case 7:
        return <StepSeven prevStep={prevStep} setUserData={setUserData} userData={userData} />;
      default:
        return null;
    }
  };

  return (
    <div className="multi-step-form">
      <h1 className="brand-title">FoodFolio</h1>
      <ProgressBar step={step} totalSteps={7} />
      {renderStep()}
    </div>
  );
}

export default MultiStepForm;
