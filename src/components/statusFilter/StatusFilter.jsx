import { TaskAlt } from '@mui/icons-material'
import React, { useState } from 'react'

const StatusFilter = () => {
  const [selectedStatus, setSelectedStatus] = useState([])

  const StatusBtn = ({status}) =>{
    
    return <label className={`${status} ${selectedStatus.includes(status)&&'checked'}`}><input type="checkbox" 
    checked={selectedStatus.includes(status)}
       onChange={()=>handleCheckboxChange(status)}  />{status!=="Message"&& <TaskAlt className='icon' /> }<span>{status}</span></label>
}
const handleCheckboxChange = (status) => {
  if(selectedStatus.includes(status)){
    setSelectedStatus(selectedStatus.filter((s) => s !== status));
  }else{
    setSelectedStatus(prev=>[...prev,status])
  }
};
  return (
    <div className='message-history-buttons'>
    <StatusBtn status={"Open"} />
    <StatusBtn status={"Current"} />
    <StatusBtn status={"Finished"} />
    <StatusBtn status={"Closed"} />
</div>
  )
}

export default StatusFilter