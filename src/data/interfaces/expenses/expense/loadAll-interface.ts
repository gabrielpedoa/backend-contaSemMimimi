export interface ILoadAllExpensesUseCase {
  execute(): Promise<IExpense[]>;
}
