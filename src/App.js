// src/App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Stopwatch</h1>
        <Stopwatch />
      </div>
    );
  }
}

function Stopwatch() {
  return (
    <div>
      <p>0ms</p>
      <button>Start</button>
      <button>Reset</button>
    </div>
  );
}

export default App;