import React, { Component } from 'react';
import './App.css';
import ToggleButton from './components/ToggleButton';
import FocusDiv from './components/FocusDiv';
import Form from './components/form/Form';
import Converter from './components/converter/Converter';
import List from './components/form/List';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {value:true}
  }

  render() {
    return (
      <div className="App">
        <List>
          {['Pesho','Gosho','Vasil'].map(u => {
            return <li key={u}>{u}</li>
          })}
        </List>
        {this.state.value ? <Converter/>: null}       
        <Form/>
        <ToggleButton />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {[1,2,3,4].map((n,i) => {
          return(
          <FocusDiv key={i} number={n}>
            <p>I made this</p>
          </FocusDiv>
          )
        })}
      </div>
    );
  }
}

export default App;
