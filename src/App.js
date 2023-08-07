import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Credentials from "./pages/Credentials";
import "./styles/styles.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/credentials" element={<Credentials />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
