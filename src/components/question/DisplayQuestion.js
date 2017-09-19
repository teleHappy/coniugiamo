/* eslint arrow-body-style: 0 */
import React from 'react';


const DisplayQuestion = ({pronoun, tense, verbName}) => {

    return (
        <p className="questionText">Which is the correct <span className="param">{pronoun}</span> form for the <span className="param">{tense}</span> tense of <span className="param">{verbName}</span>?</p>
    );

};

export default DisplayQuestion;
