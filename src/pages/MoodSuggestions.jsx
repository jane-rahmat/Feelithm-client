// src/pages/MoodSuggestions.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EmojiBackground from "../components/EmojiBackground";

const suggestions = {
  Happy: {
    quote: "💫 You're not chasing happiness anymore — You're creating it, moment by moment.",
    songs: [
      { title: "Gallan Goodiyan", link: "https://youtu.be/u2NAuswnTKY" },
      { title: "Ude Dil Befikre", link: "https://youtu.be/BkqF6qOVumM" },
      { title: "Aaj Ki Party", link: "https://youtu.be/vg1fOpuYkN4" },
    ],
  },
  Sad: {
    quote: "It’s okay to pause — even the moon takes time to shine again 🌑. Stay strong kudo:) ",
    songs: [
      { title: "Channa Mereya", link: "https://youtu.be/284Ov7ysmfA" },
      { title: "Tujhe Kitna Chahne Lage", link: "https://youtu.be/Wp7nXA2jJ2w" },
      { title: "Agar Tum Saath Ho", link: "https://youtu.be/sK7riqg2mr4" },
    ],
  },
  Angry: {
    quote: "🌪 Sometimes you want to scream, not because you're out of control, but because you've been  controlled for too long.",
    songs: [
      { title: "Zinda", link: "https://youtu.be/xP3bH8Fw3xM" },
      { title: "Sultan Title Track", link: "https://youtu.be/vU8e_tYFpyw" },
      { title: "Brothers Anthem", link: "https://youtu.be/wl8hbKrLdXo" },
    ],
  },
  Anxious: {
    quote: "You're carrying too many invisible thoughts in a heart that just wants rest🥀.",
    songs: [
      { title: "Love You Zindagi", link: "https://youtu.be/BMRpJ3tL-BA" },
      { title: "Phir Se Ud Chala", link: "https://youtu.be/SCQGnVrTsAM" },
      { title: "Ilahi", link: "https://youtu.be/2-MBfn8XjIU" },
    ],
  },
  Tired: {
    quote: "You're showing up... even when you feel like fading away — and that's real strength,my dear✨.",
    songs: [
      { title: "Khairiyat", link: "https://youtu.be/rRrJmqkxzXU" },
      { title: "Zara Zara", link: "https://youtu.be/DeumyOzKqgI" },
      { title: "Dil Diyan Gallan", link: "https://youtu.be/vXXo3hNZ4aY" },
    ],
  },
  Loved: {
    quote: "The greatest feeling isn’t just being in love — it’s knowing that someone chooses you, every single day.",
    songs: [
      { title: "Raabta", link: "https://youtu.be/p5bI6Z1Gd0M" },
      { title: "Tum Mile", link: "https://youtu.be/w4ClQO0FFQg" },
      { title: "Hasi Ban Gaye", link: "https://youtu.be/tJ5gL5rVbP4" },
    ],
  },
};

export default function MoodSuggestions() {
  const navigate = useNavigate();
  const mood = localStorage.getItem("selectedMood");
  const emoji = localStorage.getItem("selectedEmoji");
  const data = suggestions[mood] || {};

  useEffect(() => {
    if (!mood) {
      navigate("/pick-mood");
    }
  }, [mood, navigate]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 dark:from-gray-900 dark:via-purple-900 dark:to-black text-gray-800 dark:text-white">
      <EmojiBackground />
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
          {emoji} Feeling {mood}
        </h1>

        <p className="italic text-xl max-w-2xl mb-8 text-purple-700 dark:text-purple-300">
          “{data.quote}”
        </p>

        <h3 className="text-lg font-semibold mb-2">🎧 Song Recommendations:</h3>
        <ul className="mb-6 space-y-2">
          {data.songs?.map((song, idx) => (
            <li key={idx}>
              <a
                href={song.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline dark:text-purple-400"
              >
                {song.title}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => navigate("/pre-journal")}
          className="mt-4 px-8 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transition"
        >
          Continue to Journal
        </button>
      </main>

      <Footer />
    </div>
  );
}
