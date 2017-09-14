import React, {Component} from 'react';
import Quiz from './components/quiz/Quiz';
import './App.css';
class App extends Component {

    render () {

        return (
            <div className="App">
                <h3 style={{'backgroundColor': '#de3941',
                    'color': 'white',
                    'height': 'auto',
                    'padding': '20px'
                }}>Italian Verb Quiz
                </h3>
                <Quiz />
            </div>
        );

    }

}

export default App;
