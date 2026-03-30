import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import SearchDropDown from "./SearchDropDown";
import { useSearchParams } from "react-router-dom";

const SearchInp = () => {
  const [open, setOpen] = useState(false);
  const [Params, setParams] = useSearchParams();
  const [search, setSearch] = useState("");

  // Handle Search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    if (value) {
      setParams(new URLSearchParams({ search: value }));
    } else {
      setParams(new URLSearchParams());
    }
  };

  return (
    <div className="relative w-full mx-auto   sm:mx-0  sm:p-0 sm:w-[737px]">
      <div className="flex items-center gap-3 z-50 relative">
        <div className="relative flex-1">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search size={20} />
          </div>
          <Input
            placeholder="Search workouts"
            className="pl-10 h-[50px] w-full bg-[#1a1a1a] border-[#333] text-white placeholder:text-gray-500 rounded-md focus:border-[#ff5c5c] transition-all"
            value={search}
            onChange={(e) => handleSearch(e)}
            onFocus={() => setOpen(true)}
          />
        </div>

        {/* Cancel */}
        {open && (
          <span
            className="text-white cursor-pointer hover:text-[#ff5c5c] font-medium"
            onClick={() => {
              setOpen(false);
              setParams(new URLSearchParams());
              setSearch("");
            }}
          >
            Cancel
          </span>
        )}
      </div>

      {/* Search Dropdown */}
      {open && !search && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <SearchDropDown
            onSelect={(item) => {
              setSearch(item);
              setOpen(false);
              setParams(new URLSearchParams({ search: item }));
            }}
          />
        </>
      )}
    </div>
  );
};

export default SearchInp;
