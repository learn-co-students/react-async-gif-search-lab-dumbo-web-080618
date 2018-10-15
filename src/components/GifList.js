import React, { Component } from 'react'


export default class GifList extends Component {

  render(){
    const gifCards = this.props.gifResult.map((gif) => {
      return (<img src={gif.images.original.url} key={gif.id} alt={gif.slug} />)
    })
    return (
      <div>
        {gifCards}
      </div>
    )
  }
}
