import React from 'react'
import { useState } from 'react';
import drillData from "../../../data/drilling.json"
import "./drilling.css"
import {ArrowDropDownCircleRounded} from '@mui/icons-material';
const Drilling = () => {
    const [selected, setselected] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedIndexes, setSelectedIndexes] = useState([]);


    const toggleAccordion = (index) => {
      setselected(prev => activeIndex !== index || !prev)
      setActiveIndex(index)
    };
    const handleItemClick = (i, j) => {
        const newSelectedItems = [...selectedIndexes];

        const index = newSelectedItems.findIndex((item) => item.i === i && item.j === j);
      
        if (index === -1) {
          newSelectedItems.push({ i, j });
        } else {
          newSelectedItems.splice(index, 1);
        }
      
        setSelectedIndexes(newSelectedItems);
    };
    console.log(selectedIndexes);
  return (
    <div>
    <div className="drilling-container">
    {drillData.drilling.map((el,i)=>
            <div className='drilling-menu'>
                <span className='drilling-header'><span></span>{el.title}<span></span></span>
                <div className={`drilling-items open`}>
                  {el.content.map((el,j)=> 
                <div onClick={() => handleItemClick(i+2,j)} className={`drilling-item ${selectedIndexes.some((item) => item.i === i+2 && item.j === j)? 'selected' : ''}`}>
                  {el}
                </div> )}
                </div>
            </div>)}
    {drillData.second.map((el,i)=>
            <div className='drilling-menu'>
                <span onClick={() => toggleAccordion(i)} className={`drilling-header ${selected&&activeIndex === i && 'open'}`}>  
                  <span></span> <span>{el.title}</span>
                  {selected&&activeIndex === i ?<ArrowDropDownCircleRounded className='rotate'/> : <ArrowDropDownCircleRounded/>} 
                  </span>
                <div className={`drilling-items ${selected&&activeIndex === i && 'open'}`}>
                  {el.content.map((el,j)=> 
                <div onClick={() => handleItemClick(i, j)} className={`drilling-item ${selectedIndexes.some((item) => item.i === i && item.j === j)? 'selected' : ''}`}>
                  {el}
                </div> )}
                </div>
            </div>)}
    </div>
    </div>
    
  )
}

export default Drilling