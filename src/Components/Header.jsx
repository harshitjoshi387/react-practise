import React from 'react'

const Header = (props) => {
    function click(){
        alert("button clicked")
    }
    
  return (
    <div>
      <h1>hello from {props.name}</h1>
      <button onClick={click}>Click me</button>
    </div>
  )
}

export default Header
