import React, {Component} from 'react';
import Quiz from './components/quiz/Quiz';
import './App.css';
import bulma from 'bulma';
class App extends Component {

    render () {

        return (
            <div className="App">
                <h1>Italian Verb Quiz</h1>
                <Quiz />
            </div>
        );

    }

}

export default App;
