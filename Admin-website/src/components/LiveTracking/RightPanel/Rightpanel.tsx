import MapView from "./MapView";
import "./RightPanel.css";
import type { Employee } from "../../../types/employee";

type Props = {
  employees: Employee[];
  selectedEmployeeId: number | null;
};

const RightPanel = ({ employees, selectedEmployeeId }: Props) => {
  const selectedEmployee =
    employees.find((e) => e.id === selectedEmployeeId) || null;

  return (
    <div className="live-tracking-right-panel">
      <MapView
        employees={employees}
        selectedEmployee={selectedEmployee}
      />
    </div>
  );
};

export default RightPanel;