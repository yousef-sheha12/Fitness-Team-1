import { Star } from "lucide-react";

export default function RatingCard({
  rating,
  review,
  name,
  image,
  width = "w-72",
}) {
  return (
    <div
      className={`flex flex-col gap-4 ${width} rounded-2xl p-6 bg-(--lightGrey-color) mb-9`}
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={22}
            className={
              i < rating
                ? "text-(--main-color) fill-(--main-color)"
                : "text-(--gray-color) fill-(--gray-color)"
            }
          />
        ))}
      </div>
      <p className="text-(--gray-color) text-sm leading-relaxed">{review}</p>
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-11 h-11 rounded-full object-cover"
        />

        <span className="text-white font-bold text-sm">{name}</span>
      </div>
    </div>
  );
}
