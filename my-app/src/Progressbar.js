import React from "react";
import "./style.css";

const ProgressBar = () => {
  const steps = [
    "Preliminary",
    "Your Details",
    "KYC",
    "Parties",
    "Claim",
    "Review",
    "Payment",
  ];

  const activeStep = 3; // Change to set the active step (0-based index)

  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <div
          className={`progress-step ${
            index < activeStep ? "completed" : index === activeStep ? "active" : ""
          }`}
          key={index}
        >
          {index < steps.length - 1 && <div className="progress-line"></div>}
          <div className="circle">{index < activeStep ? "" : index + 1}</div>
          <div className="step-title">{step}</div>
          {index >= 3 && <div className="step-time">(Approx 5 Min)</div>}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
















