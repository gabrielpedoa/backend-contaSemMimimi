import { DeleteExpenseUseCase } from "../../../../../data/usecases/expenses/expense/delete";
import { ExpenseRepository } from "../../../../../infra/repositories/expenses/expense";

export function deleteExpenseUseCaseFactory() {
  const repository = new ExpenseRepository();
  return new DeleteExpenseUseCase(repository);
}
