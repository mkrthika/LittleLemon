import React from 'react'
import Logo from  './icons_assets/Logo .svg'
const Nav = () => {
  return (
    <nav className="nav_component">
        <img src={Logo} alt="Logo" />
        <ul>
            <li><a href="Home">Home</a></li>
            <li><a href="About">About</a></li>
            <li><a href="Menu">Menu</a></li>
            <li><a href="Reservations">Reservations</a></li>
            <li><a href="Order Online">Order Online</a></li>
            <li><a href="Login">Login</a></li>
        </ul>
    </nav>
  )
}

export default Nav