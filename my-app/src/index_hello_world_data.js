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
            </div>
        );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root')
  );
  