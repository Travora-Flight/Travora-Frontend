import "./PricingStats.css";
import { Package, Boxes, Check } from "lucide-react";

const statsData = [
  {
    title: "Total Services",
    value: 3,
    icon: <Package size={18} />,
    color: "blue",
  },
  {
    title: "Total Packages",
    value: 1,
    icon: <Boxes size={18} />,
    color: "green",
  },
  {
    title: "Active Services",
    value: 3,
    icon: <Check size={18} />,
    color: "purple",
  },
];

const PricingStats = () => {
  return (
    <div className="pricing-stats">

  {statsData.map((item, index) => (

    <div key={index} className="pricing-stat-card">

      <div className="pricing-stat-info">
        <span>{item.title}</span>
        <h3>{item.value}</h3>
      </div>

      <div className={`pricing-stat-icon ${item.color}`}>
        {item.icon}
      </div>

    </div>

  ))}

</div>
  );
};

export default PricingStats;