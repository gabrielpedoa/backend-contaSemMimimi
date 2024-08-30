export interface ILoadAllExpenseCategoriesUseCase {
  execute(): Promise<IExpenseCategory[]>;
}
