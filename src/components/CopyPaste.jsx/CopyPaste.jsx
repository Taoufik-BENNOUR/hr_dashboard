import React, { useState } from "react";
import { CopyAll, CopyAllOutlined, CopyAllRounded } from "@mui/icons-material";

const CopyPaste = () => {
  const [from1, setFrom1] = useState("from 1");
  const [from2, setFrom2] = useState("from 2");
  const [from3, setFrom3] = useState("from 3");

  const [to1, setTo1] = useState("to 1");
  const [to2, setTo2] = useState("to 2");
  const [to3, setTo3] = useState("to 3");

  const [copiedText, setCopiedText] = useState("");

  const handleCopyAll = (event) => {
    const allText = `${from1}\n${from2}\n${from3}`;

      setCopiedText(allText);
  };

  const handleDrag = (event) => {
    const allText = `${from1}\n${from2}\n${from3}`;

        event.dataTransfer.setData("text/plain", allText)
  };
  const handlePasteAll = () => {
    const lines = copiedText.split("\n");
    setTo1(lines[0] || "");
    setTo2(lines[1] || "");
    setTo3(lines[2] || "");
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const draggedText = event.dataTransfer.getData("text/plain");
    const lines = draggedText.split("\n");
    setTo1(lines[0]);
    setTo2(lines[1]);
    setTo3(lines[2]);
  };
  return (
    <div>
      <div>
        <img width={25} src="https://i0.wp.com/cdn.pixabay.com/photo/2013/07/13/12/41/copy-160129_1280.png?resize=320%2C319&ssl=1"
        draggable
        onClick={(e) => handleCopyAll(e)}
        onDragStart={(e) => handleDrag(e)}
        />
        <div>{from1}</div>
        <div>{from2}</div>
        <div>{from3}</div>
      </div>
      <div
     
      >
        <img width={25} src="https://i0.wp.com/cdn.pixabay.com/photo/2013/07/13/12/41/copy-160129_1280.png?resize=320%2C319&ssl=1" onClick={handlePasteAll}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e)} />
        <div>{to1}</div>
        <div>{to2}</div>
        <div>{to3}</div>
      </div>
    </div>
  );
};

export default CopyPaste;
