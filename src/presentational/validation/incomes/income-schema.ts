import * as z from "zod";

export const createIncomeSchema = z.object({
  id_user: z.number({ required_error: "User ID is required" }).int().positive(),
  entry_date: z.number({ required_error: "Entry date is required" }),
  amount: z.number({ required_error: "Amount is required" }).positive(),
  category_id: z.number({ required_error: "Amount is required" }).int().positive(),
  type: z.string({ required_error: "Type is required" }),
  name: z.string({ required_error: "Name is required" }),
  obs: z.string().optional(),
});

export const updateIncomeSchema = z.object({
  category_id: z.number().int().positive().optional(),
  id_user: z.number().int().positive().optional(),
  entry_date: z.number().optional(),
  amount: z.number().positive().optional(),
  type: z.string().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  active: z.boolean().optional(),
  name: z.string().optional(),
  obs: z.string().optional(),
});
