import client from "./client";

interface ProfileData {
  name?: string;
  phone?: number;
  birthdate?: string;
  gender?: string;
  fitness_level?: string;
  training_type?: string;
  frequency?: string;
  goals?: string;
}

export const updateProfile = async (payload: ProfileData): Promise<void> => {
  await client.patch("/api/v1/profile", payload);
};
