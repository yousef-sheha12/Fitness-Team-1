interface WorkoutRowProps {
    title: string;
    date: string;
    duration: string;
    cals: number;
}

export default function WorkoutRow({ title, date, duration, cals }: WorkoutRowProps) {
  return (
    <div className="flex items-center justify-between bg-(--color-raised) rounded-xl px-6 py-5">
      <div className="flex flex-col gap-1">
        <span className="text-white text-xl">{title}</span>
        <span className="text-md text-(--gray-color)">{date}</span>
      </div>

      <div className="flex items-center gap-6">
        <span className="text-white text-xl">{duration}</span>
        <span className="text-primary text-xl">
          {cals} kcal
        </span>
      </div>
    </div>
  );
}
