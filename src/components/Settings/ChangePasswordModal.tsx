import { useState } from "react";
import "./ChangePasswordModal.css";

const ChangePasswordModal = ({ onClose }: any) => {
  // ===== State =====
  const [form, setForm] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });

  // ===== Errors =====
  const [errors, setErrors] = useState<any>({});

  // ===== Handle Change =====
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm((prev: any) => ({
      ...prev,
      [name]: value,
    }));

    // يمسح الخطأ أول ما المستخدم يكتب
    setErrors((prev: any) => ({
      ...prev,
      [name]: "",
    }));
  };

  // ===== Validation =====
  const validate = () => {
    let newErrors: any = {};

    if (!form.current) newErrors.current = "Required";

    if (!form.newPass) newErrors.newPass = "Required";
    else if (form.newPass.length < 6)
      newErrors.newPass = "Min 6 characters";

    if (!form.confirm) newErrors.confirm = "Required";
    else if (form.confirm !== form.newPass)
      newErrors.confirm = "Passwords do not match";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ===== Save =====
  const handleSave = () => {
    if (!validate()) return;

    console.log("Password Changed:", form);

    // يقفل المودل
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="password-container">

        {/* ===== Back ===== */}
        <button className="back-btn" onClick={onClose}>
          ← Back to Settings
        </button>

        {/* ===== Title ===== */}
        <h2>Change Password</h2>
        <p className="desc">
          Fill in the details to create a new Password
        </p>

        {/* ===== Card ===== */}
        <div className="password-card">

          {/* Current */}
          <label>Current Password</label>
          <input
            type="password"
            name="current"
            placeholder="Enter Current Password"
            value={form.current}
            onChange={handleChange}
            className={errors.current ? "error" : ""}
          />
          {errors.current && (
            <span className="error-text">{errors.current}</span>
          )}

          {/* New */}
          <label>New Password</label>
          <input
            type="password"
            name="newPass"
            placeholder="Enter New Password"
            value={form.newPass}
            onChange={handleChange}
            className={errors.newPass ? "error" : ""}
          />
          {errors.newPass && (
            <span className="error-text">{errors.newPass}</span>
          )}

          {/* Confirm */}
          <label>Confirm New Password</label>
          <input
            type="password"
            name="confirm"
            placeholder="Enter New Password"
            value={form.confirm}
            onChange={handleChange}
            className={errors.confirm ? "error" : ""}
          />
          {errors.confirm && (
            <span className="error-text">{errors.confirm}</span>
          )}

          {/* Divider */}
          <hr />

          {/* Buttons */}
          <div className="actions">
            <button className="cancel" onClick={onClose}>
              Cancel
            </button>

            <button className="save" onClick={handleSave}>
              Save
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;