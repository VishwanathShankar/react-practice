import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Music extends React.Component {
  constructor() {
    super()
    console.log("I am from constuctor");
    this.state = {
      instrument : 'Guitar'
    }
  }

  /*
  static getDerivedStateFromProps(props, state){
    console.log("I am from getDerivedStateFromProps");
    return {
      instrument: props.NewInstrument
    }
  }
  */

  componentDidMount() {
    console.log("I am from componentDidMount");
    setTimeout(() => {
      this.setState({instrument: "Violin"})
    }, 2000);
    
  }

  
  shouldComponentUpdate() {
    console.log("I am from shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("I am from getSnapshotBeforeUpdate");
    document.getElementById("containter-1").innerHTML = "Before the update, the instrument was "+ prevState.instrument;
    return null;
  }

  componentDidUpdate() {
    console.log("I am from componentDidUpdate");
    document.getElementById("containter-2").innerHTML = "The updated insyrument is "+  this.state.instrument;

  }

  componentWillUnmount() {
    console.log("I am from componentWillUnmount");
  }

  removeDomEmlements() {
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(document.getElementById("root"));
    }, 5000);
  }

  render() {
    console.log("I am from render method");
    return (
      <div>
        <h1>I know how to play {this.state.instrument}</h1>
        {this.removeDomEmlements()}
        <div id="containter-1"></div>
        <div id="containter-2"></div>
      </div>
    );
  }
}
// ========================================

ReactDOM.render(
  <Music NewInstrument="Drums"  />,
  document.getElementById('root')
);


  