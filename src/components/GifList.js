import React from 'react';

const GifList = (props) => {
  console.log(props)
  return (
    <div>
      <p>GifList Area</p>
      <ul>
        {props.gifs.map(gif => <Gif key={gif.id} gif={gif} />)}
      </ul>
    </div>
  )
}

const Gif = (props) => {
  console.log(props.gif)
  return (
    <li>
      <img src={props.gif.images.original.url} alt={props.gif.slug}/>
    </li>
  )
}


export default GifList;
