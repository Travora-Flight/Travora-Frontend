import "./RefundsHeader.css";
import { CheckCircle, XCircle, Clock } from "lucide-react";

const RefundsHeader = ({ data }: any) => {

  const pending = data.filter((i: any) => i.status === "Pending").length;
  const approved = data.filter((i: any) => i.status === "Approved").length;
  const rejected = data.filter((i: any) => i.status === "Rejected").length;

  return (
    <div className="refunds-header">

      {/* 🔹 TITLE */}
      <div className="refunds-header-text">
        <h2 className="refunds-title">Refunds</h2>
        <p className="refunds-sub">
          Manage refund requests and process transactions
        </p>
      </div>

      {/* 🔹 STATS */}
      <div className="refunds-stats">

        {/* Pending */}
        <div className="refunds-stat-card pending">
          <div>
            <span>Pending</span>
            <h3>{pending}</h3>
          </div>

          <div className="refunds-icon pending">
            <Clock size={18} />
          </div>
        </div>

        {/* Approved */}
        <div className="refunds-stat-card approved">
          <div>
            <span>Approved</span>
            <h3>{approved}</h3>
          </div>

          <div className="refunds-icon approved">
            <CheckCircle size={18} />
          </div>
        </div>

        {/* Rejected */}
        <div className="refunds-stat-card rejected">
          <div>
            <span>Rejected</span>
            <h3>{rejected}</h3>
          </div>

          <div className="refunds-icon rejected">
            <XCircle size={18} />
          </div>
        </div>

      </div>

    </div>
  );
};

export default RefundsHeader;