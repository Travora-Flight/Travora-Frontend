import "./OnlineEmployees.css";

const employees = [
  { name: "Ahmed", area: "Downtown Area" },
  { name: "Ali", area: "North District" },
  { name: "Ibrahim", area: "East Side" },
];

const OnlineEmployees = () => {
  return (
    <div className="dashboard-card">
      
      {/* Header */}
      <div className="dashboard-card-header online-employees-header">
        <div>
          <h3>Online Employees</h3>
          <span>3 currently active</span>
        </div>

        <div className="online-employees-status-circle"></div>
      </div>

      {/* List */}
      <div className="online-employees-list">
        {employees.map((emp, index) => (
          <div className="online-employees-item" key={index}>
            
            <div className="online-employees-avatar">
              {emp.name.charAt(0)}
            </div>

            <div className="online-employees-info">
              <p className="online-employees-name">{emp.name}</p>
              <span className="online-employees-area">{emp.area}</span>
            </div>

            <div className="online-employees-dot"></div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="dashboard-card-footer online-employees-footer">
        View All Employees
      </div>

    </div>
  );
};

export default OnlineEmployees;