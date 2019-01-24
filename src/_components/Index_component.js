import React, { Component } from 'react';
import logo from './../_images/logo.svg';
import './../_styles/App.css';

class IndexComponent extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            پروژه آفتابگردون در همینجا شروع میشه 
          </p>
          <p>
            منتظر ما باشین
          </p>
        </header>
      </div>
    );
  }
}
export { IndexComponent };
