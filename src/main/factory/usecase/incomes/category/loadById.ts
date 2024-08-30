import { LoadByIdIncomeCategoryUseCase } from "../../../../../data/usecases/incomes/category/loadById";
import { IncomeCategoryRepository } from "../../../../../infra/repositories/incomes/category";

export function loadByIdIncomeCategoryUseCaseFactory() {
  const incomeCategoryRepository = new IncomeCategoryRepository();
  return new LoadByIdIncomeCategoryUseCase(incomeCategoryRepository);
}
