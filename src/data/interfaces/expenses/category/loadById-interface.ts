export interface ILoadByIdExpenseCategoryUseCase {
  execute(id: number): Promise<IExpenseCategory | null>;
}
