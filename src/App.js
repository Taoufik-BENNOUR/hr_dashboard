import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"
import CandidateInfoCard from "./components/candidate-info/CandidateInfoCard";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <Sidebar/>
        <div className="content">
            lorem
            <CandidateInfoCard/>
        </div>
      </div>
    </div>
  );
}

export default App;
