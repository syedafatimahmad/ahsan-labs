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
      {/* Home */}
      <Link to="/" className={`${underline(isPathActive("/"))} text-black`}>
        Home
      </Link>

      {/* Industries + Our Story directly visible */}
      <Link
        to="/#industries"
        className={`text-black hover:text-[#7cb5ff] ${isHashActive("industries") ? "font-semibold" : ""}`}
      >
        Industries
      </Link>
      <Link
        to="/#ourstory"
        className={`text-black hover:text-[#7cb5ff] ${isHashActive("ourstory") ? "font-semibold" : ""}`}
      >
        Our Story
      </Link>

      {/* Company + sublinks directly visible */}
      <Link
        to="/about"
        className={`${underline(isPathActive("/about"))} text-black`}
      >
        Company
      </Link>
      {["team", "technology", "insights"].map((id) => (
        <Link
          key={id}
          to={`/about#${id}`}
          className={`text-black hover:text-[#7cb5ff] ${isHashActive(id) ? "font-semibold" : ""}`}
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </Link>
      ))}

      {/* Contact button */}
      <Link
        to="/#contact"
        className="ml-3 inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-slate-900 px-4 py-2 text-white font-semibold shadow hover:scale-[1.02] transition transform"
      >
        Contact Us
      </Link>
    </div>
  );

{/* Mobile Menu */ }
const mobileMenu = (
  <div
    className={`fixed inset-0 bg-white/95 backdrop-blur-md z-50 flex flex-col p-6 md:hidden transform transition-transform duration-300 ${
      open ? "translate-x-0" : "translate-x-full"
    }`}
    ref={navRef}
  >
    {/* Close button */}
    <button
      onClick={() => setOpen(false)}
      className="self-end mb-4 text-black text-2xl font-bold"
    >
      ×
    </button>

    {/* All links displayed directly */}
    <Link
      to="/"
      onClick={() => setOpen(false)}
      className={`mb-3 text-black text-lg ${isPathActive("/") ? "font-semibold" : ""}`}
    >
      Home
    </Link>

    <Link
      to="/#industries"
      onClick={() => setOpen(false)}
      className={`mb-3 text-black text-lg ${isHashActive("industries") ? "font-semibold" : ""}`}
    >
      Industries
    </Link>
    <Link
      to="/#ourstory"
      onClick={() => setOpen(false)}
      className={`mb-3 text-black text-lg ${isHashActive("ourstory") ? "font-semibold" : ""}`}
    >
      Our Story
    </Link>

    <Link
      to="/about"
      onClick={() => setOpen(false)}
      className={`mb-3 text-black text-lg ${isPathActive("/about") ? "font-semibold" : ""}`}
    >
      Company
    </Link>

    {["team", "technology", "insights"].map((id) => (
      <Link
        key={id}
        to={`/about#${id}`}
        onClick={() => setOpen(false)}
        className={`mb-3 text-black text-lg ${isHashActive(id) ? "font-semibold" : ""}`}
      >
        {id.charAt(0).toUpperCase() + id.slice(1)}
      </Link>
    ))}

    <Link
      to="/#contact"
      onClick={() => setOpen(false)}
      className="mt-4 inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-slate-900 px-4 py-2 text-white font-semibold shadow"
    >
      Contact Us
    </Link>
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