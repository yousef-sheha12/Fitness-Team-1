import SectionHighlight from "@/components/common/SectionHighlight";
import Button from "@/components/common/Button";
import TrainerCard from "@/components/common/TrainerCard";
import { HOME_TRAINERS } from "@/lib/constants/home/trainers.constants";

export default function MeetTheExperts() {
  return (
    <div className="mx-auto w-full max-w-7xl flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionHighlight text="our trainers" />

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-4 lg:gap-0">
        <h2 className="mt-4 text-left text-3xl sm:text-4xl lg:text-h1 font-bold">
          Meet the <span className="text-cta-primary">Experts</span>
        </h2>
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            className="h-12 sm:h-14 rounded-2xl py-0"
            text="View All Trainers"
            variant="outlinePrimary"
            width="w-full sm:w-auto"
            withShadow={false}
          />
        </div>
      </div>

      <div className="mt-8 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {HOME_TRAINERS.map((trainer) => (
          <TrainerCard
            key={trainer.name}
            image={trainer.image}
            name={trainer.name}
            rating={trainer.rating}
            experience_years={trainer.experience_years || 0}
            specialties={trainer.specialties}
            location={trainer.location}
            id={trainer.id || 1}
          />
        ))}
      </div>
    </div>
  );
}
