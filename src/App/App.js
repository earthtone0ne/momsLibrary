import React, { Component } from 'react';
import '../App/App.css';
import Navbar from '../Navbar/Navbar';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer'
import ItemList from '../ItemList/ItemList'

class App extends Component {
  constructor() {
    super();
    this.addMediaItem = this.addMediaItem.bind(this);
    this.removeMediaItem = this.removeMediaItem.bind(this);
  }

  addMediaItem(item) {
    const mediaCollection = JSON.parse(localStorage.getItem('mediaCollection'));
    mediaCollection.push(item);
    localStorage.setItem('mediaCollection', JSON.stringify(mediaCollection))
    console.log('added\n', item)
  }

  removeMediaItem(item) {
    console.log('removed\n', item)
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Menu />
        <article>
          <ItemList
            addMediaItem={this.addMediaItem}
            removeMediaItem={this.removeMediaItem} />
        </article>
        <Footer />
      </div>
    );
  }
}

export default App;
