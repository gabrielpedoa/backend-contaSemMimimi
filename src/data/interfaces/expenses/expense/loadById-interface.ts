export interface ILoadByIdExpenseUseCase {
  execute(id: number): Promise<IExpense | null>;
}
