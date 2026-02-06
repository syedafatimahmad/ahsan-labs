import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchIndex } from "../../data/searchIndex";

export default function SearchBar({ placeholder = "Search...", initialOpen = false, className = "" }) {
  const [open, setOpen] = useState(initialOpen);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Focus input when search opens
  useEffect(() => {
    if (open) inputRef.current?.focus();
    else setQuery("");
  }, [open]);

  // Close on outside click or Escape
  useEffect(() => {
    const handleClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false);
    };
    const handleKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  // Update suggestions
  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) return setSuggestions([]);

    const filtered = searchIndex.filter((item) => {
      return (
        (item.title?.toLowerCase().includes(q) || "") ||
        (item.content?.toLowerCase().includes(q) || "")
      );
    });

    setSuggestions(filtered);
    setHighlightedIndex(-1);
  }, [query]);

  const handleSelect = (url) => {
    if (!url) return;
    navigate(url);
    setOpen(false);
    setQuery("");
  };

  const handleKeyDown = (e) => {
    if (!suggestions.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const selected = highlightedIndex >= 0 ? suggestions[highlightedIndex] : suggestions[0];
      selected && handleSelect(selected.url);
    }
  };

  return (
    <div ref={containerRef} className={`relative flex items-center gap-2 ${className}`}>
      <button
        type="button"
        aria-label={open ? "Close search" : "Open search"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors"
      >
        <svg
          className="w-5 h-5 text-gray-700 dark:text-gray-200"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>

      <input
        ref={inputRef}
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        autoComplete="off"
        className={`transition-all duration-200 ease-in-out ${
          open ? "w-56 opacity-100" : "w-0 opacity-0 pointer-events-none"
        } bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-3 py-1 rounded-md focus:outline-none`}
      />

      {/* Suggestions */}
      {open && (
        <ul className="absolute top-full left-0 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 mt-1 rounded-md max-h-60 overflow-auto z-10">
          {suggestions.length ? (
            suggestions.map((item, index) => (
              <li
                key={index}
                className={`px-3 py-1 cursor-pointer ${
                  highlightedIndex === index ? "bg-blue-500 text-white" : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onMouseDown={() => handleSelect(item.url)}
              >
                {item.title}
              </li>
            ))
          ) : (
            <li className="px-3 py-1 text-gray-500 dark:text-gray-400">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}