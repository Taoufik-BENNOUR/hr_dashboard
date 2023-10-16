import { useState } from "react";
import "./sidebar.css"
import { Info, NotificationsNone, Search, Spa } from "@mui/icons-material";
import sidebarData from "../../data/sidebarData";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menuIndex,e) => {
    e.preventDefault();
    if (activeMenu === menuIndex) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuIndex);
    }
  };
    return (
      <div className='sidebar'>
      <div className="sidebarWrapper">
          {sidebarData?.map((menu,i)=>(
          <div key={i} className="sidebarMenu">
          <h3 className="sidebarTitle" >{menu.menuTitle}</h3>
          {menu?.menuItems.map((item,i)=>
              <ul key={i} className='sidebarItems' >
                      <a  className='link' href={item?.path} onClick={(e) => toggleMenu(i,e)}>
                          <li className={`sidebarItem ${activeMenu === i ? "active" : ""}`} >
                              <item.icon/> <span>{item.title}</span> 
                              {activeMenu === i && (
                            <div className="submenu">
                              Pop up
                            </div>)}
                          </li>
                      </a>

              </ul>     
          )}
      </div>
      )
      )}
      </div>
  </div>
  )
}

export default Sidebar