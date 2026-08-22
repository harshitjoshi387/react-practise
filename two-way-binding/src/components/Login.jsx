import React from 'react'


    const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="email" required />
        <input type="password" placeholder="password" required />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

 

export default Login