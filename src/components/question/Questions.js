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


        this.isCompleted = this.isCompleted.bind(this);

    }


    getButtonLabel () {

        if (this.isCompleted()) {

            return 'Last Question!';

        }

        return 'Next Question';


    }

    isCompleted () {

        const {count} = this.props;


        return count === QUESTIONS_LENGTH;

    }

    render () {

        const {personIdx, tense, verbName, pronoun, verbTablesArray} = this.props.params;
        const {count, clickHandler} = this.props;
        const buttonLabel = 'Next Question';

        return (
            <div className="questionContainer">
                <VerbDisplayTable verbTablesArray={verbTablesArray} />
                <div className="questionLayout">
                    <DisplayQuestion pronoun={rules.pronouns[personIdx]} tense={tense} verbName={verbName} />
                    <DisplayAnswers verbTablesArray={verbTablesArray} personIdx={personIdx} checkAnswer={this.props.checkAnswer} showVerbTable={this.props.showVerbTable}/>

                </div>
                <div className="buttonContainer">
                    <button onClick={clickHandler} disabled={this.isCompleted()}>{this.getButtonLabel()}</button>
                </div>
            </div>
        );

    }

}

export default Questions;
