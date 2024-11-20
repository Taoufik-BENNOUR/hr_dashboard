import "./industriesFilter.css"
import indusData from "../../../data/industries.json"
import { useState } from "react"
import { useFilters } from "../../../context/FiltersContext/FiltersContext";
const IndustriesFilter = () => {

  const { selectedIndustries, setSelectedIndustries } = useFilters();

  const handleItemClick = (industry) => {
      if (selectedIndustries.includes(industry)) {
          setSelectedIndustries(selectedIndustries.filter((item) => item !== industry));
      } else {
          setSelectedIndustries([...selectedIndustries, industry]);
      }
  };
  return (
    <>
    <div className="industries-container">
    {indusData.industries.map((el,i)=>
            <div key={i} onClick={()=>handleItemClick(el)} className={`industries-item ${selectedIndustries.includes(el)&&"selected"}`}>
                {el}
            </div>)}
    </div>
    </>
  )
}

export default IndustriesFilter