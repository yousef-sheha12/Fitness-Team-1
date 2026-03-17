import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
interface FilterElementsProps {
  text: string;
  items: { value: string; label: string }[];
  label?: string;
  icon: React.ReactNode; 
}
const FilterElemnts = ({ text, items, label, icon }: FilterElementsProps) => {
  const [selected, setSelected] = useState("all");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer  bg-[#B6B6B533]">
        {icon}
        <p>{text}</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="bottom" avoidCollisions={false}>
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        {items.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => setSelected(item.value)}
            className={selected === item.value ? "bg-accent" : ""}
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterElemnts;
