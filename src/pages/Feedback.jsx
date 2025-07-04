import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EmojiBackground from "../components/EmojiBackground";

export default function Feedback() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields!");
      return;
    }

    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-indigo-900 dark:via-purple-900 dark:to-gray-900 text-gray-800 dark:text-gray-100">
      <EmojiBackground />
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg bg-white/80 dark:bg-zinc-800/80 backdrop-blur p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">We value your feedback 💬</h1>

          {submitted ? (
            <p className="text-green-600 dark:text-green-400 text-center font-medium">
              Thank you! Your message has been received.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-700 shadow focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-700 shadow focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-700 shadow resize-none focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition shadow-lg"
              >
                Send Feedback
              </button>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
