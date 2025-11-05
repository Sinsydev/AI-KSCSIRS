export default function ComplaintFilters() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <input
        type="text"
        placeholder="Search by user or subject"
        className="px-4 py-2 border rounded-md w-full md:w-1/3"
      />
      <select className="px-4 py-2 border rounded-md">
        <option value="">All Status</option>
        <option value="Pending">Pending</option>
        <option value="Resolved">Resolved</option>
      </select>
    </div>
  );
}
