import { FaExclamationTriangle, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

const alerts = [
  {
    location: "Kofar Sauri",
    time: "2 mins ago",
    message: "Suspicious movement detected near market area.",
  },
  {
    location: "GRA Roundabout",
    time: "5 mins ago",
    message: "Traffic disruption due to minor collision.",
  },
  {
    location: "Barhim",
    time: "10 mins ago",
    message: "Unidentified drone spotted hovering over rooftops.",
  },
];

const LiveAlerts = () => {
  return (
    <section
      id="live-alerts"
      className="relative min-h-screen w-full bg-slate-900 text-white flex items-center justify-center px-4 sm:px-6 py-20 overflow-hidden"
    >
      <div className="max-w-6xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-extrabold mb-6 text-red-400 tracking-tight"
        >
          Live Alerts
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-red-200 mb-12 max-w-2xl mx-auto"
        >
          Real-time updates from across Katsina. Stay informed, stay safe, and
          help us respond faster.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {alerts.map((alert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-slate-800 rounded-xl p-6 shadow-xl border-l-4 border-red-500 relative overflow-hidden hover:shadow-red-500/30 transition duration-300 mx-auto w-full max-w-xs"
            >
              <div className="absolute top-4 right-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
              </div>
              <div className="mb-4 flex justify-center">
                <FaExclamationTriangle className="text-4xl text-red-400" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-red-200">
                {alert.message}
              </h3>
              <p className="text-sm text-red-100 flex items-center justify-center gap-2">
                <FaMapMarkerAlt /> {alert.location}
              </p>
              <p className="text-xs text-red-100 mt-2 flex items-center justify-center gap-2">
                <FaClock /> {alert.time}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveAlerts;
