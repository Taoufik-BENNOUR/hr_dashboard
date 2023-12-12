import React, { useEffect, useRef, useState } from 'react'
import { Document, Page,pdfjs } from 'react-pdf'
import { resume, resume_example } from '../../data/icons';
import { useCallback } from 'react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';


// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PreviewPdf2 = ({pdf}) => {
    const [numPages, setNumPages] = useState(null);
    const pdfIframeRef = useRef();

    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [count, setcount] = useState(null);

    // const handleSearch = async () => {
    //   const results = [];
    //   for (let page = 1; page <= numPages; page++) {
    //     const pageText = await getPageText(page);
    //     const regex = new RegExp(searchText, 'gi');
    //     const matches = pageText.match(regex)
    //     setcount(matches.length)
    //     if (pageText.toLowerCase().includes(searchText.toLowerCase())) {
    //       results.push({ pageIndex: page - 1, text: searchText });
    //     }
    //   }
    //   setSearchResults(results);
    //   // Navigate to the first result
    //   if (results.length > 0) {
    //     goToPage(results[0].pageIndex + 1);
    //     scrollToWord(results[0].text);
    //     highlightWord(results[0].text);
    //   }
    // };
  
    // const getPageText = async (pageNumber) => {
    //   const pdf = await pdfjs.getDocument({ url: resume_example }).promise;
    //   const page = await pdf.getPage(pageNumber);
    //   const textContent = await page.getTextContent();
    //   return textContent.items.map((s) => s.str).join(' ');
    // };
  
    const goToPage = (page) => {
      setNumPages(page);
    };
 
    const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
    };
    // const highlightWord = () => {
    //  const markElements = document.querySelectorAll('mark')
    //  markElements.forEach((markElement, index) => {
    //   // Scroll to each mark element one by one
    //   markElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // });
    // };
    const [markElements, setMarkElements] = useState([]);
    const [currentMarkIndex, setCurrentMarkIndex] = useState(0);
      // Assuming you have a function to highlight words and update the state with mark elements
      const updateMarkElements = (e) => {
        const newMarkElements = document.querySelectorAll('mark');
        setMarkElements(newMarkElements);
      };
    const scrollIntoView = (index) => {
      if (currentMarkIndex !== null && markElements[currentMarkIndex]) {
        markElements[currentMarkIndex].classList.remove('red');
      }
      markElements[index].classList.add('red');

        markElements[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
        setCurrentMarkIndex(index);
      
    };
    const scrollThroughMarks = () => {
      const markElements = document.querySelectorAll('mark');
        markElements.forEach((markElement, index) => {
          markElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    };

      const [currentMatchIndex, setCurrentMatchIndex] = useState(0);

      function highlightPattern(text, pattern) {
        const regex = new RegExp(pattern, 'gi');
        const matches = text.match(regex) || [];

        return text.replace(regex, (value) => `<mark class="highlight-word">${value}</mark>`);
      }
      const textRenderer = useCallback(
        (textItem) => highlightPattern(textItem.str, searchText),
        [searchText]
      );
      const navigateToNextWord = () => {
        updateMarkElements();
        const nextIndex = currentMarkIndex + 1;
        scrollIntoView(nextIndex);
      };
    
      const navigateToPreviousWord = () => {
        updateMarkElements();
        const previousIndex = currentMarkIndex - 1;
        scrollIntoView(previousIndex);
      };
      const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setSearchText(inputValue)
      };
  return (
    <div className="preview-pdf">
      <div style={{position:"fixed",top:0,left:50,zIndex:999}}>
      <input
        type="text"
        placeholder="Search text"
        onChange={(e)=>handleInputChange(e)} 
      />
          <button onClick={navigateToPreviousWord} disabled={currentMarkIndex === 0}>
          Previous
        </button>
        <button onClick={navigateToNextWord} disabled={currentMarkIndex === markElements.length - 1}>
          Next
        </button>
      </div>

      {/* <button onClick={updateMarkElements}>cl</button> */}
      {count}
      {/* <button onClick={highlightWord}>Search</button> */}
      <div >
      <Document 
      ref={pdfIframeRef}
          file={resume_example}
          onLoadSuccess={onDocumentLoadSuccess}
          scale={1}
          // renderTextLayer={false}
          // renderInteractiveForms={false}
          renderMode="canvas"
        >
          {[...Array(numPages).keys()].map((pageIndex) => (
            <Page key={`page_${pageIndex + 1}`}
             pageNumber={pageIndex + 1}
             customTextRenderer={textRenderer}
             />
          ))}
                  {/* <Page
          pageNumber={1}
          customTextRenderer={textRenderer}
        /> */}
        </Document>
      </div>
    </div>
  )
}

export default PreviewPdf2