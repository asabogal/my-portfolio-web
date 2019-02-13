import React, { Component } from 'react';
import Header from './components/Header'
import Intro from './components/Intro'
import Portfolio from './containers/Portfolio' 
import './App.css';

class App extends Component {
  render() {
    
    return (
      <div>
        <Header/>
        <Intro/>
        <Portfolio/>
      </div>
    );
  }
}

export default App;
