import { filteritems } from "@/lib/constants/PageTraning";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import FilterElemnts from "./Filter/FilterElemnts";
import SearchInp from "./SearchInp/SearchInp";

const FilterBar = () => {
  return (
    <div className=" lg:h-[380px] ">
      <div className="container mx-auto text-white px-4 ">
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <p className="font-bold text-2xl sm:text-3xl lg:text-4xl">
            Browse Trainers
          </p>

          <p className=" sm:text-lg lg:text-xl mt-2">
            Find the perfect trainer by browsing through our list of experts
          </p>
        </div>

        {/* Search */}
        <div className="flex flex-wrap mx-auto  justify-between mt-[46px] mb-3 lg:">
          <SearchInp />

          {/* Filter */}
          <div className="my-10 lg:my-0 md:ml-auto lg:ml-0">
            <FilterElemnts />
          </div>
        </div>

        {/* Clear */}

        <div className="flex flex-wrap justify-between items-center gap-3">
          <div className="flex flex-wrap gap-2">
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
