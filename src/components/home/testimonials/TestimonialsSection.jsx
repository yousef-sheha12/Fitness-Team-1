import SectionHighlight from "@/components/common/SectionHighlight";
import HeaderH2 from "../HeaderH2";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants/home/testimonials.constants";
import { useQuery } from "@tanstack/react-query";
import { getLandingReviews } from "@/lib/api/landing.api";

export default function TestimonialsSection() {
  const { data: reviews } = useQuery({
    queryKey: ["landingReviews"],
    queryFn: getLandingReviews,
  });

  const displayReviews = reviews && reviews.length > 0 ? reviews : TESTIMONIALS;

  const sectionBackgroundStyle = {
    backgroundColor: "var(--dark-mode-surfaces-bg-cards-bg-primary, #121212)",
    backgroundBlendMode: "overlay",
    backgroundImage:
      "linear-gradient(180deg, rgba(255, 77, 77, 0.8) 0%, #0A0A0A 100%)",
  };

  return (
    <section
      style={sectionBackgroundStyle}
      className="w-full px-4 py-14 md:py-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <SectionHighlight text="Testimonials" />

        <HeaderH2 text="Proven Results, " highlight="Trusted Voices" />

        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {displayReviews.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={{
              id: testimonial.id,
              name: testimonial.name || testimonial.user_name || "User",
              rating: testimonial.rating || 5,
              text: testimonial.text || testimonial.review || "",
              image: testimonial.image || testimonial.profile_image || "https://api.dicebear.com/7.x/avataaars/svg"
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}
