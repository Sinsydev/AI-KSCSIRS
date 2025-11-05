export default function ContactFilters() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <input
        type="text"
        placeholder="Search by name or email"
        className="px-4 py-2 border rounded-md w-full md:w-1/3"
      />
      <div className="flex gap-4">
        <select className="px-4 py-2 border rounded-md">
          <option value="">All Categories</option>
          <option value="Customer">Customer</option>
          <option value="Partner">Partner</option>
          <option value="Internal">Internal</option>
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
