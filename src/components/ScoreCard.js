import React from 'react';

const ScoreCard = props =>

    <div className="scoreContainer">
        <div className="score">
            <h3>Score</h3>
            <span>{props.correctAnswers} / {props.totalQuestions}</span>
        </div>
    </div>;

export default ScoreCard;
