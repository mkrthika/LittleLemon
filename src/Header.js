import React from 'react'
import headerImg from './icons_assets/dish.jpg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header_component'>
          <div className="header_content">
  
            <h1>Little Lemon Restaurant</h1>
            <h4>Chicago</h4>
            <p>We are family owned Mediterranean Restaurant, <br/>
            focused on traditional recipes, served with a Modern Twist</p>
            {localStorage.getItem("auth") ? <Link to ="/reservations">Reserve your Table </Link> :  <Link to ="/login">Reserve your Table </Link>}
          </div>
          <div className="header_img">
            <img src={headerImg }alt="header_image" />
          </div>
          
        </header>
      )
}

export default Header