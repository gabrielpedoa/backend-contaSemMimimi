export interface ICreateIncomeCategoryUseCase {
  execute: (
    data: Omit<IIncomeCategory, "id_category">
  ) => Promise<IIncomeCategory>;
}
