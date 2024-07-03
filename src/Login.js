import React, { useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom'

const Login = () => {
  const[userData , setUserData] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()
  const[error,setError] = useState("")

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {...prevState,[e.target.name]: e.target.value}
    })
  }
  
  const handleLogin = (e) => {
    e.preventDefault();
    if(userData.email !== "admin@gmail.com" || userData.password !== "admin") return setError("Please enter valid Username and password");
    else {
      navigate("/")
      localStorage.setItem("auth",true)
    }
  }

  
    
  
  return (
    <div className="login_component">
      <div className="login_content">
      <h2>Sign In</h2>
      <div>For Reviewers :- To Login please use Email : admin@gmail.com and Password: admin</div>
        <form className="form login_form" onSubmit={handleLogin}>
          {error.length > 0 && <div style = {{marginBottom: "10px", color: "red"}}>{error}</div>}
          <input type="email" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler} required/>
          <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler} required/>
          <button type='submit' className='btn primary'>Login</button>
        </form>
        <small>Don't have an Account ? <Link to='/register'>Create a new account</Link></small>
      </div>
    </div>
  )
}

export default Login