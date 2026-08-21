import React from 'react'

const Card = (props) => {
  return (
    <div className="parent">
      <div className="card">
        <img src="https://images.unsplash.com/vector-1754829494850-95549a50701f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8REpZODZOOThJMGN8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>{props.name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>view profile</button>
        </div>
    </div>
  )
}

export default Card