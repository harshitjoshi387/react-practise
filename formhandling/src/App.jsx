import React from 'react'

import { useForm } from "react-hook-form"

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit =(data)=>console.log(data)
  return (
   <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register("email",{required:true})} />
    <input {...register("password",{required:true,minLength:6})} 
    
    />
    {errors.password && <p>password kam se kam 6 character</p>}
    <button type="submit">submit</button>
   </form>
  )
}

export default App