export type TrainerResponse = {
  id: number;
  name: string;
  profile_image: string;
  bio: string;
  experience_years: number;
  location: string;
  rating: string;
  total_reviews: number;
  specializations: string[];
};

export type TrainerItem = {
  id: number;
  user_id: number;
  bio: string;
  experience_years: number;
  location: string;
  rating: string;
  total_reviews: number;
  created_at: string;
  updated_at: string;
  pivot: {
    specialization_id: number;
    trainer_id: number;
  };
  user: {
    id: number;
    name: string;
    email: string;
    role: string;
    phone: string;
    profile_image: string;
    status: string;
  };
};

export type SearchResponse = {
  id: number;
  name: string;
  trainers: TrainerItem[];
};

export type FilterTrainer = {
  id: number;
  user_id: number;
  bio: string;
  experience_years: number;
  location: string;
  rating: string;
  total_reviews: number;
  user: {
    id: number;
    name: string;
    email: string;
    profile_image: string;
  };
  specializations: {
    id: number;
    name: string;
  }[];
};
