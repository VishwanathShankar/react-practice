import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var element1 = React.createElement('h1', null, "Hello World");
var element2 = React.createElement('button', null, "Click Me");

  
  
  // ========================================
  
  ReactDOM.render(
    [element1, element2],
    document.getElementById('root')
  );
  