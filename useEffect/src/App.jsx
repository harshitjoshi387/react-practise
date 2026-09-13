import React,{useEffect} from 'react'

const App = () => {
  useEffect(() => {
    
  alert("hey i am useEffect")
   
  }, [])
  
  return (
    <div>App</div>
  )
}

export default App