import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png"; // adjust if needed

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  const blueGradient =
    "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-[#7cb5ff] after:to-[#438dff] after:rounded-full";

  const isPathActive = (path) => location.pathname === path;
  const isHashActive = (hash) => location.hash === `#${hash}`;

  const underline = (active) =>
  `relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px]
   after:bg-gradient-to-r after:from-blue-600 after:to-blue-950 after:rounded-full
   after:transition-opacity after:duration-300
   ${active ? "after:opacity-100" : "after:opacity-0 hover:after:opacity-100"}`;


  const goTo = (path, id = "") => {
    navigate(id ? `${path}#${id}` : path);
  };

  // Hash-based scrolling
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");

    const scrollToElement = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
      }
      return false;
    };

    if (scrollToElement()) return;

    const observer = new MutationObserver(() => {
      if (scrollToElement()) observer.disconnect();
    });

    observer.observe(document.body, { childList: true, subtree: true });
    const timeout = setTimeout(() => observer.disconnect(), 2000);
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [location]);

  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    const clickOutside = (e) => {
      if (open && navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, [open]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full text-white px-10 py-3 flex items-center justify-between z-50 bg-gradient-to-r from-blue-200/60 to-black/30"
      
    >

      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-12 px-4 w-auto object-contain " // Increased size
        />
      </Link>

      {/* Desktop Navigation (right-aligned) */}
      <div className="hidden md:flex items-center gap-8 ml-auto">
        <Link
          to="/services"
          className={underline(isPathActive("/services"))}
        >
          Products
        </Link>

        <button
          onClick={() => goTo("/", "solutions")}
          className={underline(isHashActive("solutions"))}
        >
          Solutions
        </button>

        <button
          onClick={() => goTo("/about", "phyengine")}
          className={underline(isHashActive("phyengine"))}
        >
          Technology
        </button>

        <button
          onClick={() => goTo("/about", "research")}
          className={underline(isHashActive("research"))}
        >
          Research
        </button>

        <button
          onClick={() => navigate("/about#top")}
          className={underline(
            location.pathname === "/about" &&
            (location.hash === "" || location.hash === "#top")
          )}>
          Company
        </button>



        <Link
          to="/newsletter"
          className={underline(isPathActive("/newsletter"))}
        >
          Newsletter
        </Link>

        <button
          onClick={() => goTo("/", "contact")}
          className={underline(isHashActive("contact"))}
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

      {/* MOBILE DROPDOWN */}
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
  );
}
