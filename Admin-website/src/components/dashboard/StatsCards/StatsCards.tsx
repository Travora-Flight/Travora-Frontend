import { Users, FileText, Clock, CheckCircle, TrendingUp, TrendingDown } from "lucide-react";
import "./StatsCards.css";
function StatsCards() {

  // بيانات الكروت
  const stats = [
    {
      title: "All Employees",
      value: 1254,
      percent: "+12%",
      increase: true,
      color: "var(--color-success)",
      icon: <Users size={20} />
    },

    {
      title: "New Requests",
      value: 177,
      percent: "+8%",
      increase: true,
      color: "var(--color-info)",
      icon: <FileText size={20} />
    },

    {
      title: "Current Requests",
      value: 10,
      percent: "-3%",
      increase: false,
      color: "var(--color-warning)",
      icon: <Clock size={20} />
    },

    {
      title: "Done Requests",
      value: 250,
      percent: "+24%",
      increase: true,
      color: "var(--color-success)",
      icon: <CheckCircle size={20} />
    }
  ];

  return (

    <div className="dashboard-stats-cards">

      {stats.map((card, index) => (

        <div key={index} className="dashboard-stat-card">

          {/* الايقونة */}
          <div className="dashboard-stat-icon">
            {card.icon}
          </div>

          {/* العنوان */}
          <div className="dashboard-stat-title">
            {card.title}
          </div>

          {/* الرقم + النسبة */}
          <div className="dashboard-stat-row">

            <div className="dashboard-stat-value">
              {card.value}
            </div>

            <div className={`dashboard-stat-percent ${card.increase ? "up" : "down"}`}>

              {card.increase ? <TrendingUp size={14} /> : <TrendingDown size={14} />}

              {card.percent}

            </div>

          </div>

          {/* progress bar */}
          <div className="dashboard-stat-bar">

            <div
              className="dashboard-stat-progress"
              style={{ background: card.color }}
            ></div>

          </div>

        </div>

      ))}

    </div>

  );

}

export default StatsCards;