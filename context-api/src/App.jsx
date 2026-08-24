import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setdata] = useState('')

  const getData = async () => {
    const response = await axios.get("http://localhost:3000/data")
    console.log(response.data)
    setdata(response.data)
  }

  return (
    <div>
      <button onClick={getData}>click me</button>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}

export default App