import { useEffect, useState } from "react";
import "./sidebar.css"
import { Info, NotificationsNone, Search, Spa } from "@mui/icons-material";
import sidebarData from "../../data/sidebarData";
import PopUp from "../pop-up/PopUp";

const Sidebar = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (newPlacement,i) => (event) => {
    event.preventDefault()
    setAnchorEl(event.currentTarget);
    setOpen((prev) => currentIndex !== i || !prev);
    setPlacement(newPlacement);
    setCurrentIndex(i)

    
    }
  

  


    return (
      <div className={`sidebar ${open&& "active"}`}>
      <div className="sidebarWrapper">
              <ul lassName='sidebarItems' >
          {sidebarData.map((item,i)=>
                     ( <a  onClick={handleClick("right-start",i)} className='link' href={item?.path}>
                        <li key={i} className={`sidebarItem ${open&& "active"}`}>
                           {<item.icon/>}<span>{item.title}</span>
                        </li>
                      </a>))}
              </ul>     
          <PopUp setOpen={setOpen} open={open} anchorEl={anchorEl} placement={placement} index={currentIndex} />
      </div>
    </div>
  )
}

export default Sidebar