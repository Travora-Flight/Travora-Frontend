import "./ReportsStats.css";
import { FileText } from "lucide-react";

function ReportsStats() {

  const stats = [

    {
      title: "Total Reports",
      value: 248,
      icon: <FileText size={16} />,
    },

    {
      title: "Today's Reports",
      value: 32,
      color: "blue",
    },

    {
      title: "Monthly Reports",
      value: 186,
      color: "green",
    },

  ];

  return (

    <div className="reports-stats">

      {stats.map((item) => (

        <div
          key={item.title}
          className="reports-stat-card"
        >

          <div className="stat-top">

            <span className="stat-title">
              {item.title}
            </span>

            {item.icon && (

              <div className="stat-icon">
                {item.icon}
              </div>

            )}

            {item.color && (

              <span
                className={`stat-dot ${item.color}`}
              ></span>

            )}

          </div>

          <h2 className="stat-value">
            {item.value}
          </h2>

        </div>

      ))}

    </div>

  );

}

export default ReportsStats;