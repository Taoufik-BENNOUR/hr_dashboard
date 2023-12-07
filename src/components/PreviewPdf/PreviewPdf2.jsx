import React, { useEffect, useRef, useState } from 'react'
import { Document, Page,pdfjs } from 'react-pdf'
import { resume, resume_example } from '../../data/icons';
import { useCallback } from 'react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PreviewPdf2 = ({pdf}) => {
    const [numPages, setNumPages] = useState(null);
    const pdfIframeRef = useRef();

    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [count, setcount] = useState(null);

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
        highlightWord(results[0].text);

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
    const highlightWord = (word) => {
      const pdfViewer = pdfIframeRef.current;
      if (pdfViewer) {
        const textDivs = pdfViewer.querySelectorAll('.textLayer>div');
  
        textDivs.forEach((textDiv) => {
          const content = textDiv.textContent;
          const highlightedContent = content.replace(
            new RegExp(`\\b${word}\\b`, 'gi'),
            (match) => `<span class="high">${match}</span>`
          );
  
          textDiv.innerHTML = highlightedContent;
        });
      }
    };
    // const scrollToWord = (word) => {
    //   const pdfViewer = pdfIframeRef.current;
      
    //   if (pdfViewer && pdfViewer.container) {
    //     const textDivs = pdfViewer.container.querySelectorAll('.textLayer > div');
        
    //     for (let i = 0; i < textDivs.length; i++) {
    //       const textDiv = textDivs[i];
    //       if (textDiv.textContent.includes(word)) {
    //         textDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    //         break;
    //       }
    //     }
    //   }
    // };
    const scrollToWord = (word) => {
      const iframe = pdfIframeRef;
      const i = document.querySelectorAll("react-pdf__Document");
      if (iframe && iframe.contentDocument && iframe.contentDocument.body) {
        const foundElement = iframe.contentDocument.body.querySelector(`:contains(${word})`);
        if (foundElement) {
          foundElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    };
      // Function to search for a word in the DOM
      const searchForWord = (word) => {
        const elements = document.querySelectorAll('.preview-pdf'); // Select all elements in the DOM

       word !==""&& elements.forEach((element) => {
          // Check if the element's text content contains the desired word
          if (element.textContent && element.textContent.includes(word)) {
            // Split text content into parts before and after the word
            const parts = element.textContent.split(word);
            console.log(parts);
            // Wrap the matched word with a span and apply styling
            element.innerHTML = `<span style="color: red;">${word}</span>`;
          }
        });
      };
      function highlightPattern(text, pattern) {
        const regex = new RegExp(pattern, 'gi');
        const matches = text.match(regex) || [];

        return text.replace(regex, (value) => `<mark class="highlight-word">${value}</mark>`);
      }
      const textRenderer = useCallback(
        (textItem) =>
         highlightPattern(textItem.str, searchText),
        [searchText]
      );
  return (
    <div className="preview-pdf">
        <input
        type="text"
        placeholder="Search text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {count}
      <button onClick={()=>searchForWord(searchText)}>Search</button>
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