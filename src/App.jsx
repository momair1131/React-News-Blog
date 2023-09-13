import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FetchData from "./components/FetchData/FetchData";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/science" element={<FetchData cat="science" />} />
        <Route path="/sports" element={<FetchData cat="sports" />} />
        <Route path="/technology" element={<FetchData cat="technology" />} />
      </Routes>
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/general" element={<FetchData cat="general" />} /> 
          <Route path="/science" element={<FetchData cat="science" />} />
          <Route path="/sports" element={<FetchData cat="sports" />} />
          <Route path="/technology" element={<FetchData cat="technology" />} />
        </Routes>
      </Router> */}
      <Footer />
    </div>
  );
}

export default App;
