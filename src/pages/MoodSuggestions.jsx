import React, { useEffect, useState, useCallback } from "react";
import { useLocation, Link } from "react-router-dom";
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
        title: "Ilahi - Yeh Jawaani Hai Deewani",
        youtube: "https://www.youtube.com/watch?v=fdubeMFwuGs",
        spotify: "https://open.spotify.com/track/5cgKosPPj5Cs9a2JQufUc1?si=b68e0e22535547a3",
      },
      {
        title: "Love You Zindagi - Dear Zindagi",
        youtube: "https://www.youtube.com/watch?v=rwn0Zs7ELzc&list=RDrwn0Zs7ELzc&start_radio=1",
        spotify: "https://open.spotify.com/track/0tZMTCvEzXWz7AvjzIPf1H?si=936d1518e3914bd5",
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
        youtube: "https://www.youtube.com/watch?v=bzSTpdcs-EI&list=RDbzSTpdcs-EI&start_radio=1",
        spotify: "https://open.spotify.com/track/0H2iJVgorRR0ZFgRqGUjUM?si=961a715092d749dc",
      },
      {
        title: "Agar Tum Saath Ho - Tamasha",
        youtube: "https://youtu.be/xRb8hxwN5zc?si=15If0NV388pHlRWY",
        spotify: "https://open.spotify.com/track/3hkC9EHFZNQPXrtl8WPHnX?si=f801ddc0bd1b4f4e",
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
        title: "Tum Se Hi - Jab We Met",
        youtube: "https://youtu.be/Cb6wuzOurPc?si=LpoYlZqTuuomPn4U",
        spotify: "https://open.spotify.com/track/7eQl3Yqv35ioqUfveKHitE?si=4ca2e219fbe545b4",
      },
      {
        title: "Raabta - Agent Vinod",
        youtube: "https://youtu.be/zlt38OOqwDc?si=RC14ENB4N-O267-h",
        spotify: "https://open.spotify.com/track/6FjbAnaPRPwiP3sciEYctO?si=ebc555d07ce24aa0",
      },
    ],
  },

  Angry: {
    quotes: [
      "Speak when you are angry and you'll make the best speech you'll ever regret.",
      "Anger is one letter short of danger.",
    ],
    songs: [
      {
        title: "Zinda - Bhaag Milkha Bhaag",
        youtube: "https://youtu.be/Ax0G_P2dSBw?si=FTSKpq6zobu5lDE_",
        spotify: "https://open.spotify.com/track/0oQ049KLHdo87oLLmvDA1P?si=98e068a7d01a4422",
      },
      {
        title: "Kar Har Maidan Fateh - Sanju",
        youtube: "https://youtu.be/9iIX4PBplAY?si=3D4TSQ0P26nP0Eny",
        spotify: "https://open.spotify.com/track/7gZwhDmzciskHbZemjf931?si=18ea38809af14114",
      },
    ],
  },

  Anxious: {
    quotes: [
      "Just breathe. You’re stronger than you think.",
      "Worrying means you suffer twice.",
      "One step at a time is good walking.",
    ],
    songs: [
      {
        title: "Patakha Guddi - Highway",
        youtube: "https://youtu.be/8HDTS80dlr4?si=zY9CwfnvFwofSa7X",
        spotify: "https://open.spotify.com/track/7jpmNt5iCtSdXuT1xEGp8O?si=8b7974b6a75e4eaf",
      },
      {
        title: "Zinda Hoon Yaar - Lootera",
        youtube: "https://youtu.be/cgHLvt0rxmM?si=NSQ0KFO954GZhrnE",
        spotify: "https://open.spotify.com/track/44oZxJJGjYbOY1hTKhxswV?si=7eb14703ebcc4fc3",
      },
    ],
  },

  Tired: {
    quotes: [
      "Rest when you're weary. Refresh and renew yourself.",
      "Fatigue is the best pillow.",
    ],
    songs: [
      {
        title: "Khul Kabhi Toh - Haider",
        youtube: "https://youtu.be/LoAoM7zXRpU?si=ZL447rd5zYKCP5Ro",
        spotify: "https://open.spotify.com/track/3vIJJRPZt2NxusCmQvgLnN?si=f67646cf26684f9e",
      },
      {
        title: "Sham - Aisha",
        youtube: "https://youtu.be/kl8T6tsOZJk?si=1eL-FTWn3QErWcu8",
        spotify: "https://open.spotify.com/track/5YOjbB5DC2u1y05soLmhsm?si=09d083ac37944503",
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
    const quotes = moodData[mood]?.quotes || [];
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  }, [mood]);

  const generateSong = useCallback(() => {
    const songs = moodData[mood]?.songs || [];
    const random = songs[Math.floor(Math.random() * songs.length)];
    setSong(random);
  }, [mood]);

  useEffect(() => {
    generateQuote();
    generateSong();
  }, [generateQuote, generateSong]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
      <div className="bg-white dark:bg-zinc-800 shadow-2xl rounded-xl p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-6 text-purple-700 dark:text-purple-300">
          🎵 Based on your mood: <span className="capitalize">{mood}</span>
        </h2>

        {/* Quote Box */}
        <div className="relative bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg border border-purple-300 dark:border-purple-600 mb-4">
          
          <span className="italic text-sm">"{quote}"</span>
          <button
            onClick={generateQuote}
            className="absolute top-2 right-2 text-purple-500 hover:text-purple-700"
            title="Refresh quote"
          >
            <FaSyncAlt />
          </button>
        </div>

        {/* Song Box */}
        <div className="relative bg-blue-50 dark:bg-zinc-700/40 p-4 rounded-lg border border-blue-300 dark:border-blue-600">
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
