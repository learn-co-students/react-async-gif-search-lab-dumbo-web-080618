import React from 'react'
import GifListContainer from '../containers/GifListContainer'
import NavBar from './NavBar'

// the App component should render out the GifListContainer component 

function App() {
  return (
    <React.Fragment>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer/>
    </React.Fragment>
  )
}

export default App
