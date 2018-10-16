import React, { Component } from 'react';

class GifList extends Component {

  render() {
    console.log("hey")
    const li = this.props.gifs.map(gif => <li><img src={gif.images.original.url} /> </li>)
    return (
      <ul>{li}</ul>
    );
  }

}

export default GifList;
