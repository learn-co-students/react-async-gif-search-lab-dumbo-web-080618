import React from 'react';

const GifList = (props) => {
  const gif = props.gifs.map(gif => <li key={gif.id}><img src={gif.images.original.url} alt=""/></li>)
  return (
    <ul>
      {gif}
    </ul>
  )
}

export default GifList;
