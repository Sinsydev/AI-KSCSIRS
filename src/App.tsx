// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import Users from "./admin/modules/users/Users";
import Settings from "./admin/pages/Settings";
import AdminLayout from "./admin/Layout/AdminLayout";
import Complaints from "./admin/pages/Complaints";
import Contacts from "./admin/pages/Contacts";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Admin login route */}
        <Route path="/admin/login" element={<Login />} />

        {/* Admin layout with nested pages */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="/admin/complaints" element={<Complaints />} />
          <Route path="/admin/contacts" element={<Contacts />} />
        </Route>

        {/* Fallback route */}
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center h-screen bg-gray-100">
              <h1 className="text-4xl font-bold text-black-600">
                Admin Panel is Live 🎉
              </h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
