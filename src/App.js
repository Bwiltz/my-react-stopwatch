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
    status: true,
    runningTime: 0
  };
  handleClick = () => {
    this.setState({ runningTime: 5, running: true });
  };
  handleReset = () => {
    this.setState({ runningTime: 0, running: false });
  };
  render() {
    const { status, runningTime } = this.state;
    return (
      <div>
        <p>{runningTime}ms</p>
        <button onClick={this.handleClick}>{status ? 'Stop' : 'Start'}</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default App;