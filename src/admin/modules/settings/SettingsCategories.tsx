export default function SettingsCategories() {
  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-xl font-semibold text-[#0a1f44] mb-4">
        Manage Categories
      </h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="New Category Name"
          className="w-full px-4 py-2 border rounded"
        />
        <button className="px-4 py-2 bg-[#0a1f44] text-white rounded">
          Add Category
        </button>
      </form>
    </div>
  );
}
