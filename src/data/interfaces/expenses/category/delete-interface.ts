export interface IDeleteExpenseCategoryUseCase {
  execute(id: number): Promise<boolean>;
}
