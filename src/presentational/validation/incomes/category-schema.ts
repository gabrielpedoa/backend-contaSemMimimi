import * as z from "zod";

export const createIncomeCategorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  created_at: z.date({ required_error: "Creation date is required" }),
  updated_at: z.date({ required_error: "Update date is required" }),
  active: z.boolean({ required_error: "Active status is required" }),
});

export const updateIncomeCategorySchema = z.object({
  id_category: z.string({ required_error: "Category ID is required" }),
  name: z.string().optional(),
  description: z.string().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  active: z.boolean().optional(),
});
