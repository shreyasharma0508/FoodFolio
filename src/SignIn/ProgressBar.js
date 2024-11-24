import React from "react";

function ProgressBar({ step, totalSteps }) {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="progress-bar">
      <div className="progress-bar-bg">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
