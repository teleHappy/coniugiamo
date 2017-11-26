import React, {Component} from 'react';

import DisplayQuestion from './DisplayQuestion';
import DisplayAnswers from './DisplayAnswers';
import VerbDisplayTable from '../verb/ui/VerbDisplayTable';

import {are} from '../../data/verbs';
import _ from 'lodash';

const ANSWERS_LENGTH = 3;
const QUESTIONS_LENGTH = 5;

const rules = require('../../data/rules.json');

class Questions extends Component{

    constructor (props) {
        super(props);
    }

    render () {
        const {personIdx, tense, verbName, pronoun, verbTablesArray} = this.props.params;
        const {checkAnswer, showVerbTable} = this.props;
        
        return (
            <div className="questionContainer">
                
                <div className="questionLayout">
    
                    <DisplayQuestion
                        pronoun={rules.pronouns[personIdx]}
                        tense={tense}
                        verbName={verbName} />
    
                    <DisplayAnswers
                        verbTablesArray={verbTablesArray}
                        personIdx={personIdx}
                        checkAnswer={checkAnswer}
                        showVerbTable={showVerbTable}/>
                </div>
            </div>
        );
    }

};

export default Questions;
