import React from 'react';

const DisplayAnswers = ({verbTablesArray, personIndex}) => {

    const getHasIsCorrectProp = function(vt){
        return vt[vt.length-1]['isCorrect']
    }

    const listItems = verbTablesArray.map((vt, idx) => {
        let classNameString = 'questionText';    
        classNameString += (getHasIsCorrectProp(vt)) ? ' correct': ''
        
        return <li key={idx} className={classNameString}>{vt[personIndex][1]}</li>
    })
    
    return(
        <ol id="answerList">
            {listItems}
        </ol>
    )


}

export default DisplayAnswers