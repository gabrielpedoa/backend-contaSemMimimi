import { DeleteIncomeUseCase } from "../../../../../data/usecases/incomes/income/delete";
import { IncomeRepository } from "../../../../../infra/repositories/incomes/income";

export function deleteIncomeUseCaseFactory() {
  const incomeRepository = new IncomeRepository();
  return new DeleteIncomeUseCase(incomeRepository);
}
