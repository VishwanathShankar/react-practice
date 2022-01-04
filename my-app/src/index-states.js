import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const user = {
    firstName: 'Vishwanath',
    lastName: 'Shankar'
  };

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  

  class HelloWorld extends React.Component {

    
    render() {
        return (
            <div className="hello-world">
                Hello {formatName(user)}!

                <ChildComponent value="Super"></ChildComponent>
            </div>
        );
    }
  }

  class ChildComponent extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        "currentValue": null
      }
    }

    
    render() {
        return (
            <div className="child-component">
                {this.props.value}
                <h1>{this.state.currentValue}</h1>
                <button onClick={() => this.setState({"currentValue": 100})}>Click Me</button>
            </div>
        );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root')
  );
  