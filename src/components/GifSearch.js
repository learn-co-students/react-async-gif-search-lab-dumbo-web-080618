import React, { Component } from 'react';

class GifSearch extends Component {

  state = {
    searchTerm: ''
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
    // this.props.handleChange(this.state.searchTerm)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state.searchTerm)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" value={this.state.searchTerm} />
        <input type="submit"/>
      </form>
    )
  }
}

export default GifSearch;
