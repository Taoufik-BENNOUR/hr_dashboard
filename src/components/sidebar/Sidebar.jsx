import { useEffect, useRef, useState } from "react";
import "./sidebar.css"
import { Info, NotificationsNone, Search, Spa } from "@mui/icons-material";
import sidebarData from "../../data/sidebarData";
import PopUp from "../pop-up/PopUp";

const Sidebar = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const [currentIndex, setCurrentIndex] = useState(null);
  const title = useRef()


  const handleClick = (newPlacement,i) => (event) => {
    event.preventDefault()
    setAnchorEl(event.currentTarget);
    setOpen((prev) => currentIndex !== i || !prev);
    setPlacement(newPlacement);
    setCurrentIndex(i)


    }
  
    const sidebarContainerRef = useRef(null);

  


    return (
      <div className={`sidebar ${open&& "active"}`}>
      <div className="sidebarWrapper" ref={sidebarContainerRef}>
              <ul lassName='sidebarItems' >
          {sidebarData.map((item,i)=>
                     ( <a  onClick={handleClick("right-end",i)} className={`link ${currentIndex===i && open&& "active"}`} href={item?.path}>
                        <li key={i} className={`sidebarItem ${open&& "active"}`}>
                          <img className="icons" width={item.size} src={currentIndex===i &&open?item.icon : item.iconEmpty} alt="" /> <span className={`${currentIndex===i&& open&& "active"}`} ref={title}>{item.title}</span>
                        </li>
                      </a>))}
              </ul>     
          <PopUp title={title} setOpen={setOpen} open={open} anchorEl={anchorEl} placement={placement} index={currentIndex} />
      </div>
    </div>
  )
}

export default Sidebar