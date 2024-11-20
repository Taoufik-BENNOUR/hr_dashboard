import { Add, AttachFile } from '@mui/icons-material';
import React, { useEffect, useRef, useState } from 'react'
import { NativeTypes } from 'react-dnd-html5-backend';
import { useDrop } from 'react-dnd/dist';
import "./importcv.css"
import TableLayout from '../../components/table/Table';
import PreviewPdf from '../../components/PreviewPdf/PreviewPdf';
import { Panel, PanelGroup } from 'react-resizable-panels';
import ResizeHandle from '../../components/globalCandidateArea/ResizeHandle';
import styles from "../../components/globalCandidateArea/styles.module.css";


const ImportCV = () => {

    const [file, setfile] = useState(null)
    const [linkedInfile, setlinkedInfile] = useState(null)
    const [pdf, setPdf] = useState(null)
    const [previewPdf, setPreviewPdf] = useState(false)
    const ref = useRef(null);
    
    const [{ isOver }, drop] = useDrop({
        accept:NativeTypes.FILE,
        drop: (item, monitor) => {
          const droppedFile = item.files[0];
          if (droppedFile && droppedFile.type === 'application/pdf') {
            setfile(droppedFile);
            setPdf(URL.createObjectURL(droppedFile));

        } else {
            console.log('Invalid file type. Please drop a PDF file.');
        }
        },
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      });
        const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
       setfile(selectedFile)
       setPdf(URL.createObjectURL(selectedFile));

      };

    const [{ isOverLinkedin }, dropLinkedin] = useDrop({
        accept:NativeTypes.FILE,
        drop: (item, monitor) => {
          const droppedFile = item.files;
          setlinkedInfile(droppedFile)
        },
        collect: (monitor) => ({
            isOverLinkedin: !!monitor.isOver(),
        }),
      });
        const handleFileChangeLinkedin = (e) => {
        const selectedFile = e.target.files[0];
        selectedFile.type==='application/pdf'&&setlinkedInfile(selectedFile)
      };
      const collapsePanel = () => {
        const panel = ref.current;
        if (panel) {
          panel.resize(50, "percentages");
        }
      };
  return (
<div className={`import-cv-container`}>
<PanelGroup autoSaveId="example" direction="horizontal">
<Panel className={styles.Panel} collapsible={true} order={1} defaultSize={50} ref={ref}>
    <div className='cv-upload-container'>
        <div className='personal-cv-upload'>
            <label htmlFor="file" className='personal-cv-upload-label'>
                <span className="label-content">
                     <span>Browse files  </span>
                     <AttachFile/>
                </span>
                <input id="file" type="file" style={{ display: 'none' }} onChange={handleFileChange} accept="application/pdf" />
            </label>
            <div ref={drop} className={`drag-drop-personal-cv ${isOver ? '' : ''}`}>
                <span>
                {isOver ? <Add/> :file?file.name : 'Drag and drop personal CV here'}
                </span>
            </div>
{file&&            <button onClick={()=>setPreviewPdf(true)} className='previewPdfBtn' >Visualize</button>
}        </div>
        <div className='linkedin-cv-upload'>
            <label htmlFor="file" className='linkedin-cv-upload-label'>
                <span className="label-content">
                     <span>Browse files  </span>
                     <AttachFile/>
                </span>
                <input id="file" type="file" style={{ display: 'none' }} onChange={handleFileChangeLinkedin} />
            </label>
            <div ref={dropLinkedin} className={`drag-drop-personal-cv ${isOverLinkedin ? '' : ''}`}>
                <span>
                {isOverLinkedin ? <Add/> : 'Drag and drop LinkedIn CV here'}
                </span>
            </div>
        </div>
    </div>
    <TableLayout/>
    </Panel>
    {previewPdf&&pdf &&<>
    <ResizeHandle resizeAction={collapsePanel} />
    <Panel className={styles.Panel} collapsible={false} order={2} minSize={50}>
             <PreviewPdf  pdf={pdf} />
      </Panel>
    </>
  }
    </PanelGroup>

    </div>
  )
}

export default ImportCV