import { UpdateIncomeCategoryUseCase } from "../../../../../data/usecases/incomes/category/update";
import { IncomeCategoryRepository } from "../../../../../infra/repositories/incomes/category";

export function updateIncomeCategoryUseCaseFactory() {
  const incomeCategoryRepository = new IncomeCategoryRepository();
  return new UpdateIncomeCategoryUseCase(incomeCategoryRepository);
}
