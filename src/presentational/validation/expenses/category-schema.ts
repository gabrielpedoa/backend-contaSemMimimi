import * as z from "zod";

export const createExpenseCategorySchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  description: z.string({ required_error: "Description is required" }),
});

export const updateExpenseCategorySchema = z.object({
  id_category: z.string({ required_error: "Category ID is required" }),
  name: z.string().optional(),
  description: z.string().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  active: z.boolean().optional(),
});
