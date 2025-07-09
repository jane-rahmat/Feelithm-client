// src/pages/Journal.jsx
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Journal() {
  const [entry, setEntry] = useState("");
  const [saved, setSaved] = useState(false);
  const mood = localStorage.getItem("selectedMood");
  const emoji = localStorage.getItem("selectedEmoji");

  const handleSave = () => {
    const timestamp = new Date().toLocaleString();
    const journalEntry = {
      mood,
      emoji,
      entry,
      timestamp,
    };

    const existing = JSON.parse(localStorage.getItem("journalEntries")) || [];
    existing.push(journalEntry);
    localStorage.setItem("journalEntries", JSON.stringify(existing));
    setSaved(true);

    setTimeout(() => setSaved(false), 2000); // hide message after 2 sec
    setEntry(""); // optionally clear
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-zinc-900 dark:via-purple-900 dark:to-black text-gray-800 dark:text-white">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="bg-white dark:bg-zinc-800 shadow-xl rounded-xl p-8 max-w-2xl w-full">
          <h2 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">
            {emoji} Today you feel <span className="font-bold">{mood}</span>
          </h2>

          <textarea
            rows={8}
            className="w-full mt-4 p-4 rounded-md border border-purple-300 dark:border-purple-600 bg-white dark:bg-zinc-900 text-sm"
            placeholder="Write your thoughts here..."
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
          />

          <button
            onClick={handleSave}
            className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
          >
            Save Entry
          </button>

          {saved && (
            <p className="text-green-500 text-sm mt-2">Journal entry saved successfully!</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
