import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import GlobalCandidateArea from "./components/globalCandidateArea/GlobalCandidateArea";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./page/login/Login";
import { useState } from "react";
import { useFilters } from "./context/FiltersContext/FiltersContext";
import CandidateFile from "./components/CandidateFile/CandidateFile";
import ReactPdfViewer from "./components/reactPdfViewer/ReactPdfViewer";
import Clients from "./page/clients/Clients";
import sidebarData from "./data/sidebarData";
import RecruitmentButton from "./components/recruitmentBtn/RecruitmentButton";
import Opportunities from "./page/opportunities/Opportunities";
import RatingComponent from "./components/rating/RatingComponent";
function App() {
  const [selectedCandidates, setSelectedCandidates] = useState(0);
  const { keywords,selectedIndustries,selectedDrillingRigs } = useFilters();
  return (
    <>
      {/* <div>
        <Navbar />
        <div className="container">
          <Sidebar />
          <div className="content">
            <GlobalCandidateArea />
          </div>
        </div>
      </div> */}
      <Router>
        <Switch>
          <Route path="/login">
            <div className="contentLogin">
              <RatingComponent iconsCount={3}/>
              <RatingComponent iconsCount={4} isSingle={true}/>
              {/* <CandidateFile /> */}
              {/* <RecruitmentButton/> */}
            </div>
          </Route>
          <Route path="/clients">
          <div>
              <Navbar />
                  <Clients  />
            </div>
          </Route>
          <Route path="/opportunities">
          <div>
              <Navbar />
                  <Opportunities  />
            </div>
          </Route>
          <Route path="/">
            <div>
              <Navbar />
              <div className="container">
                <Sidebar pageName={"home"} sidebarData={sidebarData} selectedCandidates={selectedCandidates} />
                <div className="content">
                  <GlobalCandidateArea selectedItem={item => setSelectedCandidates(item)} />
                </div>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
