import React, {Component} from 'react';

const QUESTION_TEXT_CONTAINER_TIMEOUT = 200;

class DisplayQuestion extends Component {

    
    render () {

        return (
            <div className="questionTextWrapper">
                
                    <p className="questionText">
                        Which is the correct
                        <span className="param">&nbsp;{this.props.pronoun}</span> form for the
                        <span className="param">&nbsp;{this.props.tense}</span> tense of
                        <span className="param">&nbsp;{this.props.verbName}</span>?
                    </p>
                </div>
            
        );

    }


}

export default DisplayQuestion;
