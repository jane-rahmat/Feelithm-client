import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import EmojiBackground from "../components/EmojiBackground";
import Footer from "../components/Footer";

const moods = [
  { emoji: "😊", label: "Happy" },
  { emoji: "😢", label: "Sad" },
  { emoji: "😡", label: "Angry" },
  { emoji: "😨", label: "Anxious" },
  { emoji: "😴", label: "Tired" },
  { emoji: "😍", label: "Loved" },
];

export default function PickMood() {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(null); // { emoji, label }
  const navigate = useNavigate();

  const selectMood = (m) => {
    // Save both mood and emoji
    localStorage.setItem("selectedMood", m.label);
    localStorage.setItem("selectedEmoji", m.emoji);

    setSelected(m);
    setOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden font-sans text-gray-800 dark:text-gray-100 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-indigo-900 dark:via-purple-900 dark:to-gray-900">
      <EmojiBackground />
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        {!selected ? (
          <h1 className="text-3xl font-bold opacity-20">(Pick your mood)</h1>
        ) : (
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-2xl font-semibold">
              {selected.emoji}&nbsp; You feel&nbsp;
              <span className="text-purple-600 dark:text-purple-400">
                {selected.label}
              </span>
              &nbsp;today.
            </h2>
            <button
              onClick={() => navigate("/journal")}
              className="px-8 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transition"
            >
              Next
            </button>
          </div>
        )}
      </main>

      <Footer />

      {/* Mood dialog */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="bg-white/90 dark:bg-zinc-800/90 backdrop-blur rounded-3xl p-8 shadow-xl w-[90%] max-w-md text-center"
            >
              <h2 className="text-2xl font-extrabold mb-6">
                What’s your mood today?
              </h2>

              <div className="grid grid-cols-3 gap-6 place-items-center">
                {moods.map((m) => (
                  <button
                    key={m.label}
                    title={m.label}
                    onClick={() => selectMood(m)}
                    className="text-4xl hover:scale-110 transition"
                  >
                    {m.emoji}
                  </button>
                ))}
              </div>

              <p className="mt-6 text-gray-600 dark:text-gray-300 text-sm">
                Hover to see meaning • Click to select
              </p>

              <button
                onClick={() => setOpen(false)}
                className="mt-5 text-sm text-purple-600 hover:underline"
              >
                Maybe later
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
