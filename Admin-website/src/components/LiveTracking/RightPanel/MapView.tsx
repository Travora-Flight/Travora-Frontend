import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import type { Employee } from "../../../types/employee";

type Props = {
  employees: Employee[];
  selectedEmployee: Employee | null;
};

/* ===== Move map to selected employee ===== */
const FlyToEmployee = ({ employee }: { employee: Employee | null }) => {
  const map = useMap();

  if (employee) {
    map.setView(
      [employee.location.lat, employee.location.lng],
      15
    );
  }

  return null;
};

const MapView = ({ employees, selectedEmployee }: Props) => {
  return (
    <div className="live-tracking-map-container">
      <MapContainer
        center={[30.0444, 31.2357]}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
      >
        {/* ===== Tiles ===== */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* ===== Focus ===== */}
        <FlyToEmployee employee={selectedEmployee} />

        {/* ===== Markers ===== */}
        {employees.map((emp) => (
          <Marker
            key={emp.id}
            position={[emp.location.lat, emp.location.lng]}
          >
            <Popup>
              <div className="live-tracking-map-popup">

                {/* Header */}
                <div className="live-tracking-popup-header">
                  <h4>{emp.name}</h4>
                  <span className="live-tracking-emp-id">EMP{emp.id}</span>
                </div>

                {/* Status */}
                <span
                  className={`live-tracking-popup-status ${emp.status === "available"
                      ? "available"
                      : "onService"
                    }`}
                >
                  {emp.status === "available"
                    ? "Available"
                    : "On Service"}
                </span>

                {/* Service */}
                <div className="live-tracking-popup-service">
                  Client pickup - Zamalek
                </div>

                {/* Info */}
                <div className="live-tracking-popup-info">
                  <p>Downtown Cairo, Egypt</p>
                  <p>Updated 2 mins ago</p>
                </div>

              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className="live-tracking-map-legend">
        <h4>Status Legend</h4>

        <p className="live-tracking-legend available">Available</p>
        <p className="live-tracking-legend onService">On Service</p>
      </div>
    </div>
  );
};

export default MapView; 