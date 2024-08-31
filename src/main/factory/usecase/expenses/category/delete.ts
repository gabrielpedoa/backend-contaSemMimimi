import { DeleteExpenseCategoryUseCase } from "../../../../../data/usecases/expenses/category/delete";
import { ExpenseCategoryRepository } from "../../../../../infra/repositories/expenses/category";

export function deleteExpenseCategoryUseCaseFactory() {
  const repository = new ExpenseCategoryRepository();
  return new DeleteExpenseCategoryUseCase(repository);
}
