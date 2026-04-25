import "./EmployeeProfileModal.css";
import {
  Mail,
  Phone,
  Calendar,
  Clock,
  IdCard,
  UserPen,
  Trash2
} from "lucide-react";

const EmployeeProfileModal = ({
  employee,
  onClose,
  onStatusChange,
  onDelete,
  onEdit   
}: any) => {
  if (!employee) return null;

  return (
    <div className="employees-profile-overlay" onClick={onClose}>
      <div
        className="employees-profile-modal-container"
        onClick={(e) => e.stopPropagation()}
      >

        {/*  HEADER */}
        <div className="employees-profile-header-bar">
          <h3>Employee Profile</h3>
          <span onClick={onClose}>×</span>
        </div>

        {/*  BODY */}
        <div className="employees-profile-body">

          {/*  TOP CARD */}
          <div className="employees-profile-top-card">

            {/*  ACTIONS */}
            <div className="employees-profile-top-actions">

              {/*  EDIT */}
              <button
                className="employees-icon-btn edit"
                onClick={() => {
                  onEdit && onEdit(employee); 
                }}
              >
                <UserPen size={18} />
              </button>

              {/*  DELETE */}
              <button
                className="employees-icon-btn delete"
                onClick={() => {
                  if (window.confirm("Are you sure you want to delete?")) {
                    onDelete && onDelete(employee.id);
                    onClose();
                  }
                }}
              >
                <Trash2 size={18} />
              </button>

            </div>

            <div className="employees-profile-top-info">

              <div className="employees-profile-avatar">
                {employee.name[0]}
              </div>

              <div className="employees-profile-main-data">

                <h4>{employee.name}</h4>

                <div className="employees-profile-badges">

                  <span className={`employees-status-badge ${employee.status}`}>
                    {employee.status}
                  </span>

                  <span className="employees-role-badge">Driver</span>

                  <span className="employees-id-label">
                    ID: {employee.id}
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* CONTACT */}
          <div className="employees-profile-section">
            <h4 className="employees-section-title">Contact Information</h4>

            <div className="employees-profile-grid">

              <div className="employees-profile-box">
                <Mail size={16} />
                <div>
                  <span>EMAIL ADDRESS</span>
                  <p>{employee.email}</p>
                </div>
              </div>

              <div className="employees-profile-box">
                <Phone size={16} />
                <div>
                  <span>MOBILE NUMBER</span>
                  <p>{employee.mobile}</p>
                </div>
              </div>

            </div>
          </div>

          {/* DETAILS */}
          <div className="employees-profile-section">
            <h4 className="employees-section-title">Additional Details</h4>

            <div className="employees-profile-grid">

              <div className="employees-profile-box">
                <Calendar size={16} />
                <div>
                  <span>DATE OF BIRTH</span>
                  <p>25/09/1994</p>
                </div>
              </div>

              <div className="employees-profile-box">
                <Clock size={16} />
                <div>
                  <span>SHIFT TYPE</span>
                  <p>{employee.shift}</p>
                </div>
              </div>

              <div className="employees-profile-box">
                <IdCard size={16} />
                <div>
                  <span>NATIONAL ID</span>
                  <p>5069839322344</p>
                </div>
              </div>

            </div>
          </div>

          {/* FOOTER */}
          <div className="employees-profile-footer">

            <button
              className="employees-btn-outline"
              onClick={onClose}
            >
              Close
            </button>

            <button
              className="employees-btn-primary"
              onClick={() => {
                onStatusChange(
                  employee.id,
                  employee.status === "active" ? "inactive" : "active"
                );
                onClose();
              }}
            >
              {employee.status === "active"
                ? "Set Inactive"
                : "Set Active"}
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default EmployeeProfileModal;