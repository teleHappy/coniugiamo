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
    getDisplayQuestion(){
        return (
            <p className="questionText">Which is the correct <strong>{rules['pronouns'][this.props.params.personIndex]}</strong> form for the <strong>{this.props.params.tense}</strong> tense of <b>{this.props.params.verbName}</b>?</p>
        )
    }

    getAnswerList(){
        const verbTablesArray = this.props.params.verbTablesArray
        const personIndex = this.props.params.personIndex
        let listItems = verbTablesArray.map(function(vt, idx){
            return (<li key={idx} className="questionText">{vt[personIndex][1]}</li>)
        })
        
        return(
            <ol>
                {listItems}
            </ol>
        )

    }
    
    render(){
        if(this.props.params.verbName === "") {
            return(
            <p className="questionText">Click Next Question to get Started</p>
        )}
        return(           
            <div>
                {this.getDisplayQuestion()}          
                {this.getAnswerList()}
            </div>
            //<VerbDisplayTable verbTable={this.props.params.verbTablesArray[0]}/>
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