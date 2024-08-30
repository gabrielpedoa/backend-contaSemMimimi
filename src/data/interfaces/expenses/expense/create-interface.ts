export interface ICreateExpenseUseCase {
  execute(data: Omit<IExpense, "id_expense">): Promise<IExpense>;
}
