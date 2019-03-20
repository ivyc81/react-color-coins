import React, { Component } from 'react';
import Table from './Table';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table numBox={16} />
        <Table/>
      </div>
    );
  }
}

export default App;
