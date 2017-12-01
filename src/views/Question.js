import React, {Component} from 'react';

import ProgressHeader from '../components/views/ProgressHeader';
import VerbDisplayTable from '../components/verb/ui/VerbDisplayTable';
import Questions from '../components/question/Questions';
import Button from '../components/controls/Button';

class Question extends Component{
    constructor (props) {
        
        super(props);
    
    }

    render () {
        const {
            count,
            correctAnswers,
            currentQuestion,
            verbTablesArray,
            totalQuestions,
            params,
            checkAnswer,
            clickHandler,
            showVerbTable,
            action,
            label
        } = this.props
        return (
            
            <div className="questionsContainer">
                <ProgressHeader 
                    count={params.count}
                    totalQuestions={totalQuestions}
                    correctAnswers = {params.correctAnswers}/>
                <VerbDisplayTable verbTablesArray={params.verbTablesArray} />
                <Questions
                    count={params.count}
                    params={params}
                    checkAnswer={checkAnswer}
                    showVerbTable={showVerbTable}/>

                <Button
                    action={action}
                    label={label}/>


            </div>
        );

    }
};

export default Question;
