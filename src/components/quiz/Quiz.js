import React, {Component} from 'react';
import Questions from '../question/Questions';

class Quiz extends Component {

    constructor () {

        super();
        this.state = {
            'checkAnswer': true,
            'correctAnswers': 0,
            'count': 0,
            'inProgress': false
        };
        this.startQuiz = this.startQuiz.bind(this);

    }

    startQuiz () {

        this.setState({
            'inProgress': true
        });

    }

    render () {

        const {inProgress, count} = this.state;

        return (
            <div className="quizBody">
                {!inProgress &&
                    <div className="startContainer">
                        <div className="introTextContainer">    
                            <p className="introText">Click Start Quiz to get Started</p>
                        </div>
                        <div className="startButtonContainer">
                            <button onClick={this.startQuiz}>Start Quiz</button>
                        </div>
                    </div>
                }
                {inProgress &&
                    <div className="questionContext">    
                        <Questions inProgress={inProgress}/>
                    </div>
                }
            </div>
        );

    }
}

export default Quiz;
