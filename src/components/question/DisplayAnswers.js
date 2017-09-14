import React from 'react';

const DisplayAnswers = ({verbTablesArray, personIndex, checkAnswer}) => {

    const isCorrect = function(vt){
        return vt[vt.length-1]['isCorrect']
    }

    const listItems = verbTablesArray.map((vt, idx) => {
        let classNameString = 'questionText';    
        classNameString += (isCorrect(vt)) ? ' correct': ''
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