// Paste exactly this file

import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { FaSyncAlt, FaMusic } from "react-icons/fa";

const moodData = {
  Happy: {
    quotes: [
      "The most beautiful moments in life are moments when you are expressing your joy, not when you are seeking it.",
      "💫 You're not chasing happiness anymore — You're creating it, moment by moment.",
      "You deserve the kind of happiness that comes from within, not the kind that depends on others.",
    ],
    songs: [
      {
        title: "Ilahi - Yeh Jawaani Hai Deewani",
        youtube: "https://www.youtube.com/watch?v=fdubeMFwuGs",
        spotify: "https://open.spotify.com/track/5cgKosPPj5Cs9a2JQufUc1",
      },
      {
        title: "Love You Zindagi - Dear Zindagi",
        youtube: "https://www.youtube.com/watch?v=rwn0Zs7ELzc",
        spotify: "https://open.spotify.com/track/0tZMTCvEzXWz7AvjzIPf1H",
      },
    ],
  },
  Sad: {
    quotes: [
      "It’s okay to pause — even the moon takes time to shine again 🌑.",
      "Your sadness is a gift. Don’t reject it. Don’t rush it. Live it fully and use it as fuel for transformation and compassion.",
    ],
    songs: [
      {
        title: "Channa Mereya - Ae Dil Hai Mushkil",
        youtube: "https://www.youtube.com/watch?v=bzSTpdcs-EI",
        spotify: "https://open.spotify.com/track/0H2iJVgorRR0ZFgRqGUjUM",
      },
      {
        title: "Agar Tum Saath Ho - Tamasha",
        youtube: "https://youtu.be/xRb8hxwN5zc",
        spotify: "https://open.spotify.com/track/3hkC9EHFZNQPXrtl8WPHnX",
      },
    ],
  },
  Loved: {
    quotes: [
      "The greatest feeling isn’t just being in love — it’s knowing that someone chooses you, every single day.",
      "Being loved deeply by someone gives you strength, while loving someone deeply gives you courage.",
    ],
    songs: [
      {
        title: "Tum Se Hi - Jab We Met",
        youtube: "https://youtu.be/Cb6wuzOurPc",
        spotify: "https://open.spotify.com/track/7eQl3Yqv35ioqUfveKHitE",
      },
      {
        title: "Raabta - Agent Vinod",
        youtube: "https://youtu.be/zlt38OOqwDc",
        spotify: "https://open.spotify.com/track/6FjbAnaPRPwiP3sciEYctO",
      },
    ],
  },
  Angry: {
    quotes: [
      "🌪 Sometimes you want to scream, not because you're out of control, but because you've been  controlled for too long.",
      "Holding onto anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
    ],
    songs: [
      {
        title: "Zinda - Bhaag Milkha Bhaag",
        youtube: "https://youtu.be/Ax0G_P2dSBw",
        spotify: "https://open.spotify.com/track/0oQ049KLHdo87oLLmvDA1P",
      },
      {
        title: "Kar Har Maidan Fateh - Sanju",
        youtube: "https://youtu.be/9iIX4PBplAY",
        spotify: "https://open.spotify.com/track/7gZwhDmzciskHbZemjf931",
      },
    ],
  },
  Anxious: {
    quotes: [
      "When you’re feeling anxious, remind yourself: you’ve been here before and survived every time.",
      "You're carrying too many invisible thoughts in a heart that just wants rest.",
      "You can’t calm the storm, so stop trying. What you can do is calm yourself. The storm will pass.",
    ],
    songs: [
      {
        title: "Patakha Guddi - Highway",
        youtube: "https://youtu.be/8HDTS80dlr4",
        spotify: "https://open.spotify.com/track/7jpmNt5iCtSdXuT1xEGp8O",
      },
      {
        title: "Zinda Hoon Yaar - Lootera",
        youtube: "https://youtu.be/cgHLvt0rxmM",
        spotify: "https://open.spotify.com/track/44oZxJJGjYbOY1hTKhxswV",
      },
    ],
  },
  Tired: {
    quotes: [
      "You're showing up… even when you feel like fading away and that's bravery🥀.",
      "Rest when you’re weary. Refresh and renew yourself, your body, your mind, your spirit. Then get back to work",
    ],
    songs: [
      {
        title: "Khul Kabhi Toh - Haider",
        youtube: "https://youtu.be/LoAoM7zXRpU",
        spotify: "https://open.spotify.com/track/3vIJJRPZt2NxusCmQvgLnN",
      },
      {
        title: "Sham - Aisha",
        youtube: "https://youtu.be/kl8T6tsOZJk",
        spotify: "https://open.spotify.com/track/5YOjbB5DC2u1y05soLmhsm",
      },
    ],
  },
};

export default function MoodSuggestions() {
  const location = useLocation();
  const mood = new URLSearchParams(location.search).get("mood");

  const quotes = useMemo(() => moodData[mood]?.quotes || [], [mood]);
  const songs = useMemo(() => moodData[mood]?.songs || [], [mood]);

  const [quote, setQuote] = useState("");
  const [song, setSong] = useState(null);
  const [isLoadingQuote, setIsLoadingQuote] = useState(false);
  const [isLoadingSong, setIsLoadingSong] = useState(false);

  const generateQuote = useCallback(() => {
    setIsLoadingQuote(true);
    setTimeout(() => {
      const random = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(random);
      setIsLoadingQuote(false);
    }, 300);
  }, [quotes]);

  const generateSong = useCallback(() => {
    setIsLoadingSong(true);
    setTimeout(() => {
      const random = songs[Math.floor(Math.random() * songs.length)];
      setSong(random);
      setIsLoadingSong(false);
    }, 300);
  }, [songs]);

  useEffect(() => {
    generateQuote();
    generateSong();
  }, [generateQuote, generateSong]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
      <div className="bg-white dark:bg-zinc-800 shadow-2xl rounded-xl p-8 max-w-md w-full text-center transition-all duration-500">
        <h2 className="text-2xl font-bold mb-6 text-purple-700 dark:text-purple-300">
          🎵 Based on your mood: <span className="capitalize">{mood}</span>
        </h2>

        {/* Quote Box */}
        <div className="relative bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg border border-purple-300 dark:border-purple-600 mb-4 transition-all duration-300">
          {isLoadingQuote ? (
            <p className="text-sm italic text-gray-400 animate-pulse">Refreshing quote...</p>
          ) : (
            <span className="italic text-sm opacity-90 transition-opacity duration-300">"{quote}"</span>
          )}
          <button
            onClick={generateQuote}
            className="absolute top-2 right-2 text-purple-500 hover:text-purple-700"
            title="Refresh quote"
          >
            <FaSyncAlt />
          </button>
        </div>

        {/* Song Box */}
        <div className="relative bg-blue-50 dark:bg-zinc-700/40 p-4 rounded-lg border border-blue-300 dark:border-blue-600 transition-all duration-300">
          {isLoadingSong ? (
            <p className="text-sm italic text-gray-400 animate-pulse">Refreshing song...</p>
          ) : (
            <>
              <p className="font-semibold text-base">
                <FaMusic className="inline mr-2" />
                {song?.title}
              </p>
              <div className="flex justify-center gap-4 mt-2">
                <a
                  href={song?.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-red-600 underline"
                >
                  YouTube
                </a>
                <a
                  href={song?.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-600 underline"
                >
                  Spotify
                </a>
              </div>
            </>
          )}
          <button
            onClick={generateSong}
            className="absolute top-2 right-2 text-blue-500 hover:text-blue-700"
            title="Refresh song"
          >
            <FaSyncAlt />
          </button>
        </div>

        <div className="mt-6 text-center">
          <Link to="/journal" className="text-purple-600 hover:underline">
            → Go to Journal
          </Link>
        </div>
      </div>
    </div>
  );
}
