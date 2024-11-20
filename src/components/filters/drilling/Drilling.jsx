import React, { useEffect } from "react";
import { useState } from "react";
import drillData from "../../../data/drilling.json";
import "./drilling.css";
import { ArrowDropDownCircleRounded } from "@mui/icons-material";
import { useFilters } from "../../../context/FiltersContext/FiltersContext";
import RatingComponent from "../../rating/RatingComponent";
const Drilling = () => {
  const {
    selectedDrillingRigs,
    setselectedDrillingRigs,
    selectedDrillingPositions,
    setselectedDrillingPositions,
    selectedRigPositions,
    setselectedRigPositions,
  } = useFilters();

  const [openMenu, setopenMenu] = useState(
    drillData.drillingPositions.title ? true : false
  );
  const [activeMenu, setactiveMenu] = useState(
    drillData.drillingPositions.title
  );
  const toggleAccordion = (menu) => {
    setopenMenu((prev) => activeMenu !== menu || !prev);
    setactiveMenu(menu);
  };
  const handleDrillingRigs = (DrillRig) => {
    if (selectedDrillingRigs.includes(DrillRig)) {
      setselectedDrillingRigs(
        selectedDrillingRigs.filter((item) => item !== DrillRig)
      );
    } else {
      setselectedDrillingRigs((prev) => [...prev, DrillRig]);
    }
  };
  const handleDrillingPositions = (e,drillPos) => {
    if(e.target.className.match('click-target')){
      const isdrillPosSelected = selectedDrillingPositions.some((item) => item.elementName === drillPos);
      if (isdrillPosSelected) {
        setselectedDrillingPositions((prev) =>
          prev.filter((item) => item.elementName !== drillPos)
        );
      } else {
        setselectedDrillingPositions((prevRatings) => [...prevRatings, { elementName: drillPos, rating: null }]);
      }
    }
  
  };

  const handleRigPositions = (RigPost) => {
    if (selectedRigPositions.includes(RigPost)) {
      setselectedRigPositions(
        selectedRigPositions.filter((item) => item !== RigPost)
      );
    } else {
      setselectedRigPositions((prev) => [...prev, RigPost]);
    }
  };

  const handleElementRating = (elementName,rating) => {

    setselectedDrillingPositions((prevPositions) =>
    prevPositions.map((position) =>
      position.elementName === elementName ? { ...position, rating } : position
    )
  );
  };

  return (
    <div>
      <div className="drilling-container">
        <div className="drilling-menu">
          <span className="drilling-header">
            <span></span>
            {drillData.drillingRigs.title}
            <span></span>
          </span>
          <div className={`drilling-items open`}>
            {drillData.drillingRigs.content.map((el, i) => (
              <div
                key={i}
                onClick={() => handleDrillingRigs(el)}
                className={`drilling-item ${
                  selectedDrillingRigs.includes(el) && "selected"
                }`}
              >
                {el}
              </div>
            ))}
          </div>
        </div>
        <div className="drilling-menu">
          <span
            onClick={() => toggleAccordion(drillData.drillingPositions.title)}
            className={`drilling-header ${
              activeMenu === "Drilling positions" && openMenu && "open"
            }`}
          >
            <span></span>
            {drillData.drillingPositions.title}
            {activeMenu === "Drilling positions" && openMenu ? (
              <ArrowDropDownCircleRounded className="rotate" />
            ) : (
              <ArrowDropDownCircleRounded />
            )}
          </span>
          <div
            className={`drilling-items ${
              activeMenu === "Drilling positions" && openMenu && "open"
            }`}
          >
            {drillData.drillingPositions.content.map((el, i) => (
              <div
              onClick={(e) => handleDrillingPositions(e,el)}
                key={i}
                className={`drilling-item ${
                  selectedDrillingPositions.some((item) => item.elementName === el) && "selected"
                } click-target`}
              >
                <span className="click-target">{el}</span>
 {selectedDrillingPositions.some((item) => item.elementName === el)&&
 <RatingComponent
                    isSingle={true}
                    iconsCount={3}
                    getValue={(value)=>handleElementRating(el,value)}
                  />}
              </div>
            ))}
          </div>
        </div>
        <div className="drilling-menu">
          <span
            onClick={() => toggleAccordion(drillData.rigPositions.title)}
            className={`drilling-header ${
              activeMenu === "Rig positions" && openMenu && "open"
            }`}
          >
            <span></span>
            {drillData.rigPositions.title}
            {activeMenu === "Rig positions" && openMenu ? (
              <ArrowDropDownCircleRounded className="rotate" />
            ) : (
              <ArrowDropDownCircleRounded />
            )}
          </span>
          <div
            className={`drilling-items ${
              activeMenu === "Rig positions" && openMenu && "open"
            }`}
          >
            {drillData.rigPositions.content.map((el, i) => (
              <div
                key={i}
                onClick={() => handleRigPositions(el)}
                className={`drilling-item ${
                  selectedRigPositions.includes(el) && "selected"
                }`}
              >
                {el}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drilling;
