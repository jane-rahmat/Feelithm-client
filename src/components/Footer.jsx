// src/components/Footer.jsx
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm bg-transparent text-gray-700 dark:text-gray-300 border-t border-purple-100 dark:border-purple-700 mt-auto">
      <p className="mb-1 italic font-medium">
        “Not just a mood tracker — a mood lifter.”
      </p>

      <p className="mb-2">
        &copy; 2025 Feelithm · Developed by <strong>Jane Rahmat 💙</strong>
      </p>

      <div className="flex justify-center gap-4 text-lg text-purple-600 dark:text-purple-400">
        <a
          href="https://www.linkedin.com/in/your-linkedin" // replace this
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-purple-800 dark:hover:text-purple-300 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/jane-rahmat/Feelithm-client.git"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-purple-800 dark:hover:text-purple-300 transition"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}
