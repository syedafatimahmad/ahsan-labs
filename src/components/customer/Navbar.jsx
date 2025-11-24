// src/components/Navbar.jsx
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (path, id) => {
    navigate(path + "#" + id);

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  const isActive = (path) => location.pathname === path;

  // Helper for mobile active styling
  const mobileActive = (condition) =>
    condition ? "border-l-4 border-green-500 pl-3 text-green-400" : "text-white";

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center z-50 relative">

      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 object-contain" />
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-3xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 items-center">

        <Link
          to="/services"
          className={`hover:text-gray-300 relative ${
            isActive("/services")
              ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-green-400 after:to-green-600 after:rounded-full"
              : ""
          }`}
        >
          Products
        </Link>

        <button
          onClick={() => scrollToSection("/", "solutions")}
          className={`hover:text-gray-300 relative ${
            location.hash === "#solutions"
              ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-green-400 after:to-green-600 after:rounded-full"
              : ""
          }`}
        >
          Solutions
        </button>

        <button
          onClick={() => scrollToSection("/about", "phyengine")}
          className={`hover:text-gray-300 relative ${
            location.hash === "#phyengine"
              ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-green-400 after:to-green-600 after:rounded-full"
              : ""
          }`}
        >
          Technology
        </button>

        <button
          onClick={() => scrollToSection("/about", "research")}
          className={`hover:text-gray-300 relative ${
            location.hash === "#research"
              ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-green-400 after:to-green-600 after:rounded-full"
              : ""
          }`}
        >
          Research
        </button>

        <button
          onClick={() => scrollToSection("/about", "top")}
          className={`hover:text-gray-300 relative ${
            location.pathname === "/about" &&
            (location.hash === "" || location.hash === "#top")
              ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-green-400 after:to-green-600 after:rounded-full"
              : ""
          }`}
        >
          Company
        </button>

        <Link
          to="/newsletter"
          className={`hover:text-gray-300 relative ${
            isActive("/newsletter")
              ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-green-400 after:to-green-600 after:rounded-full"
              : ""
          }`}
        >
          Newsletter
        </Link>

        <button
          onClick={() => scrollToSection("/", "contact")}
          className={`hover:text-gray-300 relative ${
            location.hash === "#contact"
              ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-green-400 after:to-green-600 after:rounded-full"
              : ""
          }`}
        >
          Talk to Us
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col space-y-3 px-6 py-5 md:hidden z-50 animate-slide-down">

          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className={`py-2 text-lg font-medium ${mobileActive(isActive("/services"))}`}
          >
            Products
          </Link>

          <button
            onClick={() => {
              scrollToSection("/", "solutions");
              setMenuOpen(false);
            }}
            className={`py-2 text-lg font-medium text-left ${mobileActive(location.hash === "#solutions")}`}
          >
            Solutions
          </button>

          <button
            onClick={() => {
              scrollToSection("/about", "phyengine");
              setMenuOpen(false);
            }}
            className={`py-2 text-lg font-medium text-left ${mobileActive(location.hash === "#phyengine")}`}
          >
            Technology
          </button>

          <button
            onClick={() => {
              scrollToSection("/about", "research");
              setMenuOpen(false);
            }}
            className={`py-2 text-lg font-medium text-left ${mobileActive(location.hash === "#research")}`}
          >
            Research
          </button>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={`py-2 text-lg font-medium ${mobileActive(
              location.pathname === "/about" &&
              (location.hash === "" || location.hash === "#top")
            )}`}
          >
            Company
          </Link>

          <Link
            to="/newsletter"
            onClick={() => setMenuOpen(false)}
            className={`py-2 text-lg font-medium ${mobileActive(isActive("/newsletter"))}`}
          >
            Newsletter
          </Link>

          <button
            onClick={() => {
              scrollToSection("/", "contact");
              setMenuOpen(false);
            }}
            className={`py-2 text-lg font-medium text-left ${mobileActive(location.hash === "#contact")}`}
          >
            Talk to Us
          </button>
        </div>
      )}
    </nav>
  );
}
