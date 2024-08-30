export interface ICreateIncomeUseCase {
  execute(data: Omit<IIncome, "id_income">): Promise<IIncome>;
}
