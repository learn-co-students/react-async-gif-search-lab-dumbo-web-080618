import React from 'react'
const GifList = (props)  => {

  return (
    <ul>
      {handleGifs(props)}
    </ul>
  )
}
function handleGifs(props){
  return props.gifs.map(gif =>
    <li key={gif.slug}><img src={gif.images.original.url} alt={gif.slug}/></li>)
}
export default GifList