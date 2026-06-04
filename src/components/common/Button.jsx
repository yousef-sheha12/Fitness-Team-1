import PropTypes from "prop-types";

export default function Button({
  text = "",
  width = "w-full",
  onClick,
  type = "button",
  icon,
  variant = "primary",
  className = "",
  iconPosition = "right",
  withShadow = true,
  disabled = false,
  ariaLabel,
}) {
  const variantClasses =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary/80"
      : variant === "outlinePrimary"
        ? "border border-cta-primary text-cta-primary bg-transparent hover:bg-cta-primary/10"
        : "border border-ring text-text-primary hover:bg-primary/10";

  const shadowStyle =
    variant === "primary" && withShadow
      ? { boxShadow: "0 10px 30px 0 rgba(255, 77, 77, 0.2)" }
      : undefined;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel ?? text}
      style={shadowStyle}
      className={`${width} mt-4 flex items-center justify-center gap-2 rounded-md py-3 font-bold transition disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses} ${className}`}
    >
      {icon && iconPosition === "left" ? icon : null}
      {text ? <span>{text}</span> : null}
      {icon && iconPosition === "right" ? icon : null}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  icon: PropTypes.node,
  variant: PropTypes.oneOf(["primary", "outlinePrimary", "outline"]),
  className: PropTypes.string,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  withShadow: PropTypes.bool,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
};
