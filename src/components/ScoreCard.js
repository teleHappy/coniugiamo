import React from "react";

const ScoreCard = props => (
  <div className="scoreContainer">
    <div className="score">
      <h3>Molto bene!</h3>
      <p>You scored {props.correctAnswers / props.totalQuestions * 100}%</p>
    </div>
  </div>
);

export default ScoreCard;
