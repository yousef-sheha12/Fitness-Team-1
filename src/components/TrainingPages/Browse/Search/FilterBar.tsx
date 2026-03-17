import { Input } from "@/components/ui/input";
import { Funnel, ArrowUpDown, Search, X } from "lucide-react";
import FilterElemnts from "../Filter/FilterElemnts";
import { filteritems, items } from "@/lib/constants/PageTraning";
import { Button } from "@/components/ui/button";

const FilterBar = () => {
  return (
    <div className="bg-[#121212] lg:h-[380px] ">
      <div className="container mx-auto text-white ">
        <div className="mb-[66px]">
          <p className="fw-bold text-[40px] ">Browse Trainers</p>
          <p className="text-[24px]">
            Find the perfect trainer by browsing through our list of experts
          </p>
        </div>

        {/* Search */}
        <div className="flex mt-[40px] justify-between mt-[46px] mb-3">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <Search size={20} />
            </div>
            <Input
              placeholder="Search by name or specialty"
              className="pl-10 h-[50px] w-[737px]"
            />
          </div>

          {/* Filter */}
          <div className="flex gap-2">
            <FilterElemnts
              text="Filter"
              items={items}
              label="Filterd By"
              icon={<Funnel size={16} />}
            />

            <FilterElemnts
              text="Sort"
              items={items}
              label="Sort By"
              icon={<ArrowUpDown size={16} />}
            />
          </div>
        </div>

        {/* Clear */}

        <div className="flex justify-between items-center ">
          <div className="flex gap-2  items-center">
            {filteritems.map((ele) => (
              <Button
                className="bg-[#B6B6B54D] min-w-[170px] flex items-center gap-2 px-3 "
                key={ele.id}
              >
                <span className="w-2 h-2 rounded-full bg-red-600 shrink-0 inline-block" />
                <p>{ele.title}</p>
                <X size={16} />
              </Button>
            ))}
          </div>

          <p className="cursor-pointer">Clear Filter</p>
        </div>

      </div>
    </div>
  );
};

export default FilterBar;
