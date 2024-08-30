export interface IUpdateExpenseUseCase {
  execute(data: IExpense): Promise<IExpense>;
}
