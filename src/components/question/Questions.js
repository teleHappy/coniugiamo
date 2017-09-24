/* eslint id-length:0, no-console: 0, no-warning-comments: 1, no-mixed-operators: 0 */
import React, {Component} from 'react';


import DisplayQuestion from './DisplayQuestion';
import DisplayAnswers from './DisplayAnswers';
import VerbDisplayTable from '../verb/ui/VerbDisplayTable';

import Verb from '../verb/Verb';
import {are} from '../../data/verbs';
import _ from 'lodash';

const verb = new Verb();
const ANSWERS_LENGTH = 3;
const QUESTIONS_LENGTH = 5;

const rules = require('../../data/rules.json');

class Questions extends Component {

    constructor (props) {

        super(props);

        this.checkAnswer = this.checkAnswer.bind(this);
        this.isCompleted = this.isCompleted.bind(this);
    }


    /**
     * Increment state.correctAnswers in this method
     * @param {Object} evt Button click event
     * @returns {Boolean} true or false
     */
    checkAnswer (evt) {

        if (this.props.count === 4) {
            console.log('count finished at 4')
            return false;

        }

        const isCorrect = evt.target.className.match(/correct/) !== null;
        
        // should be an observable that Quiz observes
        // get rid of state in here!
        const {correctAnswers} = this.state;
        let newCorrectAnswers = null;

        if (isCorrect) {

            newCorrectAnswers = correctAnswers + 1;

        }

        this.setState({
            'correctAnswers': newCorrectAnswers

        });

        return true;

    }

    getButtonLabel(){
        if(this.isCompleted()){
            return 'Finished!'
        }
        else {
            return 'Next Question'
        }
    }

    isCompleted(){
        const {count} = this.props;
        return (count === 5) ? true : false;
    }

    render () {

        const {personIdx, tense, verbName, pronoun, verbTablesArray} = this.props.params;
        const {count, clickHandler} = this.props;
        const buttonLabel = 'Next Question'
        
        return (
            <div className="questionContainer">
                <div className="questionLayout">
                    <DisplayQuestion pronoun={rules.pronouns[personIdx]} tense={tense} verbName={verbName} />
                    <DisplayAnswers verbTablesArray={verbTablesArray} personIdx={personIdx} checkAnswer={this.checkAnswer}/>
                    <VerbDisplayTable verbTablesArray={verbTablesArray} />
                    <div className="buttonContainer">
                        <button onClick={clickHandler} disabled={this.isCompleted()}>{this.getButtonLabel()}</button>
                    </div>
                </div>
            </div>
        );

    }

}

export default Questions;
