import { Clock, Flame, Package } from "lucide-react";
import StatBadge from "../../components/common/UserProfile/StatBadge";
import SessionsOverTime from "../../components/common/UserProfile/SessionOverTime";

interface ProgressActivityProps {
  sessionComplete: string;
  activePackage: number;
  nextSession: number;
}

export default function ProgressActivity({
  sessionComplete,
  activePackage,
  nextSession,
}: ProgressActivityProps) {
  return (
    <div className="flex flex-col gap-6 px-10">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold text-white">Progress & Activity</h2>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 mt-2">
        <StatBadge
          icon={<Flame size={38} />}
          label={"Current Streak"}
          value={String(sessionComplete)}
        />
        <StatBadge
          icon={<Package size={38} />}
          label={"Total Sessions"}
          value={activePackage}
        />
        <StatBadge
          icon={<Clock size={38} />}
          label={"Avg. Weekly"}
          value={nextSession}
        />
      </div>
      <SessionsOverTime />
    </div>
  );
}
