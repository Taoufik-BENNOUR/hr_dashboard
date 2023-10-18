import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"
import CandidateInfoCard from "./components/candidate-info/CandidateInfoCard";
import Login from "./page/login/Login";
<<<<<<< HEAD
import PopUp from "./components/pop-up/PopUp";
import TableLayout from "./components/table/Table";
import CandidatePersonalinformations from "./components/candidate-info/CandidatePersonalinformations";
=======
>>>>>>> b59e298c819d7b3b7cea680ca98391466a54e814

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Sidebar/>
        <div className="content">
<<<<<<< HEAD
          <CandidatePersonalinformations/>
            {/* <CandidateInfoCard/> */}
=======
            <CandidateInfoCard/>
>>>>>>> b59e298c819d7b3b7cea680ca98391466a54e814
            {/* <Login/> */}
            {/* <PopUp/> */}
            {/* <TableLayout/> */}
        </div>
      </div>
    </>
  );
}

export default App;
