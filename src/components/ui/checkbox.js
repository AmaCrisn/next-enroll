import React from "react";

export default function Checkbox({ label, ...props }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <input type="checkbox" className="hidden" {...props} />

      <div
        className="w-5 h-5 shrink-0 border-2 border-gray-400 rounded-md flex items-center justify-center
        group-has-checked:bg-(--clr-primary)
        group-has-checked:border-(--clr-primary)
        transition-all"
      >
        <svg
          className="w-3 h-3 text-white opacity-0 
          group-has-checked:opacity-100 transition-all"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <span className="text-sm">{label}</span>
    </label>
  );
}