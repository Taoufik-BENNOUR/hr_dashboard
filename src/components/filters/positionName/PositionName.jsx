import { Close, Done } from '@mui/icons-material';
import React, { useState } from 'react'
import "./positionName.css"
const PositionName = () => {
    const [positionName, setPositionName] = useState("")
    const [isValid, setIsValid] = useState(false);


  return (
    <div className="position-container">
     <div className={`position-input ${isValid && 'filled'}`}>
      <input className={`${isValid && 'filled'}`} value={positionName} type="text" onChange={(e)=>setPositionName(e.target.value)} disabled={isValid}  />
      <Close className='closeBtn' onClick={() =>{ 
        setPositionName("")
        setIsValid(false)
    }}/>
    </div>
        <span className="validateBtn" onClick={(e)=>setIsValid(true)} ><Done/></span>
    </div>
  )
}

export default PositionName