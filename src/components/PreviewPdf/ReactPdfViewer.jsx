import React, { useMemo, useState } from 'react'
import { Document, Page,pdfjs } from 'react-pdf'
import { resume_example } from '../../data/icons'
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { usePdfTextSearch } from './Search';
import { useDebounce } from 'use-debounce';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const ReactPdfViewer = () => {
    const [numPages, setNumPages] = useState(null);
    const [searchString, setSearchString] = useState("");
    const searchResults = usePdfTextSearch(resume_example, searchString);
    const [debouncedSearchString] = useDebounce(searchString, 1000);
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
      };
    
      function highlightPattern(text, pattern) {
        const splitText = text.split(pattern);
      
        if (splitText.length <= 1) {
          return text;
        }
      
        const matches = text.match(pattern);
      
        return splitText.reduce(
          (arr, element, index) =>
            matches[index]
              ? [...arr, element, <mark key={index}>{matches[index]}</mark>]
              : [...arr, element],
          []
        );
      }
      const textRenderer = useMemo(
        (textItem) => {
          if (!textItem) return null;
          return highlightPattern(textItem.str, searchString);
        },
        [searchString]
      );
      let resultText =
      searchResults.length === 1
        ? "Results found on 1 page"
        : `Results found on ${searchResults.length} pages`;
  
    if (searchResults.length === 0) {
      resultText = "no results found";
    }
      console.log(searchResults);

  return (
    <div>
      <input
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        type="text"
      />
            <p>{resultText}</p>
        <Document 
          file={resume_example}
          onLoadSuccess={onDocumentLoadSuccess}
          scale={1}
        //   renderTextLayer={false}
        //   renderInteractiveForms={false}
        //   renderMode="canvas"
        >
          {[...Array(numPages).keys()].map((pageIndex) => (
            <Page key={`page_${pageIndex + 1}`} 
            pageNumber={pageIndex + 1}
            // customTextRenderer={textRenderer}
             />
          ))}
        </Document>
    </div>
  )
}

export default ReactPdfViewer