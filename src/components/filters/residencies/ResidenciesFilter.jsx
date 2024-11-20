import React from "react";
import { useState } from "react";
import residenciesData from "../../../data/residencies.json";
import "./residencies.css";
import { ArrowDropDownCircleRounded, Close } from "@mui/icons-material";

const ResidenciesFilter = () => {
  const [selectedfrenchRegions, setselectedfrenchRegions] = useState([]);
  const [selectedglobalRegions, setselectedglobalRegions] = useState([]);
  const [openMenu, setopenMenu] = useState(
    residenciesData.frenchRegions.title ? true : false
  );
  const [activeMenu, setactiveMenu] = useState(residenciesData.frenchRegions.key);
  const toggleAccordion = (menu) => {
    setopenMenu((prev) => activeMenu !== menu || !prev);
    setactiveMenu(menu);
  };

  const handlefrenchRegions = (RigPos) => {
    if (selectedfrenchRegions.includes(RigPos)) {
      setselectedfrenchRegions(
        selectedfrenchRegions.filter((item) => item !== RigPos)
      );
    } else {
      setselectedfrenchRegions((prev) => [...prev, RigPos]);
    }
  };
  const handleglobalRegions = (RigPost) => {
    if (selectedglobalRegions.includes(RigPost)) {
      setselectedglobalRegions(
        selectedglobalRegions.filter((item) => item !== RigPost)
      );
    } else {
      setselectedglobalRegions((prev) => [...prev, RigPost]);
    }
  };

  const [search, setsearch] = useState("");
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(residenciesData.countries.content);

  const handleCountrySelect = (selectedCountry) => {
    const updatedSelectedCountries = [...selectedCountries, selectedCountry];
    setSelectedCountries(updatedSelectedCountries);
    setFilteredCountries((prevFilteredCountries) =>
      prevFilteredCountries.filter((el, i) => el.country !== selectedCountry.country)
    );
  };
  const handleCountryDeselect = (dselectedCountry) => {
    const updatedFilteredCountries = [...filteredCountries, dselectedCountry];
    setFilteredCountries(updatedFilteredCountries);
    setSelectedCountries((prevSelectedCountries) =>
      prevSelectedCountries.filter((el, i) => el.country !== dselectedCountry.country)
    );
  };


    
  return (
    <>
    <div className="residencies-container">
      <div className="residencies-menu">
        <span
          onClick={() => toggleAccordion(residenciesData.frenchRegions.key)}
          className={`residencies-header ${
            activeMenu === "FLR" && openMenu && "open"
          }`}
        >
          {residenciesData.frenchRegions.title}
          {activeMenu === "FLR"&&openMenu?<ArrowDropDownCircleRounded className='rotate'/> : <ArrowDropDownCircleRounded/>} 
        </span>
        <div
          className={`residencies-items ${
            activeMenu === "FLR" && openMenu && "open"
          }`}
        >
          {residenciesData.frenchRegions.content.map((el, i) => (
            <div
              key={i}
              onClick={() => handlefrenchRegions(el)}
              className={`residencies-item ${
                selectedfrenchRegions.includes(el) && "selected"
              }`}
            >
              {el}
            </div>
          ))}
        </div>
      </div>
      <div className="residencies-menu">
        <span
          onClick={() => toggleAccordion(residenciesData.globalRegions.key)}
          className={`residencies-header ${
            activeMenu === "GR" && openMenu && "open"
          }`}
        >
          {residenciesData.globalRegions.title}
          {activeMenu === "GR"&&openMenu?<ArrowDropDownCircleRounded className='rotate'/> : <ArrowDropDownCircleRounded/>} 
        </span>
        <div
          className={`residencies-items ${
            activeMenu === "GR" && openMenu && "open"
          }`}
        >
          {residenciesData.globalRegions.content.map((el, i) => (
            <div
              key={i}
              onClick={() => handleglobalRegions(el)}
              className={`residencies-item ${
                selectedglobalRegions.includes(el) && "selected"
              }`}
            >
              {el}
            </div>
          ))}
        </div>
      </div>
      <div className="residencies-menu">

        <div className="country-filter">
          <div className="country-left">
          <span className={`residencies-header`}>
          {residenciesData.countries.title}
        </span>
          {selectedCountries.map((el, i) => (
              <div className='selected-countries' key={i}>
                {el.country}
                <Close className='closeBtn' onClick={() => handleCountryDeselect(el)}/>
              </div>
            ))}
            <div className='country-item country-search'>
            <input type="text" onChange={(e)=>setsearch(e.target.value)} placeholder='________________________' />
            </div>
        {filteredCountries.filter(word=>word.country.toLocaleLowerCase().includes(search.toLocaleLowerCase())).slice(0,1).map((el,i)=>
          <div className={`country-item ${!search && 'hide'}`} key={i} onClick={()=>handleCountrySelect(el)}>
              {el.country}
          </div>  
          )}
        </div>
        <div className='country-right'>
        <span className={`residencies-header`}>
          {residenciesData.globalRegions.title}
        </span>
        {selectedCountries.map((el, i) => (
          <div className='selected-countries' key={i}>
              {el.continent}
            </div>
          ))}
          <div className="country-item"><span style={{visibility:'hidden'}} >placeholder</span></div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default ResidenciesFilter;
