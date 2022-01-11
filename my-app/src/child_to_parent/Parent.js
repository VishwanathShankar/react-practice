import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Child from './Child'

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
  }

  

  render() {
    console.log("I am from render method");
    return (
      <div>
        <h1>I know how to play {this.state.instrument}</h1>
        <Child parentMethod={this.parentFunction.bind(this)}></Child>
      </div>
    );
  }
}
// ========================================

ReactDOM.render(
  <Parent NewInstrument="Drums"  />,
  document.getElementById('root')
);


  