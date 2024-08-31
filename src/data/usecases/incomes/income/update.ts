import { IIncomeRepository } from "../../../../infra/interfaces/incomes/income-repository-interface";
import { NotFoundError } from "../../../../main/config/errors/notFound-error";
import { IUpdateIncomeUseCase } from "../../../interfaces/incomes/income/update-interface";

export class UpdateIncomeUseCase implements IUpdateIncomeUseCase {
  constructor(private readonly incomeRepository: IIncomeRepository) {}
  async execute(data: IIncome): Promise<IIncome> {
    const { id_income, ...rest } = data;
    const existsIncome = await this.incomeRepository.loadById(
      Number(id_income!)
    );
    if (!existsIncome) throw new NotFoundError("Income not found");
    return await this.incomeRepository.update({
      id_income: Number(id_income),
      ...rest,
    });
  }
}
