import React, { useState } from "react";
import planningData from "../../../data/planning.json";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "./planning.css"
const Planning = () => {
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [durationNumber, setDurationNumber] = useState(1);
  const [selectedDate, setSelectedDate] = useState(dayjs(new Date()));

  let fullDuration =selectedDuration==="Asap"?selectedDuration: `${durationNumber + " "  + selectedDuration}`

  const handleItemClick = (availability) => {
        if(selectedDuration===availability){
            setSelectedDuration("")
        }else{
            setSelectedDuration(availability)
        }
  };
  return (
    <div className="availability-container">
      <div className="availability-content">
        <span className="availability-title">Starting Date</span>
        <div
        style={{textAlign:"center"}}
          onClick={() => handleItemClick(planningData.asap)}
          className={`availability-item ${
            selectedDuration===planningData.asap &&"selected"
          }`}
        >
          {planningData.asap}
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            className="availability-calendar"
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
          />
        </LocalizationProvider>
      </div>
      <div className="availability-content">
        <span className="availability-title">Duration</span>
        <div className="durationNumber">
          <input type="number"
          min={1}
          value={durationNumber}
          onChange={(e)=>setDurationNumber(e.target.value)} />
          <div className="durationDay">
          {planningData.duration.map((el, i) => (
            <div
              key={i}
              style={{textAlign:"center"}}
              onClick={() => handleItemClick(el)}
              className={`availability-item ${
               selectedDuration===el && "selected"
              }`}
            >
              {el}
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planning;
