import { useState } from "react";
import { Globe, MapPin } from "lucide-react";
import "./Settings.css";

import GeneralSettings from "../../components/Settings/GeneralSettings";
import TrackingSettings from "../../components/Settings/TrackingSettings";
import ChangePasswordModal from "../../components/Settings/ChangePasswordModal";

const Settings = () => {
  // التاب الحالي
  const [activeTab, setActiveTab] = useState<"general" | "tracking">("general");

  // فتح / غلق الباسورد
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="settings-page">
      <h2>Settings</h2>
      <p className="subtitle">
        Manage your application preferences and configurations
      </p>

      <div className="settings-layout">

        {/* Sidebar */}
        <div className="settings-sidebar">
          <button
            className={activeTab === "general" ? "active" : ""}
            onClick={() => setActiveTab("general")}
          >
            <Globe className="sidebar-icon" />
            General
          </button>

          <button
            className={activeTab === "tracking" ? "active" : ""}
            onClick={() => setActiveTab("tracking")}
          >
            <MapPin className="sidebar-icon" />
            Tracking
          </button>
        </div>

        {/* Content */}
        <div className="settings-content">
          {activeTab === "general" && (
            <GeneralSettings openPassword={() => setShowPassword(true)} />
          )}

          {activeTab === "tracking" && <TrackingSettings />}
        </div>
      </div>

      {/* Password Modal */}
      {showPassword && (
        <ChangePasswordModal onClose={() => setShowPassword(false)} />
      )}
    </div>
  );
};

export default Settings;