import React from 'react';

const ProgressHeader = props => 
    <div className="appHeader">
        <div className="step">
            <div className="title">Question</div>
            <div className="value">{props.count}</div>
            <div>of {props.totalQuestions}</div>
        </div>
        <h1>Coniugiamo</h1>
        <div className="score">
            <div className="title">Score</div>
            <div className="value">{props.correctAnswers}</div>
            <div>points</div>
        </div>
    

    </div>

export default ProgressHeader;
