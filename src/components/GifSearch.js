import React from 'react';

const GifSearch = (props) => {
  const {handleChange, handleSubmit} = props
  return (
    <div onSubmit={handleSubmit}>
      <form>
        <input onChange={handleChange} type="text" />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default GifSearch;
