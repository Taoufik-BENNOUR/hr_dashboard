import { Add, AttachFile, PlusOne } from "@mui/icons-material"
import "./cvs.css"
import { useDrag,useDrop } from 'react-dnd'
import { useState } from "react"
import { NativeTypes } from 'react-dnd-html5-backend';

const CVs = () => {
  const [file, setfile] = useState(null)
  const [selectedWebsites, setSelectedWebsites] = useState([])

 const [{ isOver }, drop] = useDrop({
    accept:NativeTypes.FILE,
    drop: (item, monitor) => {
      const droppedFile = item.files;
      setfile(droppedFile)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
    const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
   setfile(selectedFile)
  };
  const employmentWebsite = ["Apec","Indeed","OGJS","Cadremploi","HelloWork","LinkedIn","Message"]
  const handleItemClick = (source) => {
    if (selectedWebsites.includes(source)) {
      setSelectedWebsites(selectedWebsites.filter((item) => item !== source));
    } else {
      setSelectedWebsites([...selectedWebsites, source]);
    }
};
  return (
<div  className={`cv-container`}>
      <h4 className="title">Add new a CV</h4>
      <label htmlFor="file" className="cv-upload">
        <span className="label-content">
          <span>Browse files</span>
        </span>
        <input id="file" type="file" style={{ display: 'none' }} onChange={handleFileChange} />
      </label>
      <div ref={drop} className={`drag-drop-cv ${isOver ? '' : ''}`}>
        <span>
          {isOver ? <Add/> : 'Drag and drop the new CV here'}
        </span>
      </div>
      <div className="cv-source">
        <div className="cv-source-column source">
          <span>Source</span>
        </div>
        <div className="cv-source-column">
          {employmentWebsite.map(website=> <span onClick={()=>handleItemClick(website)}
          className={`${selectedWebsites.includes(website)&&"selected"}`}
          >{website}</span> )}
        </div>
      </div>
      <div className="cv-source">
        <div className="cv-source-column source">
          <span>Order</span>
        </div>
        <div className="cv-source-column">
        </div>
      </div>
    </div>
  )
}

export default CVs