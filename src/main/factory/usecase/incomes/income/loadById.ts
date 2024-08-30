import { LoadByIdIncomeUseCase } from "../../../../../data/usecases/incomes/income/loadById";
import { IncomeRepository } from "../../../../../infra/repositories/incomes/income";

export function loadByIdIncomeUseCaseFactory() {
  const incomeRepository = new IncomeRepository();
  return new LoadByIdIncomeUseCase(incomeRepository);
}
