import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

interface TopbarProps {
  toggleSidebar: () => void;
}

function Topbar({ toggleSidebar }: TopbarProps) {

  const navigate = useNavigate();

  return (
    <div className="topbar">

      {/* اللوجو */}
      <img src={logo} alt="Travora Logo" className="topbar-logo" />

      <div className="topbar-right">

        {/* زر تسجيل الخروج */}
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("isAuth");
            navigate("/");
          }}
        >
          Log Out
        </button>

        {/* زرار فتح السايدبار */}
        <button
          className="menu-btn"
          onClick={toggleSidebar}
        >
          ☰
        </button>

      </div>

    </div>
  );
}

export default Topbar;