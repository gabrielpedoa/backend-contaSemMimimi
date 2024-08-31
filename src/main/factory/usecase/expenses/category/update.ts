import { UpdateExpenseCategoryUseCase } from "../../../../../data/usecases/expenses/category/update";
import { ExpenseCategoryRepository } from "../../../../../infra/repositories/expenses/category";

export function updateExpenseCategoryUseCaseFactory() {
  const repository = new ExpenseCategoryRepository();
  return new UpdateExpenseCategoryUseCase(repository);
}
