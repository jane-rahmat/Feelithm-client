// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Splash from "./pages/Splash";
import LandingPage from "./pages/LandingPage";
import PickMood from "./pages/PickMood";
import Journal from "./pages/Journal";
import Features from "./pages/Features";
import JournalHistory from "./pages/JournalHistory";
import Feedback from "./pages/Feedback";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import MoodSuggestions from "./pages/MoodSuggestions";
import NotFound from "./pages/NotFound";
import AdminFeedback from "./pages/AdminFeedback";

import { AuthProvider } from "./context/AuthContext";      // 🟣 global auth state
import ProtectedRoute from "./components/ProtectedRoute";  // 🔒 route guard

import { ToastContainer } from "react-toastify";            // ✅ NEW
import "react-toastify/dist/ReactToastify.css";             // ✅ NEW

import "./index.css";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          {/* Public routes */}
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mood-suggestions" element={<MoodSuggestions />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin/feedback" element={<AdminFeedback />} />

          {/* Private routes (require login) */}
          <Route
            path="/pick-mood"
            element={
              <ProtectedRoute>
                <PickMood />
              </ProtectedRoute>
            }
          />
          <Route
            path="/journal"
            element={
              <ProtectedRoute>
                <Journal />
              </ProtectedRoute>
            }
          />
          <Route
            path="/journal-history"
            element={
              <ProtectedRoute>
                <JournalHistory />
              </ProtectedRoute>
            }
          />

        </Routes>
        {/* ✅ Toast messages container */}
        <ToastContainer position="top-center" autoClose={2500} />
      </Router>
    </AuthProvider>
  );
}
