import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import StepSeven from "./StepSeven";

function MultiStepForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 7));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne nextStep={nextStep} />;
      case 2:
        return <StepTwo nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <StepThree nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <StepFour nextStep={nextStep} prevStep={prevStep} />;
      case 5:
        return <StepFive nextStep={nextStep} prevStep={prevStep} />;
      case 6:
        return <StepSix nextStep={nextStep} prevStep={prevStep} />;
      case 7:
        return <StepSeven prevStep={prevStep} />;
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
