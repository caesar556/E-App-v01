import { z } from "zod";

export const registerSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long "),
});

export type Register = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().email("Invaild email address"),
  password: z.string().min(6, "Password must be at least 6 characters long "),
});

export type Login = z.infer<typeof loginSchema>;
