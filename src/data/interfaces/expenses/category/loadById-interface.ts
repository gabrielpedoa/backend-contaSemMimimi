export interface ILoadByIdExpenseCategoryUseCase {
  execute(id: number | string): Promise<IExpenseCategory | null>;
}
