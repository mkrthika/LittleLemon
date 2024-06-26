import React from 'react'

const Testimonials = ({title,desc , rating}) => {
  return (
    <>
    <div className="testimonial_component">
        <h4>{title}</h4>
        <p>{desc}<br /> <b>{rating}</b></p>
      </div>
    </>
  )
}

export default Testimonials