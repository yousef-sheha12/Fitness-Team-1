import { Star } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#1a1a1a] p-6">
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={18} className="fill-primary text-primary" />
        ))}
      </div>

      <p className="flex-1 text-lg text-left leading-6 text-zinc-300">
        {testimonial.text}
      </p>

      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-12 w-12 rounded-full object-cover"
        />

        <span className="text-sm font-semibold text-white">
          {testimonial.name}
        </span>
      </div>
    </article>
  );
}
