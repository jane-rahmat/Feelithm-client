import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import EmojiBackground from "../components/EmojiBackground";
import Footer from "../components/Footer";

export default function JournalHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("journalHistory") || "[]");
    setHistory(stored.reverse()); // newest first
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden font-sans text-gray-800 dark:text-gray-100 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-indigo-900 dark:via-purple-900 dark:to-gray-900">
      <EmojiBackground />
      <Navbar />

      <main className="flex-grow px-4 py-16 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">📖 Journal History</h1>

        {history.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-300">
            No entries yet. Start journaling!
          </p>
        ) : (
          <ul className="space-y-6">
            {history.map((item, index) => (
              <li
                key={index}
                className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur p-6 rounded-xl shadow-md"
              >
                <p className="text-sm mb-2 text-gray-500">{item.date}</p>
                <p className="font-medium mb-1">
                  Mood:{" "}
                  <span className="text-purple-600 dark:text-purple-400">
                    {item.mood}
                  </span>
                </p>
                <p className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">{item.text}</p>
              </li>
            ))}
          </ul>
        )}
      </main>

      <Footer />
    </div>
  );
}
