export interface IDeleteIncomeCategoryUseCase {
  execute: (id: number) => Promise<boolean>;
}
