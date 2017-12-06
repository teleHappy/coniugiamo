import React from "react";

const StepCounter = props => {
  return (
    <div className="step">
      <div className="title">Question</div>
      <div className="value">{props.count}</div>
      <div>of {props.totalQuestions}</div>
    </div>
  );
};

export default StepCounter;
