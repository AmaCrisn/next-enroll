"use client";

import { useState, useRef, useEffect } from "react";

export default function SearchSelect({ options = [], placeholder, label, onChange, required = true }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const filtered = options.filter((opt) =>
    opt.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);

        const match = options.find(
          (opt) => opt.label.toLowerCase() === query.toLowerCase()
        );

        if (!match) {
          setQuery(selected ? selected.label : "");
        }
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [query, options, selected]);

  return (
    <div className="mb-3">
      {label && <h3 className="font-semibold mb-1.5">{label} {required === true && <span className="text-red-600 font-light">*</span>}</h3>}

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
                    setSelected(opt);
                    setOpen(false);
                    onChange?.(opt);
                  }}
                  className="px-3 py-2 hover:bg-(--clr-bg-secondary) cursor-pointer"
                >
                  {opt.label}
                </div>
              ))
            ) : (
              <div className="px-3 py-2 text-gray-400">
                Tidak ditemukan
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}