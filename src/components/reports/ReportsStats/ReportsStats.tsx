import "./ReportsStats.css";
import { FileText } from "lucide-react";

function ReportsStats() {
  const stats = [
    { title: "Total Reports", value: 248, color: "", icon: <FileText size={16} /> },
    { title: "Completed", value: 186, color: "green" },
    { title: "In Progress", value: 42, color: "blue" },
    { title: "Pending", value: 20, color: "orange" }
  ];

  return (
    <div className="reports-stats">

      {stats.map((item, index) => (
        <div key={index} className="reports-stat-card">

          <div className="stat-top">
            <span className="stat-title">{item.title}</span>

            {item.icon && (
              <div className="stat-icon">
                {item.icon}
              </div>
            )}

            {item.color && (
              <span className={`stat-dot ${item.color}`}></span>
            )}
          </div>

          <h2 className="stat-value">{item.value}</h2>

        </div>
      ))}

    </div>
  );
}

export default ReportsStats;