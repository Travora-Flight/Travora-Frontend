import { useState } from "react";
import { UserCheck, UserX, ChevronRight } from "lucide-react";
import StatusBadge from "../StatusBadge/StatusBadge";
import "./EmployeeRow.css";

const EmployeeRow = ({ emp, onClick, onStatusChange }: any) => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
   <tr style={{ cursor: "pointer" }}>

  {/* NAME */}
  <td
    className="employees-name-cell"
    onClick={() => onClick(emp)}
  >
    <div className="employees-avatar">{emp.name[0]}</div>
    {emp.name}
  </td>

  {/* MOBILE */}
  <td onClick={() => onClick(emp)}>{emp.mobile}</td>

  {/* STATUS */}
  <td onClick={() => onClick(emp)}>
    <StatusBadge status={emp.status} />
  </td>

  {/* EMAIL */}
  <td onClick={() => onClick(emp)}>{emp.email}</td>

  {/* SHIFT */}
  <td onClick={() => onClick(emp)}>{emp.shift}</td>

  {/* ID */}
  <td onClick={() => onClick(emp)}>{emp.id}</td>

  {/* ACTIONS */}
  <td className="employees-actions">
    <div className="employees-actions-wrapper">

      <span
        onClick={(e) => {
          e.stopPropagation();
          setOpenMenu(!openMenu);
        }}
      >
        ⋮
      </span>

      {openMenu && (
        <div className="employees-dropdown">

          <div
            className="employees-dropdown-item"
            onClick={(e) => {
              e.stopPropagation();
              onClick(emp);
              setOpenMenu(false);
            }}
          >
            <ChevronRight size={16} />
            View More
          </div>

          {emp.status === "active" ? (
            <div
              className="employees-dropdown-item danger"
              onClick={(e) => {
                e.stopPropagation();
                onStatusChange(emp.id, "inactive");
                setOpenMenu(false);
              }}
            >
              <UserX size={16} />
              Set as InActive
            </div>
          ) : (
            <div
              className="employees-dropdown-item success"
              onClick={(e) => {
                e.stopPropagation();
                onStatusChange(emp.id, "active");
                setOpenMenu(false);
              }}
            >
              <UserCheck size={16} />
              Set as Active
            </div>
          )}

        </div>
      )}

    </div>
  </td>

</tr>
  );
};

export default EmployeeRow;