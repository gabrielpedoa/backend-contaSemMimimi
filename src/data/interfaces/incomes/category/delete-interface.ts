export interface IDeleteIncomeCategoryUseCase {
  execute: (id: number | string) => Promise<boolean>;
}
