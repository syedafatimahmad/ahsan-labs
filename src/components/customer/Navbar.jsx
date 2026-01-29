import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchBar from "../../components/customer/SearchBar";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);

  const [open, setOpen] = useState(false); // mobile menu
  

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev;
    return () => (document.body.style.overflow = prev);
  }, [open]);

  // Close mobile menu on route/hash change
  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  // Click outside mobile menu
  useEffect(() => {
    const handleClick = (e) => {
      if (open && navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleSearch = (q) => {
    // Open Google search in a new tab
    window.open(
      `https://www.google.com/search?q=site:anspect.vercel.app+${encodeURIComponent(q)}`,
      "_blank"
    );
  };


  const isPathActive = (path) => location.pathname === path;
  const isHashActive = (hash) => location.hash === `#${hash}`;

  const underline = (active) =>
    `relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px]
     after:bg-gradient-to-r after:from-[#7cb5ff] after:to-[#438dff] after:rounded-full
     after:transition-opacity after:duration-300
     ${active ? "after:opacity-100" : "after:opacity-0 hover:after:opacity-100"}`;

  const goToHash = (path, id = "") => {
    navigate(path + (id ? `#${id}` : ""));
    if (id) {
      const tryScroll = (retries = 3) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        else if (retries > 0)
          setTimeout(() => tryScroll(retries - 1), 150);
      };
      tryScroll();
    }
  };

  const desktopMenu = (
    <div className="hidden md:flex flex-wrap items-center justify-end gap-4 lg:gap-8 ml-auto">
      <Link to="/" className={`${underline(isPathActive("/"))} text-black`}>Home</Link>
      <Link to="/industries" className={`${underline(isPathActive("/industries"))} text-black`}>Industries</Link>
      <Link to="/insights" className={`${underline(isPathActive("/insights"))} text-black`}>Insights</Link>
      <Link to="/technology" className={`${underline(isPathActive("/technology"))} text-black`}>Technology</Link>
      <Link to="/about" className={`${underline(isPathActive("/about"))} text-black`}>Team</Link>
      
      <Link to="/#contact" className="ml-2 md:ml-4 inline-flex items-center bg-gradient-to-r from-blue-600 to-slate-900 px-4 py-2 text-white font-semibold shadow hover:scale-[1.02] transition transform whitespace-nowrap">
        Contact Us
      </Link>
      <SearchBar onSearch={handleSearch} placeholder="Search ANSpect..." />
    </div>
  );

  const mobileMenu = (
    <div
      className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white/95 backdrop-blur-md z-50 flex flex-col p-6 md:hidden transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      ref={navRef}
    >
      <button onClick={() => setOpen(false)} className="self-end mb-4 text-black text-2xl font-bold">×</button>
      <SearchBar onSearch={handleSearch} placeholder="Search ANSpect..." />
      <Link to="/" onClick={() => setOpen(false)} className={`mb-3 text-black text-lg ${isPathActive("/") ? "font-semibold" : ""}`}>Home</Link>
      <Link to="/industries" onClick={() => setOpen(false)} className={`mb-3 text-black text-lg ${isPathActive("/industries") ? "font-semibold" : ""}`}>Industries</Link> 
      <Link to="/technology" onClick={() => setOpen(false)} className={`mb-3 text-black text-lg ${isPathActive("/technology") ? "font-semibold" : ""}`}>Technology</Link>
      <Link to="/insights" onClick={() => setOpen(false)} className={`mb-3 text-black text-lg ${isPathActive("/insights") ? "font-semibold" : ""}`}>Insights</Link>
      <Link to="/about" onClick={() => setOpen(false)} className={`mb-3 text-black text-lg ${isPathActive("/about") ? "font-semibold" : ""}`}>Team</Link>
      <Link to="/#contact" onClick={() => setOpen(false)} className="mt-3 w-30 inline-flex items-center bg-gradient-to-r from-blue-600 to-slate-900 hover:scale-[1.02] px-4 py-2 text-white font-semibold shadow">
        Contact Us
      </Link>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <Link to="/" className="flex items-center shrink-0" aria-label="Home">
          <img src="/logo.png" alt="ANSpect logo" className="h-10 md:h-12 w-auto object-contain" />
        </Link>
        {desktopMenu}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
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
