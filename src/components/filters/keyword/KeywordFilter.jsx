import { Close } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'
import "./keyword.css"
import { Keyword_filled } from '../../../data/icons'
import { useFilters } from '../../../context/FiltersContext/FiltersContext'
const KeywordFilter = () => {
    const [keyword, setKeyword] = useState("")
    const { keywords, setKeywords } = useFilters();

    const handleAddKeyword = (e) => {
        if (keyword.trim() !== '') {
            if (!keywords.some(el=>el.toLowerCase()=== keyword.toLowerCase().trim())) {
              setKeywords((prevKeywords) => [...prevKeywords, keyword.trim()]);
            }
            setKeyword(''); 
          }
      };
    const handleRemoveKeywords =(keyword)=>{
        setKeywords((prevKeywords) => prevKeywords.filter(el=>el!==keyword));
    }
  return (
    <div className='keyword-container'>
            <div className='keyword-item'>
            <img className='keyword-img'src={Keyword_filled} alt="" onClick={handleAddKeyword} />
            <input className='keyword-search' value={keyword} type="text" 
            onKeyPress={(e)=>{if(e.key === 'Enter'){handleAddKeyword()}}}
             onChange={(e)=>setKeyword(e.target.value)}/>

                <Close className='closeBtn' onClick={()=>setKeyword('')} />
            </div>

            {keywords?.map((el,i)=>
            <div className='keywords-items' key={i}>
                {el}<Close onClick={()=>handleRemoveKeywords(el)} className='closeBtn' />
            </div>
            )}
    </div>
  )
}

export default KeywordFilter