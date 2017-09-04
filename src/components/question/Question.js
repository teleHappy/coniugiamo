import React, {Component} from 'react';

//require data files
const rules = require('../../data/rules.json');
const ANSWERS_LENGTH = 3;

class Question extends Component{
    
    constructor(props){
        super(props)
        this.getDisplayQuestion = this.getDisplayQuestion.bind(this)
    }

    // returns display question str
    getDisplayQuestion(){
        return (
            <p style={{"padding": "20px"}}>Which is the correct <strong>{rules['pronouns'][this.props.params.personIndex]}</strong> form for the <strong>{this.props.params.tense}</strong> tense of <b>{this.props.params.verbName}</b>?</p>
        )
    }

    getDisplayAnswers(){}
    
    render(){
        return(       
            this.getDisplayQuestion()          
        )
        //this.getDispayAnswers()
        //this.getCorrectTableLink()
    }

}

Question.defaultProps = {
    "params":{
        "personIndex": 0,
        "tense": "present",
        "name": "parlare"
    }
    
}

export default Question