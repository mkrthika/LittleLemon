import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


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
  const[disable,setDisable] = useState("typing")
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
  setDisable('submitted')
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
      const res = await submitAPI(datatosubmit);
      if(res){
        navigate("/confirmbooking");
      }
      
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
            <input type="text" placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandler} required/>
            <input type="email" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler} required/> 
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" name='date' value={userData.date} onChange={changeInputHandler} required/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " name = 'time' value = {userData.time} onChange={changeInputHandler} required>
            {availableTimes && availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="2" min="2" max="10" id="guests" name='guests' value={userData.guests} onChange={changeInputHandler} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name='occasion' value={userData.occasion} onChange={changeInputHandler}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your Reservation"
            disabled= {userData.name.length === 0 || 
              userData.email.length === 0 ||
              userData.date.length === 0 ||
              userData.time.length === 0 ||
              userData.guests.length === 0 ||
              userData.occasion.length === 0 ||
              disable === 'submitted'
            } aria-label='onClick'
            />
            <div className="hide">Complete all the fields to enable the Submit button</div>
          </form>
        </div>
      </div>
  )
}
export default Booking