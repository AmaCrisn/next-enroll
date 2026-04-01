"use client";

import { useState, useRef } from "react";

export default function SearchSelect({ options = [], placeholder, label, onChange }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const filtered = options.filter((opt) =>
    opt.label.toLowerCase().includes(query.toLowerCase())
  );

  // Close dropdown if clicking outside
  const handleClickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  // Add/remove event listener for clicks outside
  if (typeof window !== "undefined") {
    window.addEventListener("click", handleClickOutside);
  }

  return (
    <div className="mb-3">
      {label && <h3 className="font-semibold mb-1.5">{label}</h3>}
      <div ref={containerRef} className="relative w-full">
        {/* Input */}
        <input
          type="text"
          value={query}
          placeholder={placeholder}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          className="w-full py-2 px-4 border-2 border-(--clr-border) rounded-md bg-(--clr-bg-input) focus:outline-none focus:border-(--clr-primary)"
        />

        {/* Dropdown */}
        {open && (
          <div className="absolute z-10 mt-1 w-full max-h-60 overflow-y-auto bg-(--clr-bg-input) border border-(--clr-border) rounded-md shadow-lg">
            {filtered.length > 0 ? (
              filtered.map((opt) => (
                <div
                  key={opt.value}
                  onClick={() => {
                    setQuery(opt.label);
                    setOpen(false);
                    onChange?.(opt);
                  }}
                  className="px-3 py-2 hover:bg-(--clr-bg-secondary) cursor-pointer"
                >
                  {opt.label}
                </div>
              ))
            ) : (
              <div className="px-3 py-2 text-gray-400">Tidak ditemukan</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}