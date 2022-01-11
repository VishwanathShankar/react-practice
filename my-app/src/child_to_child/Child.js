import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Child extends React.Component {
    constructor(props) {
      super(props)
      console.log("I am from child constuctor");
      this.state = {
        instrument : 'Guitar'
      }
    }

    handleChildClick() {
        console.log("In handlechild click function");
        this.props.parentMethod("flute");
    }

    render() {
        console.log("I am from render method of child");
        return (
          <div>
            <h1>I know how to play {this.state.instrument}</h1>
            <button onClick={this.handleChildClick.bind(this)} >Click me to send data to parent component</button>
          </div>
        );
      }
    }

export default Child