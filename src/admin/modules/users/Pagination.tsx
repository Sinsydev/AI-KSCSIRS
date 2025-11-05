export default function Pagination() {
  return (
    <div className="flex justify-end mt-4 gap-2">
      <button className="px-3 py-1 border rounded hover:bg-gray-100">
        Previous
      </button>
      <button className="px-3 py-1 border rounded hover:bg-gray-100">1</button>
      <button className="px-3 py-1 border rounded hover:bg-gray-100">2</button>
      <button className="px-3 py-1 border rounded hover:bg-gray-100">
        Next
      </button>
    </div>
  );
}
