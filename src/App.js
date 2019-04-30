import React, { Component } from 'react';
import './App.css';

import Stopwatch from './stopwatch/components/Stopwatch';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 class="app-title">Simple Stopwatch App</h1>
        </div>
        <Stopwatch />
      </div>
    );
  }
}

export default App;