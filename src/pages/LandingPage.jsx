import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar";
import EmojiBackground from "../components/EmojiBackground";
import Footer from "../components/Footer";

export default function LandingPage() {
  // Initialize AOS on first render
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden font-sans text-gray-800 dark:text-gray-100 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-indigo-900 dark:via-purple-900 dark:to-gray-900">
      <EmojiBackground />
      <Navbar />

      {/* HERO */}
      <section
        data-aos="fade-up"
        className="flex flex-col items-center justify-center text-center px-4 py-24 lg:py-32 relative z-10"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Track&nbsp;Your&nbsp;Mood,<br className="hidden sm:block" />
          Heal&nbsp;Your&nbsp;Mind.
        </h2>

        <p className="max-w-xl text-lg sm:text-xl mb-8">
          <span className="font-semibold">Feelithm</span> helps you understand
          emotions, journal your thoughts &amp; get personalised motivation ✨
        </p>

        <div className="flex gap-4">
          {/* Get Started → /pick-mood */}
          <Link to="/pick-mood">
            <button className="px-8 py-3 rounded-2xl text-white bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-xl transition">
              Get Started
            </button>
          </Link>

          {/* Learn More → /features */}
          <Link to="/features">
            <button className="px-8 py-3 rounded-2xl bg-white/70 dark:bg-zinc-800/70 backdrop-blur hover:backdrop-blur-lg shadow transition">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        data-aos="fade-up"
        className="py-20 text-center px-4 lg:px-0"
      >
        <h3 className="text-3xl font-bold mb-4">How Feelithm Works</h3>
        <p className="max-w-xl mx-auto text-gray-700 dark:text-gray-300">
          Pick your mood, write a quick journal entry, and watch your emotional
          trends bloom in a beautiful dashboard.
        </p>
      </section>

      <Footer />
    </div>
  );
}  