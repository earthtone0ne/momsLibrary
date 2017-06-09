import React, {Component} from 'react';
import './Menu.css';
import NewItem from '../NewItem/NewItem';

class Menu extends Component {
  render () {
    return (
      <div id="main-menu">
        <NewItem
          allItems={this.props.allMedia}
          addMediaItem={this.props.addMediaItem}
          />
      </div>
    );
  }
};

export default Menu;
