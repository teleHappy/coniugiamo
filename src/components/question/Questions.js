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
        this.state = {
            'count': 0
        };
        this.quizVerbArray = this.getUniqueAreVerbObjectsByCount(QUESTIONS_LENGTH);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);

    }

    nextQuestion () {

        // Call next on Question Observable
        const verbObj = this.quizVerbArray[this.state.count];
        const personIdx = this.getRandomPersonIndex();
        const newTense = this.getRandomTense();
        const tenses = this.getUniqueTenseArrayByCount(newTense, ANSWERS_LENGTH);
        const verbTables = this.getThreeVerbTables(verbObj.name, tenses);
        const newCount = this.state.count + 1;

        if (this.state.count === QUESTIONS_LENGTH) {

            console.log('done!');

        }

        // TODO: question state should be moved to Question
        this.setState({
            'checkAnswer': true,
            'count': newCount,
            'currentQuestion': {
                'personIndex': personIdx,
                'tense': newTense,
                'verbEnding': 'are',
                'verbName': verbObj.name,
                'verbTablesArray': verbTables
            }

        });

    }

    componentWillUpdate (nextProps) {

        console.log('rd');

    }

    /**
     * Increment state.correctAnswers in this method
     * @param {Object} evt Button click event
     * @returns {Boolean} true or false
     */
    checkAnswer (evt) {

        if (!this.state.checkAnswer) {

            return false;

        }

        const isCorrect = evt.target.className.match(/correct/) !== null;
        const {correctAnswers} = this.state;
        let newCorrectAnswers = null;

        if (isCorrect) {

            newCorrectAnswers = correctAnswers + 1;

        }

        this.setState({
            'checkAnswer': false,
            'correctAnswers': newCorrectAnswers

        });

        return true;

    }

    getVerbNamesFromObjectArray (arr) {

        const newArray = arr.map(obj => obj.name);


        return newArray;

    }

    // Gets an array of unique verb objects
    // Used to instatiate verb quiz and assure that there are no duplicate verbs in any quiz
    // TODO: incorporate ere, ire and irregular verbs
    getUniqueAreVerbObjectsByCount (count) {

        const verbObjArray = are;
        const offset = count - 1;
        const uniqueArray = [are[0]];

        for (let idx = 0; idx < offset; idx += 1) {

            const differenceArray = _.difference(verbObjArray, uniqueArray);
            const min = Math.ceil(0);

            const max = Math.floor(differenceArray.length - 1);

            uniqueArray.push(differenceArray[Math.floor(Math.random() * (max - min)) + 1]);

        }

        return uniqueArray;

    }


    getUniqueTenseArrayByCount (tense, count) {

        const tensesArray = rules.tenses;
        const countOffset = count - 1;
        const uniqueArray = [tense];

        for (let idx = 0; idx < countOffset; idx += 1) {

            const differenceArray = _.difference(tensesArray, uniqueArray);
            const min = Math.ceil(0);
            const max = Math.floor(differenceArray.length);

            uniqueArray.push(differenceArray[Math.floor(Math.random() * (max - min)) + min]);

        }

        return uniqueArray;

    }

    // Handle generating three unique verb tables and decorate each with an 'isCorrect' object
    getThreeVerbTables (name, tenses) {

        let vt = [];
        const conjugatedVerbTables = [];
        // Populate three conjugation tables

        for (let idx = 0; idx < tenses.length; idx += 1) {

            vt = verb.getConjugatedVerbTable(name, tenses[idx]);
            // The first entry is the correct quiz verb, track with this added object
            if (idx === 0) {

                vt.push({'isCorrect': true});

            } else {

                vt.push({'isCorrect': false});

            }

            conjugatedVerbTables.push(vt);

        }

        return conjugatedVerbTables;

    }

    getRandomTense () {

        const min = Math.ceil(0);
        const max = Math.floor(rules.tenses.length);


        return rules.tenses[Math.floor(Math.random() * (max - min)) + min];

    }

    getRandomPersonIndex () {

        const min = Math.ceil(0);
        const max = Math.floor(rules.pronouns.length);

        return Math.floor(Math.random() * (max - min) + min);

    }

    // Not used ...
    getRandomQuizVerbObject () {

        const verbs = this.quizVerbArray;
        const min = Math.ceil(0);
        const max = Math.floor(verbs.length);

        return verbs[Math.floor(Math.random() * (max - min)) + min];

    }

    // Returns an array of {count} random verb names from verbObjectArry
    getUniqueKeyValuesFromObjectArrayByCount (value, array, count) {

        const verbNameArray = this.getVerbNamesFromObjectArray(array);
        const uniqueArray = [];

        for (let int = 0; int < count; int += 1) {

            const differenceArray = _.difference(verbNameArray, uniqueArray);
            const min = Math.ceil(0);
            const max = Math.floor(differenceArray.length);

            uniqueArray.push(differenceArray[Math.floor(Math.random() * (max - min)) + min]);

        }

        return uniqueArray;

    }

    // User clicks the answer, calculate score, show reference table

    getButtonLabel () {

        const {inProgress} = this.props;
        const {count} = this.state;
        let label = '';

        if (inProgress && count > 0) {

            label = 'Next Question';

        } else {

            label = 'Start Quiz';

        }

        return label;

    }

    componentWillMount () {

        this.nextQuestion();

    }

    render () {

        const {inProgress} = this.props;
        const {personIndex, tense, verbName, pronoun, verbTablesArray} = this.state.currentQuestion;
        const disabled = Boolean(inProgress && this.state.count === QUESTIONS_LENGTH);
        const buttonLabel = this.getButtonLabel();
        console.log(rules)
        return (
            <div className="questionContainer">
                {inProgress &&
                <div>
                    <DisplayQuestion pronoun={rules.pronouns[personIndex]} tense={tense} verbName={verbName} />
                    <DisplayAnswers verbTablesArray={verbTablesArray} personIndex={personIndex} checkAnswer={this.checkAnswer}/>
                    <VerbDisplayTable verbTablesArray={verbTablesArray} />

                </div>
                }
                <div className="startButtonContainer">
                    <button onClick={this.nextQuestion} disabled={disabled}>{buttonLabel}</button>
                </div>
            </div>
        );

    }

}

export default Questions;
