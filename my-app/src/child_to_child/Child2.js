import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Child2 extends React.Component {
    constructor(props) {
      super(props)
      console.log("I am from child2 constuctor");
      this.state = {
        instrument : 'Guitar'
      }
    }

    handleChildClick() {
        console.log("In handlechild click function");
    }

    render() {
        console.log("I am from render method of child");
        return (
          <div>
            <h1>I know how to play {this.props.musicData}</h1>
          </div>
        );
      }
    }

export default Child2