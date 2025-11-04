import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "Home", to: "hero" },
  { label: "How It Works", to: "how-it-works" },
  { label: "Impact", to: "community-impact" },
  { label: "Alerts", to: "live-alerts" },
  { label: "Stats", to: "community-stats" },
  { label: "Join", to: "call-to-action" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo on the far left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="text-yellow-300 font-bold text-xl cursor-pointer"
        >
          <Link to="hero" smooth={true} duration={500}>
            AI - KSCSIRS
          </Link>
        </motion.div>

        {/* Spacer to push nav to far right */}
        <div className="flex-1" />

        {/* Desktop Nav on the far right */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="group relative text-white cursor-pointer px-4 py-2 transition duration-300 hover:text-yellow-300"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute inset-0 rounded-full border border-yellow-300 opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-105 transition-all duration-300 ease-out"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-yellow-300 text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Slide-In from Right */}
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={isOpen ? { x: 0, opacity: 1 } : { x: 300, opacity: 0 }}
        transition={{ duration: 0.1 }}
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-slate-800 shadow-lg z-40 px-6 py-10 space-y-6 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-yellow-300 text-xl"
        >
          <FaTimes />
        </button>

        <div className="mt-10 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-yellow-300 text-lg font-medium cursor-pointer transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
