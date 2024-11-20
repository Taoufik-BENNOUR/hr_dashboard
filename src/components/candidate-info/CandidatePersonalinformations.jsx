import { AddTask, CopyAllOutlined, Try } from "@mui/icons-material";
import "./personalinformations.css";
import { Add_new_opportunity, Copy_paste, LinkedIn, Message_Empty } from "../../data/icons";
import { useState } from "react";

const CandidatePersonalinformations = props => {
  const handleClick = text => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // console.log(text);
      })
      .catch(error => {
        console.error("Failed to copy text: ", error);
      });
  };

  return (
    <div className="personal-info-wrapper">
      <div className="personal-info-name" onClick={() => props.handleClientModification()}>
        <p>
          <b> {props.data[props.selectedItemInfos].fullName} </b>{" "}
          <img onClick={() => handleClick(props.data[props.selectedItemInfos].fullName)
} width={15} src={Copy_paste} alt="" />
        </p>
        <p>
          {props.data[props.selectedItemInfos].email}{" "}
          <img onClick={() => handleClick(props.data[props.selectedItemInfos].email)} width={15} src={Copy_paste} alt="" />
        </p>
      </div>
      {props.pageName==='clients'&& <img src={Add_new_opportunity} width={30} alt="Add_new_opportunity" /> }
      <a className="linkedin-url" href={props.data[props.selectedItemInfos].linkedinURL}>
        <img width={30} src={LinkedIn} alt="LinkedIn" />
      </a>
      <div className="personal-info-phone">
        <p>
          {props.data[props.selectedItemInfos].phone1}
          <img onClick={() => handleClick(props.data[props.selectedItemInfos].phone1)} width={15} src={Copy_paste} alt="" />
        </p>
        <p>
          {props.data[props.selectedItemInfos].phone2}
          <img onClick={() => handleClick(props.data[props.selectedItemInfos].phone2)} width={15} src={Copy_paste} alt="" />
        </p>
      </div>
      {props.pageName === 'candidates'&& <img width={30} src={Message_Empty} alt="" />}
    </div>
  );
};

export default CandidatePersonalinformations;
