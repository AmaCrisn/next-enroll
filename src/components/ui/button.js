import React from "react";

export default function Button({ variant = "primary", className = "", children, ...props }) {
  const base = "py-2.5 my-2 rounded-md font-bold transition-all duration-300 active:duration-100 hover:cursor-pointer focus:outline-none";
  const variants = {
    primary: "bg-(--clr-primary) hover:bg-(--clr-primary-hover) text-white active active:bg-(--clr-primary-active) border-(--clr-primary-hover) focus:border-2",
    secondary: "border-(--clr-primary) hover:border-(--clr-primary-hover) hover:bg-(--clr-primary-hover) hover:text-white active:bg-(--clr-primary-active) active:border-(--clr-primary-active) focus:border-(--clr-primary-hover) border-2",
    ghost: "bg-(--clr-ghost) hover:bg-(--clr-ghost-hover) active:bg-(--clr-ghost-active) focus:border-2 border-(--clr-ghost-hover)",
    accent: "bg-(--clr-accent) hover:bg-(--clr-accent-hover) active:bg-(--clr-accent-active) border-(--clr-accent-hover) focus:border-2",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}