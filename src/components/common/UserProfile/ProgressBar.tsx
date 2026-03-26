interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.min((current / total) * 100, 100);

  return (
    <div className="flex flex-col gap-2">
      <span className="text-white text-2xl font-semibold">{current}</span>
      <div className="flex items-center justify-between text-xl">
        <span className="text-white text-xl font-normal">
          Sessions Remaining Out Of {total}
        </span>
        <span className="text-primary text-xl font-normal">
          {total - current} Completed
        </span>
      </div>
      <div className="w-full h-3 bg-[#D9D9D9] rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
