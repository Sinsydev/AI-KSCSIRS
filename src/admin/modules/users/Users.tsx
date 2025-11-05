import { useState } from "react";
import type { User } from "./types";
import UserFilters from "./UserFilters";
import UserTable from "./UserTable";
import UserModal from "./UserModal";
import Pagination from "./Pagination";

export default function Users() {
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  return (
    <div className="p-6 bg-[#f5f7fa] min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-[#0a1f44]">User Management</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-[#0a1f44] text-white px-4 py-2 rounded hover:bg-[#09203b] transition"
        >
          Add User
        </button>
      </div>

      <UserFilters />
      <UserTable
        onEdit={(user) => {
          setEditingUser(user);
          setShowModal(true);
        }}
      />
      <Pagination />

      {showModal && (
        <UserModal
          user={editingUser}
          onClose={() => {
            setShowModal(false);
            setEditingUser(null);
          }}
        />
      )}
    </div>
  );
}
