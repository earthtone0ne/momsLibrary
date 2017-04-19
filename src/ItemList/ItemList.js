import React, {Component} from 'react';
import Item from '../Item/Item'
import './ItemList.css';
import bookIcon from '../assets/open-book.svg';
import movieIcon from '../assets/film-reel.svg';
import globeIcon from '../assets/internet.svg';

class ItemList extends Component {
  constructor () {
    super()
    this.coll = JSON.parse(localStorage.getItem('mediaCollection'));
    this.handleFilter = this.handleFilter.bind(this);
    this.state = {
      filteredItems: this.coll.slice(0)
    };
  }

  handleFilter(e) {
    e.stopPropagation();
    const filterTerm = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    let result;
    if (filterTerm === 'all') {
      result = this.coll.slice(0);
    }
    else {
      result = this.coll.filter(
        (item) => item.format.includes(filterTerm))
      }
    this.setState({filteredItems: result});
  }

  //TODO: add better key to items when ID is generated. Using date as placeholder
  render() {
    return (
      <div>
        <div className="filter-items" onClick={(e)=>this.handleFilter(e)}>
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
          {this.state.filteredItems.map((item)=> <Item item={item} key={item.readDate}/>)}
        </div>
      </div>
    )
  }
}

export default ItemList;
