/* eslint   no-warning-comments: ["error", { "terms": ["fixme", "any other term"], "location": "anywhere" }],
            id-length: 0, no-console: 0, no-mixed-operators: 1, no-empty-function: 1
*/
import React, {Component} from 'react';
import Question from '../question/Question';
import Verb from '../verb/Verb';
import {are} from '../../data/verbs';
import _ from 'lodash';

const rules = require('../../data/rules.json');
const verb = new Verb();
const ANSWERS_LENGTH = 3;
const QUESTIONS_LENGTH = 5;

class Quiz extends Component {

    constructor () {

        super();
        this.state = {
            'checkAnswer': true,
            'correctAnswers': 0,
            'count': 0,
            'inProgress': false,
            'question': {
                'personIndex': 0,
                'tense': '',
                'verbEnding': '',
                'verbName': '',
                'verbObj': null,
                'verbTablesArray': []
            }
        };
        this.quizVerbArray = this.getUniqueAreVerbObjectsByCount(QUESTIONS_LENGTH);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);

    }

    // TODO: verbEnding should be random, but need to add verb data to ere and ire verbs first
    nextQuestion (event) {

        const verbObj = this.quizVerbArray[this.state.count];
        const personIdx = this.getRandomPersonIndex();
        const newTense = this.getRandomTense();
        const tenses = this.getUniqueTenseArrayByCount(newTense, ANSWERS_LENGTH);
        const verbTables = this.getThreeVerbTables(verbObj.name, tenses);
        const newCount = this.state.count + 1;

        if (this.state.count === QUESTIONS_LENGTH) {

            console.log('done!');

        }

        this.setState({
            'checkAnswer': true,
            'count': newCount,
            'inProgress': true,
            'question': {
                'personIndex': personIdx,
                'tense': newTense,
                'verbEnding': 'are',
                'verbName': verbObj.name,
                'verbTablesArray': verbTables
            }

        });

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

    getRandomQuizVerbObject () {

        const verbs = this.quizVerbArray;
        const min = Math.ceil(0);
        const max = Math.floor(verbs.length);

        return verbs[Math.floor(Math.random() * (max - min)) + min];

    }

    // User clicks the answer, calculate score, show reference table

    startQuiz () {}

    /**
     * If state.count === 5 score/finish quiz
     * if state.count === 4 button disable next question button
     *
     * in Question:
     */

    finishQuiz () {

    }

    getButtonLabel () {

        const {inProgress, count} = this.state;
        let label = '';

        if (inProgress && count > 0) {

            label = 'Next Quaestion';

        } else {

            label = 'Start Quiz';

        }

        return label;

    }

    render () {

        const {verbEnding, verbName, verbObj, personIndex, tense, verbTablesArray} = this.state.question;
        const {inProgress, count} = this.state;
        const buttonLabel = this.getButtonLabel();
        const disabled = Boolean(inProgress && count === QUESTIONS_LENGTH);


        return (
            <div>
                <div className="questionContainer">
                    <Question
                        verbEnding={verbEnding}
                        verbName={verbName}
                        verbObj={verbObj}
                        personIndex={personIndex}
                        tense={tense}
                        verbTablesArray={verbTablesArray}
                        checkAnswer={this.checkAnswer}
                    />
                </div>
                <button onClick={this.nextQuestion} disabled={disabled}>{buttonLabel}</button>

            </div>
        );

    }

}

export default Quiz;
