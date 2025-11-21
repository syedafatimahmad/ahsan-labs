// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center z-50 relative">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">AhsanLabs</Link>
      </div>

      {/* Hamburger button (mobile only) */}
      <button
        className="md:hidden text-white text-3xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4 items-center">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/services" className="hover:text-gray-300">Services</Link>
        <Link to="/portfolio" className="hover:text-gray-300">Portfolio</Link>
        <Link to="/newsletter" className="hover:text-gray-300">Newsletter</Link>

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

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-start p-6 space-y-4 md:hidden z-50">
          <Link to="/" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/services" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/portfolio" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          <Link to="/newsletter" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Newsletter</Link>

          {token ? (
            <>
              <Link
                to="/admin/dashboard"
                className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="px-3 py-1 bg-red-600 rounded hover:bg-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/admin/login"
              className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              Admin Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
