import { useState } from "react";
import "./LiveTracking.css";
import TopSection from "../../components/LiveTracking/TopSection/TopSection";
import LeftPanel from "../../components/LiveTracking/LeftPanel/LeftPanel";
import RightPanel from "../../components/LiveTracking/RightPanel/Rightpanel";

import type { Employee, FilterType } from "../../types/employee";

const LiveTrackingPage = () => {
  /* ===== Data (مؤقتة) ===== */
  const [employees] = useState<Employee[]>([
    {
      id: 1,
      name: "Mahmoud Amr",
      status: "onService",
      location: { lat: 30.0444, lng: 31.2357 },
    },
    {
      id: 2,
      name: "Ramez Medhat",
      status: "available",
      location: { lat: 30.05, lng: 31.23 },
    },
    {
      id: 3,
      name: "Amr Warda",
      status: "onService",
      location: { lat: 30.03, lng: 31.24 },
    },
  ]);

  /* ===== State ===== */
  const [selectedEmployee, setSelectedEmployee] = useState<number | null>(null);
  const [filter, setFilter] = useState<FilterType>("all");
  const [search, setSearch] = useState("");

  /* ===== Filtering ===== */
  const filteredEmployees = employees.filter((emp) => {
    const matchFilter =
      filter === "all" ? true : emp.status === filter;

    const matchSearch = emp.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchFilter && matchSearch;
  });

  return (
    <div className="live-tracking-page">
      {/* 🔹 Top */}
      <TopSection
        employees={employees}
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
      />

      {/* 🔹 Layout */}
      <div className="live-tracking-layout">
        <LeftPanel
          employees={filteredEmployees}
          selectedEmployee={selectedEmployee}
          setSelectedEmployee={setSelectedEmployee}
        />

        <RightPanel
          employees={filteredEmployees}
          selectedEmployeeId={selectedEmployee}
        />
      </div>
    </div>
  );
};

export default LiveTrackingPage;