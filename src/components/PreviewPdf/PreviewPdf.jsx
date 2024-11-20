import React, { useCallback, useState } from 'react'
import { Document, Page,pdfjs } from 'react-pdf'
import "./previewPdf.css"
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PreviewPdf = ({searchText,pdf}) => {
    const [numPages, setNumPages] = useState(null);

    const onFileLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };
    function highlightPattern(text, pattern) {
      const regex = new RegExp(pattern, 'gi');
      return text.replace(regex, (value) => `<mark class="highlight-word">${value}</mark>`);
    }
    const textRenderer = useCallback(
      (textItem) => highlightPattern(textItem.str, searchText),
      [searchText]
    );
  return (
    <div className="preview-pdf">
    <Document
            file={pdf}
            onLoadSuccess={onFileLoadSuccess}

                >
            {Array.from(new Array(numPages), (el, index) => (
                                <Page
                                    key={`page_${index + 1}`}
                                    pageNumber={index + 1}
                                    renderTextLayer={false}
                                    // renderInteractiveForms={false}
                                    // renderMode="canvas"
                                    customTextRenderer={textRenderer}

                                />
                            ))}
                </Document>
    </div>
  )
}

export default PreviewPdf