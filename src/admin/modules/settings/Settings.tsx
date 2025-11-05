import { useState } from "react";
import { FiUser, FiSettings, FiFolder } from "react-icons/fi";
import SettingsProfile from "./SettingsProfile";
import SettingsPreferences from "./SettingsPreferences";

export default function Settings() {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showPreferencesModal, setShowPreferencesModal] = useState(false);

  const cards = [
    {
      title: "Admin Profile",
      description: "Update your name, email, and login credentials.",
      icon: <FiUser className="text-3xl text-[#0a1f44]" />,
      onClick: () => setShowProfileModal(true),
    },
    {
      title: "System Preferences",
      description: "Configure themes, notifications, and system behavior.",
      icon: <FiSettings className="text-3xl text-[#0a1f44]" />,
      onClick: () => setShowPreferencesModal(true),
    },
    {
      title: "Manage Categories",
      description: "Add or edit system categories and labels.",
      icon: <FiFolder className="text-3xl text-[#0a1f44]" />,
      onClick: () => alert("Open Manage Categories"),
    },
  ];

  return (
    <div className="p-6 bg-[#f5f7fa] min-h-screen">
      <h1 className="text-3xl font-bold text-[#0a1f44] mb-6">Admin Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={card.onClick}
            className="bg-white p-6 rounded-lg shadow cursor-pointer hover:shadow-md transition"
          >
            <div className="mb-4">{card.icon}</div>
            <h2 className="text-xl font-semibold text-[#0a1f44] mb-2">
              {card.title}
            </h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>

      {showProfileModal && (
        <SettingsProfile onClose={() => setShowProfileModal(false)} />
      )}
      {showPreferencesModal && (
        <SettingsPreferences onClose={() => setShowPreferencesModal(false)} />
      )}
    </div>
  );
}
