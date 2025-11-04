import { FaBullhorn, FaBell, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <FaBullhorn className="text-4xl text-yellow-400 mx-auto" />,
    label: "Incidents Reported",
    value: "1,245",
  },
  {
    icon: <FaBell className="text-4xl text-yellow-400 mx-auto" />,
    label: "Alerts Sent",
    value: "3,678",
  },
  {
    icon: <FaUsers className="text-4xl text-yellow-400 mx-auto" />,
    label: "Citizens Engaged",
    value: "5,210",
  },
];

type StatCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-slate-700 rounded-xl p-8 shadow-xl hover:shadow-yellow-500/30 transition text-center mx-auto w-full max-w-xs"
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold mb-3 text-yellow-200">{label}</h3>
      <p className="text-3xl font-bold text-yellow-100">{value}</p>
    </motion.div>
  );
}

function CommunityStats() {
  return (
    <section
      id="community-stats"
      className="relative min-h-screen w-full bg-slate-800 text-white flex items-center justify-center px-4 sm:px-6 py-20 overflow-hidden"
    >
      <div className="max-w-6xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-5xl font-bold mb-16 text-yellow-300"
        >
          Community Stats
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunityStats;
