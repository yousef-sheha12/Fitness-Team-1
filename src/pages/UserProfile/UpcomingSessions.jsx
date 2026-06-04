import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import SessionCard from "../../components/common/UserProfile/SessionCard";
import { useQuery } from "@tanstack/react-query";
import { getProfileSessions } from "@/lib/api/profile.api";
import useBookingStore from "@/lib/store/bookingStore";

export default function UpcomingSessions({ onReschedule, onViewDetails }) {

  const initBookingsFromStorage = useBookingStore(
    (state) => state.initBookingsFromStorage,
  );
  const storeBookings = useBookingStore((state) => state.bookings);


  const [, setForceUpdate] = React.useState(0);

  useEffect(() => {

    const unsubscribe = useBookingStore.subscribe(() => {
      setForceUpdate((k) => k + 1);
    });

    initBookingsFromStorage();
    return () => unsubscribe();
  }, [initBookingsFromStorage]);


  const localStorageBookings = (() => {
    try {
      const stored = localStorage.getItem("userBookings");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  })();


  const allStoreBookings =
    storeBookings?.length > 0 ? storeBookings : localStorageBookings;

  const { data: fetchedSessions, isLoading } = useQuery({
    queryKey: ["profileSessions"],
    queryFn: getProfileSessions,
  });


  const sessionsArray = Array.isArray(fetchedSessions) ? fetchedSessions : [];


  const allSessions = [
    ...sessionsArray,
    ...allStoreBookings.map((b) => ({
      id: b.id,
      sessionName: typeof b.package === "object" ? b.package?.name : b.package,
      trainerName: b.trainer?.name || b.trainer,
      date: b.date,
      time: b.time,
      location: "TBD",
      isFromStore: true,
    })),
  ];

  return (
    <div className="flex flex-col gap-6 px-4 sm:px-10">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-white">
          Upcoming Sessions
        </h2>
        <Link
          to="/sessions/past"
          className="text-sm sm:text-2xl font-semibold underline text-primary hover:text-primary/80 transition-colors duration-200 shrink-0"
        >
          View Past Sessions
        </Link>
      </div>

      {isLoading ? (
        <div className="text-white">Loading sessions...</div>
      ) : allSessions && allSessions.length > 0 ? (
        <div className="flex flex-col gap-4 sm:mt-4">
          {allSessions.map((session) => (
            <SessionCard
              key={session.id}
              sessionName={
                session.sessionName || session.session_name || session.name
              }
              trainerName={session.trainerName || session.trainer_name}
              date={session.date}
              time={session.time}
              location={session.location}
              onReschedule={() => onReschedule?.(session.id)}
              onViewDetails={() => onViewDetails?.(session.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-white text-center py-10">
          No upcoming sessions found.
        </div>
      )}
    </div>
  );
}
