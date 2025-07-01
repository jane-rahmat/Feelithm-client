import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import EmojiBackground from "../components/EmojiBackground";
import Footer from "../components/Footer";

export default function Features() {
  // features with an emoji icon + label + blurb
  const features = [
    {
      emoji: "🤖",
      title: "Mood Detection",
      text: "AI suggests your mood from quick inputs and text sentiment.",
    },
    {
      emoji: "📓",
      title: "Journaling System",
      text: "Private, daily journal with rich‑text and mood tagging.",
    },
    {
      emoji: "💡",
      title: "Motivational Content",
      text: "Quotes, videos & songs tailored to how you feel.",
    },
    {
      emoji: "📊",
      title: "Mood Tracking & Analytics",
      text: "Beautiful charts to spot emotional patterns over time.",
    },
    {
      emoji: "🤝",
      title: "Chatbot Support",
      text: "Friendly bot for quick check‑ins and coping tips.",
    },
    {
      emoji: "🌓",
      title: "Dark‑Mode Toggle",
      text: "Calm eyes at night, vibrant by day — one click.",
    },
  ];

  return (
    <div
      className="flex flex-col min-h-screen relative overflow-hidden
                 font-sans text-gray-800 dark:text-gray-100
                 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100
                 dark:from-indigo-900 dark:via-purple-900 dark:to-gray-900"
    >
      {/* floating emojis */}
      <EmojiBackground />

      {/* sticky nav */}
      <Navbar />

      <main className="relative z-10 flex flex-col items-center px-4 pt-24 pb-32">
        {/* heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold mb-12 text-center"
        >
          Why&nbsp;Feelithm?
        </motion.h1>

        {/* animated feature cards */}
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              whileHover={{ y: -6, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
              className="bg-white/80 dark:bg-zinc-800/70 backdrop-blur rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{f.emoji}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
