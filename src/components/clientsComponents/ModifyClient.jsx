import { useState } from "react"
import { Ghost_modify_client_Empty, Ghost_modify_client_Filled } from "../../data/icons"
import "./modifyClient.css"

const ModifyClient = () => {
    const [isNoLongerWorking, setIsNoLongerWorking] = useState(false)
    
  return (
    <div className={`modify-client-item ${isNoLongerWorking&&'filled'}`} onClick={()=>setIsNoLongerWorking(!isNoLongerWorking)} >
        <img src={Ghost_modify_client_Empty} alt="" />
    </div>
  )
}

export default ModifyClient