'use client'

import React, { useState } from "react";

export default function Input({ label, placeholder, type = "text", icon = true, required = true, className, ...props }) {
  const [show, setShow] = useState(false);

  const icons = {
    email: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 6h16v12H4z" />
        <path d="M4 6l8 6 8-6" />
      </svg>
    ),
    password: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    date: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </svg>
    ),
    number: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="6" y="2" width="12" height="20" rx="2" ry="2" />
        <circle cx="12" cy="18" r="1" />
        <line x1="8" y1="6" x2="16" y2="6" />
      </svg>
    ),
  };

  return (
    <div className="mb-3">
      {label && <h3 className="font-semibold mb-1.5">{label} {required === true && <span className="text-red-600 font-light">*</span>}</h3>}

      <div className="relative">
        {/* Left Icon */}
        {icon && icons[type] && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icons[type]}
          </div>
        )}

        {/* Input */}
        <input
          type={type === "password" && show ? "text" : type}
          placeholder={placeholder}
          className={`w-full border-2 border-(--clr-border) bg-(--clr-bg-input) rounded-md py-2 ${icon && icons[type] ? "px-10" : "px-4"}
                     focus:outline-none focus:border-(--clr-primary) ${className}`}
          {...props}
        />

        {/* Show/Hide Password */}
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:cursor-pointer"
          >
            {show ? (
              // Eye Off
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M3 3l18 18" />
                <path d="M10.58 10.58a3 3 0 004.24 4.24" />
                <path d="M2 12s4 7 10 7a9.77 9.77 0 004.91-1.12" />
                <path d="M22 12s-4-7-10-7a9.77 9.77 0 00-4.91 1.12" />
              </svg>
            ) : (
              // Eye
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
}