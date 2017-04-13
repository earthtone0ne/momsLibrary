import React, {Component} from 'react';
import Item from '../Item/Item'
// import './ItemList.css';

class ItemList extends Component {
  constructor () {
    super()
    this.coll = JSON.parse(localStorage.getItem('mediaCollection'));
    this.handleFilter = this.handleFilter.bind(this);
    this.state = {
      filteredItems: this.coll.slice(0)
    };
  }

  handleFilter(event) {
    const filterTerm = event.target.dataset.filter;
    let result;
    if (filterTerm === 'all') {
      result = this.coll.slice(0);
    }
    else {
      result = this.coll.filter(
        (item) => item.format.indexOf(filterTerm) > -1)
      }
    this.setState({filteredItems: result});
  }

  //add better key to items when ID is generated. Using date as placeholder
  render() {
    return (
      <div>
        <div className="filter-items">
          <button data-filter="book" onClick={(e)=>this.handleFilter(e)}>Books</button>
          <button data-filter="movie" onClick={(e)=>this.handleFilter(e)}>Movies</button>
          <button data-filter="all" onClick={(e)=>this.handleFilter(e)}>All</button>
        </div>
        <div className="item-list">
          {this.state.filteredItems.map((item)=> <Item item={item} key={item.readDate}/>)}
        </div>
      </div>
    )
  }
}

export default ItemList;
