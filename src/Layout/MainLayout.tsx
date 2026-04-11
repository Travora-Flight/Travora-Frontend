import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./MainLayout.css";

function MainLayout({ children }: { children: React.ReactNode }) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="layout">

      {/* المحتوى الرئيسي */}
      <div className={`layout-main ${isOpen ? "shifted" : ""}`}>

        {/* Navbar */}
        <Topbar toggleSidebar={() => setIsOpen(!isOpen)} />

        {/* جسم الصفحة */}
        <div className="layout-body">
          {children}
        </div>

      </div>

      {/* Sidebar */}
      <Sidebar
        isOpen={isOpen}
        closeSidebar={() => setIsOpen(false)}
      />

    </div>
  );
}

export default MainLayout;