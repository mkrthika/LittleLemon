import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Register = () => {
  const[userData , setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })
  const [error, setError] = useState({});
  const[valid,setValid] = useState(true)
  const navigate = useNavigate()
  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {...prevState,[e.target.name]: e.target.value}
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = false;
    let validationErrors = {}
    if(userData.name === "" && userData.email === "" && userData.password === "" && userData.password2 === ""){
      isValid = false;
      validationErrors.email =  "Please complete all the fields"
    }
    else if(!/\S+@\S+\.\S+/.test(userData.email)){
      isValid = false;
      validationErrors.email = "Email is not valid"
    }
    else if(userData.password !== userData.password2){
      validationErrors.password =  "Password is not same "
    }
    
    else{
      validationErrors.email =  ""
      await axios.post("http://localhost:7000/users" , userData)
      .then(result => {
        alert("Registered Successfully")
        navigate('/login')
        
      })
      
      .catch(err => console.log(err))
    }
    setError(validationErrors)
    setValid(isValid) 
    
  }
  return (
    <div className="register_component">
        <div className="register_content">
        <h2>Sign Up</h2>
        <form className="form register_form" onSubmit={handleSubmit}>
        {valid ? (
            <></>
          ) : (
            <span style = {{color: "red"}}> {error.email} <br/> {error.password}</span>
          )}
          <input type="text" placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandler} />
          <input type="text" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler} />
          <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler} />
          <input type="password" placeholder='Confirm Password' name='password2' value={userData.password2} onChange={changeInputHandler} />
          
          <button type='submit' className='btn primary'>Register</button>
        </form>
        <small>Already have an account ? <Link to='/login'>Sign In</Link></small>
        </div>
        
      </div>
  )
}

export default Register