export default function UserFilters() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <input
        type="text"
        placeholder="Search by name or email"
        className="px-4 py-2 border rounded-md w-full md:w-1/3"
      />
      <div className="flex gap-4">
        <select className="px-4 py-2 border rounded-md">
          <option value="">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Support">Support</option>
        </select>
        <select className="px-4 py-2 border rounded-md">
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
    </div>
  );
}
