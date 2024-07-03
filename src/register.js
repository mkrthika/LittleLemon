import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
  const[userData , setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })
  const[error,setError] = useState("")
  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {...prevState,[e.target.name]: e.target.value}
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(userData.password !== userData.password2){
      setError("Passwords are not matching")
    }
    else{
      setError("")
    }
  }
  return (
    <div className="register_component">
        <div className="register_content">
        <h2>Sign Up</h2>
        <form className="form register_form" onSubmit={handleSubmit}>
          <input type="text" placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandler} required/>
          <input type="email" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler} required/>
          <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler} required/>
          <input type="password" placeholder='Confirm Password' name='password2' value={userData.password2} onChange={changeInputHandler} required/>
          <div style = {{color: "red"}}>{error}</div>
          <button type='submit' className='btn primary'>Register</button>
        </form>
        <small>Already have an account ? <Link to='/login'>Sign In</Link></small>
        </div>
        
      </div>
  )
}

export default Register