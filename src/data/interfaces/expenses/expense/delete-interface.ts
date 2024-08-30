export interface IDeleteExpenseUseCase {
  execute(id: number): Promise<boolean>;
}
