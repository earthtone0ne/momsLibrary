import React, {Component} from 'react';
import './TextFilter.css';

class TextFilter extends Component {
  constructor (props) {
    super(props)
    this.handleTextFilter = this.handleTextFilter.bind(this);
  
  }

  handleTextFilter(event) {
    event.preventDefault();
    this.props.filterByText(event.target.value)
  }
  render() {
    return (
      <form className="item-filter" onSubmit={(e)=>this.handleTextFilter(e)}>
        <input ref={(input)=>this.search=input} placeholder="Book/Movie Title" type="text"/>
        <button type="submit">Enter</button>
      </form>
    )
  }
}

export default TextFilter;
