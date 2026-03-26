import type { ReactNode } from "react";

interface InfoTagCardProps {
  icon: ReactNode;
  label: string;
  value: string;
}

export default function InfoTagCard({ icon, label, value }: InfoTagCardProps) {
  return (
    <div className="flex flex-col items-center gap-3 border-l border-cta-primary rounded-lg px-6 py-14 flex-1">
      <div className="flex items-center gap-2 text-text-secondary">
        <span>{icon}</span>
        <span className="text-2xl text-white">{label}</span>
      </div>
      <div className="w-full bg-[#5F97F60D] rounded-md px-4 py-2 text-center">
        <span className="text-white">{value}</span>
      </div>
    </div>
  );
}
