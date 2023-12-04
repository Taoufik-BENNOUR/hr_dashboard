import Navbar from "./components/navbar/Navbar";
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


function App() {
  return (
    <>
      {/* <Navbar/> */}
      <ResponsiveAppBar/>
      <div className="container">
        <Sidebar/>
        <div className="content">
          <CandidatePersonalinformations/>
          <PreviewPdf2/>
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
