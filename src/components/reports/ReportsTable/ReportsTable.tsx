import { useState } from "react";
import "./ReportsTable.css";
import { Filter } from "lucide-react";

function ReportsTable({
  data,
  search,
  typeFilter,
  setTypeFilter,
  idFilter,
  setIdFilter
}: any) {

  const [openFilter, setOpenFilter] = useState(false);

  // فلترة
  const filtered = data
    .filter((item: any) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item: any) => {
      const matchesType =
        typeFilter === "all" || item.type === typeFilter;

      const matchesId =
        !idFilter || item.id.includes(idFilter);

      return matchesType && matchesId;
    });

  // Export
  const handleExport = () => {
    const headers = ["Report Name", "Type", "Date", "ID"];

    const rows = filtered.map((r: any) => [
      r.name,
      r.type,
      r.date,
      r.id,
    ]);

    const csv =
      [headers, ...rows]
        .map((row) => row.join(","))
        .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "reports.csv";
    a.click();
  };

  return (
    <div className="reports-table-card">

      <div className="table-header">
        <h3>Reports Table</h3>

        <div className="table-actions">

          {/*  FILTER */}
          <div className="reports-filter">

            <button
              className="filter"
              onClick={() => setOpenFilter(!openFilter)}
            >
              <Filter size={14} />
              Filter
            </button>

            {openFilter && (
              <div className="reports-filter-dropdown">

                <div onClick={() => {
                  setTypeFilter("all");
                  setOpenFilter(false);
                }}>
                  All Types
                </div>

                <div onClick={() => {
                  setTypeFilter("Financial");
                  setOpenFilter(false);
                }}>
                  Financial
                </div>

                <div onClick={() => {
                  setTypeFilter("Analytics");
                  setOpenFilter(false);
                }}>
                  Analytics
                </div>

                <div onClick={() => {
                  setTypeFilter("Operations");
                  setOpenFilter(false);
                }}>
                  Operations
                </div>

                <div onClick={() => {
                  setTypeFilter("HR");
                  setOpenFilter(false);
                }}>
                  HR
                </div>

                <hr />

                <div className="reports-filter-id">
                  <input
                    placeholder="Filter by ID..."
                    value={idFilter}
                    onChange={(e) => setIdFilter(e.target.value)}
                  />
                </div>

              </div>
            )}
          </div>

          {/*  EXPORT */}
          <button className="export" onClick={handleExport}>
            Export
          </button>

        </div>
      </div>

      <table className="reports-table">

        <thead>
          <tr>
            <th>Report Name</th>
            <th>Type</th>
            <th>Date</th>
            <th>ID</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((r: any, i: number) => (
            <tr key={i}>
              <td>{r.name}</td>

              <td>
                <span className="tag">
                  {r.type}
                </span>
              </td>

              <td>{r.date}</td>
              <td>{r.id}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default ReportsTable;