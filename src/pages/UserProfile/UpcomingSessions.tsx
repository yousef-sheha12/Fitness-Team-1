import { Link } from "react-router-dom";
import SessionCard from "../../components/common/UserProfile/SessionCard";

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

const mockSessions: Session[] = [
  {
    id: "1",
    sessionName: "Strength Training",
    trainerName: "Sarah Jenkins",
    date: "Tomorrow",
    time: "9:00 AM - 10:00 AM",
    location: "Downtown Gym",
  },
  {
    id: "2",
    sessionName: "Cardio Blast",
    trainerName: "Ahmed Nour",
    date: "Friday",
    time: "7:00 AM - 8:00 AM",
    location: "Online",
  },
  {
    id: "3",
    sessionName: "Flexibility & Core",
    trainerName: "Lina Hassan",
    date: "Saturday",
    time: "11:00 AM - 12:00 PM",
    location: "Maadi Sports Club",
  },
  {
    id: "4",
    sessionName: "Pilates",
    trainerName: "Lina Hassan",
    date: "Saturday",
    time: "11:00 AM - 12:00 PM",
    location: "Online",
  },
];

export default function UpcomingSessions({
  sessions,
  onReschedule,
  onViewDetails,
}: UpcomingSessionsProps) {
  const displaySessions = sessions.length > 0 ? sessions : mockSessions;

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

      <div className="flex flex-col gap-4 sm:mt-4">
        {displaySessions.map((session) => (
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
