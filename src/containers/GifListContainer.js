import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
    gifs: [],
    searchTerm: 'fish'
  }

  handleFetch = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(data => this.setState({gifs: data.data}))
  }

  componentDidMount() {
    this.handleFetch()
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.handleFetch()
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <GifSearch
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <GifList gifs={this.state.gifs}/>
      </div>
    );
  }
}

export default GifListContainer;
