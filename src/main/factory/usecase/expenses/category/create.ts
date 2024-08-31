import { CreateExpenseCategoryUseCase } from "../../../../../data/usecases/expenses/category/create";
import { ExpenseCategoryRepository } from "../../../../../infra/repositories/expenses/category";

export function createExpenseCategoryUseCaseFactory() {
  const repository = new ExpenseCategoryRepository();
  return new CreateExpenseCategoryUseCase(repository);
}
