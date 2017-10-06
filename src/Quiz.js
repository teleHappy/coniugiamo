import React, {Component} from 'react';
import AppHeader from './components/views/AppHeader';
import Questions from './components/question/Questions';
import VerbUtils from './components/verb/VerbUtils';

const verbUtils = new VerbUtils();
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
            'inProgress': false
        };

        this.startQuiz = this.startQuiz.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.showVerbTable = this.showVerbTable.bind(this);

    }

    componentWillMount () {

        this.initializeQuizVerbs();

    }

    initializeQuizVerbs () {

        this.quizVerbArray = verbUtils.getUniqueAreVerbObjectsByCount(QUESTIONS_LENGTH);

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

        if (this.state.count > 0) {

            this.resetUI();

        }

        const {newTense, personIdx, tenses, verbObj, verbTables} = this.getQuestionParams();
        const newCount = parseInt(this.state.count + 1, 10);

        this.setState({
            'count': newCount,
            'currentQuestion': {
                personIdx,
                'tense': newTense,
                'verbEnding': 'are',
                'verbName': verbObj.name,
                'verbTablesArray': verbTables
            },
            'currentQuestionAnswered': false
        });

    }

    getQuestionParams () {

        const verbObj = this.quizVerbArray[this.state.count];
        const newTense = verbUtils.getRandomTense();
        const tenses = verbUtils.getUniqueTenseArrayByCount(newTense, ANSWERS_LENGTH);
        const verbTables = verbUtils.getThreeVerbTables(verbObj.name, tenses);
        const personIdx = verbUtils.getRandomPersonIndex();

        const questionParams = {
            newTense,
            personIdx,
            tenses,
            verbObj,
            verbTables
        };

        return questionParams;

    }

    getScoreView () {

        return (
            <div className="scoreContainer">
                <div className="score">
                    <h3>Score</h3>
                    <span>{this.state.correctAnswers} / {QUESTIONS_LENGTH}</span>
                </div>
            </div>
        );

    }

    getButtonLabel () {

        if (this.isCompleted()) {

            return 'Last Question!';

        }

        return 'Next Question';


    }

    isCompleted () {

        const {count} = this.state;


        return count === QUESTIONS_LENGTH;

    }

    render () {

        const {inProgress, count} = this.state;

        return (
            <div className="App">
                <AppHeader />
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

                            <div className="buttonContainer">
                                <button onClick={this.nextQuestion} disabled={this.isCompleted()}>
                                        {this.getButtonLabel()}
                                </button>
                            </div>

                            {this.getScoreView()}

                        </div>
                    }
                </div>
            </div>
        );

    }

}

export default Quiz;
