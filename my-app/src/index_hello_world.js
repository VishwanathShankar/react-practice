import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  class HelloWorld extends React.Component {
    render() {
        return (
            <div className="hello-world">
                Hello World {alert("Hello World")}
            </div>
        );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root')
  );
  