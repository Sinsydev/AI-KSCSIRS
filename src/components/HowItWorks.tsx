import { FaBullhorn, FaBell, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <FaBullhorn className="text-4xl text-blue-400 mx-auto" />,
    title: "Report",
    description:
      "Submit incidents anonymously or with your identity to help authorities respond quickly.",
  },
  {
    icon: <FaBell className="text-4xl text-blue-400 mx-auto" />,
    title: "Alert",
    description:
      "Receive real-time notifications about nearby threats, emergencies, or safety updates.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-blue-400 mx-auto" />,
    title: "Protect",
    description:
      "Empower your community with AI-driven insights and proactive safety measures.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative min-h-screen w-full bg-slate-800 text-white flex items-center justify-center px-4 sm:px-6 py-20 overflow-hidden"
    >
      <div className="max-w-6xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-5xl font-bold mb-16 text-blue-300"
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-slate-700 rounded-xl p-8 shadow-xl hover:shadow-blue-500/30 transition text-center mx-auto w-full max-w-xs"
            >
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-200">
                {step.title}
              </h3>
              <p className="text-base text-blue-100 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
