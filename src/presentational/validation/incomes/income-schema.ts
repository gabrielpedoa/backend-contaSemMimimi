import * as z from "zod";

export const createIncomeSchema = z.object({
  id_user: z.number({ required_error: "User ID is required" }).int().positive(),
  due_date: z.date({ required_error: "Due date is required" }),
  amount: z.number({ required_error: "Amount is required" }).positive(),
  type: z.string({ required_error: "Type is required" }),
  name: z.string({ required_error: "Name is required" }),
  obs: z.string().optional(),
});

export const updateIncomeSchema = z.object({
  category_id: z.number().int().positive().optional(),
  id_user: z.number().int().positive().optional(),
  due_date: z.date().optional(),
  amount: z.number().positive().optional(),
  type: z.string().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  active: z.boolean().optional(),
  name: z.string().optional(),
  obs: z.string().optional(),
});
