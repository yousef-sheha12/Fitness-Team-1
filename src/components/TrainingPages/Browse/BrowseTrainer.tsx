import FilterBar from "./Search/FilterBar";
import TopTrainer from "./TopTrainer/TopTrainer";

const BrowseTrainer = () => {
  return (
    <>
      <FilterBar />
      <div className="bg-[#121212] lg:h-[500px]">
        <TopTrainer />
      </div>
    </>
  );
};

export default BrowseTrainer;
