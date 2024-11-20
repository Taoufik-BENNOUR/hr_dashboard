import { useEffect, useRef, useState } from "react";
import "./contracts.css"
import { Close } from "@mui/icons-material";
import countryCodes from "../../../data/CountryCodes.json"
import { Box, Modal } from "@mui/material";
import PhoneInput, { formatPhoneNumberIntl } from 'react-phone-number-input';

import flags from 'react-phone-number-input/flags'
import 'react-phone-number-input/style.css';

const ContractsFilter = () => {

  const [users, setUsers] = useState([
    { column1: "First name", inputs: "", actual: "",type:"text" },
    { column1: "Last name", inputs: "", actual: "",type:"text" },
    { column1: "Email 01", inputs: "", actual: "",type:"email" },
    { column1: "Email 02", inputs: "", actual: "",type:"email" },
    { column1: "Phone 01", inputs: "", actual: "",type:"number" },
    { column1: "Phone 02", inputs: "", actual: "",type:"number" },
    { column1: "LinkedIn link", inputs: "", actual: "",type:"url" }
  ]);
  const handleInputChange = (index, value) => {
    const updatedUsers = [...users];
    const currentColumn = updatedUsers[index].column1;


    if (currentColumn === 'Phone 01' || currentColumn === 'Phone 02') {
      updatedUsers[index].inputs = formatPhoneNumberIntl(value);
    } else {
      updatedUsers[index].inputs = value;

    }

    setUsers(updatedUsers);
  };

  return (
    <div className="contacts-container">
    <table>
      <tbody>
        <tr className="contacts-header">
          <th style={{ width: "20%" }}></th>
          <th style={{ width: "40%" }}>New</th>
          <th style={{ width: "40%" }}>Actual</th>
        </tr>
        {users.map((user, index) => (
          <tr key={index}>
            <td style={{ width: "20%" }}>{user.column1}</td>
            <td style={{ width: "40%" }} className="contacts-actual">
              <div style={{display:"flex"}}>
              {user.column1==="Phone 01" || user.column1==="Phone 02"
              ?
              <>
                  <PhoneInput
                  flags={flags} 
                        value={user.inputs}
                        defaultCountry="FR"
                        onChange={(value) => handleInputChange(index, value)}
                        placeholder="Enter phone number"
                        className="contacts-input"
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
                <span>{user.inputs}</span>
                <Close className='closeBtn' onClick={() => handleInputChange(index, "")}/>
              </div>
            </td>
            <td style={{ width: "40%" }}>{user.actual}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default ContractsFilter