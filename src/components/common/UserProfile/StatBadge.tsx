import type { ReactNode } from "react";

interface StatBadgeProps {
  icon: ReactNode;
  label: string | number;
  value: string | number;
}

export default function StatBadge({ icon, label, value }: StatBadgeProps) {
  return (
    <div className="flex items-center gap-5 bg-[#FF4D4D0D] border border-cta-primary rounded-lg px-6 py-3 flex-1 w-full sm:w-auto">
      <span className="text-white-color">{icon}</span>
      <div className="flex flex-col gap-1">
        <span className="text-2xl">{label}</span>
        <span className="font-semibold text-2xl">{value}</span>
      </div>
    </div>
  );
}
