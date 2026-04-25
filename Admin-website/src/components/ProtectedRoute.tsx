import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: React.ReactNode }) {

  const isAuth = localStorage.getItem("isAuth");

  // لو مش عامل تسجيل دخول
  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  // لو عامل تسجيل دخول
  return <>{children}</>;
}

export default ProtectedRoute;