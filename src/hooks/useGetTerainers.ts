import { useQuery } from "@tanstack/react-query";
import { getFilterResults, getFilterValues, getTerainers } from "@/lib/api/triners/TrainersApi";
import { getSearchResults } from "@/lib/api/triners/TrainersApi";
import { useSearchParams } from "react-router-dom";

// All Trainers
export const useGetTerainers = () => {
  const data = useQuery({ queryKey: ["getTerainers"], queryFn: getTerainers });
  return data;
};

// Search
export const useGetSearch = () => {
  const [Params] = useSearchParams();
  const search = Params.get("search") || "";

  return useQuery({
    queryKey: ["getSearch", search],
    queryFn: () => getSearchResults(search),
    enabled: !!search,
  });
};

// Filter
export const useGetFilter = (
  durationId: number,
  specializationId: number,
  enabled: boolean,
) => {
  return useQuery({
    queryKey: ["getFilter", durationId, specializationId],
    queryFn: () => getFilterResults(durationId, specializationId),
    enabled: enabled && !!durationId && !!specializationId,
  });
};


export const useGetFilterValues = () => {
  return useQuery({
    queryKey: ["getFilterValues",],
    queryFn: () => getFilterValues(),
  });
};

