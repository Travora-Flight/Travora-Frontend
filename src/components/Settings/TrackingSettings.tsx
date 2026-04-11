import { useState } from "react";
import "./TrackingSettings.css";

const TrackingSettings = () => {
  // ===== State =====
  const [settings, setSettings] = useState({
    showNames: true,
    autoRefresh: true,
  });

  // ===== Toggle Handler =====
  const handleToggle = (key: "showNames" | "autoRefresh") => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // ===== Save =====
  const handleSave = () => {
    console.log("Saved Tracking Settings:", settings);
  };

  // ===== Reset =====
  const handleReset = () => {
    setSettings({
      showNames: false,
      autoRefresh: false,
    });
  };

  return (
    <div className="tracking-card">
      
      {/* ===== Title ===== */}
      <h3>Tracking Settings</h3>
      <p className="desc">Configure live tracking preferences</p>

      {/* ===== Missing Label ===== */}
      <p className="section-label">
        How often to refresh employee locations
      </p>

      {/* ===== Option 1 ===== */}
      <div className="tracking-row">
        <div>
          <strong>Show Employee Names on Map</strong>
          <p>Display names on map markers</p>
        </div>

        <div
          className={`toggle ${settings.showNames ? "active" : ""}`}
          onClick={() => handleToggle("showNames")}
        >
          <div className="circle"></div>
        </div>
      </div>

      {/* ===== Option 2 ===== */}
      <div className="tracking-row">
        <div>
          <strong>Auto-Refresh</strong>
          <p>Automatically update tracking data</p>
        </div>

        <div
          className={`toggle ${settings.autoRefresh ? "active" : ""}`}
          onClick={() => handleToggle("autoRefresh")}
        >
          <div className="circle"></div>
        </div>
      </div>

      {/* ===== Divider ===== */}
      <hr className="divider" />

      {/* ===== Buttons ===== */}
      <div className="actions">
        <button className="reset" onClick={handleReset}>
          Reset
        </button>

        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default TrackingSettings;