import { CreateExpenseUseCase } from "../../../../../data/usecases/expenses/expense/create";
import { ExpenseRepository } from "../../../../../infra/repositories/expenses/expense";

export function createExpenseUseCaseFactory() {
  const repository = new ExpenseRepository();
  return new CreateExpenseUseCase(repository);
}
