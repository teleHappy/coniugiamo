import React, {Component} from 'react';
import Quiz from './components/quiz/Quiz';
import './App.css';

class App extends Component {

    render () {

        return (
            <div className="App">
                <div className="appHeader">
                    <h1>Italian Verb Quiz</h1>
                </div>
                <Quiz />
            </div>
        );

    }

}

export default App;
