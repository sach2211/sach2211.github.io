import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Resume from './components/Resume';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div>
            <span className="name"> Sachin Chopra </span>
            <span  className="name-desc"> &lt;Software Developer, JS enthusiast, Travel freek, Bookworm &gt; </span>
          </div>
        </div>
        <Resume />
      </div>
    );
  }
}

export default App;
