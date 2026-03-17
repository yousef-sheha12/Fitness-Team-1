import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { images } from "@/lib/constants/PageTraning";
import { useEffect, useState } from "react";

const TopTrainer = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-[812px] mx-auto">
      <Carousel setApi={setApi} opts={{ align: "center", loop: true }}>
        <CarouselContent className="-ml-0">
          {images.map((img, index) => {
            const isActive = current - 1 === index;
            return (
              <CarouselItem 
                key={img.id} 
                className="basis-[60%] -ml-20 transition-all duration-500"
              >
                <div 
                  className={`relative w-full h-[300px] rounded-xl overflow-hidden transition-all duration-500 ${
                    isActive 
                      ? "scale-100 z-20 shadow-2xl" 
                      : "scale-90  z-10"
                  }`}
                >
                  <img
                    src={img.img}
                    alt=""
                    className="w-full  object-cover"
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <div className="flex justify-center items-center gap-4 mt-6">
          <CarouselPrevious className="static -translate-y-0" />
          <div className="flex gap-2">
            {images.map((_, index) => (
              <div
                onClick={() => api?.scrollTo(index)}
                key={index}
                className={`h-[10px] w-[10px] rounded-full transition-all duration-300 cursor-pointer ${
                  current - 1 === index ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
          <CarouselNext className="static -translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
};

export default TopTrainer;