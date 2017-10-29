import React, {Component} from 'react';

import DisplayQuestion from './DisplayQuestion';
import DisplayAnswers from './DisplayAnswers';
import VerbDisplayTable from '../verb/ui/VerbDisplayTable';

import {are} from '../../data/verbs';
import _ from 'lodash';

const ANSWERS_LENGTH = 3;
const QUESTIONS_LENGTH = 5;

const rules = require('../../data/rules.json');

const Questions = props => {

    const {personIdx, tense, verbName, pronoun, verbTablesArray} = props.params;

    return (
        <div className="questionContainer">
            <VerbDisplayTable verbTablesArray={verbTablesArray} />
            <div className="questionLayout">

                <DisplayQuestion
                    pronoun={rules.pronouns[personIdx]}
                    tense={tense}
                    verbName={verbName} />

                <DisplayAnswers
                    verbTablesArray={verbTablesArray}
                    personIdx={personIdx}
                    checkAnswer={props.checkAnswer}
                    showVerbTable={props.showVerbTable}/>
            </div>
        </div>
    );

};

export default Questions;
