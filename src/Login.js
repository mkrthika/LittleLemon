import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const[userData , setUserData] = useState({
    email: '',
    password: '',
  })

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {...prevState,[e.target.name]: e.target.value}
    })
  }
  return (
    <div className="login_component">
      <div className="login_content">
      <h2>Sign In</h2>
        <form className="form login_form">
          <input type="text" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler}/>
          <input type="text" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler}/>
          <button type='submit' className='btn primary'>Login</button>
        </form>
        <small>Don't have an Account ? <Link to='/register'>Create a new account</Link></small>
      </div>
    </div>
  )
}

export default Login