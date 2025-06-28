import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Splash.css";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 4000); // 4 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <h1 className="logo-text">Feelithm</h1>
        <p className="tagline">Feel. Express. Heal.</p>
      </div>
    </div>
  );
}
