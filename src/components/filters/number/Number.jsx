import { Close, Done } from "@mui/icons-material";
import { useState } from "react";
import "./number.css"
const Number = () => {
    const [number, setNumber] = useState("")
    const [isValid, setIsValid] = useState(false);

    const handleNumberChange = (e) => {
            e.preventDefault();
            const value = e.target.value;
            if (/^\d*$/.test(value)) {
              setNumber(value);
            }
          
      };
  return (
    <div className="number-container">
     <div className={`number-input ${isValid && 'filled'}`}>
      <input className={`${isValid && 'filled'}`} value={number} type="text" onChange={handleNumberChange} disabled={isValid}  />
      <Close className='closeBtn' onClick={() =>{ 
        setNumber("")
        setIsValid(false)
    }}/>
    </div>
        <span className="validateBtn" onClick={(e)=>setIsValid(true)} ><Done/></span>
    </div>

  )
}

export default Number
