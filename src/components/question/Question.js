import React, {Component} from 'react';
import VerbDisplayTable from '../verb/ui/VerbDisplayTable'

//require data files
const rules = require('../../data/rules.json');
const ANSWERS_LENGTH = 3;

class Question extends Component{
    
    constructor(props){
        super(props)
        this.getDisplayQuestion = this.getDisplayQuestion.bind(this)
        this.getAnswerList = this.getAnswerList.bind(this)
    }

    // returns display question str
    getDisplayQuestion(pronoun, tense, verbName){
        return (
            <p className="questionText">Which is the correct <strong>{pronoun}</strong> form for the <strong>{tense}</strong> tense of <b>{verbName}</b>?</p>
        )
    }

    getAnswerList(verbTablesArray, personIndex){
        const listItems = verbTablesArray.map(function(vt, idx){
            return (<li key={idx} className="questionText">{vt[personIndex][1]}</li>)
        })
        
        return(
            <ol>
                {listItems}
            </ol>
        )

    }
    
    render(){
        const personIndex = this.props.params.personIndex
        const pronoun = rules['pronouns'][personIndex]
        const tense = this.props.params.tense
        const verbName = this.props.params.verbName
        const verbTablesArray = this.props.params.verbTablesArray

        if(verbName === "") {
            return(
            <p className="questionText">Click Next Question to get Started</p>
        )}
        return(           
            <div>
                {this.getDisplayQuestion(pronoun, tense, verbName)}          
                {this.getAnswerList(verbTablesArray, personIndex)}
            </div>
        )
        
    }

}

Question.defaultProps = {
    "params":{
        "personIndex": 0,
        "tense": "",
        "vwerbName": ""
    }
    
}

export default Question