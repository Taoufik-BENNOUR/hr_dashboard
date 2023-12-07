import React, { useState, useMemo } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import { useDebounce } from "use-debounce";

// import "./styles.css";

import { usePdfTextSearch } from "./Search";
import { resume_example } from "../../data/icons";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfFileViewer = () => {
  const defaultSearchString = "Abstract"; // just here for the sake of loading the page with default results
  const [searchString, setSearchString] = useState(defaultSearchString);
  const [debouncedSearchString] = useDebounce(searchString, 250);
  const [numPages, setNumPages] = useState(null);

  const file = resume_example
  const searchResults = usePdfTextSearch(file, debouncedSearchString);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  /* 
    This textRenderer highlight pattern is from the Recipes in the react-pdf docs:
    https://github.com/wojtekmaj/react-pdf/wiki/Recipes#highlight-text-on-the-page
    But this is not currently working as I would expect. Needs work.
  */
  const textRenderer = useMemo(
    (textItem) => {
      if (!textItem) return null;
      return highlightPattern(textItem.str, debouncedSearchString);
    },
    [debouncedSearchString]
  );

  let resultText =
    searchResults.length === 1
      ? "Results found on 1 page"
      : `Results found on ${searchResults.length} pages`;

  if (searchResults.length === 0) {
    resultText = "no results found";
  }

  return (
    <>
      <input
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        type="text"
      />
      {/* <p>{resultText}</p> */}
      <Document file={file}>
        {searchString &&
          searchResults &&
          searchResults.map((searchResultPageNumber) => (
            <Page
              key={searchResultPageNumber}
              pageNumber={searchResultPageNumber}
              customTextRenderer={textRenderer}
            />
          ))}
      </Document>
    </>
  );
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
export default PdfFileViewer;
