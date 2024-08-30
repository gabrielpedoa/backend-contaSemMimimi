type IExpense = {
  id_expense?: number;
  description: string;
  category_id: number;
  due_date: Date;
  record_date: Date;
  created_at: Date;
  updated_at: Date;
  active: boolean;
};
