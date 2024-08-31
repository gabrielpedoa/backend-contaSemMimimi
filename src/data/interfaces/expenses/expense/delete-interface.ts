export interface IDeleteExpenseUseCase {
  execute(id: number | string): Promise<boolean>;
}
