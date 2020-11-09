import './App.css';
import { Component } from 'react';
import React from 'react'
import Person from './Person/Person'





class App extends Component{

  render(){

    return(
      <div className="App">
        <p >This is Header</p>
        <Person/>
        <p>SHIVAM</p>
      </div>
    
    )

    // return React.createElement('div',{className:'App'},'This is React create component');
  }

}

export default App;
