import { Star } from "lucide-react";
import {
  HEADER_RATING,
  HEADER_STATUS_ITEMS,
} from "@/lib/constants/home/headerStatus.constants";
import { useQuery } from "@tanstack/react-query";
import { getLandingStats } from "@/lib/api/landing.api";

function StatusItem({ value, label }) {
  return (
    <div>
      <p className="type-title-m weight-bold leading-none text-white">
        {value}
      </p>
      <p className="mt-2 type-body-m text-text-secondary">{label}</p>
    </div>
  );
}

function RatingItem({ rating = HEADER_RATING }) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Star className="fill-white text-white" size={22} />
        <p className="type-title-m weight-bold leading-none text-white">
          {rating.value}
        </p>
      </div>
      <p className="mt-2 type-body-m text-text-secondary">
        {rating.label}
      </p>
    </div>
  );
}

export default function HeaderStatus() {
  const { data: stats } = useQuery({
    queryKey: ["landingStats"],
    queryFn: getLandingStats,
  });

  const dynamicStatusItems = stats ? [
    { value: "+" + (stats.active_trainers || stats.trainers_count || "50"), label: "Active Trainers" },
    { value: "+" + (stats.happy_clients || stats.users_count || "2400"), label: "Happy Clients" },
    { value: "+" + (stats.sessions_completed || stats.sessions_count || "18,000"), label: "Sessions Completed" },
  ] : HEADER_STATUS_ITEMS;

  const dynamicRating = stats ? {
    value: stats.avg_rating || stats.rating || "4.9",
    label: "Avg. Rating",
  } : HEADER_RATING;

  return (
    <div className="mt-7 w-full max-w-4xl  ">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {dynamicStatusItems.map((item) => (
          <StatusItem key={item.label} label={item.label} value={item.value} />
        ))}
        <RatingItem rating={dynamicRating} />
      </div>
    </div>
  );
}
