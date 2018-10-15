import React, { Component } from 'react'


export default class GifSearch extends Component {

  render(){
    return (
      <form onSubmit={(e) => this.props.handleSubmit(e)}>
        <label>Enter a Search Term</label>
        <input type="text" name="text" />
        <input type="submit" />
      </form>
    )
  }
}
