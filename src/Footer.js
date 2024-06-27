import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer_component">
        <div className="footer_nav">
        <h3>Dormat Navigation</h3>
        <ul>
        <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/order-online">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
        </div>
        <div className="footer_contacts">
        <h3>Contact Us </h3>
        <h5>No. 123 , ABC street, DEF City , XYZ Country.</h5>
        <h5><Link to="/">littlelemonrestaurant@gmail.com</Link></h5>
        <h5>123456789</h5>
        </div>
        <div className="footer_links">
        <h3>Social Media Links</h3>
        <h5>Instagram : <Link to="/">instagram.com/LittleLemon</Link></h5>
        <h5>Email ID : <Link to="/">littlelemonrestaurant@gmail.com</Link></h5>
        <h5>Facebook : <Link to="/">https://www.facebook.com/littlelemonrestaurant</Link> </h5>
        </div>
        
        &copy; Copyright 2024 Muthukrthika S
    </footer>
  )
}

export default Footer