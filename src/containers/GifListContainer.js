import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const url_part1 = 'http://api.giphy.com/v1/gifs/search?q='
const url_part2 = '&api_key=dc6zaTOxFJmzC&rating=g'

class GifListContainer extends Component {

  constructor() {
    super()
    this.state = {
      gifs: [],
      searchTerm: 'cats'
    }
    this.url = `http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`
  }
  componentDidMount() {
    fetch(this.url)
    .then(res => res.json())
    .then(gifs =>this.setState({ gifs: gifs.data }))
  }

  handleChange = (searchTerm) => {
    if (searchTerm === "") {
      searchTerm = 'cats'
    }
    fetch(`${url_part1}${searchTerm}${url_part2}`)
      .then(res => res.json())
      .then(gifs =>this.setState({ gifs: gifs.data }))
  }

  render() {

    return (
      <div>
        <GifSearch handleChange={this.handleChange}/>
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }

}

export default GifListContainer;
