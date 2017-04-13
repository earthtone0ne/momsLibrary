import React, {Component} from 'react';
import './Item.css';


class Item extends Component {
  render() {
    let format = this.props.item.format;
    let verb = format === 'book' ? 'Read' : 'Watched';
    let classFormat = "item item-"+format;
    return (
      <div className={classFormat}>
        <div className="label">Title:</div>
        <div className="data">{this.props.item.title}</div>
        <div className="label">Author:</div>
        <div className="data">{this.props.item.author}</div>
        <div className="label">{verb} on:</div>
        <div className="data">{this.props.item.readDate}</div>
      </div>
    )
  }
}

export default Item;
