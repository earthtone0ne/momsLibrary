import React, {Component} from 'react';
import './NewItem.css';
import bookIcon from '../assets/open-book.svg';
import movieIcon from '../assets/film-reel.svg';

class NewItem extends Component {
  constructor (props) {
    super(props)
    this.createItem = this.createItem.bind(this);
    this.changeIcon = this.changeIcon.bind(this);
    this.showIcon = this.showIcon.bind(this);
    this.toggleIcon = this.toggleIcon.bind(this);
    this.state = {
      format: 'book'
    };
    // const newDate = new Date();
    // this.today = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()}`
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
  changeIcon(e) {
    this.setState({format: e.target.value});
  }
  toggleIcon() {
    this.state.format === "book" ?
      this.setState({format: "movie"}) :
      this.setState({format: "book"})       
  }
  showIcon() {
    return this.state.format === "book" ?
      <img src={bookIcon} onClick={this.toggleIcon} alt="book"/> :
      <img src={movieIcon} onClick={this.toggleIcon} alt="movie"/>
  }
  render() {
    return (
      <form className="item-add" onSubmit={(e)=>this.createItem(e)}>
        <h2>Quick Add</h2>
        <div className="item-add-select">
          {this.showIcon()}
          <select
            ref={(input)=>this.format=input}
            onChange={this.changeIcon}
            value={this.state.format} >
            <option value="book">Book</option>
            <option value="movie">Movie</option>
          </select>
        </div>
        <input ref={(input)=>this.title=input} placeholder={`Title of ${this.state.format}`} type="text"/>
        <input ref={(input)=>this.author=input} type="text"
            placeholder={this.state.format === 'book' ? 'Author' : 'Director'}
          />
        <div className="new-item-date">
          <label htmlFor="new-item-date">
            {this.state.format === 'book' ? 'Read: ' : 'Watched: '}
          </label>
          <input ref={(input)=>this.readDate=input} id="new-item-date" type="date"/>
        </div>
        <button type="submit">Enter</button>
      </form>
    )
  }
}

export default NewItem;
