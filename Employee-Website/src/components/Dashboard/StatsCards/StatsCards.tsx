import "./StatsCards.css";
import { CircleDot, Clock, CheckCircle } from "lucide-react";

type StatsCardProps = {
  title: string;
  value: number;
  type: "new" | "ongoing" | "completed";
};

const StatsCard = ({ title, value, type }: StatsCardProps) => {

  const getIcon = () => {
    switch (type) {
      case "new":
        return <CircleDot size={18} />;
      case "ongoing":
        return <Clock size={18} />;
      case "completed":
        return <CheckCircle size={18} />;
    }
  };

  return (
    <div className="stats-card">

      <div className={`stats-card__icon stats-card__icon--${type}`}>
        {getIcon()}
      </div>

      <div className="stats-card__content">
        <p className="stats-card__title">{title}</p>
        <h3 className="stats-card__value">{value}</h3>
      </div>

    </div>
  );
};

export default StatsCard;