import "./App.css";

// import Grades from "./Components/Grades";
// import Login from "./Components/Login";
// import Result from "./Components/Result";
import Login from "./SimpleCgpaCalc/Login";
import Grades from "./SimpleCgpaCalc/Grades";
import Result from "./SimpleCgpaCalc/Result";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Choose from "./SimpleCgpaCalc/Choose";
import ResultC from "./SimpleCgpaCalc/ResultC";
import GradesC from "./SimpleCgpaCalc/GradesC";

function App() {
  return (
    <>
      <Router>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/grades" element={<Grades />} />
          <Route exact path="/gradesc" element={<GradesC />} />
          <Route exact path="/result" element={<Result />} />
          <Route exact path="/choose" element={<Choose />} />
          <Route exact path="/resultc" element={<ResultC />} />
        </Routes>
      </Router>
      {/* <Login />
      <Grades /> */}
    </>
  );
}

export default App;
