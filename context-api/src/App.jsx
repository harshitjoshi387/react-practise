import React, { useState } from 'react'

import Navbar from './components/Navbar'
import { counterContext } from './context/context'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <counterContext.Provider value={{ count, setCount }}>
      <div>
        <Navbar></Navbar>
      </div>
    </counterContext.Provider>
  )
}

export default App