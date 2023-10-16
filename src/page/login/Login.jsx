import { useContext, useState } from "react"
import "./login.css"

const Login = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [error, setError] = useState(null)

  const login = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password are required.");
    } else if (email === "user@gmail.com" && password === "password123") {
      alert("Login success");
    } else {
      setError("Wrong email or password");
    }
  };

  return (
    <div className="login">
        <div className="container">
           <form onSubmit={login}>
              <h1>Sign In</h1>
              <input type={"email"} placeholder="email" onChange={(e)=>setemail(e.target.value)} required/>
              <input type={"password"} placeholder="password" onChange={(e)=>setpassword(e.target.value)} required/>
              <button className="login-button">Sign in</button>
              {error&& <p className="login-error">{error}</p>}

           </form>
        </div>
    </div>
  )
}

export default Login