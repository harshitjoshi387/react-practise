import react,{useState} from 'react'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="email" 
          required 
          value={email} 
          onChange={(e) => {
            setEmail(e.target.value)
            console.log(e.target.value)
          }} 
        />
        <input 
          type="password" 
          placeholder="password" 
          required 
          value={password} 
          onChange={(e) => {
            setPassword(e.target.value)
            console.log(e.target.value)
          }} 
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
  
};
export default Login;