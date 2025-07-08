// src/components/ProtectedRoute.jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  // if not logged in, redirect to /login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // if logged in, show the actual component
  return children;
}
