import React, { useState } from 'react'
import residenciesData from "../../data/residencies.json"
import frenchCities from "../../data/frenchCityies.json"
import { Close } from '@mui/icons-material';
import "./locationClient.css"
const LocationClient = () => {

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
    const [searchCity, setsearchCity] = useState("");
    const [selectedCities, setSelectedCities] = useState([]);
    const [filteredCities, setFilteredCities] = useState(frenchCities);

    const handleCitySelect = (selectedCity) => {
      const updatedselectedCities = [...selectedCities, selectedCity];
      setSelectedCities(updatedselectedCities);
      setFilteredCities((prevFilteredCities) =>
        prevFilteredCities.filter((el, i) => el.city !== selectedCity.city)
      );
    };
    // const handleCitySelect = (selectedCity) => {
    //     const updatedSelectedCities = [...selectedCities];
    //     const regionsWithSameCity = filteredCities.filter(
    //       (city) => city.city === selectedCity.city
    //     );
    //     updatedSelectedCities.push(...regionsWithSameCity);
    //     setSelectedCities(updatedSelectedCities);
    //   };
    const handleCityDeselect = (dselectedcity) => {
      const updatedFilteredCities = [...filteredCities, dselectedcity];
      setFilteredCities(updatedFilteredCities);
      setSelectedCities((prevSelectedCities) =>
        prevSelectedCities.filter((el, i) => el.region !== dselectedcity.region)
      );
    };
  return (
    <div className='location-client'>
<div className="residencies-menu">
<div className="country-filter">
  <div className="country-left">
  <span className={`location-header`}>
  {"City"}
</span>
  {selectedCities.map((el, i) => (
      <div className='client-selected-countries' key={i}>
        {el.city}
        <Close className='closeBtn' onClick={() => handleCityDeselect(el)}/>
      </div>
    ))}
    <div className='country-item country-search'>
    <input type="text" onChange={(e)=>setsearchCity(e.target.value)} placeholder='________________________' />
    </div>
{filteredCities.filter(word=>word.city.toLocaleLowerCase().includes(searchCity.toLocaleLowerCase())).slice(0,1).map((el,i)=>
  <div className={`country-item ${!searchCity && 'hide'}`} key={i} onClick={()=>handleCitySelect(el)}>
      {el.city}
  </div>  
  )}
</div>
<div className='country-right'>
<span className={`location-header`}>
  {"French Local regions"}
</span>
{selectedCities.map((el, i) => (
  <div className='client-selected-countries' key={i}>
      {el.region}
    </div>
  ))}
  <div className="country-item"><span style={{visibility:'hidden'}} >placeholder</span></div>
  </div>
</div>
</div>
<div className="residencies-menu">
<div className="country-filter">
  <div className="country-left">
  <span className={`location-header`}>
  {"Country"}
</span>
  {selectedCountries.map((el, i) => (
      <div className='client-selected-countries' key={i}>
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
<span className={`location-header`}>
  {"Global regions"}
</span>
{selectedCountries.map((el, i) => (
  <div className='client-selected-countries' key={i}>
      {el.continent}
    </div>
  ))}
  <div className="country-item"><span style={{visibility:'hidden'}} >placeholder</span></div>
  </div>
</div>
</div>
    </div>
  )
}

export default LocationClient