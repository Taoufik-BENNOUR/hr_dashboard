import { useState } from "react";
import opportunities from "../../../data/opportunities.json"
import "./opportunitiesFilter.css"

const OpportunitiesFilter = () => {
    const [selectedJobs, setSelectedJobs] = useState([])
    const [search, setsearch] = useState("");

    const handleItemClick = (job) => {
        if (selectedJobs.includes(job)) {
            setSelectedJobs(selectedJobs.filter((item) => item !== job));
        } else {
            setSelectedJobs([...selectedJobs, job]);
        }
    };
  return (
    <div className="opportunities-container">
        <div className='opportunities-input'>
         <input className='clients-search' type="text" onChange={(e)=>setsearch(e.target.value)} placeholder='Search job' />
        </div>
    {opportunities.filter(el=>el.title.toLowerCase().includes(search.toLowerCase())).map((el,i)=>
            <div key={i}
             onClick={()=>handleItemClick(el)} 
             className={`opportunities-item ${selectedJobs?.includes(el)&&"selected"}`}
             >
                <span className='title'>{el.title}</span>
                <span className='info'>{el.sender}</span>
                <span className='info'>{el.country}</span>
                <span className='info'>{el.receiver}</span>
                <span className='month'>{el.date}</span>
                <span className='info'>{el.duration}</span>
            </div>)}
    </div>
  )
}

export default OpportunitiesFilter