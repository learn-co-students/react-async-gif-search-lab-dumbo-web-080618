import React from 'react'



  const gifList = (props) => {

    const url = props.gifs.map(gif => <img src={gif.images.original.url} alt="" />)
    console.log(props.gifs)
    return (
      <ul>
        <li>
          {url}
        </li>
      </ul>

    )
  }
  export default gifList
