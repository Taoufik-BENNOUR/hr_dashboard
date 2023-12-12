import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"
import CandidateInfoCard from "./components/candidate-info/CandidateInfoCard";
import Login from "./page/login/Login";
import PopUp from "./components/pop-up/PopUp";
import TableLayout from "./components/table/Table";
import CandidatePersonalinformations from "./components/candidate-info/CandidatePersonalinformations";
import TabCV from "./components/TabCV/TabCV";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ResponsiveAppBar from "./components/navbar/Navbar2";
import Clients from "./components/filter/Clients";
import Keyword from "./components/filter/keyword/Keyword";
import CopyPaste from "./components/CopyPaste.jsx/CopyPaste";
import CopyPasteContainer from "./components/CopyPaste.jsx/CopyPasteContainer";
import DragAndDrop from "./components/DragAndDrop/DragAndDrop";
import PreviewPdf2 from "./components/PreviewPdf/PreviewPdf2";
import PdfFileViewer from "./components/PreviewPdf/Preview";
import ReactPdfViewer from "./components/PreviewPdf/ReactPdfViewer";
import ReactPdfViewerTest from "./components/ReactPDFViewer/ReactPdfViewerTest.tsx";
// import ReactPdfViewerTest from "./components/ReactPDFViewer/ReactPdfViewerTest";


function App() {
  return (
    <>
      {/* <Navbar/> */}
      <ResponsiveAppBar/>
      <div className="container">
        <Sidebar/>
        <div className="content">
          <CandidatePersonalinformations/>
          <ReactPdfViewerTest/>
          {/* <ReactPdfViewer/> */}
          {/* <PreviewPdf2/> */}
          {/* <PdfFileViewer/> */}
            {/* <CandidateInfoCard/> */}
            {/* <CandidateInfoCard/> */}
            {/* <TabCV/>
            <Clients/>
            <Keyword/> */}
            {/* <CopyPasteContainer/> */}
            {/* <DragAndDrop/> */}
            {/* <Login/> */}
            {/* <PopUp/> */}
            {/* <TableLayout/> */}
        </div>
      </div>
    </>
  );
}

export default App;
