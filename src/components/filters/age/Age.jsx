import React, { useState } from 'react'
import "./age.css"
import { Close, Done, Verified } from '@mui/icons-material'
const AgeFilter = () => {
    const [minimum, setMinimum] = useState("")
    const [maximum, setMaximum] = useState("")
    const handleMinimumChange = (e) => {
            e.preventDefault();
            const value = e.target.value;
            if (/^\d*$/.test(value)) {
              setMinimum(value);
            }
          
      };
      const handleMaximumChange = (e) => {
          const value = e.target.value;
          if (/^\d*$/.test(value)) {
            setMaximum(value);
          }
      };
  return (
    <div className='age-container'>
        <div className='age-content'>
            <span className='age-title'>Minimum</span>
            <div className='age-item'>
            <input className='age-search' value={minimum} type="text" onChange={handleMinimumChange}/>
            <div className={`max-age ${minimum && "filled"}`}>
            <span></span>
                <span>{minimum}</span>
                <Close className='closeBtn' onClick={() => setMinimum("")}/>
            </div>
            </div>
        </div>
        <div className='age-content'>
            <span className='age-title'>Maximum</span>
            <div className='age-item'>
            <input className='age-search' value={maximum} type="text" onChange={handleMaximumChange}  />
            <div className={`max-age ${maximum && "filled"}`}>
                <span></span>
                <span>{maximum}</span>
                <Close className='closeBtn' onClick={() => setMaximum("")}/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AgeFilter