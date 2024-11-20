import { ArrowForward, ArrowForwardIosOutlined, ArrowForwardOutlined, ArrowRight, CopyAllOutlined, NavigateBefore, Spa } from "@mui/icons-material"
import { Availabilities_Empty, Clients_Empty, Copy_paste, Copy_paste_empty, Positions_Empty } from "../../../data/icons"
import "./experience.css"
import { useState } from "react"
import Select from 'react-select';
import clientsOptions from '../../../data/experience.json'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from "dayjs";
import { DatePicker, MonthCalendar, PickersDay } from "@mui/x-date-pickers";

const ExperienceFilter = ({title,isDragged,setIsDragged}) => {
  const [lastExperiencePosition, setlastExperiencePosition] = useState("")
  const [lastExperienceClients, setlastExperienceClients] = useState("")
  const [lastExperienceAvailabilityFrom, setlastExperienceAvailabilityFrom] = useState(null)
  const [lastExperienceAvailabilityTo, setlastExperienceAvailabilityTo] = useState(null)

  const [acutalPosition, setacutalPosition] = useState("")
  const [acutalClients, setacutalClients] = useState("")
  const [acutalAvailabilityFrom, setacutalAvailabilityFrom] = useState(null)
  const [acutalAvailabilityTo, setacutalAvailabilityTo] = useState(null)

  const [editableItem, setEditableItem] = useState("");
  const [showFromCalendar, setShowFromCalendar] = useState(null);

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
  const handleDrag = (event) => {
    const allText = `${acutalPosition}\n${acutalClients}\n${acutalAvailabilityFrom}\n${acutalAvailabilityTo}`;
        event.dataTransfer.setData("text/plain", allText)
        setIsDragged(true)
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const draggedText = event.dataTransfer.getData("text/plain");
    const lines = draggedText.split("\n");
    setlastExperiencePosition(lines[0]);
    setlastExperienceClients(lines[1]);
    setlastExperienceAvailabilityFrom(lines[2]);
    setlastExperienceAvailabilityTo(lines[3]);
  };
return (
  <div className="experience-container">
  <div className="experience-block">
  <h4>New</h4>
  <>
  <div className="experience-header-container">
     {<div className={`experience-item-icon navigate ${!editableItem&&"placeholder"}`} onClick={handleValidation}>
          <NavigateBefore/>
      </div>}
      <span className={`experience-header`}>
          <span></span>
          {title}
          {isDragged?
          <img src={Copy_paste_empty} width={15} alt=""
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e)} 
          draggable="false"
          /> 
          :<img src={Copy_paste} width={15} alt=""
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e)} 
          draggable="false"
          />
          }
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
                      menuIsOpen={true} 
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
          <span className={`experience-item ${editableItem==="Availabilities"&&"fill"}`} id="from-calendar-portal" onClick={()=>toggleCalendar("from")}>
          {editableItem === 'Availabilities'? (
        <>
              <LocalizationProvider  dateAdapter={AdapterDayjs}>
                  <DatePicker 
                    views={['year', 'month']}
                    maxDate={lastExperienceAvailabilityTo}
                    menuPlacement="top"
                    menuPortalTarget={document.getElementById('from-calendar-portal')}
                    className="experience-calendar"  value={lastExperienceAvailabilityFrom}
                    onChange={(newValue) => handleDateChange('from', newValue)} />
            </LocalizationProvider>
        </>
                  ) : (
                    lastExperienceAvailabilityFrom?dayjs(lastExperienceAvailabilityFrom).format('MMMM YYYY'):""
                  )}
          </span>
          <ArrowForwardIosOutlined/>
          <span className={`experience-item ${editableItem==="Availabilities"&&"fill"}`} id="to-calendar-portal" onClick={()=>toggleCalendar("to")}>
          {editableItem === 'Availabilities' ? (
            <>
              <LocalizationProvider  dateAdapter={AdapterDayjs}>
                  <DatePicker
                    views={['year', 'month']}
                    menuPlacement="top"
                    minDate={lastExperienceAvailabilityFrom}
                    className="experience-calendar"  value={lastExperienceAvailabilityTo}
                    onChange={(newValue) => handleDateChange('to', newValue)} />
            </LocalizationProvider>
            </>
                  ) : (
                    lastExperienceAvailabilityTo?dayjs(lastExperienceAvailabilityTo).format('MMMM YYYY'):""
                  )}
          </span>
    </div>
  </>
  </div>
    <div className="experience-block">
    <h4>Actual</h4>
    <>
    <div className="experience-header-container">
        <span className={`experience-header`}>
            <span></span>
            {title}
            <img src={Copy_paste} width={15} alt=""
            onDragStart={(e) => handleDrag(e)}
            onDragEnd={()=>setIsDragged(false)}
            />
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
            <span>{acutalAvailabilityFrom&&dayjs(acutalAvailabilityFrom).format('MMMM YYYY')}</span>
            </span>
            <ArrowForwardIosOutlined/>
            <span className={`experience-item ${acutalAvailabilityTo&&"filled"}` }>
            <span>{acutalAvailabilityTo&&dayjs(acutalAvailabilityTo).format('MMMM YYYY')}</span>
            </span>
        </div>
    </>
    </div>
  </div>
  )
}

export default ExperienceFilter