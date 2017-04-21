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
    const allMedia = JSON.parse(localStorage.getItem('mediaCollection'));
    this.state = {
      allMedia
    }
  }

  addMediaItem(item) {
    const media = JSON.parse(localStorage.getItem('mediaCollection'));
    media.push(item);
    localStorage.setItem('mediaCollection', JSON.stringify(media))
    this.setState({allMedia: media})
  }

  removeMediaItem(key) {
    const media = JSON.parse(localStorage.getItem('mediaCollection'));
    const filteredMedia = media.filter((elem)=> elem.readDate !== key);
    console.log(key, "###", media, "###",filteredMedia)
    localStorage.setItem('mediaCollection', JSON.stringify(filteredMedia))
    this.setState({allMedia: filteredMedia})
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Menu />
        <article>
          <ItemList
            allMedia={this.state.allMedia}
            addMediaItem={this.addMediaItem}
            removeMediaItem={this.removeMediaItem} />
        </article>
        <Footer />
      </div>
    );
  }
}

export default App;
