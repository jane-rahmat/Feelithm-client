import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import EmojiBackground from "../components/EmojiBackground";
import Footer from "../components/Footer";

export default function Journal() {
  const [entry, setEntry] = useState("");
  const [mood, setMood] = useState("Unknown");
  const [emoji, setEmoji] = useState("❓");
  const navigate = useNavigate();

  useEffect(() => {
    setMood(localStorage.getItem("selectedMood") || "Unknown");
    setEmoji(localStorage.getItem("selectedEmoji") || "❓");
  }, []);

  const handleSave = () => {
    if (entry.trim().length === 0) {
      alert("Please write something!");
      return;
    }

    const history =
      JSON.parse(localStorage.getItem("journalHistory") || "[]") || [];

    history.push({
      mood,
      emoji,
      text: entry.trim(),
      date: new Date().toLocaleString(),
    });

    localStorage.setItem("journalHistory", JSON.stringify(history));

    // clear current mood (optional)
    localStorage.removeItem("selectedMood");
    localStorage.removeItem("selectedEmoji");

    navigate("/journal-history");
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden font-sans text-gray-800 dark:text-gray-100 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-indigo-900 dark:via-purple-900 dark:to-gray-900">
      <EmojiBackground />
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          Write about your feelings
        </h1>

        <p className="mb-4 text-lg">
          {emoji}&nbsp; Current Mood:&nbsp;
          <span className="font-semibold text-purple-600 dark:text-purple-400">
            {mood}
          </span>
        </p>

        <textarea
          placeholder="Type how you feel..."
          className="w-full max-w-2xl min-h-[180px] p-4 rounded-xl shadow-lg bg-white/80 dark:bg-zinc-800/80 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />

        <button
          onClick={handleSave}
          className="mt-6 px-8 py-3 rounded-2xl text-white bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-xl transition"
        >
          Save & Continue
        </button>

        <Link
          to="/journal-history"
          className="mt-4 text-sm text-purple-600 hover:underline"
        >
          View Journal History →
        </Link>
      </main>

      <Footer />
    </div>
  );
}
