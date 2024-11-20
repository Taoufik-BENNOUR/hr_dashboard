import { useEffect, useRef, useState } from "react";
import { Close } from "@mui/icons-material";
import countryCodes from "../../data/CountryCodes.json"
import { Box, Modal } from "@mui/material";

const ContactsAddNewClient = () => {

  const [users, setUsers] = useState([
    { column1: "First name", inputs: "",type:"text" },
    { column1: "Last name", inputs: "",type:"text" },
    { column1: "Email 01", inputs: "",type:"email" },
    { column1: "Email 02", inputs: "",type:"email" },
    { column1: "Phone 01",countryCode: "+33",  inputs: "",type:"number" },
    { column1: "Phone 02",countryCode: "+33",  inputs: "",type:"number" },
    { column1: "LinkedIn link", inputs: "",type:"url" }
  ]);
  const handleInputChange = (index, value) => {
    const updatedUsers = [...users];
    updatedUsers[index].inputs = value;
    setUsers(updatedUsers);
  };
  const handleCountryCodeChange = (index, value) => {
    const updatedUsers = [...users];
    updatedUsers[index].countryCode = value;
    setUsers(updatedUsers);
  };
  const componentRef = useRef(null);

  return (
    <div  ref={componentRef} className="contacts-container">
    <table>
      <tbody>
        <tr className="contacts-header">
          <th style={{ width: "20%" }}></th>
          <th style={{ width: "40%" }}>New</th>
        </tr>
        {users.map((user, index) => (
          <tr key={index}>
            <td style={{ width: "20%" }}>{user.column1}</td>
            <td style={{ width: "40%" }} className="contacts-actual">
              <div style={{display:"flex"}}>
              {user.column1==="Phone 01" || user.column1==="Phone 02"
              ?
              <>
                 <select
                    style={{width:"40%"}}
                    className="contacts-input"
                    onChange={(e) => handleCountryCodeChange(index, e.target.value)}
                    value={user.countryCode}
                  >
                    {countryCodes.map(country=>
                      (<option value={country.dial_code}>{country.dial_code}</option>)
                      )}
     
                    
                  </select>
            <input className="contacts-input"
              type={user.type}
              value={user.inputs}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
              </>
      :
        <input className="contacts-input"
        type={user.type}
        value={user.inputs}
        onChange={(e) => handleInputChange(index, e.target.value)}
        />
      }
</div>
              <div className={`contacts-actual-data ${user.inputs && "filled"}`}>
                <span>{user.countryCode}{user.inputs}</span>
                <Close className='closeBtn' onClick={() => handleInputChange(index, "")}/>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default ContactsAddNewClient