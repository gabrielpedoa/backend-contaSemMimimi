export interface IDeleteExpenseCategoryUseCase {
  execute(id: number | string): Promise<boolean>;
}
