export interface IDeleteIncomeUseCase {
  execute(id: number | string): Promise<boolean>;
}
