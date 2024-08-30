import { UpdateIncomeUseCase } from "../../../../../data/usecases/incomes/income/update";
import { IncomeRepository } from "../../../../../infra/repositories/incomes/income";

export function updateIncomeUseCaseFactory() {
  const incomeRepository = new IncomeRepository();
  return new UpdateIncomeUseCase(incomeRepository);
}
