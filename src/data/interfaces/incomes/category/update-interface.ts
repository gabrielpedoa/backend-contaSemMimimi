export interface IUpdateIncomeCategoryUseCase {
  execute: (data: IIncomeCategory) => Promise<IIncomeCategory>;
}
