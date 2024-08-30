import { IIncomeCategoryRepository } from "../../../../infra/interfaces/incomes/category-repository-interface";
import { NotFoundError } from "../../../../main/config/errors/notFound-error";
import { IUpdateIncomeCategoryUseCase } from "../../../interfaces/incomes/category/update-interface";

export class UpdateIncomeCategoryUseCase
  implements IUpdateIncomeCategoryUseCase
{
  constructor(private readonly incomeRepository: IIncomeCategoryRepository) {}

  async execute(data: IIncomeCategory) {
    const incomeCategory = await this.incomeRepository.loadById(
      data.id_category!
    );
    if (!incomeCategory) throw new NotFoundError("Income category not found");
    return await this.incomeRepository.update(data);
  }
}
