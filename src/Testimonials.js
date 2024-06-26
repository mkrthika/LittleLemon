import React from 'react'

const Testimonials = ({desc , rating}) => {
  return (
    <>
    <div className="testimonial_component">
        <p>{desc}<br /> <b>{rating}</b></p>
      </div>
    </>
  )
}

export default Testimonials