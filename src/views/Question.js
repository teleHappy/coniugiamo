import React, { Component } from 'react';

import ProgressHeader from '../components/ProgressHeader';
import VerbDisplayTable from '../components/verb/ui/VerbDisplayTable';
import Questions from '../components/question/Questions';
import Button from '../components/controls/Button';

class Question extends Component {
    constructor(props) {

        super(props);

        this.showVerbTable = this.showVerbTable.bind(this);

    }

    showVerbTable() {

        document.getElementsByClassName('verbTableWrapper')[0].style.display = 'block';
        document.querySelector('.verbTableWrapper').classList.add('modal-enter');

    }

    getButtonLabel() {
        if (this.props.isCompleted) {
            return "Ultima Domanda";
        }

        return "Prossima Domanda";
    }

    render() {
        const {
            count,
            correctAnswers,
            verbTablesArray,
            totalQuestions,
            params,
            checkAnswer,
            showVerbTable,
            action,
            label,
            isCompleted,
        } = this.props

        return (

            <div className="questionsContainer">
                <ProgressHeader
                    count={count}
                    totalQuestions={totalQuestions}
                    correctAnswers={correctAnswers} />

                <Questions
                    count={params.count}
                    params={params}
                    checkAnswer={checkAnswer}
                    showVerbTable={this.showVerbTable} />

                <Button
                    action={action}
                    label={this.getButtonLabel()} />


            </div>
        );

    }
};

export default Question;
