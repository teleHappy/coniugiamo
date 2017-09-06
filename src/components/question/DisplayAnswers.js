import React from 'react';

const DisplayAnswers = ({verbTablesArray, personIndex, checkAnswer}) => {

    const getHasIsCorrectProp = function(vt){
        return vt[vt.length-1]['isCorrect']
    }

    const listItems = verbTablesArray.map((vt, idx) => {
        let classNameString = 'questionText';    
        classNameString += (getHasIsCorrectProp(vt)) ? ' correct': ''
        // TODO: event delagation
        return <li key={idx} className={classNameString} onClick={checkAnswer}>{vt[personIndex][1]}</li>
    })
    
    return(
        <ul id="answerList">
            {listItems}
        </ul>
    )
    
}

export default DisplayAnswers