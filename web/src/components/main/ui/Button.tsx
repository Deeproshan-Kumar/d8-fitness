import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

const Button = ({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ariaLabel,
  variant = "primary",
  size = "md",
}: ButtonProps) => {
  const baseClasses =
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 focus-ring disabled:pointer-events-none disabled:opacity-45";

  const variantClasses = {
    primary:
      "bg-primary text-on-primary glow-primary hover:bg-primary-hover active:bg-primary-active",
    secondary:
      "border border-border-strong bg-surface-2 text-heading hover:border-primary/40 hover:bg-surface-3",
    danger: "bg-danger text-canvas hover:bg-danger-hover",
    ghost: "bg-transparent text-primary hover:bg-primary-soft hover:text-primary-hover",
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;