/* eslint no-tabs: 0, 
indent: 0, 
consistent-this: 0, 
no-trailing-spaces: 0,
brace-style: 0,
padded-blocks: 0,
no-console: 0,
semi: 0,
object-curly-spacing: 0,
space-before-blocks: 0,
no-useless-constructor: 0
 */

import React, { Component } from 'react';
import _ from 'lodash';

import VerbFactory from './verbs/VerbFactory'

//require data files
const rules = require('../data/rules.json');
const verbs = require('../data/verbs.json');
const verbFactory = new VerbFactory()

class Quiz extends Component{
    constructor(props){
        super(props)
        this.state = {
            'score': 0,
            'questions': [],
            'userAnswers': []
        }
    }

    /**
     * initializes Quiz 
     */
    startQuiz(){
        console.log('initiate quiz...')
        verbFactory.getConjugatedVerbTable('parlare', 2, 'present')
    }

    /**
     * When user is finished with quiz, calculate total, display finish screen
     * could have a replay button, 'show me my wrong answers...
     */
    finishQuiz(){}

    /**
     * Generates verb conjugations for multiple-choice quiz
     */
    getVerbsForQuestion(){}

    

    
    
    

    componentWillMount(){
        this.startQuiz();
        
        
    }

    


    render(){
        return (
            <div>
                Hello 
            </div>
        )
    }


}

export default Quiz;