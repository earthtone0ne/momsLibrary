import React, {Component} from 'react';
import './Item.css';
import bookIcon from '../assets/open-book.svg';
import movieIcon from '../assets/film-reel.svg';

class Item extends Component {
  constructor(props){
    super(props);
    this.removeMediaItem = this.props.removeMediaItem.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
  }
  confirmDelete() {
    const conf = confirm(`Really delete ${this.props.item.title}?`)
    if (conf) {
      this.removeMediaItem(this.props.item.readDate);
    }
  }
  render() {
    let format = this.props.item.format;
    let verb = format === 'book' ? 'Read on' : 'Watched';
    let classFormat = "item item-"+format;
    let icon = format === 'book' ? bookIcon : movieIcon;

    return (
      <div className={classFormat}>
        <div className="item-icon">
          <img src={icon} alt={format}/>
        </div>
        <div className='item-remove'>
          <p onClick={this.confirmDelete}>X</p>
        </div>
        <div className="label">Title:</div>
        <div className="data">{this.props.item.title}</div>
        <div className="label">Author:</div>
        <div className="data">{this.props.item.author}</div>
        <div className="label">{verb}:</div>
        <div className="data">{this.props.item.readDate}</div>
      </div>
    )
  }
}

export default Item;
