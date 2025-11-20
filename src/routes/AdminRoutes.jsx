import { Navigate, Outlet } from "react-router-dom";

// Simple function to check if user is logged in
const isAuthenticated = () => {
  // Replace this with real token check later
  return !!localStorage.getItem("token");
};

export default function AdminRoutes() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/admin/login" replace />;
}
