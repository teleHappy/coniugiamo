import React from 'react';


const DisplayQuestion = ({pronoun, tense, verbName}) => {
    return(
        <p className="questionText">Which is the correct <strong>{pronoun}</strong> form for the <strong>{tense}</strong> tense of <b>{verbName}</b>?</p>
    )
}

export default DisplayQuestion;