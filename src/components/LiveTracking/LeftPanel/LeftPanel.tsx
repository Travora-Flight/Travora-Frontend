import "./LeftPanel.css";
import { MapPin, Clock, Phone } from "lucide-react";
import type { Employee } from "../../../types/employee";

type Props = {
  employees: Employee[];
  selectedEmployee: number | null;
  setSelectedEmployee: (id: number) => void;
};

const LeftPanel = ({
  employees,
  selectedEmployee,
  setSelectedEmployee,
}: Props) => {
  return (
    <div className="live-tracking-left-panel">
      <h3>Employees</h3>

      <div className="live-tracking-employees-list">
        {employees.map((emp) => (
          <div
            key={emp.id}
            className={`live-tracking-employee-card ${
              selectedEmployee === emp.id ? "active" : ""
            }`}
            onClick={() => setSelectedEmployee(emp.id)}
          >
            {/* ===== Header ===== */}
            <div className="live-tracking-card-header">
              <div>
                <h4>{emp.name}</h4>
                <span className="live-tracking-emp-id">EMP{emp.id}</span>
              </div>

              <span
                className={`live-tracking-status ${
                  emp.status === "available"
                    ? "available"
                    : "onService"
                }`}
              >
                {emp.status === "available"
                  ? "Available"
                  : "On Service"}
              </span>
            </div>

            {/* ===== Service ===== */}
            <div className="live-tracking-service-box">
              {emp.status === "onService"
                ? "Pickup Car Service - Zamalek"
                : "Waiting for assignment"}
            </div>

            {/* ===== Info ===== */}
            <div className="live-tracking-info">
              <p>
                <MapPin size={14} />
                Downtown Cairo, Egypt
              </p>

              <p>
                <Clock size={14} />
                Updated 2 mins ago
              </p>

              <p>
                <Phone size={14} />
                +20 100 123 4567
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftPanel;