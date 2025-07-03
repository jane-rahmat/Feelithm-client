// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // npm i @heroicons/react

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // toggle dark-mode on <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const nav = [
    { label: "Home",         to: "/home" },
    { label: "Features",     to: "/features" },
    { label: "Journal",      to: "/journal" },
    { label: "Mood Tracker", to: "/pick-mood" },
    { label: "Sign In",      to: "/signin" },
    { label: "Contact",      to: "/feedback" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* ── Logo Only ─────────────────────── */}
        <Link to="/home">
          <img
            src="/assets/logo.png"
            alt="Feelithm logo"
            className="h-14 sm:h-14 md:h-18 w-auto object-contain" // Bigger logo
          />
        </Link>

        {/* ── Desktop Navigation ───────────── */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
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

          {/* Dark-mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="text-lg hover:scale-110 transition"
            aria-label="Toggle dark mode"
          >
            {dark ? "🌞" : "🌙"}
          </button>
        </nav>

        {/* ── Hamburger (Mobile) ───────────── */}
        <button
          className="md:hidden text-purple-700 dark:text-purple-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
        </button>
      </div>

      {/* ── Mobile Dropdown ──────────────── */}
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

          <button
            onClick={() => { setDark(!dark); setMenuOpen(false); }}
            className="flex items-center gap-2 pt-2"
          >
            {dark ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </header>
  );
}
