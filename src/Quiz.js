import React, { Component } from "react";

//Component files
import AppHeader from "./components/AppHeader";
import VerbUtils from "./components/verb/VerbUtils";
import { are, ere, ire } from "./data/verbs";

import Start from "./views/Start";
import Question from "./views/Question";
import Results from "./views/Results";

const ANSWERS_LENGTH = 3;
const QUESTIONS_LENGTH = 5;
const rules = require("./data/rules.json");

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      correctAnswers: 0,
      count: 0,
      currentQuestion: {},
      currentQuestionAnswered: false,
      progressStatus: Quiz.progressStatusEnums.NOT_INITIALIZED,
      verbGroup: null,
      incorrectQuestions: []
    };

    this.startQuiz = this.startQuiz.bind(this);
    this.restartQuiz = this.restartQuiz.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.setVerbGroup = this.setVerbGroup.bind(this);
    this.getQuestionParams = this.getQuestionParams.bind(this);
  }

  setVerbGroup(evt) {
    const verbEnding = evt.target.value;
    let verbGroup = null;

    if (verbEnding === "are") {
      verbGroup = are;
    }
    if (verbEnding === "ere") {
      verbGroup = ere;
    }
    if (verbEnding === "ire") {
      verbGroup = ire;
    }

    this.setState({
      verbGroup
    });
  }

  initializeQuizVerbs() {
    const { verbGroup } = this.state;

    this.quizVerbArray = VerbUtils.getUniqueAreVerbObjectsByCount(
      QUESTIONS_LENGTH,
      verbGroup
    );
  }

  startQuiz() {
    const { verbGroup } = this.state;

    if (verbGroup === null) {
      alert("Please select a verb ending to begin.");
      return false;
    }

    this.initializeQuizVerbs();
    this.initProgress(Quiz.progressStatusEnums.IN_PROGRESS);
    this.nextQuestion();
  }

  restartQuiz() {
    this.initProgress(Quiz.progressStatusEnums.NOT_INITIALIZED);
  }

  initProgress(status) {
    this.setState({
      count: 0,
      correctAnswers: 0,
      currentQuestion: {},
      currentQuestionAnswered: false,
      progressStatus: status
    });
  }

  /**
   * Increment state.correctAnswers in this method
   * @param {Object} evt Button click event
   * @returns {Boolean} true or false
   */
  checkAnswer(evt) {
    if (this.state.currentQuestionAnswered) {
      return false;
    }

    const listElement = evt.target;

    let correctAnswers = parseInt(this.state.correctAnswers, 10);
    let { incorrectQuestions } = this.state;



    document.getElementsByClassName("verbTableLinkContainer")[0].style.visibility = "visible";

    if (this.isCorrectAnswer(evt)) {

      listElement.classList.add('answer-correct');

      correctAnswers += 1;

    } else {

      listElement.classList.add('answer-incorrect');

      // TODO: persist to local storage for 'weakest verbs' feature
      incorrectQuestions.push(this.state.currentQuestion);

    }

    this.setState({
      correctAnswers,
      incorrectQuestions,
      currentQuestionAnswered: true
    });

    return true;
  }

  isCorrectAnswer(evt) {
    return evt.target.className.match(/correct/) !== null;
  }

  resetUI() {

    const revealer = document.querySelector('.revealer');
    const verbTableLinkContainer = document.querySelector('.verbTableLinkContainer');

    revealer.classList.remove('is-transitioned');

    verbTableLinkContainer.style.visibility = "hidden";

    return true;
  }

  nextQuestion() {
    if (this.state.progressStatus === Quiz.progressStatusEnums.IN_PROGRESS) {
      this.resetUI();
    }

    if (this.state.count === QUESTIONS_LENGTH) {
      this.setState({
        progressStatus: Quiz.progressStatusEnums.COMPLETE
      });

      return;
    }

    const {
      newTense,
      personIdx,
      tenses,
      verbObj,
      verbTables
    } = this.getQuestionParams();
    const newCount = parseInt(this.state.count + 1, 10);

    this.setState({
      count: newCount,
      currentQuestion: {
        personIdx,
        tense: newTense,
        verbName: verbObj.name,
        verbTranslation: verbObj.translation,
        verbTablesArray: verbTables
      },
      currentQuestionAnswered: false
    });
  }

  getQuestionParams() {
    const { verbGroup } = this.state;
    const verbObj = this.quizVerbArray[this.state.count];
    const newTense = VerbUtils.getRandomTense();
    const tenses = VerbUtils.getUniqueTenseArrayByCount(
      newTense,
      ANSWERS_LENGTH
    );
    const verbTables = VerbUtils.getThreeVerbTables(
      verbObj.name,
      tenses,
      verbGroup
    );
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



  isCompleted() {
    const { count } = this.state;

    return count === QUESTIONS_LENGTH;
  }

  render() {
    const { progressStatus, count } = this.state;

    return (
      <div className="App">


        <AppHeader count={this.state.count} questionsLength={QUESTIONS_LENGTH} progressStatus={this.state.progressStatus} />

        {progressStatus === Quiz.progressStatusEnums.NOT_INITIALIZED && (
          <Start startQuiz={this.startQuiz} setVerbGroup={this.setVerbGroup} />
        )}

        {progressStatus === Quiz.progressStatusEnums.IN_PROGRESS && (
          <Question
            count={this.state.count}
            correctAnswers={this.state.correctAnswers}
            verbTablesArray={this.state.currentQuestion.verbTablesArray}
            params={this.state.currentQuestion}
            totalQuestions={QUESTIONS_LENGTH}
            checkAnswer={this.checkAnswer}
            action={this.nextQuestion}
            isCompleted={this.isCompleted()}
          />
        )}

        {progressStatus === Quiz.progressStatusEnums.COMPLETE && (
          <Results
            correctAnswers={this.state.correctAnswers}
            totalQuestions={QUESTIONS_LENGTH}
            action={this.restartQuiz}
          />
        )}
      </div>
    );
  }
}

Quiz.progressStatusEnums = Object.freeze({
  NOT_INITIALIZED: "NOT_INITIALIZED",
  IN_PROGRESS: "IN_PROGRESS",
  COMPLETE: "COMPLETE"
});

export default Quiz;
