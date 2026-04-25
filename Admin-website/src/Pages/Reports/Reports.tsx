import "./Reports.css";
import { useState } from "react";

import ReportsHeader from "../../components/reports/ReportsHeader/ReportsHeader";
import ReportsStats from "../../components/reports/ReportsStats/ReportsStats";
import ReportsActions from "../../components/reports/ReportsActions/ReportsActions";
import ReportsTable from "../../components/reports/ReportsTable/ReportsTable";
import AddReportModal from "../../components/reports/AddReportModal/AddReportModal";

function Reports() {

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [idFilter, setIdFilter] = useState("");

  const [reports, setReports] = useState([
    { name: "Monthly Revenue Report", type: "Financial", date: "Jan 28, 2026", id: "#1001" },
    { name: "Customer Satisfaction", type: "Analytics", date: "Jan 28, 2026", id: "#1002" },
    { name: "Service Performance", type: "Operations", date: "Jan 27, 2026", id: "#1003" },
    { name: "Employee Productivity", type: "HR", date: "Jan 27, 2026", id: "#1004" },
  ]);

  const addReport = (newReport: any) => {
    setReports((prev) => [
      { ...newReport, id: `#${1000 + prev.length + 1}` },
      ...prev
    ]);
  };

  return (
    <div className="reports-page">

      <ReportsHeader />

      <ReportsStats />

      <ReportsActions
        openModal={() => setOpen(true)}
        onSearch={setSearch}
      />

      <ReportsTable
        data={reports}
        search={search}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        idFilter={idFilter}
        setIdFilter={setIdFilter}
      />

      <AddReportModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onAdd={addReport}
      />

    </div>
  );
}

export default Reports;