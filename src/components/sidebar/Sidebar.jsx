import { useEffect, useRef, useState } from "react";
import "./sidebar.css";
import { Info, NotificationsNone, Search, Spa } from "@mui/icons-material";
import sidebarData from "../../data/sidebarData";
import PopUp from "../pop-up/PopUp";
import candidates from "../../data/candidates";
import IndustriesFilter from "../filters/industries/IndustriesFilter";
import TableLayout from "../table/Table";
import ClientsFilter from "../filters/clients/ClientsFilter";
import Drilling from "../filters/drilling/Drilling";
import AgeFilter from "../filters/age/Age";
import AvailabilitiesFilter from "../filters/availabilities/Availabilities";
import NationalitiesFilter from "../filters/nationalities/NationalitiesFilter";
import KeywordFilter from "../filters/keyword/KeywordFilter";
import CVs from "../filters/CVs/CVs";
import ExperienceLayout from "../filters/experience/ExperienceLayout";
import OpportunitiesFilter from "../filters/opportunities/OpportunitiesFilter";
import ContractsAddNewClient from "../clientsComponents/ContractsAddNewClient";
import ResidenciesFilter from "../filters/residencies/ResidenciesFilter";
import LocationClient from "../clientsComponents/LocationClient";
import ModifyClient from "../clientsComponents/ModifyClient";
import Information from "../filters/information/Information";
import Number from "../filters/number/Number";
import PositionName from "../filters/positionName/PositionName";
import LocationOpportunities from "../opportunitiesPageComponents/LocationOpportunities";
import StatusFilter from "../statusFilter/StatusFilter";
import Planning from "../opportunitiesPageComponents/planning/Planning";
import ContractsFilter from "../filters/contracts/ContractsFilter";
const Sidebar = props => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentSidebarTitle, setCurrentSidebarTitle] = useState(null);
  const title = useRef();

  const handleClick = (newPlacement, i,sidebarTitle) => event => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    setOpen(prev => currentIndex !== i || !prev);
    setPlacement(newPlacement);
    setCurrentIndex(i);
    setCurrentSidebarTitle(sidebarTitle.toLowerCase())
  };
  const sidebarContainerRef = useRef(null);
  const getPopupContent = (title,pageName) => {
    switch (title) {
      case "keywords":
        return <KeywordFilter />;
      case "industries":
        return <IndustriesFilter />;
      case "location":
        return pageName==='clients'?<LocationClient/>:<LocationOpportunities/>;
      case "drilling":
        return <Drilling />;
      case "clients":
        return <ClientsFilter />;
      case "residencies":
        return <ResidenciesFilter />;
      case "nationalities":
        return <NationalitiesFilter />;
      case "ages":
        return <AgeFilter />;
      case "availabilities":
        return <AvailabilitiesFilter />;
      case "information":
        return <Information />;
      case "contracts":
        return pageName==='home'? <ContractsFilter /> : <ContractsAddNewClient/>;
      case "number":
        return <Number />;
      case "position name":
        return <PositionName />;
      case "experience":
        return <ExperienceLayout />;
      case "cvs":
          return <CVs />;
      case "new client":
          return props.clientModification?<ModifyClient/>:  "" ;    
      case "opportunities":
          return <OpportunitiesFilter />;
      case "planning":
          return <Planning />;
      case "status":
          return <StatusFilter />;
      default :
      return "";
    }
  };
  
  return (
    <div className={`sidebar ${open && "active"}`}>
      <div className="sidebarWrapper" ref={sidebarContainerRef} id="sidebar">
        <ul className="sidebarItems">
          {props.sidebarData.map((item, i) => (
            <a key={i} onClick={handleClick("right", i,item.title)} className={`link ${currentIndex === i && open && "active"}`} href={item?.path}>
              <li key={i} className={`sidebarItem ${open && "active"}`}>
                <img className="icons" width={item.size} src={currentIndex === i && open ? item.icon : item.iconEmpty} alt="" />{" "}
                <span className={`${currentIndex === i && open && "active"}`} ref={title}>
                  {props.pageName==='home'?item.title:props.clientModification&&item.title==="New Client"?item?.title2:item.title}
                </span>
              </li>
            </a>
          ))}
{props.pageName==='home'&&<li key={"keyCvsCount"} className={`sidebarItem active"`}>
            {/* <img className="icons" width={25} alt="" />{" "} */}
            <span
              className={`${currentIndex === 1 && open && "active"}`}
              ref={title}
              style={{ color: "#000", marginTop: 45, marginLeft: 25 }}
            >
              {candidates.length + " CVs"}
              <br />
              {props.selectedCandidates !== 0 ? props.selectedCandidates + " CVs sélectionnés" : null}
            </span>
          </li>}
        </ul>
        <PopUp  content={getPopupContent(currentSidebarTitle,props.pageName)} title={title} setOpen={setOpen} open={open} anchorEl={anchorEl} placement={placement} index={currentIndex} />
      </div>
    </div>
  );
};

export default Sidebar;
