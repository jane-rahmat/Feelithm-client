// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-zinc-900 dark:via-purple-900 dark:to-black text-center text-gray-800 dark:text-white px-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! Page not found.</p>
      <Link to="/home">
        <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition">
          ⬅ Go Back Home
        </button>
      </Link>
    </div>
  );
}
