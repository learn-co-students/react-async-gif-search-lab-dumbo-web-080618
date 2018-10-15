import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

  constructor() {
    super()
    this.state = {
      gifResult: [],
      searchTerm: ""
    }
  }

  // componentDidUpdate() {
  //   fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
  //   .then(res=>res.json())
  //   .then((resObj)=> {
  //     const gifResult = resObj.data.slice(0, 3)
  //     this.setState({ gifResult })
  //     console.log(this.state)
  //   })
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://api.giphy.com/v1/gifs/search?q=${e.target.text.value}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res=>res.json())
    .then((resObj)=> {
      const gifResult = resObj.data.slice(0, 3)
      this.setState({ gifResult })
    })
  }

  // componentDidMount() {
  //   const URL = `http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`
  //   fetch()
  // }

  render() {
    return (
      <div>
        < GifSearch handleSubmit={this.handleSubmit}/>
        < GifList gifResult={this.state.gifResult}/>
      </div>
    )
  }
}
