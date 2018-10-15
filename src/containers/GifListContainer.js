import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';


class GifListContainer extends Component{
  constructor() {
    super()
    this.state = {
      gifs: [],
      search: 'cats'
    };
  }

  onChangeValue = (search_key) =>{
    this.setState({
      search: search_key
    })
  }

  componentDidMount(){
    this.handleFetch()
  }

  onSubmitValue = () => {
    this.handleFetch()
  }

  handleFetch = () => {
    let URL = `http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`
    fetch(URL).then(res => res.json()).then(gifs => this.setState({ gifs:gifs.data }))
  }

  render(){
    return (
      <div>
        <p>GifListContainer Area</p>
        <GifSearch  onChangeValue={this.onChangeValue} onSubmitValue={this.onSubmitValue}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }

}

export default GifListContainer;
