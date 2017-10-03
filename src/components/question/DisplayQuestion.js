/* eslint arrow-body-style: 0 */
import React, {Component} from 'react';

const QUESTION_TEXT_CONTAINER_TIMEOUT = 200;

class DisplayQuestion extends Component {

    componentDidMount () {

        document.getElementsByClassName('questionTextContainer')[0].style.display = 'block';

    }

    componentWillReceiveProps () {

        setTimeout(() => {

            document.getElementsByClassName('questionTextContainer')[0].style.display = 'block';

        }, QUESTION_TEXT_CONTAINER_TIMEOUT);


    }

    render () {

        return (
            <div className="questionTextWrapper">
                <div className="questionTextContainer">
                    <p className="questionText">Which is the correct <span className="param">{this.props.pronoun}</span> form for the <span className="param">{this.props.tense}</span> tense of <span className="param">{this.props.verbName}</span>?</p>
                </div>
            </div>
        );

    }


}

export default DisplayQuestion;
