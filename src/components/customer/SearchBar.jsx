import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({
  onSearch,
  placeholder = "Search...",
  initialOpen = false,
  className = "",
}) {
  const [open, setOpen] = useState(initialOpen);
  const [query, setQuery] = useState("");
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Focus when opened
  useEffect(() => {
    if (open) inputRef.current?.focus();
    else setQuery(""); // clear input when closed
  }, [open]);

  // Close on outside click or Escape
  useEffect(() => {
    const handleClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const doSearch = (q) => {
    const trimmed = q.trim();
    if (!trimmed) return;
    if (typeof onSearch === "function") onSearch(trimmed);
    else navigate(`/search?q=${encodeURIComponent(trimmed)}`);
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    doSearch(query);
  };

  return (
    <div ref={containerRef} className={`flex items-center relative gap-2 ${className}`}>
      <button
        type="button"
        aria-label={open ? "Close search" : "Open search"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none  transition-colors"
      >
        <svg
          className="w-5 h-5 text-gray-700 dark:text-gray-200"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>

      <form
        onSubmit={handleSubmit}
        role="search"
        aria-hidden={!open}
        className={`flex items-center gap-2 overflow-hidden transition-all duration-200 ease-in-out
          ${open ? "w-56 opacity-100 pointer-events-auto" : "w-0 opacity-0 pointer-events-none"}`}
      >
        <label htmlFor="site-search" className="sr-only">Search</label>
        <input
          id="site-search"
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          autoComplete="off"
          className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm px-3 py-1 rounded-md focus:outline-none w-full"
        />
        <button
          type="submit"
          className=" text-white bg-gradient-to-r from-blue-600 to-gray-900 text-sm px-3 py-1 hover:bg-black transition-colors"
          aria-label="Submit search"
        >
          Go
        </button>
      </form>
    </div>
  );
}
