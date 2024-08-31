import { LoadAllExpenseCategoryUseCase } from "../../../../../data/usecases/expenses/category/loadAll";
import { ExpenseCategoryRepository } from "../../../../../infra/repositories/expenses/category";

export function loadAllExpenseCategoryUseCaseFactory() {
  const repository = new ExpenseCategoryRepository();
  return new LoadAllExpenseCategoryUseCase(repository);
}
