import React, { Component } from 'react';
import Quiz from './components/quiz/Quiz'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h3 style={{"backgroundColor": "#222", "height": "auto", "padding": "20px", "color": "white"}}>Italian Verb Quiz</h3>
          <Quiz />
      </div>
    );
  }
}

export default App;
