import { useState } from "react";
import "./sidebar.css"
import { NotificationsNone } from "@mui/icons-material";

const Sidebar = () => {
    
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
  
        <div
          id="mySidebar"
          className={`sidebar`}
                 >
          <a href="#">
            <span>
              <i className="material-icons">info</i>
              <span className="icon-text">about</span>
            </span>
          </a>
          <br />
          <a href="#">
            <i className="material-icons">spa</i>
            <span className="icon-text">services</span>
          </a>
          <br />
          <a href="#">
            <i className="material-icons">monetization_on</i>
            <span className="icon-text">clients</span>
          </a>
          <br />
          <a href="#">
            <i className="material-icons">email</i>
            <span className="icon-text">contact</span>
          </a>
        
        </div>
  
    
      </div>
  )
}

export default Sidebar