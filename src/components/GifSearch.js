import React, { Component } from 'react'
export default class GifSearch extends Component{
  state = {
    searchTerm: ''
  }

  handleSubmit = (evt) => {
    // pass along the current state if not an empty string
    evt.preventDefault()
    this.props.searchHandler(this.state.searchTerm)
    evt.target.querySelector('input').value = ""
  }

  handleChange = (evt) => {
    this.setState({searchTerm: evt.target.value})
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Enter a Search Term:</label><br/>
        <input
          name="searchTerm" 
          type="text"
          placeholder="search query"
          onChange={this.handleChange}
          />
        <input type="submit" />
      </form>
    )
  }
}