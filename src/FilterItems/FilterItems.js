import React, {Component} from 'react';
import './NewItem.css';


class NewItem extends Component {
  constructor (props) {
    super(props)
    this.createItem = this.createItem.bind(this);
    this.state = {

    };
    const newDate = new Date();
    this.today = `${newDate.getMonth()}/${newDate.getDate()}/${newDate.getFullYear()}`

  }

  createItem(event) {
    event.preventDefault();
    const newItem = {
      title: this.title.value,
      author: this.author.value,
      readDate: this.readDate.value,
      format: this.format.value
    }
    this.props.addMediaItem(newItem)
  }
  render() {
    return (
      <form className="item-add" onSubmit={(e)=>this.createItem(e)}>
        <select ref={(input)=>this.format=input}>
          <option value="book">Book</option>
          <option value="movie">Movie</option>
        </select>
        <input ref={(input)=>this.title=input} placeholder="Book/Movie Title" type="text"/>
        <input ref={(input)=>this.author=input} placeholder="Author/Director" type="text"/>
        <input ref={(input)=>this.readDate=input} placeholder={this.today} type="date"/>
        <button type="submit">Enter</button>
      </form>
    )
  }
}

export default NewItem;
