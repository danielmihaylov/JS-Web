import React, { Component } from 'react';
import './App.css';

import Slider from './components/Slider';
import Rooster from './components/Rooster';
import View from './components/View';

import observerMenu from './utils/observer';

class App extends Component {
  constructor(){
    super()
    this.state ={
      focusedChar:0
    }

    this.eventHandler = (newState) => {
      this.setState(newState)
    }
  }

  componentDidMount(){
    observerMenu.addObserver('changeFocus',this.eventHandler)
  }

  render() {
    return (
      <div className="App">
        <Slider />
        <Rooster />
        <View params={({})}/>
      </div>
    );
  }
}

export default App;
