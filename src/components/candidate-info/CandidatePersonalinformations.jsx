import { CopyAllOutlined, Try } from "@mui/icons-material"
import "./personalinformations.css"
import { Copy_paste, LinkedIn, Message_Empty } from "../../data/icons"
import { useState } from "react"

const CandidatePersonalinformations = () => {

    const handleClick = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            console.log(text);
          }).catch((error) => {
            console.error('Failed to copy text: ', error);
          });
    }
  const [first, setfirst] = useState("first name")
  const [last, setlast] = useState("last name")
    
  return (
    <div className="personal-info-wrapper">
        <div className="personal-info-name">
            <p ><b> First name Last Name </b> <img  onClick={() => handleClick(`${first} ${last}`)} width={15} src={Copy_paste} alt="" /></p>  
            <p  >email@email.com <img onClick={() => handleClick('email@email.com')} width={15} src={Copy_paste} alt="" /></p>  
        </div>
        <img width={30} src={LinkedIn} alt="" />
        <div className="personal-info-phone">
            <p >+33 7 XX XX XX XX <img  onClick={() => handleClick('+33 7 XX XX XX XX')} width={15} src={Copy_paste} alt="" /></p>  
            <p >+33 5 XX XX XX XX <img onClick={() => handleClick('+33 5 XX XX XX XX')} width={15} src={Copy_paste} alt="" /></p>  
        </div>
        <img width={30} src={Message_Empty} alt="" />
    </div>
  )
}

export default CandidatePersonalinformations