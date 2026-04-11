import "./StatusBadge.css"

const StatusBadge = ({ status }: any) => {
  return (
    <span className={`status ${status}`}>
      {status === "active" ? "Active" : "Inactive"}
    </span>
  );
};

export default StatusBadge;