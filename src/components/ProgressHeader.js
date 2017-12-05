import React, {Component} from 'react';

class ProgressHeader extends Component {

    constructor (props) {

        super(props);

    }

    componentDidMount () {

        this.stepValue = document.querySelector('.appHeader .step .value');
        this.stepValue.style.opacity = 1;

    }
    
    componentWillReceiveProps (nextProps) {
        if(JSON.stringify(nextProps) === JSON.stringify(this.props))
        {
            return;
        }

        this.stepValue.style.visibility = 'hidden';
        this.stepValue.style.opacity = 0;

        setTimeout(()=> {
            
            this.stepValue.style.visibility = 'visible';
            
            this.stepValue.style.opacity = 1;

        }, 300);

    }

    render () {
        
        const {count, totalQuestions, correctAnswers} = this.props;

        return (
            <div className="appHeader">
                <div className="step">
                    <div className="title">Question</div>
                    <div className="value">{count}</div>
                    <div>of {totalQuestions}</div>
                </div>
                <h1>Coniugiamo</h1>
                <div className="score">
                    <div className="title">Score</div>
                    <div className="value">{correctAnswers}</div>
                    <div>points</div>
                </div>
            
        
            </div>
        );

    }    

};

export default ProgressHeader;

