import React, { Component } from 'react';
import logo from './../_images/logo.svg';
import './../_styles/App.css';

class My404Component extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h2> 4 </h2>  
        <img src={logo} className="App-logo" alt="logo" />
        <h2> 4 </h2>  
        <p> Not </p> 
        <p> Find </p> 
        <p> ! </p> 
        </header>
      </div>
    );
  }
}
export { My404Component };
