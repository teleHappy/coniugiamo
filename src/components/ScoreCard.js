import React from 'react';

const ScoreCard = props => {

    const exclamations = [
        'Peccato',
        'Mamma Mia',
        'Meno Male',
        'Bravo',
        'Molt Bene',
        'Benissimo'
    ];

    const getScore = () => props.correctAnswers / props.totalQuestions * 100

    const getExclamation = () => <h3>{exclamations[props.correctAnswers]}!!!</h3>

    const getScoreGreeting = () => <div><p>You scored {getScore()}%</p></div>

    return (
        <div className="scoreContainer">
            <div className="score">
                {getExclamation()}
                {getScoreGreeting()}
            </div>
        </div>
    );

};

export default ScoreCard;
