import React, { useState } from 'react'
import Logo from  './icons_assets/Logo .svg'
import {Link, useNavigate} from 'react-router-dom'
const Nav = () => {
  const[login,setLogin] = useState(true)
  const navigate = useNavigate()
  const handleLogout = (e) => {
    navigate("/")
    localStorage.removeItem("auth")
  }

  return (
    <nav className="nav_component">
        <img src={Logo} alt="Logo" />
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li>{login  && localStorage.getItem("auth") ? <Link to="/reservations">Reservations</Link> :  <Link to="/login">Reservations</Link>}</li>
            <li>{login  && localStorage.getItem("auth") ?<Link to="/order-online">Order Online</Link> : <Link to="/login">Order Online</Link>} </li>
            <li>{login  && localStorage.getItem("auth") ? 
            (<Link className="link" to="/" onClick={() => {handleLogout(); setLogin(true);}}>Logout</Link>) 
            :(<Link className="link" to="/login">LogIn</Link>)}</li>
        </ul>
        {localStorage.getItem("auth") && <h1>Welcome Admin </h1>}
    </nav>
  )
}

export default Nav