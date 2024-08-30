import { IIncomeRepository } from "../../../../infra/interfaces/incomes/income-repository-interface";
import { ICreateIncomeUseCase } from "../../../interfaces/incomes/income/create-interface";

export class CreateIncomeUseCase implements ICreateIncomeUseCase {
  constructor(private readonly incomeRepository: IIncomeRepository) {}

  async execute(data: Omit<IIncome, "id_income">): Promise<IIncome> {}
}
