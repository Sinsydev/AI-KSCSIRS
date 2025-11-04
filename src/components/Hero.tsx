import { FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-slate-900 text-white"
    >
      {/* Background Color Layer */}
      <div className="absolute inset-0 bg-slate-900" />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: "url('/assets/katsina-bg.jpg')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-blue-700/50" />

      {/* Animated Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <FaShieldAlt className="text-5xl mb-4 text-blue-300" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold leading-tight text-white text-center"
        >
          AI-Powered Katsina State Community Security
          <br />
          <span className="block mt-2">and Incident Reporting System</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="mt-4 text-lg md:text-xl max-w-2xl"
        >
          Report incidents, receive alerts, and protect Katsina with smart
          technology.
        </motion.p>

        {/* Scroll Down Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="text-blue-300 text-2xl"
          >
            <FaChevronDown />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
