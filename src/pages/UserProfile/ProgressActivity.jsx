import { Clock, Flame, Package } from "lucide-react";
import StatBadge from "../../components/common/UserProfile/StatBadge";
import SessionsOverTime from "../../components/common/UserProfile/SessionOverTime";
import { useQuery } from "@tanstack/react-query";
import { getProgressActivity } from "@/lib/api/profile.api";

export default function ProgressActivity() {
  const { data: progress, isLoading } = useQuery({
    queryKey: ["progressActivity"],
    queryFn: getProgressActivity,
  });

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6 px-4 sm:px-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Progress & Activity
        </h2>
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 px-4 sm:px-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">
        Progress & Activity
      </h2>

      <div className="flex flex-col sm:flex-row gap-4">
        <StatBadge
          icon={<Flame size={24} />}
          label="Current Streak"
          value={progress?.streak || "0 Weeks"}
        />

        <StatBadge
          icon={<Package size={24} />}
          label="Total Sessions"
          value={progress?.total_sessions || 0}
        />

        <StatBadge
          icon={<Clock size={24} />}
          label="Avg. Weekly"
          value={progress?.avg_weekly || 0}
        />
      </div>

      <SessionsOverTime />
    </div>
  );
}
