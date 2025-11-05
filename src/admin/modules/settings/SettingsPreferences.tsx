import { FiSun, FiBell, FiSettings } from "react-icons/fi";

type Props = {
  onClose: () => void;
};

export default function SettingsPreferences({ onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold text-[#0a1f44] mb-4 flex items-center gap-2">
          <FiSettings className="text-[#0a1f44]" />
          System Preferences
        </h2>
        <form className="space-y-4">
          <div>
            <label className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-700">
              <FiSun className="text-lg text-yellow-500" />
              Theme
            </label>
            <select className="w-full px-4 py-2 border rounded">
              <option value="">Select Theme</option>
              <option value="light">🌞 Light</option>
              <option value="dark">🌙 Dark</option>
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-700">
              <FiBell className="text-lg text-blue-500" />
              Notification Frequency
            </label>
            <select className="w-full px-4 py-2 border rounded">
              <option value="">Choose Frequency</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>

          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#0a1f44] text-white rounded"
            >
              Save Preferences
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
