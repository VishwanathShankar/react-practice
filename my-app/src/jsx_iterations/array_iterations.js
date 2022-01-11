import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Parent extends React.Component {
  constructor() {
    super()
    console.log("I am from constuctor");
    this.state = {
      instrument : 'Guitar',
      unknownInstruments: ['violin', 'piano', 'veena', 'flute']
    }
  }

  

  render() {
    console.log("I am from render method");
    return (
        <div>
          <h1>I know how to play {this.state.instrument}</h1>
          <h1>Guitar</h1>
          {
            this.state.unknownInstruments.map((element, index) => { 
              return <p key={index}>{element}</p>
            })
          }
        </div>
      );
    
  }
}
// ========================================

ReactDOM.render(
  <Parent NewInstrument="Drums"  />,
  document.getElementById('root')
);


  