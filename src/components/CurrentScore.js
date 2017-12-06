import React from "react";

const CurrentScore = props => {
  return (
    <div className="score">
      <div className="title">Score</div>
      <div className="value">{props.correctAnswers}</div>
      <div>points</div>
    </div>
  );
};

export default CurrentScore;
