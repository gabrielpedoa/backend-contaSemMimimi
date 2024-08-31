import { LoadAllExpenseUseCase } from "../../../../../data/usecases/expenses/expense/loadAll";
import { ExpenseRepository } from "../../../../../infra/repositories/expenses/expense";

export function loadAllExpenseUseCaseFactory() {
  const repository = new ExpenseRepository();
  return new LoadAllExpenseUseCase(repository);
}
