import { useEffect, useRef, useState } from "react";
import "./sidebar.css"
import { Close, Info, NotificationsNone, Search, Spa } from "@mui/icons-material";
import sidebarData from "../../data/sidebarData";
import PopUp from "../pop-up/PopUp";
import { Keyword_filled } from "../../data/icons";
import PopUpKeyword from "../pop-up/PopUpKeyword";
import Drilling from "../filter/industries/DrillingFilter";
import TableLayout from "../table/Table";

const Sidebar = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const [currentIndex, setCurrentIndex] = useState(null);

  const [openKey, setopenKey] = useState(true);

  const handleClick = (newPlacement,i) => (event) => {
    event.preventDefault()
    setAnchorEl(event.currentTarget);
    setOpen((prev) => currentIndex !== i || !prev);
    setPlacement(newPlacement);
    setCurrentIndex(i)

    }
  
    const handleExpand = (e) => {
      e.preventDefault()
      const search = document.querySelector(".search-input");
      setOpen((prev) => currentIndex !== 0 || !prev);
      openKey((prev) =>!prev);
      setCurrentIndex(0)
      setopenKey(!openKey)
    };
    const getPopupContent = (index) => {
      switch (index) {
        case 0:
          return <TableLayout title={"title"} />;
        case 4:
          return <Drilling />;
        default:
          return <TableLayout  title={"title"} />; 
      }
    };


    return (
      <div className={`sidebar ${open&& "active"}`} id="sidebar">
              <ul className="nav-keyword-container" >
              <a onClick={handleExpand}  className={`nav-keyword ${currentIndex===0 && open&& "selected"}`}>
                        <li  className={`sidebarItem ${openKey&&"keywordOpen"}`}>
                          <img href={"/"} className="keyword-icon" width={25} src={Keyword_filled} alt="" />
                           <span className={`${openKey && "keyword-title"}`}>Keyword</span>
          {                <>
           <input className={`search-input ${openKey && "search-expanded"}`} type="search" />
           </>}

                        </li>
                      </a>

          {sidebarData.map((item,i)=>
                     ( <a  onClick={handleClick("right",i+1)} className={`link ${currentIndex===i+1 && open&& "active"}`} href={item?.path}>
                        <li key={i+1} className={`sidebarItem ${open&& "active"}`}>
                          <img className="icons" width={item.size} src={currentIndex===i+1 &&open?item.icon : item.iconEmpty} alt="" /> 
                          <span className={`${currentIndex===i+1&& open&& "active"}`}>{item.title}</span>
                        </li>
                      </a>))}
              </ul>     
          <PopUp  content={getPopupContent(currentIndex)} setOpen={setOpen} open={open} anchorEl={anchorEl} placement={placement} index={currentIndex} />
          {/* <PopUpKeyword  setOpen={setOpen} open={open} anchorEl={anchorEl} placement={placement}  /> */}
      </div>
  )
}

export default Sidebar