import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Sync theme on mount
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = stored === "dark" || (!stored && prefersDark);

    setIsDark(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme);
  }, []);

  // Apply theme on toggle
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-md transition"
    >
      <motion.div
        key={isDark ? "sun" : "moon"}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {isDark ? (
          <FaSun className="text-xl" />
        ) : (
          <FaMoon className="text-xl" />
        )}
      </motion.div>
    </button>
  );
};

export default DarkModeToggle;
