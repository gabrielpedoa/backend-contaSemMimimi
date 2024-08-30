export interface ILoadAllIncomesUseCase {
  execute(): Promise<IIncome[]>;
}
