import "./TopSection.css";
import type { Employee, FilterType } from "../../../types/employee";

type Props = {
  employees: Employee[];
  filter: FilterType;
  setFilter: (val: FilterType) => void;
  search: string;
  setSearch: (val: string) => void;
};

const TopSection = ({
  employees,
  filter,
  setFilter,
  search,
  setSearch,
}: Props) => {
  /* ===== Stats ===== */
  const availableCount = employees.filter(
    (e) => e.status === "available"
  ).length;

  const onServiceCount = employees.filter(
    (e) => e.status === "onService"
  ).length;

  return (
    <div className="live-tracking-top-section">
      <div className="live-tracking-top-header">

      <h2>Live Tracker</h2>
      <p>Real-time employee location monitoring</p>
      </div>
      {/* ===== Cards ===== */}
      <div className="live-tracking-stats-cards">
        <div className="live-tracking-card">
          <span>Available</span>
          <span className="live-tracking-dot green"></span>
          <h2>{availableCount}</h2>
        </div>

        <div className="live-tracking-card">
          <span>On Service</span>
          <span className="live-tracking-dot blue"></span>
          <h2>{onServiceCount}</h2>
        </div>
      </div>

      {/* ===== Search + Filter ===== */}
      <div className="live-tracking-search-filter">
        <input
          type="text"
          placeholder="Search by name, ID, or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="live-tracking-filters">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            className={filter === "available" ? "active" : ""}
            onClick={() => setFilter("available")}
          >
            Available
          </button>

          <button
            className={filter === "onService" ? "active" : ""}
            onClick={() => setFilter("onService")}
          >
            On Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSection;