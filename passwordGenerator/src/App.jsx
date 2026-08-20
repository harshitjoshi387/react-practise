import React from 'react'
import { useState } from 'react'


const App = () => {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  return (
    <div>
      <h1>Password Generator</h1>
    </div>
  )
}

export default App