import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiLogOut, FiSettings } from "react-icons/fi";

export default function AdminNavbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  const goToProfile = () => {
    navigate("/admin/profile"); // Add a profile page later
  };

  return (
    <nav className="bg-gray-800 text-white flex justify-between items-center px-4 md:px-6 py-3 shadow-md">
      {/* Left: Admin Label */}
      <div className="flex items-center space-x-2">
        <span className="font-semibold text-lg">Admin</span>
      </div>

      {/* Right: User dropdown */}
      {/*<div className="relative flex items-center space-x-4">*/}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center space-x-2 focus:outline-none">
            <FiUser size={22} />
            <span className="hidden md:inline text-sm">Profile</span>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-40 sm:w-44 bg-gray-700 rounded-md shadow-lg py-2 z-50">
              <button
                onClick={goToProfile}
                className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-600 transition">
                <FiSettings className="mr-2" /> Profile Settings
              </button>

              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 w-full text-left hover:bg-red-600 transition">
                <FiLogOut className="mr-2" />
                <span className="text-sm">Logout</span>

              </button>
            </div>
          )}
        </div>
      {/*</>*/}
    </nav>
  );
}
