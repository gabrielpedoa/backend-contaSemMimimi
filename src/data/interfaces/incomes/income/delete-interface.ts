export interface IDeleteIncomeUseCase {
  execute(id: number): Promise<boolean>;
}
