import contacts from "./mockContacts";
import type { Contact } from "./types";
import { FiEye } from "react-icons/fi";

type Props = {
  onView: (contact: Contact) => void;
};

export default function ContactTable({ onView }: Props) {
  return (
    <div className="bg-white rounded shadow overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead className="bg-[#0a1f44] text-white">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Phone</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c.id} className="border-b">
              <td className="px-4 py-2">{c.name}</td>
              <td className="px-4 py-2">{c.email}</td>
              <td className="px-4 py-2">{c.phone}</td>
              <td className="px-4 py-2">{c.category}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    c.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {c.status}
                </span>
              </td>
              <td className="px-4 py-2">
                <button
                  onClick={() => onView(c)}
                  className="text-[#0a1f44] hover:text-blue-600"
                >
                  <FiEye />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
