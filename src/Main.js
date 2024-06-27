import React, { useState } from 'react'
import Booking from './Booking'

const Main = () => {
    const [availableTimes , setAvailableTimes] = useState([
          '17:00',
          '18:00',
          '19:00',
          '20:00',
          '21:00',
          '22:00'
      ])

    const updateTimes = () => {
        
    }
  return (
    <>
    <Booking availableTimes = {availableTimes} />
    </>
  )
}

export default Main