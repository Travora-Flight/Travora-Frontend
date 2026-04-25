import { Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";

import Login from "./Pages/login/login";
import Dashboard from "./Pages/Dashboard/Dashboard";

import MainLayout from "./Layout/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import Employees from "./Pages/Employees/Employees";
import Requests from "./Pages/Requests/Requests";
import Refunds from "./Pages/Refunds/Refunds";
import LiveTracking from "./Pages/LiveTracking/LiveTracking";
import Passport from "./Pages/PassportVerification/PassportVerification";
import Pricing from "./Pages/PricingManagement/PricingManagement";
import Reports from "./Pages/Reports/Reports";
import Settings from "./Pages/Settings/Settings";

function App() {
  return (
    <Routes>

      {/* Login */}
      <Route path="/" element={<Login />} />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </ProtectedRoute>
        }
      />


      <Route
        path="/employees"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Employees />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/requests"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Requests />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/refunds"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Refunds />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/live-tracking"
        element={
          <ProtectedRoute>
            <MainLayout>
              <LiveTracking />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/passport-verification"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Passport />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/pricing-management"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Pricing />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Reports />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Settings />
            </MainLayout>
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;