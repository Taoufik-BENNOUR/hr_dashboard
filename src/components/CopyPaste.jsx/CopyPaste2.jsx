import React, { useState } from "react";
import { CopyAll, CopyAllOutlined, CopyAllRounded } from "@mui/icons-material";

const CopyPaste2 = () => {
  const [datafrom1, setdataFrom1] = useState("data datafrom 1");
  const [datafrom2, setdataFrom2] = useState("data datafrom 2");
  const [datafrom3, setdataFrom3] = useState("data datafrom 3");

  const [to1, setTo1] = useState("datato 1");
  const [to2, setTo2] = useState("datato 2");
  const [to3, setTo3] = useState("datato 3");

  const [copiedText, setCopiedText] = useState("");

  const handleCopyAll = (event) => {
    const allText = `${datafrom1}\n${datafrom2}\n${datafrom3}`;

      setCopiedText(allText);
  };

  const handleDrag = (event) => {
    const allText = `${datafrom1}\n${datafrom2}\n${datafrom3}`;

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
        onClick={(e) => handleCopyAll(e)}
        onDragStart={(e) => handleDrag(e)}
        />
        <div>{datafrom1}</div>
        <div>{datafrom2}</div>
        <div>{datafrom3}</div>
      </div>
      <div
     
      >
        <img width={25} src="https://i0.wp.com/cdn.pixabay.com/photo/2013/07/13/12/41/copy-160129_1280.png?resize=320%2C319&ssl=1" onClick={handlePasteAll}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e)}
          draggable="false"
          />
        <div>{to1}</div>
        <div>{to2}</div>
        <div>{to3}</div>
      </div>
    </div>
  );
};

export default CopyPaste2;
