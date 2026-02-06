import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { searchIndex } from "../../data/searchIndex";

export default function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);

  const query = new URLSearchParams(location.search).get("q") || "";

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();

    const filtered = searchIndex.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.content.toLowerCase().includes(q)
    );

    setResults(filtered);
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">
        Search Results for "{query}"
      </h2>

      {results.length ? (
        <ul className="space-y-4">
          {results.map((item, i) => (
            <li
              key={i}
              onClick={() => navigate(item.url)}
              className="p-4 border rounded-md cursor-pointer hover:shadow-md"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}