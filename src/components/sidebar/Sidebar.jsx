import { useEffect, useRef, useState } from "react";
import "./sidebar.css"
import { Close, Info, NotificationsNone, Search, Spa } from "@mui/icons-material";
import sidebarData from "../../data/sidebarData";
import PopUp from "../pop-up/PopUp";
import { Keyword_filled } from "../../data/icons";

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
      setopenKey(!openKey)
    };
  


    return (
      <div className={`sidebar ${open&& "active"}`} id="sidebar">
              <ul lassName='sidebarItems' >
              <a className="nav-keyword">
                        <li className={`sidebarItem ${openKey&&"keywordOpen"}`}>
                          <img onClick={handleExpand} href={"/"} className="keyword-icon" width={25} src={Keyword_filled} alt="" />
                           <span className={`${openKey && "keyword-title"}`}>Keyword</span>
          {                <>
           <input className={`search-input ${openKey && "search-expanded"}`} type="search" />
           </>}

                        </li>
                      </a>

          {sidebarData.map((item,i)=>
                     ( <a  onClick={handleClick("right",i)} className={`link ${currentIndex===i && open&& "active"}`} href={item?.path}>
                        <li key={i} className={`sidebarItem ${open&& "active"}`}>
                          <img className="icons" width={item.size} src={currentIndex===i &&open?item.icon : item.iconEmpty} alt="" /> 
                          <span className={`${currentIndex===i&& open&& "active"}`}>{item.title}</span>
                        </li>
                      </a>))}
              </ul>     
          <PopUp  setOpen={setOpen} open={open} anchorEl={anchorEl} placement={placement} index={currentIndex} />
      </div>
  )
}

export default Sidebar