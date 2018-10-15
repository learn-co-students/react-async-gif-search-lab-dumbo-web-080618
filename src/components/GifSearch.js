import React, { Component } from 'react';

export default class GifSearch extends Component {
  render(){
    return(
      <form onSubmit={this.props.handleSubmit}>
        <div className="form-group">
          <label htmlFor="searchTerm">Enter a Search Term: </label>
          <input type="text" className="form-control" id="searchTerm" name="searchTerm"/>
        </div>
        <button type="submit" className="btn btn-primary">Find Gifs</button>
      </form>
    )
  }
}
