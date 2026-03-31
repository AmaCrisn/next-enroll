import React from "react";

export default function Button({ variant = "primary", className = "", children, ...props }) {
  const base = "py-2.5 rounded-md font-bold transition-all duration-300 active:duration-100 hover:cursor-pointer";
  const variants = {
    primary: "bg-[var(--clr-primary)] hover:bg-[var(--clr-primary-hover)] text-white active active:bg-[var(--clr-primary-active)]",
    secondary: "border-[var(--clr-primary)] hover:border-[var(--clr-primary-hover)] hover:bg-[var(--clr-primary-hover)] active:bg-[var(--clr-primary-active)] active:border-[var(--clr-primary-active)] hover:text-white border-2",
    ghost: "bg-[var(--clr-ghost)] hover:bg-[var(--clr-ghost-hover)] active:bg-[var(--clr-ghost-active)]",
    accent: "bg-[var(--clr-accent)] hover:bg-[var(--clr-accent-hover)] active:bg-[var(--clr-accent-active)]",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}