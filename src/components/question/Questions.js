import React, {Component} from 'react';

import DisplayQuestion from './DisplayQuestion';
import DisplayAnswers from './DisplayAnswers';

const rules = require('../../data/rules.json');

class Questions extends Component{

    constructor (props) {
        super(props);
    }

    componentDidMount(){
        this.questionLayout = document.querySelector('.questionLayout');
        this.questionLayout.style.opacity=1;
    }

    componentWillReceiveProps (nextProps) {
        if(JSON.stringify(nextProps) === JSON.stringify(this.props))
        {
            return;
        }
        this.questionLayout.style.visibility='hidden';
        this.questionLayout.style.opacity=0;
        setTimeout(()=>{
            this.questionLayout.style.visibility='visible';
            this.questionLayout.style.opacity=1;
        }, 250);
    }s

    render () {
        const {personIdx, tense, verbName, pronoun, verbTablesArray} = this.props.params;
        const {checkAnswer, showVerbTable} = this.props;
        
        return (
            <div className="questionContainer">
                
                <div className="questionLayout">
    
                    <DisplayQuestion
                        pronoun={rules.pronouns[personIdx]}
                        tense={tense}
                        verbName={verbName} />
    
                    <DisplayAnswers
                        verbTablesArray={verbTablesArray}
                        personIdx={personIdx}
                        checkAnswer={checkAnswer}
                        showVerbTable={showVerbTable}/>
                </div>
            </div>
        );
    }

};

export default Questions;
