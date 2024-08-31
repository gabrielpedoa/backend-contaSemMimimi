import { LoadByIdExpenseUseCase } from "../../../../../data/usecases/expenses/expense/loadById";
import { ExpenseRepository } from "../../../../../infra/repositories/expenses/expense";

export function loadByIdExpenseUseCaseFactory() {
  const repository = new ExpenseRepository();
  return new LoadByIdExpenseUseCase(repository);
}
