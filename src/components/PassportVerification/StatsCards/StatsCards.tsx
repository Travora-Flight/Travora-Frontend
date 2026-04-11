import "./StatsCards.css";
import { FileText, CheckCircle, XCircle } from "lucide-react";

const StatsCards = () => {

  const stats = [
    {
      title: "Pending",
      value: 5,
      icon: <FileText size={18} />,
      color: "orange"
    },
    {
      title: "Approved",
      value: 1,
      icon: <CheckCircle size={18} />,
      color: "green"
    },
    {
      title: "Rejected",
      value: 0,
      icon: <XCircle size={18} />,
      color: "red"
    }
  ];

  return (
    <div className="passport-stats">

      {stats.map((item, index) => (
        <div key={index} className="passport-card">

          <div className="card-content">
            <span className="title">{item.title}</span>
            <h2>{item.value}</h2>
          </div>

          {/* الايقونة */}
          <div className={`icon-box ${item.color}`}>
            {item.icon}
          </div>

        </div>
      ))}

    </div>
  );
};

export default StatsCards;