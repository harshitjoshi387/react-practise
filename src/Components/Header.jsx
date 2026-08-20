import React, { useState} from 'react'

const Header = (props) => {
    
    const [count, setcount] = useState(0)
    function click(){
        setcount(count + 1)
    }
    const [king, setking] = useState("harsh")
    function changeKing(){
        setking("harshit")
    }
  return (
    <div>
      <h1>hello from {props.name}</h1>
      <p>Count: {count}</p>
      <p> {king}</p>
      <button onClick={changeKing}>Change King</button>
       <button onClick={click}>Click me</button>
    </div>
  )
}

export default Header
