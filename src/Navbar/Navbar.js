import React, { Component } from 'react';
import logo from '../logo.svg';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Mom's Library</h2>
      </div>
    );
  }
}

export default Navbar;
