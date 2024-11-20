// import { Close } from '@mui/icons-material'
// import nationalitiesData from "../../data/nationalities.json"
// import { useState } from "react";

// const Country = ({data}) => {
//   const [searchText, setSearchText] = useState('');
//   const [displayedNationalities, setDisplayedNationalities] = useState([]);
//   const [selectedNationalities, setSelectedNationalities] = useState([]);
//   const [previouslySelecteNationalities, setPreviouslySelecteNationalities] = useState([]);

//   const handleSearch = (e) => {
//   const searchInput = e.target.value;
//   setSearchText(searchInput);
  
//   if(searchInput===''){
//     setDisplayedNationalities([])
//   }else{
//     const previouslySelectednationalityNames = previouslySelecteNationalities.map((nationality) => nationality);

//     const filtredNationalities = data.filter((nationality) =>nationality.toLowerCase()
//     .includes(searchInput.toLowerCase())
//       )
//       .slice(0, 3)
//       .filter(
//         (nationality) =>!selectedNationalities.includes(nationality) && !previouslySelectednationalityNames.includes(nationality)
//       );
  
//     setDisplayedNationalities(filtredNationalities);
//   }
// };
// const handleSelectNationality = (nationality) => {
//   setSelectedNationalities((prevSelected) => [...prevSelected, nationality]);
//   setPreviouslySelecteNationalities((prev) => [...prev, nationality]);
//   const updatedDisplayedNationalities = displayedNationalities?.filter((c) => c !== nationality);
//   setDisplayedNationalities(updatedDisplayedNationalities);
// };

// const handleDeselectNationality = (nationality) => {
//   setSelectedNationalities((prevSelected) =>prevSelected.filter((c) => c !== nationality));
//   setDisplayedNationalities((prevDisplayed) =>prevDisplayed.includes(nationality) ? prevDisplayed : [...prevDisplayed, nationality]);
//   setPreviouslySelecteNationalities((prevPrevSelected) =>prevPrevSelected.filter((c) => c !== nationality))};

//   return (
//     <div className="nationalities-container">
//           {selectedNationalities?.map(el=> 
//         <div  className='selected-nationalities'>
//           {el}<Close onClick={()=>handleDeselectNationality(el)} className='closeBtn' />
//         </div> )}
//       <div className='nationalities-item'>
//            <input className='nationalities-search' type="text" onChange={handleSearch} placeholder='__________________________________' />
//         </div>
//         {displayedNationalities?.map((nationality, i) => (
//           <div onClick={()=>handleSelectNationality(nationality)} className='nationalities-item' key={i}>
//             <span >{nationality}</span>
//           </div>
//         ))}
//             {Array(Math.max(0, 3 - displayedNationalities.length)).fill().map((_, i) => (
//                 <div className='nationalities-item' key={i}> <span style={{visibility:"hidden"}}>placeholder</span></div>))}

//     </div>
//   )
// }

// export default Country;