import "./App.css";
import Navbar from "./components/Navbar";
// import { BrowserRouter, Route, Link, useRouteMatch } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/general" element={<Categories cat="general" />} />
          <Route path="/science" element={<Categories cat="science" />} />
          <Route path="/sports" element={<Categories cat="sports" />} />
          <Route path="/technology" element={<Categories cat="technology" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
