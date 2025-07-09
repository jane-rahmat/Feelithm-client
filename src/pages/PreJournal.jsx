// src/pages/PreJournal.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EmojiBackground from "../components/EmojiBackground";

export default function PreJournal() {
  const [reflection, setReflection] = useState("");
  const navigate = useNavigate();
  const mood = localStorage.getItem("selectedMood");
  const emoji = localStorage.getItem("selectedEmoji");

  useEffect(() => {
    if (!mood) navigate("/pick-mood");
  }, [mood, navigate]);

  const handleContinue = () => {
    if (reflection.trim()) {
      localStorage.setItem("preJournalNote", reflection);
    }
    navigate("/journal");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-gray-900 dark:via-purple-900 dark:to-black text-gray-800 dark:text-white">
      <EmojiBackground />
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-2">📝 Ready to Reflect?</h1>
        <p className="text-lg mb-6 max-w-xl">
          {emoji} You're feeling <span className="font-semibold">{mood}</span> today.
          Want to capture your thoughts?
        </p>

        <textarea
          rows={4}
          placeholder="Write a quick note or thought here..."
          className="w-full max-w-xl px-4 py-3 rounded-lg shadow bg-white/80 dark:bg-zinc-800 text-sm mb-6"
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
        />

        <button
          onClick={handleContinue}
          className="px-8 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transition"
        >
          Continue to Journal
        </button>
      </main>

      <Footer />
    </div>
  );
}
