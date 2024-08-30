export interface ILoadAllIncomeCategoriesUseCase {
    execute: () => Promise<IIncomeCategory[]>;
  }
  