import * as z from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z
    .string({ required_error: "Phone is required" })
    .min(10, "Phone number must be at least 10 characters long"),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address or type"),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters long"),
  role: z.number({ required_error: "Role type is required" }).int().positive(),
});

export const updateUserSchema = z.object({
  id_user: z.string(),
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(10, "Phone number must be at least 10 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.number().int().positive(),
  active: z.boolean(),
  created_at: z.date(),
  updated_at: z.date(),
});
