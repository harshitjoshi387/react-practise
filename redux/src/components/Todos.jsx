import React from 'react'
import {useDispatch} from "../feature/todo/todoSlice"


const addtodoHandler= (e)=>{
    e.preventDefault()
    dispatch(addTodo(input.value))
    input.value=""
}
const Todos = () => {
  return (
    <div>Todos</div>
  )
}

export default Todos