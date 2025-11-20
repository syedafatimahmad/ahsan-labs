// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      {/* Left side - Logo / Brand */}
      <div className="text-2xl font-bold">
        <Link to="/">AhsanLabs</Link>
      </div>

      {/* Right side - Links */}
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/services" className="hover:text-gray-300">Services</Link>
        <Link to="/portfolio" className="hover:text-gray-300">Portfolio</Link>
        <Link to="/newsletter" className="hover:text-gray-300">Newsletter</Link>

        {/* Admin Login / Dashboard */}
        {token ? (
          <>
            <Link
              to="/admin/dashboard"
              className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-500"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="px-3 py-1 bg-red-600 rounded hover:bg-red-500"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/admin/login"
            className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-500"
          >
            Admin Login
          </Link>
        )}
      </div>
    </nav>
  );
}
