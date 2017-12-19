import React, { Component } from 'react';

import StepCounter from './StepCounter';
import CurrentScore from './CurrentScore';

class ProgressHeader extends Component {

    constructor(props) {

        super(props);

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
