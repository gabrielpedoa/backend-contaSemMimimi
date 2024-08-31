import * as z from "zod";

export const createExpenseSchema = z.object({
  description: z.string().optional(),
  category_id: z
    .number({ required_error: "Category ID is required" })
    .int()
    .positive(),
  due_date: z.date({ required_error: "Due date is required" }),
  record_date: z.date({ required_error: "Record date is required" }),
  created_at: z.date({ required_error: "Creation date is required" }),
  updated_at: z.date({ required_error: "Update date is required" }),
  active: z.boolean({ required_error: "Active status is required" }),
});

export const updateExpenseSchema = z.object({
  description: z.string().optional(),
  category_id: z.number().int().positive().optional(),
  due_date: z.date().optional(),
  record_date: z.date().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  active: z.boolean().optional(),
});
