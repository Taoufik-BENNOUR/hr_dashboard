import React, { useState } from 'react'

const Keyword = () => {
    const [keyword, setkeyword] = useState("")
    const [keywords, setkeywords] = useState([])
    const handleClick=()=>{
        if (keyword.trim() !== '') {
            setkeywords((prevKeywords) => [...prevKeywords, keyword]);
            setkeyword(''); // Clear the input field
          }
    }
  return (
    <div>
        <input onKeyPress={handleClick} type="text" onChange={(e)=>setkeyword(e.target.value)} value={keyword} />
        {keywords?.map((el)=>
        <div>
            {el}
        </div>
        )}
        <button onClick={()=>handleClick()}>enter</button>
    </div>
  )
}

export default Keyword