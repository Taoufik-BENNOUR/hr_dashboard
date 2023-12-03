import { useRef, useState } from 'react';
import { useDrop } from 'react-dnd/dist';
import { NativeTypes } from 'react-dnd-html5-backend';
import "./dragandrop.css"
import { resume_example } from '../../data/icons';
const DragAndDrop = () => {
  const [file, setfile] = useState(null);
  const [preview, setpreview] = useState(null);

  const pdfIframeRef = useRef(null);
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
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    if (pdfIframeRef.current) {
      const success = pdfIframeRef.current.contentWindow.find(searchText);

      if (success) {
        // Attempt to scroll to the found text
        const foundNode = pdfIframeRef.current.contentWindow.getSelection().anchorNode;
        if (foundNode && foundNode.parentElement) {
          const foundElement = foundNode.parentElement;
          pdfIframeRef.current.contentWindow.scrollTo(0, foundElement.offsetTop - 50); // Adjust as needed
        }
      }
    }
  };
  console.log(document.getElementById('pdf-iframe'));
  return (
    <div className='dragAndDrop'>
      <div className='left' ref={drop}>
        {file?.name}
      </div>
      <div className='right'>
      <input
        type="text"
        placeholder="Search text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
            <button onClick={handleSearch}>Search</button>

        <iframe 
          ref={pdfIframeRef}
        frameBorder="0"
        onLoad={() => handleSearch()}
  src={resume_example} width={"100%"} height={"100%"} ></iframe>
      </div>
    </div>
  );
};

export default DragAndDrop;