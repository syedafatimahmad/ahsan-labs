// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Settings } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [menuOpen, setMenuOpen] = useState(false);   // mobile menu
  const [adminOpen, setAdminOpen] = useState(false); // admin dropdown

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

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white text-3xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-5 items-center">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/services" className="hover:text-gray-300">Services</Link>
        <Link to="/newsletter" className="hover:text-gray-300">Newsletter</Link>
        <Link to="/about" className="hover:text-gray-300">About Us</Link>

        <div className="relative">
          {token ? (
            <>
              <Settings
                onClick={() => setAdminOpen(prev => !prev)}
                className="w-6 h-6 cursor-pointer hover:opacity-80"
              />

              {adminOpen && (
                <div className="absolute right-0 mt-3 w-40 bg-gray-800 text-white rounded-lg shadow-lg py-2 z-50">
                  <Link
                    to="/admin/dashboard"
                    className="block px-4 py-2 hover:bg-gray-700"
                    onClick={() => setAdminOpen(false)}
                  >
                    Dashboard
                  </Link>

                  <button
                    onClick={() => {
                      handleLogout();
                      setAdminOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <Link to="/admin/login">
              <Settings className="w-6 h-6 cursor-pointer hover:opacity-80" />
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-start p-6 space-y-4 md:hidden z-50">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">About Us</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Services</Link>
          <Link to="/newsletter" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Newsletter</Link>

          {token ? (
            <>
              <Link
                to="/admin/dashboard"
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-300"
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="hover:text-gray-300 text-left"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/admin/login"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-300"
            >
              Admin Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
