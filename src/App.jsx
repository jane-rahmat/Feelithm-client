import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Splash from "./pages/Splash";
import LandingPage from "./pages/LandingPage";
import PickMood from "./pages/PickMood";
import Journal from "./pages/Journal";
import Features from "./pages/Features";
import JournalHistory from "./pages/JournalHistory";
import Feedback from "./pages/Feedback";

import "./index.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/pick-mood" element={<PickMood />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/features" element={<Features />} />
        <Route path="/journal-history" element={<JournalHistory />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}
