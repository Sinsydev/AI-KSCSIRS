import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./admin/auth/Login";

// Main admin portal
import AdminLayout from "./admin/shared/Layout/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import Users from "./admin/modules/users/Users";
import Settings from "./admin/pages/Settings";
import Complaints from "./admin/pages/Complaints";
import Contacts from "./admin/pages/Contacts";

// Police department portal imports
import PoliceLayout from "./admin/departments/police/PoliceLayout";
import PoliceDashboard from "./admin/departments/police/Dashboard";
import PoliceUsers from "./admin/departments/police/Users";
import PoliceSettings from "./admin/departments/police/Settings";
import PoliceComplaints from "./admin/departments/police/Complaints";

// Immigration department portal imports
import ImmigrationLayout from "./admin/departments/immigration/ImmigrationLayout";
import ImmigrationDashboard from "./admin/departments/immigration/Dashboard";
import ImmigrationMessages from "./admin/departments/immigration/Messages";
import ImmigrationSettings from "./admin/departments/immigration/Settings";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Admin login route */}
        <Route path="/admin/login" element={<Login />} />

        {/* Main admin portal */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="complaints" element={<Complaints />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>

        {/* Police admin portal routes */}
        <Route path="/admin/police" element={<PoliceLayout />}>
          <Route index element={<PoliceDashboard />} />
          <Route path="dashboard" element={<PoliceDashboard />} />
          <Route path="users" element={<PoliceUsers />} />
          <Route path="settings" element={<PoliceSettings />} />
          <Route path="complaints" element={<PoliceComplaints />} />
        </Route>

        {/* Immigration admin portal routes */}
        <Route path="/admin/immigration" element={<ImmigrationLayout />}>
          <Route index element={<ImmigrationDashboard />} />
          <Route path="dashboard" element={<ImmigrationDashboard />} />
          <Route path="messages" element={<ImmigrationMessages />} />
          <Route path="settings" element={<ImmigrationSettings />} />
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
