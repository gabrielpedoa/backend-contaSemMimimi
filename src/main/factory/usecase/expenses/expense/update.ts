import { UpdateExpenseUseCase } from "../../../../../data/usecases/expenses/expense/update";
import { ExpenseRepository } from "../../../../../infra/repositories/expenses/expense";

export function updateExpenseUseCaseFactory() {
  const repository = new ExpenseRepository();
  return new UpdateExpenseUseCase(repository);
}
