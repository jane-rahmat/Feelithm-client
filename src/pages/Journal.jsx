// src/pages/Journal.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/Loader";

export default function Journal() {
  const [entry, setEntry] = useState("");
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const mood = localStorage.getItem("selectedMood");
  const emoji = localStorage.getItem("selectedEmoji");
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSave = async () => {
    if (!user) {
      alert("Please log in to save your journal entry.");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "journals"), {
        uid: user.uid,
        mood,
        emoji,
        entry,
        timestamp: serverTimestamp(),
      });

      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
      setEntry("");
    } catch (error) {
      console.error("Error saving journal:", error);
      alert("Failed to save journal. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-zinc-900 dark:via-purple-900 dark:to-black text-gray-800 dark:text-white">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="bg-white dark:bg-zinc-800 shadow-xl rounded-xl p-8 max-w-2xl w-full">
          <h2 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">
            {emoji} Today you feel <span className="font-bold">{mood}</span>
          </h2>

          {loading ? (
            <Loader />
          ) : (
            <>
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
                <p className="text-green-500 text-sm mt-2">
                  Journal entry saved successfully!
                </p>
              )}

              <div className="mt-6 text-center">
                <button
                  onClick={() => navigate("/journal-history")}
                  className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition"
                >
                  📜 View Journal History
                </button>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
