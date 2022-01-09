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
  
  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
  
  class HelloWorld extends React.Component {

    
    render() {
        return (
            <div className="hello-world">
                Hello {formatName(user)}!
                {getGreeting(user)}
            </div>
        );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root')
  );
  