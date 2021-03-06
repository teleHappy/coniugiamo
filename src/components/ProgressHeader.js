import React, { Component } from 'react';

// Component files
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

                <h1>Coniughiamo</h1>

                <CurrentScore correctAnswers={correctAnswers} />
            </div>
        );

    }

}

export default ProgressHeader;
