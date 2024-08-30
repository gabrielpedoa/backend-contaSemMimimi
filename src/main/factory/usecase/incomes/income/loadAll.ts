import { LoadAllIncomesUseCase } from "../../../../../data/usecases/incomes/income/loadAll";
import { IncomeRepository } from "../../../../../infra/repositories/incomes/income";

export function loadAllIncomeUseCaseFactory() {
  const incomeRepository = new IncomeRepository();
  return new LoadAllIncomesUseCase(incomeRepository);
}
