import { Bookmark } from "lucide-react";
import Carousels from "./Carousel";

const TopTrainer = () => {
  return (
    <>
      <div className="w-full max-w-4xl mx-auto mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6">
        <p className="text-white text-center text-xl sm:text-2xl lg:text-3xl mb-8 md:mb-12 lg:mb-16 font-bold">
          Our top
          <span className="relative inline-flex items-center justify-center align-middle mx-1">
            <Bookmark size={24} className="text-red-600 sm:size-[32px]" />
            <span className="absolute text-sm font-bold pb-1">5</span>
          </span>
          Trainers
        </p>
      </div>
      <Carousels />
    </>
  );
};

export default TopTrainer;
