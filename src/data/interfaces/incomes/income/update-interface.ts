export interface IUpdateIncomeUseCase {
  execute(data: IIncome): Promise<IIncome>;
}
