import React, { Component } from 'react';
import Header from './components/Header'
import Intro from './components/Intro'
import Projects from './containers/Projects'
import './App.css';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Header/>
        <Intro/>
        <Projects/>
      </div>
    );
  }
}

export default App;
