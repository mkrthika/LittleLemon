import React, { useReducer } from 'react'
import Booking from './Booking'

const Main = () => {

    const seededRandom = function (seed) {
      var m = 2**35 - 31;
      var a = 185852;
      var s = seed % m;
      return function () {
          return (s = s * a % m) / m;
          
      };
    }

    const fetchAPI = function(date) {
      let result = [];
      let random = seededRandom(date.getDate());

      for(let i = 17; i <= 23; i++) {
          if(random() < 0.5) {
              result.push(i + ':00');
          }
          if(random() < 0.5) {
              result.push(i + ':30');
          }
      }
      return result;
    };
    

    const initializeTimes = (date) => {
      const date_final = new Date(date)
      return(fetchAPI(date_final));      
    }
    const updateTimes = (state , action) => {
        switch(action.type){
          case 'update_times':
            return action.availableTimes
          default:
            return state
        }
    }

    const handleDateChange = (selectedDate) =>{
      dispatch({
        type: 'update_times',
        availableTimes: initializeTimes(selectedDate)
      })
    }

    
    const [availableTimes, dispatch] = useReducer(updateTimes , initializeTimes())
  return (
    <>
    <Booking availableTimes = {availableTimes} handleDateChange = {handleDateChange}/>
    </>
  )
}

export default Main