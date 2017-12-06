import React, { Component } from "react";

import StepCounter from "./StepCounter";
import CurrentScore from "./CurrentScore";

class ProgressHeader extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.stepValue = document.querySelector(".appHeader .step .value");
    this.stepValue.style.opacity = 1;
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps) === JSON.stringify(this.props)) {
      return;
    }

    this.stepValue.style.visibility = "hidden";
    this.stepValue.style.opacity = 0;

    setTimeout(() => {
      this.stepValue.style.visibility = "visible";

      this.stepValue.style.opacity = 1;
    }, 300);
  }

  render() {
    const { count, totalQuestions, correctAnswers } = this.props;

    return (
      <div className="appHeader">
        <StepCounter count={count} totalQuestions={totalQuestions} />

        <h1>Coniugiamo</h1>

        <CurrentScore correctAnswers={correctAnswers} />
      </div>
    );
  }
}

export default ProgressHeader;
