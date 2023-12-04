import React, { useRef, useState } from 'react'
import { Document, Page,pdfjs } from 'react-pdf'
import { resume_example } from '../../data/icons';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PreviewPdf2 = ({pdf}) => {
    const [numPages, setNumPages] = useState(null);
    const pdfIframeRef = useRef();

    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
      const results = [];
  
      for (let page = 1; page <= numPages; page++) {
        const pageText = await getPageText(page);
        if (pageText.toLowerCase().includes(searchText.toLowerCase())) {
          results.push({ pageIndex: page - 1, text: searchText });
        }
      }
  
      setSearchResults(results);
  
      // Navigate to the first result
      if (results.length > 0) {
        goToPage(results[0].pageIndex + 1);
        scrollToWord(results[0].text);
      }
    };
  
    const getPageText = async (pageNumber) => {
      const pdf = await pdfjs.getDocument({ url: resume_example }).promise;
      const page = await pdf.getPage(pageNumber);
      const textContent = await page.getTextContent();
      return textContent.items.map((s) => s.str).join(' ');
    };
  
    const goToPage = (page) => {
      setNumPages(page);
    };
 
    const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
    };
    const scrollToWord = (word) => {
      const pdfViewer = pdfIframeRef.current;
      
      if (pdfViewer && pdfViewer.container) {
        const textDivs = pdfViewer.container.querySelectorAll('.textLayer > div');
        
        for (let i = 0; i < textDivs.length; i++) {
          const textDiv = textDivs[i];
          if (textDiv.textContent.includes(word)) {
            textDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
            break;
          }
        }
      }
    };
    // const scrollToWord = (word) => {
    //   const iframe = pdfIframeRef;
    //   const i = document.querySelectorAll("react-pdf__Document");
    //   if (iframe && iframe.contentDocument && iframe.contentDocument.body) {
    //     const foundElement = iframe.contentDocument.body.querySelector(`:contains(${word})`);
    //     if (foundElement) {
    //       foundElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    //     }
    //   }
    // };
    console.log('found',searchResults);
  return (
    <div className="preview-pdf">
        <input
        type="text"
        placeholder="Search text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div >
        
      <Document 
      ref={pdfIframeRef}
      className="textLayer"
          file={resume_example}
          onLoadSuccess={onDocumentLoadSuccess}
          renderTextLayer={false}
          renderInteractiveForms={false}
          renderMode="canvas"
        >
          {[...Array(numPages).keys()].map((pageIndex) => (
            <Page key={`page_${pageIndex + 1}`} pageNumber={pageIndex + 1} />
          ))}
        </Document>
      </div>
    </div>
  )
}

export default PreviewPdf2