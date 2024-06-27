import React from 'react'
const Starter = ({img , name , price , desc}) => {
  return (
    <>
    <div className="starter">
        <img src={img} alt="starter1" />
        <h4>{name}</h4>
        <h4>Price : {price}</h4>
        <p>{desc}</p>
    </div>
    </>
  )
}

export default Starter