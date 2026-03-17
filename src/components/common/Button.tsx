import type { ReactNode } from "react";

interface ButtonProps {
  text: string;
  width?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  icon?: ReactNode
}
export default function Button({
  text,
  width = "w-full",
  onClick,
  type = "button",
  icon
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ boxShadow: "0 10px 30px 0 rgba(255, 77, 77, 0.2)" }}
      className={`${width} flex items-center justify-center gap-2 bg-(--main-color) text-white font-bold py-3 rounded-md cursor-pointer mt-4 hover:opacity-90 transition`}>
      {text}
      {icon && icon}
    </button>
  );
}
