import "./WeeklyActivity.css"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

function WeeklyActivity() {

  const data = [
    { day: "Mon", completed: 40, newRequests: 30, ongoing: 20 },
    { day: "Tue", completed: 35, newRequests: 25, ongoing: 15 },
    { day: "Wed", completed: 50, newRequests: 40, ongoing: 20 },
    { day: "Thu", completed: 45, newRequests: 35, ongoing: 18 },
    { day: "Fri", completed: 38, newRequests: 30, ongoing: 15 },
    { day: "Sat", completed: 32, newRequests: 25, ongoing: 10 },
    { day: "Sun", completed: 28, newRequests: 20, ongoing: 8 }
  ];

  return (

    <div className="dashboard-card">

      <div className="dashboard-card-header">
        Weekly Activity
      </div>

      <div className="dashboard-card-body">

        <ResponsiveContainer width="100%" height={250}>

          <BarChart data={data}>

            <XAxis dataKey="day" 
            stroke="var(--color-text-muted)"/>

            <YAxis 
            stroke="var(--color-text-muted)"/>

            <Tooltip />

            <Legend />

            <Bar dataKey="completed" fill="var(--color-primary-dark)" radius={[50,50,0,0]}/>

            <Bar dataKey="newRequests" fill="var(--color-info)" radius={[50,50,0,0]}/>

            <Bar dataKey="ongoing" fill="var(--color-text-muted)" radius={[50,50,0,0]}/>

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );
}

export default WeeklyActivity;