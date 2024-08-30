import { IIncomeRepository } from "../../../../infra/interfaces/incomes/income-repository-interface";
import { NotFoundError } from "../../../../main/config/errors/notFound-error";
import { IDeleteIncomeUseCase } from "../../../interfaces/incomes/income/delete-interface";

export class DeleteIncomeUseCase implements IDeleteIncomeUseCase {
  constructor(private readonly incomeRepository: IIncomeRepository) {}

  async execute(id: number): Promise<boolean> {
    const income = await this.incomeRepository.loadById(id);
    if (!income) throw new NotFoundError("Income not found");
    return await this.incomeRepository.delete(id);
  }
}
