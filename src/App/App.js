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

<<<<<<< Updated upstream
  removeMediaItem(item) {
    console.log('removed\n', item)
=======
  removeMediaItem(key) {
    const media = JSON.parse(localStorage.getItem('mediaCollection'));
    const filteredMedia = media.filter((elem)=> elem.readDate !== key);
    localStorage.setItem('mediaCollection', JSON.stringify(filteredMedia))
    this.setState({allMedia: filteredMedia})
>>>>>>> Stashed changes
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
