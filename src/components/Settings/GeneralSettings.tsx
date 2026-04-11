import { useState } from "react";
import { Lock } from "lucide-react";
import "./GeneralSettings.css";

const GeneralSettings = ({ openPassword }: any) => {
  // =========================
  //  STATE (FORM DATA)
  // =========================
  const [form, setForm] = useState({
    companyName: "",
    email: "",
    phone: "",
    address: "",
    timezone: "",
    language: "",
  });

  // =========================
  //  STATE (ERRORS)
  // =========================
  const [errors, setErrors] = useState<any>({});

  // =========================
  //  HANDLE INPUT CHANGE
  // =========================
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    //  منع الأرقام في الاسم
    if (name === "companyName" && /[0-9]/.test(value)) return;

    //  السماح بالأرقام فقط في الموبايل
    if (name === "phone" && !/^[0-9+ ]*$/.test(value)) return;

    //  تحديث القيمة
    setForm((prev: any) => ({
      ...prev,
      [name]: value,
    }));

    //  إزالة الخطأ أثناء الكتابة
    setErrors((prev: any) => ({
      ...prev,
      [name]: "",
    }));
  };

  // =========================
  //  EMAIL VALIDATION
  // =========================
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // =========================
  //  VALIDATION FUNCTION
  // =========================
  const validate = () => {
    let newErrors: any = {};

    if (!form.companyName) newErrors.companyName = "Required";

    if (!form.email) newErrors.email = "Required";
    else if (!validateEmail(form.email))
      newErrors.email = "Invalid email";

    if (!form.phone) newErrors.phone = "Required";

    if (!form.timezone) newErrors.timezone = "Select timezone";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =========================
  // HANDLE SAVE
  // =========================
  const handleSave = () => {
    if (!validate()) return;

    console.log("Saved Data:", form);
  };

  // =========================
  //  HANDLE RESET
  // =========================
  const handleReset = () => {
    setForm({
      companyName: "",
      email: "",
      phone: "",
      address: "",
      timezone: "",
      language: "",
    });

    setErrors({});
  };

  return (
    <div className="general-card">

      {/* =========================
          HEADER
      ========================= */}
      <h3>General Settings</h3>
      <p className="desc">
        Update your company information and preferences
      </p>

      {/* =========================
           COMPANY NAME
      ========================= */}
      <label>Company Name</label>
      <div className="input-group">
        <input
          name="companyName"
          placeholder="Travora"
          value={form.companyName}
          onChange={handleChange}
          className={errors.companyName ? "error" : ""}
        />
        {errors.companyName && (
          <span className="error-text">{errors.companyName}</span>
        )}
      </div>

      {/* =========================
           EMAIL +  PHONE
      ========================= */}
      <div className="row">

        {/* EMAIL */}
        <div className="input-group">
          <label>Email</label>
          <input
            name="email"
            placeholder="info@travora.com"
            value={form.email}
            disabled   
            // className={errors.email ? "error" : ""}
          />
          {/* {errors.email && (
            <span className="error-text">{errors.email}</span>
          )} */}
        </div>

        {/* PHONE */}
        <div className="input-group">
          <label>Phone</label>
          <input
            name="phone"
            placeholder="+20 100 123 4567"
            value={form.phone}
            onChange={handleChange}
            className={errors.phone ? "error" : ""}
          />
          {errors.phone && (
            <span className="error-text">{errors.phone}</span>
          )}
        </div>

      </div>

      {/* =========================
           ADDRESS
      ========================= */}
      <label>Address</label>
      <input
        name="address"
        placeholder="Cairo, Egypt"
        value={form.address}
        onChange={handleChange}
      />

      {/* =========================
           TIMEZONE + LANGUAGE
      ========================= */}
      <div className="row">

        {/* TIMEZONE */}
        <div className="input-group">
          <label>Timezone</label>
          <select
            name="timezone"
            value={form.timezone}
            onChange={handleChange}
            className={errors.timezone ? "error" : ""}
          >
            <option value="">Select Timezone</option>
            <option value="+2 GMT">+2 GMT (Egypt)</option>
            <option value="+0 GMT">+0 GMT</option>
          </select>

          {errors.timezone && (
            <span className="error-text">{errors.timezone}</span>
          )}
        </div>

        {/* LANGUAGE */}
        <div>
          <label>Language</label>
          <input
            name="language"
            placeholder="English"
            value={form.language}
            onChange={handleChange}
          />
        </div>

      </div>

      {/* =========================
           CHANGE PASSWORD
      ========================= */}
      <div className="password-box">
        <div className="password-left">
          <Lock className="icon" />
          <div>
            <span className="password-title">Change Password</span>
            <p>Update your password regularly</p>
          </div>
        </div>

        <button className="link-btn" onClick={openPassword}>
          Change
        </button>
      </div>

      {/* =========================
           ACTION BUTTONS
      ========================= */}
      <div className="actions">
        <button className="reset" onClick={handleReset}>
          Reset
        </button>

        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>

    </div>
  );
};

export default GeneralSettings;