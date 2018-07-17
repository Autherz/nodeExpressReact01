
import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';

class Header extends React.Component {
    render() {
      return (
        <React.Fragment>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </React.Fragment>
      );
    }
  }

  export default Header;