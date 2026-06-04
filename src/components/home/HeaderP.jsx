import { cn } from "@/lib/utils";

const textAlignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

export default function HeaderP({ children, textAlign = "left", className }) {
  return (
    <p
      className={cn(
        "text-sm md:text-lg font-light text-text-secondary mt-2 max-w-2xl",
        textAlignClasses[textAlign],
        className,
      )}
    >
      {children}
    </p>
  );
}
