import React, { useEffect, useState } from "react";
import "./ratingComponent.css";
import { Star_Gold_Filled, Star_Grey_Filled } from "../../data/icons";

const RatingComponent = ({isSingle,iconsCount,getValue}) => {
  const [selectedRating, setSelectedRating] = useState([]);
  const handleRating = (rate) => {
    if (selectedRating.includes(rate)) {
      setSelectedRating(selectedRating.filter((el) => el !== rate));
      getValue(selectedRating.filter((el) => el !== rate))
    } else {
      setSelectedRating([...selectedRating, rate]);
      getValue([...selectedRating, rate])
    }
  };
  const handleSingle = (rate) => {
      if(selectedRating===rate){
        setSelectedRating(null)
        getValue(null)
      }else{
        setSelectedRating(rate)
        getValue(rate)
      }
    }; 
    return (
    <div className="rating-container">
      {Array.from(new Array(iconsCount)).map((el, i) => (
        <span
        key={i}
        className="rating" onClick={() =>isSingle?handleSingle(i): handleRating(i)}>
{isSingle?
          <img
          className="rating-icon"
          src={selectedRating===i ? Star_Gold_Filled : Star_Grey_Filled}
          alt={selectedRating===i ? Star_Gold_Filled : Star_Grey_Filled}
        />:
          <img
          className="rating-icon"
          src={selectedRating.includes(i) ? Star_Gold_Filled : Star_Grey_Filled}
          alt={selectedRating.includes(i) ? Star_Gold_Filled : Star_Grey_Filled}
        />
        }
        <span className="rating-value">{i}</span>
        </span>
        
      ))}
    </div>
  );
};

export default RatingComponent;
