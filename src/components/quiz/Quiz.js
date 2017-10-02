import React, {Component} from 'react';


import Questions from '../question/Questions';

import Verb from '../verb/Verb';
import {are} from '../../data/verbs';
import _ from 'lodash';

const verb = new Verb(); // Helper methods
const ANSWERS_LENGTH = 3;
const QUESTIONS_LENGTH = 5;

const rules = require('../../data/rules.json');

class Quiz extends Component {

    constructor () {

        super();
        this.state = {
            'correctAnswers': 0,
            'count': 0,
            'inProgress': false,
            'currentQuestionAnswered': false,
            'currentQuestion': {}
        };
        this.startQuiz = this.startQuiz.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.showVerbTable = this.showVerbTable.bind(this);
    }

    componentWillMount () {

        this.quizVerbArray = this.getUniqueAreVerbObjectsByCount(QUESTIONS_LENGTH);

    }

    startQuiz () {

        this.setState({
            'inProgress': true
        });
        this.nextQuestion();

    }

    /**
     * Increment state.correctAnswers in this method
     * @param {Object} evt Button click event
     * @returns {Boolean} true or false
     */
    checkAnswer (evt) {
        
        if(this.state.currentQuestionAnswered){
            return false;
        }

        const isCorrect = evt.target.className.match(/correct/) !== null;
        
        // should be an observable that Quiz observes
        // get rid of state in here!
        const {correctAnswers} = this.state;
        let newCorrectAnswers = correctAnswers;

        document.getElementsByClassName('verbTableLinkContainer')[0].style.display = 'block';

        if (isCorrect) {
            document.getElementsByClassName('verbTableLink')[0].style.color = "#fff";
            newCorrectAnswers++;
        }
        else {
            document.getElementsByClassName('verbTableLink')[0].style.color = "red";    
        }

        this.setState({
            'correctAnswers': newCorrectAnswers,
            'currentQuestionAnswered': true
        });

        return true;

    }

    showVerbTable(){
        
        document.getElementsByClassName('verbTableWrapper')[0].style.display = 'flex';
    }

    nextQuestion () {

        // reset UI
        if(this.state.count > 0){
            document.getElementById('answerList').style.display="none";
            document.getElementById('answerList').classList.remove('fadeIn');
            document.getElementsByClassName('questionTextContainer')[0].style.display='none';
            document.getElementsByClassName('verbTableLinkContainer')[0].style.display = 'none';
            document.getElementsByClassName('verbTableContainer')[0].style.display = 'none'
        }
        // Call next on Question Observable
        const {verbObj, personIdx, newTense, tenses, verbTables} = this.getQuestionParams();
        const newCount = this.state.count + 1;

        // TODO: question state should be moved to Question
        this.setState({
            'count': newCount,
            'currentQuestionAnswered': false,
            'currentQuestion': {
                'personIdx': personIdx,
                'tense': newTense,
                'verbEnding': 'are',
                'verbName': verbObj.name,
                'verbTablesArray': verbTables
            }

        });
        
    }

    getQuestionParams () {

        const verbObj = this.quizVerbArray[this.state.count];
        const newTense = this.getRandomTense();
        const tenses = this.getUniqueTenseArrayByCount(newTense, ANSWERS_LENGTH);
        const verbTables = this.getThreeVerbTables(verbObj.name, tenses);
        const personIdx = this.getRandomPersonIndex();

        const questionParams = {
            verbObj: verbObj,
            newTense: newTense,
            personIdx: personIdx,
            tenses: tenses,
            verbTables: verbTables
        };

        return questionParams;

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

    getScoreView(){
        return (
            <div className="scoreContainer">
                <div className="score">
                    <h3>Score</h3>
                    <span>{this.state.correctAnswers} / {QUESTIONS_LENGTH}</span>
                </div>
            </div>
        );

    }

    render () {

        const {inProgress, count} = this.state;

        return (
            <div className="quizBody">
                {!inProgress &&
                    <div className="startContainer">
                        <div className="introTextContainer">
                            <p className="introText">Click Start Quiz to get Started</p>
                        </div>
                        <div className="buttonContainer">
                            <button onClick={this.startQuiz}>Start Quiz</button>
                        </div>
                    </div>
                }
                {inProgress &&
                    <div className="questionContext">

                        <Questions count={this.state.count} 
                            params={this.state.currentQuestion} 
                            checkAnswer={this.checkAnswer} 
                            clickHandler={this.nextQuestion}
                            showVerbTable={this.showVerbTable}/>
                            {this.getScoreView()}    
                    </div>
                    
                }
            </div>
        );

    }
}

export default Quiz;
