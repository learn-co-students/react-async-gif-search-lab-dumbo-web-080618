import React, { Component } from 'react';

class GifSearch extends Component {

  // handleChange = (event) => {
  //   this.setState({searchTerm: event.target.value})
  //   this.props.handleChange(this.state.searchTerm)
  // }
  render() {
    return (
      <div>
        <input type="text" onChange={(event) => this.props.handleChange(event.target.value)}/>
      </div>
    );
  }

}

export default GifSearch;
