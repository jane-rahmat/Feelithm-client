// src/pages/JournalHistory.jsx
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function JournalHistory() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("journalEntries")) || [];
    setEntries(data.reverse()); // recent first
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-zinc-900 dark:via-purple-900 dark:to-black text-gray-800 dark:text-white">
      <Navbar />

      <main className="flex-grow px-4 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">📜 Your Journal History</h1>

        {entries.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No entries found. Write your first journal today!
          </p>
        ) : (
          <div className="space-y-6">
            {entries.map((entry, idx) => (
              <div key={idx} className="bg-white dark:bg-zinc-800 shadow-lg rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold">
                    {entry.emoji} {entry.mood}
                  </span>
                  <span className="text-sm text-gray-500">{entry.timestamp}</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-200 whitespace-pre-line">
                  {entry.entry}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
