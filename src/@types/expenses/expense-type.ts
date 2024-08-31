type IExpense = {
  id_expense?: number;
  description: string | null;
  category_id: number;
  due_date: number;
  created_at: Date;
  updated_at: Date;
  active: boolean;
  name: string;
  value: number | null;
};
