import React from 'react'

const App = () => {

  function buttonClick(){
    alert("button is clicked")
  }
  return (
    <div>
      <button onClick={buttonClick}>click me </button>
    </div>
  )
}

export default App