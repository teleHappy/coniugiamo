import React, { Component } from 'react';

class StepCounter extends Component {

    constructor(props) {

        super(props);

    }

    componentDidMount() {

        this.stepValue = document.querySelector('.appHeader .step .value');
        this.stepValue.style.opacity = 1;

    }

    componentWillReceiveProps(nextProps) {

        if (JSON.stringify(nextProps) === JSON.stringify(this.props)) {

            return;

        }

        this.stepValue.style.visibility = 'hidden';
        this.stepValue.style.opacity = 0;

        setTimeout(() => {

            this.stepValue.style.visibility = 'visible';

            this.stepValue.style.opacity = 1;

        }, 300);

    }

    render() {

        return (
            <div className="step">
                <div className="title">Question</div>
                <div className="value">{this.props.count}</div>
                <div>of {this.props.totalQuestions}</div>
            </div>
        );

    }

}

export default StepCounter;
