import { CreateIncomeUseCase } from "../../../../../data/usecases/incomes/income/create";
import { IncomeRepository } from "../../../../../infra/repositories/incomes/income";

export function createIncomeUseCaseFactory() {
  const incomeRepository = new IncomeRepository();
  return new CreateIncomeUseCase(incomeRepository);
}
