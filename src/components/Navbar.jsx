// src/components/Navbar.jsx
import { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const nav = [
    { label: "Home", to: "/home" },
    { label: "Mood Tracker", to: "/pick-mood" },
    { label: "Journal", to: "/journal" },
    { label: "Features", to: "/features" },
    { label: "Contact", to: "/feedback" },
  ];

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      alert("Failed to log out.");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* ── Logo ── */}
        <Link to="/home">
          <img
            src="/assets/logo.png"
            alt="Feelithm logo"
            className="h-14 sm:h-14 md:h-18 w-auto object-contain"
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {nav.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`hover:text-purple-500 ${
                pathname === to ? "text-purple-600 dark:text-purple-400 font-semibold" : ""
              }`}
            >
              {label}
            </Link>
          ))}

          {/* Auth button */}
          {user ? (
            <button
              onClick={handleLogout}
              className="px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="px-3 py-1 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition">
                Log In
              </button>
            </Link>
          )}

          {/* Dark mode */}
          <button
            onClick={() => setDark(!dark)}
            className="text-lg hover:scale-110 transition"
            aria-label="Toggle dark mode"
          >
            {dark ? "🌞" : "🌙"}
          </button>
        </nav>

        {/* ── Hamburger ── */}
        <button
          className="md:hidden text-purple-700 dark:text-purple-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-900 px-6 pb-6 space-y-4 text-sm font-medium">
          {nav.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`block hover:underline ${
                pathname === to ? "text-purple-600 dark:text-purple-400 font-semibold" : ""
              }`}
            >
              {label}
            </Link>
          ))}

          {/* Mobile Log In / Log Out */}
          {user ? (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="block w-full text-center px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition"
            >
              Log Out
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block px-2 py-1 rounded bg-purple-600 text-white text-center hover:bg-purple-700 transition"
            >
              Log In
            </Link>
          )}

          {/* Mobile dark mode toggle */}
          <button
            onClick={() => {
              setDark(!dark);
              setMenuOpen(false);
            }}
            className="flex items-center gap-2 pt-2"
          >
            {dark ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </header>
  );
}
