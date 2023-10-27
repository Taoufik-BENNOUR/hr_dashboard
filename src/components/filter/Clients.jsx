import React, { useState } from 'react'
import "./clients.css"
import { Close } from '@mui/icons-material'
const Clients = () => {
    const data = ["A","B","C"]
    const [filtredData, setfiltredData] = useState(data)
    const [selectedItems, setSelectedItems] = useState([]);
    const [seach, setseach] = useState("");

    const handleClick = (index)=>{
      const selectedItem = filtredData[index];
      setfiltredData(prevData => prevData.filter((el,i) => i !== index))
      setSelectedItems((prevItems) => [...prevItems, selectedItem]);
    }
    const handleDeselect = (index) => {
      const deselectedItem = selectedItems[index];
;   setSelectedItems(prev=>prev.filter((el,i)=>i !==index));
    setfiltredData(prev=>[...prev,deselectedItem])
      };
  return (
    <div className='clients-container'>
      <div className="clients-left">
      <input className='clients-search' type="text" onChange={(e)=>setseach(e.target.value)} placeholder='________________________' />
      {filtredData.filter(word=>word.includes(seach)).map((el,i)=>
        <div className='clients-item' key={i} onClick={()=>handleClick(i)}>
            {el}
        </div>  
        )}
      </div>
        <div className='clients-right'>
        <h3>Selected Items</h3>
        {selectedItems.map((el, i) => (
            <div className='selected-items' key={i}>
              {el}
              <Close className='closeBtn' onClick={() => handleDeselect(i)}/>
            </div>
          ))}
          <div className="clients-item"><span style={{visibility:'hidden'}} >placeholder</span></div>
        </div>
    </div>
  )
}

export default Clients