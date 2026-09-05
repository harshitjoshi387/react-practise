import React,{useState} from 'react'

const App = () => {
  const [count, setcount] = useState(0)
  return (
    <div>
      <h1>Multiple conditional in React js</h1>
      <button onClick={() => setcount(count + 1)}>count {count}</button>
      {count === 0 ? <p>zero</p> : count === 1 ? <p>one</p> : <p>more than one</p>}
    </div>
  )
}

export default App