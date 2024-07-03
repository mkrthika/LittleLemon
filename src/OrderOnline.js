import React from 'react'
import { Link } from 'react-router-dom'

const OrderOnline = ({img , name , price , desc}) => {
  return (
    <>
    <div className="starter">
        <img src={img} alt="starter1" />
        <h4>{name}</h4>
        <h4>Price : {price}</h4>
        <p>{desc}</p>
        <Link>Add to the Basket</Link>
    </div>
        
    </>
  )
}

export default OrderOnline