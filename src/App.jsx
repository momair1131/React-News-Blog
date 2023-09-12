import "./App.css";
import Navbar from "./components/Navbar";
// import { BrowserRouter, Route, Link, useRouteMatch } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FetchData from "./components/FetchData/FetchData";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/general" element={<FetchData cat="general" />} /> */}
          <Route path="/science" element={<FetchData cat="science" />} />
          <Route path="/sports" element={<FetchData cat="sports" />} />
          <Route path="/technology" element={<FetchData cat="technology" />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
