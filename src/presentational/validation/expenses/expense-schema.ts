import * as z from "zod";

export const createExpenseSchema = z.object({
  description: z.string().optional(),
  category_id: z
    .number({ required_error: "Category ID is required" })
    .int()
    .positive(),
  due_date: z
    .number({ required_error: "Due date is required" })
    .int()
    .positive(),
  name: z.string({ required_error: "Name is required" }).min(1),
});

export const updateExpenseSchema = z.object({
  description: z.string().optional(),
  category_id: z.number().int().positive().optional(),
  due_date: z.number().int().positive().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  active: z.boolean().optional(),
  name: z.string().min(1).optional(),
  value: z.number().optional(),
});
