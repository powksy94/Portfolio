import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [dark]);

  return (
    <motion.button
      onClick={() => setDark(!dark)}
      whileTap={{ scale: 0.9 }} // légère animation au clic
      className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
      aria-label="Toggle theme"
    >
      {dark ? (
        <motion.span
          key="dark"
          initial={{ rotate: -20, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          aria-hidden
        >
          🌙
        </motion.span>
      ) : (
        <motion.span
          key="light"
          initial={{ rotate: 20, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          aria-hidden
        >
          ☀️
        </motion.span>
      )}
    </motion.button>
  );
}
