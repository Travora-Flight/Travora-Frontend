import "./EmployeesTable.css";
import { useState } from "react";
import { Funnel } from "lucide-react";
import EmployeeRow from "../EmployeeRow/EmployeeRow";

const EmployeesTable = ({
  search,
  data,
  onRowClick,
  onStatusChange,
  statusFilter,
  setStatusFilter
}: any) => {

  const [openFilter, setOpenFilter] = useState(false);
  const [openShift, setOpenShift] = useState(false);
  const [shiftFilter, setShiftFilter] = useState("all");
  const [openCheckpoint, setOpenCheckpoint] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [openJob, setOpenJob] = useState(false);
  const [jobFilter, setJobFilter] = useState("all");
  const [checkpointFilter, setCheckpointFilter] = useState("all");

  const filteredData = data.filter((emp: any) => {

    const matchesSearch =
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.mobile.includes(search) ||
      emp.email.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || emp.status === statusFilter;

    const matchesShift =
      shiftFilter === "all" || emp.shift === shiftFilter;

    const matchesJob =
      jobFilter === "all" || emp.job === jobFilter;

    const matchesCheckpoint =
      checkpointFilter === "all" || emp.checkpoint === checkpointFilter;

    return matchesSearch && matchesStatus && matchesJob && matchesCheckpoint && matchesShift;

  });
  return (
    <div className="employees-table-container">
      <div className="employees-table-header">

        <h3>Employees Table</h3>
        <div className="employees-filter">

          <button
            className={`employees-filter-btn ${openFilter ? "active" : ""}`}
            onClick={() => setOpenFilter(!openFilter)}
          >
            <Funnel size={14} />
            Filter
          </button>

          {openFilter && (
            <div className="employees-filter-dropdown">

              {/* 🔹 STATUS */}
              <div className="filter-group">
                <div
                  className="filter-title"
                  onClick={() => setOpenStatus(!openStatus)}
                >
                  Status ▾
                </div>

                {openStatus && (
                  <div className="filter-options">
                    <div onClick={() => setStatusFilter("all")}>All</div>
                    <div onClick={() => setStatusFilter("active")}>Active</div>
                    <div onClick={() => setStatusFilter("inactive")}>Inactive</div>
                  </div>
                )}
              </div>

              {/* 🔹 JOB */}
              <div className="filter-group">
                <div
                  className="filter-title"
                  onClick={() => setOpenJob(!openJob)}
                >
                  Job ▾
                </div>

                {openJob && (
                  <div className="filter-options">
                    <div onClick={() => setJobFilter("all")}>All</div>
                    <div onClick={() => setJobFilter("Driver")}>Driver</div>
                    <div onClick={() => setJobFilter("Baggage Handler")}>Baggage Handler</div>
                  </div>
                )}
              </div>

              {/* 🔹 SHIFT */}
              <div className="filter-group">

                <div
                  className="filter-title"
                  onClick={() => setOpenShift(!openShift)}
                >
                  Shift Type ▾
                </div>

                {openShift && (
                  <div className="filter-options">
                    <div onClick={() => setShiftFilter("all")}>All</div>
                    <div onClick={() => setShiftFilter("Morning")}>Morning</div>
                    <div onClick={() => setShiftFilter("Afternoon")}>Afternoon</div>
                    <div onClick={() => setShiftFilter("Evening")}>Evening</div>
                    <div onClick={() => setShiftFilter("Night")}>Night</div>
                  </div>
                )}

              </div>

              {/* 🔹 CHECKPOINT */}
              <div className="filter-group">
                <div
                  className="filter-title"
                  onClick={() => setOpenCheckpoint(!openCheckpoint)}
                >
                  Checkpoint ▾
                </div>

                {openCheckpoint && (
                  <div className="filter-options">
                    <div onClick={() => setCheckpointFilter("all")}>All</div>
                    <div onClick={() => setCheckpointFilter("PickUp")}>PickUp</div>
                    <div onClick={() => setCheckpointFilter("Customs")}>Customs</div>
                    <div onClick={() => setCheckpointFilter("Delivery")}>Delivery</div>
                    <div onClick={() => setCheckpointFilter("Security Check")}>Security Check</div>
                    <div onClick={() => setCheckpointFilter("AirPort Terminal")}>AirPort Terminal</div>
                    <div onClick={() => setCheckpointFilter("AirPort Gate")}>AirPort Gate</div>
                    <div onClick={() => setCheckpointFilter("AirPort Baggage Belt")}>AirPort Baggage Belt</div>
                    <div onClick={() => setCheckpointFilter("Transit Hub")}>Transit Hub</div>
                  </div>
                )}
              </div>

            </div>
          )}

        </div>
      </div>
      <table className="employees-table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Status</th>
            <th>Email</th>
            <th>Shift Type</th>
            <th>ID</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((emp: any) => (
            <EmployeeRow
              key={emp.id}
              emp={emp}
              onClick={onRowClick}
              onStatusChange={onStatusChange}
            />
          ))}
        </tbody>

      </table>

      <div className="employees-table-footer">Today</div>

    </div>
  );
};

export default EmployeesTable;