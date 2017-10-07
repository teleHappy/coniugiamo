import React, {Component} from 'react';

import AppHeader from './components/views/AppHeader';
import Questions from './components/question/Questions';
import VerbUtils from './components/verb/VerbUtils';
import ScoreCard from './components/views/ScoreCard';
import Button from './components/controls/Button';

import {are, ere, ire} from './data/verbs';

const ANSWERS_LENGTH = 3;
const QUESTIONS_LENGTH = 5;
const rules = require('./data/rules.json');

class Quiz extends Component {

    constructor () {

        super();
        this.state = {
            'correctAnswers': 0,
            'count': 0,
            'currentQuestion': {},
            'currentQuestionAnswered': false,
            'progressStatus': Quiz.progressStatusEnums.NOT_INITIALIZED
        };

        this.startQuiz = this.startQuiz.bind(this);
        this.restartQuiz = this.restartQuiz.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.showVerbTable = this.showVerbTable.bind(this);

    }

    componentWillMount () {

        

    }

    initializeQuizVerbs (verbEnding) {
        
        this.quizVerbArray = VerbUtils.getUniqueAreVerbObjectsByCount(QUESTIONS_LENGTH, verbEnding);

    }

    startQuiz () {
        // get selected verb ending from DOM
        // set currentQuestion.verbEnding to that value
        // pass that value to initializeQuizVerbs
        this.initializeQuizVerbs(are);
        this.initProgress(Quiz.progressStatusEnums.IN_PROGRESS);
        this.nextQuestion();

    }

    restartQuiz(){
        
        this.initProgress(Quiz.progressStatusEnums.NOT_INITIALIZED);
    }

    initProgress (status) {

        this.setState({
            'count': 0,
            'currentQuestion': {},
            'currentQuestionAnswered': false,
            'progressStatus': status,
        });
    }

    /**
     * Increment state.correctAnswers in this method
     * @param {Object} evt Button click event
     * @returns {Boolean} true or false
     */
    checkAnswer (evt) {

        if (this.state.currentQuestionAnswered) {

            return false;

        }

        let correctAnswers = parseInt(this.state.correctAnswers, 10);

        document.getElementsByClassName('verbTableLinkContainer')[0].style.display = 'block';

        if (this.isCorrectAnswer(evt)) {

            document.getElementsByClassName('verbTableLink')[0].style.color = '#fff';
            correctAnswers += 1;

        } else {

            document.getElementsByClassName('verbTableLink')[0].style.color = 'red';

        }

        this.setState({
            correctAnswers,
            'currentQuestionAnswered': true
        });

        return true;

    }

    isCorrectAnswer (evt) {

        return evt.target.className.match(/correct/) !== null;

    }

    showVerbTable () {

        document.getElementsByClassName('verbTableWrapper')[0].style.display = 'flex';

    }

    resetUI () {

        document.getElementsByClassName('questionTextContainer')[0].style.display = 'none';
        document.getElementsByClassName('answerListContainer')[0].style.visibility = 'hidden';
        document.getElementById('answerList').classList.remove('fadeIn');
        document.getElementsByClassName('verbTableLinkContainer')[0].style.display = 'none';
        document.getElementsByClassName('verbTableWrapper')[0].style.display = 'none';

        return true;

    }

    nextQuestion () {

        if (this.state.progressStatus === Quiz.progressStatusEnums.IN_PROGRESS) {

            this.resetUI();

        }

        if(this.state.count === QUESTIONS_LENGTH){
            this.initProgress(Quiz.progressStatusEnums.COMPLETE);
            return;
        }

        const {newTense, personIdx, tenses, verbObj, verbTables} = this.getQuestionParams();
        const newCount = parseInt(this.state.count + 1, 10);

        this.setState({
            'count': newCount,
            'currentQuestion': {
                personIdx,
                'tense': newTense,
                'verbEnding': 'are', //
                'verbName': verbObj.name,
                'verbTablesArray': verbTables
            },
            'currentQuestionAnswered': false
        });

    }

    getQuestionParams () {
        
        const verbObj = this.quizVerbArray[this.state.count];
        const newTense = VerbUtils.getRandomTense();
        const tenses = VerbUtils.getUniqueTenseArrayByCount(newTense, ANSWERS_LENGTH);
        const verbTables = VerbUtils.getThreeVerbTables(verbObj.name, tenses);
        const personIdx = VerbUtils.getRandomPersonIndex();

        const questionParams = {
            newTense,
            personIdx,
            tenses,
            verbObj,
            verbTables
        };

        return questionParams;

    }

    getButtonLabel () {

        if (this.isCompleted()) {

            return 'Ultima Domanda';

        }

        return 'Prossima Domanda';


    }

    isCompleted () {

        const {count} = this.state;


        return count === QUESTIONS_LENGTH;

    }

    render () {

        const {progressStatus, count} = this.state;

        return (
            <div className="App">
                <AppHeader />
                <div className="quizBody">
                    {progressStatus === Quiz.progressStatusEnums.NOT_INITIALIZED &&
                        <div className="startContainer">
                            <div className="introTextContainer">
                                <p className="introText">Click Coniugiamo to get Started</p>
                            </div>
                            <Button 
                                action={this.startQuiz}
                                label="Coniugiamo"/>
                        </div>
                    }
                    {progressStatus === Quiz.progressStatusEnums.IN_PROGRESS  &&
                        <div className="questionContext">

                            <Questions
                                count={this.state.count}
                                params={this.state.currentQuestion}
                                checkAnswer={this.checkAnswer}
                                clickHandler={this.nextQuestion}
                                showVerbTable={this.showVerbTable}/>

                            <Button
                                action={this.nextQuestion}
                                label={this.getButtonLabel()}/>

                            <ScoreCard
                                correctAnswers = {this.state.correctAnswers}
                                numberOfQuestions = {QUESTIONS_LENGTH} />

                        </div>
                    }
                    {progressStatus === Quiz.progressStatusEnums.COMPLETE  &&
                        <div className="startContainer">
                            <div className="introTextContainer">
                                <p className="introText">
                                    Si, po fare!
                                </p>
                                <Button 
                                    action={this.restartQuiz}
                                    label="Vai Ancora"/>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );

    }

}

Quiz.progressStatusEnums = Object.freeze({
    'NOT_INITIALIZED': 'NOT_INITIALIZED',
    'IN_PROGRESS': 'IN_PROGRESS',
    'COMPLETE': 'COMPLETE'
}); 

export default Quiz;
