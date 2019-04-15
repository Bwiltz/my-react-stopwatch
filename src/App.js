// src/App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Stopwatch</h1>
        <Stopwatch status={false} runningTime={0} />
      </div>
    );
  }
}

function Stopwatch({ status, runningTime }) {
  return (
    <div>
      <p>{runningTime}ms</p>
      <button>{status ? 'Stop' : 'Start'}</button>
      <button>Reset</button>
    </div>
  );
}

export default App;