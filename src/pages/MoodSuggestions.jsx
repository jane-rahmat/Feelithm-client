import React, { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { FaSyncAlt, FaMusic, FaQuoteLeft } from "react-icons/fa";

const moodData = {
  Happy: {
    quotes: [
      "Happiness is not by chance, but by choice.",
      "Smile, it's free therapy.",
      "The purpose of our lives is to be happy.",
    ],
    songs: [
      {
        title: "Phir Se Ud Chala",
        youtube: "https://www.youtube.com/watch?v=GfCqMv--ncA",
        spotify: "https://open.spotify.com/track/6hzN6D7a5zQ9ENwPQRXtK3",
      },
      {
        title: "Ilahi - Yeh Jawaani Hai Deewani",
        youtube: "https://www.youtube.com/watch?v=8v_4O44sfjM",
        spotify: "https://open.spotify.com/track/2SHn9Pv1C4P6aLDQznF24f",
      },
    ],
  },
  Sad: {
    quotes: [
      "Tears come from the heart and not from the brain.",
      "Every human walks around with a certain kind of sadness.",
    ],
    songs: [
      {
        title: "Channa Mereya - Ae Dil Hai Mushkil",
        youtube: "https://www.youtube.com/watch?v=284Ov7ysmfA",
        spotify: "https://open.spotify.com/track/1VmR2RlIIe7nXR4np1b0v6",
      },
      {
        title: "Kabira - Yeh Jawaani Hai Deewani",
        youtube: "https://www.youtube.com/watch?v=83Y2hvVjXrk",
        spotify: "https://open.spotify.com/track/5ofHgDQoWwWCELiBJl8J8J",
      },
    ],
  },
  Loved: {
    quotes: [
      "You are loved more than you will ever know.",
      "To love and be loved is to feel the sun from both sides.",
    ],
    songs: [
      {
        title: "Raabta - Agent Vinod",
        youtube: "https://www.youtube.com/watch?v=UBZs0kPZE4I",
        spotify: "https://open.spotify.com/track/5qA4bvSPZay7RtEqgSKhHg",
      },
      {
        title: "Tum Se Hi - Jab We Met",
        youtube: "https://www.youtube.com/watch?v=bjjc59FgUpg",
        spotify: "https://open.spotify.com/track/5vlEg2fT4cFWAqU5QptIpQ",
      },
    ],
  },
};

export default function MoodSuggestions() {
  const location = useLocation();
  const mood = new URLSearchParams(location.search).get("mood");

  const [quote, setQuote] = useState("");
  const [song, setSong] = useState(null);

  const generateQuote = useCallback(() => {
    const options = moodData[mood]?.quotes || [];
    if (options.length) {
      const random = options[Math.floor(Math.random() * options.length)];
      setQuote(random);
    } else {
      setQuote("No quote available.");
    }
  }, [mood]);

  const generateSong = useCallback(() => {
    const options = moodData[mood]?.songs || [];
    if (options.length) {
      const random = options[Math.floor(Math.random() * options.length)];
      setSong(random);
    } else {
      setSong(null);
    }
  }, [mood]);

  useEffect(() => {
    generateQuote();
    generateSong();
  }, [generateQuote, generateSong]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 px-4">
      <div className="bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-700 dark:text-purple-300">
          🎵 Based on your mood: {mood}
        </h2>

      {/* Quote Section */}
<div className="relative bg-purple-50 dark:bg-zinc-700 text-purple-900 dark:text-purple-100 p-4 mb-4 rounded-lg text-center">
  <span className="italic">
    <span className="text-xs align-top">“</span>
    {quote}
    <span className="text-xs align-top">”</span>
  </span>
  <button
    onClick={generateQuote}
    className="absolute top-2 right-2 text-purple-500 hover:text-purple-700"
  >
    <FaSyncAlt />
  </button>
</div>




        {/* Song Section */}
        <div className="relative bg-blue-50 dark:bg-zinc-700 text-blue-900 dark:text-blue-100 p-4 rounded-lg text-center">
          <p className="font-medium mb-2">
            <FaMusic className="inline mr-2" />
            Song Suggestion:
          </p>
          {song ? (
            <>
              <p className="font-semibold">{song.title}</p>
              <div className="flex justify-center mt-2 gap-4">
                <a
                  href={song.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-red-600 underline"
                >
                  YouTube
                </a>
                <a
                  href={song.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-600 underline"
                >
                  Spotify
                </a>
              </div>
            </>
          ) : (
            <p className="italic text-gray-500">No song</p>
          )}
          <button
            onClick={generateSong}
            className="absolute top-2 right-2 text-blue-500 hover:text-blue-700"
          >
            <FaSyncAlt />
          </button>
        </div>

        <div className="mt-6 text-center">
          <a href="/journal" className="text-purple-600 hover:underline">
            → Go to Journal
          </a>
        </div>
      </div>
    </div>
  );
}
