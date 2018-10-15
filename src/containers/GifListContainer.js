import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component{
  state = {
    gifs: []
  }

  gifSearch = (searchString) => {
    let search = searchString.split(' ').join('-')
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(json => {
        this.setState({gifs: [...json.data.slice(0,3)]})
      })
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <React.Fragment>
        <GifSearch searchHandler={this.gifSearch}/>
        <GifList gifs={this.state.gifs}/>
      </React.Fragment>
    )
  }
  
}
