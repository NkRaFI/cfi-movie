import React from 'react';
import "react-step-progress-bar/styles.css";
import './../css/global.css'
import { ProgressBar, Step } from "react-step-progress-bar";

const StepProgressbar = (props) => {

    var stepPercentage = 0;

  if (props.currentStep === 1) {
    stepPercentage = 0;
  } else if (props.currentStep === 2) {
    stepPercentage = 50;
  } else if (props.currentStep === 3) {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }



    return (
        <>
            <ProgressBar percent={stepPercentage} filledBackground="linear-gradient(to right, #fefb72, #f0bb31)">
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
    </ProgressBar>
        </>
    );
};

export default StepProgressbar;