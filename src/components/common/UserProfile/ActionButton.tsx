interface ActionButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  className?: string;
  width?: string;
}

export default function ActionButton({
  text,
  onClick,
  variant = "primary",
  className = "",
  width = "w-fit",
}: ActionButtonProps) {
  const variantClasses =
    variant === "primary"
      ? "bg-primary border border-primary text-white hover:bg-primary/80"
      : "bg-[#121212] border border-primary text-white hover:bg-primary/10";

  return (
    <button
      onClick={onClick}
      className={`${width} px-6 py-2.5 text-sm font-semibold rounded-md transition-colors duration-200 cursor-pointer ${variantClasses} ${className}`}>
      {text}
    </button>
  );
}
