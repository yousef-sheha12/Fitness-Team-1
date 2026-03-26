import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email"),
    phone: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .regex(/^\+?[0-9]+$/, "Invalid phone number"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });

export type signUpFormData = z.infer<typeof signUpSchema>;
