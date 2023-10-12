import { useState } from "react";
import "./sidebar.css"
import { Info, NotificationsNone, Search, Spa } from "@mui/icons-material";
import sidebarData from "../../data/sidebarData";

const Sidebar = () => {
    
    return (
      <div className='sidebar'>
      <div className="sidebarWrapper">
          {sidebarData?.map((menu,i)=>(
          <div key={i} className="sidebarMenu">
          <h3 className="sidebarTitle" >{menu.menuTitle}</h3>
          {menu?.menuItems.map((item,i)=>
              <ul key={i} className='sidebarItems' >
                      <a className='link' href={item?.path}>
                          <li className='sidebarItem'>
                              <item.icon/>{item.title}
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