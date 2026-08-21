import React from 'react'

const App = () => {

  function buttonClick(){
    alert("button is clicked")
  }
  // function change(e){
  //   console.log(e.target.value)
  // }
  return (
    <div>
      <form action="">
        <input onChange={function(e){
          console.log(e.target.value);
          
        }} type="text" placeholder='enter your name ' />
      </form>
      <button onClick={buttonClick}>click me </button>
    </div>
  )
}

export default App