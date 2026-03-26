import WorkoutRow from "../common/UserProfile/WorkoutRow";

export default function WorkoutHistory() {
  return (
    <div className="px-4 sm:px-10">
      <div className="border border-(--gray-color) rounded-xl p-4 sm:p-8 flex flex-col gap-4">
        <h2 className="text-2xl sm:text-3xl font-medium text-white">
          Recent Workout History
        </h2>

        <div className="flex flex-col gap-3">
          <WorkoutRow
            title="Upper Body Strength"
            date="Oct 18, 2024"
            duration="60 min"
            cals={420}
          />
          <WorkoutRow
            title="HIIT Cardio"
            date="Oct 15, 2024"
            duration="45 min"
            cals={550}
          />
          <WorkoutRow
            title="Lower Body Power"
            date="Oct 12, 2024"
            duration="60 min"
            cals={480}
          />
        </div>
      </div>
    </div>
  );
}
