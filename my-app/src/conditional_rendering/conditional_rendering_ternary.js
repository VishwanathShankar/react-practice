import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Parent extends React.Component {
  constructor() {
    super()
    console.log("I am from constuctor");
    this.state = {
      instrument : 'Guitar'
    }
  }

  parentFunction(data) {
    console.log("Received data "+data);
    this.setState({
      instrument: data
    })
  }

  

  render() {
    console.log("I am from render method");
    return this.state.instrument == "Guitar"? 
      (
        <div>
          <h1>I know how to play {this.state.instrument}</h1>
          <h1>Guitar</h1>
        </div>
      )
    
      : 
      
      (
        <div>
          <h1>I dont know how to play {this.state.instrument}</h1>
          <h1>Not Guitar</h1>
        </div>
      )
    
  }
}
// ========================================

ReactDOM.render(
  <Parent NewInstrument="Drums"  />,
  document.getElementById('root')
);


  