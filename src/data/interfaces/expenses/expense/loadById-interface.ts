export interface ILoadByIdExpenseUseCase {
  execute(id: number | number): Promise<IExpense | null>;
}
