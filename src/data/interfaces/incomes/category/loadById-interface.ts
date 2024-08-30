export interface ILoadByIdIncomeCategoryUseCase {
  execute: (id: number | string) => Promise<IIncomeCategory | null>;
}
