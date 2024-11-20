import { useState } from 'react';
import { useDrop } from 'react-dnd/dist';
import { NativeTypes } from 'react-dnd-html5-backend';

const DraggableFile = ({file,setfile}) => {

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

  return (
    <div ref={drop} style={{ cursor: 'move' }}>
      {file?.name}
    </div>
  );
};

export default DraggableFile;