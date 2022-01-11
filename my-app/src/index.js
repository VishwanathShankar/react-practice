import React from 'react';
import ReactDOM from 'react-dom';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './index.css';

class Parent extends React.Component {
  constructor() {
    super()
    console.log("I am from constuctor");
    this.state = {
      instrument : 'Guitar',
      rederFirstPart: true,
      musicalInstruments: ["flute", "mouth organ", "violin"]
    }
  }

  

  render() {
    console.log("I am from render method");
      return this.state.rederFirstPart? (
        <div>
          <h1>this the if success condition</h1>
          <h1>I know how to play {this.state.instrument}</h1>
          <Typeahead
              onChange={(selected) => {
                // Handle selections...
              }}
              options={this.state.musicalInstruments}
          />

          {
            this.state.musicalInstruments.map((element, index) => { 
              return <p key={index}>{element} </p>
            })

          }
        </div>
      )

      :
     
      (
        <div>
          <h1>this the else condition</h1>

          <h1>I know how to play {this.state.instrument}</h1>
          
        </div>
      )
    
  }
}
// ========================================

ReactDOM.render(
  <Parent NewInstrument="Drums"  />,
  document.getElementById('root')
);


  