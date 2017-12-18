import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div className="App">
            <Home title='To Do List'/>
      </div>
    );
  }
}

export default App;
