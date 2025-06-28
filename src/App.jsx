import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Splash from "./pages/Splash";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
