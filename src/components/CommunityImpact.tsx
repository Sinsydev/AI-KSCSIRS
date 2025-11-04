import { FaRoad, FaStopwatch, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const impacts = [
  {
    icon: <FaRoad className="text-4xl text-green-400 mx-auto" />,
    title: "Safer Streets",
    description:
      "Reduced crime rates and improved patrol coordination through real-time incident tracking.",
  },
  {
    icon: <FaStopwatch className="text-4xl text-green-400 mx-auto" />,
    title: "Faster Response",
    description:
      "Emergency teams reach scenes quicker with AI-prioritized alerts and location data.",
  },
  {
    icon: <FaUsers className="text-4xl text-green-400 mx-auto" />,
    title: "Empowered Citizens",
    description:
      "Residents feel heard and involved, contributing to a stronger, united community.",
  },
];

const CommunityImpact = () => {
  return (
    <section
      id="community-impact"
      className="relative min-h-screen w-full bg-slate-900 text-white flex items-center justify-center px-4 sm:px-6 py-20 overflow-hidden"
    >
      <div className="max-w-6xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-5xl font-bold mb-16 text-green-300"
        >
          Community Impact
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-slate-800 rounded-xl p-8 shadow-xl hover:shadow-green-500/30 transition text-center mx-auto w-full max-w-xs"
            >
              <div className="mb-6">{impact.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-green-200">
                {impact.title}
              </h3>
              <p className="text-base text-green-100 leading-relaxed">
                {impact.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;
