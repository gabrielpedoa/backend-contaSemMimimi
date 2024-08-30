export interface IExpenseRepository {
  create(data: Omit<IExpense, "id_expense">): Promise<IExpense>;
  loadAll(): Promise<IExpense[]>;
  loadById(id: number): Promise<IExpense | null>;
  update(data: IExpense): Promise<IExpense>;
  delete(id: number): Promise<boolean>;
}
