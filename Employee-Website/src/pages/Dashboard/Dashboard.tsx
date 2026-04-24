import { useState, useEffect } from "react";
import StatsCards from "../../components/Dashboard/StatsCards/StatsCards";
import TasksTable from "../../components/Dashboard/TasksTable/TasksTable";
import RequestDetailsModal from "../../components/Dashboard/RequestDetailsModal/RequestDetailsModal";
import RequestsGrid from "../../components/Dashboard/RequestsGrid/RequestsGrid";
import ChangePasswordModal from "../../pages/Account/ChangePasswordModal/ChangePasswordModal";
import "./Dashboard.css";

type Task = {
  id: string;
  status: "ongoing";
  type: string;
  location: string;
  time: string;
};

type Request = {
  id: string;
  status: "new";
  type: string;
  location: string;
  time: string;
  client: string;
  phone: string;
  date: string;
};

const Dashboard = () => {

  const [showChangePassword, setShowChangePassword] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedTask, setSelectedTask] = useState<any>(null);

  // ONGOING 
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "#1234",
      status: "ongoing",
      type: "Door-to-door",
      location: "Downtown Cairo",
      time: "11:04 AM",
    },
    {
      id: "#2156",
      status: "ongoing",
      type: "Car Service",
      location: "Zamalek",
      time: "10:30 AM",
    },
  ]);

  // NEW REQUESTS
  const [requests, setRequests] = useState<Request[]>([
    {
      id: "#5366",
      status: "new",
      client: "Ahmed Ali",
      phone: "+20 100 123 4567",
      location: "Cairo, Down Town",
      type: "Car Service",
      date: "15/12",
      time: "12:00 PM",
    },
    {
      id: "#8845",
      status: "new",
      client: "Ahmed Ali",
      phone: "+20 100 123 4567",
      location: "Ismailia, Fayed",
      type: "Door to Door",
      date: "15/12",
      time: "11:04 AM",
    },
    {
      id: "#7723",
      status: "new",
      client: "Ahmed Ali",
      phone: "+20 100 123 4567",
      location: "Cairo, Zamalek",
      type: "Car Service",
      date: "15/12",
      time: "12:45 PM",
    },
    {
      id: "#9234",
      status: "new",
      client: "Ahmed Ali",
      phone: "+20 100 123 4567",
      location: "Cairo, Maadi",
      type: "Door to Door",
      date: "15/12",
      time: "1:30 PM",
    },
  ]);

  // first login
  useEffect(() => {
    const mustChange = localStorage.getItem("mustChangePassword");
    if (mustChange === "true") {
      setShowChangePassword(true);
    }
  }, []);

  // filter
  const filteredRequests = requests.filter((r) =>
    r.id.toLowerCase().includes(search.toLowerCase()) ||
    r.type.toLowerCase().includes(search.toLowerCase()) ||
    r.location.toLowerCase().includes(search.toLowerCase())
  );

  //START FUNCTION
  const handleStart = (request: Request) => {

    // remove from requests
    setRequests((prev) =>
      prev.filter((r) => r.id !== request.id)
    );

    // add to tasks
    setTasks((prev) => {
      const exists = prev.some(
        (t) => t.id === request.id
      );

      if (exists) return prev;

      return [
        ...prev,
        {
          id: request.id,
          status: "ongoing",
          type: request.type,
          location: request.location,
          time: request.time,
        },
      ];
    });
  };

  return (
    <div className="dash">

      <div className="dash__container">

        {/* Search */}
        <div className="dash__top">

          <input
            type="search"
            className="dash__search"
            placeholder="Search tasks or requests..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Stats */}
          <div className="stats-row">
            <StatsCards title="New Tasks" value={requests.length} type="new" />
            <StatsCards title="Ongoing Tasks" value={tasks.length} type="ongoing" />
            <StatsCards title="Completed Tasks" value={1} type="completed" />
          </div>

        </div>

        {/* Tasks */}
        <TasksTable
          tasks={tasks}
          onView={(task) => setSelectedTask(task)}
        />

        {/* Requests */}
        <RequestsGrid
          requests={filteredRequests}
          onView={(req) => setSelectedTask(req)}
        />

        {/* MODAL */}
        {selectedTask && (
          <RequestDetailsModal
            task={selectedTask}
            onClose={() => setSelectedTask(null)}
            onStart={handleStart}
          />
        )}

        {/* Password */}
        {showChangePassword && (
          <ChangePasswordModal
            onClose={() => {
              localStorage.setItem("mustChangePassword", "false");
              setShowChangePassword(false);
            }}
            isFirstTime={true}
          />
        )}

      </div>
    </div>
  );
};

export default Dashboard;