import { CreateIncomeCategoryUseCase } from "../../../../../data/usecases/incomes/category/create";
import { IncomeCategoryRepository } from "../../../../../infra/repositories/incomes/category";

export function createIncomeCategoryUseCaseFactory() {
  const incomeCategoryRepository = new IncomeCategoryRepository();
  return new CreateIncomeCategoryUseCase(incomeCategoryRepository);
}
