import "./ChangePasswordModal.css";
import { useState } from "react";

type Props = {
  onClose: () => void;
  isFirstTime?: boolean;
};

const ChangePasswordModal = ({ onClose, isFirstTime }: Props) => {

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");

  const [error, setError] = useState("");

  // save
  const handleSave = () => {
    setError("");

    if (
      !oldPass.trim() ||
      !newPass.trim() ||
      !confirm.trim()
    ) {
      setError("All fields are required");
      return;
    }

    if (newPass.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (newPass !== confirm) {
      setError("Passwords do not match");
      return;
    }

    if (isFirstTime) {
      localStorage.setItem("mustChangePassword", "false");
    }

    onClose();
  };

  return (
    <div className="password">

      <div
        className="password__overlay"
        onClick={onClose}
      ></div>

      <div className="password__card">

        {!isFirstTime && (
          <p
            className="password__back"
            onClick={onClose}
          >
            ← Back to Settings
          </p>
        )}

        <h2>Change Password</h2>

        <p className="password__desc">
          Fill in the details to create a new Password
        </p>

        <form
          className="password__inner"
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
        >

          <label htmlFor="oldPassword">
            Current Password
          </label>

          <input
            id="oldPassword"
            type="password"
            placeholder="Enter Current Password"
            value={oldPass}
            onChange={(e) => setOldPass(e.target.value)}
          />

          <label htmlFor="newPassword">
            New Password
          </label>

          <input
            id="newPassword"
            type="password"
            placeholder="Enter New Password"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
          />

          <label htmlFor="confirmPassword">
            Confirm New Password
          </label>

          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm New Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          {error && (
            <p className="password__error">
              {error}
            </p>
          )}

          <div className="password__actions">

            {isFirstTime ? (
              <>
                <button
                  type="button"
                  className="password__cancel"
                  onClick={() => {
                    localStorage.setItem(
                      "mustChangePassword",
                      "false"
                    );
                    onClose();
                  }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="password__save"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="password__cancel"
                  onClick={onClose}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="password__save"
                >
                  Save
                </button>
              </>
            )}

          </div>

        </form>

      </div>
    </div>
  );
};

export default ChangePasswordModal;