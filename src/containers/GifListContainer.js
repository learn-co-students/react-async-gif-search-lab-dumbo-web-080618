import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
    gifs: [],
    // searchTerm: ''
  }

  // handleChange = (value) => {
  //   this.setState({searchTerm: value})
  // }

  handleFetch = (term='fish') => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(data => this.setState({gifs: data.data}))
  }

  componentDidMount() {
    this.handleFetch()
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <GifSearch handleSubmit={this.handleFetch} handleChange={this.handleChange}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    );
  }
}

export default GifListContainer;
