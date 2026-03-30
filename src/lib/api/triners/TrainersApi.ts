import type {
  FilterTrainer,
  SearchResponse,
  TrainerResponse,
} from "@/lib/types/TrainigTypes";
import client from "../client";

// All Trainers
export const getTerainers = async (): Promise<
  TrainerResponse[] | undefined
> => {
  const response = await client.get("/trainers");
  return response.data.data;
};

// Search
export const getSearchResults = async (
  params: string,
): Promise<TrainerResponse[]> => {
  const response = await client.get("/search", {
    params: { search_value: params },
  });

  return response.data.data.flatMap((item: SearchResponse) =>
    item.trainers.map((trainer) => ({
      id: trainer.id,
      name: trainer.user.name,
      profile_image: trainer.user.profile_image,
      bio: trainer.bio,
      experience_years: trainer.experience_years,
      location: trainer.location,
      rating: trainer.rating,
    })),
  );
};

// Filter
export const getFilterResults = async (
  durationId: number,
  specializationId: number,
): Promise<TrainerResponse[]> => {
  const response = await client.get("/search/searchFilter", {
    data: {
      durationId,
      specializationId,
    },
  });
  console.log("filter response:", response.data);

  return response.data.data.map((trainer: FilterTrainer) => ({
    id: trainer.id,
    name: trainer.user.name,
    profile_image: trainer.user.profile_image,
    experience_years: trainer.experience_years,
    location: trainer.location,
    rating: trainer.rating,
  }));
};
