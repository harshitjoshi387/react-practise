import React from 'react'
import Navbar from './components/Navbar'
import Aside from './components/Aside'
import Main from './components/Main'

const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="content-container">
        <Aside />
        <Main />
      </div>
    </div>
  )
}

export default App