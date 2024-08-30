export interface ILoadByIdIncomeUseCase {
  execute(id: number): Promise<IIncome | null>;
}
