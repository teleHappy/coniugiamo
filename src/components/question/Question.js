import React, {Component} from 'react';

import DisplayQuestion from './DisplayQuestion';
import DisplayAnswers from './DisplayAnswers';
import VerbDisplayTable from '../verb/ui/VerbDisplayTable';

const rules = require('../../data/rules.json');

class Question extends Component {

    render () {

        const {personIndex, tense, verbName, verbTablesArray, checkAnswer} = this.props;
        const pronoun = rules.pronouns[personIndex];

        if (verbName === '') {

            return (
                <p className="questionText">Click Next Question to get Started</p>
            );

        }

        return (
            <div className="questionContainer">
                <DisplayQuestion pronoun={pronoun} tense={tense} verbName={verbName} />
                <DisplayAnswers verbTablesArray={verbTablesArray} personIndex={personIndex} checkAnswer={checkAnswer}/>
                <VerbDisplayTable verbTablesArray={verbTablesArray} />
            </div>
        );

    }

}

export default Question;
