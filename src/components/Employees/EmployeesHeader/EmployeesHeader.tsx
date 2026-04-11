import "./EmployeesHeader.css";

const EmployeesHeader = ({ search, setSearch, openModal }: any) => {
  return (
    <div className="employees-header">

      <h2>Employees</h2>
      <p>Manage your team members and their information</p>

      <div className="header-actions">
        <input
          type="text"
          placeholder="Search by name, mobile, or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={openModal}>
          + Add Employee
        </button>
      </div>

    </div>
  );
};

export default EmployeesHeader;