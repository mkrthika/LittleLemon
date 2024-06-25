import React from 'react'
import Open from './icons_assets/open.jpg'

const Footer = () => {
  return (
    <footer className="footer_component">
        <img src={Open} alt="open" />
        <div className="footer_nav">
        <h3>Dormat Navigation</h3>
        <ul>
            <li><a href="Home">Home</a></li>
            <li><a href="About">About</a></li>
            <li><a href="Menu">Menu</a></li>
            <li><a href="Reservations">Reservations</a></li>
            <li><a href="Order Online">Order Online</a></li>
            <li><a href="Login">Login</a></li>
        </ul>
        </div>
        <div className="footer_contacts">
        <h3>Contact Us </h3>
        <h5>Address</h5>
        <h5>Email ID</h5>
        <h5>Contact Information</h5>
        </div>
        <div className="footer_links">
        <h3>Social Media Links</h3>
        <h5>Instagram</h5>
        <h5>Email ID</h5>
        <h5>Facebook</h5>
        </div>
        
        &copy; Copyright 2024 Muthukrthika S
    </footer>
  )
}

export default Footer