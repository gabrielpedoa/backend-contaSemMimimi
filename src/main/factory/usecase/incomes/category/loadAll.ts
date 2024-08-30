import { LoadAllIncomeCategoryUseCase } from "../../../../../data/usecases/incomes/category/loadAll";
import { IncomeCategoryRepository } from "../../../../../infra/repositories/incomes/category";

export function loadAllIncomeCategoryUseCaseFactory() {
  const incomeCategoryRepository = new IncomeCategoryRepository();
  return new LoadAllIncomeCategoryUseCase(incomeCategoryRepository);
}
