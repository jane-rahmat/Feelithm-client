import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function JournalHistory() {
  const [entries, setEntries] = useState([]);

  // Load entries on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("journalEntries")) || [];
    setEntries(stored.reverse());
  }, []);

  // Handle delete
  const handleDelete = (indexToDelete) => {
    const updated = [...entries];
    updated.splice(indexToDelete, 1); // remove the clicked entry
    setEntries(updated);
    localStorage.setItem("journalEntries", JSON.stringify([...updated].reverse())); // store in original order
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-zinc-900 dark:via-purple-900 dark:to-black text-gray-800 dark:text-white">
      <Navbar />
      <main className="flex-grow px-4 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-700 dark:text-purple-300">
          📜 Journal History
        </h1>

        {entries.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">
            No journal entries yet.
          </p>
        ) : (
          <div className="space-y-6">
            {entries.map((entry, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md border-l-4 border-purple-400 dark:border-purple-600 relative"
              >
                {/* 🗑️ Delete button */}
                <button
                  onClick={() => handleDelete(idx)}
                  className="absolute top-3 right-3 text-sm text-red-500 hover:text-red-700"
                  title="Delete entry"
                >
                  ✖
                </button>

                <div className="flex justify-between items-center mb-2 text-sm text-gray-600 dark:text-gray-400">
                  <span>
                    Mood: <strong>{entry.emoji} {entry.mood}</strong>
                  </span>
                  <span>{entry.timestamp}</span>
                </div>
                <p className="text-gray-800 dark:text-gray-100 whitespace-pre-line">
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
