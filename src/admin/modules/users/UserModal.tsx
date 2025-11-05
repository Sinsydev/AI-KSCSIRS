import type { User } from "./types";

type Props = {
  user: User | null;
  onClose: () => void;
};

export default function UserModal({ user, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold text-[#0a1f44] mb-4">
          {user ? "Edit User" : "Add User"}
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            defaultValue={user?.name}
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            defaultValue={user?.email}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
          />
          <select
            defaultValue={user?.role}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Support">Support</option>
          </select>
          <select
            defaultValue={user?.status}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <div className="flex justify-end gap-4">
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
