import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section
      id="call-to-action"
      className="relative min-h-screen w-full bg-gradient-to-br from-yellow-900 via-slate-900 to-slate-800 text-white flex items-center justify-center px-4 sm:px-6 py-20 overflow-hidden"
    >
      <div className="max-w-3xl w-full text-center mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-5xl font-bold mb-6 text-yellow-300"
        >
          Join the Movement
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-lg sm:text-xl text-yellow-100 mb-10"
        >
          Be part of a safer Katsina. Report incidents, receive alerts, and
          empower your community.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mx-auto w-full max-w-xs"
        >
          <Link
            to="/signup"
            className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold py-3 px-6 rounded-lg transition text-center"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="border border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-slate-900 font-semibold py-3 px-6 rounded-lg transition text-center"
          >
            Login
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
