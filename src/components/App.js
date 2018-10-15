import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component
//  this is how to limit the page to a certain amount ?_limit=50&_page=${c}

function App() {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
      <GifListContainer />
    </div>
  )
}

export default App
