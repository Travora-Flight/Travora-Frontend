import { useState, useEffect } from "react";
import "./AddEmployeeModal.css";

const AddEmployeeModal = ({ isOpen, onClose, onAdd, editingEmployee }: any) => {

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    nationalId: "",
    password: "",
    dob: "",
    job: "",
    shift: "",
    vehicleId: "",
    checkpoint: "",
  });

  useEffect(() => {
    if (editingEmployee) {
      const names = editingEmployee.name.split(" ");

      setForm((prev) => ({
        ...prev,
        firstName: names[0] || "",
        lastName: names[1] || "",
        mobile: editingEmployee.mobile || "",
        email: editingEmployee.email || "",
        shift: editingEmployee.shift || "",
      }));
    }
  }, [editingEmployee]);

  const [errors, setErrors] = useState<any>({});

  const [images, setImages] = useState({
    profile: null as File | null,
    nationalId: null as File | null,
    license: null as File | null,
  });

  useEffect(() => {
    if (form.job !== "Driver") {
      setForm((prev) => ({ ...prev, vehicleId: "" }));
      setImages((prev) => ({ ...prev, license: null }));
    }
  }, [form.job]);

  if (!isOpen) return null;

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm((prev: any) => {
      if (name === "job" && value === "Driver") {
        return {
          ...prev,
          job: value,
          checkpoint: "" 
        };
      }

      return {
        ...prev,
        [name]: value
      };
    });
  };

  const handleFileChange = (e: any, type: string) => {
    const file = e.target.files[0];
    if (!file) return;

    setImages((prev: any) => ({
      ...prev,
      [type]: file,
    }));
  };

  //  LIVE VALIDATION
  const validateField = (name: any, value: any) => {
    let error = "";

    if (name === "firstName" && !value) error = "Required";
    if (name === "lastName" && !value) error = "Required";

    if (name === "mobile") {
      if (!value) error = "Required";
      else if (value.length !== 11) error = "Must be 11 digits";
    }

    if (name === "email") {
      if (!value) error = "Required";
      else if (!value.includes("@")) error = "Invalid email";
    }

    if (name === "nationalId") {
      if (!value) error = "Required";
      else if (value.length !== 14) error = "Must be 14 digits";
    }

    if (name === "password" && !value) error = "Required";
    if (name === "dob" && !value) error = "Required";
    if (name === "job" && !value) error = "Required";
    if (name === "shift" && !value) error = "Required";
    if (name === "checkpoint" && !value) error = "Required";

    if (name === "vehicleId" && form.job === "Driver" && !value)
      error = "Required";

    setErrors((prev: any) => ({
      ...prev,
      [name]: error,
    }));
  };

  const validate = () => {
    let newErrors: any = {};

    if (!form.firstName) newErrors.firstName = "Required";
    if (!form.lastName) newErrors.lastName = "Required";

    if (!form.mobile) newErrors.mobile = "Required";
    else if (form.mobile.length !== 11)
      newErrors.mobile = "Must be 11 digits";

    // if (!form.email) newErrors.email = "Required";
    // else if (!form.email.includes("@"))
    //   newErrors.email = "Invalid email";

    if (!form.nationalId) newErrors.nationalId = "Required";
    else if (form.nationalId.length !== 14)
      newErrors.nationalId = "Must be 14 digits";

    // if (!form.password) newErrors.password = "Required";
    // if (!form.dob) newErrors.dob = "Required";

    if (!form.job) newErrors.job = "Required";
    if (!form.shift) newErrors.shift = "Required";
    if (form.job !== "Driver" && !form.checkpoint)
      newErrors.checkpoint = "Required";

    if (form.job === "Driver" && !form.vehicleId)
      newErrors.vehicleId = "Required";

    if (!images.profile) newErrors.profile = "Upload photo";

    if (form.job === "Driver" && !images.license)
      newErrors.license = "Upload license";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const newEmployee = {
      name: form.firstName + " " + form.lastName,
      mobile: form.mobile,
      job: form.job,
      checkpoint: form.checkpoint,  
      shift: form.shift,
      id: editingEmployee?.id || "#" + Math.floor(Math.random() * 10000),
    };

    onAdd(newEmployee);

    setForm({
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      nationalId: "",
      password: "",
      dob: "",
      job: "",
      shift: "",
      vehicleId: "",
      checkpoint: "",
    });

    setImages({
      profile: null,
      nationalId: null,
      license: null,
    });

    // setErrors({});
    // onClose();
  };

  return (
    <div className="employees-modal-overlay">
      <div className="employees-modal">

        <div className="employees-modal-header">
          <h3 className="employees-modal-title">
            {editingEmployee ? "Edit Employee" : "Add New Employee"}
          </h3>
          <span className="employees-modal-close" onClick={onClose}>×</span>
        </div>

        <div className="employees-profile">
          <label className="employees-avatar-upload">
            <input type="file" hidden onChange={(e) => handleFileChange(e, "profile")} />
            {images.profile && <img src={URL.createObjectURL(images.profile)} />}
          </label>

          <p className="employees-profile-label">Profile Photo</p>

          {errors.profile && <span className="employees-error">{errors.profile}</span>}
        </div>

        <div className="employees-form-grid">

          <div className="employees-col">

            <label>First Name</label>
            <input
              className={errors.firstName ? "employees-error-border" : ""}
              name="firstName"
              value={form.firstName}
              onChange={(e) => {
                handleChange(e);
                validateField("firstName", e.target.value);
              }}
              onBlur={(e) => validateField("firstName", e.target.value)}
            />
            {errors.firstName && <span className="employees-error">{errors.firstName}</span>}

            <label>Mobile Number</label>
            <input
              className={errors.mobile ? "employees-error-border" : ""}
              value={form.mobile}
              maxLength={11}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setForm({ ...form, mobile: value });
                validateField("mobile", value);
              }}
              onBlur={(e) => validateField("mobile", e.target.value)}
            />
            {errors.mobile && <span className="employees-error">{errors.mobile}</span>}

            <label>National ID</label>
            <input
              className={errors.nationalId ? "employees-error-border" : ""}
              value={form.nationalId}
              maxLength={14}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setForm({ ...form, nationalId: value });
                validateField("nationalId", value);
              }}
            />
            {errors.nationalId && <span className="employees-error">{errors.nationalId}</span>}
            {/* 
            <label>Password</label>
            {!editingEmployee && (
              <>
                <label>Password</label>
                <input
                  className={errors.password ? "employees-error-border" : ""}
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={(e) => {
                    handleChange(e);
                    validateField("password", e.target.value);
                  }}
                />
                {errors.password && <span className="employees-error">{errors.password}</span>}
              </>
            )}
            {errors.password && <span className="employees-error">{errors.password}</span>} */}

            <label>Date Of Birth</label>
            <input
              className={errors.dob ? "employees-error-border" : ""}
              type="date"
              name="dob"
              value={form.dob}
              onChange={(e) => {
                handleChange(e);
                validateField("dob", e.target.value);
              }}
            />
            {errors.dob && <span className="employees-error">{errors.dob}</span>}

            <label>Job</label>
            <select
              className={errors.job ? "employees-error-border" : ""}
              name="job"
              value={form.job}
              onChange={(e) => {
                handleChange(e);
                validateField("job", e.target.value);
              }}
            >
              <option value="">Select Job</option>
              <option>Driver</option>
              <option>Baggage Handler</option>
            </select>
            {errors.job && <span className="employees-error">{errors.job}</span>}

            {form.job === "Driver" && (
              <>
                <label>Vehicle ID</label>
                <input
                  className={errors.vehicleId ? "employees-error-border" : ""}
                  value={form.vehicleId}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setForm({ ...form, vehicleId: value });
                    validateField("vehicleId", value);
                  }}
                />
                {errors.vehicleId && <span className="employees-error">{errors.vehicleId}</span>}
              </>
            )}

          </div>

          <div className="employees-col">

            <label>Last Name</label>
            <input
              className={errors.lastName ? "employees-error-border" : ""}
              name="lastName"
              value={form.lastName}
              onChange={(e) => {
                handleChange(e);
                validateField("lastName", e.target.value);
              }}
            />
            {errors.lastName && <span className="employees-error">{errors.lastName}</span>}
            {/* 
            <label>Email Address</label>
            <input
              className={errors.email ? "employees-error-border" : ""}
              name="email"
              value={form.email}
              disabled={!!editingEmployee} 
              onChange={(e) => {
                handleChange(e);
                validateField("email", e.target.value);
              }}
            />
            {errors.email && <span className="employees-error">{errors.email}</span>} */}

            <label className="employees-upload-box">
              <input type="file" hidden onChange={(e) => handleFileChange(e, "nationalId")} />
              {images.nationalId
                ? <img src={URL.createObjectURL(images.nationalId)} className="employees-preview-img" />
                : "Upload National ID Photo"}
            </label>
            {form.job !== "Driver" && (
              <>
                <label>Check Point</label>
                <select
                  className={errors.checkpoint ? "employees-error-border" : ""}
                  name="checkpoint"
                  value={form.checkpoint}
                  onChange={(e) => {
                    handleChange(e);
                    validateField("checkpoint", e.target.value);
                  }}
                >
                  <option value="">Select Check Point</option>
                  <option>PickUp</option>
                  <option>Customs</option>
                  <option>Delivery</option>
                  <option>Security Check</option>
                  <option>AirPort Terminal</option>
                  <option>AirPort Gate</option>
                  <option>AirPort Baggage Belt</option>
                  <option>Transit Hub</option>
                </select>

              </>
            )}
            {errors.checkpoint && <span className="employees-error">{errors.checkpoint}</span>}

            <label>Shift Type</label>
            <select
              className={errors.shift ? "employees-error-border" : ""}
              name="shift"
              value={form.shift}
              onChange={(e) => {
                handleChange(e);
                validateField("shift", e.target.value);
              }}
            >
              <option value="">Select Shift</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
              <option>Night</option>
              <option>Rotating</option>
            </select>
            {errors.shift && <span className="employees-error">{errors.shift}</span>}

            {form.job === "Driver" && (
              <>
                <label className="employees-upload-box big">
                  <input type="file" hidden onChange={(e) => handleFileChange(e, "license")} />
                  {images.license
                    ? <img src={URL.createObjectURL(images.license)} className="employees-preview-img" />
                    : "Upload Drive License"}
                </label>

                {errors.license && (
                  <span className="employees-error">{errors.license}</span>
                )}
              </>
            )}

          </div>

        </div>

        <div className="employees-modal-footer">
          <button className="employees-btn-cancel" onClick={onClose}>Cancel</button>
          <button className="employees-btn-save" onClick={handleSubmit}>Save</button>
        </div>

      </div>
    </div>
  );
};

export default AddEmployeeModal;