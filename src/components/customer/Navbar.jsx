import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  // Close mobile menu on route/hash change
  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  // Click outside
  useEffect(() => {
    const handleClick = (e) => {
      if (open && navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
        setMobileDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        setMobileDropdown(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isPathActive = (path) => location.pathname === path;
  const isHashActive = (hash) => location.hash === `#${hash}`;

  const goTo = (path, id = "") => {
    // navigate using pathname + hash so the URL updates and you can deep-link
    navigate(path + (id ? `#${id}` : ""));
    // try to scroll to the element if it exists (works when already on page)
    if (id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      // if the element is rendered after navigation (async content), you may need
      // to retry after a tick — keep this small to avoid jank:
      else
        setTimeout(() => {
          const retryEl = document.getElementById(id);
          if (retryEl) retryEl.scrollIntoView({ behavior: "smooth" });
        }, 150);
    }
  };

  const underline = (active) =>
    `relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px]
     after:bg-gradient-to-r after:from-[#7cb5ff] after:to-[#438dff] after:rounded-full
     after:transition-opacity after:duration-300
     ${active ? "after:opacity-100" : "after:opacity-0 hover:after:opacity-100"}`;

  const desktopMenu = (
    <div className="hidden md:flex items-center gap-8 ml-auto">
      {/* Home + Solutions */}
      <div className="relative group">
        <Link to="/" className={`${underline(isPathActive("/"))} text-black`}>
          Home
        </Link>

        {/* Changed to use Link (anchor-like) instead of button on desktop.
            Also reduced the vertical gap (mt-1 instead of mt-2) to avoid a
            tiny hover gap that can make the submenu disappear when moving the cursor
            from the parent item to the dropdown. Added pointer-events-auto and a higher z-index. */}
        <div className="absolute hidden group-hover:flex flex-col bg-white/90 backdrop-blur-md rounded-md mt-1 p-3 w-40 gap-2 shadow-lg z-[60] pointer-events-auto">
          <Link
            to="/#solutions"
            className={`text-black hover:text-[#7cb5ff] text-left ${isHashActive("solutions") ? "font-semibold" : ""}`}
          >
            Solutions
          </Link>
        </div>
      </div>

      <Link to="/services" className={`${underline(isPathActive("/services"))} text-black`}>
        Products
      </Link>

      {/* Company + submenu */}
      <div className="relative group">
        <Link to="/about" className={`${underline(isPathActive("/about"))} text-black`}>
          Company
        </Link>
        <div className="absolute hidden group-hover:flex flex-col bg-white/90 backdrop-blur-md rounded-md mt-1 p-3 w-40 gap-2 shadow-lg z-[60] pointer-events-auto">
          {["team", "ourstory", "phyengine", "results"].map((id) => (
            <Link
              key={id}
              to={`/about#${id}`}
              className={`text-black hover:text-[#7cb5ff] text-left ${isHashActive(id) ? "font-semibold" : ""}`}
            >
              {id === "phyengine" ? "LAB" : id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </div>
      </div>

      <Link to="/newsletter" className={`${underline(isPathActive("/newsletter"))} text-black`}>
        News
      </Link>

      <Link
        to="/#contact"
        className="ml-3 inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-slate-900 px-4 py-2 text-white font-semibold shadow hover:scale-[1.02] transition transform"
      >
        Contact Us
      </Link>
    </div>
  );

  const mobileMenu = (
    <div
      className={`absolute top-full left-0 w-full md:hidden shadow-xl z-50 transform transition-all duration-300 ${
        open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      } bg-gradient-to-r from-blue-900 to-gray-900`}
    >
      <div className="flex flex-col px-6 py-4 gap-2 text-lg">
        {/* Home + Solutions */}
        <button
          onClick={() => setMobileDropdown(mobileDropdown === "home" ? null : "home")}
          className={`py-2 text-left flex justify-between items-center ${
            isPathActive("/") ? "border-l-4 border-[#7cb5ff] pl-3 text-[#cfe2ff]" : "text-white"
          }`}
        >
          Home
          <span className="ml-2 transform transition-transform duration-300">
            {mobileDropdown === "home" ? "▲" : "▼"}
          </span>
        </button>
        {mobileDropdown === "home" && (
          <div className="flex flex-col pl-4 gap-1">
            <button
              onClick={() => {
                goTo("/", "solutions");
                setOpen(false);
                setMobileDropdown(null);
              }}
              className={`text-white hover:text-[#7cb5ff] ${isHashActive("solutions") ? "font-semibold" : ""}`}
            >
              Solutions
            </button>
          </div>
        )}

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

        {/* Company + submenu */}
        <button
          onClick={() => setMobileDropdown(mobileDropdown === "company" ? null : "company")}
          className={`py-2 text-left flex justify-between items-center ${
            isPathActive("/about") ? "border-l-4 border-[#7cb5ff] pl-3 text-[#cfe2ff]" : "text-white"
          }`}
        >
          Company
          <span className="ml-2 transform transition-transform duration-300">
            {mobileDropdown === "company" ? "▲" : "▼"}
          </span>
        </button>
        {mobileDropdown === "company" && (
          <div className="flex flex-col pl-4 gap-1">
            {["team", "ourstory", "phyengine", "results"].map((id) => (
              <button
                key={id}
                onClick={() => {
                  goTo("/about", id);
                  setOpen(false);
                  setMobileDropdown(null);
                }}
                className={`text-white hover:text-[#7cb5ff] ${isHashActive(id) ? "font-semibold" : ""}`}
              >
                {id === "phyengine" ? "LAB" : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
        )}

        <Link
          to="/newsletter"
          onClick={() => setOpen(false)}
          className={`py-2 ${
            isPathActive("/newsletter")
              ? "border-l-4 border-[#7cb5ff] pl-3 text-[#cfe2ff]"
              : "text-white"
          }`}
        >
          News
        </Link>

        <button
          onClick={() => {
            goTo("/", "contact");
            setOpen(false);
            setMobileDropdown(null);
          }}
          className={`py-2 text-left ${
            isHashActive("contact") ? "border-l-4 border-[#7cb5ff] pl-3 text-[#cfe2ff]" : "text-white"
          }`}
        >
          Contact Us
        </button>
      </div>
    </div>
  );

  return (
    <header ref={navRef} className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <Link to="/" className="flex items-center shrink-0" aria-label="Home">
          <img src={logo} alt="ANSpect logo" className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        {desktopMenu}

        {/* Mobile toggle */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block absolute h-[2px] w-6 bg-black transition duration-300 ${open ? "rotate-45" : "-translate-y-2"}`} />
          <span className={`block absolute h-[2px] w-6 bg-black transition duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block absolute h-[2px] w-6 bg-black transition duration-300 ${open ? "-rotate-45" : "translate-y-2"}`} />
        </button>

        {mobileMenu}
      </nav>
    </header>
  );
}