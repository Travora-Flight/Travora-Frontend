import StatsCards from "../../components/dashboard/StatsCards/StatsCards";
import WeeklyActivity from "../../components/dashboard/WeeklyActivity/WeeklyActivity";
import OnlineEmployees from "../../components/dashboard/OnlineEmployees/OnlineEmployees";
import LastRequests from "../../components/dashboard/LastRequests/LastRequests";
import LiveMap from "../../components/dashboard/LiveMap/LiveMap";

import "./Dashboard.css";

function Dashboard() {

  return (

    <div className="dashboard-container">

      {/* عنوان الصفحة */}
      <h1 className="dashboard-title">Dash Board</h1>

      {/* كروت الإحصائيات */}
      <StatsCards />

      {/* الصف الثاني */}
      <div className="dashboard-row">

        <WeeklyActivity />

        <OnlineEmployees />

      </div>

      {/* الصف الثالث */}
      <div className="dashboard-row">

        <LastRequests />

        <LiveMap />

      </div>

    </div>

  );
}

export default Dashboard;