import React, { useState } from "react";
import "./table.css";
import { Clear } from "@mui/icons-material";
import { Cross } from "../../data/icons";

const TableLayout = ({ title }) => {
  const usersData = [
    { id: Math.floor(Math.random()*100), fistName: "John", lastName: "Wer",CandidateExisting: "Last name"},
    { id: Math.floor(Math.random()*100), fistName: "John", lastName: "Wer",CandidateExisting: "Last name"},
    { id: Math.floor(Math.random()*100), fistName: "John", lastName: "Wer",CandidateExisting: "Last name"},
    { id: Math.floor(Math.random()*100), fistName: "John", lastName: "Wer",CandidateExisting: "Last name"},
  ];
  const [users, setusers] = useState(usersData)
  const handleDelete = (id) =>{
    const filtredData = users.filter((el,i)=>el.id !== id)
    setusers(filtredData)
  }

  return (
    <table className="import-cv-table-container">
        <thead>
        <tr>
          <th className="table-header" ></th>
          <th className="table-header" ></th>
          <th className="table-header" style={{ width: "20%" }}>First name</th>
          <th className="table-header" style={{ width: "20%" }}>Last name</th>
          <th className="table-header" style={{ width: "50%" }}>Candidate existing</th>
          <th className="table-header" style={{ width: "5%" }}></th>
        </tr>
        </thead>
        <tbody>
        {users.map((user,i) => (
          <tr key={user.id}>
            <td>{i+1}</td>
            <td className="edit">Edit</td>
            <td style={{ width: "20%" }}>{user.fistName}</td>
            <td style={{ width: "20%" }}>{user.lastName}</td>
            <td style={{ width: "50%" }}>{user.CandidateExisting}</td>
            <td style={{ width: "5%" }} className="removeBtn"><img src={Cross} width={15} alt="" onClick={()=>handleDelete(user.id)} /></td>
          </tr>
        ))}
        </tbody>
    </table>
  );
};

export default TableLayout;
