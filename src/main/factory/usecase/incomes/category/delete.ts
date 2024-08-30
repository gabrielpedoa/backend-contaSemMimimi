import { DeleteIncomeCategoryUseCase } from "../../../../../data/usecases/incomes/category/delete";
import { IncomeCategoryRepository } from "../../../../../infra/repositories/incomes/category";

export function deleteIncomeCategoryUseCaseFactory() {
  const incomeCategoryRepository = new IncomeCategoryRepository();
  return new DeleteIncomeCategoryUseCase(incomeCategoryRepository);
}
