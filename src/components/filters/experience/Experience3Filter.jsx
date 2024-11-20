import { ArrowForward, ArrowForwardIosOutlined, ArrowForwardOutlined, ArrowRight, NavigateBefore, Spa } from "@mui/icons-material"
import { Availabilities_Empty, Clients_Empty, Copy_paste, Copy_paste_empty, Positions_Empty } from "../../../data/icons"
import "./experience.css"
import { useState } from "react"
import Select from 'react-select';
import clientsOptions from '../../../data/experience.json'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from "dayjs";
import { DatePicker, MonthCalendar, PickersDay } from "@mui/x-date-pickers";

const Experience3Filter = ({title,isDragged,setIsDragged}) => {
  const [newExperience2Position, setnewExperience2Position] = useState("")
  const [newExperience2Clients, setnewExperience2Clients] = useState("")
  const [newExperience2AvailabilityFrom, setnewExperience2AvailabilityFrom] = useState(null)
  const [newExperience2AvailabilityTo, setnewExperience2AvailabilityTo] = useState(null)

  const [actualExperience2Position, setactualExperience2Position] = useState("")
  const [actualExperience2Clients, setactualExperience2Clients] = useState("")
  const [actualExperience2AvailabilityFrom, setactualExperience2AvailabilityFrom] = useState(null)
  const [actualExperience2AvailabilityTo, setactualExperience2AvailabilityTo] = useState(null)

  const [editableItemExperience2, setEditableItemExperience2] = useState("");
  const [showFromCalendarExperience2, setShowFromCalendarExperience2] = useState(null);

  const handleSelectItemExperience2 = (itemType) => {
      setEditableItemExperience2(itemType);
  };

  const handleValidationExperience2 = () => {
    setactualExperience2Position(newExperience2Position);
    setactualExperience2Clients(newExperience2Clients);
    setactualExperience2AvailabilityFrom(newExperience2AvailabilityFrom)
    setactualExperience2AvailabilityTo(newExperience2AvailabilityTo)
    handleSelectItemExperience2("");
  }
  const handleDateChangeExperience2 = (field, newValue) => {  
    if (field === 'from-experience2') {
      setnewExperience2AvailabilityFrom(newValue);
    } else if (field === 'to-experience2') {
      setnewExperience2AvailabilityTo(newValue);
    }
  };
  const toggleCalendar = (field) => {
        if (field === 'from-experience2') {
        setShowFromCalendarExperience2(field);
    } else if (field === 'to-experience2') {
        setShowFromCalendarExperience2(field);
    }
  };

  const handleDrag = (event) => {
    const allText = `${actualExperience2Position}\n${actualExperience2Clients}\n${actualExperience2AvailabilityFrom}\n${actualExperience2AvailabilityTo}`;
        event.dataTransfer.setData("text/plain", allText)
        setIsDragged(true);
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const draggedText = event.dataTransfer.getData("text/plain");
    const lines = draggedText.split("\n");
    setnewExperience2Position(lines[0]);
    setnewExperience2Clients(lines[1]);
    setnewExperience2AvailabilityFrom(lines[2]);
    setnewExperience2AvailabilityTo(lines[3]);
  };
return (
  <div className="experience-container">
  <div className="experience-block">
  <>
  <div className="experience-header-container"> 
     {<div className={`experience-item-icon navigate ${!editableItemExperience2&&"placeholder"}`} onClick={handleValidationExperience2}>
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
          <div className={`experience-item-icon ${editableItemExperience2==="Positions"&&"selected"}`} onClick={() => handleSelectItemExperience2('Positions')} >
              <img src={Positions_Empty} width={25} alt=""/>
          </div>
          <span className={`experience-item`}  >
          {editableItemExperience2 === 'Positions' ? (
                      <input type="text" value={newExperience2Position} onChange={(e) =>  setnewExperience2Position(e.target.value)} />
                  ) : (
                    <span>{newExperience2Position}</span>  
                  )}
          </span>
      </div>
      <div className="experience-item-container">
          <div className={`experience-item-icon ${editableItemExperience2==="Clients"&&"selected"}`} onClick={() => handleSelectItemExperience2('Clients')}  >
                  <img src={Clients_Empty} width={25} alt="" />
          </div>
          <span className={`experience-item`} >
          {editableItemExperience2 === 'Clients' ? (
                  <Select
                      options={clientsOptions.clients}
                      defaultInputValue={newExperience2Clients}
                      onChange={(selectedOption) =>  setnewExperience2Clients(selectedOption.value)}
                      menuPlacement="top"
                      menuIsOpen={true} 
                    />
                  ) : (
                    <span>{newExperience2Clients}</span>  
                  )}
          </span>
      </div>
    <div className="experience-item-date">
           <div className={`experience-item-icon ${editableItemExperience2==="Availabilities"&&"selected"}`} onClick={() => handleSelectItemExperience2('Availabilities')} >
                  <img src={Availabilities_Empty} width={25} alt="" />
          </div>
          <span className={`experience-item ${editableItemExperience2==="Availabilities"&&"fill"}`} id="from-calendar-portal" onClick={()=>toggleCalendar("from")}>
          {editableItemExperience2 === 'Availabilities'? (
        <>
              <LocalizationProvider  dateAdapter={AdapterDayjs}>
                  <DatePicker 
                    views={['year', 'month']}
                    maxDate={newExperience2AvailabilityTo}
                    menuPlacement="top"
                    menuPortalTarget={document.getElementById('from-calendar-portal')}
                    className="experience-calendar"  value={newExperience2AvailabilityFrom}
                    onChange={(newValue) => handleDateChangeExperience2('from-experience2', newValue)} />
            </LocalizationProvider>
        </>
                  ) : (
                    newExperience2AvailabilityFrom?dayjs(newExperience2AvailabilityFrom).format('MMMM YYYY'):""
                  )}
          </span>
          <ArrowForwardIosOutlined/>
          <span className={`experience-item ${editableItemExperience2==="Availabilities"&&"fill"}`} id="to-calendar-portal" onClick={()=>toggleCalendar("to")}>
          {editableItemExperience2 === 'Availabilities' ? (
            <>
              <LocalizationProvider  dateAdapter={AdapterDayjs}>
                  <DatePicker
                    views={['year', 'month']}
                    menuPlacement="top"
                    minDate={newExperience2AvailabilityFrom}
                    className="experience-calendar"  value={newExperience2AvailabilityTo}
                    onChange={(newValue) => handleDateChangeExperience2('to-experience2', newValue)} />
            </LocalizationProvider>
            </>
                  ) : (
                    newExperience2AvailabilityTo?dayjs(newExperience2AvailabilityTo).format('MMMM YYYY'):""
                  )}
          </span>
    </div>
  </>
  </div>
    <div className="experience-block">
    <>
    <div className="experience-header-container">
        <span className={`experience-header`}>
            <span></span>
            {title}
            <img src={Copy_paste} width={15} alt="actual_copy"
            onDragStart={(e) => handleDrag(e)}
            onDragEnd={()=>setIsDragged(false)}
            />
        </span>
    </div>
            <span className={`experience-item ${actualExperience2Position&&"filled"}` }>
            <span>{actualExperience2Position}</span>
            </span>
            <span className={`experience-item ${actualExperience2Clients&&"filled"}` }>
            <span>{actualExperience2Clients}</span>
            </span>
        <div className="experience-item-date">
            <span className={`experience-item ${actualExperience2AvailabilityFrom&&"filled"}` }>
            <span>{actualExperience2AvailabilityFrom&&dayjs(actualExperience2AvailabilityFrom).format('MMMM YYYY')}</span>
            </span>
            <ArrowForwardIosOutlined/>
            <span className={`experience-item ${actualExperience2AvailabilityTo&&"filled"}` }>
            <span>{actualExperience2AvailabilityTo&&dayjs(actualExperience2AvailabilityTo).format('MMMM YYYY')}</span>
            </span>
        </div>
    </>
    </div>
  </div>
  )
}
export default Experience3Filter;