import { useRef, useState } from 'react';
import { useDrop } from 'react-dnd/dist';
import { NativeTypes } from 'react-dnd-html5-backend';
import "./dragandrop.css"
const DragAndDrop = () => {
  const [file, setfile] = useState(null);
  const [preview, setpreview] = useState(null);

  const ref = useRef(null);
 const [{ isOver }, drop] = useDrop({
    accept:NativeTypes.FILE,
    drop: (item, monitor) => {
      const droppedFile = item.files[0];
      setfile(droppedFile)
      setpreview(URL.createObjectURL(droppedFile))
      
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  console.log(file);
  return (
    <div className='dragAndDrop'>
      <div className='left' ref={drop}>
        {file?.name}
      </div>
      <div className='right'>
        <iframe  src={preview} width={"100%"} height={"100%"} ></iframe>
      </div>
    </div>
  );
};

export default DragAndDrop;