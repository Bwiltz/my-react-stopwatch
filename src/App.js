import React, { Component } from 'react';
import nic_sig from './img/nic_signature.png';
import './App.scss';

import Stopwatch from './stopwatch/components/Stopwatch';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Stopwatch />
        <h1 className="app-title-small">The Signature Series 'Nicolas Cage' Stopwatch</h1>
        <img src={nic_sig} className="signature"></img> 
      </div>
    );
  }
}

export default App;