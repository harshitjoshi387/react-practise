import React,{useState,useEffect,useRef} from 'react'

const App = () => {
  const [count, setcount] = useState(0)
   const a = useRef(0)
  function change(){
    setcount(count+1)
  }

  useEffect(() => {
     
    a.current = a.current+1
  alert(`rendering and the value of a.current is ${a.current}`)
    
  }, [count])
  
  return (
    <div>
      <button onClick={change}> count {count}</button>
    </div>
  )
}

export default App