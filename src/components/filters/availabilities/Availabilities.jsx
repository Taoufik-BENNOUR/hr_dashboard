import React, { useState } from 'react'
import "./availabilities.css"
import availabilitiesData from "../../../data/availabilities.json"
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useRef } from 'react';

const AvailabilitiesFilter = () => {
  const [selectedAvailabilities, setSelectedAvailabilities] = useState([]);
  const [selectedDate, setSelectedDate] = useState(dayjs(new Date()));
  const leftWidth = useRef();
  const handleItemClick = (availability) => {
      if (selectedAvailabilities.includes(availability)) {
          setSelectedAvailabilities(selectedAvailabilities.filter((item) => item !== availability));
      } else {
          setSelectedAvailabilities([...selectedAvailabilities, availability]);
      }
  };
  return (
    <div className='availability-container'>
        <div className='availability-content'>
            <span className='availability-title'>Availability</span>
              {availabilitiesData.availabilities.map((el,i)=>
                <div key={i} onClick={()=>handleItemClick(el)} className={`availability-item ${selectedAvailabilities.includes(el)&&"selected"}`}>
                  {el}
                </div>
                )}
        </div>
        <div className='availability-content'>
            <span className='availability-title'>Before</span>
            <LocalizationProvider  dateAdapter={AdapterDayjs}>
                  <DateCalendar className='availability-calendar' value={selectedDate} onChange={(newValue) => setSelectedDate(newValue)} />
            </LocalizationProvider>
        </div>
    </div>
  )
}

export default AvailabilitiesFilter;