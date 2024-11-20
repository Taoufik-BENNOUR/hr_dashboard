import React, { useState } from 'react'
import {TaskAlt } from '@mui/icons-material';
import { Arrow_Empty, Arrow_Filled, Availabilities_Filled, Availabilities_Full_green, Availabilities_Green_border, CVs_Candidate_parameters_Filled, CVs_Filled, Clients_Filled, Cross, Email_received_Empty, Email_sent_Empty, Email_white, From_To_Client_page, Incoming_call_Empty, LinkedIn_message_received_Empty, LinkedIn_message_sent_Empty, Modify_opportunity_Activities_page, Outgoing_call_Empty, Physical_meeting_Empty, Physical_meeting_Filled, SMS_received_Empty, SMS_sent_Empty, Salaries_Filled, Salaries_Full_green, Salaries_Green_border, Selected_opportunity_Activities_page, Star_Empty, Star_Filled, Star_Green_border, Voicemail_Empty, tick_box_empty } from '../../data/icons';
import message from "../../data/messageHistory.json"
import dayjs from 'dayjs';
import { canddidateFileicons } from '../../data/candidateFileIcons';
import "./clientFile.css"
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const ClientFile = () => {
    const [emailContent, setEmailContent] = useState([]);
    const [selectedIcon, setSelectedIcon] = useState(null);
    const [selectedIconName, setSelectedIconName] = useState("");
    const [selectedStatus, setSelectedStatus] = useState([])

    const [readMore, setReadMore] = useState(false);
    const [activeMenu, setactiveMenu] = useState(null);


    const [isSelected, setIsSelected] = useState(false);
    const [selectedAvailibility, setSelectedcdAvailibility] = useState(false);
    const [selectedSalary, setSelectedcdSalary] = useState(false);
    const [selectedStar, setSelectedcdStar] = useState(false);
    const [messageHistory, setMessageHistory] = useState(message.messageHistory);
    
    const [clientFrom, setClientFrom] = useState(null);
    const [clientTo, setClientTo] = useState(null);
    const [calendarOpen, setCalendarOpen] = useState({isOpen:false,field:null});

  const handleReadMore = (index) =>{
    setReadMore(prev => activeMenu !== index || !prev);
    setactiveMenu(index)
  }
  const handleEmailChange = (e) => {
    const paragraphs = e.target.value.split('\n');

    setEmailContent(paragraphs);
  };
  const handleSubmit = (e) => {
    if(emailContent.length>0&&emailContent[0].trim()!==""){
      e.preventDefault();

    const newMessage = {
      content:emailContent,
      important: selectedStar,
      showAvailability:selectedAvailibility,
      showSalary:selectedSalary,
      date:dayjs(new Date()),
      status:"Message",
      icon:selectedIconName
    };
    setMessageHistory((prevMessages) => [...prevMessages, newMessage]);
    setEmailContent([]);
    handleClose();
    }
  }

const handleCheckboxChange = (status) => {
  if(selectedStatus.includes(status)){
    setSelectedStatus(selectedStatus.filter((s) => s !== status));
  }else{
    setSelectedStatus(prev=>[...prev,status])
  }
};
const StatusBtn = ({status}) =>{
    return <label className={`${status} ${selectedStatus.includes(status)&&'checked'}`}><input type="checkbox" 
    checked={selectedStatus.includes(status)}
       onChange={()=>handleCheckboxChange(status)}  />{status!=="Message"&& <TaskAlt className='icon' /> }<span>{status}</span></label>
}
const OpportunityBtn = ({src,content})=>{
  return (<button className='opportunityBtn'> <img src={src} width={25} alt="" />
   <span>{content}</span></button>)

}
const handleSelectIcon = (e) =>{
  setIsSelected(prev=>!prev);
  setSelectedIcon(e.target.src);
  setSelectedIconName(e.target.alt)
}
const handleClose = (e) =>{
  setIsSelected(prev=>!prev);
  setSelectedIcon(null);
  setSelectedIconName("");
  setSelectedcdAvailibility(false);
  setSelectedcdSalary(false);
  setSelectedcdStar(false);

}
const handleSelectAvailibility = (e) =>{
  setSelectedcdAvailibility(prev=>!prev);
}
const handleSelectSalary = (e) =>{
  setSelectedcdSalary(prev=>!prev);
}
const handleSelectStar= (e) =>{
  setSelectedcdStar(prev=>!prev);
}
const handleCalendarOpen = (field) => {
  setCalendarOpen({
    isOpen:!calendarOpen.isOpen,
    field:field
  });
};
console.log(calendarOpen);

const handleDateChange = (field, newValue) => {  
  if (field === 'from') {
      setClientFrom(newValue);
  } else if (field === 'to') {
    setClientTo(newValue);
  }
};

const msg = {
  "salary":"400 EURO Daily rate",
  "availability": "Available asap",
  "receiver":"MAGRY"
}
const oppo = [
  {
    "status": "Current",
    "title": "Electrical engineer",
    "sender": "Pe",
    "country": "Congo",
    "receiver": "MAG",
    "date":"16 Feb 2023",
    "duration": "6 months"
  },
  {
    "status": "Open",
    "title": "Junior electrical engineer",
    "sender": "Jon",
    "country": "France",
    "receiver": "MAGRY",
    "date":"01 Feb 2023",
    "duration": "6 months"
  },
  {
    "status": "Finished",
    "title": "Senior electrical engineer",
    "sender": "Perenco",
    "country": "Germany",
    "receiver": "MAGRY",
    "date":"18 Feb 2021",
    "duration": "6 months"
  },
]
const combinedArray = oppo
  .filter((el) => !selectedStatus.includes(el.status))
  .concat(messageHistory.filter((el) => !selectedStatus.includes(el.status)))
  .sort((a, b) => new Date(b.date) - new Date(a.date));
  const [anchorEl, setAnchorEl] = useState(null);

return (
    <div className='client-file'>
        <form className='client-file-email-form'>
        <label htmlFor="email"></label>
        <textarea
          id="email"
          className='lines-textarea'
          name="email"
          value={emailContent.join('\n')}
          onChange={handleEmailChange}
        ></textarea>
        <div className='contact-icons-container'>
            {isSelected?
            <div className='selected'>
              <img  className='contact-selected-img' src={Cross} alt="" onClick={handleClose} />
              <div>
                {selectedAvailibility===false?
                <img  className='contact-selected-img' src={Availabilities_Green_border} alt="" onClick={handleSelectAvailibility} />
                :<img  className='contact-selected-img' src={Availabilities_Full_green} alt="" onClick={handleSelectAvailibility} />}
                {selectedSalary===false?
                <img  className='contact-selected-img' src={Salaries_Green_border} alt="" onClick={handleSelectSalary} />
                :<img  className='contact-selected-img' src={Salaries_Full_green} alt="" onClick={handleSelectSalary} />}
                {selectedStar===false?
                <img  className='contact-selected-img' src={Star_Green_border} alt="" onClick={handleSelectStar} />
                :<img  className='contact-selected-img' src={Star_Filled} alt="" onClick={handleSelectStar} />}
              </div>
              <img  className='contact-selected-img' src={selectedIcon} width={25} alt="selected-img" onClick={handleSubmit}  />
            </div>
            :
            <>
             <div className='left'>
                <img src={Incoming_call_Empty} alt={"Incoming_call_Empty"} onClick={(e)=>handleSelectIcon(e)} />
                <img src={Voicemail_Empty} alt={"Voicemail_Empty"} onClick={(e)=>handleSelectIcon(e)}/>
                <img src={Outgoing_call_Empty} alt="Outgoing_call_Empty" onClick={(e)=>handleSelectIcon(e)} />
                <img src={Email_received_Empty} alt="Email_received_Empty" onClick={(e)=>handleSelectIcon(e)} />
                <img src={Email_sent_Empty} alt="Email_sent_Empty" onClick={(e)=>handleSelectIcon(e)} />
                <img src={LinkedIn_message_received_Empty} alt="LinkedIn_message_received_Empty" onClick={(e)=>handleSelectIcon(e)} />
                <img src={LinkedIn_message_sent_Empty} alt="LinkedIn_message_sent_Empty" onClick={(e)=>handleSelectIcon(e)} />
                <img src={SMS_received_Empty} alt="SMS_received_Empty" onClick={(e)=>handleSelectIcon(e)} />
                <img src={SMS_sent_Empty} alt="SMS_sent_Empty" onClick={(e)=>handleSelectIcon(e)} />
                <img src={Physical_meeting_Empty} alt="Physical_meeting_Empty" onClick={(e)=>handleSelectIcon(e)} />
            </div>
            <div className='right'>
             <img src={Email_white} alt="Email_white" />
            </div>  
            </>
              
            }   
        </div>
      </form>
      <div className='client-file-message-history'>
        <div className='message-history-buttons'>
            <StatusBtn status={"Open"} />
            <StatusBtn status={"Current"} />
            <StatusBtn status={"Finished"} />
            <StatusBtn status={"Closed"} />
            <StatusBtn status={"Message"} />
        </div>
        <div className='message-history-content'>
          {
combinedArray.map((item, index) => (
  <div key={index} className={`message-${item.content ? 'body' : 'header-client'} ${item.content?"":item.status}`}>
    {item.content ? (
      <>
      <div className={`info1 ${(item.content.length > 1 || item.content[0]?.length > 80) && activeMenu === index && readMore && 'read-more'}`} onClick={() => handleReadMore(index)}>
        {item.content.map(el => <p key={el}>{el}</p>)}
        {(item.content.length > 1 || item.content[0]?.length > 80) && <span className='icon'>{activeMenu === index && readMore ?
          <img src={Arrow_Filled} width={20} alt="" className='rotate' /> : <img width={20} src={Arrow_Empty} alt="" />}
        </span>}
      </div>
            <p className='info2'>
        <span className='img'>
          {item.important && <img src={Star_Empty} alt="" />}
        </span>
        <span>{item.showSalary && msg.salary}</span>
        <span>{item.showAvailability && msg.availability}</span>
        <span>{dayjs(item.date).format('DD MMM YYYY')}</span>
        <span>{msg.receiver}</span>
        <img className='img' src={canddidateFileicons[item.icon]} alt={item.icon} />
      </p>
      </>    
    ) : (
      <>
        <div className='header-content'>
          <img src={tick_box_empty} alt="" />
          <span className='title'>{item.title}</span>
          <span className='info'>{item.sender}</span>
          <span className='info'>{item.country}</span>
          <span className='info'>{item.receiver}</span>
          <span className='month'>{item.date}</span>
          <span className='info'>{item.duration}</span>
        </div>
        <div className='header-tabs'>
          <OpportunityBtn src={Modify_opportunity_Activities_page} content={"Modify"} />
          <OpportunityBtn src={CVs_Filled} content={"Cvs"} />
          <OpportunityBtn src={Selected_opportunity_Activities_page} content={"Selected"} />
        </div>
      </>
    )}

  </div>
))}
        </div>
        <div className='message-history-footer'>
          <div className='left'>
           <OpportunityBtn src={Clients_Filled} content="All Clients"/>
          </div>
          <div  className='right'>
            {/* <OpportunityBtn src={From_To_Client_page} content={`From`}/> */}
            <button className='opportunityBtn'> <img onClick={()=>handleCalendarOpen("from")} src={From_To_Client_page} width={25} alt="" />
            <span>
          {calendarOpen.isOpen&&calendarOpen.field==='from'?    
          <LocalizationProvider  dateAdapter={AdapterDayjs}>
                  <DatePicker 
                    views={['day','year', 'month']}
                    maxDate={clientTo}
                    menuPlacement="top"
                    className="experience-calendar"  value={clientFrom}
                    onChange={(newValue) => handleDateChange('from',newValue)}
                    open={calendarOpen.isOpen}
                     />
            </LocalizationProvider>
            :clientFrom?dayjs(clientFrom).format("DD/MMM/YYYY"):"From"}
            </span>
            </button>
            <button className='opportunityBtn'> <img onClick={()=>handleCalendarOpen("to")} src={From_To_Client_page} width={25} alt="" />
            <span>
          {calendarOpen.isOpen&&calendarOpen.field==='to'?    
          <LocalizationProvider  dateAdapter={AdapterDayjs}>
                  <DatePicker 
                    views={['day','year', 'month']}
                    minDate={clientFrom}
                    menuPlacement="top"
                    className="experience-calendar"  value={clientTo}
                    onChange={(newValue) => handleDateChange('to',newValue)}
                    open={calendarOpen.isOpen}
                     />
            </LocalizationProvider>
            :clientTo?dayjs(clientTo).format("DD/MMM/YYYY"):"To"}
            </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientFile