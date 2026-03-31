import React from "react";

export default function Button({ variant = "primary", className = "", children, ...props }) {
  const base = "py-2.5 rounded-md font-bold transition-all duration-300 active:duration-100 hover:cursor-pointer";
  const variants = {
    primary: "bg-(--clr-primary) hover:bg-(--clr-primary-hover) text-white active active:bg-(--clr-primary-active)",
    secondary: "border-(--clr-primary) hover:border-(--clr-primary-hover) hover:bg-(--clr-primary-hover) active:bg-(--clr-primary-active) active:border-(--clr-primary-active) hover:text-white border-2",
    ghost: "bg-(--clr-ghost) hover:bg-(--clr-ghost-hover) active:bg-(--clr-ghost-active)",
    accent: "bg-(--clr-accent) hover:bg-(--clr-accent-hover) active:bg-(--clr-accent-active)",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}