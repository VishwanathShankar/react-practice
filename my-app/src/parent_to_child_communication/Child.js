import React from 'react';
import ReactDOM from 'react-dom';

class Child extends React.Component {
    render() {
        return(
            <div>I am from child {this.props.parentName}</div>
        ); 
    }
}

export default Child