import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Funnel } from "lucide-react";
import { specializations, experienceYears } from "@/lib/constants/PageTraning";
import Button from "@/components/common/Button";
import { useFilterContext } from "@/context/FilterContext";

const FilterElemnts = () => {
  const [open, setOpen] = useState(false);
  const {
    
    durationId,
    specializationId,
    setdurationIdr,
    setSpecializationId,
    setEnabled,
  } = useFilterContext()!;

  const handelFilter = () => {
    setEnabled(true);
    setOpen(false);
  };
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer bg-[#B6B6B533]">
        <Funnel size={16} />
        <p>Filter</p>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        side="bottom"
        onInteractOutside={() => setOpen(false)}
        avoidCollisions={false}
        className="
          fixed  -left-23 w-screen
          sm:relative  sm:w-[400px]
          md:w-[500px] md:left-0 w-screen sm:max-w-[500px]
          bg-[#0f0f0f] border-[#222] p-0 rounded-none sm:rounded-md
        "
        style={{ position: undefined }}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#222]">
          <div className="w-10 md:w-12"></div>

          <span className="font-bold text-lg">Filter</span>

          <span
            className="text-accent cursor-pointer text-sm font-medium w-10 md:w-12 text-right"
            onClick={() => setOpen(false)}
          >
            Close
          </span>
        </div>

        {/* Duration */}
        <div className="px-6 py-4 flex flex-col">
          <span className="  font-semibold my-[24px]">Duration</span>

          {experienceYears.slice(0, 1).map((experienceYear) => (
            <div
              key={experienceYear.value}
              onClick={() => setdurationIdr(experienceYear.id)}
              className={`flex items-center justify-between px-2 py-4 cursor-pointer transition-all mb-4 ${
                durationId === experienceYear.id
                  ? "text-whiter bg-primary"
                  : "text-accent-foreground hover:text-accent"
              }`}
            >
              <span>{experienceYear.label}</span>
              {durationId === experienceYear.id && (
                <span>{experienceYear.value} ✓</span>
              )}
            </div>
          ))}

          {experienceYears.slice(1, 5).map((experienceYear) => (
            <div
              key={experienceYear.value}
              onClick={() => setdurationIdr(experienceYear.id)}
              className={`flex items-center justify-between px-2 py-4 cursor-pointer transition-all border  border-[#333]${
                durationId === experienceYear.id
                  ? "text-whiter bg-primary"
                  : "text-accent-foreground hover:text-accent"
              }`}
            >
              <span>{experienceYear.label}</span>
              {durationId === experienceYear.id && (
                <span>{experienceYear.value} ✓</span>
              )}
            </div>
          ))}
        </div>

        {/* typ */}
        <div className="border-t border-[#222] px-6 py-4">
          <p className="text-accent-foreground font-semibold">Type</p>
          <div className="flex flex-wrap gap-3 my-4">
            {specializations.map((specialization) => (
              <button
                key={specialization.id}
                onClick={() => setSpecializationId(specialization.id)}
                className={`px-6 py-2 cursor-pointer border transition-all duration-300 ${
                  specializationId === specialization.id
                    ? "bg-primary border-primary text-accent-foreground"
                    : "bg-transparent border-[#333] text-accent-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {specialization.name}
              </button>
            ))}
          </div>
        </div>

        <div className="px-6 pb-6">
          <Button text="Show Results" onClick={handelFilter} />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterElemnts;
