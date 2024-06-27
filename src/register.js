import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
  const[userData , setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {...prevState,[e.target.name]: e.target.value}
    })
  }
  return (
    <div className="register_component">
        <div className="register_content">
        <h2>Sign Up</h2>
        <form className="form register_form">
          <input type="text" placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandler}/>
          <input type="text" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler}/>
          <input type="text" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler}/>
          <input type="text" placeholder='Confirm Password' name='password2' value={userData.password2} onChange={changeInputHandler}/>
          <button type='submit' className='btn primary'>Register</button>
        </form>
        <small>Already have an account ? <Link to='/login'>Sign In</Link></small>
        </div>
        
      </div>
  )
}

export default Register