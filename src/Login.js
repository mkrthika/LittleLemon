import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const[valid,setValid] = useState(true)

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let isValid = false;
    let validationErrors = {}
    let count = 0;
    if (userData.email === "" || userData.email === null) {
      isValid = false;
      validationErrors.email =  "Email is required"
    } 
    else if(!/\S+@\S+\.\S+/.test(userData.email)){
      isValid = false;
      validationErrors.email = "Email is not valid"
    }

    if(userData.password === "" || userData.password === null){
      isValid = false;
      validationErrors.password = "Password is required"
    }

    axios.get("http://localhost:7000/users")
    .then(result => {
      result.data.map(user => {
        if(user.email === userData.email){
          count++;
          //console.log(user.email + " === " + userData.email)
          if(user.password === userData.password){
            //console.log(user.password + "===" + userData.password)
            localStorage.setItem("auth",JSON.stringify(userData))
            navigate("/")
          }
          else{
            isValid = false;
            if(userData.password !== "")
            {
              //console.log(userData.password)
              validationErrors.password = "Wrong password"
            }
            else{
              validationErrors.password = "Password is required"
            }
            
          }
        }
        else{
          if(count === 0 && (userData.email !== "" && /\S+@\S+\.\S+/.test(userData.email))){
            //console.log(user.email)
            isValid = false;
            validationErrors.email = "This Email is not registered. Please create a new account"
          }
         
          
        }
      }
      
    )
      setError(validationErrors)
      setValid(isValid) 
    })
    .catch(err => console.log(err))

    
  
  };

  return (
    <div className="login_component">
      <div className="login_content">
        <h2>Sign In</h2>
        
        <form className="form login_form" onSubmit={handleLogin}>
          {valid ? (
            <></>
          ) : (
            <span style = {{color: "red"}}> {error.email} <br/>{error.password}</span>
          )}
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />
          <button type="submit" className="btn primary">
            Login
          </button>
        </form>
        <small>
          Don't have an Account ?{" "}
          <Link to="/register">Create a new account</Link>
        </small>
      </div>
    </div>
  );
};

export default Login;
