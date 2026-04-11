import { useState } from "react";
import "./AddReportModal.css";

const AddReportModal = ({ isOpen, onClose, onAdd }: any) => {
  if (!isOpen) return null;

  const [form, setForm] = useState({
    name: "",
    type: "",
    from: "",
    to: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors: any = {};

    if (!form.name) newErrors.name = "Required";
    if (!form.type) newErrors.type = "Required";
    if (!form.from) newErrors.from = "Required";
    if (!form.to) newErrors.to = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;

    onAdd({
      name: form.name,
      type: form.type,
      date: form.from + " - " + form.to,
    });

    onClose();
  };

  return (
    <div className="add-report-overlay">

      <div className="add-report-modal">

        <span className="add-report-back" onClick={onClose}>
          ← Back to Reports
        </span>

        <h2 className="add-report-title">Add New Report</h2>
        <p className="add-report-sub">
          Fill in the details to create a new report
        </p>

        <div className="add-report-form">

          {/* NAME */}
          <div className="add-report-group">
            <label>Report Name</label>
            <input
              name="name"
              className="add-report-input"
              placeholder="Enter Report Name"
              onChange={handleChange}
            />
            {errors.name && (
              <span className="add-report-error">{errors.name}</span>
            )}
          </div>

          {/* TYPE */}
          <div className="add-report-group">
            <label>Report Type</label>

            <select
              name="type"
              className="add-report-select"
              onChange={handleChange}
              defaultValue=""
            >
              <option value="" disabled>
                Select Report Type
              </option>
              <option value="Financial">Financial</option>
              <option value="Analytics">Analytics</option>
              <option value="Operations">Operations</option>
              <option value="HR">HR</option>
            </select>

            {errors.type && (
              <span className="add-report-error">{errors.type}</span>
            )}
          </div>

          {/* TIME */}
          <div className="add-report-group">
            <label>Time Period</label>

            <div className="add-report-row">
              <input
                type="date"
                name="from"
                className="add-report-date"
                onChange={handleChange}
              />

              <input
                type="date"
                name="to"
                className="add-report-date"
                onChange={handleChange}
              />
            </div>

            {(errors.from || errors.to) && (
              <span className="add-report-error">Required</span>
            )}
          </div>

          {/* BUTTONS */}
          <div className="add-report-actions">

            <button
              className="add-report-cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              className="add-report-save-btn"
              onClick={handleSave}
            >
              Save
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AddReportModal;