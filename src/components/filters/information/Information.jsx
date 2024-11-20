import { Close, Done } from '@mui/icons-material';
import React, { useState } from 'react'
import "./information.css"
const Information = () => {
  const [emailContent, setEmailContent] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const handleEmailChange = (e) => {
    const paragraphs = e.target.value.split('\n');

    setEmailContent(paragraphs);
  };

  return (
    <form className='information-container'>
    <label htmlFor="email"></label>
        <textarea
          id="email"
          className={`lines-textarea ${isValid &&'selected'}`}
          name="email"
          value={emailContent.join('\n')}
          onChange={handleEmailChange}
          disabled={isValid}
        >
        </textarea>
        <div className='validate-buttons'>
      <span onClick={(e)=>setIsValid(true)} ><Done/></span>
      <span onClick={(e)=>setIsValid(false)} ><Close/></span>
    </div>
    </form>
  )
}

export default Information