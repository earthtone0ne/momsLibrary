import React, { Component } from 'react';
import '../App/App.css';
import Navbar from '../Navbar/Navbar';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer'
import ItemList from '../ItemList/ItemList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Menu />
        <article>
          <ItemList />
        </article>
        <Footer />
      </div>
    );
  }
}

export default App;
