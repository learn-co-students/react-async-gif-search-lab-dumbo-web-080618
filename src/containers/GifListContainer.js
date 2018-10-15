import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state={
    gifs:[],
  }

  setGifs = (gifs) => {
    let newGifs = [gifs[0], gifs[1], gifs[2]]
    this.setState({gifs:newGifs})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const searchTerm = e.target.children[0].children.searchTerm.value
    let url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`
    fetch(url)
      .then(res => res.json())
      .then(gifs => this.setGifs(gifs.data))
    e.target.children[0].children.searchTerm.value = ''
  }
  render(){
    return (
      <div>
        < GifList gifs={this.state.gifs} />
        < GifSearch handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default GifListContainer
