import { ArrowForward, ArrowForwardIosOutlined, ArrowForwardOutlined, ArrowRight, NavigateBefore, Spa } from "@mui/icons-material"
import { Availabilities_Empty, Clients_Empty, Copy_paste, Positions_Empty } from "../../../data/icons"
import "./experience.css"
import { useState } from "react"
import Select from 'react-select';
import clientsOptions from '../../../data/experience.json'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from "dayjs";

const ExperienceFilter = () => {
  const [lastExperiencePosition, setlastExperiencePosition] = useState("")
  const [lastExperienceClients, setlastExperienceClients] = useState("")
  const [lastExperienceAvailabilityFrom, setlastExperienceAvailabilityFrom] = useState(dayjs(new Date()))
  const [lastExperienceAvailabilityTo, setlastExperienceAvailabilityTo] = useState(dayjs(new Date()))

  const [acutalPosition, setacutalPosition] = useState("")
  const [acutalClients, setacutalClients] = useState("")
  const [acutalAvailabilityFrom, setacutalAvailabilityFrom] = useState(dayjs(new Date()))
  const [acutalAvailabilityTo, setacutalAvailabilityTo] = useState(dayjs(new Date()))

  const [editableItem, setEditableItem] = useState("");
  const [showFromCalendar, setShowFromCalendar] = useState("");

  const handleSelectItem = (itemType) => {
      setEditableItem(itemType);
  };
  const handleValidation = () => {
    setacutalPosition(lastExperiencePosition);
    setacutalClients(lastExperienceClients);
    setacutalAvailabilityFrom(lastExperienceAvailabilityFrom)
    setacutalAvailabilityTo(lastExperienceAvailabilityTo)
    handleSelectItem("");
  }
  const handleDateChange = (field, newValue) => {  
    if (field === 'from') {
        setlastExperienceAvailabilityFrom(newValue);
    } else if (field === 'to') {
        setlastExperienceAvailabilityTo(newValue);
    }
  };
  const toggleCalendar = (field) => {
        if (field === 'from') {
        setShowFromCalendar(field);
    } else if (field === 'to') {
        setShowFromCalendar(field);
    }
  };
return (
  <div className="experience-container">
  <div className="experience-block">
  <h4>New</h4>
  <div className="experience-header-container">
     {<div className={`experience-item-icon navigate ${!editableItem&&"placeholder"}`} onClick={handleValidation}>
          <NavigateBefore/>
      </div>}
      <span className={`experience-header`}>
          <span></span>
          Last/current experience
          <img src={Copy_paste} width={15} alt=""/>
      </span>
  </div>
      <div className="experience-item-container">
          <div className={`experience-item-icon ${editableItem==="Positions"&&"selected"}`} onClick={() => handleSelectItem('Positions')} >
              <img src={Positions_Empty} width={25} alt=""/>
          </div>
          <span className={`experience-item`}  >
          {editableItem === 'Positions' ? (
                      <input type="text" value={lastExperiencePosition} onChange={(e) => setlastExperiencePosition(e.target.value)} />
                  ) : (
                    <span>{lastExperiencePosition}</span>  
                  )}
          </span>
      </div>
      <div className="experience-item-container">
          <div className={`experience-item-icon ${editableItem==="Clients"&&"selected"}`} onClick={() => handleSelectItem('Clients')}  >
                  <img src={Clients_Empty} width={25} alt="" />
          </div>
          <span className={`experience-item`} >
          {editableItem === 'Clients' ? (
                  <Select
                      options={clientsOptions.clients}
                      defaultInputValue={lastExperienceClients}
                      onChange={(selectedOption) => setlastExperienceClients(selectedOption.value)}
                      menuPlacement="top"
                    />
                  ) : (
                    <span>{lastExperienceClients}</span>  
                  )}
          </span>
      </div>
    <div className="experience-item-date">
           <div className={`experience-item-icon ${editableItem==="Availabilities"&&"selected"}`} onClick={() => handleSelectItem('Availabilities')} >
                  <img src={Availabilities_Empty} width={25} alt="" />
          </div>
          <span className="experience-item" id="from-calendar-portal" onClick={()=>toggleCalendar("from")}>
          {editableItem === 'Availabilities'&&showFromCalendar==="from" ? (
            <LocalizationProvider  dateAdapter={AdapterDayjs}>
                  <DateCalendar 
                    menuPlacement="top"
                    menuPortalTarget={document.getElementById('from-calendar-portal')}
                    className="experience-calendar"  value={lastExperienceAvailabilityFrom}
                    onChange={(newValue) => handleDateChange('from', newValue)} />
            </LocalizationProvider>
                  ) : (
                    dayjs(lastExperienceAvailabilityFrom).format('MMMM YYYY')
                  )}
          </span>
          <ArrowForwardIosOutlined/>
          <span className="experience-item" id="to-calendar-portal" onClick={()=>toggleCalendar("to")}>
          {editableItem === 'Availabilities'&&showFromCalendar==="to" ? (
            <LocalizationProvider  dateAdapter={AdapterDayjs}>
                  <DateCalendar 
                    menuPlacement="top"
                    menuPortalTarget={document.getElementById('to-calendar-portal')}
                    className="experience-calendar"  value={lastExperienceAvailabilityTo}
                    onChange={(newValue) => handleDateChange('to', newValue)} />
            </LocalizationProvider>
                  ) : (
                    dayjs(lastExperienceAvailabilityTo).format('MMMM YYYY')
                  )}
          </span>
    </div>
  </div>
  <div className="experience-block">
  <h4>Actual</h4>
  <div className="experience-header-container">
      <span className={`experience-header`}>
          <span></span>
          Last/current experience
          <img src={Copy_paste} width={15} alt=""/>
      </span>
  </div>
          <span className={`experience-item ${acutalPosition&&"filled"}` }>
          <span>{acutalPosition}</span>
          </span>
          <span className={`experience-item ${acutalClients&&"filled"}` }>
          <span>{acutalClients}</span>
          </span>
    <div className="experience-item-date">
          <span className={`experience-item ${acutalAvailabilityFrom&&"filled"}` }>
          <span>{dayjs(acutalAvailabilityFrom).format('MMMM YYYY')}</span>
          </span>
          <ArrowForwardIosOutlined/>
          <span className={`experience-item ${acutalAvailabilityTo&&"filled"}` }>
          <span>{dayjs(acutalAvailabilityTo).format('MMMM YYYY')}</span>
          </span>
    </div>
  </div>
  </div>
  )
}

export default ExperienceFilter