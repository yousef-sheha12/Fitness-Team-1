import { Link } from "react-router-dom";
import SessionCard from "../common/UserProfile/SessionCard";

interface Session {
  id: string;
  sessionName: string;
  trainerName: string;
  date: string;
  time: string;
  location: string;
}

interface UpcomingSessionsProps {
  sessions: Session[];
  onReschedule?: (id: string) => void;
  onViewDetails?: (id: string) => void;
}

export default function UpcomingSessions({
  sessions,
  onReschedule,
  onViewDetails,
}: UpcomingSessionsProps) {
  return (
    <div className="flex flex-col gap-6 px-4 sm:px-10">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-white">
          Upcoming Sessions
        </h2>
        <Link
          to="/sessions/past"
          className="text-sm sm:text-2xl font-semibold underline text-primary hover:text-primary/80 transition-colors duration-200 shrink-0">
          View Past Sessions
        </Link>
      </div>

      <div className="flex flex-col gap-4 mt-4 sm:mt-8">
        {sessions.map((session) => (
          <SessionCard
            key={session.id}
            sessionName={session.sessionName}
            trainerName={session.trainerName}
            date={session.date}
            time={session.time}
            location={session.location}
            onReschedule={() => onReschedule?.(session.id)}
            onViewDetails={() => onViewDetails?.(session.id)}
          />
        ))}
      </div>
    </div>
  );
}
