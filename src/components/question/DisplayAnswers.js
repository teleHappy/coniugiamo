/* eslint multiline-ternary: 0, no-ternary: 0, no-warning-comments: 0*/
import React from 'react';

const DisplayAnswers = ({verbTablesArray, personIndex, checkAnswer}) => {

    const isCorrect = vt => vt[vt.length - 1].isCorrect;

    const listItems = verbTablesArray.map((vt, idx) => {

        let classNameString = 'questionText';

        classNameString += isCorrect(vt) ? ' correct' : '';
        // TODO: event delagation

        return <li key={idx}
            className={classNameString}
            onClick={checkAnswer}>{vt[personIndex][1]}
        </li>;

    });

    return (
        <div className="answerListContainer">
            <ul id="answerList">
                {listItems}
            </ul>
        </div>
    );

};

export default DisplayAnswers;
