import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"
import CandidateInfoCard from "./components/candidate-info/CandidateInfoCard";
import Login from "./page/login/Login";
import PopUp from "./components/pop-up/PopUp";
import TableLayout from "./components/table/Table";

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Sidebar/>
        <div className="content">
            {/* <CandidateInfoCard/> */}
            {/* <Login/> */}
            {/* <PopUp/> */}
            {/* <TableLayout/> */}
        </div>
      </div>
    </>
  );
}

export default App;