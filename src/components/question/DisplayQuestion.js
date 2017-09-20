/* eslint arrow-body-style: 0 */
import React from 'react';


const DisplayQuestion = ({pronoun, tense, verbName}) => {

    return (
        <div className="questionTextContainer">    
            <p className="questionText">Which is the correct <span className="param">{pronoun}</span> form for the <span className="param">{tense}</span> tense of <span className="param">{verbName}</span>?</p>
        </div>
    );

};

export default DisplayQuestion;
