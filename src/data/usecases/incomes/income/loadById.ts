import { IIncomeRepository } from "../../../../infra/interfaces/incomes/income-repository-interface";
import { NotFoundError } from "../../../../main/config/errors/notFound-error";
import { ILoadByIdIncomeUseCase } from "../../../interfaces/incomes/income/loadById-interface";

export class LoadByIdIncomeUseCase implements ILoadByIdIncomeUseCase {
  constructor(private readonly incomeRepository: IIncomeRepository) {}

  async execute(id: number | string): Promise<IIncome | null> {
    const income = await this.incomeRepository.loadById(Number(id));
    if (!income) throw new NotFoundError("Income not found");
    return income;
  }
}
