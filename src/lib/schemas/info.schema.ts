import { z } from "zod";

export const infoSchema = z.object({
  gender: z.string().min(1, "Please select your gender"),
  fitness_level: z.string().min(1, "Please select your fitness level"),
  workout_location: z.string().min(1, "Please select your workout location"),
  preferred_training_days: z.string().min(1, "Please select training days"),
  height_cm: z
    .number()
    .min(100, "Height must be at least 100 cm")
    .max(250, "Height must be at most 250 cm"),
  weight_kg: z
    .number()
    .min(30, "Weight must be at least 30 kg")
    .max(300, "Weight must be at most 300 kg"),
  age: z
    .number()
    .min(10, "Age must be at least 10")
    .max(100, "Age must be at most 100"),
});

export type InfoFormData = z.infer<typeof infoSchema>;
