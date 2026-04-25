import { Clock, Car, Package } from "lucide-react";
import "./LastRequests.css";

function LastRequests() {

  const requests = [
    {
      client: "Zyad",
      type: "Car Service",
      status: "On Going",
      employee: "Mahmoud",
      time: "10:00 AM",
      id: "1254"
    },
    {
      client: "Eyad",
      type: "Door To Door",
      status: "New",
      employee: "Ramez",
      time: "4:35 PM",
      id: "8543"
    }
  ];

  const getStatusClass = (status: string) => {
    return status.toLowerCase() === "new" ? "new" : "ongoing";
  };

  return (
    <div className="dashboard-card">

      {/* HEADER */}
      <div className="dashboard-card-header last-requests-header">
        <div>
          <h3>Last Requests</h3>
          <p>Recent customer service requests</p>
        </div>
        <span className="last-requests-view-all">View All</span>
      </div>

      {/* BODY */}
      <div className="dashboard-card-body">

        <table className="last-requests-table">

          <thead>
            <tr>
              <th>CLIENT</th>
              <th>TYPE</th>
              <th>STATUS</th>
              <th>EMPLOYEE</th>
              <th>TIME</th>
              <th>ID</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((req, index) => (
              <tr key={index}>

                {/* CLIENT */}
                <td className="last-requests-client-cell">
                  <div className="last-requests-client-avatar">
                    {req.client.charAt(0)}
                  </div>
                  <span className="last-requests-client-name">{req.client}</span>
                </td>

                {/* TYPE */}
                <td className="last-requests-type-cell">
                  <div className="last-requests-type-icon">
                    {req.type === "Car Service"
                      ? <Car size={14} />
                      : <Package size={14} />}
                  </div>
                  {req.type}
                </td>

                {/* STATUS */}
                <td>
                  <span className={`last-requests-status ${getStatusClass(req.status)}`}>
                    {req.status}
                  </span>
                </td>

                {/* EMPLOYEE */}
                <td>{req.employee}</td>

                {/* TIME */}
                <td className="last-requests-time-cell">
                  <Clock size={14} />
                  {req.time}
                </td>

                {/* ID */}
                <td className="last-requests-id-cell">{req.id}</td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default LastRequests;