import WorkoutRow from "../../components/common/UserProfile/WorkoutRow";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getWorkoutHistory } from "@/lib/api/profile.api";
import useBookingStore from "@/lib/store/bookingStore";

export default function WorkoutHistory() {

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

  const { data: fetchedWorkouts, isLoading } = useQuery({
    queryKey: ["workoutHistory"],
    queryFn: getWorkoutHistory,
  });


  const workoutsArray = Array.isArray(fetchedWorkouts) ? fetchedWorkouts : [];
  const bookingWorkouts = allStoreBookings.map((b) => ({
    id: b.id,
    title: typeof b.package === "object" ? b.package?.name : b.package,
    date: b.date || b.bookedAt,
    duration: "TBD",
    cals: "TBD",
    isFromStore: true,
  }));


  const allWorkouts = [...workoutsArray, ...bookingWorkouts];

  if (isLoading) {
    return <div className="text-white mx-10">Loading workouts...</div>;
  }

  if (!allWorkouts || allWorkouts.length === 0) {
    return (
      <div className="flex flex-col gap-8 px-4 sm:px-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Workout History
          </h2>
          <p className="text-md pl-2 text-(--gray-color) mt-1">
            Your recent training sessions
          </p>
        </div>
        <div className="text-white text-center py-10">
          No workout history found.
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 px-4 sm:px-10">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Workout History
        </h2>
        <p className="text-md pl-2 text-(--gray-color) mt-1">
          Your recent training sessions
        </p>
      </div>

      <div className="border border-(--gray-color) rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-(--gray-color) bg-(--color-raised)/40">
          <span className="text-md font-bold uppercase tracking-widest text-(--gray-color)">
            Workout
          </span>
          <div className="flex items-center gap-8 pr-5">
            <span className="text-md font-bold uppercase tracking-widest text-(--gray-color)">
              Duration
            </span>
            <span className="text-md font-bold uppercase tracking-widest text-(--gray-color)">
              Calories
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 p-4">
          {allWorkouts.map((w) => (
            <WorkoutRow
              key={w.id || w.title}
              title={w.title}
              date={w.date}
              duration={w.duration}
              cals={w.cals}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
