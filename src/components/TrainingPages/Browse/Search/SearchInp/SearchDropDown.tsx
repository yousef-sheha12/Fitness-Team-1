import { popularSearches } from "@/lib/constants/PageTraning";

const SearchDropDown = ({ onSelect }: { onSelect: (item: string) => void }) => {
  return (
    <>
      <div className="absolute top-[60px] left-0 w-full bg-[#0f0f0f] border border-[#222] rounded-md shadow-2xl z-50 overflow-hidden">
        <div className="px-4 py-6 flex flex-col gap-8">


          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold text-xs uppercase tracking-widest px-1 pb-2 border-b border-[#222]">
              Popular
            </span>
            <div className="flex flex-col mt-3">
              {popularSearches.map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    onSelect(item);
                  }}
                  className="text-white font-bold py-3 px-2 cursor-pointer hover:bg-[#1a1a1a] hover:text-[#ff5c5c] rounded-md transition-all"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchDropDown;
