import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white/70 dark:bg-zinc-900/70 backdrop-blur shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-purple-700 dark:text-purple-300">
        💙 Feelithm
      </h1>

      <nav className="flex items-center gap-4 text-sm font-medium">
        <button className="hover:underline">Sign In</button>
        <button className="px-3 py-1 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition">
          Log In
        </button>

        <button
          onClick={() => setDark(!dark)}
          className="ml-2 text-xl hover:scale-110 transition"
          aria-label="Toggle dark mode"
        >
          {dark ? "🌞" : "🌙"}
        </button>
      </nav>
    </header>
  );
}
