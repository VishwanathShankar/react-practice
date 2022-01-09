import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Child from './Child'

class Parent extends React.Component {
  name = "XYZ";
  render() {
    return (
      <div>I am a parent componet
        <Child parentName={this.name}></Child>
      </div>
    );
  }
}
// ========================================

ReactDOM.render(
  <Parent />,
  document.getElementById('root')
);


  