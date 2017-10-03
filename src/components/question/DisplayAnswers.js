/* eslint multiline-ternary: 0, no-ternary: 0, no-warning-comments: 0*/
import React, {Component} from 'react';

class DisplayAnswers extends Component {

    constructor (props) {

        super(props);

    }

    isCorrect (vt) {

        return vt[vt.length - 1].isCorrect;

    }

    getListItems () {

        const listItems = this.props.verbTablesArray.map((vt, idx) => {

            let classNameString = 'questionText';

            classNameString += this.isCorrect(vt) ? ' correct' : '';
            // TODO: event delagation

            return <li key={idx}
                className={classNameString}
                onClick={this.props.checkAnswer}>{vt[this.props.personIdx][1]}
            </li>;

        });


        return listItems;

    }

    componentDidMount () {

        this.answerList = document.getElementById('answerList');
        this.answerListContainer = document.getElementsByClassName('answerListContainer')[0];

        this.answerList.style.display = 'block';
        this.answerList.classList.add('fadeIn');

    }

    componentWillReceiveProps () {

        const that = this;

        setTimeout(() => {

            that.answerListContainer.style.visibility = 'visible';
            that.answerList.classList.add('fadeIn');

        }, 500);


    }

    render () {

        return (
            <div className="answerListContainer">
                <ul id="answerList">
                    {this.getListItems()}
                </ul>
            <div className="verbTableLinkContainer">
                <a href="#" className="verbTableLink" onClick={this.props.showVerbTable}>View Verb Table</a>
            </div>
            </div>
        );

    }

}

export default DisplayAnswers;
