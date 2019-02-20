import React, { Component } from 'react';
import Header from './components/Header'
import Intro from './components/Intro'
import Portfolio from './containers/Portfolio' 
import Radium, { StyleRoot } from 'radium';
import './App.css';

class App extends Component {
  render() {
    
    return (
      <StyleRoot>
        <Header/>
        <Intro/>
        <Portfolio/>
      </StyleRoot>
    );
  }
}

export default App;
