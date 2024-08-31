import { LoadByIdExpenseCategoryUseCase } from "../../../../../data/usecases/expenses/category/loadById";
import { ExpenseCategoryRepository } from "../../../../../infra/repositories/expenses/category";

export function loadByIdExpenseCategoryUseCaseFactory() {
  const repository = new ExpenseCategoryRepository();
  return new LoadByIdExpenseCategoryUseCase(repository);
}
