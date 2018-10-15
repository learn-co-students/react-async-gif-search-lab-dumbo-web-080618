import React from 'react'


export default class GifSearch extends React.Component {
  state = {
    value: ""
  }

  handleChange = (e) => {
    this.setState({
      value:e.target.value
    })
    this.props.handleOnChange(this.state.value)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSearch()
    this.setState({
      value:""
    })

  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="Gif" value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value="Find Gifs"/>
      </form>
    )
  }
}
