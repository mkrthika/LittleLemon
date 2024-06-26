import React from 'react'
import Logo from  './icons_assets/Logo .svg'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <nav className="nav_component">
        <img src={Logo} alt="Logo" />
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/order-online">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
  )
}

export default Nav