import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import logo from "../../assets/logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const isValid =
      email === "admin@example.com" &&
      password === "admin123" &&
      department !== "";

    if (isValid) {
      localStorage.setItem("adminAuth", "true");
      localStorage.setItem("adminDepartment", department);
      setShowModal(true);

      setTimeout(() => {
        navigate(`/admin/${department}`);
      }, 2000);
    } else {
      alert("Invalid credentials or missing department");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a1f44]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Admin Logo" className="h-20" />
        </div>

        <h2 className="text-2xl font-bold text-center text-[#0a1f44] mb-6">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <FiMail className="absolute top-9 left-3 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 pl-10 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a1f44]"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <FiLock className="absolute top-9 left-3 text-gray-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 pl-10 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a1f44]"
              required
            />
          </div>

          {/* Department Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Department
            </label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a1f44]"
              required
            >
              <option value="">Select Department</option>
              <option value="police">Police</option>
              <option value="immigration">Immigration</option>
              <option value="roadsafety">Road Safety</option>
              <option value="health">Health Agency</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0a1f44] text-white py-2 rounded-md hover:bg-[#09203b] transition"
          >
            Login
          </button>
        </form>

        {/* Modal */}
        {showModal && (
          <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center rounded-lg animate-fadeIn">
            <div className="text-center">
              <h3 className="text-xl font-bold text-[#0a1f44] mb-2">
                Login Successful
              </h3>
              <p className="text-gray-600">Redirecting to dashboard...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
