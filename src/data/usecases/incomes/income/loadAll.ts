import { IIncomeRepository } from "../../../../infra/interfaces/incomes/income-repository-interface";
import { ILoadAllIncomesUseCase } from "../../../interfaces/incomes/income/loadAll-interface";

export class LoadAllIncomesUseCase implements ILoadAllIncomesUseCase {
  constructor(private readonly incomeRepository: IIncomeRepository) {}
  async execute(): Promise<IIncome[]> {
    return this.incomeRepository.loadAll();
  }
}
