import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/Group 13.svg";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [loading, setLoading] = useState(false);

  // validation
  const validate = () => {
    let isValid = true;

    setEmailError("");
    setPasswordError("");

    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Enter a valid email");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    }

    return isValid;
  };

  // login
  const handleLogin = () => {
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      const data = {
        token: "123456",
        user: { name: "Mahmoud" },
        mustChangePassword: true, // جرب true / false
      };

      // save user
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);

      // save flag
      localStorage.setItem(
        "mustChangePassword",
        data.mustChangePassword ? "true" : "false"
      );

      setLoading(false);

      // navigate
      navigate("/dashboard");
    }, 800);
  };

  return (
    <div className="login">
      <div className="login__background"></div>

      <div className="login__container">
        <img src={logo} alt="Travora Logo" className="login__logo" />

        <div className="login__card">
          <h2 className="login__title">SIGN IN</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            {/* EMAIL */}
            <div className="login__field">
              <label className="login__label">Email Address</label>
              <input
                className="login__input"
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
              />
              {emailError && (
                <p className="login__error">{emailError}</p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="login__field">
              <label className="login__label">Password</label>
              <input
                className="login__input"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError("");
                }}
              />
              {passwordError && (
                <p className="login__error">{passwordError}</p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="login__button"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;