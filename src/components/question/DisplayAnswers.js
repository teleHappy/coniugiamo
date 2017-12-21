/* eslint multiline-ternary: 0, no-ternary: 0, no-warning-comments: 0*/
import React, { Component } from 'react';

import VerbDisplayTable from '../../components/verb/ui/VerbDisplayTable';
import VerbUtils from '../verb/VerbUtils';

class DisplayAnswers extends Component {


    isCorrect(vt) {

        return vt[vt.length - 1].isCorrect;

    }

    shouldComponentUpdate(a, b) {
        return JSON.stringify(a) !== JSON.stringify(this.props)
    }

    componentWillUpdate() {
        document.querySelectorAll('li.answerText').forEach((li) => {
            li.classList.remove('answer-correct', 'answer-incorrect')
        })

    }

    getListItems() {

        let listItems = this.props.verbTablesArray.map((vt, idx) => {

            let classNameString = 'answerText';

            classNameString += this.isCorrect(vt) ? ' correct' : '';

            return <li
                key={idx}
                className={classNameString}
                onClick={this.props.checkAnswer}>{vt[this.props.personIdx][1]}
            </li>;

        });

        return VerbUtils.getShuffledVerbArray(listItems);

    }

    // Fisher-Yates (aka Knuth) Shuffle.
    // see https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    //
    shuffleArray(array) {

        var currentIndex = array.length,
            temporaryValue,
            randomIndex;

        while (0 !== currentIndex) {


            randomIndex = Math.floor(Math.random() * currentIndex);

            currentIndex -= 1;

            temporaryValue = array[currentIndex];

            array[currentIndex] = array[randomIndex];

            array[randomIndex] = temporaryValue;

        }

        return array;

    }

    showVerbTable() {
        // apply transition to answerTable and answerListContainer
        const revealer = document.querySelector('.revealer');
        revealer.classList.toggle('is-transitioned')
        const answerListContainer = document.querySelector('.answerListContainer');
        const answerTable = document.querySelector('.answerTable')
    }

    render() {

        return (
            <div style={{ position: "relative" }}>
                <div className="revealer">
                    <div className="answerListContainer">
                        <ul id="answerList">
                            {this.getListItems()}
                        </ul>

                    </div>
                    <div className="answerTable">
                        <VerbDisplayTable
                            verbTablesArray={this.props.verbTablesArray} />
                    </div>

                </div>
                <div className="verbTableLinkContainer">
                    <a href="#" className="verbTableLink" onClick={this.showVerbTable}>
                        View Verb Table
                        </a>
                </div>
            </div>
        );

    }

}

export default DisplayAnswers;
