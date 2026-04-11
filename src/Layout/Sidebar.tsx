import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

function Sidebar({ isOpen, closeSidebar }: SidebarProps) {

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>

      {/* اللوجو */}
      <div className="sidebar-logo">
        <img src={logo} alt="Travora Logo" />
      </div>

      {/* القائمة */}
      <ul className="sidebar-menu">

        <li>
          <NavLink to="/dashboard" onClick={closeSidebar}>
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/employees" onClick={closeSidebar}>
            Employees
          </NavLink>
        </li>

        <li>
          <NavLink to="/requests" onClick={closeSidebar}>
            Requests
          </NavLink>
        </li>

        <li>
          <NavLink to="/refunds" onClick={closeSidebar}>
            Refunds
          </NavLink>
        </li>

        <li>
          <NavLink to="/live-tracking" onClick={closeSidebar}>
            Live Tracking
          </NavLink>
        </li>

        <li>
          <NavLink to="/passport-verification" onClick={closeSidebar}>
            Passport Verification
          </NavLink>
        </li>

        <li>
          <NavLink to="/pricing-management" onClick={closeSidebar}>
            Pricing Management
          </NavLink>
        </li>

        <li>
          <NavLink to="/reports" onClick={closeSidebar}>
            Reports
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings" onClick={closeSidebar}>
            Settings
          </NavLink>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;