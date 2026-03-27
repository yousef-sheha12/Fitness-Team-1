import WorkoutRow from "../../components/common/UserProfile/WorkoutRow";

const workouts = [
  {
    title: "Upper Body Strength",
    date: "Oct 18, 2024",
    duration: "60 min",
    cals: 420,
  },
  { title: "HIIT Cardio", date: "Oct 15, 2024", duration: "45 min", cals: 550 },
  {
    title: "Lower Body Power",
    date: "Oct 12, 2024",
    duration: "60 min",
    cals: 480,
  },
  {
    title: "Core & Stability",
    date: "Oct 10, 2024",
    duration: "40 min",
    cals: 310,
  },
  {
    title: "Full Body Circuit",
    date: "Oct 7, 2024",
    duration: "75 min",
    cals: 620,
  },
];

export default function WorkoutHistory() {
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
          {workouts.map((w) => (
            <WorkoutRow
              key={w.title}
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
