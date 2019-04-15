// src/App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const { status, runningTime} = this.props;
    return (
      <div>
        <h1>Stopwatch</h1>
        <Stopwatch status={false} runningTime={0} />
      </div>
    );
  }
}
class Stopwatch extends Component {
  state = {
    status: false,
    runningTime: 0
  };
  render() {
    const { status, runningTime } = this.state;
    return (
      <div>
        <p>{runningTime}ms</p>
        <button>{status ? 'Stop' : 'Start'}</button>
        <button>Reset</button>
      </div>
    );
  }
}

export default App;