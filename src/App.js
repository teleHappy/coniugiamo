import React, { Component } from 'react';
import Quiz from './components/Quiz'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3 style={{"backgroundColor": "#222", "height": "auto", "padding": "20px", "color": "white"}}>This project is a work in progress.</h3>
        <p style={{"padding": "20px", "color": "#222"}}>The UI is currently non-representational while the basic verb functionality is being developed. See the README.md file in root of repo for getting started</p>
        <Quiz />
      </div>
    );
  }
}

export default App;
