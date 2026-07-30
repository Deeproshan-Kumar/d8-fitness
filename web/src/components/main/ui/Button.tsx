const Button: React.FC<ButtonProps> = ({
  children,
  ariaLabel,
  className = "",
  type = "button",
  disabled = false,
  variant = "primary",
  size = "md",
  onClick,
}) => {
  const baseClasses =
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm font-medium transition-colors duration-200 focus-ring disabled:pointer-events-none disabled:opacity-45";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-on-primary glow-primary hover:bg-primary-hover active:bg-primary-active",
    secondary:
      "border border-border-strong bg-surface-2 text-heading hover:border-primary/40 hover:bg-surface-3",
    tertiary: "justify-start! text-xs text-body hover:bg-surface-3 hover:text-heading",
    danger: "bg-danger text-canvas hover:bg-danger-hover",
    ghost: "bg-transparent text-primary hover:bg-primary-soft hover:text-primary-hover",
    icon: "border border-border bg-surface-2 text-quaternary hover:border-border-strong hover:text-heading transition-colors cursor-pointer focus-ring"
  };

  const sizeClasses = {
    xs: "px-2 py-1 text-xs",
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-sm",
    fit: "p-2.25"
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
