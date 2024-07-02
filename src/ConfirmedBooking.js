import React from 'react'

const ConfirmedBooking = ({data}) => {
  return (
    <div className="confirmbooking_component">
        <h1>Booking has been confirmed</h1>
        {console.log(data)}
    </div>
  )
}

export default ConfirmedBooking