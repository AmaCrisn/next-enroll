import React from "react";

export default function Button({ variant = "primary", className = "", children, ...props }) {
  const base = "py-2.5 my-2 rounded-md font-bold transition-all duration-300 active:duration-100 border-2 hover:cursor-pointer focus:outline-none";
  const variants = {
    primary:
      "bg-(--clr-primary) text-white border-(--clr-primary) " +
      "hover:bg-(--clr-primary-hover) " +
      "hover:border-(--clr-primary-hover) " +
      "active:bg-(--clr-primary-active) " +
      "focus-visible:outline-none focus-visible:border-(--clr-primary-hover)",

    secondary:
      " border-(--clr-primary)" +
      "hover:border-(--clr-primary-hover) hover:bg-[var(--clr-primary-hover) hover:text-white " +
      "active:bg-(--clr-primary-active) active:border-[var(--clr-primary-active) " +
      "focus-visible:outline-none focus-visible:border-(--clr-primary-hover)",

    ghost:
      "bg-(--clr-ghost) border-transparent " +
      "hover:bg-(--clr-ghost-hover) " +
      "active:bg-(--clr-ghost-active) " +
      "focus-visible:outline-none focus-visible:border-(--clr-ghost-hover)",

    accent:
      "bg-(--clr-accent) border-transparent " +
      "hover:bg-(--clr-accent-hover) " +
      "active:bg-(--clr-accent-active) " +
      "focus-visible:outline-none focus-visible:border-(--clr-accent-hover)",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}