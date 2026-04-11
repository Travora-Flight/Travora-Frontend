import { useState } from "react";
import RequestModal from "../../components/RequestModal/RequestModal";
import { Funnel } from "lucide-react";
import "./Requests.css";

type Request = {
  id: string;
  client: string;
  type: "Car Service" | "Door To Door";
  status: "New" | "On Going" | "Completed";
  employee: string;
  time: string;
  phone: string;
  address: string;
};

const initialData: Request[] = [
  { id: "#1254", client: "Zyad", type: "Car Service", status: "On Going", employee: "Mahmoud Amr", time: "9:00 AM", phone: "+20 100 123 4567", address: "Downtown Cairo" },
  { id: "#8543", client: "Eyad", type: "Door To Door", status: "New", employee: "Ramez Medhat", time: "9:35 AM", phone: "+20 101 222 3333", address: "Nasr City" },
  { id: "#7532", client: "Haya", type: "Door To Door", status: "New", employee: "Amr Warda", time: "10:30 AM", phone: "+20 109 888 7777", address: "Maadi" },
  { id: "#9543", client: "Marwan", type: "Car Service", status: "On Going", employee: "Mahmoud Akl", time: "12:00 PM", phone: "+20 102 333 4444", address: "Heliopolis" },
  { id: "#5698", client: "Yasmin", type: "Door To Door", status: "New", employee: "Ramez Jhon", time: "1:35 PM", phone: "+20 100 555 9999", address: "Zamalek" },
  { id: "#4692", client: "Ahmed", type: "Car Service", status: "On Going", employee: "Sara Elkady", time: "2:00 PM", phone: "+20 111 444 7777", address: "Giza" },
  { id: "#7512", client: "Emad", type: "Car Service", status: "On Going", employee: "Mahmoud Salah", time: "3:00 PM", phone: "+20 122 888 1111", address: "Dokki" },
  { id: "#4582", client: "Ali", type: "Door To Door", status: "New", employee: "Zain Zyead", time: "4:35 PM", phone: "+20 100 999 0000", address: "6 October" },
];

export default function RequestsPage() {

  const [search, setSearch] = useState("");
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);

  // FILTER STATES
  const [openFilter, setOpenFilter] = useState(false);

  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");

  const [openStatus, setOpenStatus] = useState(false);
  const [openType, setOpenType] = useState(false);
  const [openDate, setOpenDate] = useState(false);

  //  FILTER LOGIC
  const filtered = initialData
    .filter((r) =>
      r.client.toLowerCase().includes(search.toLowerCase()) ||
      r.employee.toLowerCase().includes(search.toLowerCase()) ||
      r.id.includes(search)
    )
    .filter((r) => {
      const matchesStatus =
        statusFilter === "all" || r.status === statusFilter;

      const matchesType =
        typeFilter === "all" || r.type === typeFilter;

      const matchesDate =
        dateFilter === "all" || r.time.includes(dateFilter);

      return matchesStatus && matchesType && matchesDate;
    });

  return (
    <div className="requests-page-container">
      <h2>Requests</h2>
      <p className="requests-subtitle">Manage and track all service requests</p>

      <div className="requests-content-wrapper">

        {/* Search */}
        <div className="requests-search-box">
          <svg className="requests-search-icon" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="var(--color-text-muted)" strokeWidth="2" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="var(--color-text-muted)" strokeWidth="2" />
          </svg>

          <input
            type="text"
            placeholder="Search by client, employee, or ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/*  Table */}
        <div className="requests-table-container">
          <div className="requests-table-header">
            <h3>Clients Table</h3>

            <div className="requests-table-actions">

              {/* FILTER */}
              <div className="requests-filter">

                <button
                  className={`requests-filter-btn ${openFilter ? "active" : ""}`}
                  onClick={() => setOpenFilter(!openFilter)}
                >
                  <Funnel size={14} />
                  Filter
                </button>

                {openFilter && (
                  <div className="requests-filter-dropdown">

                    {/*  STATUS */}
                    <div className="filter-group">
                      <div
                        className="filter-title"
                        onClick={() => {
                          setOpenStatus(!openStatus);
                          setOpenType(false);
                          setOpenDate(false);
                        }}
                      >
                        Order Status ▾
                      </div>

                      {openStatus && (
                        <div className="filter-options">
                          <div onClick={() => setStatusFilter("all")}>All</div>
                          <div onClick={() => setStatusFilter("New")}>New</div>
                          <div onClick={() => setStatusFilter("On Going")}>On Going</div>
                          <div onClick={() => setStatusFilter("Completed")}>Completed</div>
                        </div>
                      )}
                    </div>

                    {/* 🔹 TYPE */}
                    <div className="filter-group">
                      <div
                        className="filter-title"
                        onClick={() => {
                          setOpenType(!openType);
                          setOpenStatus(false);
                          setOpenDate(false);
                        }}
                      >
                        Service Type ▾
                      </div>

                      {openType && (
                        <div className="filter-options">
                          <div onClick={() => setTypeFilter("all")}>All</div>
                          <div onClick={() => setTypeFilter("Car Service")}>Car Service</div>
                          <div onClick={() => setTypeFilter("Door To Door")}>Door To Door</div>
                        </div>
                      )}
                    </div>

                    {/* 🔹 DATE */}
                    <div className="filter-group">
                      <div
                        className="filter-title"
                        onClick={() => {
                          setOpenDate(!openDate);
                          setOpenStatus(false);
                          setOpenType(false);
                        }}
                      >
                        Date ▾
                      </div>

                      {openDate && (
                        <div className="filter-options">
                          <div onClick={() => setDateFilter("all")}>All</div>
                          <div onClick={() => setDateFilter("AM")}>Morning</div>
                          <div onClick={() => setDateFilter("PM")}>Afternoon</div>
                        </div>
                      )}
                    </div>

                  </div>
                )}

              </div>

              <button className="requests-today-btn">Today</button>

            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th>Type</th>
                <th>Status</th>
                <th>Employee</th>
                <th>Time</th>
                <th>ID</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((r) => (
                <tr
                  key={r.id}
                  className="requests-row-click"
                  onClick={() => setSelectedRequest(r)}
                >
                  <td>{r.client}</td>
                  <td>{r.type}</td>
                  <td>
                    <span className={`requests-status ${r.status.replace(" ", "")}`}>
                      {r.status}
                    </span>
                  </td>
                  <td>{r.employee}</td>
                  <td>{r.time}</td>
                  <td>{r.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/*  Modal */}
        {selectedRequest && (
          <RequestModal
            request={selectedRequest}
            onClose={() => setSelectedRequest(null)}
          />
        )}

      </div>
    </div>
  );
}