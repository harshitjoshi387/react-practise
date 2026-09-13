
import React,{useState} from 'react'
import Component1 from './Component1'

const Button = () => {
    const [count, setcount] = useState(0)
  return (
    <>
    <div><h1>i am button</h1></div>
    <Component1/>
    </>
    
  )
}

export default Button