import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

/**
 * Improved Navbar (mobile & desktop tweaks)
 *
 * Updates:
 * - Mobile menu uses text + underline highlight (no square / left-border)
 * - Desktop links highlight text and show underline on hover/active
 * - Escape key closes mobile menu
 * - Keeps backdrop blur, scroll lock, and focus rings for accessibility
 */

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  // Lock body scroll when mobile menu is open


  // Add scrolled class when user scrolls down
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Click outside to close mobile menu
  useEffect(() => {
    const clickOutside = (e) => {
      if (open && navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isPathActive = (path) => location.pathname === path;
  const isHashActive = (hash) => location.hash === `#${hash}`;

  const goTo = (path, id = "") => {
    navigate(id ? `${path}#${id}` : path);
  };

  // Shared underline helper (uses after: utilities for gradient underline)
  const underline = (active) =>
    `relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px]
     after:bg-gradient-to-r after:from-[#7cb5ff] after:to-[#438dff] after:rounded-full
     after:transition-opacity after:duration-300
     ${active ? "after:opacity-100" : "after:opacity-0 hover:after:opacity-100"}`;

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-black/45 shadow-lg"
          : "bg-gradient-to-r from-blue-200/5 to-black/30"
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0" aria-label="Home">
          <img src={logo} alt="ANSpect logo" className="h-10 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          <Link
            to="/"
            className={`${underline(isPathActive("/"))} text-white`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`${underline(isPathActive("/services"))} text-white`}
          >
            Products
          </Link>

          <button
            onClick={() => goTo("/", "solutions")}
            className={`${underline(isHashActive("solutions"))} text-white `}
          >
            Solutions
          </button>

          <div className="relative group">
            <button
              onClick={() => goTo("about")}
              className={`${underline(location.pathname === "/about")} text-white`}
            >
              Company
            </button>
            <div className="absolute hidden group-hover:flex flex-col bg-black/80 backdrop-blur-md rounded-md mt-2 p-3 w-40 gap-2">
                <button
                  onClick={() => goTo("/about", "phyengine")}
                  className="text-white hover:text-[#7cb5ff] text-left"
                >
                  Technology
                </button>

                <button
                  onClick={() => goTo("/about", "research")}
                  className="text-white hover:text-[#7cb5ff] text-left"
                >
                  Research
                </button>
            </div>
          </div>

          <Link
            to="/newsletter"
            className={`${underline(isPathActive("/newsletter"))} text-white`}
          >
            Newsletter
          </Link>

          <button
            onClick={() => goTo("/", "contact")}
            className="ml-3 inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-slate-900 px-4 py-2 text-white font-semibold shadow hover:scale-[1.02] transition transform"
          >
            Talk to Us
          </button>
         </div>
        

        {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden relative w-10 h-10 flex items-center justify-center"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span
          className={`block absolute h-[2px] w-6 bg-white transition duration-300 ${
            open ? "rotate-45" : "-translate-y-2"
          }`}
        />
        <span
          className={`block absolute h-[2px] w-6 bg-white transition duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block absolute h-[2px] w-6 bg-white transition duration-300 ${
            open ? "-rotate-45" : "translate-y-2"
          }`}
        />
      </button>

      {/* MOBILE DROPDOWN (kept original behavior) */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-r from-blue-900 to-gray-900 md:hidden shadow-xl z-50">

          <div className="flex flex-col px-6 py-4 gap-3 text-lg">
            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className={`py-2 ${
                isPathActive("/services")
                  ? "border-l-4 border-[#7cb5ff] pl-3 text-[#cfe2ff]"
                  : "text-white"
              }`}
            >
              Products
            </Link>

            <button
              onClick={() => {
                goTo("/", "solutions");
                setOpen(false);
              }}
              className={`py-2 text-left ${
                isHashActive("solutions")
                  ? "border-l-4 border-[#7cb5ff] pl-3 text-[#cfe2ff]"
                  : "text-white"
              }`}
            >
              Solutions
            </button>

            <button
              onClick={() => {
                goTo("/about", "phyengine");
                setOpen(false);
              }}
              className={`py-2 text-left ${
                isHashActive("phyengine")
                  ? "border-l-4 border-[#7cb5ff] pl-3 text-[#cfe2ff]"
                  : "text-white"
              }`}
            >
              Technology
            </button>

            <button
              onClick={() => {
                goTo("/about", "research");
                setOpen(false);
              }}
              className={`py-2 text-left ${
                isHashActive("research")
                  ? "border-l-4 border-[#7cb5ff] pl-3 text-[#cfe2ff]"
                  : "text-white"
              }`}
            >
              Research
            </button>

            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className={`py-2 ${
                location.pathname === "/about" &&
                (location.hash === "" || location.hash === "#top")
                  ? "border-l-4 border-[#7cb5ff] pl-3 text-[#cfe2ff]"
                  : "text-white"
              }`}
            >
              Company
            </Link>

            <Link
              to="/newsletter"
              onClick={() => setOpen(false)}
              className={`py-2 ${
                isPathActive("/newsletter")
                  ? "border-l-4 border-[#7cb5ff] pl-3 text-[#cfe2ff]"
                  : "text-white"
              }`}
            >
              Newsletter
            </Link>

            <button
              onClick={() => {
                goTo("/", "contact");
                setOpen(false);
              }}
              className={`py-2 text-left ${
                isHashActive("contact")
                  ? "border-l-4 border-[#7cb5ff] pl-3 text-[#cfe2ff]"
                  : "text-white"
              }`}
            >
              Talk to Us
            </button>
          </div>
        </div>
      )}


      </nav>
    </header>
  );
}