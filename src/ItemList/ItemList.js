import React, {Component} from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import bookIcon from '../assets/open-book.svg';
import movieIcon from '../assets/film-reel.svg';
import globeIcon from '../assets/internet.svg';


class ItemList extends Component {
  constructor (props) {
    super(props);
    this.handleFormatFilter = this.handleFormatFilter.bind(this);
    this.state = {
      formatFilter: 'all',
      textFilter: ''
    };
  }

  handleFormatFilter(e) {
    e.stopPropagation();
    const formatFilter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    // return if target was not a button
    if (!formatFilter) {return;}
    this.setState({formatFilter})
  }
  filterList(item){
    if(this.state.formatFilter === 'all' || item.format === this.state.formatFilter) {
      return (
        <Item item={item} key={item.readDate}
          removeMediaItem={this.props.removeMediaItem}/>
      )}
  }

  //TODO: add better key to items when ID is generated. Using date as placeholder
  render() {
    return (
      <div>
        <div className="filter-items" onClick={(e)=>this.handleFormatFilter(e)}>
          <button data-filter="book">
            <img src={bookIcon} alt="book"/>
            Books</button>
          <button data-filter="movie">
            <img src={movieIcon} alt="movie"/>
            Movies</button>
          <button data-filter="all">
            <img src={globeIcon} alt="everything"/>
            View All</button>
        </div>
        <div className="item-list">
          {this.props.allMedia.map((item)=>this.filterList(item))}
        </div>
      </div>
    )
  }
}

export default ItemList;
