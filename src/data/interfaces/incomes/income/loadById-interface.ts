export interface ILoadByIdIncomeUseCase {
  execute(id: number | string): Promise<IIncome | null>;
}
