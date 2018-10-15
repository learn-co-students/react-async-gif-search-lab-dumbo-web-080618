import React from 'react'
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"


export default class GifListContainer extends React.Component {
  state = {
    word: "cat",
    items: []
  }

  componentDidMount() {
    this.handleFetch()
  }

  handleOnChange = (arg) => {
    this.setState({
      word:arg
    })

  }

  handleFetch = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.word}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(response => response.json())
    .then(data => this.setState({items:data.data},()=> console.log(this.state.items)))

  }

  render(){
    return(
      <div>
        <GifSearch handleSearch={this.handleFetch} handleOnChange={this.handleOnChange}/>
        <GifList gifs={this.state.items} />
      </div>
    )
  }
}
