import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="layout">
      <Topbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;