import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Parent extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'My name is Vishwanath'
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
// ========================================

ReactDOM.render(
  <Parent />,
  document.getElementById('root')
);


  