import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Login() {

  // ================================
  // تخزين بيانات المستخدم
  // ================================
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // تخزين أخطاء كل حقل
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  // استخدام navigate للتحويل بين الصفحات
  const navigate = useNavigate();

  // ================================
  // عند الضغط على تسجيل الدخول
  // ================================
  const handleSubmit = (e: React.FormEvent) => {

    // منع إعادة تحميل الصفحة
    e.preventDefault();

    // إنشاء نسخة جديدة من الأخطاء
    const newErrors = {
      email: "",
      password: ""
    };

    // ================================
    // التحقق من الإيميل
    // ================================
    if (!email) {
      newErrors.email = "Email is required";
    } 
    else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    // ================================
    // التحقق من الباسورد
    // ================================
    if (!password) {
      newErrors.password = "Password is required";
    }

    // ================================
    // لو في أي خطأ → نظهره ونوقف التنفيذ
    // ================================
    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    // ================================
    // لو كله تمام
    // ================================

    // مسح أي أخطاء قديمة
    setErrors({ email: "", password: "" });

    // تخزين حالة تسجيل الدخول
    localStorage.setItem("isAuth", "true");

    // التحويل إلى صفحة الداشبورد
    navigate("/dashboard");
  };

  return (
    // الحاوية الرئيسية للصفحة
    <div className="login-page">

      {/* الجزء الأوسط */}
      <div className="login-content">

        {/* اللوجو */}
        <img 
          src={logo} 
          alt="Travora Logo" 
          className="login-logo" 
        />

        {/* كارد تسجيل الدخول */}
        <div className="login-card">

          {/* عنوان الصفحة */}
          <h2 className="login-title">SIGN IN</h2>

          {/* الفورم */}
          <form onSubmit={handleSubmit}>

            {/* ================================ */}
            {/* حقل الإيميل */}
            {/* ================================ */}
            <div className="login-form-group">

              <label className="login-label">
                Email Address
              </label>

              <input
                type="email"
                className="login-input"
                value={email}
                onChange={(e) => {

                  // تحديث قيمة الإيميل
                  setEmail(e.target.value);

                  // مسح خطأ الإيميل أول ما يبدأ يكتب
                  setErrors((prev) => ({
                    ...prev,
                    email: ""
                  }));
                }}
              />

              {/* عرض رسالة الخطأ لو موجودة */}
              {errors.email && (
                <p className="login-field-error">
                  {errors.email}
                </p>
              )}
            </div>

            {/* ================================ */}
            {/* حقل الباسورد */}
            {/* ================================ */}
            <div className="login-form-group">

              <label className="login-label">
                Password
              </label>

              <input
                type="password"
                className="login-input"
                value={password}
                onChange={(e) => {

                  // تحديث قيمة الباسورد
                  setPassword(e.target.value);

                  // مسح خطأ الباسورد
                  setErrors((prev) => ({
                    ...prev,
                    password: ""
                  }));
                }}
              />

              {/* عرض رسالة الخطأ لو موجودة */}
              {errors.password && (
                <p className="login-field-error">
                  {errors.password}
                </p>
              )}
            </div>

            {/* زر تسجيل الدخول */}
            <button 
              type="submit" 
              className="login-button"
            >
              Sign In
            </button>

          </form>

        </div>
      </div>

      {/* الشريط السفلي */}
      <div className="login-footer-bar"></div>

    </div>
  );
}

export default Login;