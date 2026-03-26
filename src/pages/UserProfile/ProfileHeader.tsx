import userAvatar from "@/assets/user2.jpg";
import StatBadge from "../../components/common/UserProfile/StatBadge";
import { CalendarCheck, Clock, Package } from "lucide-react";
import ActionButton from "../../components/common/UserProfile/ActionButton";

interface ProfileHeaderProps {
  name: string;
  member: number;
  sessionComplete: number;
  activePackage: string;
  nextSession: string;
  onEditProfile?: () => void;
}

export default function ProfileHeader({
  name,
  member,
  sessionComplete,
  activePackage,
  nextSession,
  onEditProfile,
}: ProfileHeaderProps) {
  return (
    <div className="flex flex-col gap-6 px-4 sm:px-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={userAvatar}
            alt={name}
            className="w-16 h-16 sm:w-22 sm:h-22 rounded-full object-cover shrink-0"
          />
          <div className="flex flex-col gap-1">
            <span className="text-2xl sm:text-4xl font-bold text-white">
              {name}
            </span>
            <span className="text-base sm:text-2xl text-white">
              Member since {member}
            </span>
          </div>
        </div>

        <ActionButton
          text="Edit profile"
          variant="outline"
          width="w-full sm:w-45"
          onClick={onEditProfile}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <StatBadge
          icon={<CalendarCheck className="w-6 h-6 sm:w-9 sm:h-9" />}
          label="Sessions Completed"
          value={String(sessionComplete)}
        />
        <StatBadge
          icon={<Package className="w-6 h-6 sm:w-9 sm:h-9" />}
          label="Active Package"
          value={activePackage}
        />
        <StatBadge
          icon={<Clock className="w-6 h-6 sm:w-9 sm:h-9" />}
          label="Next Session"
          value={nextSession}
        />
      </div>
    </div>
  );
}
