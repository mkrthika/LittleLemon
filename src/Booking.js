import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ConfirmedBooking from './ConfirmedBooking';

const Booking = ({availableTimes, handleDateChange}) => {
  const navigate = useNavigate();
  const[userData , setUserData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    occasion: ''
  })

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {...prevState,[e.target.name]: e.target.value}
    })
    const selectedDate = e.target.name==="date" ? e.target.value : "null";
    selectedDate !== "null" ? handleDateChange(selectedDate): handleDateChange(null)
  }
  
  const submitAPI = function(formData) {
    return true;
};
  const handleSubmit = async(event) => {
  event.preventDefault();
  const datatosubmit = {
    ...userData
  }
  //Local Storage
  const reservation = JSON.parse(localStorage.getItem('Reservation Details') || "[]");
  reservation.push(datatosubmit)
  localStorage.setItem('Reservation Details', JSON.stringify(reservation))
  submitForm(datatosubmit)
}

  const submitForm = async(datatosubmit) => {
    try{
      await submitAPI(datatosubmit);
      navigate("/confirmbooking");
    }catch(error){
      navigate("/error", {state:{message:"Failed to submit the form"}});
    }
  };

  return (
    <div className="register_component">
        <div className="register_content">
        <h2>Book your Table</h2>
        <p>Add your informations to the below fields to Book a Table </p>
        <form className="form register_form" onSubmit={handleSubmit}>
          <input type="text" placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandler}/>
          <input type="text" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler}/>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" name='date' value={userData.date} onChange={changeInputHandler}/>
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time " name = 'time' value = {userData.time} onChange={changeInputHandler}>
          {availableTimes && availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" name='guests' value={userData.guests} onChange={changeInputHandler} />
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" name='occasion' value={userData.occasion} onChange={changeInputHandler}>
              <option>Birthday</option>
              <option>Anniversary</option>
          </select>
          <input type="submit" value="Make Your Reservation"/>
        </form>
        </div>
      </div>
  )
}
export default Booking