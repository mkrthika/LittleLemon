import React from 'react'
import {Link} from 'react-router-dom'
const Card = ({img , name , price , desc}) => {
  return (
    
        <div className="card_component">
            <img src={img} alt="Image1" />
            <h2>{name}</h2>
            <h4>Price : {price}</h4>
            <p>{desc}</p>
            {localStorage.getItem("auth") ? <Link >Add to the Basket</Link> : <Link to="/login">Add to the Basket</Link>}
        </div>
    
  )
}

export default Card