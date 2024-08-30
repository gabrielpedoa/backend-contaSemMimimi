export interface ILoadByIdIncomeCategoryUseCase {
    execute: (id: number) => Promise<IIncomeCategory | null>;
  }
  