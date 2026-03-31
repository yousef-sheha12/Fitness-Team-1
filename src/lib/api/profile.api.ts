import client from "./client";

interface FitnessProfile {
  gender: string;
  age: number;
  height_cm: number;
  weight_kg: number;
  fitness_goal: string;
  fitness_level: string;
  workout_location: string;
  preferred_training_days: string;
}

export const saveFitnessProfile = async (
  payload: FitnessProfile,
): Promise<void> => {
  await client.post("/profile/fitness-profile", payload);
};
