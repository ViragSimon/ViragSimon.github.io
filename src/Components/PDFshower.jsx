import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

export default function AllPages(props) {

  
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;

  return (
    <div>
    <Document
    
      file={pdf}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
    <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}