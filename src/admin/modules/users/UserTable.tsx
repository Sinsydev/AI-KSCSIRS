import { FiEdit, FiTrash2 } from "react-icons/fi";
import users from "./mockUsers";
import type { User } from "./types";

type Props = {
  onEdit: (user: User) => void;
};

export default function UserTable({ onEdit }: Props) {
  return (
    <div className="bg-white rounded shadow overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead className="bg-[#0a1f44] text-white">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Role</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.role}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="px-4 py-2 flex gap-3">
                <button
                  onClick={() => onEdit(user)}
                  className="text-[#0a1f44] hover:text-blue-600"
                >
                  <FiEdit />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
