import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Welcome to Mom's Library</h3>
      </div>
    );
  }
}

export default Navbar;
