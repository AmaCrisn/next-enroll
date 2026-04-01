"use client";

import { useState, useRef, useEffect } from "react";

export default function Select({
    options = [],
    placeholder = "Select an option",
    label,
    onChange,
    required = true,
}) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const containerRef = useRef(null);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    const handleSelect = (opt) => {
        setSelected(opt);
        setOpen(false);
        onChange?.(opt);
    };

    return (
        <div className="mb-3">
            {label && <h3 className="font-semibold mb-1.5">{label} {required === true && <span className="text-red-600 font-light">*</span>}</h3>}

            <div ref={containerRef} className="relative w-full">
                {/* Trigger */}
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="w-full text-left py-2 px-4 pr-10 border-2 border-(--clr-border) rounded-md bg-(--clr-bg-input)
                    focus:outline-none focus:border-(--clr-primary) hover:cursor-pointer
                    relative"
                >
                    {selected ? (
                        selected.label
                    ) : (
                        <span className="text-gray-400">{placeholder}</span>
                    )}

                    {/* Arrow Icon */}
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""
                                }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </button>

                {/* Dropdown */}
                {open && (
                    <div className="absolute z-10 mt-1 w-full max-h-60 overflow-y-auto bg-(--clr-bg-input) border border-(--clr-border) rounded-md shadow-lg">
                        {options.length > 0 ? (
                            options.map((opt) => (
                                <div
                                    key={opt.value}
                                    onClick={() => handleSelect(opt)}
                                    className="px-3 py-2 hover:bg-(--clr-bg-secondary) cursor-pointer"
                                >
                                    {opt.label}
                                </div>
                            ))
                        ) : (
                            <div className="px-3 py-2 text-gray-400">
                                No options
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}