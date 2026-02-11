import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/Admin_login" />;
  }

  if (role && userRole !== role) {
    return <Navigate to="/Admin_login" />;
  }

  return children;
};

export default ProtectedRoute;
