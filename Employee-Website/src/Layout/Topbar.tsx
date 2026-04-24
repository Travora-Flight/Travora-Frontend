import "./Topbar.css";
import logo from "../assets/Group 13.svg";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import NotificationsDropdown from "../components/NotificationsDropdown/NotificationsDropdown";
import { useState, useEffect } from "react";

type NotificationType = {
  id: number;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  type: "created" | "canceled" | "completed" | "rescheduled";
};

const Topbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const isDashboard = location.pathname === "/dashboard";

  const user = JSON.parse(
    localStorage.getItem("user") || '{"name":"Mahmoud"}'
  );

  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [showNotif, setShowNotif] = useState(false);

  // API CALL
  useEffect(() => {
    fetch("/api/notifications")
      .then((res) => res.json())
      .then((data) => setNotifications(data))
      .catch(() => {
        // fallback مؤقت
        setNotifications([
          {
            id: 1,
            title: "Order Created",
            message: "New order #5366 has been created",
            time: "2 minutes ago",
            isRead: false,
            type: "created",
          },
          {
            id: 2,
            title: "Order Canceled",
            message: "Order #2156 has been canceled",
            time: "15 minutes ago",
            isRead: false,
            type: "canceled",
          },
          {
            id: 3,
            title: "Order Completed",
            message: "Order #1234 has been completed successfully",
            time: "1 hour ago",
            isRead: true,
            type: "completed",
          },
          {
            id: 4,
            title: "Order Rescheduled",
            message: "Order #7723 has been rescheduled to 12:45 PM",
            time: "2 hours ago",
            isRead: true,
            type: "rescheduled",
          },
        ]);
      });
  }, []);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const handleToggleNotif = () => {
    setShowNotif(prev => !prev)

    // mark as read
    setNotifications((prev) =>
      prev.map((n) => ({ ...n, isRead: true }))
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="topbar">

      {/* LEFT */}
      <div className="topbar__left">
        <img src={logo} className="topbar__logo" alt="logo" />
        <span className="topbar__divider"></span>
        <span>Hi, {user.name}</span>
      </div>

      {/* RIGHT */}
      <div className="topbar__right">

        {/*  NOTIFICATIONS */}
        <div className="topbar__notif">
          <span onClick={handleToggleNotif}>Notifications</span>

          {unreadCount > 0 && (
            <span className="topbar__badge">{unreadCount}</span>
          )}
          {showNotif && (
            <NotificationsDropdown
              notifications={notifications}
              unreadCount={unreadCount}
            />
          )}
        </div>

        {/* ACCOUNT */}
        <span
          onClick={() =>
            navigate(isDashboard ? "/account" : "/dashboard")
          }
        >
          {isDashboard ? "Account" : "Home"}
        </span>

        {/* LOGOUT */}
        <span onClick={handleLogout}>
          Log Out
        </span>
        {/* mobile menu button */}
        <button
          className="topbar__menuBtn"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>
      {openMenu && (
        <div className="topbar__mobileMenu">

          <span onClick={handleToggleNotif}>
            Notifications
          </span>

          <span
            onClick={() =>
              navigate(isDashboard ? "/account" : "/dashboard")
            }
          >
            {isDashboard ? "Account" : "Home"}
          </span>

          <span onClick={handleLogout}>
            Log Out
          </span>

        </div>
      )}
    </div>
  );
};

export default Topbar;